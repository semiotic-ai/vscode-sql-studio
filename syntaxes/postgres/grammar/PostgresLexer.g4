lexer grammar PostgresLexer;

import SymbolsLexer, KeywordsLexer, FunctionsLexer;

@members {
/* This field stores the tags which are used to detect the end of a dollar-quoted string literal.
*/
   	private _tags: any[] = [];
}


BlockComment
    :   '/*' (BlockComment |.)*? '*/' -> channel(HIDDEN)
    ;

LineComment
    :   '--' ~[\r\n]* -> channel(HIDDEN)
    ;

// must follow all explicitly defined operators and comments
// so that they are matched first
OP_CHARS
    // may not end with + or -
    : OperatorBasic+ OperatorBasicEnd
    // may end with any character but must include at least one of OperatorSpecial
    | (OperatorBasic | OperatorSpecial)* OperatorSpecial (OperatorBasic | OperatorSpecial)*
    ;

fragment
OperatorBasic
    : [+*<>=]
    // check so that comment start sequences are not matched by this
    | '-' { String.fromCharCode(this._input.LA(1)) !== '-' }?
    | '/' { String.fromCharCode(this._input.LA(1)) !== '*' }?;
fragment
OperatorBasicEnd: [*/<>=];
fragment
OperatorSpecial: [~!@#%^&|`?];

NUMBER_LITERAL : Digit+;

fragment
Digit : '0'..'9';

REAL_NUMBER
    // fail double dots into a separate token
    // otherwise 1..10 would lex into 2 numbers
    :   Digit+ '.' { String.fromCharCode(this._input.LA(1)) !== '.' }?
    |   Digit+ '.' Digit+ EXPONENT?
    |   Digit+ '.' EXPONENT
    |   '.' Digit+ EXPONENT?
    |   Digit+ EXPONENT
    ;

DOLLAR_NUMBER
    : DOLLAR NUMBER_LITERAL
    ;

/*
===============================================================================
 Identifiers
===============================================================================
*/

Identifier
    : IdentifierStartChar IdentifierChar*
    // always lowercase unquoted ids
        { this.text = this.text.toLowerCase(); }
    ;
fragment
IdentifierStartChar
    : // these are the valid identifier start characters below 0x7F
    [a-zA-Z_]
    | // these are the valid characters from 0x80 to 0xFF
    [\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]
    | // these are the letters above 0xFF which only need a single UTF-16 code unit
    [\u0100-\uD7FF\uE000-\uFFFF] { RegExp(/^\p{L}/,'u').test(String.fromCharCode(this._input.LA(-1))) }?
    | // letters which require multiple UTF-16 code units
    [\uD800-\uDBFF] [\uDC00-\uDFFF] { RegExp(/^\p{L}/,'u').test(String.fromCharCode((this._input.LA(-2)) + String.fromCharCode(this._input.LA(-1)).codePointAt(0)!)) }?
    ;
fragment
IdentifierChar
    : StrictIdentifierChar
    | '$'
    ;
fragment
StrictIdentifierChar
    : IdentifierStartChar
    | [0-9]
    ;

/* Quoted Identifiers
*
* These are divided into four separate tokens, allowing distinction of valid quoted identifiers from invalid quoted
* identifiers without sacrificing the ability of the lexer to reliably recover from lexical errors in the input.
*/
QuotedIdentifier
    : UnterminatedQuotedIdentifier '"'
    // unquote so that we may always call getText() and not worry about quotes
        {
           const __tx = this.text;
		   this.text = (__tx.substring(1, __tx.length - 1).replace("\"\"", "\""));
        }
    ;
// This is a quoted identifier which only contains valid characters but is not terminated
fragment UnterminatedQuotedIdentifier
    : '"'
    ( '""' | ~[\u0000"] )*
    ;
/*
===============================================================================
 Literal
===============================================================================
*/

// Some Unicode Character Ranges
fragment
Control_Characters                  :   '\u0001' .. '\u0008' | '\u000B' | '\u000C' | '\u000E' .. '\u001F';
fragment
Extended_Control_Characters         :   '\u0080' .. '\u009F';

Character_String_Literal
    : [eEnNxXbB]? Single_String (String_Joiner Single_String)*
    ;

fragment
Single_String
    : QUOTE_CHAR ( ~'\'' | '\'\'')* QUOTE_CHAR
    ;

fragment
String_Joiner
    :  ((Space | Tab | White_Space | LineComment)* New_Line)+ (Space | Tab | White_Space)*
    ;

fragment
EXPONENT : ('e'|'E') ('+'|'-')? Digit+ ;

// Dollar-quoted String Constants (§4.1.2.4)
BeginDollarStringConstant
    : '$' Tag? '$' {this._tags.push(this.text);} -> pushMode(DollarQuotedStringMode)
    ;

fragment
Tag
    : IdentifierStartChar StrictIdentifierChar*
    ;


/*
===============================================================================
 Whitespace Tokens
===============================================================================
*/

Space
  : ' ' -> channel(HIDDEN)
  ;

White_Space
  : ( Control_Characters  | Extended_Control_Characters )+ -> channel(HIDDEN)
  ;

New_Line
    : ('\u000D' | '\u000D'? '\u000A') -> channel(HIDDEN)
    ;

Tab
    : '\u0009' -> channel(HIDDEN)
    ;

BOM: '\ufeff';

BAD
  : .
  ;

mode DollarQuotedStringMode;
Text_between_Dollar
   : ~'$'+
    | // this alternative improves the efficiency of handling $ characters within a dollar-quoted string which are
    // not part of the ending tag.
    '$' ~'$'*
    ;

EndDollarStringConstant
        : '$' Tag? '$' { this.text === this._tags[this._tags.length - 1] }? { this._tags.pop(); } -> popMode
    ;