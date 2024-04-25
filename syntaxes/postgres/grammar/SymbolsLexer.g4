lexer grammar SymbolsLexer;

// Cast Operator
CAST_EXPRESSION : ':' ':';   // first operator rule, sync with CustomSQLAntlrErrorStrategy

EQUAL : '=';
COLON :  ':';
SEMI_COLON :  ';';
COMMA : ',';
NOT_EQUAL : '<>' | '!=';
LTH : '<';
LEQ : '<=';
GTH : '>';
GEQ : '>=';
LEFT_PAREN :  '(';
RIGHT_PAREN : ')';
PLUS  : '+';
MINUS : '-';
MULTIPLY: '*';
DIVIDE  : '/';
MODULAR : '%';
EXP : '^';

DOT : '.';
QUOTE_CHAR : '\'';
DOUBLE_QUOTE : '"';
DOLLAR : '$';
LEFT_BRACKET : '[';
RIGHT_BRACKET : ']';

EQUAL_GTH : '=>';
COLON_EQUAL : ':=';

LESS_LESS : '<<';
GREATER_GREATER : '>>';
DOUBLE_DOT: '..';
HASH_SIGN: '#';
