parser grammar FunctionsParser;


function_xml_xmlcomment: XMLCOMMENT LEFT_PAREN vex RIGHT_PAREN;
function_xml_xmlconcat: XMLCONCAT LEFT_PAREN vex (COMMA vex)* RIGHT_PAREN;
function_xml_xmlelement: XMLELEMENT LEFT_PAREN NAME name=identifier
(COMMA XMLATTRIBUTES LEFT_PAREN vex (AS attname=identifier)? (COMMA vex (AS attname=identifier)?)* RIGHT_PAREN)?
(COMMA vex)* RIGHT_PAREN;
function_xml_xmlforest: XMLFOREST LEFT_PAREN vex (AS name=identifier)? (COMMA vex (AS name=identifier)?)* RIGHT_PAREN;
function_xml_xmlpi: XMLPI LEFT_PAREN NAME name=identifier (COMMA vex)? RIGHT_PAREN;
function_xml_xmlroot: XMLROOT LEFT_PAREN vex COMMA VERSION (vex | NO VALUE) (COMMA STANDALONE (YES | NO | NO VALUE))? RIGHT_PAREN;
function_xml_xmlagg: XMLAGG LEFT_PAREN NAME name=identifier
(COMMA XMLATTRIBUTES LEFT_PAREN vex (AS attname=identifier)? (COMMA vex (AS attname=identifier)?)* RIGHT_PAREN)?
(COMMA vex)* RIGHT_PAREN;
function_xml_xmlexists: XMLEXISTS LEFT_PAREN vex PASSING (BY REF)? vex (BY REF)? RIGHT_PAREN;
function_xml_xml_is_well_formed: XML_IS_WELL_FORMED LEFT_PAREN vex RIGHT_PAREN;
function_xml_xml_is_well_formed_content: XML_IS_WELL_FORMED_CONTENT LEFT_PAREN vex RIGHT_PAREN;
function_xml_xml_is_well_formed_document: XML_IS_WELL_FORMED_DOCUMENT LEFT_PAREN vex RIGHT_PAREN;
function_xml_xpath: XPATH LEFT_PAREN
vex COMMA vex (ARRAY LEFT_BRACKET ARRAY LEFT_BRACKET (vex COMMA vex)? RIGHT_BRACKET RIGHT_BRACKET)?
RIGHT_PAREN;
function_xml_xpath_exists: XPATH_EXISTS LEFT_PAREN
vex COMMA vex (ARRAY LEFT_BRACKET ARRAY LEFT_BRACKET (vex COMMA vex)? RIGHT_BRACKET RIGHT_BRACKET)?
RIGHT_PAREN;
function_xml_xmltable: XMLTABLE LEFT_PAREN
(XMLNAMESPACES LEFT_PAREN vex AS name=identifier (COMMA vex AS name=identifier)* RIGHT_PAREN COMMA)?
vex PASSING (BY REF)? vex (BY REF)?
COLUMNS name=identifier (data_type (PATH vex)? (DEFAULT vex)? (NOT? NULL)? | FOR ORDINALITY) 
(COMMA name=identifier (data_type (PATH vex)? (DEFAULT vex)? (NOT? NULL)? | FOR ORDINALITY))*
RIGHT_PAREN;
function_xml_table_to_xml: TABLE_TO_XML LEFT_PAREN identifier COMMA boolean_value COMMA boolean_value COMMA vex RIGHT_PAREN;

functions_all: function_xml_xmlcomment
	|function_xml_xmlconcat
	|function_xml_xmlelement
	|function_xml_xmlforest
	|function_xml_xmlpi
	|function_xml_xmlroot
	|function_xml_xmlagg
	|function_xml_xmlexists
	|function_xml_xml_is_well_formed
	|function_xml_xml_is_well_formed_content
	|function_xml_xml_is_well_formed_document
	|function_xml_xpath
	|function_xml_xpath_exists
	|function_xml_xmltable
	|function_xml_table_to_xml;