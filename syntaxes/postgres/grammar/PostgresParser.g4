parser grammar PostgresParser;

import FunctionsParser;

options {
    language=Java;
    tokenVocab=PostgresLexer;
}

// to start parsing, it is recommended to use only rules with EOF
// this eliminates the ambiguous parsing options and speeds up the process
/******* Start symbols *******/

sql
    : BOM? SEMI_COLON* (select_stmt (SEMI_COLON+ | EOF))* EOF
    ;

/******* END Start symbols *******/

/*
===============================================================================
  5.2 <token and separator>

  Specifying lexical units (tokens and separators) that participate in SQL language
===============================================================================
*/

id_token
  : Identifier | QuotedIdentifier | tokens_nonkeyword;

/*
  old rule for default old identifier behavior
  includes types
*/
identifier
    : id_token
    | tokens_nonreserved
    | tokens_nonreserved_except_function_type
    ;

identifier_nontype
    : id_token
    | tokens_nonreserved
    | tokens_reserved_except_function_type
    ;

col_label
    : id_token
    | tokens_reserved
    | tokens_nonreserved
    | tokens_reserved_except_function_type
    | tokens_nonreserved_except_function_type
    ;

/*
 * These rules should be generated using code in the Keyword class.
 * Word tokens that are not keywords should be added to nonreserved list.
 */
tokens_nonreserved
    : AT
    | BY
    | CURRENT
    | DAY
    | DOCUMENT
    | DOUBLE
    | ESCAPE
    | EXCLUDE
    | FAMILY
    | FILTER
    | FIRST
    | FOLLOWING
    | GROUPS
    | HOUR
    | LAST
    | MINUTE
    | MODE
    | MONTH
    | NEXT
    | NO
    | NULLS
    | OF
    | OPERATOR
    | OTHERS
    | OVER
    | PARTITION
    | PRECEDING
    | RANGE
    | RECURSIVE
    | REPLACE // From functions
    | ROLLUP
    | ROWS
    | SECOND
    | SETS
    | STRIP // From functions
    | TEXT
    | TIES
    | UNBOUNDED
    | UNKNOWN
    | VARYING
    | WITHIN
    | WITHOUT
    | YEAR
    | ZONE
    ;

tokens_nonreserved_except_function_type
    : BETWEEN
    | BIGINT
    | BIT
    | BOOLEAN
    | CHAR
    | CHARACTER
    | COALESCE
    | DEC
    | DECIMAL
    | EXISTS
    | EXTRACT
    | FLOAT
    | GREATEST
    | GROUPING
    | INT
    | INTEGER
    | INTERVAL
    | LEAST
    | NATIONAL
    | NCHAR
    | NULLIF
    | NUMERIC
    | OVERLAY
    | POSITION
    | PRECISION
    | REAL
    | ROW
    | SETOF
    | SMALLINT
    | SUBSTRING
    | TIME
    | TIMESTAMP
    | TREAT
    | TRIM
    | VALUES
    | VARCHAR
    | XMLCONCAT
    ;

tokens_reserved_except_function_type
    : CROSS
    | FULL
    | ILIKE
    | INNER
    | IS
    | ISNULL
    | JOIN
    | LEFT
    | LIKE
    | NATURAL
    | NOTNULL
    | OUTER
    | OVERLAPS
    | RIGHT
    | SIMILAR
    | TABLESAMPLE
    ;

tokens_reserved
    : ALL
    | AND
    | ANY
    | ARRAY
    | AS
    | ASC
    | ASYMMETRIC
    | CASE
    | CAST
    | COLLATE
    | CURRENT_DATE
    | CURRENT_TIME
    | CURRENT_TIMESTAMP
    | DEFAULT
    | DESC
    | DISTINCT
    | ELSE
    | END
    | EXCEPT
    | FALSE
    | FETCH
    | FROM
    | GROUP
    | HAVING
    | IN
    | INTERSECT
    | LATERAL
    | LIMIT
    | LOCALTIME
    | LOCALTIMESTAMP
    | NOT
    | NULL
    | OFFSET
    | ON
    | ONLY
    | OR
    | ORDER
    | SELECT
    | SOME
    | SYMMETRIC
    | TABLE
    | THEN
    | TO
    | TRUE
    | UNION
    | USING
    | VARIADIC
    | WHEN
    | WHERE
    | WINDOW
    | WITH
    ;

tokens_nonkeyword
    : ALIAS
    ;

/*
===============================================================================
  6.1 <data types>
===============================================================================
*/

type_list
    : data_type (COMMA data_type)*
    ;

data_type
    : SETOF? predefined_type (ARRAY array_type? | array_type+)?
    ;

array_type
    : LEFT_BRACKET NUMBER_LITERAL? RIGHT_BRACKET
    ;

predefined_type
    : BIGINT
    | BIT VARYING? type_length?
    | BOOLEAN
    | DEC precision_param?
    | DECIMAL precision_param?
    | DOUBLE PRECISION
    | FLOAT precision_param?
    | INT
    | INTEGER
    | INTERVAL interval_field? type_length?
    | NATIONAL? (CHARACTER | CHAR) VARYING? type_length?
    | NCHAR VARYING? type_length?
    | NUMERIC precision_param?
    | REAL
    | SMALLINT
    | TIME type_length? ((WITH | WITHOUT) TIME ZONE)?
    | TIMESTAMP type_length? ((WITH | WITHOUT) TIME ZONE)?
    | VARCHAR type_length?
    | identifier_nontype (LEFT_PAREN vex (COMMA vex)* RIGHT_PAREN)?
    ;

interval_field
    : YEAR
    | MONTH
    | DAY
    | HOUR
    | MINUTE
    | SECOND
    | YEAR TO MONTH
    | DAY TO HOUR
    | DAY TO MINUTE
    | DAY TO SECOND
    | HOUR TO MINUTE
    | HOUR TO SECOND
    | MINUTE TO SECOND
    ;

type_length
    : LEFT_PAREN NUMBER_LITERAL RIGHT_PAREN
    ;

precision_param
    : LEFT_PAREN precision=NUMBER_LITERAL (COMMA scale=NUMBER_LITERAL)? RIGHT_PAREN
    ;

/*
===============================================================================
  6.25 <value expression>
===============================================================================
*/

vex
  : vex CAST_EXPRESSION data_type
  | LEFT_PAREN vex RIGHT_PAREN indirection_list?
  | LEFT_PAREN vex (COMMA vex)+ RIGHT_PAREN
  | vex collate_identifier
  | <assoc=right> (PLUS | MINUS) vex
  | vex AT TIME ZONE vex
  | vex EXP vex
  | vex (MULTIPLY | DIVIDE | MODULAR) vex
  | vex (PLUS | MINUS) vex
  // TODO a lot of ambiguities between 3 next alternatives
  | vex op vex
  | op vex
  | vex op
  | vex NOT? IN LEFT_PAREN (select_stmt_no_parens | vex (COMMA vex)*) RIGHT_PAREN
  | vex NOT? BETWEEN (ASYMMETRIC | SYMMETRIC)? vex_b AND vex
  | vex NOT? (LIKE | ILIKE | SIMILAR TO) vex
  | vex NOT? (LIKE | ILIKE | SIMILAR TO) vex ESCAPE vex
  | vex (LTH | GTH | LEQ | GEQ | EQUAL | NOT_EQUAL) vex
  | vex IS NOT? (truth_value | NULL)
  | vex IS NOT? DISTINCT FROM vex
  | vex IS NOT? DOCUMENT
  | vex IS NOT? UNKNOWN
  | vex IS NOT? OF LEFT_PAREN type_list RIGHT_PAREN
  | vex ISNULL
  | vex NOTNULL
  | <assoc=right> NOT vex
  | vex AND vex
  | vex OR vex
  | value_expression_primary
  ;

// partial copy of vex
// resolves (vex BETWEEN vex AND vex) vs. (vex AND vex) ambiguity
// vex references that are not at alternative edge are referencing the full rule
// see postgres' b_expr (src/backend/parser/gram.y)
vex_b
  : vex_b CAST_EXPRESSION data_type
  | LEFT_PAREN vex RIGHT_PAREN indirection_list?
  | LEFT_PAREN vex (COMMA vex)+ RIGHT_PAREN
  | <assoc=right> (PLUS | MINUS) vex_b
  | vex_b EXP vex_b
  | vex_b (MULTIPLY | DIVIDE | MODULAR) vex_b
  | vex_b (PLUS | MINUS) vex_b
  | vex_b op vex_b
  | op vex_b
  | vex_b op
  | vex_b (LTH | GTH | LEQ | GEQ | EQUAL | NOT_EQUAL) vex_b
  | vex_b IS NOT? DISTINCT FROM vex_b
  | vex_b IS NOT? DOCUMENT
  | vex_b IS NOT? UNKNOWN
  | vex_b IS NOT? OF LEFT_PAREN type_list RIGHT_PAREN
  | value_expression_primary
  ;

op
  : op_chars
  | OPERATOR LEFT_PAREN identifier DOT all_simple_op RIGHT_PAREN
  ;

all_op_ref
  : all_simple_op
  | OPERATOR LEFT_PAREN identifier DOT all_simple_op RIGHT_PAREN
  ;

datetime_overlaps
  : LEFT_PAREN vex COMMA vex RIGHT_PAREN OVERLAPS LEFT_PAREN vex COMMA vex RIGHT_PAREN
  ;

value_expression_primary
  : unsigned_value_specification
  | LEFT_PAREN select_stmt_no_parens RIGHT_PAREN indirection_list?
  | case_expression
  | NULL
  | MULTIPLY
  // technically incorrect since ANY cannot be value expression
  // but fixing this would require to write a vex rule duplicating all operators
  // like vex (op|op|op|...) comparison_mod
  | comparison_mod
  | EXISTS table_subquery
  | function_call
  | indirection_var
  | array_expression
  | type_coercion
  | datetime_overlaps
  ;

unsigned_value_specification
  : unsigned_numeric_literal
  | character_string
  | truth_value
  ;

unsigned_numeric_literal
  : NUMBER_LITERAL
  | REAL_NUMBER
  ;

truth_value
  : TRUE | FALSE | ON // on is reserved but is required by SET statements
  ;

case_expression
  : CASE vex? (WHEN vex THEN r+=vex)+ (ELSE r+=vex)? END
  ;

cast_specification
  : (CAST | TREAT) LEFT_PAREN vex AS data_type RIGHT_PAREN
  ;

function_args
    : LEFT_PAREN (set_qualifier? vex_or_named_notation (COMMA vex_or_named_notation)* orderby_clause?)? RIGHT_PAREN;

function_body
    : function_args
        (WITHIN GROUP LEFT_PAREN orderby_clause RIGHT_PAREN)?
        filter_clause? (OVER (identifier | window_definition))?;

// using data_type for function name because keyword-named functions
// use the same category of keywords as keyword-named types
function_call
    : function_names function_body
    | function_custom
    | identifier function_body
    | ROW LEFT_PAREN (vex (COMMA vex)*)? RIGHT_PAREN
    ;

vex_or_named_notation
    : VARIADIC? (argname=identifier pointer)? vex
    ;

pointer
    : EQUAL_GTH | COLON_EQUAL
    ;

comparison_mod
    : (ALL | ANY | SOME) LEFT_PAREN (vex | select_stmt_no_parens) RIGHT_PAREN
    ;

filter_clause
    : FILTER LEFT_PAREN WHERE vex RIGHT_PAREN
    ;

window_definition
    : LEFT_PAREN identifier? partition_by_columns? orderby_clause? frame_clause? RIGHT_PAREN
    ;

frame_clause
    : (RANGE | ROWS | GROUPS) (frame_bound | BETWEEN frame_bound AND frame_bound)
    (EXCLUDE (CURRENT ROW | GROUP | TIES | NO OTHERS))?
    ;

frame_bound
    : vex (PRECEDING | FOLLOWING)
    | CURRENT ROW
    ;

array_expression
    : ARRAY (array_elements | table_subquery)
    ;

array_elements
    : LEFT_BRACKET ((vex | array_elements) (COMMA (vex | array_elements))*)? RIGHT_BRACKET
    ;

type_coercion
    : data_type character_string
    | INTERVAL character_string interval_field type_length?
    ;

/*
===============================================================================
  7.13 <query expression>
===============================================================================
*/

schema_qualified_name
    : identifier ( DOT identifier ( DOT identifier )? )?
    ;

set_qualifier
    : DISTINCT | ALL
    ;

table_subquery
    : LEFT_PAREN select_stmt RIGHT_PAREN
    ;

select_stmt
    : with_clause? select_ops after_ops*
    ;

after_ops
    : orderby_clause
    | LIMIT (vex | ALL)
    | OFFSET vex (ROW | ROWS)?
    | FETCH (FIRST | NEXT) vex? (ROW | ROWS) ONLY?
    ;

// select_stmt copy that doesn't consume external parens
// for use in vex
// we let the vex rule to consume as many parens as it can
select_stmt_no_parens
    : with_clause? select_ops_no_parens after_ops*
    ;

with_clause
    : WITH RECURSIVE? with_query (COMMA with_query)*
    ;

with_query
    : query_name=identifier (LEFT_PAREN column_name+=identifier (COMMA column_name+=identifier)* RIGHT_PAREN)?
    AS LEFT_PAREN select_stmt RIGHT_PAREN
    ;

select_ops
    : LEFT_PAREN select_stmt RIGHT_PAREN // parens can be used to apply "global" clauses (WITH etc) to a particular select in UNION expr
    | select_ops (INTERSECT | UNION | EXCEPT) set_qualifier? select_ops
    | select_primary
    ;

// version of select_ops for use in select_stmt_no_parens
select_ops_no_parens
    : select_ops (INTERSECT | UNION | EXCEPT) set_qualifier? (select_primary | LEFT_PAREN select_stmt RIGHT_PAREN)
    | select_primary
    ;

select_primary
    : SELECT
        (set_qualifier (ON LEFT_PAREN vex (COMMA vex)* RIGHT_PAREN)?)?
        select_list?
        (FROM from_item (COMMA from_item)*)?
        (WHERE vex)?
        groupby_clause?
        (HAVING vex)?
        (WINDOW identifier AS window_definition (COMMA identifier AS window_definition)*)?
    | TABLE ONLY? schema_qualified_name MULTIPLY?
    | values_stmt
    ;

select_list
  : select_sublist (COMMA select_sublist)*
  ;

select_sublist
  : vex (AS col_label | id_token)?
  ;

from_item
    : LEFT_PAREN from_item RIGHT_PAREN alias_clause?
    | from_item CROSS JOIN from_item
    | from_item (INNER | (LEFT | RIGHT | FULL) OUTER?)? JOIN from_item ON vex
    | from_item (INNER | (LEFT | RIGHT | FULL) OUTER?)? JOIN from_item USING names_in_parens
    | from_item NATURAL (INNER | (LEFT | RIGHT | FULL) OUTER?)? JOIN from_item
    | from_primary
    ;

from_primary
    : ONLY? schema_qualified_name MULTIPLY? alias_clause? (TABLESAMPLE method=identifier LEFT_PAREN vex (COMMA vex)* RIGHT_PAREN (REPEATABLE vex)?)?
    | LATERAL? table_subquery alias_clause
    | LATERAL? function_call (WITH ORDINALITY)?
        (AS from_function_column_def
        | AS? alias=identifier (LEFT_PAREN column_alias+=identifier (COMMA column_alias+=identifier)* RIGHT_PAREN | from_function_column_def)?
        )?
    | LATERAL? ROWS FROM LEFT_PAREN function_call (AS from_function_column_def)? (COMMA function_call (AS from_function_column_def)?)* RIGHT_PAREN
    (WITH ORDINALITY)? (AS? identifier (LEFT_PAREN identifier (COMMA identifier)* RIGHT_PAREN)?)?
    ;

alias_clause
    : AS? alias=identifier (LEFT_PAREN column_alias+=identifier (COMMA column_alias+=identifier)* RIGHT_PAREN)?
    ;

from_function_column_def
    : LEFT_PAREN column_alias+=identifier data_type (COMMA column_alias+=identifier data_type)* RIGHT_PAREN
    ;

groupby_clause
  : GROUP BY grouping_element_list
  ;

grouping_element_list
  : grouping_element (COMMA grouping_element)*
  ;

grouping_element
  : vex
  | LEFT_PAREN RIGHT_PAREN
  | (ROLLUP | CUBE | GROUPING SETS) LEFT_PAREN grouping_element_list RIGHT_PAREN
  ;

values_stmt
    : VALUES values_values (COMMA values_values)*
    ;

values_values
    : LEFT_PAREN (vex | DEFAULT) (COMMA (vex | DEFAULT))* RIGHT_PAREN
    ;

orderby_clause
    : ORDER BY sort_specifier_list
    ;

sort_specifier_list
    : sort_specifier (COMMA sort_specifier)*
    ;

sort_specifier
    : key=vex
    opclass=schema_qualified_name? // this allows to share this rule with create_index; technically invalid syntax
    order=order_specification?
    null_order=null_ordering?
    ;

order_specification
    : ASC | DESC | USING all_op_ref
    ;

null_ordering
    : NULLS (FIRST | LAST)
    ;

// Missing parts

dollar_number
    : DOLLAR_NUMBER
    ;

names_in_parens
    : LEFT_PAREN names_references RIGHT_PAREN
    ;

names_references
    : identifier (COMMA identifier)*
    ;

op_chars
    : OP_CHARS
    | LESS_LESS
    | GREATER_GREATER
    | HASH_SIGN
    ;

partition_by_columns
    : PARTITION BY vex (COMMA vex)*
    ;

collate_identifier
    : COLLATE collation=identifier
    ;

indirection
    : DOT col_label
    | LEFT_BRACKET vex RIGHT_BRACKET
    | LEFT_BRACKET vex? COLON vex? RIGHT_BRACKET
    ;

indirection_list
    : indirection+
    | indirection* DOT MULTIPLY
    ;

indirection_var
    : (identifier | dollar_number) indirection_list?
    ;

all_simple_op
    : op_chars
    | EQUAL | NOT_EQUAL | LTH | LEQ | GTH | GEQ
    | PLUS | MINUS | MULTIPLY | DIVIDE | MODULAR | EXP
    ;

character_string
    : BeginDollarStringConstant Text_between_Dollar* EndDollarStringConstant
    | Character_String_Literal
    ;

boolean_value
    : TRUE
    | FALSE
    ;
