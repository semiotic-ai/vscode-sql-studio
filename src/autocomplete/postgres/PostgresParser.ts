// Generated from syntaxes/postgres/grammar/PostgresParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { PostgresParserListener } from './PostgresParserListener';

export class PostgresParser extends Parser {
  public static readonly WITH = 1;
  public static readonly RECURSIVE = 2;
  public static readonly SELECT = 3;
  public static readonly FROM = 4;
  public static readonly WHERE = 5;
  public static readonly GROUP = 6;
  public static readonly BY = 7;
  public static readonly HAVING = 8;
  public static readonly ORDER = 9;
  public static readonly LIMIT = 10;
  public static readonly OFFSET = 11;
  public static readonly DISTINCT = 12;
  public static readonly ALL = 13;
  public static readonly ANY = 14;
  public static readonly SOME = 15;
  public static readonly UNION = 16;
  public static readonly INTERSECT = 17;
  public static readonly EXCEPT = 18;
  public static readonly DESC = 19;
  public static readonly ASC = 20;
  public static readonly USING = 21;
  public static readonly OPERATOR = 22;
  public static readonly NULLS = 23;
  public static readonly FIRST = 24;
  public static readonly LAST = 25;
  public static readonly LEFT = 26;
  public static readonly RIGHT = 27;
  public static readonly FULL = 28;
  public static readonly INNER = 29;
  public static readonly OUTER = 30;
  public static readonly CROSS = 31;
  public static readonly JOIN = 32;
  public static readonly ON = 33;
  public static readonly VALUES = 34;
  public static readonly DEFAULT = 35;
  public static readonly NATURAL = 36;
  public static readonly TABLESAMPLE = 37;
  public static readonly REPEATABLE = 38;
  public static readonly LATERAL = 39;
  public static readonly TABLE = 40;
  public static readonly ONLY = 41;
  public static readonly INTERVAL = 42;
  public static readonly TO = 43;
  public static readonly SECOND = 44;
  public static readonly MINUTE = 45;
  public static readonly HOUR = 46;
  public static readonly DAY = 47;
  public static readonly MONTH = 48;
  public static readonly YEAR = 49;
  public static readonly CAST = 50;
  public static readonly TREAT = 51;
  public static readonly CASE = 52;
  public static readonly WHEN = 53;
  public static readonly THEN = 54;
  public static readonly ELSE = 55;
  public static readonly END = 56;
  public static readonly AND = 57;
  public static readonly OR = 58;
  public static readonly NOT = 59;
  public static readonly IS = 60;
  public static readonly NULL = 61;
  public static readonly ISNULL = 62;
  public static readonly NOTNULL = 63;
  public static readonly TRUE = 64;
  public static readonly FALSE = 65;
  public static readonly BETWEEN = 66;
  public static readonly IN = 67;
  public static readonly LIKE = 68;
  public static readonly ILIKE = 69;
  public static readonly ARRAY = 70;
  public static readonly BOOLEAN = 71;
  public static readonly SMALLINT = 72;
  public static readonly INT = 73;
  public static readonly INTEGER = 74;
  public static readonly BIGINT = 75;
  public static readonly DEC = 76;
  public static readonly DECIMAL = 77;
  public static readonly DOUBLE = 78;
  public static readonly FLOAT = 79;
  public static readonly NUMERIC = 80;
  public static readonly PRECISION = 81;
  public static readonly REAL = 82;
  public static readonly BIT = 83;
  public static readonly VARYING = 84;
  public static readonly NATIONAL = 85;
  public static readonly CHARACTER = 86;
  public static readonly CHAR = 87;
  public static readonly NCHAR = 88;
  public static readonly TIME = 89;
  public static readonly WITHOUT = 90;
  public static readonly WITHIN = 91;
  public static readonly ZONE = 92;
  public static readonly TIMESTAMP = 93;
  public static readonly VARCHAR = 94;
  public static readonly SETOF = 95;
  public static readonly OF = 96;
  public static readonly COLLATE = 97;
  public static readonly OVER = 98;
  public static readonly PARTITION = 99;
  public static readonly WINDOW = 100;
  public static readonly ROWS = 101;
  public static readonly RANGE = 102;
  public static readonly GROUPS = 103;
  public static readonly UNBOUNDED = 104;
  public static readonly PRECEDING = 105;
  public static readonly FOLLOWING = 106;
  public static readonly CURRENT = 107;
  public static readonly ROW = 108;
  public static readonly EXCLUDE = 109;
  public static readonly TIES = 110;
  public static readonly NO = 111;
  public static readonly OTHERS = 112;
  public static readonly ROLLUP = 113;
  public static readonly CUBE = 114;
  public static readonly GROUPING = 115;
  public static readonly SETS = 116;
  public static readonly ORDINALITY = 117;
  public static readonly OVERLAPS = 118;
  public static readonly AT = 119;
  public static readonly AS = 120;
  public static readonly ASYMMETRIC = 121;
  public static readonly SYMMETRIC = 122;
  public static readonly SIMILAR = 123;
  public static readonly ESCAPE = 124;
  public static readonly FETCH = 125;
  public static readonly NEXT = 126;
  public static readonly DOCUMENT = 127;
  public static readonly UNKNOWN = 128;
  public static readonly EXISTS = 129;
  public static readonly CONTENT = 130;
  public static readonly VARIADIC = 131;
  public static readonly FILTER = 132;
  public static readonly ALIAS = 133;
  public static readonly STANDALONE = 134;
  public static readonly YES = 135;
  public static readonly VALUE = 136;
  public static readonly NODE = 137;
  public static readonly NAME = 138;
  public static readonly VERSION = 139;
  public static readonly PASSING = 140;
  public static readonly REF = 141;
  public static readonly COLUMNS = 142;
  public static readonly XMLATTRIBUTES = 143;
  public static readonly PATH = 144;
  public static readonly FOR = 145;
  public static readonly XMLNAMESPACES = 146;
  public static readonly POW = 147;
  public static readonly DATE = 148;
  public static readonly ARRAY_AGG = 149;
  public static readonly AVG = 150;
  public static readonly BIT_AND = 151;
  public static readonly BIT_OR = 152;
  public static readonly BIT_XOR = 153;
  public static readonly BOOL_AND = 154;
  public static readonly BOOL_OR = 155;
  public static readonly COUNT = 156;
  public static readonly EVERY = 157;
  public static readonly JSON_AGG = 158;
  public static readonly JSON_OBJECT_AGG = 159;
  public static readonly MAX = 160;
  public static readonly MIN = 161;
  public static readonly RANGE_AGG = 162;
  public static readonly RANGE_INTERSECT_AGG = 163;
  public static readonly STRING_AGG = 164;
  public static readonly SUM = 165;
  public static readonly XMLAGG = 166;
  public static readonly ARRAY_APPEND = 167;
  public static readonly ARRAY_CAT = 168;
  public static readonly ARRAY_DIMS = 169;
  public static readonly ARRAY_FILL = 170;
  public static readonly ARRAY_LENGTH = 171;
  public static readonly ARRAY_LOWER = 172;
  public static readonly ARRAY_NDIMS = 173;
  public static readonly ARRAY_POSITION = 174;
  public static readonly ARRAY_PREPEND = 175;
  public static readonly ARRAY_REMOVE = 176;
  public static readonly ARRAY_REPLACE = 177;
  public static readonly ARRAY_TO_STRING = 178;
  public static readonly ARRAY_UPPER = 179;
  public static readonly CARDINALITY = 180;
  public static readonly TRIM_ARRAY = 181;
  public static readonly UNNEST = 182;
  public static readonly CONVERT = 183;
  public static readonly CONVERT_FROM = 184;
  public static readonly CONVERT_TO = 185;
  public static readonly ENCODE = 186;
  public static readonly DECODE = 187;
  public static readonly BIT_COUNT = 188;
  public static readonly BTRIM = 189;
  public static readonly GET_BIT = 190;
  public static readonly GET_BYTE = 191;
  public static readonly LENGTH = 192;
  public static readonly LTRIM = 193;
  public static readonly MD5 = 194;
  public static readonly RTRIM = 195;
  public static readonly SET_BIT = 196;
  public static readonly SET_BYTE = 197;
  public static readonly SHA224 = 198;
  public static readonly SHA256 = 199;
  public static readonly SHA384 = 200;
  public static readonly SHA512 = 201;
  public static readonly SUBSTR = 202;
  public static readonly NUM_NONNULLS = 203;
  public static readonly NUM_NULLS = 204;
  public static readonly COALESCE = 205;
  public static readonly NULLIF = 206;
  public static readonly GREATEST = 207;
  public static readonly LEAST = 208;
  public static readonly AGE = 209;
  public static readonly CLOCK_TIMESTAMP = 210;
  public static readonly CURRENT_DATE = 211;
  public static readonly CURRENT_TIME = 212;
  public static readonly CURRENT_TIMESTAMP = 213;
  public static readonly DATE_BIN = 214;
  public static readonly DATE_PART = 215;
  public static readonly DATE_TRUNC = 216;
  public static readonly EXTRACT = 217;
  public static readonly ISFINITE = 218;
  public static readonly JUSTIFY_DAYS = 219;
  public static readonly JUSTIFY_HOURS = 220;
  public static readonly JUSTIFY_INTERVAL = 221;
  public static readonly LOCALTIME = 222;
  public static readonly LOCALTIMESTAMP = 223;
  public static readonly MAKE_DATE = 224;
  public static readonly MAKE_INTERVAL = 225;
  public static readonly MAKE_TIME = 226;
  public static readonly MAKE_TIMESTAMP = 227;
  public static readonly MAKE_TIMESTAMPTZ = 228;
  public static readonly NOW = 229;
  public static readonly STATEMENT_TIMESTAMP = 230;
  public static readonly TIMEOFDAY = 231;
  public static readonly TRANSACTION_TIMESTAMP = 232;
  public static readonly ENUM_FIRST = 233;
  public static readonly ENUM_LAST = 234;
  public static readonly ENUM_RANGE = 235;
  public static readonly TO_CHAR = 236;
  public static readonly TO_DATE = 237;
  public static readonly TO_NUMBER = 238;
  public static readonly TO_TIMESTAMP = 239;
  public static readonly BOX = 240;
  public static readonly CIRCLE = 241;
  public static readonly LINE = 242;
  public static readonly LSEG = 243;
  public static readonly POINT = 244;
  public static readonly POLYGON = 245;
  public static readonly AREA = 246;
  public static readonly CENTER = 247;
  public static readonly DIAGONAL = 248;
  public static readonly DIAMETER = 249;
  public static readonly HEIGHT = 250;
  public static readonly ISCLOSED = 251;
  public static readonly ISOPEN = 252;
  public static readonly NPOINTS = 253;
  public static readonly PCLOSE = 254;
  public static readonly POPEN = 255;
  public static readonly RADIUS = 256;
  public static readonly SLOPE = 257;
  public static readonly WIDTH = 258;
  public static readonly SINH = 259;
  public static readonly COSH = 260;
  public static readonly TANH = 261;
  public static readonly ASINH = 262;
  public static readonly ACOSH = 263;
  public static readonly ATANH = 264;
  public static readonly ABBREV = 265;
  public static readonly BROADCAST = 266;
  public static readonly FAMILY = 267;
  public static readonly HOST = 268;
  public static readonly HOSTMASK = 269;
  public static readonly INET_MERGE = 270;
  public static readonly INET_SAME_FAMILY = 271;
  public static readonly MASKLEN = 272;
  public static readonly NETMASK = 273;
  public static readonly NETWORK = 274;
  public static readonly SET_MASKLEN = 275;
  public static readonly TEXT = 276;
  public static readonly TRUNC = 277;
  public static readonly MACADDR8_SET7BIT = 278;
  public static readonly JSON_ARRAY_ELEMENTS = 279;
  public static readonly JSONB_ARRAY_ELEMENTS = 280;
  public static readonly JSON_ARRAY_ELEMENTS_TEXT = 281;
  public static readonly JSONB_ARRAY_ELEMENTS_TEXT = 282;
  public static readonly JSON_ARRAY_LENGTH = 283;
  public static readonly JSONB_ARRAY_LENGTH = 284;
  public static readonly JSON_EACH = 285;
  public static readonly JSONB_EACH = 286;
  public static readonly JSON_EACH_TEXT = 287;
  public static readonly JSONB_EACH_TEXT = 288;
  public static readonly JSON_EXTRACT_PATH = 289;
  public static readonly JSONB_EXTRACT_PATH = 290;
  public static readonly JSON_EXTRACT_PATH_TEXT = 291;
  public static readonly JSONB_EXTRACT_PATH_TEXT = 292;
  public static readonly JSON_OBJECT_KEYS = 293;
  public static readonly JSONB_OBJECT_KEYS = 294;
  public static readonly JSON_POPULATE_RECORD = 295;
  public static readonly JSONB_POPULATE_RECORD = 296;
  public static readonly JSON_POPULATE_RECORDSET = 297;
  public static readonly JSONB_POPULATE_RECORDSET = 298;
  public static readonly JSON_TO_RECORD = 299;
  public static readonly JSONB_TO_RECORD = 300;
  public static readonly JSON_TO_RECORDSET = 301;
  public static readonly JSONB_TO_RECORDSET = 302;
  public static readonly JSON_STRIP_NULLS = 303;
  public static readonly JSONB_STRIP_NULLS = 304;
  public static readonly JSONB_SET = 305;
  public static readonly JSONB_SET_LAX = 306;
  public static readonly JSONB_INSERT = 307;
  public static readonly JSONB_PATH_EXISTS = 308;
  public static readonly JSONB_PATH_MATCH = 309;
  public static readonly JSONB_PATH_QUERY = 310;
  public static readonly JSONB_PATH_QUERY_ARRAY = 311;
  public static readonly JSONB_PATH_QUERY_FIRST = 312;
  public static readonly JSONB_PATH_EXISTS_TZ = 313;
  public static readonly JSONB_PATH_MATCH_TZ = 314;
  public static readonly JSONB_PATH_QUERY_TZ = 315;
  public static readonly JSONB_PATH_QUERY_ARRAY_TZ = 316;
  public static readonly JSONB_PATH_QUERY_FIRST_TZ = 317;
  public static readonly JSONB_PRETTY = 318;
  public static readonly JSON_TYPEOF = 319;
  public static readonly JSONB_TYPEOF = 320;
  public static readonly TO_JSON = 321;
  public static readonly TO_JSONB = 322;
  public static readonly ARRAY_TO_JSON = 323;
  public static readonly ROW_TO_JSON = 324;
  public static readonly JSON_BUILD_ARRAY = 325;
  public static readonly JSONB_BUILD_ARRAY = 326;
  public static readonly JSON_BUILD_OBJECT = 327;
  public static readonly JSON_OBJECT = 328;
  public static readonly JSONB_OBJECT = 329;
  public static readonly ABS = 330;
  public static readonly CBRT = 331;
  public static readonly CEIL = 332;
  public static readonly DEGREES = 333;
  public static readonly DIV = 334;
  public static readonly EXP = 335;
  public static readonly FACTORIAL = 336;
  public static readonly FLOOR = 337;
  public static readonly GCD = 338;
  public static readonly LCM = 339;
  public static readonly LN = 340;
  public static readonly LOG = 341;
  public static readonly LOG10 = 342;
  public static readonly MIN_SCALE = 343;
  public static readonly MOD = 344;
  public static readonly PI = 345;
  public static readonly POWER = 346;
  public static readonly RADIANS = 347;
  public static readonly ROUND = 348;
  public static readonly SCALE = 349;
  public static readonly SIGN = 350;
  public static readonly SQRT = 351;
  public static readonly TRIM_SCALE = 352;
  public static readonly WIDTH_BUCKET = 353;
  public static readonly MODE = 354;
  public static readonly PERCENTILE_CONT = 355;
  public static readonly PERCENTILE_DISC = 356;
  public static readonly RANDOM = 357;
  public static readonly SETSEED = 358;
  public static readonly LOWER = 359;
  public static readonly UPPER = 360;
  public static readonly ISEMPTY = 361;
  public static readonly LOWER_INC = 362;
  public static readonly UPPER_INC = 363;
  public static readonly LOWER_INF = 364;
  public static readonly UPPER_INF = 365;
  public static readonly RANGE_MERGE = 366;
  public static readonly MULTIRANGE = 367;
  public static readonly TS_DEBUG = 368;
  public static readonly TS_LEXIZE = 369;
  public static readonly TS_PARSE = 370;
  public static readonly TS_TOKEN_TYPE = 371;
  public static readonly ARRAY_TO_TSVECTOR = 372;
  public static readonly GET_CURRENT_TS_CONFIG = 373;
  public static readonly NUMNODE = 374;
  public static readonly PLAINTO_TSQUERY = 375;
  public static readonly PHRASETO_TSQUERY = 376;
  public static readonly WEBSEARCH_TO_TSQUERY = 377;
  public static readonly QUERYTREE = 378;
  public static readonly SETWEIGHT = 379;
  public static readonly STRIP = 380;
  public static readonly TO_TSQUERY = 381;
  public static readonly TO_TSVECTOR = 382;
  public static readonly JSON_TO_TSVECTOR = 383;
  public static readonly TS_DELETE = 384;
  public static readonly TS_FILTER = 385;
  public static readonly TS_HEADLINE = 386;
  public static readonly TS_RANK = 387;
  public static readonly TS_RANK_CD = 388;
  public static readonly TS_REWRITE = 389;
  public static readonly TSQUERY_PHRASE = 390;
  public static readonly TSVECTOR_TO_ARRAY = 391;
  public static readonly GENERATE_SERIES = 392;
  public static readonly GENERATE_SUBSCRIPTS = 393;
  public static readonly CORR = 394;
  public static readonly COVAR_POP = 395;
  public static readonly COVAR_SAMP = 396;
  public static readonly REGR_AVGX = 397;
  public static readonly REGR_AVGY = 398;
  public static readonly REGR_COUNT = 399;
  public static readonly REGR_INTERCEPT = 400;
  public static readonly REGR_R2 = 401;
  public static readonly REGR_SLOPE = 402;
  public static readonly REGR_SXX = 403;
  public static readonly REGR_SXY = 404;
  public static readonly REGR_SYY = 405;
  public static readonly STDDEV = 406;
  public static readonly STDDEV_POP = 407;
  public static readonly STDDEV_SAMP = 408;
  public static readonly VARIANCE = 409;
  public static readonly VAR_POP = 410;
  public static readonly VAR_SAMP = 411;
  public static readonly ASCII = 412;
  public static readonly CHR = 413;
  public static readonly CONCAT = 414;
  public static readonly CONCAT_WS = 415;
  public static readonly FORMAT = 416;
  public static readonly INITCAP = 417;
  public static readonly LPAD = 418;
  public static readonly PARSE_IDENT = 419;
  public static readonly QUOTE_IDENT = 420;
  public static readonly QUOTE_LITERAL = 421;
  public static readonly QUOTE_NULLABLE = 422;
  public static readonly REGEXP_MATCH = 423;
  public static readonly REGEXP_MATCHES = 424;
  public static readonly REGEXP_REPLACE = 425;
  public static readonly REGEXP_SPLIT_TO_ARRAY = 426;
  public static readonly REGEXP_SPLIT_TO_TABLE = 427;
  public static readonly REPEAT = 428;
  public static readonly REPLACE = 429;
  public static readonly REVERSE = 430;
  public static readonly RPAD = 431;
  public static readonly SPLIT_PART = 432;
  public static readonly STRPOS = 433;
  public static readonly STARTS_WITH = 434;
  public static readonly STRING_TO_ARRAY = 435;
  public static readonly STRING_TO_TABLE = 436;
  public static readonly TO_ASCII = 437;
  public static readonly TO_HEX = 438;
  public static readonly TRANSLATE = 439;
  public static readonly UNISTR = 440;
  public static readonly BIT_LENGTH = 441;
  public static readonly CHAR_LENGTH = 442;
  public static readonly CHARACTER_LENGTH = 443;
  public static readonly NORMALIZE = 444;
  public static readonly OCTET_LENGTH = 445;
  public static readonly OVERLAY = 446;
  public static readonly POSITION = 447;
  public static readonly SUBSTRING = 448;
  public static readonly TRIM = 449;
  public static readonly ACOS = 450;
  public static readonly ACOSD = 451;
  public static readonly ASIN = 452;
  public static readonly ASIND = 453;
  public static readonly ATAN = 454;
  public static readonly ATAND = 455;
  public static readonly ATAN2 = 456;
  public static readonly ATAN2D = 457;
  public static readonly COS = 458;
  public static readonly COSD = 459;
  public static readonly COT = 460;
  public static readonly COTD = 461;
  public static readonly SIN = 462;
  public static readonly SIND = 463;
  public static readonly TAN = 464;
  public static readonly TAND = 465;
  public static readonly GEN_RANDOM_UUID = 466;
  public static readonly ROW_NUMBER = 467;
  public static readonly RANK = 468;
  public static readonly DENSE_RANK = 469;
  public static readonly PERCENT_RANK = 470;
  public static readonly CUME_DIST = 471;
  public static readonly NTILE = 472;
  public static readonly LAG = 473;
  public static readonly LEAD = 474;
  public static readonly FIRST_VALUE = 475;
  public static readonly LAST_VALUE = 476;
  public static readonly NTH_VALUE = 477;
  public static readonly XMLCOMMENT = 478;
  public static readonly XMLCONCAT = 479;
  public static readonly XMLELEMENT = 480;
  public static readonly XMLFOREST = 481;
  public static readonly XMLPI = 482;
  public static readonly XMLROOT = 483;
  public static readonly XMLEXISTS = 484;
  public static readonly XML_IS_WELL_FORMED = 485;
  public static readonly XML_IS_WELL_FORMED_CONTENT = 486;
  public static readonly XML_IS_WELL_FORMED_DOCUMENT = 487;
  public static readonly XPATH = 488;
  public static readonly XPATH_EXISTS = 489;
  public static readonly XMLTABLE = 490;
  public static readonly TABLE_TO_XML = 491;
  public static readonly CAST_EXPRESSION = 492;
  public static readonly EQUAL = 493;
  public static readonly COLON = 494;
  public static readonly SEMI_COLON = 495;
  public static readonly COMMA = 496;
  public static readonly NOT_EQUAL = 497;
  public static readonly LTH = 498;
  public static readonly LEQ = 499;
  public static readonly GTH = 500;
  public static readonly GEQ = 501;
  public static readonly LEFT_PAREN = 502;
  public static readonly RIGHT_PAREN = 503;
  public static readonly PLUS = 504;
  public static readonly MINUS = 505;
  public static readonly MULTIPLY = 506;
  public static readonly DIVIDE = 507;
  public static readonly MODULAR = 508;
  public static readonly DOT = 509;
  public static readonly QUOTE_CHAR = 510;
  public static readonly DOUBLE_QUOTE = 511;
  public static readonly DOLLAR = 512;
  public static readonly LEFT_BRACKET = 513;
  public static readonly RIGHT_BRACKET = 514;
  public static readonly EQUAL_GTH = 515;
  public static readonly COLON_EQUAL = 516;
  public static readonly LESS_LESS = 517;
  public static readonly GREATER_GREATER = 518;
  public static readonly DOUBLE_DOT = 519;
  public static readonly HASH_SIGN = 520;
  public static readonly BlockComment = 521;
  public static readonly LineComment = 522;
  public static readonly OP_CHARS = 523;
  public static readonly NUMBER_LITERAL = 524;
  public static readonly REAL_NUMBER = 525;
  public static readonly DOLLAR_NUMBER = 526;
  public static readonly Identifier = 527;
  public static readonly QuotedIdentifier = 528;
  public static readonly Character_String_Literal = 529;
  public static readonly BeginDollarStringConstant = 530;
  public static readonly Space = 531;
  public static readonly White_Space = 532;
  public static readonly New_Line = 533;
  public static readonly Tab = 534;
  public static readonly BOM = 535;
  public static readonly BAD = 536;
  public static readonly Text_between_Dollar = 537;
  public static readonly EndDollarStringConstant = 538;
  public static readonly RULE_sql = 0;
  public static readonly RULE_id_token = 1;
  public static readonly RULE_identifier = 2;
  public static readonly RULE_identifier_nontype = 3;
  public static readonly RULE_col_label = 4;
  public static readonly RULE_tokens_nonreserved = 5;
  public static readonly RULE_tokens_nonreserved_except_function_type = 6;
  public static readonly RULE_tokens_reserved_except_function_type = 7;
  public static readonly RULE_tokens_reserved = 8;
  public static readonly RULE_tokens_nonkeyword = 9;
  public static readonly RULE_type_list = 10;
  public static readonly RULE_data_type = 11;
  public static readonly RULE_array_type = 12;
  public static readonly RULE_predefined_type = 13;
  public static readonly RULE_interval_field = 14;
  public static readonly RULE_type_length = 15;
  public static readonly RULE_precision_param = 16;
  public static readonly RULE_vex = 17;
  public static readonly RULE_vex_b = 18;
  public static readonly RULE_op = 19;
  public static readonly RULE_all_op_ref = 20;
  public static readonly RULE_datetime_overlaps = 21;
  public static readonly RULE_value_expression_primary = 22;
  public static readonly RULE_unsigned_value_specification = 23;
  public static readonly RULE_unsigned_numeric_literal = 24;
  public static readonly RULE_truth_value = 25;
  public static readonly RULE_case_expression = 26;
  public static readonly RULE_cast_specification = 27;
  public static readonly RULE_function_args = 28;
  public static readonly RULE_function_body = 29;
  public static readonly RULE_function_call = 30;
  public static readonly RULE_vex_or_named_notation = 31;
  public static readonly RULE_pointer = 32;
  public static readonly RULE_comparison_mod = 33;
  public static readonly RULE_filter_clause = 34;
  public static readonly RULE_window_definition = 35;
  public static readonly RULE_frame_clause = 36;
  public static readonly RULE_frame_bound = 37;
  public static readonly RULE_array_expression = 38;
  public static readonly RULE_array_elements = 39;
  public static readonly RULE_type_coercion = 40;
  public static readonly RULE_schema_qualified_name = 41;
  public static readonly RULE_set_qualifier = 42;
  public static readonly RULE_table_subquery = 43;
  public static readonly RULE_select_stmt = 44;
  public static readonly RULE_after_ops = 45;
  public static readonly RULE_select_stmt_no_parens = 46;
  public static readonly RULE_with_clause = 47;
  public static readonly RULE_with_query = 48;
  public static readonly RULE_select_ops = 49;
  public static readonly RULE_select_ops_no_parens = 50;
  public static readonly RULE_select_primary = 51;
  public static readonly RULE_select_list = 52;
  public static readonly RULE_select_sublist = 53;
  public static readonly RULE_from_item = 54;
  public static readonly RULE_from_primary = 55;
  public static readonly RULE_alias_clause = 56;
  public static readonly RULE_from_function_column_def = 57;
  public static readonly RULE_groupby_clause = 58;
  public static readonly RULE_grouping_element_list = 59;
  public static readonly RULE_grouping_element = 60;
  public static readonly RULE_values_stmt = 61;
  public static readonly RULE_values_values = 62;
  public static readonly RULE_orderby_clause = 63;
  public static readonly RULE_sort_specifier_list = 64;
  public static readonly RULE_sort_specifier = 65;
  public static readonly RULE_order_specification = 66;
  public static readonly RULE_null_ordering = 67;
  public static readonly RULE_dollar_number = 68;
  public static readonly RULE_names_in_parens = 69;
  public static readonly RULE_names_references = 70;
  public static readonly RULE_op_chars = 71;
  public static readonly RULE_partition_by_columns = 72;
  public static readonly RULE_collate_identifier = 73;
  public static readonly RULE_indirection = 74;
  public static readonly RULE_indirection_list = 75;
  public static readonly RULE_indirection_var = 76;
  public static readonly RULE_all_simple_op = 77;
  public static readonly RULE_character_string = 78;
  public static readonly RULE_boolean_value = 79;
  public static readonly RULE_function_names = 80;
  public static readonly RULE_function_custom = 81;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'sql',
    'id_token',
    'identifier',
    'identifier_nontype',
    'col_label',
    'tokens_nonreserved',
    'tokens_nonreserved_except_function_type',
    'tokens_reserved_except_function_type',
    'tokens_reserved',
    'tokens_nonkeyword',
    'type_list',
    'data_type',
    'array_type',
    'predefined_type',
    'interval_field',
    'type_length',
    'precision_param',
    'vex',
    'vex_b',
    'op',
    'all_op_ref',
    'datetime_overlaps',
    'value_expression_primary',
    'unsigned_value_specification',
    'unsigned_numeric_literal',
    'truth_value',
    'case_expression',
    'cast_specification',
    'function_args',
    'function_body',
    'function_call',
    'vex_or_named_notation',
    'pointer',
    'comparison_mod',
    'filter_clause',
    'window_definition',
    'frame_clause',
    'frame_bound',
    'array_expression',
    'array_elements',
    'type_coercion',
    'schema_qualified_name',
    'set_qualifier',
    'table_subquery',
    'select_stmt',
    'after_ops',
    'select_stmt_no_parens',
    'with_clause',
    'with_query',
    'select_ops',
    'select_ops_no_parens',
    'select_primary',
    'select_list',
    'select_sublist',
    'from_item',
    'from_primary',
    'alias_clause',
    'from_function_column_def',
    'groupby_clause',
    'grouping_element_list',
    'grouping_element',
    'values_stmt',
    'values_values',
    'orderby_clause',
    'sort_specifier_list',
    'sort_specifier',
    'order_specification',
    'null_ordering',
    'dollar_number',
    'names_in_parens',
    'names_references',
    'op_chars',
    'partition_by_columns',
    'collate_identifier',
    'indirection',
    'indirection_list',
    'indirection_var',
    'all_simple_op',
    'character_string',
    'boolean_value',
    'function_names',
    'function_custom'
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'='",
    "':'",
    "';'",
    "','",
    undefined,
    "'<'",
    "'<='",
    "'>'",
    "'>='",
    "'('",
    "')'",
    "'+'",
    "'-'",
    "'*'",
    "'/'",
    "'%'",
    "'.'",
    "'''",
    "'\"'",
    "'$'",
    "'['",
    "']'",
    "'=>'",
    "':='",
    "'<<'",
    "'>>'",
    "'..'",
    "'#'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "' '",
    undefined,
    undefined,
    "'\u0009'",
    "'\uFEFF'"
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'WITH',
    'RECURSIVE',
    'SELECT',
    'FROM',
    'WHERE',
    'GROUP',
    'BY',
    'HAVING',
    'ORDER',
    'LIMIT',
    'OFFSET',
    'DISTINCT',
    'ALL',
    'ANY',
    'SOME',
    'UNION',
    'INTERSECT',
    'EXCEPT',
    'DESC',
    'ASC',
    'USING',
    'OPERATOR',
    'NULLS',
    'FIRST',
    'LAST',
    'LEFT',
    'RIGHT',
    'FULL',
    'INNER',
    'OUTER',
    'CROSS',
    'JOIN',
    'ON',
    'VALUES',
    'DEFAULT',
    'NATURAL',
    'TABLESAMPLE',
    'REPEATABLE',
    'LATERAL',
    'TABLE',
    'ONLY',
    'INTERVAL',
    'TO',
    'SECOND',
    'MINUTE',
    'HOUR',
    'DAY',
    'MONTH',
    'YEAR',
    'CAST',
    'TREAT',
    'CASE',
    'WHEN',
    'THEN',
    'ELSE',
    'END',
    'AND',
    'OR',
    'NOT',
    'IS',
    'NULL',
    'ISNULL',
    'NOTNULL',
    'TRUE',
    'FALSE',
    'BETWEEN',
    'IN',
    'LIKE',
    'ILIKE',
    'ARRAY',
    'BOOLEAN',
    'SMALLINT',
    'INT',
    'INTEGER',
    'BIGINT',
    'DEC',
    'DECIMAL',
    'DOUBLE',
    'FLOAT',
    'NUMERIC',
    'PRECISION',
    'REAL',
    'BIT',
    'VARYING',
    'NATIONAL',
    'CHARACTER',
    'CHAR',
    'NCHAR',
    'TIME',
    'WITHOUT',
    'WITHIN',
    'ZONE',
    'TIMESTAMP',
    'VARCHAR',
    'SETOF',
    'OF',
    'COLLATE',
    'OVER',
    'PARTITION',
    'WINDOW',
    'ROWS',
    'RANGE',
    'GROUPS',
    'UNBOUNDED',
    'PRECEDING',
    'FOLLOWING',
    'CURRENT',
    'ROW',
    'EXCLUDE',
    'TIES',
    'NO',
    'OTHERS',
    'ROLLUP',
    'CUBE',
    'GROUPING',
    'SETS',
    'ORDINALITY',
    'OVERLAPS',
    'AT',
    'AS',
    'ASYMMETRIC',
    'SYMMETRIC',
    'SIMILAR',
    'ESCAPE',
    'FETCH',
    'NEXT',
    'DOCUMENT',
    'UNKNOWN',
    'EXISTS',
    'CONTENT',
    'VARIADIC',
    'FILTER',
    'ALIAS',
    'STANDALONE',
    'YES',
    'VALUE',
    'NODE',
    'NAME',
    'VERSION',
    'PASSING',
    'REF',
    'COLUMNS',
    'XMLATTRIBUTES',
    'PATH',
    'FOR',
    'XMLNAMESPACES',
    'POW',
    'DATE',
    'ARRAY_AGG',
    'AVG',
    'BIT_AND',
    'BIT_OR',
    'BIT_XOR',
    'BOOL_AND',
    'BOOL_OR',
    'COUNT',
    'EVERY',
    'JSON_AGG',
    'JSON_OBJECT_AGG',
    'MAX',
    'MIN',
    'RANGE_AGG',
    'RANGE_INTERSECT_AGG',
    'STRING_AGG',
    'SUM',
    'XMLAGG',
    'ARRAY_APPEND',
    'ARRAY_CAT',
    'ARRAY_DIMS',
    'ARRAY_FILL',
    'ARRAY_LENGTH',
    'ARRAY_LOWER',
    'ARRAY_NDIMS',
    'ARRAY_POSITION',
    'ARRAY_PREPEND',
    'ARRAY_REMOVE',
    'ARRAY_REPLACE',
    'ARRAY_TO_STRING',
    'ARRAY_UPPER',
    'CARDINALITY',
    'TRIM_ARRAY',
    'UNNEST',
    'CONVERT',
    'CONVERT_FROM',
    'CONVERT_TO',
    'ENCODE',
    'DECODE',
    'BIT_COUNT',
    'BTRIM',
    'GET_BIT',
    'GET_BYTE',
    'LENGTH',
    'LTRIM',
    'MD5',
    'RTRIM',
    'SET_BIT',
    'SET_BYTE',
    'SHA224',
    'SHA256',
    'SHA384',
    'SHA512',
    'SUBSTR',
    'NUM_NONNULLS',
    'NUM_NULLS',
    'COALESCE',
    'NULLIF',
    'GREATEST',
    'LEAST',
    'AGE',
    'CLOCK_TIMESTAMP',
    'CURRENT_DATE',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'DATE_BIN',
    'DATE_PART',
    'DATE_TRUNC',
    'EXTRACT',
    'ISFINITE',
    'JUSTIFY_DAYS',
    'JUSTIFY_HOURS',
    'JUSTIFY_INTERVAL',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'MAKE_DATE',
    'MAKE_INTERVAL',
    'MAKE_TIME',
    'MAKE_TIMESTAMP',
    'MAKE_TIMESTAMPTZ',
    'NOW',
    'STATEMENT_TIMESTAMP',
    'TIMEOFDAY',
    'TRANSACTION_TIMESTAMP',
    'ENUM_FIRST',
    'ENUM_LAST',
    'ENUM_RANGE',
    'TO_CHAR',
    'TO_DATE',
    'TO_NUMBER',
    'TO_TIMESTAMP',
    'BOX',
    'CIRCLE',
    'LINE',
    'LSEG',
    'POINT',
    'POLYGON',
    'AREA',
    'CENTER',
    'DIAGONAL',
    'DIAMETER',
    'HEIGHT',
    'ISCLOSED',
    'ISOPEN',
    'NPOINTS',
    'PCLOSE',
    'POPEN',
    'RADIUS',
    'SLOPE',
    'WIDTH',
    'SINH',
    'COSH',
    'TANH',
    'ASINH',
    'ACOSH',
    'ATANH',
    'ABBREV',
    'BROADCAST',
    'FAMILY',
    'HOST',
    'HOSTMASK',
    'INET_MERGE',
    'INET_SAME_FAMILY',
    'MASKLEN',
    'NETMASK',
    'NETWORK',
    'SET_MASKLEN',
    'TEXT',
    'TRUNC',
    'MACADDR8_SET7BIT',
    'JSON_ARRAY_ELEMENTS',
    'JSONB_ARRAY_ELEMENTS',
    'JSON_ARRAY_ELEMENTS_TEXT',
    'JSONB_ARRAY_ELEMENTS_TEXT',
    'JSON_ARRAY_LENGTH',
    'JSONB_ARRAY_LENGTH',
    'JSON_EACH',
    'JSONB_EACH',
    'JSON_EACH_TEXT',
    'JSONB_EACH_TEXT',
    'JSON_EXTRACT_PATH',
    'JSONB_EXTRACT_PATH',
    'JSON_EXTRACT_PATH_TEXT',
    'JSONB_EXTRACT_PATH_TEXT',
    'JSON_OBJECT_KEYS',
    'JSONB_OBJECT_KEYS',
    'JSON_POPULATE_RECORD',
    'JSONB_POPULATE_RECORD',
    'JSON_POPULATE_RECORDSET',
    'JSONB_POPULATE_RECORDSET',
    'JSON_TO_RECORD',
    'JSONB_TO_RECORD',
    'JSON_TO_RECORDSET',
    'JSONB_TO_RECORDSET',
    'JSON_STRIP_NULLS',
    'JSONB_STRIP_NULLS',
    'JSONB_SET',
    'JSONB_SET_LAX',
    'JSONB_INSERT',
    'JSONB_PATH_EXISTS',
    'JSONB_PATH_MATCH',
    'JSONB_PATH_QUERY',
    'JSONB_PATH_QUERY_ARRAY',
    'JSONB_PATH_QUERY_FIRST',
    'JSONB_PATH_EXISTS_TZ',
    'JSONB_PATH_MATCH_TZ',
    'JSONB_PATH_QUERY_TZ',
    'JSONB_PATH_QUERY_ARRAY_TZ',
    'JSONB_PATH_QUERY_FIRST_TZ',
    'JSONB_PRETTY',
    'JSON_TYPEOF',
    'JSONB_TYPEOF',
    'TO_JSON',
    'TO_JSONB',
    'ARRAY_TO_JSON',
    'ROW_TO_JSON',
    'JSON_BUILD_ARRAY',
    'JSONB_BUILD_ARRAY',
    'JSON_BUILD_OBJECT',
    'JSON_OBJECT',
    'JSONB_OBJECT',
    'ABS',
    'CBRT',
    'CEIL',
    'DEGREES',
    'DIV',
    'EXP',
    'FACTORIAL',
    'FLOOR',
    'GCD',
    'LCM',
    'LN',
    'LOG',
    'LOG10',
    'MIN_SCALE',
    'MOD',
    'PI',
    'POWER',
    'RADIANS',
    'ROUND',
    'SCALE',
    'SIGN',
    'SQRT',
    'TRIM_SCALE',
    'WIDTH_BUCKET',
    'MODE',
    'PERCENTILE_CONT',
    'PERCENTILE_DISC',
    'RANDOM',
    'SETSEED',
    'LOWER',
    'UPPER',
    'ISEMPTY',
    'LOWER_INC',
    'UPPER_INC',
    'LOWER_INF',
    'UPPER_INF',
    'RANGE_MERGE',
    'MULTIRANGE',
    'TS_DEBUG',
    'TS_LEXIZE',
    'TS_PARSE',
    'TS_TOKEN_TYPE',
    'ARRAY_TO_TSVECTOR',
    'GET_CURRENT_TS_CONFIG',
    'NUMNODE',
    'PLAINTO_TSQUERY',
    'PHRASETO_TSQUERY',
    'WEBSEARCH_TO_TSQUERY',
    'QUERYTREE',
    'SETWEIGHT',
    'STRIP',
    'TO_TSQUERY',
    'TO_TSVECTOR',
    'JSON_TO_TSVECTOR',
    'TS_DELETE',
    'TS_FILTER',
    'TS_HEADLINE',
    'TS_RANK',
    'TS_RANK_CD',
    'TS_REWRITE',
    'TSQUERY_PHRASE',
    'TSVECTOR_TO_ARRAY',
    'GENERATE_SERIES',
    'GENERATE_SUBSCRIPTS',
    'CORR',
    'COVAR_POP',
    'COVAR_SAMP',
    'REGR_AVGX',
    'REGR_AVGY',
    'REGR_COUNT',
    'REGR_INTERCEPT',
    'REGR_R2',
    'REGR_SLOPE',
    'REGR_SXX',
    'REGR_SXY',
    'REGR_SYY',
    'STDDEV',
    'STDDEV_POP',
    'STDDEV_SAMP',
    'VARIANCE',
    'VAR_POP',
    'VAR_SAMP',
    'ASCII',
    'CHR',
    'CONCAT',
    'CONCAT_WS',
    'FORMAT',
    'INITCAP',
    'LPAD',
    'PARSE_IDENT',
    'QUOTE_IDENT',
    'QUOTE_LITERAL',
    'QUOTE_NULLABLE',
    'REGEXP_MATCH',
    'REGEXP_MATCHES',
    'REGEXP_REPLACE',
    'REGEXP_SPLIT_TO_ARRAY',
    'REGEXP_SPLIT_TO_TABLE',
    'REPEAT',
    'REPLACE',
    'REVERSE',
    'RPAD',
    'SPLIT_PART',
    'STRPOS',
    'STARTS_WITH',
    'STRING_TO_ARRAY',
    'STRING_TO_TABLE',
    'TO_ASCII',
    'TO_HEX',
    'TRANSLATE',
    'UNISTR',
    'BIT_LENGTH',
    'CHAR_LENGTH',
    'CHARACTER_LENGTH',
    'NORMALIZE',
    'OCTET_LENGTH',
    'OVERLAY',
    'POSITION',
    'SUBSTRING',
    'TRIM',
    'ACOS',
    'ACOSD',
    'ASIN',
    'ASIND',
    'ATAN',
    'ATAND',
    'ATAN2',
    'ATAN2D',
    'COS',
    'COSD',
    'COT',
    'COTD',
    'SIN',
    'SIND',
    'TAN',
    'TAND',
    'GEN_RANDOM_UUID',
    'ROW_NUMBER',
    'RANK',
    'DENSE_RANK',
    'PERCENT_RANK',
    'CUME_DIST',
    'NTILE',
    'LAG',
    'LEAD',
    'FIRST_VALUE',
    'LAST_VALUE',
    'NTH_VALUE',
    'XMLCOMMENT',
    'XMLCONCAT',
    'XMLELEMENT',
    'XMLFOREST',
    'XMLPI',
    'XMLROOT',
    'XMLEXISTS',
    'XML_IS_WELL_FORMED',
    'XML_IS_WELL_FORMED_CONTENT',
    'XML_IS_WELL_FORMED_DOCUMENT',
    'XPATH',
    'XPATH_EXISTS',
    'XMLTABLE',
    'TABLE_TO_XML',
    'CAST_EXPRESSION',
    'EQUAL',
    'COLON',
    'SEMI_COLON',
    'COMMA',
    'NOT_EQUAL',
    'LTH',
    'LEQ',
    'GTH',
    'GEQ',
    'LEFT_PAREN',
    'RIGHT_PAREN',
    'PLUS',
    'MINUS',
    'MULTIPLY',
    'DIVIDE',
    'MODULAR',
    'DOT',
    'QUOTE_CHAR',
    'DOUBLE_QUOTE',
    'DOLLAR',
    'LEFT_BRACKET',
    'RIGHT_BRACKET',
    'EQUAL_GTH',
    'COLON_EQUAL',
    'LESS_LESS',
    'GREATER_GREATER',
    'DOUBLE_DOT',
    'HASH_SIGN',
    'BlockComment',
    'LineComment',
    'OP_CHARS',
    'NUMBER_LITERAL',
    'REAL_NUMBER',
    'DOLLAR_NUMBER',
    'Identifier',
    'QuotedIdentifier',
    'Character_String_Literal',
    'BeginDollarStringConstant',
    'Space',
    'White_Space',
    'New_Line',
    'Tab',
    'BOM',
    'BAD',
    'Text_between_Dollar',
    'EndDollarStringConstant'
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    PostgresParser._LITERAL_NAMES,
    PostgresParser._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return PostgresParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'PostgresParser.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return PostgresParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return PostgresParser._serializedATN;
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message);
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(PostgresParser._ATN, this);
  }
  // @RuleVersion(0)
  public sql(): SqlContext {
    let _localctx: SqlContext = new SqlContext(this._ctx, this.state);
    this.enterRule(_localctx, 0, PostgresParser.RULE_sql);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 165;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.BOM) {
          {
            this.state = 164;
            this.match(PostgresParser.BOM);
          }
        }

        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.SEMI_COLON) {
          {
            {
              this.state = 167;
              this.match(PostgresParser.SEMI_COLON);
            }
          }
          this.state = 172;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          _la === PostgresParser.WITH ||
          _la === PostgresParser.SELECT ||
          _la === PostgresParser.VALUES ||
          _la === PostgresParser.TABLE ||
          _la === PostgresParser.LEFT_PAREN
        ) {
          {
            {
              this.state = 173;
              this.select_stmt();
              this.state = 180;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case PostgresParser.SEMI_COLON:
                  {
                    this.state = 175;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                      {
                        {
                          this.state = 174;
                          this.match(PostgresParser.SEMI_COLON);
                        }
                      }
                      this.state = 177;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                    } while (_la === PostgresParser.SEMI_COLON);
                  }
                  break;
                case PostgresParser.EOF:
                  {
                    this.state = 179;
                    this.match(PostgresParser.EOF);
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 186;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 187;
        this.match(PostgresParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public id_token(): Id_tokenContext {
    let _localctx: Id_tokenContext = new Id_tokenContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, PostgresParser.RULE_id_token);
    try {
      this.state = 192;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 189;
            this.match(PostgresParser.Identifier);
          }
          break;
        case PostgresParser.QuotedIdentifier:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 190;
            this.match(PostgresParser.QuotedIdentifier);
          }
          break;
        case PostgresParser.ALIAS:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 191;
            this.tokens_nonkeyword();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public identifier(): IdentifierContext {
    let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 4, PostgresParser.RULE_identifier);
    try {
      this.state = 197;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.ALIAS:
        case PostgresParser.Identifier:
        case PostgresParser.QuotedIdentifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 194;
            this.id_token();
          }
          break;
        case PostgresParser.RECURSIVE:
        case PostgresParser.BY:
        case PostgresParser.OPERATOR:
        case PostgresParser.NULLS:
        case PostgresParser.FIRST:
        case PostgresParser.LAST:
        case PostgresParser.SECOND:
        case PostgresParser.MINUTE:
        case PostgresParser.HOUR:
        case PostgresParser.DAY:
        case PostgresParser.MONTH:
        case PostgresParser.YEAR:
        case PostgresParser.DOUBLE:
        case PostgresParser.VARYING:
        case PostgresParser.WITHOUT:
        case PostgresParser.WITHIN:
        case PostgresParser.ZONE:
        case PostgresParser.OF:
        case PostgresParser.OVER:
        case PostgresParser.PARTITION:
        case PostgresParser.ROWS:
        case PostgresParser.RANGE:
        case PostgresParser.GROUPS:
        case PostgresParser.UNBOUNDED:
        case PostgresParser.PRECEDING:
        case PostgresParser.FOLLOWING:
        case PostgresParser.CURRENT:
        case PostgresParser.EXCLUDE:
        case PostgresParser.TIES:
        case PostgresParser.NO:
        case PostgresParser.OTHERS:
        case PostgresParser.ROLLUP:
        case PostgresParser.SETS:
        case PostgresParser.AT:
        case PostgresParser.ESCAPE:
        case PostgresParser.NEXT:
        case PostgresParser.DOCUMENT:
        case PostgresParser.UNKNOWN:
        case PostgresParser.FILTER:
        case PostgresParser.FAMILY:
        case PostgresParser.TEXT:
        case PostgresParser.MODE:
        case PostgresParser.STRIP:
        case PostgresParser.REPLACE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 195;
            this.tokens_nonreserved();
          }
          break;
        case PostgresParser.VALUES:
        case PostgresParser.INTERVAL:
        case PostgresParser.TREAT:
        case PostgresParser.BETWEEN:
        case PostgresParser.BOOLEAN:
        case PostgresParser.SMALLINT:
        case PostgresParser.INT:
        case PostgresParser.INTEGER:
        case PostgresParser.BIGINT:
        case PostgresParser.DEC:
        case PostgresParser.DECIMAL:
        case PostgresParser.FLOAT:
        case PostgresParser.NUMERIC:
        case PostgresParser.PRECISION:
        case PostgresParser.REAL:
        case PostgresParser.BIT:
        case PostgresParser.NATIONAL:
        case PostgresParser.CHARACTER:
        case PostgresParser.CHAR:
        case PostgresParser.NCHAR:
        case PostgresParser.TIME:
        case PostgresParser.TIMESTAMP:
        case PostgresParser.VARCHAR:
        case PostgresParser.SETOF:
        case PostgresParser.ROW:
        case PostgresParser.GROUPING:
        case PostgresParser.EXISTS:
        case PostgresParser.COALESCE:
        case PostgresParser.NULLIF:
        case PostgresParser.GREATEST:
        case PostgresParser.LEAST:
        case PostgresParser.EXTRACT:
        case PostgresParser.OVERLAY:
        case PostgresParser.POSITION:
        case PostgresParser.SUBSTRING:
        case PostgresParser.TRIM:
        case PostgresParser.XMLCONCAT:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 196;
            this.tokens_nonreserved_except_function_type();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public identifier_nontype(): Identifier_nontypeContext {
    let _localctx: Identifier_nontypeContext = new Identifier_nontypeContext(this._ctx, this.state);
    this.enterRule(_localctx, 6, PostgresParser.RULE_identifier_nontype);
    try {
      this.state = 202;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.ALIAS:
        case PostgresParser.Identifier:
        case PostgresParser.QuotedIdentifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 199;
            this.id_token();
          }
          break;
        case PostgresParser.RECURSIVE:
        case PostgresParser.BY:
        case PostgresParser.OPERATOR:
        case PostgresParser.NULLS:
        case PostgresParser.FIRST:
        case PostgresParser.LAST:
        case PostgresParser.SECOND:
        case PostgresParser.MINUTE:
        case PostgresParser.HOUR:
        case PostgresParser.DAY:
        case PostgresParser.MONTH:
        case PostgresParser.YEAR:
        case PostgresParser.DOUBLE:
        case PostgresParser.VARYING:
        case PostgresParser.WITHOUT:
        case PostgresParser.WITHIN:
        case PostgresParser.ZONE:
        case PostgresParser.OF:
        case PostgresParser.OVER:
        case PostgresParser.PARTITION:
        case PostgresParser.ROWS:
        case PostgresParser.RANGE:
        case PostgresParser.GROUPS:
        case PostgresParser.UNBOUNDED:
        case PostgresParser.PRECEDING:
        case PostgresParser.FOLLOWING:
        case PostgresParser.CURRENT:
        case PostgresParser.EXCLUDE:
        case PostgresParser.TIES:
        case PostgresParser.NO:
        case PostgresParser.OTHERS:
        case PostgresParser.ROLLUP:
        case PostgresParser.SETS:
        case PostgresParser.AT:
        case PostgresParser.ESCAPE:
        case PostgresParser.NEXT:
        case PostgresParser.DOCUMENT:
        case PostgresParser.UNKNOWN:
        case PostgresParser.FILTER:
        case PostgresParser.FAMILY:
        case PostgresParser.TEXT:
        case PostgresParser.MODE:
        case PostgresParser.STRIP:
        case PostgresParser.REPLACE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 200;
            this.tokens_nonreserved();
          }
          break;
        case PostgresParser.LEFT:
        case PostgresParser.RIGHT:
        case PostgresParser.FULL:
        case PostgresParser.INNER:
        case PostgresParser.OUTER:
        case PostgresParser.CROSS:
        case PostgresParser.JOIN:
        case PostgresParser.NATURAL:
        case PostgresParser.TABLESAMPLE:
        case PostgresParser.IS:
        case PostgresParser.ISNULL:
        case PostgresParser.NOTNULL:
        case PostgresParser.LIKE:
        case PostgresParser.ILIKE:
        case PostgresParser.OVERLAPS:
        case PostgresParser.SIMILAR:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 201;
            this.tokens_reserved_except_function_type();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public col_label(): Col_labelContext {
    let _localctx: Col_labelContext = new Col_labelContext(this._ctx, this.state);
    this.enterRule(_localctx, 8, PostgresParser.RULE_col_label);
    try {
      this.state = 209;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.ALIAS:
        case PostgresParser.Identifier:
        case PostgresParser.QuotedIdentifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 204;
            this.id_token();
          }
          break;
        case PostgresParser.WITH:
        case PostgresParser.SELECT:
        case PostgresParser.FROM:
        case PostgresParser.WHERE:
        case PostgresParser.GROUP:
        case PostgresParser.HAVING:
        case PostgresParser.ORDER:
        case PostgresParser.LIMIT:
        case PostgresParser.OFFSET:
        case PostgresParser.DISTINCT:
        case PostgresParser.ALL:
        case PostgresParser.ANY:
        case PostgresParser.SOME:
        case PostgresParser.UNION:
        case PostgresParser.INTERSECT:
        case PostgresParser.EXCEPT:
        case PostgresParser.DESC:
        case PostgresParser.ASC:
        case PostgresParser.USING:
        case PostgresParser.ON:
        case PostgresParser.DEFAULT:
        case PostgresParser.LATERAL:
        case PostgresParser.TABLE:
        case PostgresParser.ONLY:
        case PostgresParser.TO:
        case PostgresParser.CAST:
        case PostgresParser.CASE:
        case PostgresParser.WHEN:
        case PostgresParser.THEN:
        case PostgresParser.ELSE:
        case PostgresParser.END:
        case PostgresParser.AND:
        case PostgresParser.OR:
        case PostgresParser.NOT:
        case PostgresParser.NULL:
        case PostgresParser.TRUE:
        case PostgresParser.FALSE:
        case PostgresParser.IN:
        case PostgresParser.ARRAY:
        case PostgresParser.COLLATE:
        case PostgresParser.WINDOW:
        case PostgresParser.AS:
        case PostgresParser.ASYMMETRIC:
        case PostgresParser.SYMMETRIC:
        case PostgresParser.FETCH:
        case PostgresParser.VARIADIC:
        case PostgresParser.CURRENT_DATE:
        case PostgresParser.CURRENT_TIME:
        case PostgresParser.CURRENT_TIMESTAMP:
        case PostgresParser.LOCALTIME:
        case PostgresParser.LOCALTIMESTAMP:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 205;
            this.tokens_reserved();
          }
          break;
        case PostgresParser.RECURSIVE:
        case PostgresParser.BY:
        case PostgresParser.OPERATOR:
        case PostgresParser.NULLS:
        case PostgresParser.FIRST:
        case PostgresParser.LAST:
        case PostgresParser.SECOND:
        case PostgresParser.MINUTE:
        case PostgresParser.HOUR:
        case PostgresParser.DAY:
        case PostgresParser.MONTH:
        case PostgresParser.YEAR:
        case PostgresParser.DOUBLE:
        case PostgresParser.VARYING:
        case PostgresParser.WITHOUT:
        case PostgresParser.WITHIN:
        case PostgresParser.ZONE:
        case PostgresParser.OF:
        case PostgresParser.OVER:
        case PostgresParser.PARTITION:
        case PostgresParser.ROWS:
        case PostgresParser.RANGE:
        case PostgresParser.GROUPS:
        case PostgresParser.UNBOUNDED:
        case PostgresParser.PRECEDING:
        case PostgresParser.FOLLOWING:
        case PostgresParser.CURRENT:
        case PostgresParser.EXCLUDE:
        case PostgresParser.TIES:
        case PostgresParser.NO:
        case PostgresParser.OTHERS:
        case PostgresParser.ROLLUP:
        case PostgresParser.SETS:
        case PostgresParser.AT:
        case PostgresParser.ESCAPE:
        case PostgresParser.NEXT:
        case PostgresParser.DOCUMENT:
        case PostgresParser.UNKNOWN:
        case PostgresParser.FILTER:
        case PostgresParser.FAMILY:
        case PostgresParser.TEXT:
        case PostgresParser.MODE:
        case PostgresParser.STRIP:
        case PostgresParser.REPLACE:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 206;
            this.tokens_nonreserved();
          }
          break;
        case PostgresParser.LEFT:
        case PostgresParser.RIGHT:
        case PostgresParser.FULL:
        case PostgresParser.INNER:
        case PostgresParser.OUTER:
        case PostgresParser.CROSS:
        case PostgresParser.JOIN:
        case PostgresParser.NATURAL:
        case PostgresParser.TABLESAMPLE:
        case PostgresParser.IS:
        case PostgresParser.ISNULL:
        case PostgresParser.NOTNULL:
        case PostgresParser.LIKE:
        case PostgresParser.ILIKE:
        case PostgresParser.OVERLAPS:
        case PostgresParser.SIMILAR:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 207;
            this.tokens_reserved_except_function_type();
          }
          break;
        case PostgresParser.VALUES:
        case PostgresParser.INTERVAL:
        case PostgresParser.TREAT:
        case PostgresParser.BETWEEN:
        case PostgresParser.BOOLEAN:
        case PostgresParser.SMALLINT:
        case PostgresParser.INT:
        case PostgresParser.INTEGER:
        case PostgresParser.BIGINT:
        case PostgresParser.DEC:
        case PostgresParser.DECIMAL:
        case PostgresParser.FLOAT:
        case PostgresParser.NUMERIC:
        case PostgresParser.PRECISION:
        case PostgresParser.REAL:
        case PostgresParser.BIT:
        case PostgresParser.NATIONAL:
        case PostgresParser.CHARACTER:
        case PostgresParser.CHAR:
        case PostgresParser.NCHAR:
        case PostgresParser.TIME:
        case PostgresParser.TIMESTAMP:
        case PostgresParser.VARCHAR:
        case PostgresParser.SETOF:
        case PostgresParser.ROW:
        case PostgresParser.GROUPING:
        case PostgresParser.EXISTS:
        case PostgresParser.COALESCE:
        case PostgresParser.NULLIF:
        case PostgresParser.GREATEST:
        case PostgresParser.LEAST:
        case PostgresParser.EXTRACT:
        case PostgresParser.OVERLAY:
        case PostgresParser.POSITION:
        case PostgresParser.SUBSTRING:
        case PostgresParser.TRIM:
        case PostgresParser.XMLCONCAT:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 208;
            this.tokens_nonreserved_except_function_type();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tokens_nonreserved(): Tokens_nonreservedContext {
    let _localctx: Tokens_nonreservedContext = new Tokens_nonreservedContext(this._ctx, this.state);
    this.enterRule(_localctx, 10, PostgresParser.RULE_tokens_nonreserved);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 211;
        _la = this._input.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << PostgresParser.RECURSIVE) |
                  (1 << PostgresParser.BY) |
                  (1 << PostgresParser.OPERATOR) |
                  (1 << PostgresParser.NULLS) |
                  (1 << PostgresParser.FIRST) |
                  (1 << PostgresParser.LAST))) !==
                0) ||
            (((_la - 44) & ~0x1f) === 0 &&
              ((1 << (_la - 44)) &
                ((1 << (PostgresParser.SECOND - 44)) |
                  (1 << (PostgresParser.MINUTE - 44)) |
                  (1 << (PostgresParser.HOUR - 44)) |
                  (1 << (PostgresParser.DAY - 44)) |
                  (1 << (PostgresParser.MONTH - 44)) |
                  (1 << (PostgresParser.YEAR - 44)))) !==
                0) ||
            (((_la - 78) & ~0x1f) === 0 &&
              ((1 << (_la - 78)) &
                ((1 << (PostgresParser.DOUBLE - 78)) |
                  (1 << (PostgresParser.VARYING - 78)) |
                  (1 << (PostgresParser.WITHOUT - 78)) |
                  (1 << (PostgresParser.WITHIN - 78)) |
                  (1 << (PostgresParser.ZONE - 78)) |
                  (1 << (PostgresParser.OF - 78)) |
                  (1 << (PostgresParser.OVER - 78)) |
                  (1 << (PostgresParser.PARTITION - 78)) |
                  (1 << (PostgresParser.ROWS - 78)) |
                  (1 << (PostgresParser.RANGE - 78)) |
                  (1 << (PostgresParser.GROUPS - 78)) |
                  (1 << (PostgresParser.UNBOUNDED - 78)) |
                  (1 << (PostgresParser.PRECEDING - 78)) |
                  (1 << (PostgresParser.FOLLOWING - 78)) |
                  (1 << (PostgresParser.CURRENT - 78)) |
                  (1 << (PostgresParser.EXCLUDE - 78)))) !==
                0) ||
            (((_la - 110) & ~0x1f) === 0 &&
              ((1 << (_la - 110)) &
                ((1 << (PostgresParser.TIES - 110)) |
                  (1 << (PostgresParser.NO - 110)) |
                  (1 << (PostgresParser.OTHERS - 110)) |
                  (1 << (PostgresParser.ROLLUP - 110)) |
                  (1 << (PostgresParser.SETS - 110)) |
                  (1 << (PostgresParser.AT - 110)) |
                  (1 << (PostgresParser.ESCAPE - 110)) |
                  (1 << (PostgresParser.NEXT - 110)) |
                  (1 << (PostgresParser.DOCUMENT - 110)) |
                  (1 << (PostgresParser.UNKNOWN - 110)) |
                  (1 << (PostgresParser.FILTER - 110)))) !==
                0) ||
            _la === PostgresParser.FAMILY ||
            _la === PostgresParser.TEXT ||
            _la === PostgresParser.MODE ||
            _la === PostgresParser.STRIP ||
            _la === PostgresParser.REPLACE
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tokens_nonreserved_except_function_type(): Tokens_nonreserved_except_function_typeContext {
    let _localctx: Tokens_nonreserved_except_function_typeContext =
      new Tokens_nonreserved_except_function_typeContext(this._ctx, this.state);
    this.enterRule(_localctx, 12, PostgresParser.RULE_tokens_nonreserved_except_function_type);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 213;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 34) & ~0x1f) === 0 &&
              ((1 << (_la - 34)) &
                ((1 << (PostgresParser.VALUES - 34)) |
                  (1 << (PostgresParser.INTERVAL - 34)) |
                  (1 << (PostgresParser.TREAT - 34)))) !==
                0) ||
            (((_la - 66) & ~0x1f) === 0 &&
              ((1 << (_la - 66)) &
                ((1 << (PostgresParser.BETWEEN - 66)) |
                  (1 << (PostgresParser.BOOLEAN - 66)) |
                  (1 << (PostgresParser.SMALLINT - 66)) |
                  (1 << (PostgresParser.INT - 66)) |
                  (1 << (PostgresParser.INTEGER - 66)) |
                  (1 << (PostgresParser.BIGINT - 66)) |
                  (1 << (PostgresParser.DEC - 66)) |
                  (1 << (PostgresParser.DECIMAL - 66)) |
                  (1 << (PostgresParser.FLOAT - 66)) |
                  (1 << (PostgresParser.NUMERIC - 66)) |
                  (1 << (PostgresParser.PRECISION - 66)) |
                  (1 << (PostgresParser.REAL - 66)) |
                  (1 << (PostgresParser.BIT - 66)) |
                  (1 << (PostgresParser.NATIONAL - 66)) |
                  (1 << (PostgresParser.CHARACTER - 66)) |
                  (1 << (PostgresParser.CHAR - 66)) |
                  (1 << (PostgresParser.NCHAR - 66)) |
                  (1 << (PostgresParser.TIME - 66)) |
                  (1 << (PostgresParser.TIMESTAMP - 66)) |
                  (1 << (PostgresParser.VARCHAR - 66)) |
                  (1 << (PostgresParser.SETOF - 66)))) !==
                0) ||
            (((_la - 108) & ~0x1f) === 0 &&
              ((1 << (_la - 108)) &
                ((1 << (PostgresParser.ROW - 108)) |
                  (1 << (PostgresParser.GROUPING - 108)) |
                  (1 << (PostgresParser.EXISTS - 108)))) !==
                0) ||
            (((_la - 205) & ~0x1f) === 0 &&
              ((1 << (_la - 205)) &
                ((1 << (PostgresParser.COALESCE - 205)) |
                  (1 << (PostgresParser.NULLIF - 205)) |
                  (1 << (PostgresParser.GREATEST - 205)) |
                  (1 << (PostgresParser.LEAST - 205)) |
                  (1 << (PostgresParser.EXTRACT - 205)))) !==
                0) ||
            (((_la - 446) & ~0x1f) === 0 &&
              ((1 << (_la - 446)) &
                ((1 << (PostgresParser.OVERLAY - 446)) |
                  (1 << (PostgresParser.POSITION - 446)) |
                  (1 << (PostgresParser.SUBSTRING - 446)) |
                  (1 << (PostgresParser.TRIM - 446)))) !==
                0) ||
            _la === PostgresParser.XMLCONCAT
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tokens_reserved_except_function_type(): Tokens_reserved_except_function_typeContext {
    let _localctx: Tokens_reserved_except_function_typeContext =
      new Tokens_reserved_except_function_typeContext(this._ctx, this.state);
    this.enterRule(_localctx, 14, PostgresParser.RULE_tokens_reserved_except_function_type);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 215;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 26) & ~0x1f) === 0 &&
              ((1 << (_la - 26)) &
                ((1 << (PostgresParser.LEFT - 26)) |
                  (1 << (PostgresParser.RIGHT - 26)) |
                  (1 << (PostgresParser.FULL - 26)) |
                  (1 << (PostgresParser.INNER - 26)) |
                  (1 << (PostgresParser.OUTER - 26)) |
                  (1 << (PostgresParser.CROSS - 26)) |
                  (1 << (PostgresParser.JOIN - 26)) |
                  (1 << (PostgresParser.NATURAL - 26)) |
                  (1 << (PostgresParser.TABLESAMPLE - 26)))) !==
                0) ||
            (((_la - 60) & ~0x1f) === 0 &&
              ((1 << (_la - 60)) &
                ((1 << (PostgresParser.IS - 60)) |
                  (1 << (PostgresParser.ISNULL - 60)) |
                  (1 << (PostgresParser.NOTNULL - 60)) |
                  (1 << (PostgresParser.LIKE - 60)) |
                  (1 << (PostgresParser.ILIKE - 60)))) !==
                0) ||
            _la === PostgresParser.OVERLAPS ||
            _la === PostgresParser.SIMILAR
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tokens_reserved(): Tokens_reservedContext {
    let _localctx: Tokens_reservedContext = new Tokens_reservedContext(this._ctx, this.state);
    this.enterRule(_localctx, 16, PostgresParser.RULE_tokens_reserved);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 217;
        _la = this._input.LA(1);
        if (
          !(
            ((_la & ~0x1f) === 0 &&
              ((1 << _la) &
                ((1 << PostgresParser.WITH) |
                  (1 << PostgresParser.SELECT) |
                  (1 << PostgresParser.FROM) |
                  (1 << PostgresParser.WHERE) |
                  (1 << PostgresParser.GROUP) |
                  (1 << PostgresParser.HAVING) |
                  (1 << PostgresParser.ORDER) |
                  (1 << PostgresParser.LIMIT) |
                  (1 << PostgresParser.OFFSET) |
                  (1 << PostgresParser.DISTINCT) |
                  (1 << PostgresParser.ALL) |
                  (1 << PostgresParser.ANY) |
                  (1 << PostgresParser.SOME) |
                  (1 << PostgresParser.UNION) |
                  (1 << PostgresParser.INTERSECT) |
                  (1 << PostgresParser.EXCEPT) |
                  (1 << PostgresParser.DESC) |
                  (1 << PostgresParser.ASC) |
                  (1 << PostgresParser.USING))) !==
                0) ||
            (((_la - 33) & ~0x1f) === 0 &&
              ((1 << (_la - 33)) &
                ((1 << (PostgresParser.ON - 33)) |
                  (1 << (PostgresParser.DEFAULT - 33)) |
                  (1 << (PostgresParser.LATERAL - 33)) |
                  (1 << (PostgresParser.TABLE - 33)) |
                  (1 << (PostgresParser.ONLY - 33)) |
                  (1 << (PostgresParser.TO - 33)) |
                  (1 << (PostgresParser.CAST - 33)) |
                  (1 << (PostgresParser.CASE - 33)) |
                  (1 << (PostgresParser.WHEN - 33)) |
                  (1 << (PostgresParser.THEN - 33)) |
                  (1 << (PostgresParser.ELSE - 33)) |
                  (1 << (PostgresParser.END - 33)) |
                  (1 << (PostgresParser.AND - 33)) |
                  (1 << (PostgresParser.OR - 33)) |
                  (1 << (PostgresParser.NOT - 33)) |
                  (1 << (PostgresParser.NULL - 33)) |
                  (1 << (PostgresParser.TRUE - 33)))) !==
                0) ||
            (((_la - 65) & ~0x1f) === 0 &&
              ((1 << (_la - 65)) &
                ((1 << (PostgresParser.FALSE - 65)) |
                  (1 << (PostgresParser.IN - 65)) |
                  (1 << (PostgresParser.ARRAY - 65)))) !==
                0) ||
            (((_la - 97) & ~0x1f) === 0 &&
              ((1 << (_la - 97)) &
                ((1 << (PostgresParser.COLLATE - 97)) |
                  (1 << (PostgresParser.WINDOW - 97)) |
                  (1 << (PostgresParser.AS - 97)) |
                  (1 << (PostgresParser.ASYMMETRIC - 97)) |
                  (1 << (PostgresParser.SYMMETRIC - 97)) |
                  (1 << (PostgresParser.FETCH - 97)))) !==
                0) ||
            _la === PostgresParser.VARIADIC ||
            (((_la - 211) & ~0x1f) === 0 &&
              ((1 << (_la - 211)) &
                ((1 << (PostgresParser.CURRENT_DATE - 211)) |
                  (1 << (PostgresParser.CURRENT_TIME - 211)) |
                  (1 << (PostgresParser.CURRENT_TIMESTAMP - 211)) |
                  (1 << (PostgresParser.LOCALTIME - 211)) |
                  (1 << (PostgresParser.LOCALTIMESTAMP - 211)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public tokens_nonkeyword(): Tokens_nonkeywordContext {
    let _localctx: Tokens_nonkeywordContext = new Tokens_nonkeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 18, PostgresParser.RULE_tokens_nonkeyword);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 219;
        this.match(PostgresParser.ALIAS);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_list(): Type_listContext {
    let _localctx: Type_listContext = new Type_listContext(this._ctx, this.state);
    this.enterRule(_localctx, 20, PostgresParser.RULE_type_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 221;
        this.data_type();
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 222;
              this.match(PostgresParser.COMMA);
              this.state = 223;
              this.data_type();
            }
          }
          this.state = 228;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public data_type(): Data_typeContext {
    let _localctx: Data_typeContext = new Data_typeContext(this._ctx, this.state);
    this.enterRule(_localctx, 22, PostgresParser.RULE_data_type);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 230;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.SETOF) {
          {
            this.state = 229;
            this.match(PostgresParser.SETOF);
          }
        }

        this.state = 232;
        this.predefined_type();
        this.state = 242;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
          case 1:
            {
              this.state = 233;
              this.match(PostgresParser.ARRAY);
              this.state = 235;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                  {
                    this.state = 234;
                    this.array_type();
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              this.state = 238;
              this._errHandler.sync(this);
              _alt = 1;
              do {
                switch (_alt) {
                  case 1:
                    {
                      {
                        this.state = 237;
                        this.array_type();
                      }
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
                this.state = 240;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
              } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public array_type(): Array_typeContext {
    let _localctx: Array_typeContext = new Array_typeContext(this._ctx, this.state);
    this.enterRule(_localctx, 24, PostgresParser.RULE_array_type);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 244;
        this.match(PostgresParser.LEFT_BRACKET);
        this.state = 246;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.NUMBER_LITERAL) {
          {
            this.state = 245;
            this.match(PostgresParser.NUMBER_LITERAL);
          }
        }

        this.state = 248;
        this.match(PostgresParser.RIGHT_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public predefined_type(): Predefined_typeContext {
    let _localctx: Predefined_typeContext = new Predefined_typeContext(this._ctx, this.state);
    this.enterRule(_localctx, 26, PostgresParser.RULE_predefined_type);
    let _la: number;
    try {
      this.state = 341;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 250;
            this.match(PostgresParser.BIGINT);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 251;
            this.match(PostgresParser.BIT);
            this.state = 253;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
              case 1:
                {
                  this.state = 252;
                  this.match(PostgresParser.VARYING);
                }
                break;
            }
            this.state = 256;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
              case 1:
                {
                  this.state = 255;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 258;
            this.match(PostgresParser.BOOLEAN);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 259;
            this.match(PostgresParser.DEC);
            this.state = 261;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
              case 1:
                {
                  this.state = 260;
                  this.precision_param();
                }
                break;
            }
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 263;
            this.match(PostgresParser.DECIMAL);
            this.state = 265;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
              case 1:
                {
                  this.state = 264;
                  this.precision_param();
                }
                break;
            }
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 267;
            this.match(PostgresParser.DOUBLE);
            this.state = 268;
            this.match(PostgresParser.PRECISION);
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 269;
            this.match(PostgresParser.FLOAT);
            this.state = 271;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
              case 1:
                {
                  this.state = 270;
                  this.precision_param();
                }
                break;
            }
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 273;
            this.match(PostgresParser.INT);
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 274;
            this.match(PostgresParser.INTEGER);
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 275;
            this.match(PostgresParser.INTERVAL);
            this.state = 277;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
              case 1:
                {
                  this.state = 276;
                  this.interval_field();
                }
                break;
            }
            this.state = 280;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
              case 1:
                {
                  this.state = 279;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 283;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.NATIONAL) {
              {
                this.state = 282;
                this.match(PostgresParser.NATIONAL);
              }
            }

            this.state = 285;
            _la = this._input.LA(1);
            if (!(_la === PostgresParser.CHARACTER || _la === PostgresParser.CHAR)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 287;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
              case 1:
                {
                  this.state = 286;
                  this.match(PostgresParser.VARYING);
                }
                break;
            }
            this.state = 290;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
              case 1:
                {
                  this.state = 289;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 292;
            this.match(PostgresParser.NCHAR);
            this.state = 294;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
              case 1:
                {
                  this.state = 293;
                  this.match(PostgresParser.VARYING);
                }
                break;
            }
            this.state = 297;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
              case 1:
                {
                  this.state = 296;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 299;
            this.match(PostgresParser.NUMERIC);
            this.state = 301;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
              case 1:
                {
                  this.state = 300;
                  this.precision_param();
                }
                break;
            }
          }
          break;

        case 14:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 303;
            this.match(PostgresParser.REAL);
          }
          break;

        case 15:
          this.enterOuterAlt(_localctx, 15);
          {
            this.state = 304;
            this.match(PostgresParser.SMALLINT);
          }
          break;

        case 16:
          this.enterOuterAlt(_localctx, 16);
          {
            this.state = 305;
            this.match(PostgresParser.TIME);
            this.state = 307;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
              case 1:
                {
                  this.state = 306;
                  this.type_length();
                }
                break;
            }
            this.state = 312;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
              case 1:
                {
                  this.state = 309;
                  _la = this._input.LA(1);
                  if (!(_la === PostgresParser.WITH || _la === PostgresParser.WITHOUT)) {
                    this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 310;
                  this.match(PostgresParser.TIME);
                  this.state = 311;
                  this.match(PostgresParser.ZONE);
                }
                break;
            }
          }
          break;

        case 17:
          this.enterOuterAlt(_localctx, 17);
          {
            this.state = 314;
            this.match(PostgresParser.TIMESTAMP);
            this.state = 316;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
              case 1:
                {
                  this.state = 315;
                  this.type_length();
                }
                break;
            }
            this.state = 321;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
              case 1:
                {
                  this.state = 318;
                  _la = this._input.LA(1);
                  if (!(_la === PostgresParser.WITH || _la === PostgresParser.WITHOUT)) {
                    this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                  this.state = 319;
                  this.match(PostgresParser.TIME);
                  this.state = 320;
                  this.match(PostgresParser.ZONE);
                }
                break;
            }
          }
          break;

        case 18:
          this.enterOuterAlt(_localctx, 18);
          {
            this.state = 323;
            this.match(PostgresParser.VARCHAR);
            this.state = 325;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
              case 1:
                {
                  this.state = 324;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 19:
          this.enterOuterAlt(_localctx, 19);
          {
            this.state = 327;
            this.identifier_nontype();
            this.state = 339;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
              case 1:
                {
                  this.state = 328;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 329;
                  this.vex(0);
                  this.state = 334;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  while (_la === PostgresParser.COMMA) {
                    {
                      {
                        this.state = 330;
                        this.match(PostgresParser.COMMA);
                        this.state = 331;
                        this.vex(0);
                      }
                    }
                    this.state = 336;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                  }
                  this.state = 337;
                  this.match(PostgresParser.RIGHT_PAREN);
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public interval_field(): Interval_fieldContext {
    let _localctx: Interval_fieldContext = new Interval_fieldContext(this._ctx, this.state);
    this.enterRule(_localctx, 28, PostgresParser.RULE_interval_field);
    try {
      this.state = 370;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 343;
            this.match(PostgresParser.YEAR);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 344;
            this.match(PostgresParser.MONTH);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 345;
            this.match(PostgresParser.DAY);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 346;
            this.match(PostgresParser.HOUR);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 347;
            this.match(PostgresParser.MINUTE);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 348;
            this.match(PostgresParser.SECOND);
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 349;
            this.match(PostgresParser.YEAR);
            this.state = 350;
            this.match(PostgresParser.TO);
            this.state = 351;
            this.match(PostgresParser.MONTH);
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 352;
            this.match(PostgresParser.DAY);
            this.state = 353;
            this.match(PostgresParser.TO);
            this.state = 354;
            this.match(PostgresParser.HOUR);
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 355;
            this.match(PostgresParser.DAY);
            this.state = 356;
            this.match(PostgresParser.TO);
            this.state = 357;
            this.match(PostgresParser.MINUTE);
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 358;
            this.match(PostgresParser.DAY);
            this.state = 359;
            this.match(PostgresParser.TO);
            this.state = 360;
            this.match(PostgresParser.SECOND);
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 361;
            this.match(PostgresParser.HOUR);
            this.state = 362;
            this.match(PostgresParser.TO);
            this.state = 363;
            this.match(PostgresParser.MINUTE);
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 364;
            this.match(PostgresParser.HOUR);
            this.state = 365;
            this.match(PostgresParser.TO);
            this.state = 366;
            this.match(PostgresParser.SECOND);
          }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 367;
            this.match(PostgresParser.MINUTE);
            this.state = 368;
            this.match(PostgresParser.TO);
            this.state = 369;
            this.match(PostgresParser.SECOND);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_length(): Type_lengthContext {
    let _localctx: Type_lengthContext = new Type_lengthContext(this._ctx, this.state);
    this.enterRule(_localctx, 30, PostgresParser.RULE_type_length);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 372;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 373;
        this.match(PostgresParser.NUMBER_LITERAL);
        this.state = 374;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public precision_param(): Precision_paramContext {
    let _localctx: Precision_paramContext = new Precision_paramContext(this._ctx, this.state);
    this.enterRule(_localctx, 32, PostgresParser.RULE_precision_param);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 376;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 377;
        _localctx._precision = this.match(PostgresParser.NUMBER_LITERAL);
        this.state = 380;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.COMMA) {
          {
            this.state = 378;
            this.match(PostgresParser.COMMA);
            this.state = 379;
            _localctx._scale = this.match(PostgresParser.NUMBER_LITERAL);
          }
        }

        this.state = 382;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public vex(): VexContext;
  public vex(_p: number): VexContext;
  // @RuleVersion(0)
  public vex(_p?: number): VexContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: VexContext = new VexContext(this._ctx, _parentState);
    let _prevctx: VexContext = _localctx;
    let _startState: number = 34;
    this.enterRecursionRule(_localctx, 34, PostgresParser.RULE_vex, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 409;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
          case 1:
            {
              this.state = 385;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 386;
              this.vex(0);
              this.state = 387;
              this.match(PostgresParser.RIGHT_PAREN);
              this.state = 389;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                  {
                    this.state = 388;
                    this.indirection_list();
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              this.state = 391;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 392;
              this.vex(0);
              this.state = 395;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              do {
                {
                  {
                    this.state = 393;
                    this.match(PostgresParser.COMMA);
                    this.state = 394;
                    this.vex(0);
                  }
                }
                this.state = 397;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              } while (_la === PostgresParser.COMMA);
              this.state = 399;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;

          case 3:
            {
              this.state = 401;
              _la = this._input.LA(1);
              if (!(_la === PostgresParser.PLUS || _la === PostgresParser.MINUS)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 402;
              this.vex(24);
            }
            break;

          case 4:
            {
              this.state = 403;
              this.op();
              this.state = 404;
              this.vex(18);
            }
            break;

          case 5:
            {
              this.state = 406;
              this.match(PostgresParser.NOT);
              this.state = 407;
              this.vex(4);
            }
            break;

          case 6:
            {
              this.state = 408;
              this.value_expression_primary();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 546;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 544;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 411;
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 23)');
                    }
                    this.state = 412;
                    this.match(PostgresParser.AT);
                    this.state = 413;
                    this.match(PostgresParser.TIME);
                    this.state = 414;
                    this.match(PostgresParser.ZONE);
                    this.state = 415;
                    this.vex(24);
                  }
                  break;

                case 2:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 416;
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 22)');
                    }
                    this.state = 417;
                    this.match(PostgresParser.EXP);
                    this.state = 418;
                    this.vex(23);
                  }
                  break;

                case 3:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 419;
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 21)');
                    }
                    this.state = 420;
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 506) & ~0x1f) === 0 &&
                        ((1 << (_la - 506)) &
                          ((1 << (PostgresParser.MULTIPLY - 506)) |
                            (1 << (PostgresParser.DIVIDE - 506)) |
                            (1 << (PostgresParser.MODULAR - 506)))) !==
                          0
                      )
                    ) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 421;
                    this.vex(22);
                  }
                  break;

                case 4:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 422;
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 20)');
                    }
                    this.state = 423;
                    _la = this._input.LA(1);
                    if (!(_la === PostgresParser.PLUS || _la === PostgresParser.MINUS)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 424;
                    this.vex(21);
                  }
                  break;

                case 5:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 425;
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 19)');
                    }
                    this.state = 426;
                    this.op();
                    this.state = 427;
                    this.vex(20);
                  }
                  break;

                case 6:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 429;
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 15)');
                    }
                    this.state = 431;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 430;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 433;
                    this.match(PostgresParser.BETWEEN);
                    this.state = 435;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.ASYMMETRIC || _la === PostgresParser.SYMMETRIC) {
                      {
                        this.state = 434;
                        _la = this._input.LA(1);
                        if (
                          !(_la === PostgresParser.ASYMMETRIC || _la === PostgresParser.SYMMETRIC)
                        ) {
                          this._errHandler.recoverInline(this);
                        } else {
                          if (this._input.LA(1) === Token.EOF) {
                            this.matchedEOF = true;
                          }

                          this._errHandler.reportMatch(this);
                          this.consume();
                        }
                      }
                    }

                    this.state = 437;
                    this.vex_b(0);
                    this.state = 438;
                    this.match(PostgresParser.AND);
                    this.state = 439;
                    this.vex(16);
                  }
                  break;

                case 7:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 441;
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)');
                    }
                    this.state = 443;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 442;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 449;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.LIKE:
                        {
                          this.state = 445;
                          this.match(PostgresParser.LIKE);
                        }
                        break;
                      case PostgresParser.ILIKE:
                        {
                          this.state = 446;
                          this.match(PostgresParser.ILIKE);
                        }
                        break;
                      case PostgresParser.SIMILAR:
                        {
                          this.state = 447;
                          this.match(PostgresParser.SIMILAR);
                          this.state = 448;
                          this.match(PostgresParser.TO);
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                    this.state = 451;
                    this.vex(15);
                  }
                  break;

                case 8:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 452;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)');
                    }
                    this.state = 454;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 453;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 460;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.LIKE:
                        {
                          this.state = 456;
                          this.match(PostgresParser.LIKE);
                        }
                        break;
                      case PostgresParser.ILIKE:
                        {
                          this.state = 457;
                          this.match(PostgresParser.ILIKE);
                        }
                        break;
                      case PostgresParser.SIMILAR:
                        {
                          this.state = 458;
                          this.match(PostgresParser.SIMILAR);
                          this.state = 459;
                          this.match(PostgresParser.TO);
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                    this.state = 462;
                    this.vex(0);
                    this.state = 463;
                    this.match(PostgresParser.ESCAPE);
                    this.state = 464;
                    this.vex(14);
                  }
                  break;

                case 9:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 466;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)');
                    }
                    this.state = 467;
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 493) & ~0x1f) === 0 &&
                        ((1 << (_la - 493)) &
                          ((1 << (PostgresParser.EQUAL - 493)) |
                            (1 << (PostgresParser.NOT_EQUAL - 493)) |
                            (1 << (PostgresParser.LTH - 493)) |
                            (1 << (PostgresParser.LEQ - 493)) |
                            (1 << (PostgresParser.GTH - 493)) |
                            (1 << (PostgresParser.GEQ - 493)))) !==
                          0
                      )
                    ) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 468;
                    this.vex(13);
                  }
                  break;

                case 10:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 469;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)');
                    }
                    this.state = 470;
                    this.match(PostgresParser.IS);
                    this.state = 472;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 471;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 474;
                    this.match(PostgresParser.DISTINCT);
                    this.state = 475;
                    this.match(PostgresParser.FROM);
                    this.state = 476;
                    this.vex(11);
                  }
                  break;

                case 11:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 477;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
                    }
                    this.state = 478;
                    this.match(PostgresParser.AND);
                    this.state = 479;
                    this.vex(4);
                  }
                  break;

                case 12:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 480;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 481;
                    this.match(PostgresParser.OR);
                    this.state = 482;
                    this.vex(3);
                  }
                  break;

                case 13:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 483;
                    if (!this.precpred(this._ctx, 28)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 28)');
                    }
                    this.state = 484;
                    this.match(PostgresParser.CAST_EXPRESSION);
                    this.state = 485;
                    this.data_type();
                  }
                  break;

                case 14:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 486;
                    if (!this.precpred(this._ctx, 25)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 25)');
                    }
                    this.state = 487;
                    this.collate_identifier();
                  }
                  break;

                case 15:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 488;
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 17)');
                    }
                    this.state = 489;
                    this.op();
                  }
                  break;

                case 16:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 490;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)');
                    }
                    this.state = 492;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 491;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 494;
                    this.match(PostgresParser.IN);
                    this.state = 495;
                    this.match(PostgresParser.LEFT_PAREN);
                    this.state = 505;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                      case 1:
                        {
                          this.state = 496;
                          this.select_stmt_no_parens();
                        }
                        break;

                      case 2:
                        {
                          this.state = 497;
                          this.vex(0);
                          this.state = 502;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          while (_la === PostgresParser.COMMA) {
                            {
                              {
                                this.state = 498;
                                this.match(PostgresParser.COMMA);
                                this.state = 499;
                                this.vex(0);
                              }
                            }
                            this.state = 504;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                          }
                        }
                        break;
                    }
                    this.state = 507;
                    this.match(PostgresParser.RIGHT_PAREN);
                  }
                  break;

                case 17:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 509;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)');
                    }
                    this.state = 510;
                    this.match(PostgresParser.IS);
                    this.state = 512;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 511;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 516;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.ON:
                      case PostgresParser.TRUE:
                      case PostgresParser.FALSE:
                        {
                          this.state = 514;
                          this.truth_value();
                        }
                        break;
                      case PostgresParser.NULL:
                        {
                          this.state = 515;
                          this.match(PostgresParser.NULL);
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                  }
                  break;

                case 18:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 518;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)');
                    }
                    this.state = 519;
                    this.match(PostgresParser.IS);
                    this.state = 521;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 520;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 523;
                    this.match(PostgresParser.DOCUMENT);
                  }
                  break;

                case 19:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 524;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)');
                    }
                    this.state = 525;
                    this.match(PostgresParser.IS);
                    this.state = 527;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 526;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 529;
                    this.match(PostgresParser.UNKNOWN);
                  }
                  break;

                case 20:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 530;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)');
                    }
                    this.state = 531;
                    this.match(PostgresParser.IS);
                    this.state = 533;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 532;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 535;
                    this.match(PostgresParser.OF);
                    this.state = 536;
                    this.match(PostgresParser.LEFT_PAREN);
                    this.state = 537;
                    this.type_list();
                    this.state = 538;
                    this.match(PostgresParser.RIGHT_PAREN);
                  }
                  break;

                case 21:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 540;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)');
                    }
                    this.state = 541;
                    this.match(PostgresParser.ISNULL);
                  }
                  break;

                case 22:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 542;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                    }
                    this.state = 543;
                    this.match(PostgresParser.NOTNULL);
                  }
                  break;
              }
            }
          }
          this.state = 548;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }

  public vex_b(): Vex_bContext;
  public vex_b(_p: number): Vex_bContext;
  // @RuleVersion(0)
  public vex_b(_p?: number): Vex_bContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Vex_bContext = new Vex_bContext(this._ctx, _parentState);
    let _prevctx: Vex_bContext = _localctx;
    let _startState: number = 36;
    this.enterRecursionRule(_localctx, 36, PostgresParser.RULE_vex_b, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 572;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
          case 1:
            {
              this.state = 550;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 551;
              this.vex(0);
              this.state = 552;
              this.match(PostgresParser.RIGHT_PAREN);
              this.state = 554;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                  {
                    this.state = 553;
                    this.indirection_list();
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              this.state = 556;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 557;
              this.vex(0);
              this.state = 560;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              do {
                {
                  {
                    this.state = 558;
                    this.match(PostgresParser.COMMA);
                    this.state = 559;
                    this.vex(0);
                  }
                }
                this.state = 562;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              } while (_la === PostgresParser.COMMA);
              this.state = 564;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;

          case 3:
            {
              this.state = 566;
              _la = this._input.LA(1);
              if (!(_la === PostgresParser.PLUS || _la === PostgresParser.MINUS)) {
                this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 567;
              this.vex_b(13);
            }
            break;

          case 4:
            {
              this.state = 568;
              this.op();
              this.state = 569;
              this.vex_b(8);
            }
            break;

          case 5:
            {
              this.state = 571;
              this.value_expression_primary();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 627;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 625;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                case 1:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 574;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)');
                    }
                    this.state = 575;
                    this.match(PostgresParser.EXP);
                    this.state = 576;
                    this.vex_b(13);
                  }
                  break;

                case 2:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 577;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)');
                    }
                    this.state = 578;
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 506) & ~0x1f) === 0 &&
                        ((1 << (_la - 506)) &
                          ((1 << (PostgresParser.MULTIPLY - 506)) |
                            (1 << (PostgresParser.DIVIDE - 506)) |
                            (1 << (PostgresParser.MODULAR - 506)))) !==
                          0
                      )
                    ) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 579;
                    this.vex_b(12);
                  }
                  break;

                case 3:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 580;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)');
                    }
                    this.state = 581;
                    _la = this._input.LA(1);
                    if (!(_la === PostgresParser.PLUS || _la === PostgresParser.MINUS)) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 582;
                    this.vex_b(11);
                  }
                  break;

                case 4:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 583;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)');
                    }
                    this.state = 584;
                    this.op();
                    this.state = 585;
                    this.vex_b(10);
                  }
                  break;

                case 5:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 587;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)');
                    }
                    this.state = 588;
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 493) & ~0x1f) === 0 &&
                        ((1 << (_la - 493)) &
                          ((1 << (PostgresParser.EQUAL - 493)) |
                            (1 << (PostgresParser.NOT_EQUAL - 493)) |
                            (1 << (PostgresParser.LTH - 493)) |
                            (1 << (PostgresParser.LEQ - 493)) |
                            (1 << (PostgresParser.GTH - 493)) |
                            (1 << (PostgresParser.GEQ - 493)))) !==
                          0
                      )
                    ) {
                      this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 589;
                    this.vex_b(7);
                  }
                  break;

                case 6:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 590;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                    }
                    this.state = 591;
                    this.match(PostgresParser.IS);
                    this.state = 593;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 592;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 595;
                    this.match(PostgresParser.DISTINCT);
                    this.state = 596;
                    this.match(PostgresParser.FROM);
                    this.state = 597;
                    this.vex_b(6);
                  }
                  break;

                case 7:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 598;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)');
                    }
                    this.state = 599;
                    this.match(PostgresParser.CAST_EXPRESSION);
                    this.state = 600;
                    this.data_type();
                  }
                  break;

                case 8:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 601;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)');
                    }
                    this.state = 602;
                    this.op();
                  }
                  break;

                case 9:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 603;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)');
                    }
                    this.state = 604;
                    this.match(PostgresParser.IS);
                    this.state = 606;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 605;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 608;
                    this.match(PostgresParser.DOCUMENT);
                  }
                  break;

                case 10:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 609;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
                    }
                    this.state = 610;
                    this.match(PostgresParser.IS);
                    this.state = 612;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 611;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 614;
                    this.match(PostgresParser.UNKNOWN);
                  }
                  break;

                case 11:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 615;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 616;
                    this.match(PostgresParser.IS);
                    this.state = 618;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 617;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 620;
                    this.match(PostgresParser.OF);
                    this.state = 621;
                    this.match(PostgresParser.LEFT_PAREN);
                    this.state = 622;
                    this.type_list();
                    this.state = 623;
                    this.match(PostgresParser.RIGHT_PAREN);
                  }
                  break;
              }
            }
          }
          this.state = 629;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public op(): OpContext {
    let _localctx: OpContext = new OpContext(this._ctx, this.state);
    this.enterRule(_localctx, 38, PostgresParser.RULE_op);
    try {
      this.state = 638;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.LESS_LESS:
        case PostgresParser.GREATER_GREATER:
        case PostgresParser.HASH_SIGN:
        case PostgresParser.OP_CHARS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 630;
            this.op_chars();
          }
          break;
        case PostgresParser.OPERATOR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 631;
            this.match(PostgresParser.OPERATOR);
            this.state = 632;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 633;
            this.identifier();
            this.state = 634;
            this.match(PostgresParser.DOT);
            this.state = 635;
            this.all_simple_op();
            this.state = 636;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public all_op_ref(): All_op_refContext {
    let _localctx: All_op_refContext = new All_op_refContext(this._ctx, this.state);
    this.enterRule(_localctx, 40, PostgresParser.RULE_all_op_ref);
    try {
      this.state = 648;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.EXP:
        case PostgresParser.EQUAL:
        case PostgresParser.NOT_EQUAL:
        case PostgresParser.LTH:
        case PostgresParser.LEQ:
        case PostgresParser.GTH:
        case PostgresParser.GEQ:
        case PostgresParser.PLUS:
        case PostgresParser.MINUS:
        case PostgresParser.MULTIPLY:
        case PostgresParser.DIVIDE:
        case PostgresParser.MODULAR:
        case PostgresParser.LESS_LESS:
        case PostgresParser.GREATER_GREATER:
        case PostgresParser.HASH_SIGN:
        case PostgresParser.OP_CHARS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 640;
            this.all_simple_op();
          }
          break;
        case PostgresParser.OPERATOR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 641;
            this.match(PostgresParser.OPERATOR);
            this.state = 642;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 643;
            this.identifier();
            this.state = 644;
            this.match(PostgresParser.DOT);
            this.state = 645;
            this.all_simple_op();
            this.state = 646;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public datetime_overlaps(): Datetime_overlapsContext {
    let _localctx: Datetime_overlapsContext = new Datetime_overlapsContext(this._ctx, this.state);
    this.enterRule(_localctx, 42, PostgresParser.RULE_datetime_overlaps);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 650;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 651;
        this.vex(0);
        this.state = 652;
        this.match(PostgresParser.COMMA);
        this.state = 653;
        this.vex(0);
        this.state = 654;
        this.match(PostgresParser.RIGHT_PAREN);
        this.state = 655;
        this.match(PostgresParser.OVERLAPS);
        this.state = 656;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 657;
        this.vex(0);
        this.state = 658;
        this.match(PostgresParser.COMMA);
        this.state = 659;
        this.vex(0);
        this.state = 660;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public value_expression_primary(): Value_expression_primaryContext {
    let _localctx: Value_expression_primaryContext = new Value_expression_primaryContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 44, PostgresParser.RULE_value_expression_primary);
    try {
      this.state = 680;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 662;
            this.unsigned_value_specification();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 663;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 664;
            this.select_stmt_no_parens();
            this.state = 665;
            this.match(PostgresParser.RIGHT_PAREN);
            this.state = 667;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
              case 1:
                {
                  this.state = 666;
                  this.indirection_list();
                }
                break;
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 669;
            this.case_expression();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 670;
            this.match(PostgresParser.NULL);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 671;
            this.match(PostgresParser.MULTIPLY);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 672;
            this.comparison_mod();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 673;
            this.match(PostgresParser.EXISTS);
            this.state = 674;
            this.table_subquery();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 675;
            this.function_call();
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 676;
            this.indirection_var();
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 677;
            this.array_expression();
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 678;
            this.type_coercion();
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 679;
            this.datetime_overlaps();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public unsigned_value_specification(): Unsigned_value_specificationContext {
    let _localctx: Unsigned_value_specificationContext = new Unsigned_value_specificationContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 46, PostgresParser.RULE_unsigned_value_specification);
    try {
      this.state = 685;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.NUMBER_LITERAL:
        case PostgresParser.REAL_NUMBER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 682;
            this.unsigned_numeric_literal();
          }
          break;
        case PostgresParser.Character_String_Literal:
        case PostgresParser.BeginDollarStringConstant:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 683;
            this.character_string();
          }
          break;
        case PostgresParser.ON:
        case PostgresParser.TRUE:
        case PostgresParser.FALSE:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 684;
            this.truth_value();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public unsigned_numeric_literal(): Unsigned_numeric_literalContext {
    let _localctx: Unsigned_numeric_literalContext = new Unsigned_numeric_literalContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 48, PostgresParser.RULE_unsigned_numeric_literal);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 687;
        _la = this._input.LA(1);
        if (!(_la === PostgresParser.NUMBER_LITERAL || _la === PostgresParser.REAL_NUMBER)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public truth_value(): Truth_valueContext {
    let _localctx: Truth_valueContext = new Truth_valueContext(this._ctx, this.state);
    this.enterRule(_localctx, 50, PostgresParser.RULE_truth_value);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 689;
        _la = this._input.LA(1);
        if (
          !(
            _la === PostgresParser.ON ||
            _la === PostgresParser.TRUE ||
            _la === PostgresParser.FALSE
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public case_expression(): Case_expressionContext {
    let _localctx: Case_expressionContext = new Case_expressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 52, PostgresParser.RULE_case_expression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 691;
        this.match(PostgresParser.CASE);
        this.state = 693;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PostgresParser.RECURSIVE) |
                (1 << PostgresParser.BY) |
                (1 << PostgresParser.ALL) |
                (1 << PostgresParser.ANY) |
                (1 << PostgresParser.SOME) |
                (1 << PostgresParser.OPERATOR) |
                (1 << PostgresParser.NULLS) |
                (1 << PostgresParser.FIRST) |
                (1 << PostgresParser.LAST) |
                (1 << PostgresParser.LEFT) |
                (1 << PostgresParser.RIGHT) |
                (1 << PostgresParser.FULL) |
                (1 << PostgresParser.INNER) |
                (1 << PostgresParser.OUTER) |
                (1 << PostgresParser.CROSS))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (PostgresParser.JOIN - 32)) |
                (1 << (PostgresParser.ON - 32)) |
                (1 << (PostgresParser.VALUES - 32)) |
                (1 << (PostgresParser.NATURAL - 32)) |
                (1 << (PostgresParser.TABLESAMPLE - 32)) |
                (1 << (PostgresParser.INTERVAL - 32)) |
                (1 << (PostgresParser.SECOND - 32)) |
                (1 << (PostgresParser.MINUTE - 32)) |
                (1 << (PostgresParser.HOUR - 32)) |
                (1 << (PostgresParser.DAY - 32)) |
                (1 << (PostgresParser.MONTH - 32)) |
                (1 << (PostgresParser.YEAR - 32)) |
                (1 << (PostgresParser.TREAT - 32)) |
                (1 << (PostgresParser.CASE - 32)) |
                (1 << (PostgresParser.NOT - 32)) |
                (1 << (PostgresParser.IS - 32)) |
                (1 << (PostgresParser.NULL - 32)) |
                (1 << (PostgresParser.ISNULL - 32)) |
                (1 << (PostgresParser.NOTNULL - 32)))) !==
              0) ||
          (((_la - 64) & ~0x1f) === 0 &&
            ((1 << (_la - 64)) &
              ((1 << (PostgresParser.TRUE - 64)) |
                (1 << (PostgresParser.FALSE - 64)) |
                (1 << (PostgresParser.BETWEEN - 64)) |
                (1 << (PostgresParser.LIKE - 64)) |
                (1 << (PostgresParser.ILIKE - 64)) |
                (1 << (PostgresParser.ARRAY - 64)) |
                (1 << (PostgresParser.BOOLEAN - 64)) |
                (1 << (PostgresParser.SMALLINT - 64)) |
                (1 << (PostgresParser.INT - 64)) |
                (1 << (PostgresParser.INTEGER - 64)) |
                (1 << (PostgresParser.BIGINT - 64)) |
                (1 << (PostgresParser.DEC - 64)) |
                (1 << (PostgresParser.DECIMAL - 64)) |
                (1 << (PostgresParser.DOUBLE - 64)) |
                (1 << (PostgresParser.FLOAT - 64)) |
                (1 << (PostgresParser.NUMERIC - 64)) |
                (1 << (PostgresParser.PRECISION - 64)) |
                (1 << (PostgresParser.REAL - 64)) |
                (1 << (PostgresParser.BIT - 64)) |
                (1 << (PostgresParser.VARYING - 64)) |
                (1 << (PostgresParser.NATIONAL - 64)) |
                (1 << (PostgresParser.CHARACTER - 64)) |
                (1 << (PostgresParser.CHAR - 64)) |
                (1 << (PostgresParser.NCHAR - 64)) |
                (1 << (PostgresParser.TIME - 64)) |
                (1 << (PostgresParser.WITHOUT - 64)) |
                (1 << (PostgresParser.WITHIN - 64)) |
                (1 << (PostgresParser.ZONE - 64)) |
                (1 << (PostgresParser.TIMESTAMP - 64)) |
                (1 << (PostgresParser.VARCHAR - 64)) |
                (1 << (PostgresParser.SETOF - 64)))) !==
              0) ||
          (((_la - 96) & ~0x1f) === 0 &&
            ((1 << (_la - 96)) &
              ((1 << (PostgresParser.OF - 96)) |
                (1 << (PostgresParser.OVER - 96)) |
                (1 << (PostgresParser.PARTITION - 96)) |
                (1 << (PostgresParser.ROWS - 96)) |
                (1 << (PostgresParser.RANGE - 96)) |
                (1 << (PostgresParser.GROUPS - 96)) |
                (1 << (PostgresParser.UNBOUNDED - 96)) |
                (1 << (PostgresParser.PRECEDING - 96)) |
                (1 << (PostgresParser.FOLLOWING - 96)) |
                (1 << (PostgresParser.CURRENT - 96)) |
                (1 << (PostgresParser.ROW - 96)) |
                (1 << (PostgresParser.EXCLUDE - 96)) |
                (1 << (PostgresParser.TIES - 96)) |
                (1 << (PostgresParser.NO - 96)) |
                (1 << (PostgresParser.OTHERS - 96)) |
                (1 << (PostgresParser.ROLLUP - 96)) |
                (1 << (PostgresParser.GROUPING - 96)) |
                (1 << (PostgresParser.SETS - 96)) |
                (1 << (PostgresParser.OVERLAPS - 96)) |
                (1 << (PostgresParser.AT - 96)) |
                (1 << (PostgresParser.SIMILAR - 96)) |
                (1 << (PostgresParser.ESCAPE - 96)) |
                (1 << (PostgresParser.NEXT - 96)) |
                (1 << (PostgresParser.DOCUMENT - 96)))) !==
              0) ||
          (((_la - 128) & ~0x1f) === 0 &&
            ((1 << (_la - 128)) &
              ((1 << (PostgresParser.UNKNOWN - 128)) |
                (1 << (PostgresParser.EXISTS - 128)) |
                (1 << (PostgresParser.FILTER - 128)) |
                (1 << (PostgresParser.ALIAS - 128)) |
                (1 << (PostgresParser.PATH - 128)) |
                (1 << (PostgresParser.POW - 128)) |
                (1 << (PostgresParser.DATE - 128)) |
                (1 << (PostgresParser.ARRAY_AGG - 128)) |
                (1 << (PostgresParser.AVG - 128)) |
                (1 << (PostgresParser.BIT_AND - 128)) |
                (1 << (PostgresParser.BIT_OR - 128)) |
                (1 << (PostgresParser.BIT_XOR - 128)) |
                (1 << (PostgresParser.BOOL_AND - 128)) |
                (1 << (PostgresParser.BOOL_OR - 128)) |
                (1 << (PostgresParser.COUNT - 128)) |
                (1 << (PostgresParser.EVERY - 128)) |
                (1 << (PostgresParser.JSON_AGG - 128)) |
                (1 << (PostgresParser.JSON_OBJECT_AGG - 128)))) !==
              0) ||
          (((_la - 160) & ~0x1f) === 0 &&
            ((1 << (_la - 160)) &
              ((1 << (PostgresParser.MAX - 160)) |
                (1 << (PostgresParser.MIN - 160)) |
                (1 << (PostgresParser.RANGE_AGG - 160)) |
                (1 << (PostgresParser.RANGE_INTERSECT_AGG - 160)) |
                (1 << (PostgresParser.STRING_AGG - 160)) |
                (1 << (PostgresParser.SUM - 160)) |
                (1 << (PostgresParser.XMLAGG - 160)) |
                (1 << (PostgresParser.ARRAY_APPEND - 160)) |
                (1 << (PostgresParser.ARRAY_CAT - 160)) |
                (1 << (PostgresParser.ARRAY_DIMS - 160)) |
                (1 << (PostgresParser.ARRAY_FILL - 160)) |
                (1 << (PostgresParser.ARRAY_LENGTH - 160)) |
                (1 << (PostgresParser.ARRAY_LOWER - 160)) |
                (1 << (PostgresParser.ARRAY_NDIMS - 160)) |
                (1 << (PostgresParser.ARRAY_POSITION - 160)) |
                (1 << (PostgresParser.ARRAY_PREPEND - 160)) |
                (1 << (PostgresParser.ARRAY_REMOVE - 160)) |
                (1 << (PostgresParser.ARRAY_REPLACE - 160)) |
                (1 << (PostgresParser.ARRAY_TO_STRING - 160)) |
                (1 << (PostgresParser.ARRAY_UPPER - 160)) |
                (1 << (PostgresParser.CARDINALITY - 160)) |
                (1 << (PostgresParser.TRIM_ARRAY - 160)) |
                (1 << (PostgresParser.UNNEST - 160)) |
                (1 << (PostgresParser.CONVERT - 160)) |
                (1 << (PostgresParser.CONVERT_FROM - 160)) |
                (1 << (PostgresParser.CONVERT_TO - 160)) |
                (1 << (PostgresParser.ENCODE - 160)) |
                (1 << (PostgresParser.DECODE - 160)) |
                (1 << (PostgresParser.BIT_COUNT - 160)) |
                (1 << (PostgresParser.BTRIM - 160)) |
                (1 << (PostgresParser.GET_BIT - 160)) |
                (1 << (PostgresParser.GET_BYTE - 160)))) !==
              0) ||
          (((_la - 192) & ~0x1f) === 0 &&
            ((1 << (_la - 192)) &
              ((1 << (PostgresParser.LENGTH - 192)) |
                (1 << (PostgresParser.LTRIM - 192)) |
                (1 << (PostgresParser.MD5 - 192)) |
                (1 << (PostgresParser.RTRIM - 192)) |
                (1 << (PostgresParser.SET_BIT - 192)) |
                (1 << (PostgresParser.SET_BYTE - 192)) |
                (1 << (PostgresParser.SHA224 - 192)) |
                (1 << (PostgresParser.SHA256 - 192)) |
                (1 << (PostgresParser.SHA384 - 192)) |
                (1 << (PostgresParser.SHA512 - 192)) |
                (1 << (PostgresParser.SUBSTR - 192)) |
                (1 << (PostgresParser.NUM_NONNULLS - 192)) |
                (1 << (PostgresParser.NUM_NULLS - 192)) |
                (1 << (PostgresParser.COALESCE - 192)) |
                (1 << (PostgresParser.NULLIF - 192)) |
                (1 << (PostgresParser.GREATEST - 192)) |
                (1 << (PostgresParser.LEAST - 192)) |
                (1 << (PostgresParser.AGE - 192)) |
                (1 << (PostgresParser.CLOCK_TIMESTAMP - 192)) |
                (1 << (PostgresParser.CURRENT_DATE - 192)) |
                (1 << (PostgresParser.CURRENT_TIME - 192)) |
                (1 << (PostgresParser.CURRENT_TIMESTAMP - 192)) |
                (1 << (PostgresParser.DATE_BIN - 192)) |
                (1 << (PostgresParser.DATE_PART - 192)) |
                (1 << (PostgresParser.DATE_TRUNC - 192)) |
                (1 << (PostgresParser.EXTRACT - 192)) |
                (1 << (PostgresParser.ISFINITE - 192)) |
                (1 << (PostgresParser.JUSTIFY_DAYS - 192)) |
                (1 << (PostgresParser.JUSTIFY_HOURS - 192)) |
                (1 << (PostgresParser.JUSTIFY_INTERVAL - 192)) |
                (1 << (PostgresParser.LOCALTIME - 192)) |
                (1 << (PostgresParser.LOCALTIMESTAMP - 192)))) !==
              0) ||
          (((_la - 224) & ~0x1f) === 0 &&
            ((1 << (_la - 224)) &
              ((1 << (PostgresParser.MAKE_DATE - 224)) |
                (1 << (PostgresParser.MAKE_INTERVAL - 224)) |
                (1 << (PostgresParser.MAKE_TIME - 224)) |
                (1 << (PostgresParser.MAKE_TIMESTAMP - 224)) |
                (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 224)) |
                (1 << (PostgresParser.NOW - 224)) |
                (1 << (PostgresParser.STATEMENT_TIMESTAMP - 224)) |
                (1 << (PostgresParser.TIMEOFDAY - 224)) |
                (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 224)) |
                (1 << (PostgresParser.ENUM_FIRST - 224)) |
                (1 << (PostgresParser.ENUM_LAST - 224)) |
                (1 << (PostgresParser.ENUM_RANGE - 224)) |
                (1 << (PostgresParser.TO_CHAR - 224)) |
                (1 << (PostgresParser.TO_DATE - 224)) |
                (1 << (PostgresParser.TO_NUMBER - 224)) |
                (1 << (PostgresParser.TO_TIMESTAMP - 224)) |
                (1 << (PostgresParser.BOX - 224)) |
                (1 << (PostgresParser.CIRCLE - 224)) |
                (1 << (PostgresParser.LINE - 224)) |
                (1 << (PostgresParser.LSEG - 224)) |
                (1 << (PostgresParser.POINT - 224)) |
                (1 << (PostgresParser.POLYGON - 224)) |
                (1 << (PostgresParser.AREA - 224)) |
                (1 << (PostgresParser.CENTER - 224)) |
                (1 << (PostgresParser.DIAGONAL - 224)) |
                (1 << (PostgresParser.DIAMETER - 224)) |
                (1 << (PostgresParser.HEIGHT - 224)) |
                (1 << (PostgresParser.ISCLOSED - 224)) |
                (1 << (PostgresParser.ISOPEN - 224)) |
                (1 << (PostgresParser.NPOINTS - 224)) |
                (1 << (PostgresParser.PCLOSE - 224)) |
                (1 << (PostgresParser.POPEN - 224)))) !==
              0) ||
          (((_la - 256) & ~0x1f) === 0 &&
            ((1 << (_la - 256)) &
              ((1 << (PostgresParser.RADIUS - 256)) |
                (1 << (PostgresParser.SLOPE - 256)) |
                (1 << (PostgresParser.WIDTH - 256)) |
                (1 << (PostgresParser.SINH - 256)) |
                (1 << (PostgresParser.COSH - 256)) |
                (1 << (PostgresParser.TANH - 256)) |
                (1 << (PostgresParser.ASINH - 256)) |
                (1 << (PostgresParser.ACOSH - 256)) |
                (1 << (PostgresParser.ATANH - 256)) |
                (1 << (PostgresParser.ABBREV - 256)) |
                (1 << (PostgresParser.BROADCAST - 256)) |
                (1 << (PostgresParser.FAMILY - 256)) |
                (1 << (PostgresParser.HOST - 256)) |
                (1 << (PostgresParser.HOSTMASK - 256)) |
                (1 << (PostgresParser.INET_MERGE - 256)) |
                (1 << (PostgresParser.INET_SAME_FAMILY - 256)) |
                (1 << (PostgresParser.MASKLEN - 256)) |
                (1 << (PostgresParser.NETMASK - 256)) |
                (1 << (PostgresParser.NETWORK - 256)) |
                (1 << (PostgresParser.SET_MASKLEN - 256)) |
                (1 << (PostgresParser.TEXT - 256)) |
                (1 << (PostgresParser.TRUNC - 256)) |
                (1 << (PostgresParser.MACADDR8_SET7BIT - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_LENGTH - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 256)) |
                (1 << (PostgresParser.JSON_EACH - 256)) |
                (1 << (PostgresParser.JSONB_EACH - 256)) |
                (1 << (PostgresParser.JSON_EACH_TEXT - 256)))) !==
              0) ||
          (((_la - 288) & ~0x1f) === 0 &&
            ((1 << (_la - 288)) &
              ((1 << (PostgresParser.JSONB_EACH_TEXT - 288)) |
                (1 << (PostgresParser.JSON_EXTRACT_PATH - 288)) |
                (1 << (PostgresParser.JSONB_EXTRACT_PATH - 288)) |
                (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 288)) |
                (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 288)) |
                (1 << (PostgresParser.JSON_OBJECT_KEYS - 288)) |
                (1 << (PostgresParser.JSONB_OBJECT_KEYS - 288)) |
                (1 << (PostgresParser.JSON_POPULATE_RECORD - 288)) |
                (1 << (PostgresParser.JSONB_POPULATE_RECORD - 288)) |
                (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 288)) |
                (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 288)) |
                (1 << (PostgresParser.JSON_TO_RECORD - 288)) |
                (1 << (PostgresParser.JSONB_TO_RECORD - 288)) |
                (1 << (PostgresParser.JSON_TO_RECORDSET - 288)) |
                (1 << (PostgresParser.JSONB_TO_RECORDSET - 288)) |
                (1 << (PostgresParser.JSON_STRIP_NULLS - 288)) |
                (1 << (PostgresParser.JSONB_STRIP_NULLS - 288)) |
                (1 << (PostgresParser.JSONB_SET - 288)) |
                (1 << (PostgresParser.JSONB_SET_LAX - 288)) |
                (1 << (PostgresParser.JSONB_INSERT - 288)) |
                (1 << (PostgresParser.JSONB_PATH_EXISTS - 288)) |
                (1 << (PostgresParser.JSONB_PATH_MATCH - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 288)) |
                (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PRETTY - 288)) |
                (1 << (PostgresParser.JSON_TYPEOF - 288)))) !==
              0) ||
          (((_la - 320) & ~0x1f) === 0 &&
            ((1 << (_la - 320)) &
              ((1 << (PostgresParser.JSONB_TYPEOF - 320)) |
                (1 << (PostgresParser.TO_JSON - 320)) |
                (1 << (PostgresParser.TO_JSONB - 320)) |
                (1 << (PostgresParser.ARRAY_TO_JSON - 320)) |
                (1 << (PostgresParser.ROW_TO_JSON - 320)) |
                (1 << (PostgresParser.JSON_BUILD_ARRAY - 320)) |
                (1 << (PostgresParser.JSONB_BUILD_ARRAY - 320)) |
                (1 << (PostgresParser.JSON_BUILD_OBJECT - 320)) |
                (1 << (PostgresParser.JSON_OBJECT - 320)) |
                (1 << (PostgresParser.JSONB_OBJECT - 320)) |
                (1 << (PostgresParser.ABS - 320)) |
                (1 << (PostgresParser.CBRT - 320)) |
                (1 << (PostgresParser.CEIL - 320)) |
                (1 << (PostgresParser.DEGREES - 320)) |
                (1 << (PostgresParser.DIV - 320)) |
                (1 << (PostgresParser.EXP - 320)) |
                (1 << (PostgresParser.FACTORIAL - 320)) |
                (1 << (PostgresParser.FLOOR - 320)) |
                (1 << (PostgresParser.GCD - 320)) |
                (1 << (PostgresParser.LCM - 320)) |
                (1 << (PostgresParser.LN - 320)) |
                (1 << (PostgresParser.LOG - 320)) |
                (1 << (PostgresParser.LOG10 - 320)) |
                (1 << (PostgresParser.MIN_SCALE - 320)) |
                (1 << (PostgresParser.MOD - 320)) |
                (1 << (PostgresParser.PI - 320)) |
                (1 << (PostgresParser.POWER - 320)) |
                (1 << (PostgresParser.RADIANS - 320)) |
                (1 << (PostgresParser.ROUND - 320)) |
                (1 << (PostgresParser.SCALE - 320)) |
                (1 << (PostgresParser.SIGN - 320)) |
                (1 << (PostgresParser.SQRT - 320)))) !==
              0) ||
          (((_la - 352) & ~0x1f) === 0 &&
            ((1 << (_la - 352)) &
              ((1 << (PostgresParser.TRIM_SCALE - 352)) |
                (1 << (PostgresParser.WIDTH_BUCKET - 352)) |
                (1 << (PostgresParser.MODE - 352)) |
                (1 << (PostgresParser.PERCENTILE_CONT - 352)) |
                (1 << (PostgresParser.PERCENTILE_DISC - 352)) |
                (1 << (PostgresParser.RANDOM - 352)) |
                (1 << (PostgresParser.SETSEED - 352)) |
                (1 << (PostgresParser.LOWER - 352)) |
                (1 << (PostgresParser.UPPER - 352)) |
                (1 << (PostgresParser.ISEMPTY - 352)) |
                (1 << (PostgresParser.LOWER_INC - 352)) |
                (1 << (PostgresParser.UPPER_INC - 352)) |
                (1 << (PostgresParser.LOWER_INF - 352)) |
                (1 << (PostgresParser.UPPER_INF - 352)) |
                (1 << (PostgresParser.RANGE_MERGE - 352)) |
                (1 << (PostgresParser.MULTIRANGE - 352)) |
                (1 << (PostgresParser.TS_DEBUG - 352)) |
                (1 << (PostgresParser.TS_LEXIZE - 352)) |
                (1 << (PostgresParser.TS_PARSE - 352)) |
                (1 << (PostgresParser.TS_TOKEN_TYPE - 352)) |
                (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 352)) |
                (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 352)) |
                (1 << (PostgresParser.NUMNODE - 352)) |
                (1 << (PostgresParser.PLAINTO_TSQUERY - 352)) |
                (1 << (PostgresParser.PHRASETO_TSQUERY - 352)) |
                (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 352)) |
                (1 << (PostgresParser.QUERYTREE - 352)) |
                (1 << (PostgresParser.SETWEIGHT - 352)) |
                (1 << (PostgresParser.STRIP - 352)) |
                (1 << (PostgresParser.TO_TSQUERY - 352)) |
                (1 << (PostgresParser.TO_TSVECTOR - 352)) |
                (1 << (PostgresParser.JSON_TO_TSVECTOR - 352)))) !==
              0) ||
          (((_la - 384) & ~0x1f) === 0 &&
            ((1 << (_la - 384)) &
              ((1 << (PostgresParser.TS_DELETE - 384)) |
                (1 << (PostgresParser.TS_FILTER - 384)) |
                (1 << (PostgresParser.TS_HEADLINE - 384)) |
                (1 << (PostgresParser.TS_RANK - 384)) |
                (1 << (PostgresParser.TS_RANK_CD - 384)) |
                (1 << (PostgresParser.TS_REWRITE - 384)) |
                (1 << (PostgresParser.TSQUERY_PHRASE - 384)) |
                (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 384)) |
                (1 << (PostgresParser.GENERATE_SERIES - 384)) |
                (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 384)) |
                (1 << (PostgresParser.CORR - 384)) |
                (1 << (PostgresParser.COVAR_POP - 384)) |
                (1 << (PostgresParser.COVAR_SAMP - 384)) |
                (1 << (PostgresParser.REGR_AVGX - 384)) |
                (1 << (PostgresParser.REGR_AVGY - 384)) |
                (1 << (PostgresParser.REGR_COUNT - 384)) |
                (1 << (PostgresParser.REGR_INTERCEPT - 384)) |
                (1 << (PostgresParser.REGR_R2 - 384)) |
                (1 << (PostgresParser.REGR_SLOPE - 384)) |
                (1 << (PostgresParser.REGR_SXX - 384)) |
                (1 << (PostgresParser.REGR_SXY - 384)) |
                (1 << (PostgresParser.REGR_SYY - 384)) |
                (1 << (PostgresParser.STDDEV - 384)) |
                (1 << (PostgresParser.STDDEV_POP - 384)) |
                (1 << (PostgresParser.STDDEV_SAMP - 384)) |
                (1 << (PostgresParser.VARIANCE - 384)) |
                (1 << (PostgresParser.VAR_POP - 384)) |
                (1 << (PostgresParser.VAR_SAMP - 384)) |
                (1 << (PostgresParser.ASCII - 384)) |
                (1 << (PostgresParser.CHR - 384)) |
                (1 << (PostgresParser.CONCAT - 384)) |
                (1 << (PostgresParser.CONCAT_WS - 384)))) !==
              0) ||
          (((_la - 416) & ~0x1f) === 0 &&
            ((1 << (_la - 416)) &
              ((1 << (PostgresParser.FORMAT - 416)) |
                (1 << (PostgresParser.INITCAP - 416)) |
                (1 << (PostgresParser.LPAD - 416)) |
                (1 << (PostgresParser.PARSE_IDENT - 416)) |
                (1 << (PostgresParser.QUOTE_IDENT - 416)) |
                (1 << (PostgresParser.QUOTE_LITERAL - 416)) |
                (1 << (PostgresParser.QUOTE_NULLABLE - 416)) |
                (1 << (PostgresParser.REGEXP_MATCH - 416)) |
                (1 << (PostgresParser.REGEXP_MATCHES - 416)) |
                (1 << (PostgresParser.REGEXP_REPLACE - 416)) |
                (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 416)) |
                (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 416)) |
                (1 << (PostgresParser.REPEAT - 416)) |
                (1 << (PostgresParser.REPLACE - 416)) |
                (1 << (PostgresParser.REVERSE - 416)) |
                (1 << (PostgresParser.RPAD - 416)) |
                (1 << (PostgresParser.SPLIT_PART - 416)) |
                (1 << (PostgresParser.STRPOS - 416)) |
                (1 << (PostgresParser.STARTS_WITH - 416)) |
                (1 << (PostgresParser.STRING_TO_ARRAY - 416)) |
                (1 << (PostgresParser.STRING_TO_TABLE - 416)) |
                (1 << (PostgresParser.TO_ASCII - 416)) |
                (1 << (PostgresParser.TO_HEX - 416)) |
                (1 << (PostgresParser.TRANSLATE - 416)) |
                (1 << (PostgresParser.UNISTR - 416)) |
                (1 << (PostgresParser.BIT_LENGTH - 416)) |
                (1 << (PostgresParser.CHAR_LENGTH - 416)) |
                (1 << (PostgresParser.CHARACTER_LENGTH - 416)) |
                (1 << (PostgresParser.NORMALIZE - 416)) |
                (1 << (PostgresParser.OCTET_LENGTH - 416)) |
                (1 << (PostgresParser.OVERLAY - 416)) |
                (1 << (PostgresParser.POSITION - 416)))) !==
              0) ||
          (((_la - 448) & ~0x1f) === 0 &&
            ((1 << (_la - 448)) &
              ((1 << (PostgresParser.SUBSTRING - 448)) |
                (1 << (PostgresParser.TRIM - 448)) |
                (1 << (PostgresParser.ACOS - 448)) |
                (1 << (PostgresParser.ACOSD - 448)) |
                (1 << (PostgresParser.ASIN - 448)) |
                (1 << (PostgresParser.ASIND - 448)) |
                (1 << (PostgresParser.ATAN - 448)) |
                (1 << (PostgresParser.ATAND - 448)) |
                (1 << (PostgresParser.ATAN2 - 448)) |
                (1 << (PostgresParser.ATAN2D - 448)) |
                (1 << (PostgresParser.COS - 448)) |
                (1 << (PostgresParser.COSD - 448)) |
                (1 << (PostgresParser.COT - 448)) |
                (1 << (PostgresParser.COTD - 448)) |
                (1 << (PostgresParser.SIN - 448)) |
                (1 << (PostgresParser.SIND - 448)) |
                (1 << (PostgresParser.TAN - 448)) |
                (1 << (PostgresParser.TAND - 448)) |
                (1 << (PostgresParser.GEN_RANDOM_UUID - 448)) |
                (1 << (PostgresParser.ROW_NUMBER - 448)) |
                (1 << (PostgresParser.RANK - 448)) |
                (1 << (PostgresParser.DENSE_RANK - 448)) |
                (1 << (PostgresParser.PERCENT_RANK - 448)) |
                (1 << (PostgresParser.CUME_DIST - 448)) |
                (1 << (PostgresParser.NTILE - 448)) |
                (1 << (PostgresParser.LAG - 448)) |
                (1 << (PostgresParser.LEAD - 448)) |
                (1 << (PostgresParser.FIRST_VALUE - 448)) |
                (1 << (PostgresParser.LAST_VALUE - 448)) |
                (1 << (PostgresParser.NTH_VALUE - 448)) |
                (1 << (PostgresParser.XMLCOMMENT - 448)) |
                (1 << (PostgresParser.XMLCONCAT - 448)))) !==
              0) ||
          (((_la - 480) & ~0x1f) === 0 &&
            ((1 << (_la - 480)) &
              ((1 << (PostgresParser.XMLELEMENT - 480)) |
                (1 << (PostgresParser.XMLFOREST - 480)) |
                (1 << (PostgresParser.XMLPI - 480)) |
                (1 << (PostgresParser.XMLROOT - 480)) |
                (1 << (PostgresParser.XMLEXISTS - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 480)) |
                (1 << (PostgresParser.XPATH - 480)) |
                (1 << (PostgresParser.XPATH_EXISTS - 480)) |
                (1 << (PostgresParser.XMLTABLE - 480)) |
                (1 << (PostgresParser.TABLE_TO_XML - 480)) |
                (1 << (PostgresParser.LEFT_PAREN - 480)) |
                (1 << (PostgresParser.PLUS - 480)) |
                (1 << (PostgresParser.MINUS - 480)) |
                (1 << (PostgresParser.MULTIPLY - 480)))) !==
              0) ||
          (((_la - 517) & ~0x1f) === 0 &&
            ((1 << (_la - 517)) &
              ((1 << (PostgresParser.LESS_LESS - 517)) |
                (1 << (PostgresParser.GREATER_GREATER - 517)) |
                (1 << (PostgresParser.HASH_SIGN - 517)) |
                (1 << (PostgresParser.OP_CHARS - 517)) |
                (1 << (PostgresParser.NUMBER_LITERAL - 517)) |
                (1 << (PostgresParser.REAL_NUMBER - 517)) |
                (1 << (PostgresParser.DOLLAR_NUMBER - 517)) |
                (1 << (PostgresParser.Identifier - 517)) |
                (1 << (PostgresParser.QuotedIdentifier - 517)) |
                (1 << (PostgresParser.Character_String_Literal - 517)) |
                (1 << (PostgresParser.BeginDollarStringConstant - 517)))) !==
              0)
        ) {
          {
            this.state = 692;
            this.vex(0);
          }
        }

        this.state = 700;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 695;
              this.match(PostgresParser.WHEN);
              this.state = 696;
              this.vex(0);
              this.state = 697;
              this.match(PostgresParser.THEN);
              this.state = 698;
              _localctx._vex = this.vex(0);
              _localctx._r.push(_localctx._vex);
            }
          }
          this.state = 702;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PostgresParser.WHEN);
        this.state = 706;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.ELSE) {
          {
            this.state = 704;
            this.match(PostgresParser.ELSE);
            this.state = 705;
            _localctx._vex = this.vex(0);
            _localctx._r.push(_localctx._vex);
          }
        }

        this.state = 708;
        this.match(PostgresParser.END);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public cast_specification(): Cast_specificationContext {
    let _localctx: Cast_specificationContext = new Cast_specificationContext(this._ctx, this.state);
    this.enterRule(_localctx, 54, PostgresParser.RULE_cast_specification);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 710;
        _la = this._input.LA(1);
        if (!(_la === PostgresParser.CAST || _la === PostgresParser.TREAT)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 711;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 712;
        this.vex(0);
        this.state = 713;
        this.match(PostgresParser.AS);
        this.state = 714;
        this.data_type();
        this.state = 715;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_args(): Function_argsContext {
    let _localctx: Function_argsContext = new Function_argsContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, PostgresParser.RULE_function_args);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 717;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 732;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PostgresParser.RECURSIVE) |
                (1 << PostgresParser.BY) |
                (1 << PostgresParser.DISTINCT) |
                (1 << PostgresParser.ALL) |
                (1 << PostgresParser.ANY) |
                (1 << PostgresParser.SOME) |
                (1 << PostgresParser.OPERATOR) |
                (1 << PostgresParser.NULLS) |
                (1 << PostgresParser.FIRST) |
                (1 << PostgresParser.LAST) |
                (1 << PostgresParser.LEFT) |
                (1 << PostgresParser.RIGHT) |
                (1 << PostgresParser.FULL) |
                (1 << PostgresParser.INNER) |
                (1 << PostgresParser.OUTER) |
                (1 << PostgresParser.CROSS))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (PostgresParser.JOIN - 32)) |
                (1 << (PostgresParser.ON - 32)) |
                (1 << (PostgresParser.VALUES - 32)) |
                (1 << (PostgresParser.NATURAL - 32)) |
                (1 << (PostgresParser.TABLESAMPLE - 32)) |
                (1 << (PostgresParser.INTERVAL - 32)) |
                (1 << (PostgresParser.SECOND - 32)) |
                (1 << (PostgresParser.MINUTE - 32)) |
                (1 << (PostgresParser.HOUR - 32)) |
                (1 << (PostgresParser.DAY - 32)) |
                (1 << (PostgresParser.MONTH - 32)) |
                (1 << (PostgresParser.YEAR - 32)) |
                (1 << (PostgresParser.TREAT - 32)) |
                (1 << (PostgresParser.CASE - 32)) |
                (1 << (PostgresParser.NOT - 32)) |
                (1 << (PostgresParser.IS - 32)) |
                (1 << (PostgresParser.NULL - 32)) |
                (1 << (PostgresParser.ISNULL - 32)) |
                (1 << (PostgresParser.NOTNULL - 32)))) !==
              0) ||
          (((_la - 64) & ~0x1f) === 0 &&
            ((1 << (_la - 64)) &
              ((1 << (PostgresParser.TRUE - 64)) |
                (1 << (PostgresParser.FALSE - 64)) |
                (1 << (PostgresParser.BETWEEN - 64)) |
                (1 << (PostgresParser.LIKE - 64)) |
                (1 << (PostgresParser.ILIKE - 64)) |
                (1 << (PostgresParser.ARRAY - 64)) |
                (1 << (PostgresParser.BOOLEAN - 64)) |
                (1 << (PostgresParser.SMALLINT - 64)) |
                (1 << (PostgresParser.INT - 64)) |
                (1 << (PostgresParser.INTEGER - 64)) |
                (1 << (PostgresParser.BIGINT - 64)) |
                (1 << (PostgresParser.DEC - 64)) |
                (1 << (PostgresParser.DECIMAL - 64)) |
                (1 << (PostgresParser.DOUBLE - 64)) |
                (1 << (PostgresParser.FLOAT - 64)) |
                (1 << (PostgresParser.NUMERIC - 64)) |
                (1 << (PostgresParser.PRECISION - 64)) |
                (1 << (PostgresParser.REAL - 64)) |
                (1 << (PostgresParser.BIT - 64)) |
                (1 << (PostgresParser.VARYING - 64)) |
                (1 << (PostgresParser.NATIONAL - 64)) |
                (1 << (PostgresParser.CHARACTER - 64)) |
                (1 << (PostgresParser.CHAR - 64)) |
                (1 << (PostgresParser.NCHAR - 64)) |
                (1 << (PostgresParser.TIME - 64)) |
                (1 << (PostgresParser.WITHOUT - 64)) |
                (1 << (PostgresParser.WITHIN - 64)) |
                (1 << (PostgresParser.ZONE - 64)) |
                (1 << (PostgresParser.TIMESTAMP - 64)) |
                (1 << (PostgresParser.VARCHAR - 64)) |
                (1 << (PostgresParser.SETOF - 64)))) !==
              0) ||
          (((_la - 96) & ~0x1f) === 0 &&
            ((1 << (_la - 96)) &
              ((1 << (PostgresParser.OF - 96)) |
                (1 << (PostgresParser.OVER - 96)) |
                (1 << (PostgresParser.PARTITION - 96)) |
                (1 << (PostgresParser.ROWS - 96)) |
                (1 << (PostgresParser.RANGE - 96)) |
                (1 << (PostgresParser.GROUPS - 96)) |
                (1 << (PostgresParser.UNBOUNDED - 96)) |
                (1 << (PostgresParser.PRECEDING - 96)) |
                (1 << (PostgresParser.FOLLOWING - 96)) |
                (1 << (PostgresParser.CURRENT - 96)) |
                (1 << (PostgresParser.ROW - 96)) |
                (1 << (PostgresParser.EXCLUDE - 96)) |
                (1 << (PostgresParser.TIES - 96)) |
                (1 << (PostgresParser.NO - 96)) |
                (1 << (PostgresParser.OTHERS - 96)) |
                (1 << (PostgresParser.ROLLUP - 96)) |
                (1 << (PostgresParser.GROUPING - 96)) |
                (1 << (PostgresParser.SETS - 96)) |
                (1 << (PostgresParser.OVERLAPS - 96)) |
                (1 << (PostgresParser.AT - 96)) |
                (1 << (PostgresParser.SIMILAR - 96)) |
                (1 << (PostgresParser.ESCAPE - 96)) |
                (1 << (PostgresParser.NEXT - 96)) |
                (1 << (PostgresParser.DOCUMENT - 96)))) !==
              0) ||
          (((_la - 128) & ~0x1f) === 0 &&
            ((1 << (_la - 128)) &
              ((1 << (PostgresParser.UNKNOWN - 128)) |
                (1 << (PostgresParser.EXISTS - 128)) |
                (1 << (PostgresParser.VARIADIC - 128)) |
                (1 << (PostgresParser.FILTER - 128)) |
                (1 << (PostgresParser.ALIAS - 128)) |
                (1 << (PostgresParser.PATH - 128)) |
                (1 << (PostgresParser.POW - 128)) |
                (1 << (PostgresParser.DATE - 128)) |
                (1 << (PostgresParser.ARRAY_AGG - 128)) |
                (1 << (PostgresParser.AVG - 128)) |
                (1 << (PostgresParser.BIT_AND - 128)) |
                (1 << (PostgresParser.BIT_OR - 128)) |
                (1 << (PostgresParser.BIT_XOR - 128)) |
                (1 << (PostgresParser.BOOL_AND - 128)) |
                (1 << (PostgresParser.BOOL_OR - 128)) |
                (1 << (PostgresParser.COUNT - 128)) |
                (1 << (PostgresParser.EVERY - 128)) |
                (1 << (PostgresParser.JSON_AGG - 128)) |
                (1 << (PostgresParser.JSON_OBJECT_AGG - 128)))) !==
              0) ||
          (((_la - 160) & ~0x1f) === 0 &&
            ((1 << (_la - 160)) &
              ((1 << (PostgresParser.MAX - 160)) |
                (1 << (PostgresParser.MIN - 160)) |
                (1 << (PostgresParser.RANGE_AGG - 160)) |
                (1 << (PostgresParser.RANGE_INTERSECT_AGG - 160)) |
                (1 << (PostgresParser.STRING_AGG - 160)) |
                (1 << (PostgresParser.SUM - 160)) |
                (1 << (PostgresParser.XMLAGG - 160)) |
                (1 << (PostgresParser.ARRAY_APPEND - 160)) |
                (1 << (PostgresParser.ARRAY_CAT - 160)) |
                (1 << (PostgresParser.ARRAY_DIMS - 160)) |
                (1 << (PostgresParser.ARRAY_FILL - 160)) |
                (1 << (PostgresParser.ARRAY_LENGTH - 160)) |
                (1 << (PostgresParser.ARRAY_LOWER - 160)) |
                (1 << (PostgresParser.ARRAY_NDIMS - 160)) |
                (1 << (PostgresParser.ARRAY_POSITION - 160)) |
                (1 << (PostgresParser.ARRAY_PREPEND - 160)) |
                (1 << (PostgresParser.ARRAY_REMOVE - 160)) |
                (1 << (PostgresParser.ARRAY_REPLACE - 160)) |
                (1 << (PostgresParser.ARRAY_TO_STRING - 160)) |
                (1 << (PostgresParser.ARRAY_UPPER - 160)) |
                (1 << (PostgresParser.CARDINALITY - 160)) |
                (1 << (PostgresParser.TRIM_ARRAY - 160)) |
                (1 << (PostgresParser.UNNEST - 160)) |
                (1 << (PostgresParser.CONVERT - 160)) |
                (1 << (PostgresParser.CONVERT_FROM - 160)) |
                (1 << (PostgresParser.CONVERT_TO - 160)) |
                (1 << (PostgresParser.ENCODE - 160)) |
                (1 << (PostgresParser.DECODE - 160)) |
                (1 << (PostgresParser.BIT_COUNT - 160)) |
                (1 << (PostgresParser.BTRIM - 160)) |
                (1 << (PostgresParser.GET_BIT - 160)) |
                (1 << (PostgresParser.GET_BYTE - 160)))) !==
              0) ||
          (((_la - 192) & ~0x1f) === 0 &&
            ((1 << (_la - 192)) &
              ((1 << (PostgresParser.LENGTH - 192)) |
                (1 << (PostgresParser.LTRIM - 192)) |
                (1 << (PostgresParser.MD5 - 192)) |
                (1 << (PostgresParser.RTRIM - 192)) |
                (1 << (PostgresParser.SET_BIT - 192)) |
                (1 << (PostgresParser.SET_BYTE - 192)) |
                (1 << (PostgresParser.SHA224 - 192)) |
                (1 << (PostgresParser.SHA256 - 192)) |
                (1 << (PostgresParser.SHA384 - 192)) |
                (1 << (PostgresParser.SHA512 - 192)) |
                (1 << (PostgresParser.SUBSTR - 192)) |
                (1 << (PostgresParser.NUM_NONNULLS - 192)) |
                (1 << (PostgresParser.NUM_NULLS - 192)) |
                (1 << (PostgresParser.COALESCE - 192)) |
                (1 << (PostgresParser.NULLIF - 192)) |
                (1 << (PostgresParser.GREATEST - 192)) |
                (1 << (PostgresParser.LEAST - 192)) |
                (1 << (PostgresParser.AGE - 192)) |
                (1 << (PostgresParser.CLOCK_TIMESTAMP - 192)) |
                (1 << (PostgresParser.CURRENT_DATE - 192)) |
                (1 << (PostgresParser.CURRENT_TIME - 192)) |
                (1 << (PostgresParser.CURRENT_TIMESTAMP - 192)) |
                (1 << (PostgresParser.DATE_BIN - 192)) |
                (1 << (PostgresParser.DATE_PART - 192)) |
                (1 << (PostgresParser.DATE_TRUNC - 192)) |
                (1 << (PostgresParser.EXTRACT - 192)) |
                (1 << (PostgresParser.ISFINITE - 192)) |
                (1 << (PostgresParser.JUSTIFY_DAYS - 192)) |
                (1 << (PostgresParser.JUSTIFY_HOURS - 192)) |
                (1 << (PostgresParser.JUSTIFY_INTERVAL - 192)) |
                (1 << (PostgresParser.LOCALTIME - 192)) |
                (1 << (PostgresParser.LOCALTIMESTAMP - 192)))) !==
              0) ||
          (((_la - 224) & ~0x1f) === 0 &&
            ((1 << (_la - 224)) &
              ((1 << (PostgresParser.MAKE_DATE - 224)) |
                (1 << (PostgresParser.MAKE_INTERVAL - 224)) |
                (1 << (PostgresParser.MAKE_TIME - 224)) |
                (1 << (PostgresParser.MAKE_TIMESTAMP - 224)) |
                (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 224)) |
                (1 << (PostgresParser.NOW - 224)) |
                (1 << (PostgresParser.STATEMENT_TIMESTAMP - 224)) |
                (1 << (PostgresParser.TIMEOFDAY - 224)) |
                (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 224)) |
                (1 << (PostgresParser.ENUM_FIRST - 224)) |
                (1 << (PostgresParser.ENUM_LAST - 224)) |
                (1 << (PostgresParser.ENUM_RANGE - 224)) |
                (1 << (PostgresParser.TO_CHAR - 224)) |
                (1 << (PostgresParser.TO_DATE - 224)) |
                (1 << (PostgresParser.TO_NUMBER - 224)) |
                (1 << (PostgresParser.TO_TIMESTAMP - 224)) |
                (1 << (PostgresParser.BOX - 224)) |
                (1 << (PostgresParser.CIRCLE - 224)) |
                (1 << (PostgresParser.LINE - 224)) |
                (1 << (PostgresParser.LSEG - 224)) |
                (1 << (PostgresParser.POINT - 224)) |
                (1 << (PostgresParser.POLYGON - 224)) |
                (1 << (PostgresParser.AREA - 224)) |
                (1 << (PostgresParser.CENTER - 224)) |
                (1 << (PostgresParser.DIAGONAL - 224)) |
                (1 << (PostgresParser.DIAMETER - 224)) |
                (1 << (PostgresParser.HEIGHT - 224)) |
                (1 << (PostgresParser.ISCLOSED - 224)) |
                (1 << (PostgresParser.ISOPEN - 224)) |
                (1 << (PostgresParser.NPOINTS - 224)) |
                (1 << (PostgresParser.PCLOSE - 224)) |
                (1 << (PostgresParser.POPEN - 224)))) !==
              0) ||
          (((_la - 256) & ~0x1f) === 0 &&
            ((1 << (_la - 256)) &
              ((1 << (PostgresParser.RADIUS - 256)) |
                (1 << (PostgresParser.SLOPE - 256)) |
                (1 << (PostgresParser.WIDTH - 256)) |
                (1 << (PostgresParser.SINH - 256)) |
                (1 << (PostgresParser.COSH - 256)) |
                (1 << (PostgresParser.TANH - 256)) |
                (1 << (PostgresParser.ASINH - 256)) |
                (1 << (PostgresParser.ACOSH - 256)) |
                (1 << (PostgresParser.ATANH - 256)) |
                (1 << (PostgresParser.ABBREV - 256)) |
                (1 << (PostgresParser.BROADCAST - 256)) |
                (1 << (PostgresParser.FAMILY - 256)) |
                (1 << (PostgresParser.HOST - 256)) |
                (1 << (PostgresParser.HOSTMASK - 256)) |
                (1 << (PostgresParser.INET_MERGE - 256)) |
                (1 << (PostgresParser.INET_SAME_FAMILY - 256)) |
                (1 << (PostgresParser.MASKLEN - 256)) |
                (1 << (PostgresParser.NETMASK - 256)) |
                (1 << (PostgresParser.NETWORK - 256)) |
                (1 << (PostgresParser.SET_MASKLEN - 256)) |
                (1 << (PostgresParser.TEXT - 256)) |
                (1 << (PostgresParser.TRUNC - 256)) |
                (1 << (PostgresParser.MACADDR8_SET7BIT - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_LENGTH - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 256)) |
                (1 << (PostgresParser.JSON_EACH - 256)) |
                (1 << (PostgresParser.JSONB_EACH - 256)) |
                (1 << (PostgresParser.JSON_EACH_TEXT - 256)))) !==
              0) ||
          (((_la - 288) & ~0x1f) === 0 &&
            ((1 << (_la - 288)) &
              ((1 << (PostgresParser.JSONB_EACH_TEXT - 288)) |
                (1 << (PostgresParser.JSON_EXTRACT_PATH - 288)) |
                (1 << (PostgresParser.JSONB_EXTRACT_PATH - 288)) |
                (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 288)) |
                (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 288)) |
                (1 << (PostgresParser.JSON_OBJECT_KEYS - 288)) |
                (1 << (PostgresParser.JSONB_OBJECT_KEYS - 288)) |
                (1 << (PostgresParser.JSON_POPULATE_RECORD - 288)) |
                (1 << (PostgresParser.JSONB_POPULATE_RECORD - 288)) |
                (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 288)) |
                (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 288)) |
                (1 << (PostgresParser.JSON_TO_RECORD - 288)) |
                (1 << (PostgresParser.JSONB_TO_RECORD - 288)) |
                (1 << (PostgresParser.JSON_TO_RECORDSET - 288)) |
                (1 << (PostgresParser.JSONB_TO_RECORDSET - 288)) |
                (1 << (PostgresParser.JSON_STRIP_NULLS - 288)) |
                (1 << (PostgresParser.JSONB_STRIP_NULLS - 288)) |
                (1 << (PostgresParser.JSONB_SET - 288)) |
                (1 << (PostgresParser.JSONB_SET_LAX - 288)) |
                (1 << (PostgresParser.JSONB_INSERT - 288)) |
                (1 << (PostgresParser.JSONB_PATH_EXISTS - 288)) |
                (1 << (PostgresParser.JSONB_PATH_MATCH - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 288)) |
                (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PRETTY - 288)) |
                (1 << (PostgresParser.JSON_TYPEOF - 288)))) !==
              0) ||
          (((_la - 320) & ~0x1f) === 0 &&
            ((1 << (_la - 320)) &
              ((1 << (PostgresParser.JSONB_TYPEOF - 320)) |
                (1 << (PostgresParser.TO_JSON - 320)) |
                (1 << (PostgresParser.TO_JSONB - 320)) |
                (1 << (PostgresParser.ARRAY_TO_JSON - 320)) |
                (1 << (PostgresParser.ROW_TO_JSON - 320)) |
                (1 << (PostgresParser.JSON_BUILD_ARRAY - 320)) |
                (1 << (PostgresParser.JSONB_BUILD_ARRAY - 320)) |
                (1 << (PostgresParser.JSON_BUILD_OBJECT - 320)) |
                (1 << (PostgresParser.JSON_OBJECT - 320)) |
                (1 << (PostgresParser.JSONB_OBJECT - 320)) |
                (1 << (PostgresParser.ABS - 320)) |
                (1 << (PostgresParser.CBRT - 320)) |
                (1 << (PostgresParser.CEIL - 320)) |
                (1 << (PostgresParser.DEGREES - 320)) |
                (1 << (PostgresParser.DIV - 320)) |
                (1 << (PostgresParser.EXP - 320)) |
                (1 << (PostgresParser.FACTORIAL - 320)) |
                (1 << (PostgresParser.FLOOR - 320)) |
                (1 << (PostgresParser.GCD - 320)) |
                (1 << (PostgresParser.LCM - 320)) |
                (1 << (PostgresParser.LN - 320)) |
                (1 << (PostgresParser.LOG - 320)) |
                (1 << (PostgresParser.LOG10 - 320)) |
                (1 << (PostgresParser.MIN_SCALE - 320)) |
                (1 << (PostgresParser.MOD - 320)) |
                (1 << (PostgresParser.PI - 320)) |
                (1 << (PostgresParser.POWER - 320)) |
                (1 << (PostgresParser.RADIANS - 320)) |
                (1 << (PostgresParser.ROUND - 320)) |
                (1 << (PostgresParser.SCALE - 320)) |
                (1 << (PostgresParser.SIGN - 320)) |
                (1 << (PostgresParser.SQRT - 320)))) !==
              0) ||
          (((_la - 352) & ~0x1f) === 0 &&
            ((1 << (_la - 352)) &
              ((1 << (PostgresParser.TRIM_SCALE - 352)) |
                (1 << (PostgresParser.WIDTH_BUCKET - 352)) |
                (1 << (PostgresParser.MODE - 352)) |
                (1 << (PostgresParser.PERCENTILE_CONT - 352)) |
                (1 << (PostgresParser.PERCENTILE_DISC - 352)) |
                (1 << (PostgresParser.RANDOM - 352)) |
                (1 << (PostgresParser.SETSEED - 352)) |
                (1 << (PostgresParser.LOWER - 352)) |
                (1 << (PostgresParser.UPPER - 352)) |
                (1 << (PostgresParser.ISEMPTY - 352)) |
                (1 << (PostgresParser.LOWER_INC - 352)) |
                (1 << (PostgresParser.UPPER_INC - 352)) |
                (1 << (PostgresParser.LOWER_INF - 352)) |
                (1 << (PostgresParser.UPPER_INF - 352)) |
                (1 << (PostgresParser.RANGE_MERGE - 352)) |
                (1 << (PostgresParser.MULTIRANGE - 352)) |
                (1 << (PostgresParser.TS_DEBUG - 352)) |
                (1 << (PostgresParser.TS_LEXIZE - 352)) |
                (1 << (PostgresParser.TS_PARSE - 352)) |
                (1 << (PostgresParser.TS_TOKEN_TYPE - 352)) |
                (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 352)) |
                (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 352)) |
                (1 << (PostgresParser.NUMNODE - 352)) |
                (1 << (PostgresParser.PLAINTO_TSQUERY - 352)) |
                (1 << (PostgresParser.PHRASETO_TSQUERY - 352)) |
                (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 352)) |
                (1 << (PostgresParser.QUERYTREE - 352)) |
                (1 << (PostgresParser.SETWEIGHT - 352)) |
                (1 << (PostgresParser.STRIP - 352)) |
                (1 << (PostgresParser.TO_TSQUERY - 352)) |
                (1 << (PostgresParser.TO_TSVECTOR - 352)) |
                (1 << (PostgresParser.JSON_TO_TSVECTOR - 352)))) !==
              0) ||
          (((_la - 384) & ~0x1f) === 0 &&
            ((1 << (_la - 384)) &
              ((1 << (PostgresParser.TS_DELETE - 384)) |
                (1 << (PostgresParser.TS_FILTER - 384)) |
                (1 << (PostgresParser.TS_HEADLINE - 384)) |
                (1 << (PostgresParser.TS_RANK - 384)) |
                (1 << (PostgresParser.TS_RANK_CD - 384)) |
                (1 << (PostgresParser.TS_REWRITE - 384)) |
                (1 << (PostgresParser.TSQUERY_PHRASE - 384)) |
                (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 384)) |
                (1 << (PostgresParser.GENERATE_SERIES - 384)) |
                (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 384)) |
                (1 << (PostgresParser.CORR - 384)) |
                (1 << (PostgresParser.COVAR_POP - 384)) |
                (1 << (PostgresParser.COVAR_SAMP - 384)) |
                (1 << (PostgresParser.REGR_AVGX - 384)) |
                (1 << (PostgresParser.REGR_AVGY - 384)) |
                (1 << (PostgresParser.REGR_COUNT - 384)) |
                (1 << (PostgresParser.REGR_INTERCEPT - 384)) |
                (1 << (PostgresParser.REGR_R2 - 384)) |
                (1 << (PostgresParser.REGR_SLOPE - 384)) |
                (1 << (PostgresParser.REGR_SXX - 384)) |
                (1 << (PostgresParser.REGR_SXY - 384)) |
                (1 << (PostgresParser.REGR_SYY - 384)) |
                (1 << (PostgresParser.STDDEV - 384)) |
                (1 << (PostgresParser.STDDEV_POP - 384)) |
                (1 << (PostgresParser.STDDEV_SAMP - 384)) |
                (1 << (PostgresParser.VARIANCE - 384)) |
                (1 << (PostgresParser.VAR_POP - 384)) |
                (1 << (PostgresParser.VAR_SAMP - 384)) |
                (1 << (PostgresParser.ASCII - 384)) |
                (1 << (PostgresParser.CHR - 384)) |
                (1 << (PostgresParser.CONCAT - 384)) |
                (1 << (PostgresParser.CONCAT_WS - 384)))) !==
              0) ||
          (((_la - 416) & ~0x1f) === 0 &&
            ((1 << (_la - 416)) &
              ((1 << (PostgresParser.FORMAT - 416)) |
                (1 << (PostgresParser.INITCAP - 416)) |
                (1 << (PostgresParser.LPAD - 416)) |
                (1 << (PostgresParser.PARSE_IDENT - 416)) |
                (1 << (PostgresParser.QUOTE_IDENT - 416)) |
                (1 << (PostgresParser.QUOTE_LITERAL - 416)) |
                (1 << (PostgresParser.QUOTE_NULLABLE - 416)) |
                (1 << (PostgresParser.REGEXP_MATCH - 416)) |
                (1 << (PostgresParser.REGEXP_MATCHES - 416)) |
                (1 << (PostgresParser.REGEXP_REPLACE - 416)) |
                (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 416)) |
                (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 416)) |
                (1 << (PostgresParser.REPEAT - 416)) |
                (1 << (PostgresParser.REPLACE - 416)) |
                (1 << (PostgresParser.REVERSE - 416)) |
                (1 << (PostgresParser.RPAD - 416)) |
                (1 << (PostgresParser.SPLIT_PART - 416)) |
                (1 << (PostgresParser.STRPOS - 416)) |
                (1 << (PostgresParser.STARTS_WITH - 416)) |
                (1 << (PostgresParser.STRING_TO_ARRAY - 416)) |
                (1 << (PostgresParser.STRING_TO_TABLE - 416)) |
                (1 << (PostgresParser.TO_ASCII - 416)) |
                (1 << (PostgresParser.TO_HEX - 416)) |
                (1 << (PostgresParser.TRANSLATE - 416)) |
                (1 << (PostgresParser.UNISTR - 416)) |
                (1 << (PostgresParser.BIT_LENGTH - 416)) |
                (1 << (PostgresParser.CHAR_LENGTH - 416)) |
                (1 << (PostgresParser.CHARACTER_LENGTH - 416)) |
                (1 << (PostgresParser.NORMALIZE - 416)) |
                (1 << (PostgresParser.OCTET_LENGTH - 416)) |
                (1 << (PostgresParser.OVERLAY - 416)) |
                (1 << (PostgresParser.POSITION - 416)))) !==
              0) ||
          (((_la - 448) & ~0x1f) === 0 &&
            ((1 << (_la - 448)) &
              ((1 << (PostgresParser.SUBSTRING - 448)) |
                (1 << (PostgresParser.TRIM - 448)) |
                (1 << (PostgresParser.ACOS - 448)) |
                (1 << (PostgresParser.ACOSD - 448)) |
                (1 << (PostgresParser.ASIN - 448)) |
                (1 << (PostgresParser.ASIND - 448)) |
                (1 << (PostgresParser.ATAN - 448)) |
                (1 << (PostgresParser.ATAND - 448)) |
                (1 << (PostgresParser.ATAN2 - 448)) |
                (1 << (PostgresParser.ATAN2D - 448)) |
                (1 << (PostgresParser.COS - 448)) |
                (1 << (PostgresParser.COSD - 448)) |
                (1 << (PostgresParser.COT - 448)) |
                (1 << (PostgresParser.COTD - 448)) |
                (1 << (PostgresParser.SIN - 448)) |
                (1 << (PostgresParser.SIND - 448)) |
                (1 << (PostgresParser.TAN - 448)) |
                (1 << (PostgresParser.TAND - 448)) |
                (1 << (PostgresParser.GEN_RANDOM_UUID - 448)) |
                (1 << (PostgresParser.ROW_NUMBER - 448)) |
                (1 << (PostgresParser.RANK - 448)) |
                (1 << (PostgresParser.DENSE_RANK - 448)) |
                (1 << (PostgresParser.PERCENT_RANK - 448)) |
                (1 << (PostgresParser.CUME_DIST - 448)) |
                (1 << (PostgresParser.NTILE - 448)) |
                (1 << (PostgresParser.LAG - 448)) |
                (1 << (PostgresParser.LEAD - 448)) |
                (1 << (PostgresParser.FIRST_VALUE - 448)) |
                (1 << (PostgresParser.LAST_VALUE - 448)) |
                (1 << (PostgresParser.NTH_VALUE - 448)) |
                (1 << (PostgresParser.XMLCOMMENT - 448)) |
                (1 << (PostgresParser.XMLCONCAT - 448)))) !==
              0) ||
          (((_la - 480) & ~0x1f) === 0 &&
            ((1 << (_la - 480)) &
              ((1 << (PostgresParser.XMLELEMENT - 480)) |
                (1 << (PostgresParser.XMLFOREST - 480)) |
                (1 << (PostgresParser.XMLPI - 480)) |
                (1 << (PostgresParser.XMLROOT - 480)) |
                (1 << (PostgresParser.XMLEXISTS - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 480)) |
                (1 << (PostgresParser.XPATH - 480)) |
                (1 << (PostgresParser.XPATH_EXISTS - 480)) |
                (1 << (PostgresParser.XMLTABLE - 480)) |
                (1 << (PostgresParser.TABLE_TO_XML - 480)) |
                (1 << (PostgresParser.LEFT_PAREN - 480)) |
                (1 << (PostgresParser.PLUS - 480)) |
                (1 << (PostgresParser.MINUS - 480)) |
                (1 << (PostgresParser.MULTIPLY - 480)))) !==
              0) ||
          (((_la - 517) & ~0x1f) === 0 &&
            ((1 << (_la - 517)) &
              ((1 << (PostgresParser.LESS_LESS - 517)) |
                (1 << (PostgresParser.GREATER_GREATER - 517)) |
                (1 << (PostgresParser.HASH_SIGN - 517)) |
                (1 << (PostgresParser.OP_CHARS - 517)) |
                (1 << (PostgresParser.NUMBER_LITERAL - 517)) |
                (1 << (PostgresParser.REAL_NUMBER - 517)) |
                (1 << (PostgresParser.DOLLAR_NUMBER - 517)) |
                (1 << (PostgresParser.Identifier - 517)) |
                (1 << (PostgresParser.QuotedIdentifier - 517)) |
                (1 << (PostgresParser.Character_String_Literal - 517)) |
                (1 << (PostgresParser.BeginDollarStringConstant - 517)))) !==
              0)
        ) {
          {
            this.state = 719;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
              case 1:
                {
                  this.state = 718;
                  this.set_qualifier();
                }
                break;
            }
            this.state = 721;
            this.vex_or_named_notation();
            this.state = 726;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 722;
                  this.match(PostgresParser.COMMA);
                  this.state = 723;
                  this.vex_or_named_notation();
                }
              }
              this.state = 728;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 730;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ORDER) {
              {
                this.state = 729;
                this.orderby_clause();
              }
            }
          }
        }

        this.state = 734;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_body(): Function_bodyContext {
    let _localctx: Function_bodyContext = new Function_bodyContext(this._ctx, this.state);
    this.enterRule(_localctx, 58, PostgresParser.RULE_function_body);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 736;
        this.function_args();
        this.state = 743;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
          case 1:
            {
              this.state = 737;
              this.match(PostgresParser.WITHIN);
              this.state = 738;
              this.match(PostgresParser.GROUP);
              this.state = 739;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 740;
              this.orderby_clause();
              this.state = 741;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;
        }
        this.state = 746;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
          case 1:
            {
              this.state = 745;
              this.filter_clause();
            }
            break;
        }
        this.state = 753;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
          case 1:
            {
              this.state = 748;
              this.match(PostgresParser.OVER);
              this.state = 751;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case PostgresParser.RECURSIVE:
                case PostgresParser.BY:
                case PostgresParser.OPERATOR:
                case PostgresParser.NULLS:
                case PostgresParser.FIRST:
                case PostgresParser.LAST:
                case PostgresParser.VALUES:
                case PostgresParser.INTERVAL:
                case PostgresParser.SECOND:
                case PostgresParser.MINUTE:
                case PostgresParser.HOUR:
                case PostgresParser.DAY:
                case PostgresParser.MONTH:
                case PostgresParser.YEAR:
                case PostgresParser.TREAT:
                case PostgresParser.BETWEEN:
                case PostgresParser.BOOLEAN:
                case PostgresParser.SMALLINT:
                case PostgresParser.INT:
                case PostgresParser.INTEGER:
                case PostgresParser.BIGINT:
                case PostgresParser.DEC:
                case PostgresParser.DECIMAL:
                case PostgresParser.DOUBLE:
                case PostgresParser.FLOAT:
                case PostgresParser.NUMERIC:
                case PostgresParser.PRECISION:
                case PostgresParser.REAL:
                case PostgresParser.BIT:
                case PostgresParser.VARYING:
                case PostgresParser.NATIONAL:
                case PostgresParser.CHARACTER:
                case PostgresParser.CHAR:
                case PostgresParser.NCHAR:
                case PostgresParser.TIME:
                case PostgresParser.WITHOUT:
                case PostgresParser.WITHIN:
                case PostgresParser.ZONE:
                case PostgresParser.TIMESTAMP:
                case PostgresParser.VARCHAR:
                case PostgresParser.SETOF:
                case PostgresParser.OF:
                case PostgresParser.OVER:
                case PostgresParser.PARTITION:
                case PostgresParser.ROWS:
                case PostgresParser.RANGE:
                case PostgresParser.GROUPS:
                case PostgresParser.UNBOUNDED:
                case PostgresParser.PRECEDING:
                case PostgresParser.FOLLOWING:
                case PostgresParser.CURRENT:
                case PostgresParser.ROW:
                case PostgresParser.EXCLUDE:
                case PostgresParser.TIES:
                case PostgresParser.NO:
                case PostgresParser.OTHERS:
                case PostgresParser.ROLLUP:
                case PostgresParser.GROUPING:
                case PostgresParser.SETS:
                case PostgresParser.AT:
                case PostgresParser.ESCAPE:
                case PostgresParser.NEXT:
                case PostgresParser.DOCUMENT:
                case PostgresParser.UNKNOWN:
                case PostgresParser.EXISTS:
                case PostgresParser.FILTER:
                case PostgresParser.ALIAS:
                case PostgresParser.COALESCE:
                case PostgresParser.NULLIF:
                case PostgresParser.GREATEST:
                case PostgresParser.LEAST:
                case PostgresParser.EXTRACT:
                case PostgresParser.FAMILY:
                case PostgresParser.TEXT:
                case PostgresParser.MODE:
                case PostgresParser.STRIP:
                case PostgresParser.REPLACE:
                case PostgresParser.OVERLAY:
                case PostgresParser.POSITION:
                case PostgresParser.SUBSTRING:
                case PostgresParser.TRIM:
                case PostgresParser.XMLCONCAT:
                case PostgresParser.Identifier:
                case PostgresParser.QuotedIdentifier:
                  {
                    this.state = 749;
                    this.identifier();
                  }
                  break;
                case PostgresParser.LEFT_PAREN:
                  {
                    this.state = 750;
                    this.window_definition();
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_call(): Function_callContext {
    let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, PostgresParser.RULE_function_call);
    let _la: number;
    try {
      this.state = 775;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 85, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 755;
            this.function_names();
            this.state = 756;
            this.function_body();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 758;
            this.function_custom();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 759;
            this.identifier();
            this.state = 760;
            this.function_body();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 762;
            this.match(PostgresParser.ROW);
            this.state = 763;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 772;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.RECURSIVE) |
                    (1 << PostgresParser.BY) |
                    (1 << PostgresParser.ALL) |
                    (1 << PostgresParser.ANY) |
                    (1 << PostgresParser.SOME) |
                    (1 << PostgresParser.OPERATOR) |
                    (1 << PostgresParser.NULLS) |
                    (1 << PostgresParser.FIRST) |
                    (1 << PostgresParser.LAST) |
                    (1 << PostgresParser.LEFT) |
                    (1 << PostgresParser.RIGHT) |
                    (1 << PostgresParser.FULL) |
                    (1 << PostgresParser.INNER) |
                    (1 << PostgresParser.OUTER) |
                    (1 << PostgresParser.CROSS))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (PostgresParser.JOIN - 32)) |
                    (1 << (PostgresParser.ON - 32)) |
                    (1 << (PostgresParser.VALUES - 32)) |
                    (1 << (PostgresParser.NATURAL - 32)) |
                    (1 << (PostgresParser.TABLESAMPLE - 32)) |
                    (1 << (PostgresParser.INTERVAL - 32)) |
                    (1 << (PostgresParser.SECOND - 32)) |
                    (1 << (PostgresParser.MINUTE - 32)) |
                    (1 << (PostgresParser.HOUR - 32)) |
                    (1 << (PostgresParser.DAY - 32)) |
                    (1 << (PostgresParser.MONTH - 32)) |
                    (1 << (PostgresParser.YEAR - 32)) |
                    (1 << (PostgresParser.TREAT - 32)) |
                    (1 << (PostgresParser.CASE - 32)) |
                    (1 << (PostgresParser.NOT - 32)) |
                    (1 << (PostgresParser.IS - 32)) |
                    (1 << (PostgresParser.NULL - 32)) |
                    (1 << (PostgresParser.ISNULL - 32)) |
                    (1 << (PostgresParser.NOTNULL - 32)))) !==
                  0) ||
              (((_la - 64) & ~0x1f) === 0 &&
                ((1 << (_la - 64)) &
                  ((1 << (PostgresParser.TRUE - 64)) |
                    (1 << (PostgresParser.FALSE - 64)) |
                    (1 << (PostgresParser.BETWEEN - 64)) |
                    (1 << (PostgresParser.LIKE - 64)) |
                    (1 << (PostgresParser.ILIKE - 64)) |
                    (1 << (PostgresParser.ARRAY - 64)) |
                    (1 << (PostgresParser.BOOLEAN - 64)) |
                    (1 << (PostgresParser.SMALLINT - 64)) |
                    (1 << (PostgresParser.INT - 64)) |
                    (1 << (PostgresParser.INTEGER - 64)) |
                    (1 << (PostgresParser.BIGINT - 64)) |
                    (1 << (PostgresParser.DEC - 64)) |
                    (1 << (PostgresParser.DECIMAL - 64)) |
                    (1 << (PostgresParser.DOUBLE - 64)) |
                    (1 << (PostgresParser.FLOAT - 64)) |
                    (1 << (PostgresParser.NUMERIC - 64)) |
                    (1 << (PostgresParser.PRECISION - 64)) |
                    (1 << (PostgresParser.REAL - 64)) |
                    (1 << (PostgresParser.BIT - 64)) |
                    (1 << (PostgresParser.VARYING - 64)) |
                    (1 << (PostgresParser.NATIONAL - 64)) |
                    (1 << (PostgresParser.CHARACTER - 64)) |
                    (1 << (PostgresParser.CHAR - 64)) |
                    (1 << (PostgresParser.NCHAR - 64)) |
                    (1 << (PostgresParser.TIME - 64)) |
                    (1 << (PostgresParser.WITHOUT - 64)) |
                    (1 << (PostgresParser.WITHIN - 64)) |
                    (1 << (PostgresParser.ZONE - 64)) |
                    (1 << (PostgresParser.TIMESTAMP - 64)) |
                    (1 << (PostgresParser.VARCHAR - 64)) |
                    (1 << (PostgresParser.SETOF - 64)))) !==
                  0) ||
              (((_la - 96) & ~0x1f) === 0 &&
                ((1 << (_la - 96)) &
                  ((1 << (PostgresParser.OF - 96)) |
                    (1 << (PostgresParser.OVER - 96)) |
                    (1 << (PostgresParser.PARTITION - 96)) |
                    (1 << (PostgresParser.ROWS - 96)) |
                    (1 << (PostgresParser.RANGE - 96)) |
                    (1 << (PostgresParser.GROUPS - 96)) |
                    (1 << (PostgresParser.UNBOUNDED - 96)) |
                    (1 << (PostgresParser.PRECEDING - 96)) |
                    (1 << (PostgresParser.FOLLOWING - 96)) |
                    (1 << (PostgresParser.CURRENT - 96)) |
                    (1 << (PostgresParser.ROW - 96)) |
                    (1 << (PostgresParser.EXCLUDE - 96)) |
                    (1 << (PostgresParser.TIES - 96)) |
                    (1 << (PostgresParser.NO - 96)) |
                    (1 << (PostgresParser.OTHERS - 96)) |
                    (1 << (PostgresParser.ROLLUP - 96)) |
                    (1 << (PostgresParser.GROUPING - 96)) |
                    (1 << (PostgresParser.SETS - 96)) |
                    (1 << (PostgresParser.OVERLAPS - 96)) |
                    (1 << (PostgresParser.AT - 96)) |
                    (1 << (PostgresParser.SIMILAR - 96)) |
                    (1 << (PostgresParser.ESCAPE - 96)) |
                    (1 << (PostgresParser.NEXT - 96)) |
                    (1 << (PostgresParser.DOCUMENT - 96)))) !==
                  0) ||
              (((_la - 128) & ~0x1f) === 0 &&
                ((1 << (_la - 128)) &
                  ((1 << (PostgresParser.UNKNOWN - 128)) |
                    (1 << (PostgresParser.EXISTS - 128)) |
                    (1 << (PostgresParser.FILTER - 128)) |
                    (1 << (PostgresParser.ALIAS - 128)) |
                    (1 << (PostgresParser.PATH - 128)) |
                    (1 << (PostgresParser.POW - 128)) |
                    (1 << (PostgresParser.DATE - 128)) |
                    (1 << (PostgresParser.ARRAY_AGG - 128)) |
                    (1 << (PostgresParser.AVG - 128)) |
                    (1 << (PostgresParser.BIT_AND - 128)) |
                    (1 << (PostgresParser.BIT_OR - 128)) |
                    (1 << (PostgresParser.BIT_XOR - 128)) |
                    (1 << (PostgresParser.BOOL_AND - 128)) |
                    (1 << (PostgresParser.BOOL_OR - 128)) |
                    (1 << (PostgresParser.COUNT - 128)) |
                    (1 << (PostgresParser.EVERY - 128)) |
                    (1 << (PostgresParser.JSON_AGG - 128)) |
                    (1 << (PostgresParser.JSON_OBJECT_AGG - 128)))) !==
                  0) ||
              (((_la - 160) & ~0x1f) === 0 &&
                ((1 << (_la - 160)) &
                  ((1 << (PostgresParser.MAX - 160)) |
                    (1 << (PostgresParser.MIN - 160)) |
                    (1 << (PostgresParser.RANGE_AGG - 160)) |
                    (1 << (PostgresParser.RANGE_INTERSECT_AGG - 160)) |
                    (1 << (PostgresParser.STRING_AGG - 160)) |
                    (1 << (PostgresParser.SUM - 160)) |
                    (1 << (PostgresParser.XMLAGG - 160)) |
                    (1 << (PostgresParser.ARRAY_APPEND - 160)) |
                    (1 << (PostgresParser.ARRAY_CAT - 160)) |
                    (1 << (PostgresParser.ARRAY_DIMS - 160)) |
                    (1 << (PostgresParser.ARRAY_FILL - 160)) |
                    (1 << (PostgresParser.ARRAY_LENGTH - 160)) |
                    (1 << (PostgresParser.ARRAY_LOWER - 160)) |
                    (1 << (PostgresParser.ARRAY_NDIMS - 160)) |
                    (1 << (PostgresParser.ARRAY_POSITION - 160)) |
                    (1 << (PostgresParser.ARRAY_PREPEND - 160)) |
                    (1 << (PostgresParser.ARRAY_REMOVE - 160)) |
                    (1 << (PostgresParser.ARRAY_REPLACE - 160)) |
                    (1 << (PostgresParser.ARRAY_TO_STRING - 160)) |
                    (1 << (PostgresParser.ARRAY_UPPER - 160)) |
                    (1 << (PostgresParser.CARDINALITY - 160)) |
                    (1 << (PostgresParser.TRIM_ARRAY - 160)) |
                    (1 << (PostgresParser.UNNEST - 160)) |
                    (1 << (PostgresParser.CONVERT - 160)) |
                    (1 << (PostgresParser.CONVERT_FROM - 160)) |
                    (1 << (PostgresParser.CONVERT_TO - 160)) |
                    (1 << (PostgresParser.ENCODE - 160)) |
                    (1 << (PostgresParser.DECODE - 160)) |
                    (1 << (PostgresParser.BIT_COUNT - 160)) |
                    (1 << (PostgresParser.BTRIM - 160)) |
                    (1 << (PostgresParser.GET_BIT - 160)) |
                    (1 << (PostgresParser.GET_BYTE - 160)))) !==
                  0) ||
              (((_la - 192) & ~0x1f) === 0 &&
                ((1 << (_la - 192)) &
                  ((1 << (PostgresParser.LENGTH - 192)) |
                    (1 << (PostgresParser.LTRIM - 192)) |
                    (1 << (PostgresParser.MD5 - 192)) |
                    (1 << (PostgresParser.RTRIM - 192)) |
                    (1 << (PostgresParser.SET_BIT - 192)) |
                    (1 << (PostgresParser.SET_BYTE - 192)) |
                    (1 << (PostgresParser.SHA224 - 192)) |
                    (1 << (PostgresParser.SHA256 - 192)) |
                    (1 << (PostgresParser.SHA384 - 192)) |
                    (1 << (PostgresParser.SHA512 - 192)) |
                    (1 << (PostgresParser.SUBSTR - 192)) |
                    (1 << (PostgresParser.NUM_NONNULLS - 192)) |
                    (1 << (PostgresParser.NUM_NULLS - 192)) |
                    (1 << (PostgresParser.COALESCE - 192)) |
                    (1 << (PostgresParser.NULLIF - 192)) |
                    (1 << (PostgresParser.GREATEST - 192)) |
                    (1 << (PostgresParser.LEAST - 192)) |
                    (1 << (PostgresParser.AGE - 192)) |
                    (1 << (PostgresParser.CLOCK_TIMESTAMP - 192)) |
                    (1 << (PostgresParser.CURRENT_DATE - 192)) |
                    (1 << (PostgresParser.CURRENT_TIME - 192)) |
                    (1 << (PostgresParser.CURRENT_TIMESTAMP - 192)) |
                    (1 << (PostgresParser.DATE_BIN - 192)) |
                    (1 << (PostgresParser.DATE_PART - 192)) |
                    (1 << (PostgresParser.DATE_TRUNC - 192)) |
                    (1 << (PostgresParser.EXTRACT - 192)) |
                    (1 << (PostgresParser.ISFINITE - 192)) |
                    (1 << (PostgresParser.JUSTIFY_DAYS - 192)) |
                    (1 << (PostgresParser.JUSTIFY_HOURS - 192)) |
                    (1 << (PostgresParser.JUSTIFY_INTERVAL - 192)) |
                    (1 << (PostgresParser.LOCALTIME - 192)) |
                    (1 << (PostgresParser.LOCALTIMESTAMP - 192)))) !==
                  0) ||
              (((_la - 224) & ~0x1f) === 0 &&
                ((1 << (_la - 224)) &
                  ((1 << (PostgresParser.MAKE_DATE - 224)) |
                    (1 << (PostgresParser.MAKE_INTERVAL - 224)) |
                    (1 << (PostgresParser.MAKE_TIME - 224)) |
                    (1 << (PostgresParser.MAKE_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 224)) |
                    (1 << (PostgresParser.NOW - 224)) |
                    (1 << (PostgresParser.STATEMENT_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.TIMEOFDAY - 224)) |
                    (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.ENUM_FIRST - 224)) |
                    (1 << (PostgresParser.ENUM_LAST - 224)) |
                    (1 << (PostgresParser.ENUM_RANGE - 224)) |
                    (1 << (PostgresParser.TO_CHAR - 224)) |
                    (1 << (PostgresParser.TO_DATE - 224)) |
                    (1 << (PostgresParser.TO_NUMBER - 224)) |
                    (1 << (PostgresParser.TO_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.BOX - 224)) |
                    (1 << (PostgresParser.CIRCLE - 224)) |
                    (1 << (PostgresParser.LINE - 224)) |
                    (1 << (PostgresParser.LSEG - 224)) |
                    (1 << (PostgresParser.POINT - 224)) |
                    (1 << (PostgresParser.POLYGON - 224)) |
                    (1 << (PostgresParser.AREA - 224)) |
                    (1 << (PostgresParser.CENTER - 224)) |
                    (1 << (PostgresParser.DIAGONAL - 224)) |
                    (1 << (PostgresParser.DIAMETER - 224)) |
                    (1 << (PostgresParser.HEIGHT - 224)) |
                    (1 << (PostgresParser.ISCLOSED - 224)) |
                    (1 << (PostgresParser.ISOPEN - 224)) |
                    (1 << (PostgresParser.NPOINTS - 224)) |
                    (1 << (PostgresParser.PCLOSE - 224)) |
                    (1 << (PostgresParser.POPEN - 224)))) !==
                  0) ||
              (((_la - 256) & ~0x1f) === 0 &&
                ((1 << (_la - 256)) &
                  ((1 << (PostgresParser.RADIUS - 256)) |
                    (1 << (PostgresParser.SLOPE - 256)) |
                    (1 << (PostgresParser.WIDTH - 256)) |
                    (1 << (PostgresParser.SINH - 256)) |
                    (1 << (PostgresParser.COSH - 256)) |
                    (1 << (PostgresParser.TANH - 256)) |
                    (1 << (PostgresParser.ASINH - 256)) |
                    (1 << (PostgresParser.ACOSH - 256)) |
                    (1 << (PostgresParser.ATANH - 256)) |
                    (1 << (PostgresParser.ABBREV - 256)) |
                    (1 << (PostgresParser.BROADCAST - 256)) |
                    (1 << (PostgresParser.FAMILY - 256)) |
                    (1 << (PostgresParser.HOST - 256)) |
                    (1 << (PostgresParser.HOSTMASK - 256)) |
                    (1 << (PostgresParser.INET_MERGE - 256)) |
                    (1 << (PostgresParser.INET_SAME_FAMILY - 256)) |
                    (1 << (PostgresParser.MASKLEN - 256)) |
                    (1 << (PostgresParser.NETMASK - 256)) |
                    (1 << (PostgresParser.NETWORK - 256)) |
                    (1 << (PostgresParser.SET_MASKLEN - 256)) |
                    (1 << (PostgresParser.TEXT - 256)) |
                    (1 << (PostgresParser.TRUNC - 256)) |
                    (1 << (PostgresParser.MACADDR8_SET7BIT - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_LENGTH - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 256)) |
                    (1 << (PostgresParser.JSON_EACH - 256)) |
                    (1 << (PostgresParser.JSONB_EACH - 256)) |
                    (1 << (PostgresParser.JSON_EACH_TEXT - 256)))) !==
                  0) ||
              (((_la - 288) & ~0x1f) === 0 &&
                ((1 << (_la - 288)) &
                  ((1 << (PostgresParser.JSONB_EACH_TEXT - 288)) |
                    (1 << (PostgresParser.JSON_EXTRACT_PATH - 288)) |
                    (1 << (PostgresParser.JSONB_EXTRACT_PATH - 288)) |
                    (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 288)) |
                    (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 288)) |
                    (1 << (PostgresParser.JSON_OBJECT_KEYS - 288)) |
                    (1 << (PostgresParser.JSONB_OBJECT_KEYS - 288)) |
                    (1 << (PostgresParser.JSON_POPULATE_RECORD - 288)) |
                    (1 << (PostgresParser.JSONB_POPULATE_RECORD - 288)) |
                    (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSON_TO_RECORD - 288)) |
                    (1 << (PostgresParser.JSONB_TO_RECORD - 288)) |
                    (1 << (PostgresParser.JSON_TO_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSONB_TO_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSON_STRIP_NULLS - 288)) |
                    (1 << (PostgresParser.JSONB_STRIP_NULLS - 288)) |
                    (1 << (PostgresParser.JSONB_SET - 288)) |
                    (1 << (PostgresParser.JSONB_SET_LAX - 288)) |
                    (1 << (PostgresParser.JSONB_INSERT - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_EXISTS - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_MATCH - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PRETTY - 288)) |
                    (1 << (PostgresParser.JSON_TYPEOF - 288)))) !==
                  0) ||
              (((_la - 320) & ~0x1f) === 0 &&
                ((1 << (_la - 320)) &
                  ((1 << (PostgresParser.JSONB_TYPEOF - 320)) |
                    (1 << (PostgresParser.TO_JSON - 320)) |
                    (1 << (PostgresParser.TO_JSONB - 320)) |
                    (1 << (PostgresParser.ARRAY_TO_JSON - 320)) |
                    (1 << (PostgresParser.ROW_TO_JSON - 320)) |
                    (1 << (PostgresParser.JSON_BUILD_ARRAY - 320)) |
                    (1 << (PostgresParser.JSONB_BUILD_ARRAY - 320)) |
                    (1 << (PostgresParser.JSON_BUILD_OBJECT - 320)) |
                    (1 << (PostgresParser.JSON_OBJECT - 320)) |
                    (1 << (PostgresParser.JSONB_OBJECT - 320)) |
                    (1 << (PostgresParser.ABS - 320)) |
                    (1 << (PostgresParser.CBRT - 320)) |
                    (1 << (PostgresParser.CEIL - 320)) |
                    (1 << (PostgresParser.DEGREES - 320)) |
                    (1 << (PostgresParser.DIV - 320)) |
                    (1 << (PostgresParser.EXP - 320)) |
                    (1 << (PostgresParser.FACTORIAL - 320)) |
                    (1 << (PostgresParser.FLOOR - 320)) |
                    (1 << (PostgresParser.GCD - 320)) |
                    (1 << (PostgresParser.LCM - 320)) |
                    (1 << (PostgresParser.LN - 320)) |
                    (1 << (PostgresParser.LOG - 320)) |
                    (1 << (PostgresParser.LOG10 - 320)) |
                    (1 << (PostgresParser.MIN_SCALE - 320)) |
                    (1 << (PostgresParser.MOD - 320)) |
                    (1 << (PostgresParser.PI - 320)) |
                    (1 << (PostgresParser.POWER - 320)) |
                    (1 << (PostgresParser.RADIANS - 320)) |
                    (1 << (PostgresParser.ROUND - 320)) |
                    (1 << (PostgresParser.SCALE - 320)) |
                    (1 << (PostgresParser.SIGN - 320)) |
                    (1 << (PostgresParser.SQRT - 320)))) !==
                  0) ||
              (((_la - 352) & ~0x1f) === 0 &&
                ((1 << (_la - 352)) &
                  ((1 << (PostgresParser.TRIM_SCALE - 352)) |
                    (1 << (PostgresParser.WIDTH_BUCKET - 352)) |
                    (1 << (PostgresParser.MODE - 352)) |
                    (1 << (PostgresParser.PERCENTILE_CONT - 352)) |
                    (1 << (PostgresParser.PERCENTILE_DISC - 352)) |
                    (1 << (PostgresParser.RANDOM - 352)) |
                    (1 << (PostgresParser.SETSEED - 352)) |
                    (1 << (PostgresParser.LOWER - 352)) |
                    (1 << (PostgresParser.UPPER - 352)) |
                    (1 << (PostgresParser.ISEMPTY - 352)) |
                    (1 << (PostgresParser.LOWER_INC - 352)) |
                    (1 << (PostgresParser.UPPER_INC - 352)) |
                    (1 << (PostgresParser.LOWER_INF - 352)) |
                    (1 << (PostgresParser.UPPER_INF - 352)) |
                    (1 << (PostgresParser.RANGE_MERGE - 352)) |
                    (1 << (PostgresParser.MULTIRANGE - 352)) |
                    (1 << (PostgresParser.TS_DEBUG - 352)) |
                    (1 << (PostgresParser.TS_LEXIZE - 352)) |
                    (1 << (PostgresParser.TS_PARSE - 352)) |
                    (1 << (PostgresParser.TS_TOKEN_TYPE - 352)) |
                    (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 352)) |
                    (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 352)) |
                    (1 << (PostgresParser.NUMNODE - 352)) |
                    (1 << (PostgresParser.PLAINTO_TSQUERY - 352)) |
                    (1 << (PostgresParser.PHRASETO_TSQUERY - 352)) |
                    (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 352)) |
                    (1 << (PostgresParser.QUERYTREE - 352)) |
                    (1 << (PostgresParser.SETWEIGHT - 352)) |
                    (1 << (PostgresParser.STRIP - 352)) |
                    (1 << (PostgresParser.TO_TSQUERY - 352)) |
                    (1 << (PostgresParser.TO_TSVECTOR - 352)) |
                    (1 << (PostgresParser.JSON_TO_TSVECTOR - 352)))) !==
                  0) ||
              (((_la - 384) & ~0x1f) === 0 &&
                ((1 << (_la - 384)) &
                  ((1 << (PostgresParser.TS_DELETE - 384)) |
                    (1 << (PostgresParser.TS_FILTER - 384)) |
                    (1 << (PostgresParser.TS_HEADLINE - 384)) |
                    (1 << (PostgresParser.TS_RANK - 384)) |
                    (1 << (PostgresParser.TS_RANK_CD - 384)) |
                    (1 << (PostgresParser.TS_REWRITE - 384)) |
                    (1 << (PostgresParser.TSQUERY_PHRASE - 384)) |
                    (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 384)) |
                    (1 << (PostgresParser.GENERATE_SERIES - 384)) |
                    (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 384)) |
                    (1 << (PostgresParser.CORR - 384)) |
                    (1 << (PostgresParser.COVAR_POP - 384)) |
                    (1 << (PostgresParser.COVAR_SAMP - 384)) |
                    (1 << (PostgresParser.REGR_AVGX - 384)) |
                    (1 << (PostgresParser.REGR_AVGY - 384)) |
                    (1 << (PostgresParser.REGR_COUNT - 384)) |
                    (1 << (PostgresParser.REGR_INTERCEPT - 384)) |
                    (1 << (PostgresParser.REGR_R2 - 384)) |
                    (1 << (PostgresParser.REGR_SLOPE - 384)) |
                    (1 << (PostgresParser.REGR_SXX - 384)) |
                    (1 << (PostgresParser.REGR_SXY - 384)) |
                    (1 << (PostgresParser.REGR_SYY - 384)) |
                    (1 << (PostgresParser.STDDEV - 384)) |
                    (1 << (PostgresParser.STDDEV_POP - 384)) |
                    (1 << (PostgresParser.STDDEV_SAMP - 384)) |
                    (1 << (PostgresParser.VARIANCE - 384)) |
                    (1 << (PostgresParser.VAR_POP - 384)) |
                    (1 << (PostgresParser.VAR_SAMP - 384)) |
                    (1 << (PostgresParser.ASCII - 384)) |
                    (1 << (PostgresParser.CHR - 384)) |
                    (1 << (PostgresParser.CONCAT - 384)) |
                    (1 << (PostgresParser.CONCAT_WS - 384)))) !==
                  0) ||
              (((_la - 416) & ~0x1f) === 0 &&
                ((1 << (_la - 416)) &
                  ((1 << (PostgresParser.FORMAT - 416)) |
                    (1 << (PostgresParser.INITCAP - 416)) |
                    (1 << (PostgresParser.LPAD - 416)) |
                    (1 << (PostgresParser.PARSE_IDENT - 416)) |
                    (1 << (PostgresParser.QUOTE_IDENT - 416)) |
                    (1 << (PostgresParser.QUOTE_LITERAL - 416)) |
                    (1 << (PostgresParser.QUOTE_NULLABLE - 416)) |
                    (1 << (PostgresParser.REGEXP_MATCH - 416)) |
                    (1 << (PostgresParser.REGEXP_MATCHES - 416)) |
                    (1 << (PostgresParser.REGEXP_REPLACE - 416)) |
                    (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 416)) |
                    (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 416)) |
                    (1 << (PostgresParser.REPEAT - 416)) |
                    (1 << (PostgresParser.REPLACE - 416)) |
                    (1 << (PostgresParser.REVERSE - 416)) |
                    (1 << (PostgresParser.RPAD - 416)) |
                    (1 << (PostgresParser.SPLIT_PART - 416)) |
                    (1 << (PostgresParser.STRPOS - 416)) |
                    (1 << (PostgresParser.STARTS_WITH - 416)) |
                    (1 << (PostgresParser.STRING_TO_ARRAY - 416)) |
                    (1 << (PostgresParser.STRING_TO_TABLE - 416)) |
                    (1 << (PostgresParser.TO_ASCII - 416)) |
                    (1 << (PostgresParser.TO_HEX - 416)) |
                    (1 << (PostgresParser.TRANSLATE - 416)) |
                    (1 << (PostgresParser.UNISTR - 416)) |
                    (1 << (PostgresParser.BIT_LENGTH - 416)) |
                    (1 << (PostgresParser.CHAR_LENGTH - 416)) |
                    (1 << (PostgresParser.CHARACTER_LENGTH - 416)) |
                    (1 << (PostgresParser.NORMALIZE - 416)) |
                    (1 << (PostgresParser.OCTET_LENGTH - 416)) |
                    (1 << (PostgresParser.OVERLAY - 416)) |
                    (1 << (PostgresParser.POSITION - 416)))) !==
                  0) ||
              (((_la - 448) & ~0x1f) === 0 &&
                ((1 << (_la - 448)) &
                  ((1 << (PostgresParser.SUBSTRING - 448)) |
                    (1 << (PostgresParser.TRIM - 448)) |
                    (1 << (PostgresParser.ACOS - 448)) |
                    (1 << (PostgresParser.ACOSD - 448)) |
                    (1 << (PostgresParser.ASIN - 448)) |
                    (1 << (PostgresParser.ASIND - 448)) |
                    (1 << (PostgresParser.ATAN - 448)) |
                    (1 << (PostgresParser.ATAND - 448)) |
                    (1 << (PostgresParser.ATAN2 - 448)) |
                    (1 << (PostgresParser.ATAN2D - 448)) |
                    (1 << (PostgresParser.COS - 448)) |
                    (1 << (PostgresParser.COSD - 448)) |
                    (1 << (PostgresParser.COT - 448)) |
                    (1 << (PostgresParser.COTD - 448)) |
                    (1 << (PostgresParser.SIN - 448)) |
                    (1 << (PostgresParser.SIND - 448)) |
                    (1 << (PostgresParser.TAN - 448)) |
                    (1 << (PostgresParser.TAND - 448)) |
                    (1 << (PostgresParser.GEN_RANDOM_UUID - 448)) |
                    (1 << (PostgresParser.ROW_NUMBER - 448)) |
                    (1 << (PostgresParser.RANK - 448)) |
                    (1 << (PostgresParser.DENSE_RANK - 448)) |
                    (1 << (PostgresParser.PERCENT_RANK - 448)) |
                    (1 << (PostgresParser.CUME_DIST - 448)) |
                    (1 << (PostgresParser.NTILE - 448)) |
                    (1 << (PostgresParser.LAG - 448)) |
                    (1 << (PostgresParser.LEAD - 448)) |
                    (1 << (PostgresParser.FIRST_VALUE - 448)) |
                    (1 << (PostgresParser.LAST_VALUE - 448)) |
                    (1 << (PostgresParser.NTH_VALUE - 448)) |
                    (1 << (PostgresParser.XMLCOMMENT - 448)) |
                    (1 << (PostgresParser.XMLCONCAT - 448)))) !==
                  0) ||
              (((_la - 480) & ~0x1f) === 0 &&
                ((1 << (_la - 480)) &
                  ((1 << (PostgresParser.XMLELEMENT - 480)) |
                    (1 << (PostgresParser.XMLFOREST - 480)) |
                    (1 << (PostgresParser.XMLPI - 480)) |
                    (1 << (PostgresParser.XMLROOT - 480)) |
                    (1 << (PostgresParser.XMLEXISTS - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 480)) |
                    (1 << (PostgresParser.XPATH - 480)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 480)) |
                    (1 << (PostgresParser.XMLTABLE - 480)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 480)) |
                    (1 << (PostgresParser.LEFT_PAREN - 480)) |
                    (1 << (PostgresParser.PLUS - 480)) |
                    (1 << (PostgresParser.MINUS - 480)) |
                    (1 << (PostgresParser.MULTIPLY - 480)))) !==
                  0) ||
              (((_la - 517) & ~0x1f) === 0 &&
                ((1 << (_la - 517)) &
                  ((1 << (PostgresParser.LESS_LESS - 517)) |
                    (1 << (PostgresParser.GREATER_GREATER - 517)) |
                    (1 << (PostgresParser.HASH_SIGN - 517)) |
                    (1 << (PostgresParser.OP_CHARS - 517)) |
                    (1 << (PostgresParser.NUMBER_LITERAL - 517)) |
                    (1 << (PostgresParser.REAL_NUMBER - 517)) |
                    (1 << (PostgresParser.DOLLAR_NUMBER - 517)) |
                    (1 << (PostgresParser.Identifier - 517)) |
                    (1 << (PostgresParser.QuotedIdentifier - 517)) |
                    (1 << (PostgresParser.Character_String_Literal - 517)) |
                    (1 << (PostgresParser.BeginDollarStringConstant - 517)))) !==
                  0)
            ) {
              {
                this.state = 764;
                this.vex(0);
                this.state = 769;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PostgresParser.COMMA) {
                  {
                    {
                      this.state = 765;
                      this.match(PostgresParser.COMMA);
                      this.state = 766;
                      this.vex(0);
                    }
                  }
                  this.state = 771;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                }
              }
            }

            this.state = 774;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public vex_or_named_notation(): Vex_or_named_notationContext {
    let _localctx: Vex_or_named_notationContext = new Vex_or_named_notationContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 62, PostgresParser.RULE_vex_or_named_notation);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 778;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.VARIADIC) {
          {
            this.state = 777;
            this.match(PostgresParser.VARIADIC);
          }
        }

        this.state = 783;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
          case 1:
            {
              this.state = 780;
              _localctx._argname = this.identifier();
              this.state = 781;
              this.pointer();
            }
            break;
        }
        this.state = 785;
        this.vex(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public pointer(): PointerContext {
    let _localctx: PointerContext = new PointerContext(this._ctx, this.state);
    this.enterRule(_localctx, 64, PostgresParser.RULE_pointer);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 787;
        _la = this._input.LA(1);
        if (!(_la === PostgresParser.EQUAL_GTH || _la === PostgresParser.COLON_EQUAL)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public comparison_mod(): Comparison_modContext {
    let _localctx: Comparison_modContext = new Comparison_modContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, PostgresParser.RULE_comparison_mod);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 789;
        _la = this._input.LA(1);
        if (
          !(
            (_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PostgresParser.ALL) |
                (1 << PostgresParser.ANY) |
                (1 << PostgresParser.SOME))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 790;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 793;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
          case 1:
            {
              this.state = 791;
              this.vex(0);
            }
            break;

          case 2:
            {
              this.state = 792;
              this.select_stmt_no_parens();
            }
            break;
        }
        this.state = 795;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public filter_clause(): Filter_clauseContext {
    let _localctx: Filter_clauseContext = new Filter_clauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 68, PostgresParser.RULE_filter_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 797;
        this.match(PostgresParser.FILTER);
        this.state = 798;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 799;
        this.match(PostgresParser.WHERE);
        this.state = 800;
        this.vex(0);
        this.state = 801;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public window_definition(): Window_definitionContext {
    let _localctx: Window_definitionContext = new Window_definitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 70, PostgresParser.RULE_window_definition);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 803;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 805;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
          case 1:
            {
              this.state = 804;
              this.identifier();
            }
            break;
        }
        this.state = 808;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.PARTITION) {
          {
            this.state = 807;
            this.partition_by_columns();
          }
        }

        this.state = 811;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.ORDER) {
          {
            this.state = 810;
            this.orderby_clause();
          }
        }

        this.state = 814;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la - 101) & ~0x1f) === 0 &&
          ((1 << (_la - 101)) &
            ((1 << (PostgresParser.ROWS - 101)) |
              (1 << (PostgresParser.RANGE - 101)) |
              (1 << (PostgresParser.GROUPS - 101)))) !==
            0
        ) {
          {
            this.state = 813;
            this.frame_clause();
          }
        }

        this.state = 816;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public frame_clause(): Frame_clauseContext {
    let _localctx: Frame_clauseContext = new Frame_clauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 72, PostgresParser.RULE_frame_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 818;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 101) & ~0x1f) === 0 &&
            ((1 << (_la - 101)) &
              ((1 << (PostgresParser.ROWS - 101)) |
                (1 << (PostgresParser.RANGE - 101)) |
                (1 << (PostgresParser.GROUPS - 101)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
        this.state = 825;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
          case 1:
            {
              this.state = 819;
              this.frame_bound();
            }
            break;

          case 2:
            {
              this.state = 820;
              this.match(PostgresParser.BETWEEN);
              this.state = 821;
              this.frame_bound();
              this.state = 822;
              this.match(PostgresParser.AND);
              this.state = 823;
              this.frame_bound();
            }
            break;
        }
        this.state = 836;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.EXCLUDE) {
          {
            this.state = 827;
            this.match(PostgresParser.EXCLUDE);
            this.state = 834;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.CURRENT:
                {
                  this.state = 828;
                  this.match(PostgresParser.CURRENT);
                  this.state = 829;
                  this.match(PostgresParser.ROW);
                }
                break;
              case PostgresParser.GROUP:
                {
                  this.state = 830;
                  this.match(PostgresParser.GROUP);
                }
                break;
              case PostgresParser.TIES:
                {
                  this.state = 831;
                  this.match(PostgresParser.TIES);
                }
                break;
              case PostgresParser.NO:
                {
                  this.state = 832;
                  this.match(PostgresParser.NO);
                  this.state = 833;
                  this.match(PostgresParser.OTHERS);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public frame_bound(): Frame_boundContext {
    let _localctx: Frame_boundContext = new Frame_boundContext(this._ctx, this.state);
    this.enterRule(_localctx, 74, PostgresParser.RULE_frame_bound);
    let _la: number;
    try {
      this.state = 843;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 838;
            this.vex(0);
            this.state = 839;
            _la = this._input.LA(1);
            if (!(_la === PostgresParser.PRECEDING || _la === PostgresParser.FOLLOWING)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 841;
            this.match(PostgresParser.CURRENT);
            this.state = 842;
            this.match(PostgresParser.ROW);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public array_expression(): Array_expressionContext {
    let _localctx: Array_expressionContext = new Array_expressionContext(this._ctx, this.state);
    this.enterRule(_localctx, 76, PostgresParser.RULE_array_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 845;
        this.match(PostgresParser.ARRAY);
        this.state = 848;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.LEFT_BRACKET:
            {
              this.state = 846;
              this.array_elements();
            }
            break;
          case PostgresParser.LEFT_PAREN:
            {
              this.state = 847;
              this.table_subquery();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public array_elements(): Array_elementsContext {
    let _localctx: Array_elementsContext = new Array_elementsContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, PostgresParser.RULE_array_elements);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 850;
        this.match(PostgresParser.LEFT_BRACKET);
        this.state = 865;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PostgresParser.RECURSIVE) |
                (1 << PostgresParser.BY) |
                (1 << PostgresParser.ALL) |
                (1 << PostgresParser.ANY) |
                (1 << PostgresParser.SOME) |
                (1 << PostgresParser.OPERATOR) |
                (1 << PostgresParser.NULLS) |
                (1 << PostgresParser.FIRST) |
                (1 << PostgresParser.LAST) |
                (1 << PostgresParser.LEFT) |
                (1 << PostgresParser.RIGHT) |
                (1 << PostgresParser.FULL) |
                (1 << PostgresParser.INNER) |
                (1 << PostgresParser.OUTER) |
                (1 << PostgresParser.CROSS))) !==
              0) ||
          (((_la - 32) & ~0x1f) === 0 &&
            ((1 << (_la - 32)) &
              ((1 << (PostgresParser.JOIN - 32)) |
                (1 << (PostgresParser.ON - 32)) |
                (1 << (PostgresParser.VALUES - 32)) |
                (1 << (PostgresParser.NATURAL - 32)) |
                (1 << (PostgresParser.TABLESAMPLE - 32)) |
                (1 << (PostgresParser.INTERVAL - 32)) |
                (1 << (PostgresParser.SECOND - 32)) |
                (1 << (PostgresParser.MINUTE - 32)) |
                (1 << (PostgresParser.HOUR - 32)) |
                (1 << (PostgresParser.DAY - 32)) |
                (1 << (PostgresParser.MONTH - 32)) |
                (1 << (PostgresParser.YEAR - 32)) |
                (1 << (PostgresParser.TREAT - 32)) |
                (1 << (PostgresParser.CASE - 32)) |
                (1 << (PostgresParser.NOT - 32)) |
                (1 << (PostgresParser.IS - 32)) |
                (1 << (PostgresParser.NULL - 32)) |
                (1 << (PostgresParser.ISNULL - 32)) |
                (1 << (PostgresParser.NOTNULL - 32)))) !==
              0) ||
          (((_la - 64) & ~0x1f) === 0 &&
            ((1 << (_la - 64)) &
              ((1 << (PostgresParser.TRUE - 64)) |
                (1 << (PostgresParser.FALSE - 64)) |
                (1 << (PostgresParser.BETWEEN - 64)) |
                (1 << (PostgresParser.LIKE - 64)) |
                (1 << (PostgresParser.ILIKE - 64)) |
                (1 << (PostgresParser.ARRAY - 64)) |
                (1 << (PostgresParser.BOOLEAN - 64)) |
                (1 << (PostgresParser.SMALLINT - 64)) |
                (1 << (PostgresParser.INT - 64)) |
                (1 << (PostgresParser.INTEGER - 64)) |
                (1 << (PostgresParser.BIGINT - 64)) |
                (1 << (PostgresParser.DEC - 64)) |
                (1 << (PostgresParser.DECIMAL - 64)) |
                (1 << (PostgresParser.DOUBLE - 64)) |
                (1 << (PostgresParser.FLOAT - 64)) |
                (1 << (PostgresParser.NUMERIC - 64)) |
                (1 << (PostgresParser.PRECISION - 64)) |
                (1 << (PostgresParser.REAL - 64)) |
                (1 << (PostgresParser.BIT - 64)) |
                (1 << (PostgresParser.VARYING - 64)) |
                (1 << (PostgresParser.NATIONAL - 64)) |
                (1 << (PostgresParser.CHARACTER - 64)) |
                (1 << (PostgresParser.CHAR - 64)) |
                (1 << (PostgresParser.NCHAR - 64)) |
                (1 << (PostgresParser.TIME - 64)) |
                (1 << (PostgresParser.WITHOUT - 64)) |
                (1 << (PostgresParser.WITHIN - 64)) |
                (1 << (PostgresParser.ZONE - 64)) |
                (1 << (PostgresParser.TIMESTAMP - 64)) |
                (1 << (PostgresParser.VARCHAR - 64)) |
                (1 << (PostgresParser.SETOF - 64)))) !==
              0) ||
          (((_la - 96) & ~0x1f) === 0 &&
            ((1 << (_la - 96)) &
              ((1 << (PostgresParser.OF - 96)) |
                (1 << (PostgresParser.OVER - 96)) |
                (1 << (PostgresParser.PARTITION - 96)) |
                (1 << (PostgresParser.ROWS - 96)) |
                (1 << (PostgresParser.RANGE - 96)) |
                (1 << (PostgresParser.GROUPS - 96)) |
                (1 << (PostgresParser.UNBOUNDED - 96)) |
                (1 << (PostgresParser.PRECEDING - 96)) |
                (1 << (PostgresParser.FOLLOWING - 96)) |
                (1 << (PostgresParser.CURRENT - 96)) |
                (1 << (PostgresParser.ROW - 96)) |
                (1 << (PostgresParser.EXCLUDE - 96)) |
                (1 << (PostgresParser.TIES - 96)) |
                (1 << (PostgresParser.NO - 96)) |
                (1 << (PostgresParser.OTHERS - 96)) |
                (1 << (PostgresParser.ROLLUP - 96)) |
                (1 << (PostgresParser.GROUPING - 96)) |
                (1 << (PostgresParser.SETS - 96)) |
                (1 << (PostgresParser.OVERLAPS - 96)) |
                (1 << (PostgresParser.AT - 96)) |
                (1 << (PostgresParser.SIMILAR - 96)) |
                (1 << (PostgresParser.ESCAPE - 96)) |
                (1 << (PostgresParser.NEXT - 96)) |
                (1 << (PostgresParser.DOCUMENT - 96)))) !==
              0) ||
          (((_la - 128) & ~0x1f) === 0 &&
            ((1 << (_la - 128)) &
              ((1 << (PostgresParser.UNKNOWN - 128)) |
                (1 << (PostgresParser.EXISTS - 128)) |
                (1 << (PostgresParser.FILTER - 128)) |
                (1 << (PostgresParser.ALIAS - 128)) |
                (1 << (PostgresParser.PATH - 128)) |
                (1 << (PostgresParser.POW - 128)) |
                (1 << (PostgresParser.DATE - 128)) |
                (1 << (PostgresParser.ARRAY_AGG - 128)) |
                (1 << (PostgresParser.AVG - 128)) |
                (1 << (PostgresParser.BIT_AND - 128)) |
                (1 << (PostgresParser.BIT_OR - 128)) |
                (1 << (PostgresParser.BIT_XOR - 128)) |
                (1 << (PostgresParser.BOOL_AND - 128)) |
                (1 << (PostgresParser.BOOL_OR - 128)) |
                (1 << (PostgresParser.COUNT - 128)) |
                (1 << (PostgresParser.EVERY - 128)) |
                (1 << (PostgresParser.JSON_AGG - 128)) |
                (1 << (PostgresParser.JSON_OBJECT_AGG - 128)))) !==
              0) ||
          (((_la - 160) & ~0x1f) === 0 &&
            ((1 << (_la - 160)) &
              ((1 << (PostgresParser.MAX - 160)) |
                (1 << (PostgresParser.MIN - 160)) |
                (1 << (PostgresParser.RANGE_AGG - 160)) |
                (1 << (PostgresParser.RANGE_INTERSECT_AGG - 160)) |
                (1 << (PostgresParser.STRING_AGG - 160)) |
                (1 << (PostgresParser.SUM - 160)) |
                (1 << (PostgresParser.XMLAGG - 160)) |
                (1 << (PostgresParser.ARRAY_APPEND - 160)) |
                (1 << (PostgresParser.ARRAY_CAT - 160)) |
                (1 << (PostgresParser.ARRAY_DIMS - 160)) |
                (1 << (PostgresParser.ARRAY_FILL - 160)) |
                (1 << (PostgresParser.ARRAY_LENGTH - 160)) |
                (1 << (PostgresParser.ARRAY_LOWER - 160)) |
                (1 << (PostgresParser.ARRAY_NDIMS - 160)) |
                (1 << (PostgresParser.ARRAY_POSITION - 160)) |
                (1 << (PostgresParser.ARRAY_PREPEND - 160)) |
                (1 << (PostgresParser.ARRAY_REMOVE - 160)) |
                (1 << (PostgresParser.ARRAY_REPLACE - 160)) |
                (1 << (PostgresParser.ARRAY_TO_STRING - 160)) |
                (1 << (PostgresParser.ARRAY_UPPER - 160)) |
                (1 << (PostgresParser.CARDINALITY - 160)) |
                (1 << (PostgresParser.TRIM_ARRAY - 160)) |
                (1 << (PostgresParser.UNNEST - 160)) |
                (1 << (PostgresParser.CONVERT - 160)) |
                (1 << (PostgresParser.CONVERT_FROM - 160)) |
                (1 << (PostgresParser.CONVERT_TO - 160)) |
                (1 << (PostgresParser.ENCODE - 160)) |
                (1 << (PostgresParser.DECODE - 160)) |
                (1 << (PostgresParser.BIT_COUNT - 160)) |
                (1 << (PostgresParser.BTRIM - 160)) |
                (1 << (PostgresParser.GET_BIT - 160)) |
                (1 << (PostgresParser.GET_BYTE - 160)))) !==
              0) ||
          (((_la - 192) & ~0x1f) === 0 &&
            ((1 << (_la - 192)) &
              ((1 << (PostgresParser.LENGTH - 192)) |
                (1 << (PostgresParser.LTRIM - 192)) |
                (1 << (PostgresParser.MD5 - 192)) |
                (1 << (PostgresParser.RTRIM - 192)) |
                (1 << (PostgresParser.SET_BIT - 192)) |
                (1 << (PostgresParser.SET_BYTE - 192)) |
                (1 << (PostgresParser.SHA224 - 192)) |
                (1 << (PostgresParser.SHA256 - 192)) |
                (1 << (PostgresParser.SHA384 - 192)) |
                (1 << (PostgresParser.SHA512 - 192)) |
                (1 << (PostgresParser.SUBSTR - 192)) |
                (1 << (PostgresParser.NUM_NONNULLS - 192)) |
                (1 << (PostgresParser.NUM_NULLS - 192)) |
                (1 << (PostgresParser.COALESCE - 192)) |
                (1 << (PostgresParser.NULLIF - 192)) |
                (1 << (PostgresParser.GREATEST - 192)) |
                (1 << (PostgresParser.LEAST - 192)) |
                (1 << (PostgresParser.AGE - 192)) |
                (1 << (PostgresParser.CLOCK_TIMESTAMP - 192)) |
                (1 << (PostgresParser.CURRENT_DATE - 192)) |
                (1 << (PostgresParser.CURRENT_TIME - 192)) |
                (1 << (PostgresParser.CURRENT_TIMESTAMP - 192)) |
                (1 << (PostgresParser.DATE_BIN - 192)) |
                (1 << (PostgresParser.DATE_PART - 192)) |
                (1 << (PostgresParser.DATE_TRUNC - 192)) |
                (1 << (PostgresParser.EXTRACT - 192)) |
                (1 << (PostgresParser.ISFINITE - 192)) |
                (1 << (PostgresParser.JUSTIFY_DAYS - 192)) |
                (1 << (PostgresParser.JUSTIFY_HOURS - 192)) |
                (1 << (PostgresParser.JUSTIFY_INTERVAL - 192)) |
                (1 << (PostgresParser.LOCALTIME - 192)) |
                (1 << (PostgresParser.LOCALTIMESTAMP - 192)))) !==
              0) ||
          (((_la - 224) & ~0x1f) === 0 &&
            ((1 << (_la - 224)) &
              ((1 << (PostgresParser.MAKE_DATE - 224)) |
                (1 << (PostgresParser.MAKE_INTERVAL - 224)) |
                (1 << (PostgresParser.MAKE_TIME - 224)) |
                (1 << (PostgresParser.MAKE_TIMESTAMP - 224)) |
                (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 224)) |
                (1 << (PostgresParser.NOW - 224)) |
                (1 << (PostgresParser.STATEMENT_TIMESTAMP - 224)) |
                (1 << (PostgresParser.TIMEOFDAY - 224)) |
                (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 224)) |
                (1 << (PostgresParser.ENUM_FIRST - 224)) |
                (1 << (PostgresParser.ENUM_LAST - 224)) |
                (1 << (PostgresParser.ENUM_RANGE - 224)) |
                (1 << (PostgresParser.TO_CHAR - 224)) |
                (1 << (PostgresParser.TO_DATE - 224)) |
                (1 << (PostgresParser.TO_NUMBER - 224)) |
                (1 << (PostgresParser.TO_TIMESTAMP - 224)) |
                (1 << (PostgresParser.BOX - 224)) |
                (1 << (PostgresParser.CIRCLE - 224)) |
                (1 << (PostgresParser.LINE - 224)) |
                (1 << (PostgresParser.LSEG - 224)) |
                (1 << (PostgresParser.POINT - 224)) |
                (1 << (PostgresParser.POLYGON - 224)) |
                (1 << (PostgresParser.AREA - 224)) |
                (1 << (PostgresParser.CENTER - 224)) |
                (1 << (PostgresParser.DIAGONAL - 224)) |
                (1 << (PostgresParser.DIAMETER - 224)) |
                (1 << (PostgresParser.HEIGHT - 224)) |
                (1 << (PostgresParser.ISCLOSED - 224)) |
                (1 << (PostgresParser.ISOPEN - 224)) |
                (1 << (PostgresParser.NPOINTS - 224)) |
                (1 << (PostgresParser.PCLOSE - 224)) |
                (1 << (PostgresParser.POPEN - 224)))) !==
              0) ||
          (((_la - 256) & ~0x1f) === 0 &&
            ((1 << (_la - 256)) &
              ((1 << (PostgresParser.RADIUS - 256)) |
                (1 << (PostgresParser.SLOPE - 256)) |
                (1 << (PostgresParser.WIDTH - 256)) |
                (1 << (PostgresParser.SINH - 256)) |
                (1 << (PostgresParser.COSH - 256)) |
                (1 << (PostgresParser.TANH - 256)) |
                (1 << (PostgresParser.ASINH - 256)) |
                (1 << (PostgresParser.ACOSH - 256)) |
                (1 << (PostgresParser.ATANH - 256)) |
                (1 << (PostgresParser.ABBREV - 256)) |
                (1 << (PostgresParser.BROADCAST - 256)) |
                (1 << (PostgresParser.FAMILY - 256)) |
                (1 << (PostgresParser.HOST - 256)) |
                (1 << (PostgresParser.HOSTMASK - 256)) |
                (1 << (PostgresParser.INET_MERGE - 256)) |
                (1 << (PostgresParser.INET_SAME_FAMILY - 256)) |
                (1 << (PostgresParser.MASKLEN - 256)) |
                (1 << (PostgresParser.NETMASK - 256)) |
                (1 << (PostgresParser.NETWORK - 256)) |
                (1 << (PostgresParser.SET_MASKLEN - 256)) |
                (1 << (PostgresParser.TEXT - 256)) |
                (1 << (PostgresParser.TRUNC - 256)) |
                (1 << (PostgresParser.MACADDR8_SET7BIT - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 256)) |
                (1 << (PostgresParser.JSON_ARRAY_LENGTH - 256)) |
                (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 256)) |
                (1 << (PostgresParser.JSON_EACH - 256)) |
                (1 << (PostgresParser.JSONB_EACH - 256)) |
                (1 << (PostgresParser.JSON_EACH_TEXT - 256)))) !==
              0) ||
          (((_la - 288) & ~0x1f) === 0 &&
            ((1 << (_la - 288)) &
              ((1 << (PostgresParser.JSONB_EACH_TEXT - 288)) |
                (1 << (PostgresParser.JSON_EXTRACT_PATH - 288)) |
                (1 << (PostgresParser.JSONB_EXTRACT_PATH - 288)) |
                (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 288)) |
                (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 288)) |
                (1 << (PostgresParser.JSON_OBJECT_KEYS - 288)) |
                (1 << (PostgresParser.JSONB_OBJECT_KEYS - 288)) |
                (1 << (PostgresParser.JSON_POPULATE_RECORD - 288)) |
                (1 << (PostgresParser.JSONB_POPULATE_RECORD - 288)) |
                (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 288)) |
                (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 288)) |
                (1 << (PostgresParser.JSON_TO_RECORD - 288)) |
                (1 << (PostgresParser.JSONB_TO_RECORD - 288)) |
                (1 << (PostgresParser.JSON_TO_RECORDSET - 288)) |
                (1 << (PostgresParser.JSONB_TO_RECORDSET - 288)) |
                (1 << (PostgresParser.JSON_STRIP_NULLS - 288)) |
                (1 << (PostgresParser.JSONB_STRIP_NULLS - 288)) |
                (1 << (PostgresParser.JSONB_SET - 288)) |
                (1 << (PostgresParser.JSONB_SET_LAX - 288)) |
                (1 << (PostgresParser.JSONB_INSERT - 288)) |
                (1 << (PostgresParser.JSONB_PATH_EXISTS - 288)) |
                (1 << (PostgresParser.JSONB_PATH_MATCH - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 288)) |
                (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 288)) |
                (1 << (PostgresParser.JSONB_PRETTY - 288)) |
                (1 << (PostgresParser.JSON_TYPEOF - 288)))) !==
              0) ||
          (((_la - 320) & ~0x1f) === 0 &&
            ((1 << (_la - 320)) &
              ((1 << (PostgresParser.JSONB_TYPEOF - 320)) |
                (1 << (PostgresParser.TO_JSON - 320)) |
                (1 << (PostgresParser.TO_JSONB - 320)) |
                (1 << (PostgresParser.ARRAY_TO_JSON - 320)) |
                (1 << (PostgresParser.ROW_TO_JSON - 320)) |
                (1 << (PostgresParser.JSON_BUILD_ARRAY - 320)) |
                (1 << (PostgresParser.JSONB_BUILD_ARRAY - 320)) |
                (1 << (PostgresParser.JSON_BUILD_OBJECT - 320)) |
                (1 << (PostgresParser.JSON_OBJECT - 320)) |
                (1 << (PostgresParser.JSONB_OBJECT - 320)) |
                (1 << (PostgresParser.ABS - 320)) |
                (1 << (PostgresParser.CBRT - 320)) |
                (1 << (PostgresParser.CEIL - 320)) |
                (1 << (PostgresParser.DEGREES - 320)) |
                (1 << (PostgresParser.DIV - 320)) |
                (1 << (PostgresParser.EXP - 320)) |
                (1 << (PostgresParser.FACTORIAL - 320)) |
                (1 << (PostgresParser.FLOOR - 320)) |
                (1 << (PostgresParser.GCD - 320)) |
                (1 << (PostgresParser.LCM - 320)) |
                (1 << (PostgresParser.LN - 320)) |
                (1 << (PostgresParser.LOG - 320)) |
                (1 << (PostgresParser.LOG10 - 320)) |
                (1 << (PostgresParser.MIN_SCALE - 320)) |
                (1 << (PostgresParser.MOD - 320)) |
                (1 << (PostgresParser.PI - 320)) |
                (1 << (PostgresParser.POWER - 320)) |
                (1 << (PostgresParser.RADIANS - 320)) |
                (1 << (PostgresParser.ROUND - 320)) |
                (1 << (PostgresParser.SCALE - 320)) |
                (1 << (PostgresParser.SIGN - 320)) |
                (1 << (PostgresParser.SQRT - 320)))) !==
              0) ||
          (((_la - 352) & ~0x1f) === 0 &&
            ((1 << (_la - 352)) &
              ((1 << (PostgresParser.TRIM_SCALE - 352)) |
                (1 << (PostgresParser.WIDTH_BUCKET - 352)) |
                (1 << (PostgresParser.MODE - 352)) |
                (1 << (PostgresParser.PERCENTILE_CONT - 352)) |
                (1 << (PostgresParser.PERCENTILE_DISC - 352)) |
                (1 << (PostgresParser.RANDOM - 352)) |
                (1 << (PostgresParser.SETSEED - 352)) |
                (1 << (PostgresParser.LOWER - 352)) |
                (1 << (PostgresParser.UPPER - 352)) |
                (1 << (PostgresParser.ISEMPTY - 352)) |
                (1 << (PostgresParser.LOWER_INC - 352)) |
                (1 << (PostgresParser.UPPER_INC - 352)) |
                (1 << (PostgresParser.LOWER_INF - 352)) |
                (1 << (PostgresParser.UPPER_INF - 352)) |
                (1 << (PostgresParser.RANGE_MERGE - 352)) |
                (1 << (PostgresParser.MULTIRANGE - 352)) |
                (1 << (PostgresParser.TS_DEBUG - 352)) |
                (1 << (PostgresParser.TS_LEXIZE - 352)) |
                (1 << (PostgresParser.TS_PARSE - 352)) |
                (1 << (PostgresParser.TS_TOKEN_TYPE - 352)) |
                (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 352)) |
                (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 352)) |
                (1 << (PostgresParser.NUMNODE - 352)) |
                (1 << (PostgresParser.PLAINTO_TSQUERY - 352)) |
                (1 << (PostgresParser.PHRASETO_TSQUERY - 352)) |
                (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 352)) |
                (1 << (PostgresParser.QUERYTREE - 352)) |
                (1 << (PostgresParser.SETWEIGHT - 352)) |
                (1 << (PostgresParser.STRIP - 352)) |
                (1 << (PostgresParser.TO_TSQUERY - 352)) |
                (1 << (PostgresParser.TO_TSVECTOR - 352)) |
                (1 << (PostgresParser.JSON_TO_TSVECTOR - 352)))) !==
              0) ||
          (((_la - 384) & ~0x1f) === 0 &&
            ((1 << (_la - 384)) &
              ((1 << (PostgresParser.TS_DELETE - 384)) |
                (1 << (PostgresParser.TS_FILTER - 384)) |
                (1 << (PostgresParser.TS_HEADLINE - 384)) |
                (1 << (PostgresParser.TS_RANK - 384)) |
                (1 << (PostgresParser.TS_RANK_CD - 384)) |
                (1 << (PostgresParser.TS_REWRITE - 384)) |
                (1 << (PostgresParser.TSQUERY_PHRASE - 384)) |
                (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 384)) |
                (1 << (PostgresParser.GENERATE_SERIES - 384)) |
                (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 384)) |
                (1 << (PostgresParser.CORR - 384)) |
                (1 << (PostgresParser.COVAR_POP - 384)) |
                (1 << (PostgresParser.COVAR_SAMP - 384)) |
                (1 << (PostgresParser.REGR_AVGX - 384)) |
                (1 << (PostgresParser.REGR_AVGY - 384)) |
                (1 << (PostgresParser.REGR_COUNT - 384)) |
                (1 << (PostgresParser.REGR_INTERCEPT - 384)) |
                (1 << (PostgresParser.REGR_R2 - 384)) |
                (1 << (PostgresParser.REGR_SLOPE - 384)) |
                (1 << (PostgresParser.REGR_SXX - 384)) |
                (1 << (PostgresParser.REGR_SXY - 384)) |
                (1 << (PostgresParser.REGR_SYY - 384)) |
                (1 << (PostgresParser.STDDEV - 384)) |
                (1 << (PostgresParser.STDDEV_POP - 384)) |
                (1 << (PostgresParser.STDDEV_SAMP - 384)) |
                (1 << (PostgresParser.VARIANCE - 384)) |
                (1 << (PostgresParser.VAR_POP - 384)) |
                (1 << (PostgresParser.VAR_SAMP - 384)) |
                (1 << (PostgresParser.ASCII - 384)) |
                (1 << (PostgresParser.CHR - 384)) |
                (1 << (PostgresParser.CONCAT - 384)) |
                (1 << (PostgresParser.CONCAT_WS - 384)))) !==
              0) ||
          (((_la - 416) & ~0x1f) === 0 &&
            ((1 << (_la - 416)) &
              ((1 << (PostgresParser.FORMAT - 416)) |
                (1 << (PostgresParser.INITCAP - 416)) |
                (1 << (PostgresParser.LPAD - 416)) |
                (1 << (PostgresParser.PARSE_IDENT - 416)) |
                (1 << (PostgresParser.QUOTE_IDENT - 416)) |
                (1 << (PostgresParser.QUOTE_LITERAL - 416)) |
                (1 << (PostgresParser.QUOTE_NULLABLE - 416)) |
                (1 << (PostgresParser.REGEXP_MATCH - 416)) |
                (1 << (PostgresParser.REGEXP_MATCHES - 416)) |
                (1 << (PostgresParser.REGEXP_REPLACE - 416)) |
                (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 416)) |
                (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 416)) |
                (1 << (PostgresParser.REPEAT - 416)) |
                (1 << (PostgresParser.REPLACE - 416)) |
                (1 << (PostgresParser.REVERSE - 416)) |
                (1 << (PostgresParser.RPAD - 416)) |
                (1 << (PostgresParser.SPLIT_PART - 416)) |
                (1 << (PostgresParser.STRPOS - 416)) |
                (1 << (PostgresParser.STARTS_WITH - 416)) |
                (1 << (PostgresParser.STRING_TO_ARRAY - 416)) |
                (1 << (PostgresParser.STRING_TO_TABLE - 416)) |
                (1 << (PostgresParser.TO_ASCII - 416)) |
                (1 << (PostgresParser.TO_HEX - 416)) |
                (1 << (PostgresParser.TRANSLATE - 416)) |
                (1 << (PostgresParser.UNISTR - 416)) |
                (1 << (PostgresParser.BIT_LENGTH - 416)) |
                (1 << (PostgresParser.CHAR_LENGTH - 416)) |
                (1 << (PostgresParser.CHARACTER_LENGTH - 416)) |
                (1 << (PostgresParser.NORMALIZE - 416)) |
                (1 << (PostgresParser.OCTET_LENGTH - 416)) |
                (1 << (PostgresParser.OVERLAY - 416)) |
                (1 << (PostgresParser.POSITION - 416)))) !==
              0) ||
          (((_la - 448) & ~0x1f) === 0 &&
            ((1 << (_la - 448)) &
              ((1 << (PostgresParser.SUBSTRING - 448)) |
                (1 << (PostgresParser.TRIM - 448)) |
                (1 << (PostgresParser.ACOS - 448)) |
                (1 << (PostgresParser.ACOSD - 448)) |
                (1 << (PostgresParser.ASIN - 448)) |
                (1 << (PostgresParser.ASIND - 448)) |
                (1 << (PostgresParser.ATAN - 448)) |
                (1 << (PostgresParser.ATAND - 448)) |
                (1 << (PostgresParser.ATAN2 - 448)) |
                (1 << (PostgresParser.ATAN2D - 448)) |
                (1 << (PostgresParser.COS - 448)) |
                (1 << (PostgresParser.COSD - 448)) |
                (1 << (PostgresParser.COT - 448)) |
                (1 << (PostgresParser.COTD - 448)) |
                (1 << (PostgresParser.SIN - 448)) |
                (1 << (PostgresParser.SIND - 448)) |
                (1 << (PostgresParser.TAN - 448)) |
                (1 << (PostgresParser.TAND - 448)) |
                (1 << (PostgresParser.GEN_RANDOM_UUID - 448)) |
                (1 << (PostgresParser.ROW_NUMBER - 448)) |
                (1 << (PostgresParser.RANK - 448)) |
                (1 << (PostgresParser.DENSE_RANK - 448)) |
                (1 << (PostgresParser.PERCENT_RANK - 448)) |
                (1 << (PostgresParser.CUME_DIST - 448)) |
                (1 << (PostgresParser.NTILE - 448)) |
                (1 << (PostgresParser.LAG - 448)) |
                (1 << (PostgresParser.LEAD - 448)) |
                (1 << (PostgresParser.FIRST_VALUE - 448)) |
                (1 << (PostgresParser.LAST_VALUE - 448)) |
                (1 << (PostgresParser.NTH_VALUE - 448)) |
                (1 << (PostgresParser.XMLCOMMENT - 448)) |
                (1 << (PostgresParser.XMLCONCAT - 448)))) !==
              0) ||
          (((_la - 480) & ~0x1f) === 0 &&
            ((1 << (_la - 480)) &
              ((1 << (PostgresParser.XMLELEMENT - 480)) |
                (1 << (PostgresParser.XMLFOREST - 480)) |
                (1 << (PostgresParser.XMLPI - 480)) |
                (1 << (PostgresParser.XMLROOT - 480)) |
                (1 << (PostgresParser.XMLEXISTS - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 480)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 480)) |
                (1 << (PostgresParser.XPATH - 480)) |
                (1 << (PostgresParser.XPATH_EXISTS - 480)) |
                (1 << (PostgresParser.XMLTABLE - 480)) |
                (1 << (PostgresParser.TABLE_TO_XML - 480)) |
                (1 << (PostgresParser.LEFT_PAREN - 480)) |
                (1 << (PostgresParser.PLUS - 480)) |
                (1 << (PostgresParser.MINUS - 480)) |
                (1 << (PostgresParser.MULTIPLY - 480)))) !==
              0) ||
          (((_la - 513) & ~0x1f) === 0 &&
            ((1 << (_la - 513)) &
              ((1 << (PostgresParser.LEFT_BRACKET - 513)) |
                (1 << (PostgresParser.LESS_LESS - 513)) |
                (1 << (PostgresParser.GREATER_GREATER - 513)) |
                (1 << (PostgresParser.HASH_SIGN - 513)) |
                (1 << (PostgresParser.OP_CHARS - 513)) |
                (1 << (PostgresParser.NUMBER_LITERAL - 513)) |
                (1 << (PostgresParser.REAL_NUMBER - 513)) |
                (1 << (PostgresParser.DOLLAR_NUMBER - 513)) |
                (1 << (PostgresParser.Identifier - 513)) |
                (1 << (PostgresParser.QuotedIdentifier - 513)) |
                (1 << (PostgresParser.Character_String_Literal - 513)) |
                (1 << (PostgresParser.BeginDollarStringConstant - 513)))) !==
              0)
        ) {
          {
            this.state = 853;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.RECURSIVE:
              case PostgresParser.BY:
              case PostgresParser.ALL:
              case PostgresParser.ANY:
              case PostgresParser.SOME:
              case PostgresParser.OPERATOR:
              case PostgresParser.NULLS:
              case PostgresParser.FIRST:
              case PostgresParser.LAST:
              case PostgresParser.LEFT:
              case PostgresParser.RIGHT:
              case PostgresParser.FULL:
              case PostgresParser.INNER:
              case PostgresParser.OUTER:
              case PostgresParser.CROSS:
              case PostgresParser.JOIN:
              case PostgresParser.ON:
              case PostgresParser.VALUES:
              case PostgresParser.NATURAL:
              case PostgresParser.TABLESAMPLE:
              case PostgresParser.INTERVAL:
              case PostgresParser.SECOND:
              case PostgresParser.MINUTE:
              case PostgresParser.HOUR:
              case PostgresParser.DAY:
              case PostgresParser.MONTH:
              case PostgresParser.YEAR:
              case PostgresParser.TREAT:
              case PostgresParser.CASE:
              case PostgresParser.NOT:
              case PostgresParser.IS:
              case PostgresParser.NULL:
              case PostgresParser.ISNULL:
              case PostgresParser.NOTNULL:
              case PostgresParser.TRUE:
              case PostgresParser.FALSE:
              case PostgresParser.BETWEEN:
              case PostgresParser.LIKE:
              case PostgresParser.ILIKE:
              case PostgresParser.ARRAY:
              case PostgresParser.BOOLEAN:
              case PostgresParser.SMALLINT:
              case PostgresParser.INT:
              case PostgresParser.INTEGER:
              case PostgresParser.BIGINT:
              case PostgresParser.DEC:
              case PostgresParser.DECIMAL:
              case PostgresParser.DOUBLE:
              case PostgresParser.FLOAT:
              case PostgresParser.NUMERIC:
              case PostgresParser.PRECISION:
              case PostgresParser.REAL:
              case PostgresParser.BIT:
              case PostgresParser.VARYING:
              case PostgresParser.NATIONAL:
              case PostgresParser.CHARACTER:
              case PostgresParser.CHAR:
              case PostgresParser.NCHAR:
              case PostgresParser.TIME:
              case PostgresParser.WITHOUT:
              case PostgresParser.WITHIN:
              case PostgresParser.ZONE:
              case PostgresParser.TIMESTAMP:
              case PostgresParser.VARCHAR:
              case PostgresParser.SETOF:
              case PostgresParser.OF:
              case PostgresParser.OVER:
              case PostgresParser.PARTITION:
              case PostgresParser.ROWS:
              case PostgresParser.RANGE:
              case PostgresParser.GROUPS:
              case PostgresParser.UNBOUNDED:
              case PostgresParser.PRECEDING:
              case PostgresParser.FOLLOWING:
              case PostgresParser.CURRENT:
              case PostgresParser.ROW:
              case PostgresParser.EXCLUDE:
              case PostgresParser.TIES:
              case PostgresParser.NO:
              case PostgresParser.OTHERS:
              case PostgresParser.ROLLUP:
              case PostgresParser.GROUPING:
              case PostgresParser.SETS:
              case PostgresParser.OVERLAPS:
              case PostgresParser.AT:
              case PostgresParser.SIMILAR:
              case PostgresParser.ESCAPE:
              case PostgresParser.NEXT:
              case PostgresParser.DOCUMENT:
              case PostgresParser.UNKNOWN:
              case PostgresParser.EXISTS:
              case PostgresParser.FILTER:
              case PostgresParser.ALIAS:
              case PostgresParser.PATH:
              case PostgresParser.POW:
              case PostgresParser.DATE:
              case PostgresParser.ARRAY_AGG:
              case PostgresParser.AVG:
              case PostgresParser.BIT_AND:
              case PostgresParser.BIT_OR:
              case PostgresParser.BIT_XOR:
              case PostgresParser.BOOL_AND:
              case PostgresParser.BOOL_OR:
              case PostgresParser.COUNT:
              case PostgresParser.EVERY:
              case PostgresParser.JSON_AGG:
              case PostgresParser.JSON_OBJECT_AGG:
              case PostgresParser.MAX:
              case PostgresParser.MIN:
              case PostgresParser.RANGE_AGG:
              case PostgresParser.RANGE_INTERSECT_AGG:
              case PostgresParser.STRING_AGG:
              case PostgresParser.SUM:
              case PostgresParser.XMLAGG:
              case PostgresParser.ARRAY_APPEND:
              case PostgresParser.ARRAY_CAT:
              case PostgresParser.ARRAY_DIMS:
              case PostgresParser.ARRAY_FILL:
              case PostgresParser.ARRAY_LENGTH:
              case PostgresParser.ARRAY_LOWER:
              case PostgresParser.ARRAY_NDIMS:
              case PostgresParser.ARRAY_POSITION:
              case PostgresParser.ARRAY_PREPEND:
              case PostgresParser.ARRAY_REMOVE:
              case PostgresParser.ARRAY_REPLACE:
              case PostgresParser.ARRAY_TO_STRING:
              case PostgresParser.ARRAY_UPPER:
              case PostgresParser.CARDINALITY:
              case PostgresParser.TRIM_ARRAY:
              case PostgresParser.UNNEST:
              case PostgresParser.CONVERT:
              case PostgresParser.CONVERT_FROM:
              case PostgresParser.CONVERT_TO:
              case PostgresParser.ENCODE:
              case PostgresParser.DECODE:
              case PostgresParser.BIT_COUNT:
              case PostgresParser.BTRIM:
              case PostgresParser.GET_BIT:
              case PostgresParser.GET_BYTE:
              case PostgresParser.LENGTH:
              case PostgresParser.LTRIM:
              case PostgresParser.MD5:
              case PostgresParser.RTRIM:
              case PostgresParser.SET_BIT:
              case PostgresParser.SET_BYTE:
              case PostgresParser.SHA224:
              case PostgresParser.SHA256:
              case PostgresParser.SHA384:
              case PostgresParser.SHA512:
              case PostgresParser.SUBSTR:
              case PostgresParser.NUM_NONNULLS:
              case PostgresParser.NUM_NULLS:
              case PostgresParser.COALESCE:
              case PostgresParser.NULLIF:
              case PostgresParser.GREATEST:
              case PostgresParser.LEAST:
              case PostgresParser.AGE:
              case PostgresParser.CLOCK_TIMESTAMP:
              case PostgresParser.CURRENT_DATE:
              case PostgresParser.CURRENT_TIME:
              case PostgresParser.CURRENT_TIMESTAMP:
              case PostgresParser.DATE_BIN:
              case PostgresParser.DATE_PART:
              case PostgresParser.DATE_TRUNC:
              case PostgresParser.EXTRACT:
              case PostgresParser.ISFINITE:
              case PostgresParser.JUSTIFY_DAYS:
              case PostgresParser.JUSTIFY_HOURS:
              case PostgresParser.JUSTIFY_INTERVAL:
              case PostgresParser.LOCALTIME:
              case PostgresParser.LOCALTIMESTAMP:
              case PostgresParser.MAKE_DATE:
              case PostgresParser.MAKE_INTERVAL:
              case PostgresParser.MAKE_TIME:
              case PostgresParser.MAKE_TIMESTAMP:
              case PostgresParser.MAKE_TIMESTAMPTZ:
              case PostgresParser.NOW:
              case PostgresParser.STATEMENT_TIMESTAMP:
              case PostgresParser.TIMEOFDAY:
              case PostgresParser.TRANSACTION_TIMESTAMP:
              case PostgresParser.ENUM_FIRST:
              case PostgresParser.ENUM_LAST:
              case PostgresParser.ENUM_RANGE:
              case PostgresParser.TO_CHAR:
              case PostgresParser.TO_DATE:
              case PostgresParser.TO_NUMBER:
              case PostgresParser.TO_TIMESTAMP:
              case PostgresParser.BOX:
              case PostgresParser.CIRCLE:
              case PostgresParser.LINE:
              case PostgresParser.LSEG:
              case PostgresParser.POINT:
              case PostgresParser.POLYGON:
              case PostgresParser.AREA:
              case PostgresParser.CENTER:
              case PostgresParser.DIAGONAL:
              case PostgresParser.DIAMETER:
              case PostgresParser.HEIGHT:
              case PostgresParser.ISCLOSED:
              case PostgresParser.ISOPEN:
              case PostgresParser.NPOINTS:
              case PostgresParser.PCLOSE:
              case PostgresParser.POPEN:
              case PostgresParser.RADIUS:
              case PostgresParser.SLOPE:
              case PostgresParser.WIDTH:
              case PostgresParser.SINH:
              case PostgresParser.COSH:
              case PostgresParser.TANH:
              case PostgresParser.ASINH:
              case PostgresParser.ACOSH:
              case PostgresParser.ATANH:
              case PostgresParser.ABBREV:
              case PostgresParser.BROADCAST:
              case PostgresParser.FAMILY:
              case PostgresParser.HOST:
              case PostgresParser.HOSTMASK:
              case PostgresParser.INET_MERGE:
              case PostgresParser.INET_SAME_FAMILY:
              case PostgresParser.MASKLEN:
              case PostgresParser.NETMASK:
              case PostgresParser.NETWORK:
              case PostgresParser.SET_MASKLEN:
              case PostgresParser.TEXT:
              case PostgresParser.TRUNC:
              case PostgresParser.MACADDR8_SET7BIT:
              case PostgresParser.JSON_ARRAY_ELEMENTS:
              case PostgresParser.JSONB_ARRAY_ELEMENTS:
              case PostgresParser.JSON_ARRAY_ELEMENTS_TEXT:
              case PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT:
              case PostgresParser.JSON_ARRAY_LENGTH:
              case PostgresParser.JSONB_ARRAY_LENGTH:
              case PostgresParser.JSON_EACH:
              case PostgresParser.JSONB_EACH:
              case PostgresParser.JSON_EACH_TEXT:
              case PostgresParser.JSONB_EACH_TEXT:
              case PostgresParser.JSON_EXTRACT_PATH:
              case PostgresParser.JSONB_EXTRACT_PATH:
              case PostgresParser.JSON_EXTRACT_PATH_TEXT:
              case PostgresParser.JSONB_EXTRACT_PATH_TEXT:
              case PostgresParser.JSON_OBJECT_KEYS:
              case PostgresParser.JSONB_OBJECT_KEYS:
              case PostgresParser.JSON_POPULATE_RECORD:
              case PostgresParser.JSONB_POPULATE_RECORD:
              case PostgresParser.JSON_POPULATE_RECORDSET:
              case PostgresParser.JSONB_POPULATE_RECORDSET:
              case PostgresParser.JSON_TO_RECORD:
              case PostgresParser.JSONB_TO_RECORD:
              case PostgresParser.JSON_TO_RECORDSET:
              case PostgresParser.JSONB_TO_RECORDSET:
              case PostgresParser.JSON_STRIP_NULLS:
              case PostgresParser.JSONB_STRIP_NULLS:
              case PostgresParser.JSONB_SET:
              case PostgresParser.JSONB_SET_LAX:
              case PostgresParser.JSONB_INSERT:
              case PostgresParser.JSONB_PATH_EXISTS:
              case PostgresParser.JSONB_PATH_MATCH:
              case PostgresParser.JSONB_PATH_QUERY:
              case PostgresParser.JSONB_PATH_QUERY_ARRAY:
              case PostgresParser.JSONB_PATH_QUERY_FIRST:
              case PostgresParser.JSONB_PATH_EXISTS_TZ:
              case PostgresParser.JSONB_PATH_MATCH_TZ:
              case PostgresParser.JSONB_PATH_QUERY_TZ:
              case PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ:
              case PostgresParser.JSONB_PATH_QUERY_FIRST_TZ:
              case PostgresParser.JSONB_PRETTY:
              case PostgresParser.JSON_TYPEOF:
              case PostgresParser.JSONB_TYPEOF:
              case PostgresParser.TO_JSON:
              case PostgresParser.TO_JSONB:
              case PostgresParser.ARRAY_TO_JSON:
              case PostgresParser.ROW_TO_JSON:
              case PostgresParser.JSON_BUILD_ARRAY:
              case PostgresParser.JSONB_BUILD_ARRAY:
              case PostgresParser.JSON_BUILD_OBJECT:
              case PostgresParser.JSON_OBJECT:
              case PostgresParser.JSONB_OBJECT:
              case PostgresParser.ABS:
              case PostgresParser.CBRT:
              case PostgresParser.CEIL:
              case PostgresParser.DEGREES:
              case PostgresParser.DIV:
              case PostgresParser.EXP:
              case PostgresParser.FACTORIAL:
              case PostgresParser.FLOOR:
              case PostgresParser.GCD:
              case PostgresParser.LCM:
              case PostgresParser.LN:
              case PostgresParser.LOG:
              case PostgresParser.LOG10:
              case PostgresParser.MIN_SCALE:
              case PostgresParser.MOD:
              case PostgresParser.PI:
              case PostgresParser.POWER:
              case PostgresParser.RADIANS:
              case PostgresParser.ROUND:
              case PostgresParser.SCALE:
              case PostgresParser.SIGN:
              case PostgresParser.SQRT:
              case PostgresParser.TRIM_SCALE:
              case PostgresParser.WIDTH_BUCKET:
              case PostgresParser.MODE:
              case PostgresParser.PERCENTILE_CONT:
              case PostgresParser.PERCENTILE_DISC:
              case PostgresParser.RANDOM:
              case PostgresParser.SETSEED:
              case PostgresParser.LOWER:
              case PostgresParser.UPPER:
              case PostgresParser.ISEMPTY:
              case PostgresParser.LOWER_INC:
              case PostgresParser.UPPER_INC:
              case PostgresParser.LOWER_INF:
              case PostgresParser.UPPER_INF:
              case PostgresParser.RANGE_MERGE:
              case PostgresParser.MULTIRANGE:
              case PostgresParser.TS_DEBUG:
              case PostgresParser.TS_LEXIZE:
              case PostgresParser.TS_PARSE:
              case PostgresParser.TS_TOKEN_TYPE:
              case PostgresParser.ARRAY_TO_TSVECTOR:
              case PostgresParser.GET_CURRENT_TS_CONFIG:
              case PostgresParser.NUMNODE:
              case PostgresParser.PLAINTO_TSQUERY:
              case PostgresParser.PHRASETO_TSQUERY:
              case PostgresParser.WEBSEARCH_TO_TSQUERY:
              case PostgresParser.QUERYTREE:
              case PostgresParser.SETWEIGHT:
              case PostgresParser.STRIP:
              case PostgresParser.TO_TSQUERY:
              case PostgresParser.TO_TSVECTOR:
              case PostgresParser.JSON_TO_TSVECTOR:
              case PostgresParser.TS_DELETE:
              case PostgresParser.TS_FILTER:
              case PostgresParser.TS_HEADLINE:
              case PostgresParser.TS_RANK:
              case PostgresParser.TS_RANK_CD:
              case PostgresParser.TS_REWRITE:
              case PostgresParser.TSQUERY_PHRASE:
              case PostgresParser.TSVECTOR_TO_ARRAY:
              case PostgresParser.GENERATE_SERIES:
              case PostgresParser.GENERATE_SUBSCRIPTS:
              case PostgresParser.CORR:
              case PostgresParser.COVAR_POP:
              case PostgresParser.COVAR_SAMP:
              case PostgresParser.REGR_AVGX:
              case PostgresParser.REGR_AVGY:
              case PostgresParser.REGR_COUNT:
              case PostgresParser.REGR_INTERCEPT:
              case PostgresParser.REGR_R2:
              case PostgresParser.REGR_SLOPE:
              case PostgresParser.REGR_SXX:
              case PostgresParser.REGR_SXY:
              case PostgresParser.REGR_SYY:
              case PostgresParser.STDDEV:
              case PostgresParser.STDDEV_POP:
              case PostgresParser.STDDEV_SAMP:
              case PostgresParser.VARIANCE:
              case PostgresParser.VAR_POP:
              case PostgresParser.VAR_SAMP:
              case PostgresParser.ASCII:
              case PostgresParser.CHR:
              case PostgresParser.CONCAT:
              case PostgresParser.CONCAT_WS:
              case PostgresParser.FORMAT:
              case PostgresParser.INITCAP:
              case PostgresParser.LPAD:
              case PostgresParser.PARSE_IDENT:
              case PostgresParser.QUOTE_IDENT:
              case PostgresParser.QUOTE_LITERAL:
              case PostgresParser.QUOTE_NULLABLE:
              case PostgresParser.REGEXP_MATCH:
              case PostgresParser.REGEXP_MATCHES:
              case PostgresParser.REGEXP_REPLACE:
              case PostgresParser.REGEXP_SPLIT_TO_ARRAY:
              case PostgresParser.REGEXP_SPLIT_TO_TABLE:
              case PostgresParser.REPEAT:
              case PostgresParser.REPLACE:
              case PostgresParser.REVERSE:
              case PostgresParser.RPAD:
              case PostgresParser.SPLIT_PART:
              case PostgresParser.STRPOS:
              case PostgresParser.STARTS_WITH:
              case PostgresParser.STRING_TO_ARRAY:
              case PostgresParser.STRING_TO_TABLE:
              case PostgresParser.TO_ASCII:
              case PostgresParser.TO_HEX:
              case PostgresParser.TRANSLATE:
              case PostgresParser.UNISTR:
              case PostgresParser.BIT_LENGTH:
              case PostgresParser.CHAR_LENGTH:
              case PostgresParser.CHARACTER_LENGTH:
              case PostgresParser.NORMALIZE:
              case PostgresParser.OCTET_LENGTH:
              case PostgresParser.OVERLAY:
              case PostgresParser.POSITION:
              case PostgresParser.SUBSTRING:
              case PostgresParser.TRIM:
              case PostgresParser.ACOS:
              case PostgresParser.ACOSD:
              case PostgresParser.ASIN:
              case PostgresParser.ASIND:
              case PostgresParser.ATAN:
              case PostgresParser.ATAND:
              case PostgresParser.ATAN2:
              case PostgresParser.ATAN2D:
              case PostgresParser.COS:
              case PostgresParser.COSD:
              case PostgresParser.COT:
              case PostgresParser.COTD:
              case PostgresParser.SIN:
              case PostgresParser.SIND:
              case PostgresParser.TAN:
              case PostgresParser.TAND:
              case PostgresParser.GEN_RANDOM_UUID:
              case PostgresParser.ROW_NUMBER:
              case PostgresParser.RANK:
              case PostgresParser.DENSE_RANK:
              case PostgresParser.PERCENT_RANK:
              case PostgresParser.CUME_DIST:
              case PostgresParser.NTILE:
              case PostgresParser.LAG:
              case PostgresParser.LEAD:
              case PostgresParser.FIRST_VALUE:
              case PostgresParser.LAST_VALUE:
              case PostgresParser.NTH_VALUE:
              case PostgresParser.XMLCOMMENT:
              case PostgresParser.XMLCONCAT:
              case PostgresParser.XMLELEMENT:
              case PostgresParser.XMLFOREST:
              case PostgresParser.XMLPI:
              case PostgresParser.XMLROOT:
              case PostgresParser.XMLEXISTS:
              case PostgresParser.XML_IS_WELL_FORMED:
              case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
              case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
              case PostgresParser.XPATH:
              case PostgresParser.XPATH_EXISTS:
              case PostgresParser.XMLTABLE:
              case PostgresParser.TABLE_TO_XML:
              case PostgresParser.LEFT_PAREN:
              case PostgresParser.PLUS:
              case PostgresParser.MINUS:
              case PostgresParser.MULTIPLY:
              case PostgresParser.LESS_LESS:
              case PostgresParser.GREATER_GREATER:
              case PostgresParser.HASH_SIGN:
              case PostgresParser.OP_CHARS:
              case PostgresParser.NUMBER_LITERAL:
              case PostgresParser.REAL_NUMBER:
              case PostgresParser.DOLLAR_NUMBER:
              case PostgresParser.Identifier:
              case PostgresParser.QuotedIdentifier:
              case PostgresParser.Character_String_Literal:
              case PostgresParser.BeginDollarStringConstant:
                {
                  this.state = 851;
                  this.vex(0);
                }
                break;
              case PostgresParser.LEFT_BRACKET:
                {
                  this.state = 852;
                  this.array_elements();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 862;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 855;
                  this.match(PostgresParser.COMMA);
                  this.state = 858;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case PostgresParser.RECURSIVE:
                    case PostgresParser.BY:
                    case PostgresParser.ALL:
                    case PostgresParser.ANY:
                    case PostgresParser.SOME:
                    case PostgresParser.OPERATOR:
                    case PostgresParser.NULLS:
                    case PostgresParser.FIRST:
                    case PostgresParser.LAST:
                    case PostgresParser.LEFT:
                    case PostgresParser.RIGHT:
                    case PostgresParser.FULL:
                    case PostgresParser.INNER:
                    case PostgresParser.OUTER:
                    case PostgresParser.CROSS:
                    case PostgresParser.JOIN:
                    case PostgresParser.ON:
                    case PostgresParser.VALUES:
                    case PostgresParser.NATURAL:
                    case PostgresParser.TABLESAMPLE:
                    case PostgresParser.INTERVAL:
                    case PostgresParser.SECOND:
                    case PostgresParser.MINUTE:
                    case PostgresParser.HOUR:
                    case PostgresParser.DAY:
                    case PostgresParser.MONTH:
                    case PostgresParser.YEAR:
                    case PostgresParser.TREAT:
                    case PostgresParser.CASE:
                    case PostgresParser.NOT:
                    case PostgresParser.IS:
                    case PostgresParser.NULL:
                    case PostgresParser.ISNULL:
                    case PostgresParser.NOTNULL:
                    case PostgresParser.TRUE:
                    case PostgresParser.FALSE:
                    case PostgresParser.BETWEEN:
                    case PostgresParser.LIKE:
                    case PostgresParser.ILIKE:
                    case PostgresParser.ARRAY:
                    case PostgresParser.BOOLEAN:
                    case PostgresParser.SMALLINT:
                    case PostgresParser.INT:
                    case PostgresParser.INTEGER:
                    case PostgresParser.BIGINT:
                    case PostgresParser.DEC:
                    case PostgresParser.DECIMAL:
                    case PostgresParser.DOUBLE:
                    case PostgresParser.FLOAT:
                    case PostgresParser.NUMERIC:
                    case PostgresParser.PRECISION:
                    case PostgresParser.REAL:
                    case PostgresParser.BIT:
                    case PostgresParser.VARYING:
                    case PostgresParser.NATIONAL:
                    case PostgresParser.CHARACTER:
                    case PostgresParser.CHAR:
                    case PostgresParser.NCHAR:
                    case PostgresParser.TIME:
                    case PostgresParser.WITHOUT:
                    case PostgresParser.WITHIN:
                    case PostgresParser.ZONE:
                    case PostgresParser.TIMESTAMP:
                    case PostgresParser.VARCHAR:
                    case PostgresParser.SETOF:
                    case PostgresParser.OF:
                    case PostgresParser.OVER:
                    case PostgresParser.PARTITION:
                    case PostgresParser.ROWS:
                    case PostgresParser.RANGE:
                    case PostgresParser.GROUPS:
                    case PostgresParser.UNBOUNDED:
                    case PostgresParser.PRECEDING:
                    case PostgresParser.FOLLOWING:
                    case PostgresParser.CURRENT:
                    case PostgresParser.ROW:
                    case PostgresParser.EXCLUDE:
                    case PostgresParser.TIES:
                    case PostgresParser.NO:
                    case PostgresParser.OTHERS:
                    case PostgresParser.ROLLUP:
                    case PostgresParser.GROUPING:
                    case PostgresParser.SETS:
                    case PostgresParser.OVERLAPS:
                    case PostgresParser.AT:
                    case PostgresParser.SIMILAR:
                    case PostgresParser.ESCAPE:
                    case PostgresParser.NEXT:
                    case PostgresParser.DOCUMENT:
                    case PostgresParser.UNKNOWN:
                    case PostgresParser.EXISTS:
                    case PostgresParser.FILTER:
                    case PostgresParser.ALIAS:
                    case PostgresParser.PATH:
                    case PostgresParser.POW:
                    case PostgresParser.DATE:
                    case PostgresParser.ARRAY_AGG:
                    case PostgresParser.AVG:
                    case PostgresParser.BIT_AND:
                    case PostgresParser.BIT_OR:
                    case PostgresParser.BIT_XOR:
                    case PostgresParser.BOOL_AND:
                    case PostgresParser.BOOL_OR:
                    case PostgresParser.COUNT:
                    case PostgresParser.EVERY:
                    case PostgresParser.JSON_AGG:
                    case PostgresParser.JSON_OBJECT_AGG:
                    case PostgresParser.MAX:
                    case PostgresParser.MIN:
                    case PostgresParser.RANGE_AGG:
                    case PostgresParser.RANGE_INTERSECT_AGG:
                    case PostgresParser.STRING_AGG:
                    case PostgresParser.SUM:
                    case PostgresParser.XMLAGG:
                    case PostgresParser.ARRAY_APPEND:
                    case PostgresParser.ARRAY_CAT:
                    case PostgresParser.ARRAY_DIMS:
                    case PostgresParser.ARRAY_FILL:
                    case PostgresParser.ARRAY_LENGTH:
                    case PostgresParser.ARRAY_LOWER:
                    case PostgresParser.ARRAY_NDIMS:
                    case PostgresParser.ARRAY_POSITION:
                    case PostgresParser.ARRAY_PREPEND:
                    case PostgresParser.ARRAY_REMOVE:
                    case PostgresParser.ARRAY_REPLACE:
                    case PostgresParser.ARRAY_TO_STRING:
                    case PostgresParser.ARRAY_UPPER:
                    case PostgresParser.CARDINALITY:
                    case PostgresParser.TRIM_ARRAY:
                    case PostgresParser.UNNEST:
                    case PostgresParser.CONVERT:
                    case PostgresParser.CONVERT_FROM:
                    case PostgresParser.CONVERT_TO:
                    case PostgresParser.ENCODE:
                    case PostgresParser.DECODE:
                    case PostgresParser.BIT_COUNT:
                    case PostgresParser.BTRIM:
                    case PostgresParser.GET_BIT:
                    case PostgresParser.GET_BYTE:
                    case PostgresParser.LENGTH:
                    case PostgresParser.LTRIM:
                    case PostgresParser.MD5:
                    case PostgresParser.RTRIM:
                    case PostgresParser.SET_BIT:
                    case PostgresParser.SET_BYTE:
                    case PostgresParser.SHA224:
                    case PostgresParser.SHA256:
                    case PostgresParser.SHA384:
                    case PostgresParser.SHA512:
                    case PostgresParser.SUBSTR:
                    case PostgresParser.NUM_NONNULLS:
                    case PostgresParser.NUM_NULLS:
                    case PostgresParser.COALESCE:
                    case PostgresParser.NULLIF:
                    case PostgresParser.GREATEST:
                    case PostgresParser.LEAST:
                    case PostgresParser.AGE:
                    case PostgresParser.CLOCK_TIMESTAMP:
                    case PostgresParser.CURRENT_DATE:
                    case PostgresParser.CURRENT_TIME:
                    case PostgresParser.CURRENT_TIMESTAMP:
                    case PostgresParser.DATE_BIN:
                    case PostgresParser.DATE_PART:
                    case PostgresParser.DATE_TRUNC:
                    case PostgresParser.EXTRACT:
                    case PostgresParser.ISFINITE:
                    case PostgresParser.JUSTIFY_DAYS:
                    case PostgresParser.JUSTIFY_HOURS:
                    case PostgresParser.JUSTIFY_INTERVAL:
                    case PostgresParser.LOCALTIME:
                    case PostgresParser.LOCALTIMESTAMP:
                    case PostgresParser.MAKE_DATE:
                    case PostgresParser.MAKE_INTERVAL:
                    case PostgresParser.MAKE_TIME:
                    case PostgresParser.MAKE_TIMESTAMP:
                    case PostgresParser.MAKE_TIMESTAMPTZ:
                    case PostgresParser.NOW:
                    case PostgresParser.STATEMENT_TIMESTAMP:
                    case PostgresParser.TIMEOFDAY:
                    case PostgresParser.TRANSACTION_TIMESTAMP:
                    case PostgresParser.ENUM_FIRST:
                    case PostgresParser.ENUM_LAST:
                    case PostgresParser.ENUM_RANGE:
                    case PostgresParser.TO_CHAR:
                    case PostgresParser.TO_DATE:
                    case PostgresParser.TO_NUMBER:
                    case PostgresParser.TO_TIMESTAMP:
                    case PostgresParser.BOX:
                    case PostgresParser.CIRCLE:
                    case PostgresParser.LINE:
                    case PostgresParser.LSEG:
                    case PostgresParser.POINT:
                    case PostgresParser.POLYGON:
                    case PostgresParser.AREA:
                    case PostgresParser.CENTER:
                    case PostgresParser.DIAGONAL:
                    case PostgresParser.DIAMETER:
                    case PostgresParser.HEIGHT:
                    case PostgresParser.ISCLOSED:
                    case PostgresParser.ISOPEN:
                    case PostgresParser.NPOINTS:
                    case PostgresParser.PCLOSE:
                    case PostgresParser.POPEN:
                    case PostgresParser.RADIUS:
                    case PostgresParser.SLOPE:
                    case PostgresParser.WIDTH:
                    case PostgresParser.SINH:
                    case PostgresParser.COSH:
                    case PostgresParser.TANH:
                    case PostgresParser.ASINH:
                    case PostgresParser.ACOSH:
                    case PostgresParser.ATANH:
                    case PostgresParser.ABBREV:
                    case PostgresParser.BROADCAST:
                    case PostgresParser.FAMILY:
                    case PostgresParser.HOST:
                    case PostgresParser.HOSTMASK:
                    case PostgresParser.INET_MERGE:
                    case PostgresParser.INET_SAME_FAMILY:
                    case PostgresParser.MASKLEN:
                    case PostgresParser.NETMASK:
                    case PostgresParser.NETWORK:
                    case PostgresParser.SET_MASKLEN:
                    case PostgresParser.TEXT:
                    case PostgresParser.TRUNC:
                    case PostgresParser.MACADDR8_SET7BIT:
                    case PostgresParser.JSON_ARRAY_ELEMENTS:
                    case PostgresParser.JSONB_ARRAY_ELEMENTS:
                    case PostgresParser.JSON_ARRAY_ELEMENTS_TEXT:
                    case PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT:
                    case PostgresParser.JSON_ARRAY_LENGTH:
                    case PostgresParser.JSONB_ARRAY_LENGTH:
                    case PostgresParser.JSON_EACH:
                    case PostgresParser.JSONB_EACH:
                    case PostgresParser.JSON_EACH_TEXT:
                    case PostgresParser.JSONB_EACH_TEXT:
                    case PostgresParser.JSON_EXTRACT_PATH:
                    case PostgresParser.JSONB_EXTRACT_PATH:
                    case PostgresParser.JSON_EXTRACT_PATH_TEXT:
                    case PostgresParser.JSONB_EXTRACT_PATH_TEXT:
                    case PostgresParser.JSON_OBJECT_KEYS:
                    case PostgresParser.JSONB_OBJECT_KEYS:
                    case PostgresParser.JSON_POPULATE_RECORD:
                    case PostgresParser.JSONB_POPULATE_RECORD:
                    case PostgresParser.JSON_POPULATE_RECORDSET:
                    case PostgresParser.JSONB_POPULATE_RECORDSET:
                    case PostgresParser.JSON_TO_RECORD:
                    case PostgresParser.JSONB_TO_RECORD:
                    case PostgresParser.JSON_TO_RECORDSET:
                    case PostgresParser.JSONB_TO_RECORDSET:
                    case PostgresParser.JSON_STRIP_NULLS:
                    case PostgresParser.JSONB_STRIP_NULLS:
                    case PostgresParser.JSONB_SET:
                    case PostgresParser.JSONB_SET_LAX:
                    case PostgresParser.JSONB_INSERT:
                    case PostgresParser.JSONB_PATH_EXISTS:
                    case PostgresParser.JSONB_PATH_MATCH:
                    case PostgresParser.JSONB_PATH_QUERY:
                    case PostgresParser.JSONB_PATH_QUERY_ARRAY:
                    case PostgresParser.JSONB_PATH_QUERY_FIRST:
                    case PostgresParser.JSONB_PATH_EXISTS_TZ:
                    case PostgresParser.JSONB_PATH_MATCH_TZ:
                    case PostgresParser.JSONB_PATH_QUERY_TZ:
                    case PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ:
                    case PostgresParser.JSONB_PATH_QUERY_FIRST_TZ:
                    case PostgresParser.JSONB_PRETTY:
                    case PostgresParser.JSON_TYPEOF:
                    case PostgresParser.JSONB_TYPEOF:
                    case PostgresParser.TO_JSON:
                    case PostgresParser.TO_JSONB:
                    case PostgresParser.ARRAY_TO_JSON:
                    case PostgresParser.ROW_TO_JSON:
                    case PostgresParser.JSON_BUILD_ARRAY:
                    case PostgresParser.JSONB_BUILD_ARRAY:
                    case PostgresParser.JSON_BUILD_OBJECT:
                    case PostgresParser.JSON_OBJECT:
                    case PostgresParser.JSONB_OBJECT:
                    case PostgresParser.ABS:
                    case PostgresParser.CBRT:
                    case PostgresParser.CEIL:
                    case PostgresParser.DEGREES:
                    case PostgresParser.DIV:
                    case PostgresParser.EXP:
                    case PostgresParser.FACTORIAL:
                    case PostgresParser.FLOOR:
                    case PostgresParser.GCD:
                    case PostgresParser.LCM:
                    case PostgresParser.LN:
                    case PostgresParser.LOG:
                    case PostgresParser.LOG10:
                    case PostgresParser.MIN_SCALE:
                    case PostgresParser.MOD:
                    case PostgresParser.PI:
                    case PostgresParser.POWER:
                    case PostgresParser.RADIANS:
                    case PostgresParser.ROUND:
                    case PostgresParser.SCALE:
                    case PostgresParser.SIGN:
                    case PostgresParser.SQRT:
                    case PostgresParser.TRIM_SCALE:
                    case PostgresParser.WIDTH_BUCKET:
                    case PostgresParser.MODE:
                    case PostgresParser.PERCENTILE_CONT:
                    case PostgresParser.PERCENTILE_DISC:
                    case PostgresParser.RANDOM:
                    case PostgresParser.SETSEED:
                    case PostgresParser.LOWER:
                    case PostgresParser.UPPER:
                    case PostgresParser.ISEMPTY:
                    case PostgresParser.LOWER_INC:
                    case PostgresParser.UPPER_INC:
                    case PostgresParser.LOWER_INF:
                    case PostgresParser.UPPER_INF:
                    case PostgresParser.RANGE_MERGE:
                    case PostgresParser.MULTIRANGE:
                    case PostgresParser.TS_DEBUG:
                    case PostgresParser.TS_LEXIZE:
                    case PostgresParser.TS_PARSE:
                    case PostgresParser.TS_TOKEN_TYPE:
                    case PostgresParser.ARRAY_TO_TSVECTOR:
                    case PostgresParser.GET_CURRENT_TS_CONFIG:
                    case PostgresParser.NUMNODE:
                    case PostgresParser.PLAINTO_TSQUERY:
                    case PostgresParser.PHRASETO_TSQUERY:
                    case PostgresParser.WEBSEARCH_TO_TSQUERY:
                    case PostgresParser.QUERYTREE:
                    case PostgresParser.SETWEIGHT:
                    case PostgresParser.STRIP:
                    case PostgresParser.TO_TSQUERY:
                    case PostgresParser.TO_TSVECTOR:
                    case PostgresParser.JSON_TO_TSVECTOR:
                    case PostgresParser.TS_DELETE:
                    case PostgresParser.TS_FILTER:
                    case PostgresParser.TS_HEADLINE:
                    case PostgresParser.TS_RANK:
                    case PostgresParser.TS_RANK_CD:
                    case PostgresParser.TS_REWRITE:
                    case PostgresParser.TSQUERY_PHRASE:
                    case PostgresParser.TSVECTOR_TO_ARRAY:
                    case PostgresParser.GENERATE_SERIES:
                    case PostgresParser.GENERATE_SUBSCRIPTS:
                    case PostgresParser.CORR:
                    case PostgresParser.COVAR_POP:
                    case PostgresParser.COVAR_SAMP:
                    case PostgresParser.REGR_AVGX:
                    case PostgresParser.REGR_AVGY:
                    case PostgresParser.REGR_COUNT:
                    case PostgresParser.REGR_INTERCEPT:
                    case PostgresParser.REGR_R2:
                    case PostgresParser.REGR_SLOPE:
                    case PostgresParser.REGR_SXX:
                    case PostgresParser.REGR_SXY:
                    case PostgresParser.REGR_SYY:
                    case PostgresParser.STDDEV:
                    case PostgresParser.STDDEV_POP:
                    case PostgresParser.STDDEV_SAMP:
                    case PostgresParser.VARIANCE:
                    case PostgresParser.VAR_POP:
                    case PostgresParser.VAR_SAMP:
                    case PostgresParser.ASCII:
                    case PostgresParser.CHR:
                    case PostgresParser.CONCAT:
                    case PostgresParser.CONCAT_WS:
                    case PostgresParser.FORMAT:
                    case PostgresParser.INITCAP:
                    case PostgresParser.LPAD:
                    case PostgresParser.PARSE_IDENT:
                    case PostgresParser.QUOTE_IDENT:
                    case PostgresParser.QUOTE_LITERAL:
                    case PostgresParser.QUOTE_NULLABLE:
                    case PostgresParser.REGEXP_MATCH:
                    case PostgresParser.REGEXP_MATCHES:
                    case PostgresParser.REGEXP_REPLACE:
                    case PostgresParser.REGEXP_SPLIT_TO_ARRAY:
                    case PostgresParser.REGEXP_SPLIT_TO_TABLE:
                    case PostgresParser.REPEAT:
                    case PostgresParser.REPLACE:
                    case PostgresParser.REVERSE:
                    case PostgresParser.RPAD:
                    case PostgresParser.SPLIT_PART:
                    case PostgresParser.STRPOS:
                    case PostgresParser.STARTS_WITH:
                    case PostgresParser.STRING_TO_ARRAY:
                    case PostgresParser.STRING_TO_TABLE:
                    case PostgresParser.TO_ASCII:
                    case PostgresParser.TO_HEX:
                    case PostgresParser.TRANSLATE:
                    case PostgresParser.UNISTR:
                    case PostgresParser.BIT_LENGTH:
                    case PostgresParser.CHAR_LENGTH:
                    case PostgresParser.CHARACTER_LENGTH:
                    case PostgresParser.NORMALIZE:
                    case PostgresParser.OCTET_LENGTH:
                    case PostgresParser.OVERLAY:
                    case PostgresParser.POSITION:
                    case PostgresParser.SUBSTRING:
                    case PostgresParser.TRIM:
                    case PostgresParser.ACOS:
                    case PostgresParser.ACOSD:
                    case PostgresParser.ASIN:
                    case PostgresParser.ASIND:
                    case PostgresParser.ATAN:
                    case PostgresParser.ATAND:
                    case PostgresParser.ATAN2:
                    case PostgresParser.ATAN2D:
                    case PostgresParser.COS:
                    case PostgresParser.COSD:
                    case PostgresParser.COT:
                    case PostgresParser.COTD:
                    case PostgresParser.SIN:
                    case PostgresParser.SIND:
                    case PostgresParser.TAN:
                    case PostgresParser.TAND:
                    case PostgresParser.GEN_RANDOM_UUID:
                    case PostgresParser.ROW_NUMBER:
                    case PostgresParser.RANK:
                    case PostgresParser.DENSE_RANK:
                    case PostgresParser.PERCENT_RANK:
                    case PostgresParser.CUME_DIST:
                    case PostgresParser.NTILE:
                    case PostgresParser.LAG:
                    case PostgresParser.LEAD:
                    case PostgresParser.FIRST_VALUE:
                    case PostgresParser.LAST_VALUE:
                    case PostgresParser.NTH_VALUE:
                    case PostgresParser.XMLCOMMENT:
                    case PostgresParser.XMLCONCAT:
                    case PostgresParser.XMLELEMENT:
                    case PostgresParser.XMLFOREST:
                    case PostgresParser.XMLPI:
                    case PostgresParser.XMLROOT:
                    case PostgresParser.XMLEXISTS:
                    case PostgresParser.XML_IS_WELL_FORMED:
                    case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
                    case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
                    case PostgresParser.XPATH:
                    case PostgresParser.XPATH_EXISTS:
                    case PostgresParser.XMLTABLE:
                    case PostgresParser.TABLE_TO_XML:
                    case PostgresParser.LEFT_PAREN:
                    case PostgresParser.PLUS:
                    case PostgresParser.MINUS:
                    case PostgresParser.MULTIPLY:
                    case PostgresParser.LESS_LESS:
                    case PostgresParser.GREATER_GREATER:
                    case PostgresParser.HASH_SIGN:
                    case PostgresParser.OP_CHARS:
                    case PostgresParser.NUMBER_LITERAL:
                    case PostgresParser.REAL_NUMBER:
                    case PostgresParser.DOLLAR_NUMBER:
                    case PostgresParser.Identifier:
                    case PostgresParser.QuotedIdentifier:
                    case PostgresParser.Character_String_Literal:
                    case PostgresParser.BeginDollarStringConstant:
                      {
                        this.state = 856;
                        this.vex(0);
                      }
                      break;
                    case PostgresParser.LEFT_BRACKET:
                      {
                        this.state = 857;
                        this.array_elements();
                      }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                }
              }
              this.state = 864;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 867;
        this.match(PostgresParser.RIGHT_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public type_coercion(): Type_coercionContext {
    let _localctx: Type_coercionContext = new Type_coercionContext(this._ctx, this.state);
    this.enterRule(_localctx, 80, PostgresParser.RULE_type_coercion);
    try {
      this.state = 878;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 869;
            this.data_type();
            this.state = 870;
            this.character_string();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 872;
            this.match(PostgresParser.INTERVAL);
            this.state = 873;
            this.character_string();
            this.state = 874;
            this.interval_field();
            this.state = 876;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
              case 1:
                {
                  this.state = 875;
                  this.type_length();
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public schema_qualified_name(): Schema_qualified_nameContext {
    let _localctx: Schema_qualified_nameContext = new Schema_qualified_nameContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 82, PostgresParser.RULE_schema_qualified_name);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 880;
        this.identifier();
        this.state = 887;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 105, this._ctx)) {
          case 1:
            {
              this.state = 881;
              this.match(PostgresParser.DOT);
              this.state = 882;
              this.identifier();
              this.state = 885;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                case 1:
                  {
                    this.state = 883;
                    this.match(PostgresParser.DOT);
                    this.state = 884;
                    this.identifier();
                  }
                  break;
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public set_qualifier(): Set_qualifierContext {
    let _localctx: Set_qualifierContext = new Set_qualifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 84, PostgresParser.RULE_set_qualifier);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 889;
        _la = this._input.LA(1);
        if (!(_la === PostgresParser.DISTINCT || _la === PostgresParser.ALL)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public table_subquery(): Table_subqueryContext {
    let _localctx: Table_subqueryContext = new Table_subqueryContext(this._ctx, this.state);
    this.enterRule(_localctx, 86, PostgresParser.RULE_table_subquery);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 891;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 892;
        this.select_stmt();
        this.state = 893;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_stmt(): Select_stmtContext {
    let _localctx: Select_stmtContext = new Select_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 88, PostgresParser.RULE_select_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 896;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.WITH) {
          {
            this.state = 895;
            this.with_clause();
          }
        }

        this.state = 898;
        this.select_ops(0);
        this.state = 902;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PostgresParser.ORDER) |
                (1 << PostgresParser.LIMIT) |
                (1 << PostgresParser.OFFSET))) !==
              0) ||
          _la === PostgresParser.FETCH
        ) {
          {
            {
              this.state = 899;
              this.after_ops();
            }
          }
          this.state = 904;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public after_ops(): After_opsContext {
    let _localctx: After_opsContext = new After_opsContext(this._ctx, this.state);
    this.enterRule(_localctx, 90, PostgresParser.RULE_after_ops);
    let _la: number;
    try {
      this.state = 925;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.ORDER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 905;
            this.orderby_clause();
          }
          break;
        case PostgresParser.LIMIT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 906;
            this.match(PostgresParser.LIMIT);
            this.state = 909;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
              case 1:
                {
                  this.state = 907;
                  this.vex(0);
                }
                break;

              case 2:
                {
                  this.state = 908;
                  this.match(PostgresParser.ALL);
                }
                break;
            }
          }
          break;
        case PostgresParser.OFFSET:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 911;
            this.match(PostgresParser.OFFSET);
            this.state = 912;
            this.vex(0);
            this.state = 914;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ROWS || _la === PostgresParser.ROW) {
              {
                this.state = 913;
                _la = this._input.LA(1);
                if (!(_la === PostgresParser.ROWS || _la === PostgresParser.ROW)) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
              }
            }
          }
          break;
        case PostgresParser.FETCH:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 916;
            this.match(PostgresParser.FETCH);
            this.state = 917;
            _la = this._input.LA(1);
            if (!(_la === PostgresParser.FIRST || _la === PostgresParser.NEXT)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 919;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 110, this._ctx)) {
              case 1:
                {
                  this.state = 918;
                  this.vex(0);
                }
                break;
            }
            this.state = 921;
            _la = this._input.LA(1);
            if (!(_la === PostgresParser.ROWS || _la === PostgresParser.ROW)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 923;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ONLY) {
              {
                this.state = 922;
                this.match(PostgresParser.ONLY);
              }
            }
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_stmt_no_parens(): Select_stmt_no_parensContext {
    let _localctx: Select_stmt_no_parensContext = new Select_stmt_no_parensContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 92, PostgresParser.RULE_select_stmt_no_parens);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 928;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.WITH) {
          {
            this.state = 927;
            this.with_clause();
          }
        }

        this.state = 930;
        this.select_ops_no_parens();
        this.state = 934;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PostgresParser.ORDER) |
                (1 << PostgresParser.LIMIT) |
                (1 << PostgresParser.OFFSET))) !==
              0) ||
          _la === PostgresParser.FETCH
        ) {
          {
            {
              this.state = 931;
              this.after_ops();
            }
          }
          this.state = 936;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public with_clause(): With_clauseContext {
    let _localctx: With_clauseContext = new With_clauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 94, PostgresParser.RULE_with_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 937;
        this.match(PostgresParser.WITH);
        this.state = 939;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 115, this._ctx)) {
          case 1:
            {
              this.state = 938;
              this.match(PostgresParser.RECURSIVE);
            }
            break;
        }
        this.state = 941;
        this.with_query();
        this.state = 946;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 942;
              this.match(PostgresParser.COMMA);
              this.state = 943;
              this.with_query();
            }
          }
          this.state = 948;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public with_query(): With_queryContext {
    let _localctx: With_queryContext = new With_queryContext(this._ctx, this.state);
    this.enterRule(_localctx, 96, PostgresParser.RULE_with_query);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 949;
        _localctx._query_name = this.identifier();
        this.state = 961;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.LEFT_PAREN) {
          {
            this.state = 950;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 951;
            _localctx._identifier = this.identifier();
            _localctx._column_name.push(_localctx._identifier);
            this.state = 956;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 952;
                  this.match(PostgresParser.COMMA);
                  this.state = 953;
                  _localctx._identifier = this.identifier();
                  _localctx._column_name.push(_localctx._identifier);
                }
              }
              this.state = 958;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 959;
            this.match(PostgresParser.RIGHT_PAREN);
          }
        }

        this.state = 963;
        this.match(PostgresParser.AS);
        this.state = 964;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 965;
        this.select_stmt();
        this.state = 966;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public select_ops(): Select_opsContext;
  public select_ops(_p: number): Select_opsContext;
  // @RuleVersion(0)
  public select_ops(_p?: number): Select_opsContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: Select_opsContext = new Select_opsContext(this._ctx, _parentState);
    let _prevctx: Select_opsContext = _localctx;
    let _startState: number = 98;
    this.enterRecursionRule(_localctx, 98, PostgresParser.RULE_select_ops, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 974;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.LEFT_PAREN:
            {
              this.state = 969;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 970;
              this.select_stmt();
              this.state = 971;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;
          case PostgresParser.SELECT:
          case PostgresParser.VALUES:
          case PostgresParser.TABLE:
            {
              this.state = 973;
              this.select_primary();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 984;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              {
                _localctx = new Select_opsContext(_parentctx, _parentState);
                this.pushNewRecursionContext(
                  _localctx,
                  _startState,
                  PostgresParser.RULE_select_ops
                );
                this.state = 976;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                }
                this.state = 977;
                _la = this._input.LA(1);
                if (
                  !(
                    (_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                      ((1 << PostgresParser.UNION) |
                        (1 << PostgresParser.INTERSECT) |
                        (1 << PostgresParser.EXCEPT))) !==
                      0
                  )
                ) {
                  this._errHandler.recoverInline(this);
                } else {
                  if (this._input.LA(1) === Token.EOF) {
                    this.matchedEOF = true;
                  }

                  this._errHandler.reportMatch(this);
                  this.consume();
                }
                this.state = 979;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PostgresParser.DISTINCT || _la === PostgresParser.ALL) {
                  {
                    this.state = 978;
                    this.set_qualifier();
                  }
                }

                this.state = 981;
                this.select_ops(3);
              }
            }
          }
          this.state = 986;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 121, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_ops_no_parens(): Select_ops_no_parensContext {
    let _localctx: Select_ops_no_parensContext = new Select_ops_no_parensContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 100, PostgresParser.RULE_select_ops_no_parens);
    let _la: number;
    try {
      this.state = 1000;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 987;
            this.select_ops(0);
            this.state = 988;
            _la = this._input.LA(1);
            if (
              !(
                (_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.UNION) |
                    (1 << PostgresParser.INTERSECT) |
                    (1 << PostgresParser.EXCEPT))) !==
                  0
              )
            ) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 990;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.DISTINCT || _la === PostgresParser.ALL) {
              {
                this.state = 989;
                this.set_qualifier();
              }
            }

            this.state = 997;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.SELECT:
              case PostgresParser.VALUES:
              case PostgresParser.TABLE:
                {
                  this.state = 992;
                  this.select_primary();
                }
                break;
              case PostgresParser.LEFT_PAREN:
                {
                  this.state = 993;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 994;
                  this.select_stmt();
                  this.state = 995;
                  this.match(PostgresParser.RIGHT_PAREN);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 999;
            this.select_primary();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_primary(): Select_primaryContext {
    let _localctx: Select_primaryContext = new Select_primaryContext(this._ctx, this.state);
    this.enterRule(_localctx, 102, PostgresParser.RULE_select_primary);
    let _la: number;
    try {
      let _alt: number;
      this.state = 1070;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.SELECT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1002;
            this.match(PostgresParser.SELECT);
            this.state = 1018;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 127, this._ctx)) {
              case 1:
                {
                  this.state = 1003;
                  this.set_qualifier();
                  this.state = 1016;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
                    case 1:
                      {
                        this.state = 1004;
                        this.match(PostgresParser.ON);
                        this.state = 1005;
                        this.match(PostgresParser.LEFT_PAREN);
                        this.state = 1006;
                        this.vex(0);
                        this.state = 1011;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PostgresParser.COMMA) {
                          {
                            {
                              this.state = 1007;
                              this.match(PostgresParser.COMMA);
                              this.state = 1008;
                              this.vex(0);
                            }
                          }
                          this.state = 1013;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                        }
                        this.state = 1014;
                        this.match(PostgresParser.RIGHT_PAREN);
                      }
                      break;
                  }
                }
                break;
            }
            this.state = 1021;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
              case 1:
                {
                  this.state = 1020;
                  this.select_list();
                }
                break;
            }
            this.state = 1032;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
              case 1:
                {
                  this.state = 1023;
                  this.match(PostgresParser.FROM);
                  this.state = 1024;
                  this.from_item(0);
                  this.state = 1029;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                  while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                      {
                        {
                          this.state = 1025;
                          this.match(PostgresParser.COMMA);
                          this.state = 1026;
                          this.from_item(0);
                        }
                      }
                    }
                    this.state = 1031;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 129, this._ctx);
                  }
                }
                break;
            }
            this.state = 1036;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
              case 1:
                {
                  this.state = 1034;
                  this.match(PostgresParser.WHERE);
                  this.state = 1035;
                  this.vex(0);
                }
                break;
            }
            this.state = 1039;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 132, this._ctx)) {
              case 1:
                {
                  this.state = 1038;
                  this.groupby_clause();
                }
                break;
            }
            this.state = 1043;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
              case 1:
                {
                  this.state = 1041;
                  this.match(PostgresParser.HAVING);
                  this.state = 1042;
                  this.vex(0);
                }
                break;
            }
            this.state = 1059;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
              case 1:
                {
                  this.state = 1045;
                  this.match(PostgresParser.WINDOW);
                  this.state = 1046;
                  this.identifier();
                  this.state = 1047;
                  this.match(PostgresParser.AS);
                  this.state = 1048;
                  this.window_definition();
                  this.state = 1056;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                  while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                      {
                        {
                          this.state = 1049;
                          this.match(PostgresParser.COMMA);
                          this.state = 1050;
                          this.identifier();
                          this.state = 1051;
                          this.match(PostgresParser.AS);
                          this.state = 1052;
                          this.window_definition();
                        }
                      }
                    }
                    this.state = 1058;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 134, this._ctx);
                  }
                }
                break;
            }
          }
          break;
        case PostgresParser.TABLE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1061;
            this.match(PostgresParser.TABLE);
            this.state = 1063;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ONLY) {
              {
                this.state = 1062;
                this.match(PostgresParser.ONLY);
              }
            }

            this.state = 1065;
            this.schema_qualified_name();
            this.state = 1067;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 137, this._ctx)) {
              case 1:
                {
                  this.state = 1066;
                  this.match(PostgresParser.MULTIPLY);
                }
                break;
            }
          }
          break;
        case PostgresParser.VALUES:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1069;
            this.values_stmt();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_list(): Select_listContext {
    let _localctx: Select_listContext = new Select_listContext(this._ctx, this.state);
    this.enterRule(_localctx, 104, PostgresParser.RULE_select_list);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1072;
        this.select_sublist();
        this.state = 1077;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1073;
                this.match(PostgresParser.COMMA);
                this.state = 1074;
                this.select_sublist();
              }
            }
          }
          this.state = 1079;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 139, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_sublist(): Select_sublistContext {
    let _localctx: Select_sublistContext = new Select_sublistContext(this._ctx, this.state);
    this.enterRule(_localctx, 106, PostgresParser.RULE_select_sublist);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1080;
        this.vex(0);
        this.state = 1084;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
          case 1:
            {
              this.state = 1081;
              this.match(PostgresParser.AS);
              this.state = 1082;
              this.col_label();
            }
            break;

          case 2:
            {
              this.state = 1083;
              this.id_token();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public from_item(): From_itemContext;
  public from_item(_p: number): From_itemContext;
  // @RuleVersion(0)
  public from_item(_p?: number): From_itemContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: From_itemContext = new From_itemContext(this._ctx, _parentState);
    let _prevctx: From_itemContext = _localctx;
    let _startState: number = 108;
    this.enterRecursionRule(_localctx, 108, PostgresParser.RULE_from_item, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1094;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 142, this._ctx)) {
          case 1:
            {
              this.state = 1087;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 1088;
              this.from_item(0);
              this.state = 1089;
              this.match(PostgresParser.RIGHT_PAREN);
              this.state = 1091;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
                case 1:
                  {
                    this.state = 1090;
                    this.alias_clause();
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              this.state = 1093;
              this.from_primary();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1139;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 1137;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 149, this._ctx)) {
                case 1:
                  {
                    _localctx = new From_itemContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PostgresParser.RULE_from_item
                    );
                    this.state = 1096;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                    }
                    this.state = 1097;
                    this.match(PostgresParser.CROSS);
                    this.state = 1098;
                    this.match(PostgresParser.JOIN);
                    this.state = 1099;
                    this.from_item(6);
                  }
                  break;

                case 2:
                  {
                    _localctx = new From_itemContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PostgresParser.RULE_from_item
                    );
                    this.state = 1100;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 1101;
                    this.match(PostgresParser.NATURAL);
                    this.state = 1107;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.INNER:
                        {
                          this.state = 1102;
                          this.match(PostgresParser.INNER);
                        }
                        break;
                      case PostgresParser.LEFT:
                      case PostgresParser.RIGHT:
                      case PostgresParser.FULL:
                        {
                          this.state = 1103;
                          _la = this._input.LA(1);
                          if (
                            !(
                              (_la & ~0x1f) === 0 &&
                              ((1 << _la) &
                                ((1 << PostgresParser.LEFT) |
                                  (1 << PostgresParser.RIGHT) |
                                  (1 << PostgresParser.FULL))) !==
                                0
                            )
                          ) {
                            this._errHandler.recoverInline(this);
                          } else {
                            if (this._input.LA(1) === Token.EOF) {
                              this.matchedEOF = true;
                            }

                            this._errHandler.reportMatch(this);
                            this.consume();
                          }
                          this.state = 1105;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          if (_la === PostgresParser.OUTER) {
                            {
                              this.state = 1104;
                              this.match(PostgresParser.OUTER);
                            }
                          }
                        }
                        break;
                      case PostgresParser.JOIN:
                        break;
                      default:
                        break;
                    }
                    this.state = 1109;
                    this.match(PostgresParser.JOIN);
                    this.state = 1110;
                    this.from_item(3);
                  }
                  break;

                case 3:
                  {
                    _localctx = new From_itemContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PostgresParser.RULE_from_item
                    );
                    this.state = 1111;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)');
                    }
                    this.state = 1117;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.INNER:
                        {
                          this.state = 1112;
                          this.match(PostgresParser.INNER);
                        }
                        break;
                      case PostgresParser.LEFT:
                      case PostgresParser.RIGHT:
                      case PostgresParser.FULL:
                        {
                          this.state = 1113;
                          _la = this._input.LA(1);
                          if (
                            !(
                              (_la & ~0x1f) === 0 &&
                              ((1 << _la) &
                                ((1 << PostgresParser.LEFT) |
                                  (1 << PostgresParser.RIGHT) |
                                  (1 << PostgresParser.FULL))) !==
                                0
                            )
                          ) {
                            this._errHandler.recoverInline(this);
                          } else {
                            if (this._input.LA(1) === Token.EOF) {
                              this.matchedEOF = true;
                            }

                            this._errHandler.reportMatch(this);
                            this.consume();
                          }
                          this.state = 1115;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          if (_la === PostgresParser.OUTER) {
                            {
                              this.state = 1114;
                              this.match(PostgresParser.OUTER);
                            }
                          }
                        }
                        break;
                      case PostgresParser.JOIN:
                        break;
                      default:
                        break;
                    }
                    this.state = 1119;
                    this.match(PostgresParser.JOIN);
                    this.state = 1120;
                    this.from_item(0);
                    this.state = 1121;
                    this.match(PostgresParser.ON);
                    this.state = 1122;
                    this.vex(0);
                  }
                  break;

                case 4:
                  {
                    _localctx = new From_itemContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PostgresParser.RULE_from_item
                    );
                    this.state = 1124;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
                    }
                    this.state = 1130;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.INNER:
                        {
                          this.state = 1125;
                          this.match(PostgresParser.INNER);
                        }
                        break;
                      case PostgresParser.LEFT:
                      case PostgresParser.RIGHT:
                      case PostgresParser.FULL:
                        {
                          this.state = 1126;
                          _la = this._input.LA(1);
                          if (
                            !(
                              (_la & ~0x1f) === 0 &&
                              ((1 << _la) &
                                ((1 << PostgresParser.LEFT) |
                                  (1 << PostgresParser.RIGHT) |
                                  (1 << PostgresParser.FULL))) !==
                                0
                            )
                          ) {
                            this._errHandler.recoverInline(this);
                          } else {
                            if (this._input.LA(1) === Token.EOF) {
                              this.matchedEOF = true;
                            }

                            this._errHandler.reportMatch(this);
                            this.consume();
                          }
                          this.state = 1128;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          if (_la === PostgresParser.OUTER) {
                            {
                              this.state = 1127;
                              this.match(PostgresParser.OUTER);
                            }
                          }
                        }
                        break;
                      case PostgresParser.JOIN:
                        break;
                      default:
                        break;
                    }
                    this.state = 1132;
                    this.match(PostgresParser.JOIN);
                    this.state = 1133;
                    this.from_item(0);
                    this.state = 1134;
                    this.match(PostgresParser.USING);
                    this.state = 1135;
                    this.names_in_parens();
                  }
                  break;
              }
            }
          }
          this.state = 1141;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 150, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public from_primary(): From_primaryContext {
    let _localctx: From_primaryContext = new From_primaryContext(this._ctx, this.state);
    this.enterRule(_localctx, 110, PostgresParser.RULE_from_primary);
    let _la: number;
    try {
      this.state = 1252;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 173, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1143;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ONLY) {
              {
                this.state = 1142;
                this.match(PostgresParser.ONLY);
              }
            }

            this.state = 1145;
            this.schema_qualified_name();
            this.state = 1147;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 152, this._ctx)) {
              case 1:
                {
                  this.state = 1146;
                  this.match(PostgresParser.MULTIPLY);
                }
                break;
            }
            this.state = 1150;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
              case 1:
                {
                  this.state = 1149;
                  this.alias_clause();
                }
                break;
            }
            this.state = 1168;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
              case 1:
                {
                  this.state = 1152;
                  this.match(PostgresParser.TABLESAMPLE);
                  this.state = 1153;
                  _localctx._method = this.identifier();
                  this.state = 1154;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 1155;
                  this.vex(0);
                  this.state = 1160;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  while (_la === PostgresParser.COMMA) {
                    {
                      {
                        this.state = 1156;
                        this.match(PostgresParser.COMMA);
                        this.state = 1157;
                        this.vex(0);
                      }
                    }
                    this.state = 1162;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                  }
                  this.state = 1163;
                  this.match(PostgresParser.RIGHT_PAREN);
                  this.state = 1166;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 155, this._ctx)) {
                    case 1:
                      {
                        this.state = 1164;
                        this.match(PostgresParser.REPEATABLE);
                        this.state = 1165;
                        this.vex(0);
                      }
                      break;
                  }
                }
                break;
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.LATERAL) {
              {
                this.state = 1170;
                this.match(PostgresParser.LATERAL);
              }
            }

            this.state = 1173;
            this.table_subquery();
            this.state = 1174;
            this.alias_clause();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1177;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.LATERAL) {
              {
                this.state = 1176;
                this.match(PostgresParser.LATERAL);
              }
            }

            this.state = 1179;
            this.function_call();
            this.state = 1182;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 159, this._ctx)) {
              case 1:
                {
                  this.state = 1180;
                  this.match(PostgresParser.WITH);
                  this.state = 1181;
                  this.match(PostgresParser.ORDINALITY);
                }
                break;
            }
            this.state = 1204;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 163, this._ctx)) {
              case 1:
                {
                  this.state = 1184;
                  this.match(PostgresParser.AS);
                  this.state = 1185;
                  this.from_function_column_def();
                }
                break;

              case 2:
                {
                  this.state = 1187;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1186;
                      this.match(PostgresParser.AS);
                    }
                  }

                  this.state = 1189;
                  _localctx._alias = this.identifier();
                  this.state = 1202;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                    case 1:
                      {
                        this.state = 1190;
                        this.match(PostgresParser.LEFT_PAREN);
                        this.state = 1191;
                        _localctx._identifier = this.identifier();
                        _localctx._column_alias.push(_localctx._identifier);
                        this.state = 1196;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PostgresParser.COMMA) {
                          {
                            {
                              this.state = 1192;
                              this.match(PostgresParser.COMMA);
                              this.state = 1193;
                              _localctx._identifier = this.identifier();
                              _localctx._column_alias.push(_localctx._identifier);
                            }
                          }
                          this.state = 1198;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                        }
                        this.state = 1199;
                        this.match(PostgresParser.RIGHT_PAREN);
                      }
                      break;

                    case 2:
                      {
                        this.state = 1201;
                        this.from_function_column_def();
                      }
                      break;
                  }
                }
                break;
            }
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1207;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.LATERAL) {
              {
                this.state = 1206;
                this.match(PostgresParser.LATERAL);
              }
            }

            this.state = 1209;
            this.match(PostgresParser.ROWS);
            this.state = 1210;
            this.match(PostgresParser.FROM);
            this.state = 1211;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1212;
            this.function_call();
            this.state = 1215;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.AS) {
              {
                this.state = 1213;
                this.match(PostgresParser.AS);
                this.state = 1214;
                this.from_function_column_def();
              }
            }

            this.state = 1225;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 1217;
                  this.match(PostgresParser.COMMA);
                  this.state = 1218;
                  this.function_call();
                  this.state = 1221;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1219;
                      this.match(PostgresParser.AS);
                      this.state = 1220;
                      this.from_function_column_def();
                    }
                  }
                }
              }
              this.state = 1227;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1228;
            this.match(PostgresParser.RIGHT_PAREN);
            this.state = 1231;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 168, this._ctx)) {
              case 1:
                {
                  this.state = 1229;
                  this.match(PostgresParser.WITH);
                  this.state = 1230;
                  this.match(PostgresParser.ORDINALITY);
                }
                break;
            }
            this.state = 1250;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 172, this._ctx)) {
              case 1:
                {
                  this.state = 1234;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1233;
                      this.match(PostgresParser.AS);
                    }
                  }

                  this.state = 1236;
                  this.identifier();
                  this.state = 1248;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
                    case 1:
                      {
                        this.state = 1237;
                        this.match(PostgresParser.LEFT_PAREN);
                        this.state = 1238;
                        this.identifier();
                        this.state = 1243;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PostgresParser.COMMA) {
                          {
                            {
                              this.state = 1239;
                              this.match(PostgresParser.COMMA);
                              this.state = 1240;
                              this.identifier();
                            }
                          }
                          this.state = 1245;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                        }
                        this.state = 1246;
                        this.match(PostgresParser.RIGHT_PAREN);
                      }
                      break;
                  }
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public alias_clause(): Alias_clauseContext {
    let _localctx: Alias_clauseContext = new Alias_clauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 112, PostgresParser.RULE_alias_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.AS) {
          {
            this.state = 1254;
            this.match(PostgresParser.AS);
          }
        }

        this.state = 1257;
        _localctx._alias = this.identifier();
        this.state = 1269;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
          case 1:
            {
              this.state = 1258;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 1259;
              _localctx._identifier = this.identifier();
              _localctx._column_alias.push(_localctx._identifier);
              this.state = 1264;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === PostgresParser.COMMA) {
                {
                  {
                    this.state = 1260;
                    this.match(PostgresParser.COMMA);
                    this.state = 1261;
                    _localctx._identifier = this.identifier();
                    _localctx._column_alias.push(_localctx._identifier);
                  }
                }
                this.state = 1266;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
              this.state = 1267;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public from_function_column_def(): From_function_column_defContext {
    let _localctx: From_function_column_defContext = new From_function_column_defContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 114, PostgresParser.RULE_from_function_column_def);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1271;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1272;
        _localctx._identifier = this.identifier();
        _localctx._column_alias.push(_localctx._identifier);
        this.state = 1273;
        this.data_type();
        this.state = 1280;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1274;
              this.match(PostgresParser.COMMA);
              this.state = 1275;
              _localctx._identifier = this.identifier();
              _localctx._column_alias.push(_localctx._identifier);
              this.state = 1276;
              this.data_type();
            }
          }
          this.state = 1282;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1283;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public groupby_clause(): Groupby_clauseContext {
    let _localctx: Groupby_clauseContext = new Groupby_clauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 116, PostgresParser.RULE_groupby_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1285;
        this.match(PostgresParser.GROUP);
        this.state = 1286;
        this.match(PostgresParser.BY);
        this.state = 1287;
        this.grouping_element_list();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public grouping_element_list(): Grouping_element_listContext {
    let _localctx: Grouping_element_listContext = new Grouping_element_listContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 118, PostgresParser.RULE_grouping_element_list);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1289;
        this.grouping_element();
        this.state = 1294;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1290;
                this.match(PostgresParser.COMMA);
                this.state = 1291;
                this.grouping_element();
              }
            }
          }
          this.state = 1296;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 178, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public grouping_element(): Grouping_elementContext {
    let _localctx: Grouping_elementContext = new Grouping_elementContext(this._ctx, this.state);
    this.enterRule(_localctx, 120, PostgresParser.RULE_grouping_element);
    try {
      this.state = 1310;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 180, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1297;
            this.vex(0);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1298;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1299;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1304;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.ROLLUP:
                {
                  this.state = 1300;
                  this.match(PostgresParser.ROLLUP);
                }
                break;
              case PostgresParser.CUBE:
                {
                  this.state = 1301;
                  this.match(PostgresParser.CUBE);
                }
                break;
              case PostgresParser.GROUPING:
                {
                  this.state = 1302;
                  this.match(PostgresParser.GROUPING);
                  this.state = 1303;
                  this.match(PostgresParser.SETS);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 1306;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1307;
            this.grouping_element_list();
            this.state = 1308;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public values_stmt(): Values_stmtContext {
    let _localctx: Values_stmtContext = new Values_stmtContext(this._ctx, this.state);
    this.enterRule(_localctx, 122, PostgresParser.RULE_values_stmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1312;
        this.match(PostgresParser.VALUES);
        this.state = 1313;
        this.values_values();
        this.state = 1318;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1314;
                this.match(PostgresParser.COMMA);
                this.state = 1315;
                this.values_values();
              }
            }
          }
          this.state = 1320;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 181, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public values_values(): Values_valuesContext {
    let _localctx: Values_valuesContext = new Values_valuesContext(this._ctx, this.state);
    this.enterRule(_localctx, 124, PostgresParser.RULE_values_values);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1321;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1324;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.RECURSIVE:
          case PostgresParser.BY:
          case PostgresParser.ALL:
          case PostgresParser.ANY:
          case PostgresParser.SOME:
          case PostgresParser.OPERATOR:
          case PostgresParser.NULLS:
          case PostgresParser.FIRST:
          case PostgresParser.LAST:
          case PostgresParser.LEFT:
          case PostgresParser.RIGHT:
          case PostgresParser.FULL:
          case PostgresParser.INNER:
          case PostgresParser.OUTER:
          case PostgresParser.CROSS:
          case PostgresParser.JOIN:
          case PostgresParser.ON:
          case PostgresParser.VALUES:
          case PostgresParser.NATURAL:
          case PostgresParser.TABLESAMPLE:
          case PostgresParser.INTERVAL:
          case PostgresParser.SECOND:
          case PostgresParser.MINUTE:
          case PostgresParser.HOUR:
          case PostgresParser.DAY:
          case PostgresParser.MONTH:
          case PostgresParser.YEAR:
          case PostgresParser.TREAT:
          case PostgresParser.CASE:
          case PostgresParser.NOT:
          case PostgresParser.IS:
          case PostgresParser.NULL:
          case PostgresParser.ISNULL:
          case PostgresParser.NOTNULL:
          case PostgresParser.TRUE:
          case PostgresParser.FALSE:
          case PostgresParser.BETWEEN:
          case PostgresParser.LIKE:
          case PostgresParser.ILIKE:
          case PostgresParser.ARRAY:
          case PostgresParser.BOOLEAN:
          case PostgresParser.SMALLINT:
          case PostgresParser.INT:
          case PostgresParser.INTEGER:
          case PostgresParser.BIGINT:
          case PostgresParser.DEC:
          case PostgresParser.DECIMAL:
          case PostgresParser.DOUBLE:
          case PostgresParser.FLOAT:
          case PostgresParser.NUMERIC:
          case PostgresParser.PRECISION:
          case PostgresParser.REAL:
          case PostgresParser.BIT:
          case PostgresParser.VARYING:
          case PostgresParser.NATIONAL:
          case PostgresParser.CHARACTER:
          case PostgresParser.CHAR:
          case PostgresParser.NCHAR:
          case PostgresParser.TIME:
          case PostgresParser.WITHOUT:
          case PostgresParser.WITHIN:
          case PostgresParser.ZONE:
          case PostgresParser.TIMESTAMP:
          case PostgresParser.VARCHAR:
          case PostgresParser.SETOF:
          case PostgresParser.OF:
          case PostgresParser.OVER:
          case PostgresParser.PARTITION:
          case PostgresParser.ROWS:
          case PostgresParser.RANGE:
          case PostgresParser.GROUPS:
          case PostgresParser.UNBOUNDED:
          case PostgresParser.PRECEDING:
          case PostgresParser.FOLLOWING:
          case PostgresParser.CURRENT:
          case PostgresParser.ROW:
          case PostgresParser.EXCLUDE:
          case PostgresParser.TIES:
          case PostgresParser.NO:
          case PostgresParser.OTHERS:
          case PostgresParser.ROLLUP:
          case PostgresParser.GROUPING:
          case PostgresParser.SETS:
          case PostgresParser.OVERLAPS:
          case PostgresParser.AT:
          case PostgresParser.SIMILAR:
          case PostgresParser.ESCAPE:
          case PostgresParser.NEXT:
          case PostgresParser.DOCUMENT:
          case PostgresParser.UNKNOWN:
          case PostgresParser.EXISTS:
          case PostgresParser.FILTER:
          case PostgresParser.ALIAS:
          case PostgresParser.PATH:
          case PostgresParser.POW:
          case PostgresParser.DATE:
          case PostgresParser.ARRAY_AGG:
          case PostgresParser.AVG:
          case PostgresParser.BIT_AND:
          case PostgresParser.BIT_OR:
          case PostgresParser.BIT_XOR:
          case PostgresParser.BOOL_AND:
          case PostgresParser.BOOL_OR:
          case PostgresParser.COUNT:
          case PostgresParser.EVERY:
          case PostgresParser.JSON_AGG:
          case PostgresParser.JSON_OBJECT_AGG:
          case PostgresParser.MAX:
          case PostgresParser.MIN:
          case PostgresParser.RANGE_AGG:
          case PostgresParser.RANGE_INTERSECT_AGG:
          case PostgresParser.STRING_AGG:
          case PostgresParser.SUM:
          case PostgresParser.XMLAGG:
          case PostgresParser.ARRAY_APPEND:
          case PostgresParser.ARRAY_CAT:
          case PostgresParser.ARRAY_DIMS:
          case PostgresParser.ARRAY_FILL:
          case PostgresParser.ARRAY_LENGTH:
          case PostgresParser.ARRAY_LOWER:
          case PostgresParser.ARRAY_NDIMS:
          case PostgresParser.ARRAY_POSITION:
          case PostgresParser.ARRAY_PREPEND:
          case PostgresParser.ARRAY_REMOVE:
          case PostgresParser.ARRAY_REPLACE:
          case PostgresParser.ARRAY_TO_STRING:
          case PostgresParser.ARRAY_UPPER:
          case PostgresParser.CARDINALITY:
          case PostgresParser.TRIM_ARRAY:
          case PostgresParser.UNNEST:
          case PostgresParser.CONVERT:
          case PostgresParser.CONVERT_FROM:
          case PostgresParser.CONVERT_TO:
          case PostgresParser.ENCODE:
          case PostgresParser.DECODE:
          case PostgresParser.BIT_COUNT:
          case PostgresParser.BTRIM:
          case PostgresParser.GET_BIT:
          case PostgresParser.GET_BYTE:
          case PostgresParser.LENGTH:
          case PostgresParser.LTRIM:
          case PostgresParser.MD5:
          case PostgresParser.RTRIM:
          case PostgresParser.SET_BIT:
          case PostgresParser.SET_BYTE:
          case PostgresParser.SHA224:
          case PostgresParser.SHA256:
          case PostgresParser.SHA384:
          case PostgresParser.SHA512:
          case PostgresParser.SUBSTR:
          case PostgresParser.NUM_NONNULLS:
          case PostgresParser.NUM_NULLS:
          case PostgresParser.COALESCE:
          case PostgresParser.NULLIF:
          case PostgresParser.GREATEST:
          case PostgresParser.LEAST:
          case PostgresParser.AGE:
          case PostgresParser.CLOCK_TIMESTAMP:
          case PostgresParser.CURRENT_DATE:
          case PostgresParser.CURRENT_TIME:
          case PostgresParser.CURRENT_TIMESTAMP:
          case PostgresParser.DATE_BIN:
          case PostgresParser.DATE_PART:
          case PostgresParser.DATE_TRUNC:
          case PostgresParser.EXTRACT:
          case PostgresParser.ISFINITE:
          case PostgresParser.JUSTIFY_DAYS:
          case PostgresParser.JUSTIFY_HOURS:
          case PostgresParser.JUSTIFY_INTERVAL:
          case PostgresParser.LOCALTIME:
          case PostgresParser.LOCALTIMESTAMP:
          case PostgresParser.MAKE_DATE:
          case PostgresParser.MAKE_INTERVAL:
          case PostgresParser.MAKE_TIME:
          case PostgresParser.MAKE_TIMESTAMP:
          case PostgresParser.MAKE_TIMESTAMPTZ:
          case PostgresParser.NOW:
          case PostgresParser.STATEMENT_TIMESTAMP:
          case PostgresParser.TIMEOFDAY:
          case PostgresParser.TRANSACTION_TIMESTAMP:
          case PostgresParser.ENUM_FIRST:
          case PostgresParser.ENUM_LAST:
          case PostgresParser.ENUM_RANGE:
          case PostgresParser.TO_CHAR:
          case PostgresParser.TO_DATE:
          case PostgresParser.TO_NUMBER:
          case PostgresParser.TO_TIMESTAMP:
          case PostgresParser.BOX:
          case PostgresParser.CIRCLE:
          case PostgresParser.LINE:
          case PostgresParser.LSEG:
          case PostgresParser.POINT:
          case PostgresParser.POLYGON:
          case PostgresParser.AREA:
          case PostgresParser.CENTER:
          case PostgresParser.DIAGONAL:
          case PostgresParser.DIAMETER:
          case PostgresParser.HEIGHT:
          case PostgresParser.ISCLOSED:
          case PostgresParser.ISOPEN:
          case PostgresParser.NPOINTS:
          case PostgresParser.PCLOSE:
          case PostgresParser.POPEN:
          case PostgresParser.RADIUS:
          case PostgresParser.SLOPE:
          case PostgresParser.WIDTH:
          case PostgresParser.SINH:
          case PostgresParser.COSH:
          case PostgresParser.TANH:
          case PostgresParser.ASINH:
          case PostgresParser.ACOSH:
          case PostgresParser.ATANH:
          case PostgresParser.ABBREV:
          case PostgresParser.BROADCAST:
          case PostgresParser.FAMILY:
          case PostgresParser.HOST:
          case PostgresParser.HOSTMASK:
          case PostgresParser.INET_MERGE:
          case PostgresParser.INET_SAME_FAMILY:
          case PostgresParser.MASKLEN:
          case PostgresParser.NETMASK:
          case PostgresParser.NETWORK:
          case PostgresParser.SET_MASKLEN:
          case PostgresParser.TEXT:
          case PostgresParser.TRUNC:
          case PostgresParser.MACADDR8_SET7BIT:
          case PostgresParser.JSON_ARRAY_ELEMENTS:
          case PostgresParser.JSONB_ARRAY_ELEMENTS:
          case PostgresParser.JSON_ARRAY_ELEMENTS_TEXT:
          case PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT:
          case PostgresParser.JSON_ARRAY_LENGTH:
          case PostgresParser.JSONB_ARRAY_LENGTH:
          case PostgresParser.JSON_EACH:
          case PostgresParser.JSONB_EACH:
          case PostgresParser.JSON_EACH_TEXT:
          case PostgresParser.JSONB_EACH_TEXT:
          case PostgresParser.JSON_EXTRACT_PATH:
          case PostgresParser.JSONB_EXTRACT_PATH:
          case PostgresParser.JSON_EXTRACT_PATH_TEXT:
          case PostgresParser.JSONB_EXTRACT_PATH_TEXT:
          case PostgresParser.JSON_OBJECT_KEYS:
          case PostgresParser.JSONB_OBJECT_KEYS:
          case PostgresParser.JSON_POPULATE_RECORD:
          case PostgresParser.JSONB_POPULATE_RECORD:
          case PostgresParser.JSON_POPULATE_RECORDSET:
          case PostgresParser.JSONB_POPULATE_RECORDSET:
          case PostgresParser.JSON_TO_RECORD:
          case PostgresParser.JSONB_TO_RECORD:
          case PostgresParser.JSON_TO_RECORDSET:
          case PostgresParser.JSONB_TO_RECORDSET:
          case PostgresParser.JSON_STRIP_NULLS:
          case PostgresParser.JSONB_STRIP_NULLS:
          case PostgresParser.JSONB_SET:
          case PostgresParser.JSONB_SET_LAX:
          case PostgresParser.JSONB_INSERT:
          case PostgresParser.JSONB_PATH_EXISTS:
          case PostgresParser.JSONB_PATH_MATCH:
          case PostgresParser.JSONB_PATH_QUERY:
          case PostgresParser.JSONB_PATH_QUERY_ARRAY:
          case PostgresParser.JSONB_PATH_QUERY_FIRST:
          case PostgresParser.JSONB_PATH_EXISTS_TZ:
          case PostgresParser.JSONB_PATH_MATCH_TZ:
          case PostgresParser.JSONB_PATH_QUERY_TZ:
          case PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ:
          case PostgresParser.JSONB_PATH_QUERY_FIRST_TZ:
          case PostgresParser.JSONB_PRETTY:
          case PostgresParser.JSON_TYPEOF:
          case PostgresParser.JSONB_TYPEOF:
          case PostgresParser.TO_JSON:
          case PostgresParser.TO_JSONB:
          case PostgresParser.ARRAY_TO_JSON:
          case PostgresParser.ROW_TO_JSON:
          case PostgresParser.JSON_BUILD_ARRAY:
          case PostgresParser.JSONB_BUILD_ARRAY:
          case PostgresParser.JSON_BUILD_OBJECT:
          case PostgresParser.JSON_OBJECT:
          case PostgresParser.JSONB_OBJECT:
          case PostgresParser.ABS:
          case PostgresParser.CBRT:
          case PostgresParser.CEIL:
          case PostgresParser.DEGREES:
          case PostgresParser.DIV:
          case PostgresParser.EXP:
          case PostgresParser.FACTORIAL:
          case PostgresParser.FLOOR:
          case PostgresParser.GCD:
          case PostgresParser.LCM:
          case PostgresParser.LN:
          case PostgresParser.LOG:
          case PostgresParser.LOG10:
          case PostgresParser.MIN_SCALE:
          case PostgresParser.MOD:
          case PostgresParser.PI:
          case PostgresParser.POWER:
          case PostgresParser.RADIANS:
          case PostgresParser.ROUND:
          case PostgresParser.SCALE:
          case PostgresParser.SIGN:
          case PostgresParser.SQRT:
          case PostgresParser.TRIM_SCALE:
          case PostgresParser.WIDTH_BUCKET:
          case PostgresParser.MODE:
          case PostgresParser.PERCENTILE_CONT:
          case PostgresParser.PERCENTILE_DISC:
          case PostgresParser.RANDOM:
          case PostgresParser.SETSEED:
          case PostgresParser.LOWER:
          case PostgresParser.UPPER:
          case PostgresParser.ISEMPTY:
          case PostgresParser.LOWER_INC:
          case PostgresParser.UPPER_INC:
          case PostgresParser.LOWER_INF:
          case PostgresParser.UPPER_INF:
          case PostgresParser.RANGE_MERGE:
          case PostgresParser.MULTIRANGE:
          case PostgresParser.TS_DEBUG:
          case PostgresParser.TS_LEXIZE:
          case PostgresParser.TS_PARSE:
          case PostgresParser.TS_TOKEN_TYPE:
          case PostgresParser.ARRAY_TO_TSVECTOR:
          case PostgresParser.GET_CURRENT_TS_CONFIG:
          case PostgresParser.NUMNODE:
          case PostgresParser.PLAINTO_TSQUERY:
          case PostgresParser.PHRASETO_TSQUERY:
          case PostgresParser.WEBSEARCH_TO_TSQUERY:
          case PostgresParser.QUERYTREE:
          case PostgresParser.SETWEIGHT:
          case PostgresParser.STRIP:
          case PostgresParser.TO_TSQUERY:
          case PostgresParser.TO_TSVECTOR:
          case PostgresParser.JSON_TO_TSVECTOR:
          case PostgresParser.TS_DELETE:
          case PostgresParser.TS_FILTER:
          case PostgresParser.TS_HEADLINE:
          case PostgresParser.TS_RANK:
          case PostgresParser.TS_RANK_CD:
          case PostgresParser.TS_REWRITE:
          case PostgresParser.TSQUERY_PHRASE:
          case PostgresParser.TSVECTOR_TO_ARRAY:
          case PostgresParser.GENERATE_SERIES:
          case PostgresParser.GENERATE_SUBSCRIPTS:
          case PostgresParser.CORR:
          case PostgresParser.COVAR_POP:
          case PostgresParser.COVAR_SAMP:
          case PostgresParser.REGR_AVGX:
          case PostgresParser.REGR_AVGY:
          case PostgresParser.REGR_COUNT:
          case PostgresParser.REGR_INTERCEPT:
          case PostgresParser.REGR_R2:
          case PostgresParser.REGR_SLOPE:
          case PostgresParser.REGR_SXX:
          case PostgresParser.REGR_SXY:
          case PostgresParser.REGR_SYY:
          case PostgresParser.STDDEV:
          case PostgresParser.STDDEV_POP:
          case PostgresParser.STDDEV_SAMP:
          case PostgresParser.VARIANCE:
          case PostgresParser.VAR_POP:
          case PostgresParser.VAR_SAMP:
          case PostgresParser.ASCII:
          case PostgresParser.CHR:
          case PostgresParser.CONCAT:
          case PostgresParser.CONCAT_WS:
          case PostgresParser.FORMAT:
          case PostgresParser.INITCAP:
          case PostgresParser.LPAD:
          case PostgresParser.PARSE_IDENT:
          case PostgresParser.QUOTE_IDENT:
          case PostgresParser.QUOTE_LITERAL:
          case PostgresParser.QUOTE_NULLABLE:
          case PostgresParser.REGEXP_MATCH:
          case PostgresParser.REGEXP_MATCHES:
          case PostgresParser.REGEXP_REPLACE:
          case PostgresParser.REGEXP_SPLIT_TO_ARRAY:
          case PostgresParser.REGEXP_SPLIT_TO_TABLE:
          case PostgresParser.REPEAT:
          case PostgresParser.REPLACE:
          case PostgresParser.REVERSE:
          case PostgresParser.RPAD:
          case PostgresParser.SPLIT_PART:
          case PostgresParser.STRPOS:
          case PostgresParser.STARTS_WITH:
          case PostgresParser.STRING_TO_ARRAY:
          case PostgresParser.STRING_TO_TABLE:
          case PostgresParser.TO_ASCII:
          case PostgresParser.TO_HEX:
          case PostgresParser.TRANSLATE:
          case PostgresParser.UNISTR:
          case PostgresParser.BIT_LENGTH:
          case PostgresParser.CHAR_LENGTH:
          case PostgresParser.CHARACTER_LENGTH:
          case PostgresParser.NORMALIZE:
          case PostgresParser.OCTET_LENGTH:
          case PostgresParser.OVERLAY:
          case PostgresParser.POSITION:
          case PostgresParser.SUBSTRING:
          case PostgresParser.TRIM:
          case PostgresParser.ACOS:
          case PostgresParser.ACOSD:
          case PostgresParser.ASIN:
          case PostgresParser.ASIND:
          case PostgresParser.ATAN:
          case PostgresParser.ATAND:
          case PostgresParser.ATAN2:
          case PostgresParser.ATAN2D:
          case PostgresParser.COS:
          case PostgresParser.COSD:
          case PostgresParser.COT:
          case PostgresParser.COTD:
          case PostgresParser.SIN:
          case PostgresParser.SIND:
          case PostgresParser.TAN:
          case PostgresParser.TAND:
          case PostgresParser.GEN_RANDOM_UUID:
          case PostgresParser.ROW_NUMBER:
          case PostgresParser.RANK:
          case PostgresParser.DENSE_RANK:
          case PostgresParser.PERCENT_RANK:
          case PostgresParser.CUME_DIST:
          case PostgresParser.NTILE:
          case PostgresParser.LAG:
          case PostgresParser.LEAD:
          case PostgresParser.FIRST_VALUE:
          case PostgresParser.LAST_VALUE:
          case PostgresParser.NTH_VALUE:
          case PostgresParser.XMLCOMMENT:
          case PostgresParser.XMLCONCAT:
          case PostgresParser.XMLELEMENT:
          case PostgresParser.XMLFOREST:
          case PostgresParser.XMLPI:
          case PostgresParser.XMLROOT:
          case PostgresParser.XMLEXISTS:
          case PostgresParser.XML_IS_WELL_FORMED:
          case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
          case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
          case PostgresParser.XPATH:
          case PostgresParser.XPATH_EXISTS:
          case PostgresParser.XMLTABLE:
          case PostgresParser.TABLE_TO_XML:
          case PostgresParser.LEFT_PAREN:
          case PostgresParser.PLUS:
          case PostgresParser.MINUS:
          case PostgresParser.MULTIPLY:
          case PostgresParser.LESS_LESS:
          case PostgresParser.GREATER_GREATER:
          case PostgresParser.HASH_SIGN:
          case PostgresParser.OP_CHARS:
          case PostgresParser.NUMBER_LITERAL:
          case PostgresParser.REAL_NUMBER:
          case PostgresParser.DOLLAR_NUMBER:
          case PostgresParser.Identifier:
          case PostgresParser.QuotedIdentifier:
          case PostgresParser.Character_String_Literal:
          case PostgresParser.BeginDollarStringConstant:
            {
              this.state = 1322;
              this.vex(0);
            }
            break;
          case PostgresParser.DEFAULT:
            {
              this.state = 1323;
              this.match(PostgresParser.DEFAULT);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1333;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1326;
              this.match(PostgresParser.COMMA);
              this.state = 1329;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case PostgresParser.RECURSIVE:
                case PostgresParser.BY:
                case PostgresParser.ALL:
                case PostgresParser.ANY:
                case PostgresParser.SOME:
                case PostgresParser.OPERATOR:
                case PostgresParser.NULLS:
                case PostgresParser.FIRST:
                case PostgresParser.LAST:
                case PostgresParser.LEFT:
                case PostgresParser.RIGHT:
                case PostgresParser.FULL:
                case PostgresParser.INNER:
                case PostgresParser.OUTER:
                case PostgresParser.CROSS:
                case PostgresParser.JOIN:
                case PostgresParser.ON:
                case PostgresParser.VALUES:
                case PostgresParser.NATURAL:
                case PostgresParser.TABLESAMPLE:
                case PostgresParser.INTERVAL:
                case PostgresParser.SECOND:
                case PostgresParser.MINUTE:
                case PostgresParser.HOUR:
                case PostgresParser.DAY:
                case PostgresParser.MONTH:
                case PostgresParser.YEAR:
                case PostgresParser.TREAT:
                case PostgresParser.CASE:
                case PostgresParser.NOT:
                case PostgresParser.IS:
                case PostgresParser.NULL:
                case PostgresParser.ISNULL:
                case PostgresParser.NOTNULL:
                case PostgresParser.TRUE:
                case PostgresParser.FALSE:
                case PostgresParser.BETWEEN:
                case PostgresParser.LIKE:
                case PostgresParser.ILIKE:
                case PostgresParser.ARRAY:
                case PostgresParser.BOOLEAN:
                case PostgresParser.SMALLINT:
                case PostgresParser.INT:
                case PostgresParser.INTEGER:
                case PostgresParser.BIGINT:
                case PostgresParser.DEC:
                case PostgresParser.DECIMAL:
                case PostgresParser.DOUBLE:
                case PostgresParser.FLOAT:
                case PostgresParser.NUMERIC:
                case PostgresParser.PRECISION:
                case PostgresParser.REAL:
                case PostgresParser.BIT:
                case PostgresParser.VARYING:
                case PostgresParser.NATIONAL:
                case PostgresParser.CHARACTER:
                case PostgresParser.CHAR:
                case PostgresParser.NCHAR:
                case PostgresParser.TIME:
                case PostgresParser.WITHOUT:
                case PostgresParser.WITHIN:
                case PostgresParser.ZONE:
                case PostgresParser.TIMESTAMP:
                case PostgresParser.VARCHAR:
                case PostgresParser.SETOF:
                case PostgresParser.OF:
                case PostgresParser.OVER:
                case PostgresParser.PARTITION:
                case PostgresParser.ROWS:
                case PostgresParser.RANGE:
                case PostgresParser.GROUPS:
                case PostgresParser.UNBOUNDED:
                case PostgresParser.PRECEDING:
                case PostgresParser.FOLLOWING:
                case PostgresParser.CURRENT:
                case PostgresParser.ROW:
                case PostgresParser.EXCLUDE:
                case PostgresParser.TIES:
                case PostgresParser.NO:
                case PostgresParser.OTHERS:
                case PostgresParser.ROLLUP:
                case PostgresParser.GROUPING:
                case PostgresParser.SETS:
                case PostgresParser.OVERLAPS:
                case PostgresParser.AT:
                case PostgresParser.SIMILAR:
                case PostgresParser.ESCAPE:
                case PostgresParser.NEXT:
                case PostgresParser.DOCUMENT:
                case PostgresParser.UNKNOWN:
                case PostgresParser.EXISTS:
                case PostgresParser.FILTER:
                case PostgresParser.ALIAS:
                case PostgresParser.PATH:
                case PostgresParser.POW:
                case PostgresParser.DATE:
                case PostgresParser.ARRAY_AGG:
                case PostgresParser.AVG:
                case PostgresParser.BIT_AND:
                case PostgresParser.BIT_OR:
                case PostgresParser.BIT_XOR:
                case PostgresParser.BOOL_AND:
                case PostgresParser.BOOL_OR:
                case PostgresParser.COUNT:
                case PostgresParser.EVERY:
                case PostgresParser.JSON_AGG:
                case PostgresParser.JSON_OBJECT_AGG:
                case PostgresParser.MAX:
                case PostgresParser.MIN:
                case PostgresParser.RANGE_AGG:
                case PostgresParser.RANGE_INTERSECT_AGG:
                case PostgresParser.STRING_AGG:
                case PostgresParser.SUM:
                case PostgresParser.XMLAGG:
                case PostgresParser.ARRAY_APPEND:
                case PostgresParser.ARRAY_CAT:
                case PostgresParser.ARRAY_DIMS:
                case PostgresParser.ARRAY_FILL:
                case PostgresParser.ARRAY_LENGTH:
                case PostgresParser.ARRAY_LOWER:
                case PostgresParser.ARRAY_NDIMS:
                case PostgresParser.ARRAY_POSITION:
                case PostgresParser.ARRAY_PREPEND:
                case PostgresParser.ARRAY_REMOVE:
                case PostgresParser.ARRAY_REPLACE:
                case PostgresParser.ARRAY_TO_STRING:
                case PostgresParser.ARRAY_UPPER:
                case PostgresParser.CARDINALITY:
                case PostgresParser.TRIM_ARRAY:
                case PostgresParser.UNNEST:
                case PostgresParser.CONVERT:
                case PostgresParser.CONVERT_FROM:
                case PostgresParser.CONVERT_TO:
                case PostgresParser.ENCODE:
                case PostgresParser.DECODE:
                case PostgresParser.BIT_COUNT:
                case PostgresParser.BTRIM:
                case PostgresParser.GET_BIT:
                case PostgresParser.GET_BYTE:
                case PostgresParser.LENGTH:
                case PostgresParser.LTRIM:
                case PostgresParser.MD5:
                case PostgresParser.RTRIM:
                case PostgresParser.SET_BIT:
                case PostgresParser.SET_BYTE:
                case PostgresParser.SHA224:
                case PostgresParser.SHA256:
                case PostgresParser.SHA384:
                case PostgresParser.SHA512:
                case PostgresParser.SUBSTR:
                case PostgresParser.NUM_NONNULLS:
                case PostgresParser.NUM_NULLS:
                case PostgresParser.COALESCE:
                case PostgresParser.NULLIF:
                case PostgresParser.GREATEST:
                case PostgresParser.LEAST:
                case PostgresParser.AGE:
                case PostgresParser.CLOCK_TIMESTAMP:
                case PostgresParser.CURRENT_DATE:
                case PostgresParser.CURRENT_TIME:
                case PostgresParser.CURRENT_TIMESTAMP:
                case PostgresParser.DATE_BIN:
                case PostgresParser.DATE_PART:
                case PostgresParser.DATE_TRUNC:
                case PostgresParser.EXTRACT:
                case PostgresParser.ISFINITE:
                case PostgresParser.JUSTIFY_DAYS:
                case PostgresParser.JUSTIFY_HOURS:
                case PostgresParser.JUSTIFY_INTERVAL:
                case PostgresParser.LOCALTIME:
                case PostgresParser.LOCALTIMESTAMP:
                case PostgresParser.MAKE_DATE:
                case PostgresParser.MAKE_INTERVAL:
                case PostgresParser.MAKE_TIME:
                case PostgresParser.MAKE_TIMESTAMP:
                case PostgresParser.MAKE_TIMESTAMPTZ:
                case PostgresParser.NOW:
                case PostgresParser.STATEMENT_TIMESTAMP:
                case PostgresParser.TIMEOFDAY:
                case PostgresParser.TRANSACTION_TIMESTAMP:
                case PostgresParser.ENUM_FIRST:
                case PostgresParser.ENUM_LAST:
                case PostgresParser.ENUM_RANGE:
                case PostgresParser.TO_CHAR:
                case PostgresParser.TO_DATE:
                case PostgresParser.TO_NUMBER:
                case PostgresParser.TO_TIMESTAMP:
                case PostgresParser.BOX:
                case PostgresParser.CIRCLE:
                case PostgresParser.LINE:
                case PostgresParser.LSEG:
                case PostgresParser.POINT:
                case PostgresParser.POLYGON:
                case PostgresParser.AREA:
                case PostgresParser.CENTER:
                case PostgresParser.DIAGONAL:
                case PostgresParser.DIAMETER:
                case PostgresParser.HEIGHT:
                case PostgresParser.ISCLOSED:
                case PostgresParser.ISOPEN:
                case PostgresParser.NPOINTS:
                case PostgresParser.PCLOSE:
                case PostgresParser.POPEN:
                case PostgresParser.RADIUS:
                case PostgresParser.SLOPE:
                case PostgresParser.WIDTH:
                case PostgresParser.SINH:
                case PostgresParser.COSH:
                case PostgresParser.TANH:
                case PostgresParser.ASINH:
                case PostgresParser.ACOSH:
                case PostgresParser.ATANH:
                case PostgresParser.ABBREV:
                case PostgresParser.BROADCAST:
                case PostgresParser.FAMILY:
                case PostgresParser.HOST:
                case PostgresParser.HOSTMASK:
                case PostgresParser.INET_MERGE:
                case PostgresParser.INET_SAME_FAMILY:
                case PostgresParser.MASKLEN:
                case PostgresParser.NETMASK:
                case PostgresParser.NETWORK:
                case PostgresParser.SET_MASKLEN:
                case PostgresParser.TEXT:
                case PostgresParser.TRUNC:
                case PostgresParser.MACADDR8_SET7BIT:
                case PostgresParser.JSON_ARRAY_ELEMENTS:
                case PostgresParser.JSONB_ARRAY_ELEMENTS:
                case PostgresParser.JSON_ARRAY_ELEMENTS_TEXT:
                case PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT:
                case PostgresParser.JSON_ARRAY_LENGTH:
                case PostgresParser.JSONB_ARRAY_LENGTH:
                case PostgresParser.JSON_EACH:
                case PostgresParser.JSONB_EACH:
                case PostgresParser.JSON_EACH_TEXT:
                case PostgresParser.JSONB_EACH_TEXT:
                case PostgresParser.JSON_EXTRACT_PATH:
                case PostgresParser.JSONB_EXTRACT_PATH:
                case PostgresParser.JSON_EXTRACT_PATH_TEXT:
                case PostgresParser.JSONB_EXTRACT_PATH_TEXT:
                case PostgresParser.JSON_OBJECT_KEYS:
                case PostgresParser.JSONB_OBJECT_KEYS:
                case PostgresParser.JSON_POPULATE_RECORD:
                case PostgresParser.JSONB_POPULATE_RECORD:
                case PostgresParser.JSON_POPULATE_RECORDSET:
                case PostgresParser.JSONB_POPULATE_RECORDSET:
                case PostgresParser.JSON_TO_RECORD:
                case PostgresParser.JSONB_TO_RECORD:
                case PostgresParser.JSON_TO_RECORDSET:
                case PostgresParser.JSONB_TO_RECORDSET:
                case PostgresParser.JSON_STRIP_NULLS:
                case PostgresParser.JSONB_STRIP_NULLS:
                case PostgresParser.JSONB_SET:
                case PostgresParser.JSONB_SET_LAX:
                case PostgresParser.JSONB_INSERT:
                case PostgresParser.JSONB_PATH_EXISTS:
                case PostgresParser.JSONB_PATH_MATCH:
                case PostgresParser.JSONB_PATH_QUERY:
                case PostgresParser.JSONB_PATH_QUERY_ARRAY:
                case PostgresParser.JSONB_PATH_QUERY_FIRST:
                case PostgresParser.JSONB_PATH_EXISTS_TZ:
                case PostgresParser.JSONB_PATH_MATCH_TZ:
                case PostgresParser.JSONB_PATH_QUERY_TZ:
                case PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ:
                case PostgresParser.JSONB_PATH_QUERY_FIRST_TZ:
                case PostgresParser.JSONB_PRETTY:
                case PostgresParser.JSON_TYPEOF:
                case PostgresParser.JSONB_TYPEOF:
                case PostgresParser.TO_JSON:
                case PostgresParser.TO_JSONB:
                case PostgresParser.ARRAY_TO_JSON:
                case PostgresParser.ROW_TO_JSON:
                case PostgresParser.JSON_BUILD_ARRAY:
                case PostgresParser.JSONB_BUILD_ARRAY:
                case PostgresParser.JSON_BUILD_OBJECT:
                case PostgresParser.JSON_OBJECT:
                case PostgresParser.JSONB_OBJECT:
                case PostgresParser.ABS:
                case PostgresParser.CBRT:
                case PostgresParser.CEIL:
                case PostgresParser.DEGREES:
                case PostgresParser.DIV:
                case PostgresParser.EXP:
                case PostgresParser.FACTORIAL:
                case PostgresParser.FLOOR:
                case PostgresParser.GCD:
                case PostgresParser.LCM:
                case PostgresParser.LN:
                case PostgresParser.LOG:
                case PostgresParser.LOG10:
                case PostgresParser.MIN_SCALE:
                case PostgresParser.MOD:
                case PostgresParser.PI:
                case PostgresParser.POWER:
                case PostgresParser.RADIANS:
                case PostgresParser.ROUND:
                case PostgresParser.SCALE:
                case PostgresParser.SIGN:
                case PostgresParser.SQRT:
                case PostgresParser.TRIM_SCALE:
                case PostgresParser.WIDTH_BUCKET:
                case PostgresParser.MODE:
                case PostgresParser.PERCENTILE_CONT:
                case PostgresParser.PERCENTILE_DISC:
                case PostgresParser.RANDOM:
                case PostgresParser.SETSEED:
                case PostgresParser.LOWER:
                case PostgresParser.UPPER:
                case PostgresParser.ISEMPTY:
                case PostgresParser.LOWER_INC:
                case PostgresParser.UPPER_INC:
                case PostgresParser.LOWER_INF:
                case PostgresParser.UPPER_INF:
                case PostgresParser.RANGE_MERGE:
                case PostgresParser.MULTIRANGE:
                case PostgresParser.TS_DEBUG:
                case PostgresParser.TS_LEXIZE:
                case PostgresParser.TS_PARSE:
                case PostgresParser.TS_TOKEN_TYPE:
                case PostgresParser.ARRAY_TO_TSVECTOR:
                case PostgresParser.GET_CURRENT_TS_CONFIG:
                case PostgresParser.NUMNODE:
                case PostgresParser.PLAINTO_TSQUERY:
                case PostgresParser.PHRASETO_TSQUERY:
                case PostgresParser.WEBSEARCH_TO_TSQUERY:
                case PostgresParser.QUERYTREE:
                case PostgresParser.SETWEIGHT:
                case PostgresParser.STRIP:
                case PostgresParser.TO_TSQUERY:
                case PostgresParser.TO_TSVECTOR:
                case PostgresParser.JSON_TO_TSVECTOR:
                case PostgresParser.TS_DELETE:
                case PostgresParser.TS_FILTER:
                case PostgresParser.TS_HEADLINE:
                case PostgresParser.TS_RANK:
                case PostgresParser.TS_RANK_CD:
                case PostgresParser.TS_REWRITE:
                case PostgresParser.TSQUERY_PHRASE:
                case PostgresParser.TSVECTOR_TO_ARRAY:
                case PostgresParser.GENERATE_SERIES:
                case PostgresParser.GENERATE_SUBSCRIPTS:
                case PostgresParser.CORR:
                case PostgresParser.COVAR_POP:
                case PostgresParser.COVAR_SAMP:
                case PostgresParser.REGR_AVGX:
                case PostgresParser.REGR_AVGY:
                case PostgresParser.REGR_COUNT:
                case PostgresParser.REGR_INTERCEPT:
                case PostgresParser.REGR_R2:
                case PostgresParser.REGR_SLOPE:
                case PostgresParser.REGR_SXX:
                case PostgresParser.REGR_SXY:
                case PostgresParser.REGR_SYY:
                case PostgresParser.STDDEV:
                case PostgresParser.STDDEV_POP:
                case PostgresParser.STDDEV_SAMP:
                case PostgresParser.VARIANCE:
                case PostgresParser.VAR_POP:
                case PostgresParser.VAR_SAMP:
                case PostgresParser.ASCII:
                case PostgresParser.CHR:
                case PostgresParser.CONCAT:
                case PostgresParser.CONCAT_WS:
                case PostgresParser.FORMAT:
                case PostgresParser.INITCAP:
                case PostgresParser.LPAD:
                case PostgresParser.PARSE_IDENT:
                case PostgresParser.QUOTE_IDENT:
                case PostgresParser.QUOTE_LITERAL:
                case PostgresParser.QUOTE_NULLABLE:
                case PostgresParser.REGEXP_MATCH:
                case PostgresParser.REGEXP_MATCHES:
                case PostgresParser.REGEXP_REPLACE:
                case PostgresParser.REGEXP_SPLIT_TO_ARRAY:
                case PostgresParser.REGEXP_SPLIT_TO_TABLE:
                case PostgresParser.REPEAT:
                case PostgresParser.REPLACE:
                case PostgresParser.REVERSE:
                case PostgresParser.RPAD:
                case PostgresParser.SPLIT_PART:
                case PostgresParser.STRPOS:
                case PostgresParser.STARTS_WITH:
                case PostgresParser.STRING_TO_ARRAY:
                case PostgresParser.STRING_TO_TABLE:
                case PostgresParser.TO_ASCII:
                case PostgresParser.TO_HEX:
                case PostgresParser.TRANSLATE:
                case PostgresParser.UNISTR:
                case PostgresParser.BIT_LENGTH:
                case PostgresParser.CHAR_LENGTH:
                case PostgresParser.CHARACTER_LENGTH:
                case PostgresParser.NORMALIZE:
                case PostgresParser.OCTET_LENGTH:
                case PostgresParser.OVERLAY:
                case PostgresParser.POSITION:
                case PostgresParser.SUBSTRING:
                case PostgresParser.TRIM:
                case PostgresParser.ACOS:
                case PostgresParser.ACOSD:
                case PostgresParser.ASIN:
                case PostgresParser.ASIND:
                case PostgresParser.ATAN:
                case PostgresParser.ATAND:
                case PostgresParser.ATAN2:
                case PostgresParser.ATAN2D:
                case PostgresParser.COS:
                case PostgresParser.COSD:
                case PostgresParser.COT:
                case PostgresParser.COTD:
                case PostgresParser.SIN:
                case PostgresParser.SIND:
                case PostgresParser.TAN:
                case PostgresParser.TAND:
                case PostgresParser.GEN_RANDOM_UUID:
                case PostgresParser.ROW_NUMBER:
                case PostgresParser.RANK:
                case PostgresParser.DENSE_RANK:
                case PostgresParser.PERCENT_RANK:
                case PostgresParser.CUME_DIST:
                case PostgresParser.NTILE:
                case PostgresParser.LAG:
                case PostgresParser.LEAD:
                case PostgresParser.FIRST_VALUE:
                case PostgresParser.LAST_VALUE:
                case PostgresParser.NTH_VALUE:
                case PostgresParser.XMLCOMMENT:
                case PostgresParser.XMLCONCAT:
                case PostgresParser.XMLELEMENT:
                case PostgresParser.XMLFOREST:
                case PostgresParser.XMLPI:
                case PostgresParser.XMLROOT:
                case PostgresParser.XMLEXISTS:
                case PostgresParser.XML_IS_WELL_FORMED:
                case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
                case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
                case PostgresParser.XPATH:
                case PostgresParser.XPATH_EXISTS:
                case PostgresParser.XMLTABLE:
                case PostgresParser.TABLE_TO_XML:
                case PostgresParser.LEFT_PAREN:
                case PostgresParser.PLUS:
                case PostgresParser.MINUS:
                case PostgresParser.MULTIPLY:
                case PostgresParser.LESS_LESS:
                case PostgresParser.GREATER_GREATER:
                case PostgresParser.HASH_SIGN:
                case PostgresParser.OP_CHARS:
                case PostgresParser.NUMBER_LITERAL:
                case PostgresParser.REAL_NUMBER:
                case PostgresParser.DOLLAR_NUMBER:
                case PostgresParser.Identifier:
                case PostgresParser.QuotedIdentifier:
                case PostgresParser.Character_String_Literal:
                case PostgresParser.BeginDollarStringConstant:
                  {
                    this.state = 1327;
                    this.vex(0);
                  }
                  break;
                case PostgresParser.DEFAULT:
                  {
                    this.state = 1328;
                    this.match(PostgresParser.DEFAULT);
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 1335;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1336;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public orderby_clause(): Orderby_clauseContext {
    let _localctx: Orderby_clauseContext = new Orderby_clauseContext(this._ctx, this.state);
    this.enterRule(_localctx, 126, PostgresParser.RULE_orderby_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1338;
        this.match(PostgresParser.ORDER);
        this.state = 1339;
        this.match(PostgresParser.BY);
        this.state = 1340;
        this.sort_specifier_list();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public sort_specifier_list(): Sort_specifier_listContext {
    let _localctx: Sort_specifier_listContext = new Sort_specifier_listContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 128, PostgresParser.RULE_sort_specifier_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1342;
        this.sort_specifier();
        this.state = 1347;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1343;
              this.match(PostgresParser.COMMA);
              this.state = 1344;
              this.sort_specifier();
            }
          }
          this.state = 1349;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public sort_specifier(): Sort_specifierContext {
    let _localctx: Sort_specifierContext = new Sort_specifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 130, PostgresParser.RULE_sort_specifier);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1350;
        _localctx._key = this.vex(0);
        this.state = 1352;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
          case 1:
            {
              this.state = 1351;
              _localctx._opclass = this.schema_qualified_name();
            }
            break;
        }
        this.state = 1355;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PostgresParser.DESC) |
              (1 << PostgresParser.ASC) |
              (1 << PostgresParser.USING))) !==
            0
        ) {
          {
            this.state = 1354;
            _localctx._order = this.order_specification();
          }
        }

        this.state = 1358;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.NULLS) {
          {
            this.state = 1357;
            _localctx._null_order = this.null_ordering();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public order_specification(): Order_specificationContext {
    let _localctx: Order_specificationContext = new Order_specificationContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 132, PostgresParser.RULE_order_specification);
    try {
      this.state = 1364;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.ASC:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1360;
            this.match(PostgresParser.ASC);
          }
          break;
        case PostgresParser.DESC:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1361;
            this.match(PostgresParser.DESC);
          }
          break;
        case PostgresParser.USING:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1362;
            this.match(PostgresParser.USING);
            this.state = 1363;
            this.all_op_ref();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public null_ordering(): Null_orderingContext {
    let _localctx: Null_orderingContext = new Null_orderingContext(this._ctx, this.state);
    this.enterRule(_localctx, 134, PostgresParser.RULE_null_ordering);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1366;
        this.match(PostgresParser.NULLS);
        this.state = 1367;
        _la = this._input.LA(1);
        if (!(_la === PostgresParser.FIRST || _la === PostgresParser.LAST)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public dollar_number(): Dollar_numberContext {
    let _localctx: Dollar_numberContext = new Dollar_numberContext(this._ctx, this.state);
    this.enterRule(_localctx, 136, PostgresParser.RULE_dollar_number);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1369;
        this.match(PostgresParser.DOLLAR_NUMBER);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public names_in_parens(): Names_in_parensContext {
    let _localctx: Names_in_parensContext = new Names_in_parensContext(this._ctx, this.state);
    this.enterRule(_localctx, 138, PostgresParser.RULE_names_in_parens);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1371;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1372;
        this.names_references();
        this.state = 1373;
        this.match(PostgresParser.RIGHT_PAREN);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public names_references(): Names_referencesContext {
    let _localctx: Names_referencesContext = new Names_referencesContext(this._ctx, this.state);
    this.enterRule(_localctx, 140, PostgresParser.RULE_names_references);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1375;
        this.identifier();
        this.state = 1380;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1376;
              this.match(PostgresParser.COMMA);
              this.state = 1377;
              this.identifier();
            }
          }
          this.state = 1382;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public op_chars(): Op_charsContext {
    let _localctx: Op_charsContext = new Op_charsContext(this._ctx, this.state);
    this.enterRule(_localctx, 142, PostgresParser.RULE_op_chars);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1383;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 517) & ~0x1f) === 0 &&
            ((1 << (_la - 517)) &
              ((1 << (PostgresParser.LESS_LESS - 517)) |
                (1 << (PostgresParser.GREATER_GREATER - 517)) |
                (1 << (PostgresParser.HASH_SIGN - 517)) |
                (1 << (PostgresParser.OP_CHARS - 517)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public partition_by_columns(): Partition_by_columnsContext {
    let _localctx: Partition_by_columnsContext = new Partition_by_columnsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 144, PostgresParser.RULE_partition_by_columns);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1385;
        this.match(PostgresParser.PARTITION);
        this.state = 1386;
        this.match(PostgresParser.BY);
        this.state = 1387;
        this.vex(0);
        this.state = 1392;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1388;
              this.match(PostgresParser.COMMA);
              this.state = 1389;
              this.vex(0);
            }
          }
          this.state = 1394;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public collate_identifier(): Collate_identifierContext {
    let _localctx: Collate_identifierContext = new Collate_identifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 146, PostgresParser.RULE_collate_identifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1395;
        this.match(PostgresParser.COLLATE);
        this.state = 1396;
        _localctx._collation = this.identifier();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indirection(): IndirectionContext {
    let _localctx: IndirectionContext = new IndirectionContext(this._ctx, this.state);
    this.enterRule(_localctx, 148, PostgresParser.RULE_indirection);
    let _la: number;
    try {
      this.state = 1413;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1398;
            this.match(PostgresParser.DOT);
            this.state = 1399;
            this.col_label();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1400;
            this.match(PostgresParser.LEFT_BRACKET);
            this.state = 1401;
            this.vex(0);
            this.state = 1402;
            this.match(PostgresParser.RIGHT_BRACKET);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1404;
            this.match(PostgresParser.LEFT_BRACKET);
            this.state = 1406;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.RECURSIVE) |
                    (1 << PostgresParser.BY) |
                    (1 << PostgresParser.ALL) |
                    (1 << PostgresParser.ANY) |
                    (1 << PostgresParser.SOME) |
                    (1 << PostgresParser.OPERATOR) |
                    (1 << PostgresParser.NULLS) |
                    (1 << PostgresParser.FIRST) |
                    (1 << PostgresParser.LAST) |
                    (1 << PostgresParser.LEFT) |
                    (1 << PostgresParser.RIGHT) |
                    (1 << PostgresParser.FULL) |
                    (1 << PostgresParser.INNER) |
                    (1 << PostgresParser.OUTER) |
                    (1 << PostgresParser.CROSS))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (PostgresParser.JOIN - 32)) |
                    (1 << (PostgresParser.ON - 32)) |
                    (1 << (PostgresParser.VALUES - 32)) |
                    (1 << (PostgresParser.NATURAL - 32)) |
                    (1 << (PostgresParser.TABLESAMPLE - 32)) |
                    (1 << (PostgresParser.INTERVAL - 32)) |
                    (1 << (PostgresParser.SECOND - 32)) |
                    (1 << (PostgresParser.MINUTE - 32)) |
                    (1 << (PostgresParser.HOUR - 32)) |
                    (1 << (PostgresParser.DAY - 32)) |
                    (1 << (PostgresParser.MONTH - 32)) |
                    (1 << (PostgresParser.YEAR - 32)) |
                    (1 << (PostgresParser.TREAT - 32)) |
                    (1 << (PostgresParser.CASE - 32)) |
                    (1 << (PostgresParser.NOT - 32)) |
                    (1 << (PostgresParser.IS - 32)) |
                    (1 << (PostgresParser.NULL - 32)) |
                    (1 << (PostgresParser.ISNULL - 32)) |
                    (1 << (PostgresParser.NOTNULL - 32)))) !==
                  0) ||
              (((_la - 64) & ~0x1f) === 0 &&
                ((1 << (_la - 64)) &
                  ((1 << (PostgresParser.TRUE - 64)) |
                    (1 << (PostgresParser.FALSE - 64)) |
                    (1 << (PostgresParser.BETWEEN - 64)) |
                    (1 << (PostgresParser.LIKE - 64)) |
                    (1 << (PostgresParser.ILIKE - 64)) |
                    (1 << (PostgresParser.ARRAY - 64)) |
                    (1 << (PostgresParser.BOOLEAN - 64)) |
                    (1 << (PostgresParser.SMALLINT - 64)) |
                    (1 << (PostgresParser.INT - 64)) |
                    (1 << (PostgresParser.INTEGER - 64)) |
                    (1 << (PostgresParser.BIGINT - 64)) |
                    (1 << (PostgresParser.DEC - 64)) |
                    (1 << (PostgresParser.DECIMAL - 64)) |
                    (1 << (PostgresParser.DOUBLE - 64)) |
                    (1 << (PostgresParser.FLOAT - 64)) |
                    (1 << (PostgresParser.NUMERIC - 64)) |
                    (1 << (PostgresParser.PRECISION - 64)) |
                    (1 << (PostgresParser.REAL - 64)) |
                    (1 << (PostgresParser.BIT - 64)) |
                    (1 << (PostgresParser.VARYING - 64)) |
                    (1 << (PostgresParser.NATIONAL - 64)) |
                    (1 << (PostgresParser.CHARACTER - 64)) |
                    (1 << (PostgresParser.CHAR - 64)) |
                    (1 << (PostgresParser.NCHAR - 64)) |
                    (1 << (PostgresParser.TIME - 64)) |
                    (1 << (PostgresParser.WITHOUT - 64)) |
                    (1 << (PostgresParser.WITHIN - 64)) |
                    (1 << (PostgresParser.ZONE - 64)) |
                    (1 << (PostgresParser.TIMESTAMP - 64)) |
                    (1 << (PostgresParser.VARCHAR - 64)) |
                    (1 << (PostgresParser.SETOF - 64)))) !==
                  0) ||
              (((_la - 96) & ~0x1f) === 0 &&
                ((1 << (_la - 96)) &
                  ((1 << (PostgresParser.OF - 96)) |
                    (1 << (PostgresParser.OVER - 96)) |
                    (1 << (PostgresParser.PARTITION - 96)) |
                    (1 << (PostgresParser.ROWS - 96)) |
                    (1 << (PostgresParser.RANGE - 96)) |
                    (1 << (PostgresParser.GROUPS - 96)) |
                    (1 << (PostgresParser.UNBOUNDED - 96)) |
                    (1 << (PostgresParser.PRECEDING - 96)) |
                    (1 << (PostgresParser.FOLLOWING - 96)) |
                    (1 << (PostgresParser.CURRENT - 96)) |
                    (1 << (PostgresParser.ROW - 96)) |
                    (1 << (PostgresParser.EXCLUDE - 96)) |
                    (1 << (PostgresParser.TIES - 96)) |
                    (1 << (PostgresParser.NO - 96)) |
                    (1 << (PostgresParser.OTHERS - 96)) |
                    (1 << (PostgresParser.ROLLUP - 96)) |
                    (1 << (PostgresParser.GROUPING - 96)) |
                    (1 << (PostgresParser.SETS - 96)) |
                    (1 << (PostgresParser.OVERLAPS - 96)) |
                    (1 << (PostgresParser.AT - 96)) |
                    (1 << (PostgresParser.SIMILAR - 96)) |
                    (1 << (PostgresParser.ESCAPE - 96)) |
                    (1 << (PostgresParser.NEXT - 96)) |
                    (1 << (PostgresParser.DOCUMENT - 96)))) !==
                  0) ||
              (((_la - 128) & ~0x1f) === 0 &&
                ((1 << (_la - 128)) &
                  ((1 << (PostgresParser.UNKNOWN - 128)) |
                    (1 << (PostgresParser.EXISTS - 128)) |
                    (1 << (PostgresParser.FILTER - 128)) |
                    (1 << (PostgresParser.ALIAS - 128)) |
                    (1 << (PostgresParser.PATH - 128)) |
                    (1 << (PostgresParser.POW - 128)) |
                    (1 << (PostgresParser.DATE - 128)) |
                    (1 << (PostgresParser.ARRAY_AGG - 128)) |
                    (1 << (PostgresParser.AVG - 128)) |
                    (1 << (PostgresParser.BIT_AND - 128)) |
                    (1 << (PostgresParser.BIT_OR - 128)) |
                    (1 << (PostgresParser.BIT_XOR - 128)) |
                    (1 << (PostgresParser.BOOL_AND - 128)) |
                    (1 << (PostgresParser.BOOL_OR - 128)) |
                    (1 << (PostgresParser.COUNT - 128)) |
                    (1 << (PostgresParser.EVERY - 128)) |
                    (1 << (PostgresParser.JSON_AGG - 128)) |
                    (1 << (PostgresParser.JSON_OBJECT_AGG - 128)))) !==
                  0) ||
              (((_la - 160) & ~0x1f) === 0 &&
                ((1 << (_la - 160)) &
                  ((1 << (PostgresParser.MAX - 160)) |
                    (1 << (PostgresParser.MIN - 160)) |
                    (1 << (PostgresParser.RANGE_AGG - 160)) |
                    (1 << (PostgresParser.RANGE_INTERSECT_AGG - 160)) |
                    (1 << (PostgresParser.STRING_AGG - 160)) |
                    (1 << (PostgresParser.SUM - 160)) |
                    (1 << (PostgresParser.XMLAGG - 160)) |
                    (1 << (PostgresParser.ARRAY_APPEND - 160)) |
                    (1 << (PostgresParser.ARRAY_CAT - 160)) |
                    (1 << (PostgresParser.ARRAY_DIMS - 160)) |
                    (1 << (PostgresParser.ARRAY_FILL - 160)) |
                    (1 << (PostgresParser.ARRAY_LENGTH - 160)) |
                    (1 << (PostgresParser.ARRAY_LOWER - 160)) |
                    (1 << (PostgresParser.ARRAY_NDIMS - 160)) |
                    (1 << (PostgresParser.ARRAY_POSITION - 160)) |
                    (1 << (PostgresParser.ARRAY_PREPEND - 160)) |
                    (1 << (PostgresParser.ARRAY_REMOVE - 160)) |
                    (1 << (PostgresParser.ARRAY_REPLACE - 160)) |
                    (1 << (PostgresParser.ARRAY_TO_STRING - 160)) |
                    (1 << (PostgresParser.ARRAY_UPPER - 160)) |
                    (1 << (PostgresParser.CARDINALITY - 160)) |
                    (1 << (PostgresParser.TRIM_ARRAY - 160)) |
                    (1 << (PostgresParser.UNNEST - 160)) |
                    (1 << (PostgresParser.CONVERT - 160)) |
                    (1 << (PostgresParser.CONVERT_FROM - 160)) |
                    (1 << (PostgresParser.CONVERT_TO - 160)) |
                    (1 << (PostgresParser.ENCODE - 160)) |
                    (1 << (PostgresParser.DECODE - 160)) |
                    (1 << (PostgresParser.BIT_COUNT - 160)) |
                    (1 << (PostgresParser.BTRIM - 160)) |
                    (1 << (PostgresParser.GET_BIT - 160)) |
                    (1 << (PostgresParser.GET_BYTE - 160)))) !==
                  0) ||
              (((_la - 192) & ~0x1f) === 0 &&
                ((1 << (_la - 192)) &
                  ((1 << (PostgresParser.LENGTH - 192)) |
                    (1 << (PostgresParser.LTRIM - 192)) |
                    (1 << (PostgresParser.MD5 - 192)) |
                    (1 << (PostgresParser.RTRIM - 192)) |
                    (1 << (PostgresParser.SET_BIT - 192)) |
                    (1 << (PostgresParser.SET_BYTE - 192)) |
                    (1 << (PostgresParser.SHA224 - 192)) |
                    (1 << (PostgresParser.SHA256 - 192)) |
                    (1 << (PostgresParser.SHA384 - 192)) |
                    (1 << (PostgresParser.SHA512 - 192)) |
                    (1 << (PostgresParser.SUBSTR - 192)) |
                    (1 << (PostgresParser.NUM_NONNULLS - 192)) |
                    (1 << (PostgresParser.NUM_NULLS - 192)) |
                    (1 << (PostgresParser.COALESCE - 192)) |
                    (1 << (PostgresParser.NULLIF - 192)) |
                    (1 << (PostgresParser.GREATEST - 192)) |
                    (1 << (PostgresParser.LEAST - 192)) |
                    (1 << (PostgresParser.AGE - 192)) |
                    (1 << (PostgresParser.CLOCK_TIMESTAMP - 192)) |
                    (1 << (PostgresParser.CURRENT_DATE - 192)) |
                    (1 << (PostgresParser.CURRENT_TIME - 192)) |
                    (1 << (PostgresParser.CURRENT_TIMESTAMP - 192)) |
                    (1 << (PostgresParser.DATE_BIN - 192)) |
                    (1 << (PostgresParser.DATE_PART - 192)) |
                    (1 << (PostgresParser.DATE_TRUNC - 192)) |
                    (1 << (PostgresParser.EXTRACT - 192)) |
                    (1 << (PostgresParser.ISFINITE - 192)) |
                    (1 << (PostgresParser.JUSTIFY_DAYS - 192)) |
                    (1 << (PostgresParser.JUSTIFY_HOURS - 192)) |
                    (1 << (PostgresParser.JUSTIFY_INTERVAL - 192)) |
                    (1 << (PostgresParser.LOCALTIME - 192)) |
                    (1 << (PostgresParser.LOCALTIMESTAMP - 192)))) !==
                  0) ||
              (((_la - 224) & ~0x1f) === 0 &&
                ((1 << (_la - 224)) &
                  ((1 << (PostgresParser.MAKE_DATE - 224)) |
                    (1 << (PostgresParser.MAKE_INTERVAL - 224)) |
                    (1 << (PostgresParser.MAKE_TIME - 224)) |
                    (1 << (PostgresParser.MAKE_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 224)) |
                    (1 << (PostgresParser.NOW - 224)) |
                    (1 << (PostgresParser.STATEMENT_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.TIMEOFDAY - 224)) |
                    (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.ENUM_FIRST - 224)) |
                    (1 << (PostgresParser.ENUM_LAST - 224)) |
                    (1 << (PostgresParser.ENUM_RANGE - 224)) |
                    (1 << (PostgresParser.TO_CHAR - 224)) |
                    (1 << (PostgresParser.TO_DATE - 224)) |
                    (1 << (PostgresParser.TO_NUMBER - 224)) |
                    (1 << (PostgresParser.TO_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.BOX - 224)) |
                    (1 << (PostgresParser.CIRCLE - 224)) |
                    (1 << (PostgresParser.LINE - 224)) |
                    (1 << (PostgresParser.LSEG - 224)) |
                    (1 << (PostgresParser.POINT - 224)) |
                    (1 << (PostgresParser.POLYGON - 224)) |
                    (1 << (PostgresParser.AREA - 224)) |
                    (1 << (PostgresParser.CENTER - 224)) |
                    (1 << (PostgresParser.DIAGONAL - 224)) |
                    (1 << (PostgresParser.DIAMETER - 224)) |
                    (1 << (PostgresParser.HEIGHT - 224)) |
                    (1 << (PostgresParser.ISCLOSED - 224)) |
                    (1 << (PostgresParser.ISOPEN - 224)) |
                    (1 << (PostgresParser.NPOINTS - 224)) |
                    (1 << (PostgresParser.PCLOSE - 224)) |
                    (1 << (PostgresParser.POPEN - 224)))) !==
                  0) ||
              (((_la - 256) & ~0x1f) === 0 &&
                ((1 << (_la - 256)) &
                  ((1 << (PostgresParser.RADIUS - 256)) |
                    (1 << (PostgresParser.SLOPE - 256)) |
                    (1 << (PostgresParser.WIDTH - 256)) |
                    (1 << (PostgresParser.SINH - 256)) |
                    (1 << (PostgresParser.COSH - 256)) |
                    (1 << (PostgresParser.TANH - 256)) |
                    (1 << (PostgresParser.ASINH - 256)) |
                    (1 << (PostgresParser.ACOSH - 256)) |
                    (1 << (PostgresParser.ATANH - 256)) |
                    (1 << (PostgresParser.ABBREV - 256)) |
                    (1 << (PostgresParser.BROADCAST - 256)) |
                    (1 << (PostgresParser.FAMILY - 256)) |
                    (1 << (PostgresParser.HOST - 256)) |
                    (1 << (PostgresParser.HOSTMASK - 256)) |
                    (1 << (PostgresParser.INET_MERGE - 256)) |
                    (1 << (PostgresParser.INET_SAME_FAMILY - 256)) |
                    (1 << (PostgresParser.MASKLEN - 256)) |
                    (1 << (PostgresParser.NETMASK - 256)) |
                    (1 << (PostgresParser.NETWORK - 256)) |
                    (1 << (PostgresParser.SET_MASKLEN - 256)) |
                    (1 << (PostgresParser.TEXT - 256)) |
                    (1 << (PostgresParser.TRUNC - 256)) |
                    (1 << (PostgresParser.MACADDR8_SET7BIT - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_LENGTH - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 256)) |
                    (1 << (PostgresParser.JSON_EACH - 256)) |
                    (1 << (PostgresParser.JSONB_EACH - 256)) |
                    (1 << (PostgresParser.JSON_EACH_TEXT - 256)))) !==
                  0) ||
              (((_la - 288) & ~0x1f) === 0 &&
                ((1 << (_la - 288)) &
                  ((1 << (PostgresParser.JSONB_EACH_TEXT - 288)) |
                    (1 << (PostgresParser.JSON_EXTRACT_PATH - 288)) |
                    (1 << (PostgresParser.JSONB_EXTRACT_PATH - 288)) |
                    (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 288)) |
                    (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 288)) |
                    (1 << (PostgresParser.JSON_OBJECT_KEYS - 288)) |
                    (1 << (PostgresParser.JSONB_OBJECT_KEYS - 288)) |
                    (1 << (PostgresParser.JSON_POPULATE_RECORD - 288)) |
                    (1 << (PostgresParser.JSONB_POPULATE_RECORD - 288)) |
                    (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSON_TO_RECORD - 288)) |
                    (1 << (PostgresParser.JSONB_TO_RECORD - 288)) |
                    (1 << (PostgresParser.JSON_TO_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSONB_TO_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSON_STRIP_NULLS - 288)) |
                    (1 << (PostgresParser.JSONB_STRIP_NULLS - 288)) |
                    (1 << (PostgresParser.JSONB_SET - 288)) |
                    (1 << (PostgresParser.JSONB_SET_LAX - 288)) |
                    (1 << (PostgresParser.JSONB_INSERT - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_EXISTS - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_MATCH - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PRETTY - 288)) |
                    (1 << (PostgresParser.JSON_TYPEOF - 288)))) !==
                  0) ||
              (((_la - 320) & ~0x1f) === 0 &&
                ((1 << (_la - 320)) &
                  ((1 << (PostgresParser.JSONB_TYPEOF - 320)) |
                    (1 << (PostgresParser.TO_JSON - 320)) |
                    (1 << (PostgresParser.TO_JSONB - 320)) |
                    (1 << (PostgresParser.ARRAY_TO_JSON - 320)) |
                    (1 << (PostgresParser.ROW_TO_JSON - 320)) |
                    (1 << (PostgresParser.JSON_BUILD_ARRAY - 320)) |
                    (1 << (PostgresParser.JSONB_BUILD_ARRAY - 320)) |
                    (1 << (PostgresParser.JSON_BUILD_OBJECT - 320)) |
                    (1 << (PostgresParser.JSON_OBJECT - 320)) |
                    (1 << (PostgresParser.JSONB_OBJECT - 320)) |
                    (1 << (PostgresParser.ABS - 320)) |
                    (1 << (PostgresParser.CBRT - 320)) |
                    (1 << (PostgresParser.CEIL - 320)) |
                    (1 << (PostgresParser.DEGREES - 320)) |
                    (1 << (PostgresParser.DIV - 320)) |
                    (1 << (PostgresParser.EXP - 320)) |
                    (1 << (PostgresParser.FACTORIAL - 320)) |
                    (1 << (PostgresParser.FLOOR - 320)) |
                    (1 << (PostgresParser.GCD - 320)) |
                    (1 << (PostgresParser.LCM - 320)) |
                    (1 << (PostgresParser.LN - 320)) |
                    (1 << (PostgresParser.LOG - 320)) |
                    (1 << (PostgresParser.LOG10 - 320)) |
                    (1 << (PostgresParser.MIN_SCALE - 320)) |
                    (1 << (PostgresParser.MOD - 320)) |
                    (1 << (PostgresParser.PI - 320)) |
                    (1 << (PostgresParser.POWER - 320)) |
                    (1 << (PostgresParser.RADIANS - 320)) |
                    (1 << (PostgresParser.ROUND - 320)) |
                    (1 << (PostgresParser.SCALE - 320)) |
                    (1 << (PostgresParser.SIGN - 320)) |
                    (1 << (PostgresParser.SQRT - 320)))) !==
                  0) ||
              (((_la - 352) & ~0x1f) === 0 &&
                ((1 << (_la - 352)) &
                  ((1 << (PostgresParser.TRIM_SCALE - 352)) |
                    (1 << (PostgresParser.WIDTH_BUCKET - 352)) |
                    (1 << (PostgresParser.MODE - 352)) |
                    (1 << (PostgresParser.PERCENTILE_CONT - 352)) |
                    (1 << (PostgresParser.PERCENTILE_DISC - 352)) |
                    (1 << (PostgresParser.RANDOM - 352)) |
                    (1 << (PostgresParser.SETSEED - 352)) |
                    (1 << (PostgresParser.LOWER - 352)) |
                    (1 << (PostgresParser.UPPER - 352)) |
                    (1 << (PostgresParser.ISEMPTY - 352)) |
                    (1 << (PostgresParser.LOWER_INC - 352)) |
                    (1 << (PostgresParser.UPPER_INC - 352)) |
                    (1 << (PostgresParser.LOWER_INF - 352)) |
                    (1 << (PostgresParser.UPPER_INF - 352)) |
                    (1 << (PostgresParser.RANGE_MERGE - 352)) |
                    (1 << (PostgresParser.MULTIRANGE - 352)) |
                    (1 << (PostgresParser.TS_DEBUG - 352)) |
                    (1 << (PostgresParser.TS_LEXIZE - 352)) |
                    (1 << (PostgresParser.TS_PARSE - 352)) |
                    (1 << (PostgresParser.TS_TOKEN_TYPE - 352)) |
                    (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 352)) |
                    (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 352)) |
                    (1 << (PostgresParser.NUMNODE - 352)) |
                    (1 << (PostgresParser.PLAINTO_TSQUERY - 352)) |
                    (1 << (PostgresParser.PHRASETO_TSQUERY - 352)) |
                    (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 352)) |
                    (1 << (PostgresParser.QUERYTREE - 352)) |
                    (1 << (PostgresParser.SETWEIGHT - 352)) |
                    (1 << (PostgresParser.STRIP - 352)) |
                    (1 << (PostgresParser.TO_TSQUERY - 352)) |
                    (1 << (PostgresParser.TO_TSVECTOR - 352)) |
                    (1 << (PostgresParser.JSON_TO_TSVECTOR - 352)))) !==
                  0) ||
              (((_la - 384) & ~0x1f) === 0 &&
                ((1 << (_la - 384)) &
                  ((1 << (PostgresParser.TS_DELETE - 384)) |
                    (1 << (PostgresParser.TS_FILTER - 384)) |
                    (1 << (PostgresParser.TS_HEADLINE - 384)) |
                    (1 << (PostgresParser.TS_RANK - 384)) |
                    (1 << (PostgresParser.TS_RANK_CD - 384)) |
                    (1 << (PostgresParser.TS_REWRITE - 384)) |
                    (1 << (PostgresParser.TSQUERY_PHRASE - 384)) |
                    (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 384)) |
                    (1 << (PostgresParser.GENERATE_SERIES - 384)) |
                    (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 384)) |
                    (1 << (PostgresParser.CORR - 384)) |
                    (1 << (PostgresParser.COVAR_POP - 384)) |
                    (1 << (PostgresParser.COVAR_SAMP - 384)) |
                    (1 << (PostgresParser.REGR_AVGX - 384)) |
                    (1 << (PostgresParser.REGR_AVGY - 384)) |
                    (1 << (PostgresParser.REGR_COUNT - 384)) |
                    (1 << (PostgresParser.REGR_INTERCEPT - 384)) |
                    (1 << (PostgresParser.REGR_R2 - 384)) |
                    (1 << (PostgresParser.REGR_SLOPE - 384)) |
                    (1 << (PostgresParser.REGR_SXX - 384)) |
                    (1 << (PostgresParser.REGR_SXY - 384)) |
                    (1 << (PostgresParser.REGR_SYY - 384)) |
                    (1 << (PostgresParser.STDDEV - 384)) |
                    (1 << (PostgresParser.STDDEV_POP - 384)) |
                    (1 << (PostgresParser.STDDEV_SAMP - 384)) |
                    (1 << (PostgresParser.VARIANCE - 384)) |
                    (1 << (PostgresParser.VAR_POP - 384)) |
                    (1 << (PostgresParser.VAR_SAMP - 384)) |
                    (1 << (PostgresParser.ASCII - 384)) |
                    (1 << (PostgresParser.CHR - 384)) |
                    (1 << (PostgresParser.CONCAT - 384)) |
                    (1 << (PostgresParser.CONCAT_WS - 384)))) !==
                  0) ||
              (((_la - 416) & ~0x1f) === 0 &&
                ((1 << (_la - 416)) &
                  ((1 << (PostgresParser.FORMAT - 416)) |
                    (1 << (PostgresParser.INITCAP - 416)) |
                    (1 << (PostgresParser.LPAD - 416)) |
                    (1 << (PostgresParser.PARSE_IDENT - 416)) |
                    (1 << (PostgresParser.QUOTE_IDENT - 416)) |
                    (1 << (PostgresParser.QUOTE_LITERAL - 416)) |
                    (1 << (PostgresParser.QUOTE_NULLABLE - 416)) |
                    (1 << (PostgresParser.REGEXP_MATCH - 416)) |
                    (1 << (PostgresParser.REGEXP_MATCHES - 416)) |
                    (1 << (PostgresParser.REGEXP_REPLACE - 416)) |
                    (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 416)) |
                    (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 416)) |
                    (1 << (PostgresParser.REPEAT - 416)) |
                    (1 << (PostgresParser.REPLACE - 416)) |
                    (1 << (PostgresParser.REVERSE - 416)) |
                    (1 << (PostgresParser.RPAD - 416)) |
                    (1 << (PostgresParser.SPLIT_PART - 416)) |
                    (1 << (PostgresParser.STRPOS - 416)) |
                    (1 << (PostgresParser.STARTS_WITH - 416)) |
                    (1 << (PostgresParser.STRING_TO_ARRAY - 416)) |
                    (1 << (PostgresParser.STRING_TO_TABLE - 416)) |
                    (1 << (PostgresParser.TO_ASCII - 416)) |
                    (1 << (PostgresParser.TO_HEX - 416)) |
                    (1 << (PostgresParser.TRANSLATE - 416)) |
                    (1 << (PostgresParser.UNISTR - 416)) |
                    (1 << (PostgresParser.BIT_LENGTH - 416)) |
                    (1 << (PostgresParser.CHAR_LENGTH - 416)) |
                    (1 << (PostgresParser.CHARACTER_LENGTH - 416)) |
                    (1 << (PostgresParser.NORMALIZE - 416)) |
                    (1 << (PostgresParser.OCTET_LENGTH - 416)) |
                    (1 << (PostgresParser.OVERLAY - 416)) |
                    (1 << (PostgresParser.POSITION - 416)))) !==
                  0) ||
              (((_la - 448) & ~0x1f) === 0 &&
                ((1 << (_la - 448)) &
                  ((1 << (PostgresParser.SUBSTRING - 448)) |
                    (1 << (PostgresParser.TRIM - 448)) |
                    (1 << (PostgresParser.ACOS - 448)) |
                    (1 << (PostgresParser.ACOSD - 448)) |
                    (1 << (PostgresParser.ASIN - 448)) |
                    (1 << (PostgresParser.ASIND - 448)) |
                    (1 << (PostgresParser.ATAN - 448)) |
                    (1 << (PostgresParser.ATAND - 448)) |
                    (1 << (PostgresParser.ATAN2 - 448)) |
                    (1 << (PostgresParser.ATAN2D - 448)) |
                    (1 << (PostgresParser.COS - 448)) |
                    (1 << (PostgresParser.COSD - 448)) |
                    (1 << (PostgresParser.COT - 448)) |
                    (1 << (PostgresParser.COTD - 448)) |
                    (1 << (PostgresParser.SIN - 448)) |
                    (1 << (PostgresParser.SIND - 448)) |
                    (1 << (PostgresParser.TAN - 448)) |
                    (1 << (PostgresParser.TAND - 448)) |
                    (1 << (PostgresParser.GEN_RANDOM_UUID - 448)) |
                    (1 << (PostgresParser.ROW_NUMBER - 448)) |
                    (1 << (PostgresParser.RANK - 448)) |
                    (1 << (PostgresParser.DENSE_RANK - 448)) |
                    (1 << (PostgresParser.PERCENT_RANK - 448)) |
                    (1 << (PostgresParser.CUME_DIST - 448)) |
                    (1 << (PostgresParser.NTILE - 448)) |
                    (1 << (PostgresParser.LAG - 448)) |
                    (1 << (PostgresParser.LEAD - 448)) |
                    (1 << (PostgresParser.FIRST_VALUE - 448)) |
                    (1 << (PostgresParser.LAST_VALUE - 448)) |
                    (1 << (PostgresParser.NTH_VALUE - 448)) |
                    (1 << (PostgresParser.XMLCOMMENT - 448)) |
                    (1 << (PostgresParser.XMLCONCAT - 448)))) !==
                  0) ||
              (((_la - 480) & ~0x1f) === 0 &&
                ((1 << (_la - 480)) &
                  ((1 << (PostgresParser.XMLELEMENT - 480)) |
                    (1 << (PostgresParser.XMLFOREST - 480)) |
                    (1 << (PostgresParser.XMLPI - 480)) |
                    (1 << (PostgresParser.XMLROOT - 480)) |
                    (1 << (PostgresParser.XMLEXISTS - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 480)) |
                    (1 << (PostgresParser.XPATH - 480)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 480)) |
                    (1 << (PostgresParser.XMLTABLE - 480)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 480)) |
                    (1 << (PostgresParser.LEFT_PAREN - 480)) |
                    (1 << (PostgresParser.PLUS - 480)) |
                    (1 << (PostgresParser.MINUS - 480)) |
                    (1 << (PostgresParser.MULTIPLY - 480)))) !==
                  0) ||
              (((_la - 517) & ~0x1f) === 0 &&
                ((1 << (_la - 517)) &
                  ((1 << (PostgresParser.LESS_LESS - 517)) |
                    (1 << (PostgresParser.GREATER_GREATER - 517)) |
                    (1 << (PostgresParser.HASH_SIGN - 517)) |
                    (1 << (PostgresParser.OP_CHARS - 517)) |
                    (1 << (PostgresParser.NUMBER_LITERAL - 517)) |
                    (1 << (PostgresParser.REAL_NUMBER - 517)) |
                    (1 << (PostgresParser.DOLLAR_NUMBER - 517)) |
                    (1 << (PostgresParser.Identifier - 517)) |
                    (1 << (PostgresParser.QuotedIdentifier - 517)) |
                    (1 << (PostgresParser.Character_String_Literal - 517)) |
                    (1 << (PostgresParser.BeginDollarStringConstant - 517)))) !==
                  0)
            ) {
              {
                this.state = 1405;
                this.vex(0);
              }
            }

            this.state = 1408;
            this.match(PostgresParser.COLON);
            this.state = 1410;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.RECURSIVE) |
                    (1 << PostgresParser.BY) |
                    (1 << PostgresParser.ALL) |
                    (1 << PostgresParser.ANY) |
                    (1 << PostgresParser.SOME) |
                    (1 << PostgresParser.OPERATOR) |
                    (1 << PostgresParser.NULLS) |
                    (1 << PostgresParser.FIRST) |
                    (1 << PostgresParser.LAST) |
                    (1 << PostgresParser.LEFT) |
                    (1 << PostgresParser.RIGHT) |
                    (1 << PostgresParser.FULL) |
                    (1 << PostgresParser.INNER) |
                    (1 << PostgresParser.OUTER) |
                    (1 << PostgresParser.CROSS))) !==
                  0) ||
              (((_la - 32) & ~0x1f) === 0 &&
                ((1 << (_la - 32)) &
                  ((1 << (PostgresParser.JOIN - 32)) |
                    (1 << (PostgresParser.ON - 32)) |
                    (1 << (PostgresParser.VALUES - 32)) |
                    (1 << (PostgresParser.NATURAL - 32)) |
                    (1 << (PostgresParser.TABLESAMPLE - 32)) |
                    (1 << (PostgresParser.INTERVAL - 32)) |
                    (1 << (PostgresParser.SECOND - 32)) |
                    (1 << (PostgresParser.MINUTE - 32)) |
                    (1 << (PostgresParser.HOUR - 32)) |
                    (1 << (PostgresParser.DAY - 32)) |
                    (1 << (PostgresParser.MONTH - 32)) |
                    (1 << (PostgresParser.YEAR - 32)) |
                    (1 << (PostgresParser.TREAT - 32)) |
                    (1 << (PostgresParser.CASE - 32)) |
                    (1 << (PostgresParser.NOT - 32)) |
                    (1 << (PostgresParser.IS - 32)) |
                    (1 << (PostgresParser.NULL - 32)) |
                    (1 << (PostgresParser.ISNULL - 32)) |
                    (1 << (PostgresParser.NOTNULL - 32)))) !==
                  0) ||
              (((_la - 64) & ~0x1f) === 0 &&
                ((1 << (_la - 64)) &
                  ((1 << (PostgresParser.TRUE - 64)) |
                    (1 << (PostgresParser.FALSE - 64)) |
                    (1 << (PostgresParser.BETWEEN - 64)) |
                    (1 << (PostgresParser.LIKE - 64)) |
                    (1 << (PostgresParser.ILIKE - 64)) |
                    (1 << (PostgresParser.ARRAY - 64)) |
                    (1 << (PostgresParser.BOOLEAN - 64)) |
                    (1 << (PostgresParser.SMALLINT - 64)) |
                    (1 << (PostgresParser.INT - 64)) |
                    (1 << (PostgresParser.INTEGER - 64)) |
                    (1 << (PostgresParser.BIGINT - 64)) |
                    (1 << (PostgresParser.DEC - 64)) |
                    (1 << (PostgresParser.DECIMAL - 64)) |
                    (1 << (PostgresParser.DOUBLE - 64)) |
                    (1 << (PostgresParser.FLOAT - 64)) |
                    (1 << (PostgresParser.NUMERIC - 64)) |
                    (1 << (PostgresParser.PRECISION - 64)) |
                    (1 << (PostgresParser.REAL - 64)) |
                    (1 << (PostgresParser.BIT - 64)) |
                    (1 << (PostgresParser.VARYING - 64)) |
                    (1 << (PostgresParser.NATIONAL - 64)) |
                    (1 << (PostgresParser.CHARACTER - 64)) |
                    (1 << (PostgresParser.CHAR - 64)) |
                    (1 << (PostgresParser.NCHAR - 64)) |
                    (1 << (PostgresParser.TIME - 64)) |
                    (1 << (PostgresParser.WITHOUT - 64)) |
                    (1 << (PostgresParser.WITHIN - 64)) |
                    (1 << (PostgresParser.ZONE - 64)) |
                    (1 << (PostgresParser.TIMESTAMP - 64)) |
                    (1 << (PostgresParser.VARCHAR - 64)) |
                    (1 << (PostgresParser.SETOF - 64)))) !==
                  0) ||
              (((_la - 96) & ~0x1f) === 0 &&
                ((1 << (_la - 96)) &
                  ((1 << (PostgresParser.OF - 96)) |
                    (1 << (PostgresParser.OVER - 96)) |
                    (1 << (PostgresParser.PARTITION - 96)) |
                    (1 << (PostgresParser.ROWS - 96)) |
                    (1 << (PostgresParser.RANGE - 96)) |
                    (1 << (PostgresParser.GROUPS - 96)) |
                    (1 << (PostgresParser.UNBOUNDED - 96)) |
                    (1 << (PostgresParser.PRECEDING - 96)) |
                    (1 << (PostgresParser.FOLLOWING - 96)) |
                    (1 << (PostgresParser.CURRENT - 96)) |
                    (1 << (PostgresParser.ROW - 96)) |
                    (1 << (PostgresParser.EXCLUDE - 96)) |
                    (1 << (PostgresParser.TIES - 96)) |
                    (1 << (PostgresParser.NO - 96)) |
                    (1 << (PostgresParser.OTHERS - 96)) |
                    (1 << (PostgresParser.ROLLUP - 96)) |
                    (1 << (PostgresParser.GROUPING - 96)) |
                    (1 << (PostgresParser.SETS - 96)) |
                    (1 << (PostgresParser.OVERLAPS - 96)) |
                    (1 << (PostgresParser.AT - 96)) |
                    (1 << (PostgresParser.SIMILAR - 96)) |
                    (1 << (PostgresParser.ESCAPE - 96)) |
                    (1 << (PostgresParser.NEXT - 96)) |
                    (1 << (PostgresParser.DOCUMENT - 96)))) !==
                  0) ||
              (((_la - 128) & ~0x1f) === 0 &&
                ((1 << (_la - 128)) &
                  ((1 << (PostgresParser.UNKNOWN - 128)) |
                    (1 << (PostgresParser.EXISTS - 128)) |
                    (1 << (PostgresParser.FILTER - 128)) |
                    (1 << (PostgresParser.ALIAS - 128)) |
                    (1 << (PostgresParser.PATH - 128)) |
                    (1 << (PostgresParser.POW - 128)) |
                    (1 << (PostgresParser.DATE - 128)) |
                    (1 << (PostgresParser.ARRAY_AGG - 128)) |
                    (1 << (PostgresParser.AVG - 128)) |
                    (1 << (PostgresParser.BIT_AND - 128)) |
                    (1 << (PostgresParser.BIT_OR - 128)) |
                    (1 << (PostgresParser.BIT_XOR - 128)) |
                    (1 << (PostgresParser.BOOL_AND - 128)) |
                    (1 << (PostgresParser.BOOL_OR - 128)) |
                    (1 << (PostgresParser.COUNT - 128)) |
                    (1 << (PostgresParser.EVERY - 128)) |
                    (1 << (PostgresParser.JSON_AGG - 128)) |
                    (1 << (PostgresParser.JSON_OBJECT_AGG - 128)))) !==
                  0) ||
              (((_la - 160) & ~0x1f) === 0 &&
                ((1 << (_la - 160)) &
                  ((1 << (PostgresParser.MAX - 160)) |
                    (1 << (PostgresParser.MIN - 160)) |
                    (1 << (PostgresParser.RANGE_AGG - 160)) |
                    (1 << (PostgresParser.RANGE_INTERSECT_AGG - 160)) |
                    (1 << (PostgresParser.STRING_AGG - 160)) |
                    (1 << (PostgresParser.SUM - 160)) |
                    (1 << (PostgresParser.XMLAGG - 160)) |
                    (1 << (PostgresParser.ARRAY_APPEND - 160)) |
                    (1 << (PostgresParser.ARRAY_CAT - 160)) |
                    (1 << (PostgresParser.ARRAY_DIMS - 160)) |
                    (1 << (PostgresParser.ARRAY_FILL - 160)) |
                    (1 << (PostgresParser.ARRAY_LENGTH - 160)) |
                    (1 << (PostgresParser.ARRAY_LOWER - 160)) |
                    (1 << (PostgresParser.ARRAY_NDIMS - 160)) |
                    (1 << (PostgresParser.ARRAY_POSITION - 160)) |
                    (1 << (PostgresParser.ARRAY_PREPEND - 160)) |
                    (1 << (PostgresParser.ARRAY_REMOVE - 160)) |
                    (1 << (PostgresParser.ARRAY_REPLACE - 160)) |
                    (1 << (PostgresParser.ARRAY_TO_STRING - 160)) |
                    (1 << (PostgresParser.ARRAY_UPPER - 160)) |
                    (1 << (PostgresParser.CARDINALITY - 160)) |
                    (1 << (PostgresParser.TRIM_ARRAY - 160)) |
                    (1 << (PostgresParser.UNNEST - 160)) |
                    (1 << (PostgresParser.CONVERT - 160)) |
                    (1 << (PostgresParser.CONVERT_FROM - 160)) |
                    (1 << (PostgresParser.CONVERT_TO - 160)) |
                    (1 << (PostgresParser.ENCODE - 160)) |
                    (1 << (PostgresParser.DECODE - 160)) |
                    (1 << (PostgresParser.BIT_COUNT - 160)) |
                    (1 << (PostgresParser.BTRIM - 160)) |
                    (1 << (PostgresParser.GET_BIT - 160)) |
                    (1 << (PostgresParser.GET_BYTE - 160)))) !==
                  0) ||
              (((_la - 192) & ~0x1f) === 0 &&
                ((1 << (_la - 192)) &
                  ((1 << (PostgresParser.LENGTH - 192)) |
                    (1 << (PostgresParser.LTRIM - 192)) |
                    (1 << (PostgresParser.MD5 - 192)) |
                    (1 << (PostgresParser.RTRIM - 192)) |
                    (1 << (PostgresParser.SET_BIT - 192)) |
                    (1 << (PostgresParser.SET_BYTE - 192)) |
                    (1 << (PostgresParser.SHA224 - 192)) |
                    (1 << (PostgresParser.SHA256 - 192)) |
                    (1 << (PostgresParser.SHA384 - 192)) |
                    (1 << (PostgresParser.SHA512 - 192)) |
                    (1 << (PostgresParser.SUBSTR - 192)) |
                    (1 << (PostgresParser.NUM_NONNULLS - 192)) |
                    (1 << (PostgresParser.NUM_NULLS - 192)) |
                    (1 << (PostgresParser.COALESCE - 192)) |
                    (1 << (PostgresParser.NULLIF - 192)) |
                    (1 << (PostgresParser.GREATEST - 192)) |
                    (1 << (PostgresParser.LEAST - 192)) |
                    (1 << (PostgresParser.AGE - 192)) |
                    (1 << (PostgresParser.CLOCK_TIMESTAMP - 192)) |
                    (1 << (PostgresParser.CURRENT_DATE - 192)) |
                    (1 << (PostgresParser.CURRENT_TIME - 192)) |
                    (1 << (PostgresParser.CURRENT_TIMESTAMP - 192)) |
                    (1 << (PostgresParser.DATE_BIN - 192)) |
                    (1 << (PostgresParser.DATE_PART - 192)) |
                    (1 << (PostgresParser.DATE_TRUNC - 192)) |
                    (1 << (PostgresParser.EXTRACT - 192)) |
                    (1 << (PostgresParser.ISFINITE - 192)) |
                    (1 << (PostgresParser.JUSTIFY_DAYS - 192)) |
                    (1 << (PostgresParser.JUSTIFY_HOURS - 192)) |
                    (1 << (PostgresParser.JUSTIFY_INTERVAL - 192)) |
                    (1 << (PostgresParser.LOCALTIME - 192)) |
                    (1 << (PostgresParser.LOCALTIMESTAMP - 192)))) !==
                  0) ||
              (((_la - 224) & ~0x1f) === 0 &&
                ((1 << (_la - 224)) &
                  ((1 << (PostgresParser.MAKE_DATE - 224)) |
                    (1 << (PostgresParser.MAKE_INTERVAL - 224)) |
                    (1 << (PostgresParser.MAKE_TIME - 224)) |
                    (1 << (PostgresParser.MAKE_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 224)) |
                    (1 << (PostgresParser.NOW - 224)) |
                    (1 << (PostgresParser.STATEMENT_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.TIMEOFDAY - 224)) |
                    (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.ENUM_FIRST - 224)) |
                    (1 << (PostgresParser.ENUM_LAST - 224)) |
                    (1 << (PostgresParser.ENUM_RANGE - 224)) |
                    (1 << (PostgresParser.TO_CHAR - 224)) |
                    (1 << (PostgresParser.TO_DATE - 224)) |
                    (1 << (PostgresParser.TO_NUMBER - 224)) |
                    (1 << (PostgresParser.TO_TIMESTAMP - 224)) |
                    (1 << (PostgresParser.BOX - 224)) |
                    (1 << (PostgresParser.CIRCLE - 224)) |
                    (1 << (PostgresParser.LINE - 224)) |
                    (1 << (PostgresParser.LSEG - 224)) |
                    (1 << (PostgresParser.POINT - 224)) |
                    (1 << (PostgresParser.POLYGON - 224)) |
                    (1 << (PostgresParser.AREA - 224)) |
                    (1 << (PostgresParser.CENTER - 224)) |
                    (1 << (PostgresParser.DIAGONAL - 224)) |
                    (1 << (PostgresParser.DIAMETER - 224)) |
                    (1 << (PostgresParser.HEIGHT - 224)) |
                    (1 << (PostgresParser.ISCLOSED - 224)) |
                    (1 << (PostgresParser.ISOPEN - 224)) |
                    (1 << (PostgresParser.NPOINTS - 224)) |
                    (1 << (PostgresParser.PCLOSE - 224)) |
                    (1 << (PostgresParser.POPEN - 224)))) !==
                  0) ||
              (((_la - 256) & ~0x1f) === 0 &&
                ((1 << (_la - 256)) &
                  ((1 << (PostgresParser.RADIUS - 256)) |
                    (1 << (PostgresParser.SLOPE - 256)) |
                    (1 << (PostgresParser.WIDTH - 256)) |
                    (1 << (PostgresParser.SINH - 256)) |
                    (1 << (PostgresParser.COSH - 256)) |
                    (1 << (PostgresParser.TANH - 256)) |
                    (1 << (PostgresParser.ASINH - 256)) |
                    (1 << (PostgresParser.ACOSH - 256)) |
                    (1 << (PostgresParser.ATANH - 256)) |
                    (1 << (PostgresParser.ABBREV - 256)) |
                    (1 << (PostgresParser.BROADCAST - 256)) |
                    (1 << (PostgresParser.FAMILY - 256)) |
                    (1 << (PostgresParser.HOST - 256)) |
                    (1 << (PostgresParser.HOSTMASK - 256)) |
                    (1 << (PostgresParser.INET_MERGE - 256)) |
                    (1 << (PostgresParser.INET_SAME_FAMILY - 256)) |
                    (1 << (PostgresParser.MASKLEN - 256)) |
                    (1 << (PostgresParser.NETMASK - 256)) |
                    (1 << (PostgresParser.NETWORK - 256)) |
                    (1 << (PostgresParser.SET_MASKLEN - 256)) |
                    (1 << (PostgresParser.TEXT - 256)) |
                    (1 << (PostgresParser.TRUNC - 256)) |
                    (1 << (PostgresParser.MACADDR8_SET7BIT - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 256)) |
                    (1 << (PostgresParser.JSON_ARRAY_LENGTH - 256)) |
                    (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 256)) |
                    (1 << (PostgresParser.JSON_EACH - 256)) |
                    (1 << (PostgresParser.JSONB_EACH - 256)) |
                    (1 << (PostgresParser.JSON_EACH_TEXT - 256)))) !==
                  0) ||
              (((_la - 288) & ~0x1f) === 0 &&
                ((1 << (_la - 288)) &
                  ((1 << (PostgresParser.JSONB_EACH_TEXT - 288)) |
                    (1 << (PostgresParser.JSON_EXTRACT_PATH - 288)) |
                    (1 << (PostgresParser.JSONB_EXTRACT_PATH - 288)) |
                    (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 288)) |
                    (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 288)) |
                    (1 << (PostgresParser.JSON_OBJECT_KEYS - 288)) |
                    (1 << (PostgresParser.JSONB_OBJECT_KEYS - 288)) |
                    (1 << (PostgresParser.JSON_POPULATE_RECORD - 288)) |
                    (1 << (PostgresParser.JSONB_POPULATE_RECORD - 288)) |
                    (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSON_TO_RECORD - 288)) |
                    (1 << (PostgresParser.JSONB_TO_RECORD - 288)) |
                    (1 << (PostgresParser.JSON_TO_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSONB_TO_RECORDSET - 288)) |
                    (1 << (PostgresParser.JSON_STRIP_NULLS - 288)) |
                    (1 << (PostgresParser.JSONB_STRIP_NULLS - 288)) |
                    (1 << (PostgresParser.JSONB_SET - 288)) |
                    (1 << (PostgresParser.JSONB_SET_LAX - 288)) |
                    (1 << (PostgresParser.JSONB_INSERT - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_EXISTS - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_MATCH - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 288)) |
                    (1 << (PostgresParser.JSONB_PRETTY - 288)) |
                    (1 << (PostgresParser.JSON_TYPEOF - 288)))) !==
                  0) ||
              (((_la - 320) & ~0x1f) === 0 &&
                ((1 << (_la - 320)) &
                  ((1 << (PostgresParser.JSONB_TYPEOF - 320)) |
                    (1 << (PostgresParser.TO_JSON - 320)) |
                    (1 << (PostgresParser.TO_JSONB - 320)) |
                    (1 << (PostgresParser.ARRAY_TO_JSON - 320)) |
                    (1 << (PostgresParser.ROW_TO_JSON - 320)) |
                    (1 << (PostgresParser.JSON_BUILD_ARRAY - 320)) |
                    (1 << (PostgresParser.JSONB_BUILD_ARRAY - 320)) |
                    (1 << (PostgresParser.JSON_BUILD_OBJECT - 320)) |
                    (1 << (PostgresParser.JSON_OBJECT - 320)) |
                    (1 << (PostgresParser.JSONB_OBJECT - 320)) |
                    (1 << (PostgresParser.ABS - 320)) |
                    (1 << (PostgresParser.CBRT - 320)) |
                    (1 << (PostgresParser.CEIL - 320)) |
                    (1 << (PostgresParser.DEGREES - 320)) |
                    (1 << (PostgresParser.DIV - 320)) |
                    (1 << (PostgresParser.EXP - 320)) |
                    (1 << (PostgresParser.FACTORIAL - 320)) |
                    (1 << (PostgresParser.FLOOR - 320)) |
                    (1 << (PostgresParser.GCD - 320)) |
                    (1 << (PostgresParser.LCM - 320)) |
                    (1 << (PostgresParser.LN - 320)) |
                    (1 << (PostgresParser.LOG - 320)) |
                    (1 << (PostgresParser.LOG10 - 320)) |
                    (1 << (PostgresParser.MIN_SCALE - 320)) |
                    (1 << (PostgresParser.MOD - 320)) |
                    (1 << (PostgresParser.PI - 320)) |
                    (1 << (PostgresParser.POWER - 320)) |
                    (1 << (PostgresParser.RADIANS - 320)) |
                    (1 << (PostgresParser.ROUND - 320)) |
                    (1 << (PostgresParser.SCALE - 320)) |
                    (1 << (PostgresParser.SIGN - 320)) |
                    (1 << (PostgresParser.SQRT - 320)))) !==
                  0) ||
              (((_la - 352) & ~0x1f) === 0 &&
                ((1 << (_la - 352)) &
                  ((1 << (PostgresParser.TRIM_SCALE - 352)) |
                    (1 << (PostgresParser.WIDTH_BUCKET - 352)) |
                    (1 << (PostgresParser.MODE - 352)) |
                    (1 << (PostgresParser.PERCENTILE_CONT - 352)) |
                    (1 << (PostgresParser.PERCENTILE_DISC - 352)) |
                    (1 << (PostgresParser.RANDOM - 352)) |
                    (1 << (PostgresParser.SETSEED - 352)) |
                    (1 << (PostgresParser.LOWER - 352)) |
                    (1 << (PostgresParser.UPPER - 352)) |
                    (1 << (PostgresParser.ISEMPTY - 352)) |
                    (1 << (PostgresParser.LOWER_INC - 352)) |
                    (1 << (PostgresParser.UPPER_INC - 352)) |
                    (1 << (PostgresParser.LOWER_INF - 352)) |
                    (1 << (PostgresParser.UPPER_INF - 352)) |
                    (1 << (PostgresParser.RANGE_MERGE - 352)) |
                    (1 << (PostgresParser.MULTIRANGE - 352)) |
                    (1 << (PostgresParser.TS_DEBUG - 352)) |
                    (1 << (PostgresParser.TS_LEXIZE - 352)) |
                    (1 << (PostgresParser.TS_PARSE - 352)) |
                    (1 << (PostgresParser.TS_TOKEN_TYPE - 352)) |
                    (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 352)) |
                    (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 352)) |
                    (1 << (PostgresParser.NUMNODE - 352)) |
                    (1 << (PostgresParser.PLAINTO_TSQUERY - 352)) |
                    (1 << (PostgresParser.PHRASETO_TSQUERY - 352)) |
                    (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 352)) |
                    (1 << (PostgresParser.QUERYTREE - 352)) |
                    (1 << (PostgresParser.SETWEIGHT - 352)) |
                    (1 << (PostgresParser.STRIP - 352)) |
                    (1 << (PostgresParser.TO_TSQUERY - 352)) |
                    (1 << (PostgresParser.TO_TSVECTOR - 352)) |
                    (1 << (PostgresParser.JSON_TO_TSVECTOR - 352)))) !==
                  0) ||
              (((_la - 384) & ~0x1f) === 0 &&
                ((1 << (_la - 384)) &
                  ((1 << (PostgresParser.TS_DELETE - 384)) |
                    (1 << (PostgresParser.TS_FILTER - 384)) |
                    (1 << (PostgresParser.TS_HEADLINE - 384)) |
                    (1 << (PostgresParser.TS_RANK - 384)) |
                    (1 << (PostgresParser.TS_RANK_CD - 384)) |
                    (1 << (PostgresParser.TS_REWRITE - 384)) |
                    (1 << (PostgresParser.TSQUERY_PHRASE - 384)) |
                    (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 384)) |
                    (1 << (PostgresParser.GENERATE_SERIES - 384)) |
                    (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 384)) |
                    (1 << (PostgresParser.CORR - 384)) |
                    (1 << (PostgresParser.COVAR_POP - 384)) |
                    (1 << (PostgresParser.COVAR_SAMP - 384)) |
                    (1 << (PostgresParser.REGR_AVGX - 384)) |
                    (1 << (PostgresParser.REGR_AVGY - 384)) |
                    (1 << (PostgresParser.REGR_COUNT - 384)) |
                    (1 << (PostgresParser.REGR_INTERCEPT - 384)) |
                    (1 << (PostgresParser.REGR_R2 - 384)) |
                    (1 << (PostgresParser.REGR_SLOPE - 384)) |
                    (1 << (PostgresParser.REGR_SXX - 384)) |
                    (1 << (PostgresParser.REGR_SXY - 384)) |
                    (1 << (PostgresParser.REGR_SYY - 384)) |
                    (1 << (PostgresParser.STDDEV - 384)) |
                    (1 << (PostgresParser.STDDEV_POP - 384)) |
                    (1 << (PostgresParser.STDDEV_SAMP - 384)) |
                    (1 << (PostgresParser.VARIANCE - 384)) |
                    (1 << (PostgresParser.VAR_POP - 384)) |
                    (1 << (PostgresParser.VAR_SAMP - 384)) |
                    (1 << (PostgresParser.ASCII - 384)) |
                    (1 << (PostgresParser.CHR - 384)) |
                    (1 << (PostgresParser.CONCAT - 384)) |
                    (1 << (PostgresParser.CONCAT_WS - 384)))) !==
                  0) ||
              (((_la - 416) & ~0x1f) === 0 &&
                ((1 << (_la - 416)) &
                  ((1 << (PostgresParser.FORMAT - 416)) |
                    (1 << (PostgresParser.INITCAP - 416)) |
                    (1 << (PostgresParser.LPAD - 416)) |
                    (1 << (PostgresParser.PARSE_IDENT - 416)) |
                    (1 << (PostgresParser.QUOTE_IDENT - 416)) |
                    (1 << (PostgresParser.QUOTE_LITERAL - 416)) |
                    (1 << (PostgresParser.QUOTE_NULLABLE - 416)) |
                    (1 << (PostgresParser.REGEXP_MATCH - 416)) |
                    (1 << (PostgresParser.REGEXP_MATCHES - 416)) |
                    (1 << (PostgresParser.REGEXP_REPLACE - 416)) |
                    (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 416)) |
                    (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 416)) |
                    (1 << (PostgresParser.REPEAT - 416)) |
                    (1 << (PostgresParser.REPLACE - 416)) |
                    (1 << (PostgresParser.REVERSE - 416)) |
                    (1 << (PostgresParser.RPAD - 416)) |
                    (1 << (PostgresParser.SPLIT_PART - 416)) |
                    (1 << (PostgresParser.STRPOS - 416)) |
                    (1 << (PostgresParser.STARTS_WITH - 416)) |
                    (1 << (PostgresParser.STRING_TO_ARRAY - 416)) |
                    (1 << (PostgresParser.STRING_TO_TABLE - 416)) |
                    (1 << (PostgresParser.TO_ASCII - 416)) |
                    (1 << (PostgresParser.TO_HEX - 416)) |
                    (1 << (PostgresParser.TRANSLATE - 416)) |
                    (1 << (PostgresParser.UNISTR - 416)) |
                    (1 << (PostgresParser.BIT_LENGTH - 416)) |
                    (1 << (PostgresParser.CHAR_LENGTH - 416)) |
                    (1 << (PostgresParser.CHARACTER_LENGTH - 416)) |
                    (1 << (PostgresParser.NORMALIZE - 416)) |
                    (1 << (PostgresParser.OCTET_LENGTH - 416)) |
                    (1 << (PostgresParser.OVERLAY - 416)) |
                    (1 << (PostgresParser.POSITION - 416)))) !==
                  0) ||
              (((_la - 448) & ~0x1f) === 0 &&
                ((1 << (_la - 448)) &
                  ((1 << (PostgresParser.SUBSTRING - 448)) |
                    (1 << (PostgresParser.TRIM - 448)) |
                    (1 << (PostgresParser.ACOS - 448)) |
                    (1 << (PostgresParser.ACOSD - 448)) |
                    (1 << (PostgresParser.ASIN - 448)) |
                    (1 << (PostgresParser.ASIND - 448)) |
                    (1 << (PostgresParser.ATAN - 448)) |
                    (1 << (PostgresParser.ATAND - 448)) |
                    (1 << (PostgresParser.ATAN2 - 448)) |
                    (1 << (PostgresParser.ATAN2D - 448)) |
                    (1 << (PostgresParser.COS - 448)) |
                    (1 << (PostgresParser.COSD - 448)) |
                    (1 << (PostgresParser.COT - 448)) |
                    (1 << (PostgresParser.COTD - 448)) |
                    (1 << (PostgresParser.SIN - 448)) |
                    (1 << (PostgresParser.SIND - 448)) |
                    (1 << (PostgresParser.TAN - 448)) |
                    (1 << (PostgresParser.TAND - 448)) |
                    (1 << (PostgresParser.GEN_RANDOM_UUID - 448)) |
                    (1 << (PostgresParser.ROW_NUMBER - 448)) |
                    (1 << (PostgresParser.RANK - 448)) |
                    (1 << (PostgresParser.DENSE_RANK - 448)) |
                    (1 << (PostgresParser.PERCENT_RANK - 448)) |
                    (1 << (PostgresParser.CUME_DIST - 448)) |
                    (1 << (PostgresParser.NTILE - 448)) |
                    (1 << (PostgresParser.LAG - 448)) |
                    (1 << (PostgresParser.LEAD - 448)) |
                    (1 << (PostgresParser.FIRST_VALUE - 448)) |
                    (1 << (PostgresParser.LAST_VALUE - 448)) |
                    (1 << (PostgresParser.NTH_VALUE - 448)) |
                    (1 << (PostgresParser.XMLCOMMENT - 448)) |
                    (1 << (PostgresParser.XMLCONCAT - 448)))) !==
                  0) ||
              (((_la - 480) & ~0x1f) === 0 &&
                ((1 << (_la - 480)) &
                  ((1 << (PostgresParser.XMLELEMENT - 480)) |
                    (1 << (PostgresParser.XMLFOREST - 480)) |
                    (1 << (PostgresParser.XMLPI - 480)) |
                    (1 << (PostgresParser.XMLROOT - 480)) |
                    (1 << (PostgresParser.XMLEXISTS - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 480)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 480)) |
                    (1 << (PostgresParser.XPATH - 480)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 480)) |
                    (1 << (PostgresParser.XMLTABLE - 480)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 480)) |
                    (1 << (PostgresParser.LEFT_PAREN - 480)) |
                    (1 << (PostgresParser.PLUS - 480)) |
                    (1 << (PostgresParser.MINUS - 480)) |
                    (1 << (PostgresParser.MULTIPLY - 480)))) !==
                  0) ||
              (((_la - 517) & ~0x1f) === 0 &&
                ((1 << (_la - 517)) &
                  ((1 << (PostgresParser.LESS_LESS - 517)) |
                    (1 << (PostgresParser.GREATER_GREATER - 517)) |
                    (1 << (PostgresParser.HASH_SIGN - 517)) |
                    (1 << (PostgresParser.OP_CHARS - 517)) |
                    (1 << (PostgresParser.NUMBER_LITERAL - 517)) |
                    (1 << (PostgresParser.REAL_NUMBER - 517)) |
                    (1 << (PostgresParser.DOLLAR_NUMBER - 517)) |
                    (1 << (PostgresParser.Identifier - 517)) |
                    (1 << (PostgresParser.QuotedIdentifier - 517)) |
                    (1 << (PostgresParser.Character_String_Literal - 517)) |
                    (1 << (PostgresParser.BeginDollarStringConstant - 517)))) !==
                  0)
            ) {
              {
                this.state = 1409;
                this.vex(0);
              }
            }

            this.state = 1412;
            this.match(PostgresParser.RIGHT_BRACKET);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indirection_list(): Indirection_listContext {
    let _localctx: Indirection_listContext = new Indirection_listContext(this._ctx, this.state);
    this.enterRule(_localctx, 150, PostgresParser.RULE_indirection_list);
    try {
      let _alt: number;
      this.state = 1428;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 197, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1416;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 1415;
                      this.indirection();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 1418;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 195, this._ctx);
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1423;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 1420;
                    this.indirection();
                  }
                }
              }
              this.state = 1425;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 196, this._ctx);
            }
            this.state = 1426;
            this.match(PostgresParser.DOT);
            this.state = 1427;
            this.match(PostgresParser.MULTIPLY);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public indirection_var(): Indirection_varContext {
    let _localctx: Indirection_varContext = new Indirection_varContext(this._ctx, this.state);
    this.enterRule(_localctx, 152, PostgresParser.RULE_indirection_var);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1432;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.RECURSIVE:
          case PostgresParser.BY:
          case PostgresParser.OPERATOR:
          case PostgresParser.NULLS:
          case PostgresParser.FIRST:
          case PostgresParser.LAST:
          case PostgresParser.VALUES:
          case PostgresParser.INTERVAL:
          case PostgresParser.SECOND:
          case PostgresParser.MINUTE:
          case PostgresParser.HOUR:
          case PostgresParser.DAY:
          case PostgresParser.MONTH:
          case PostgresParser.YEAR:
          case PostgresParser.TREAT:
          case PostgresParser.BETWEEN:
          case PostgresParser.BOOLEAN:
          case PostgresParser.SMALLINT:
          case PostgresParser.INT:
          case PostgresParser.INTEGER:
          case PostgresParser.BIGINT:
          case PostgresParser.DEC:
          case PostgresParser.DECIMAL:
          case PostgresParser.DOUBLE:
          case PostgresParser.FLOAT:
          case PostgresParser.NUMERIC:
          case PostgresParser.PRECISION:
          case PostgresParser.REAL:
          case PostgresParser.BIT:
          case PostgresParser.VARYING:
          case PostgresParser.NATIONAL:
          case PostgresParser.CHARACTER:
          case PostgresParser.CHAR:
          case PostgresParser.NCHAR:
          case PostgresParser.TIME:
          case PostgresParser.WITHOUT:
          case PostgresParser.WITHIN:
          case PostgresParser.ZONE:
          case PostgresParser.TIMESTAMP:
          case PostgresParser.VARCHAR:
          case PostgresParser.SETOF:
          case PostgresParser.OF:
          case PostgresParser.OVER:
          case PostgresParser.PARTITION:
          case PostgresParser.ROWS:
          case PostgresParser.RANGE:
          case PostgresParser.GROUPS:
          case PostgresParser.UNBOUNDED:
          case PostgresParser.PRECEDING:
          case PostgresParser.FOLLOWING:
          case PostgresParser.CURRENT:
          case PostgresParser.ROW:
          case PostgresParser.EXCLUDE:
          case PostgresParser.TIES:
          case PostgresParser.NO:
          case PostgresParser.OTHERS:
          case PostgresParser.ROLLUP:
          case PostgresParser.GROUPING:
          case PostgresParser.SETS:
          case PostgresParser.AT:
          case PostgresParser.ESCAPE:
          case PostgresParser.NEXT:
          case PostgresParser.DOCUMENT:
          case PostgresParser.UNKNOWN:
          case PostgresParser.EXISTS:
          case PostgresParser.FILTER:
          case PostgresParser.ALIAS:
          case PostgresParser.COALESCE:
          case PostgresParser.NULLIF:
          case PostgresParser.GREATEST:
          case PostgresParser.LEAST:
          case PostgresParser.EXTRACT:
          case PostgresParser.FAMILY:
          case PostgresParser.TEXT:
          case PostgresParser.MODE:
          case PostgresParser.STRIP:
          case PostgresParser.REPLACE:
          case PostgresParser.OVERLAY:
          case PostgresParser.POSITION:
          case PostgresParser.SUBSTRING:
          case PostgresParser.TRIM:
          case PostgresParser.XMLCONCAT:
          case PostgresParser.Identifier:
          case PostgresParser.QuotedIdentifier:
            {
              this.state = 1430;
              this.identifier();
            }
            break;
          case PostgresParser.DOLLAR_NUMBER:
            {
              this.state = 1431;
              this.dollar_number();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1435;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 199, this._ctx)) {
          case 1:
            {
              this.state = 1434;
              this.indirection_list();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public all_simple_op(): All_simple_opContext {
    let _localctx: All_simple_opContext = new All_simple_opContext(this._ctx, this.state);
    this.enterRule(_localctx, 154, PostgresParser.RULE_all_simple_op);
    try {
      this.state = 1450;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.LESS_LESS:
        case PostgresParser.GREATER_GREATER:
        case PostgresParser.HASH_SIGN:
        case PostgresParser.OP_CHARS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1437;
            this.op_chars();
          }
          break;
        case PostgresParser.EQUAL:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1438;
            this.match(PostgresParser.EQUAL);
          }
          break;
        case PostgresParser.NOT_EQUAL:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1439;
            this.match(PostgresParser.NOT_EQUAL);
          }
          break;
        case PostgresParser.LTH:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1440;
            this.match(PostgresParser.LTH);
          }
          break;
        case PostgresParser.LEQ:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1441;
            this.match(PostgresParser.LEQ);
          }
          break;
        case PostgresParser.GTH:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1442;
            this.match(PostgresParser.GTH);
          }
          break;
        case PostgresParser.GEQ:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1443;
            this.match(PostgresParser.GEQ);
          }
          break;
        case PostgresParser.PLUS:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1444;
            this.match(PostgresParser.PLUS);
          }
          break;
        case PostgresParser.MINUS:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 1445;
            this.match(PostgresParser.MINUS);
          }
          break;
        case PostgresParser.MULTIPLY:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 1446;
            this.match(PostgresParser.MULTIPLY);
          }
          break;
        case PostgresParser.DIVIDE:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 1447;
            this.match(PostgresParser.DIVIDE);
          }
          break;
        case PostgresParser.MODULAR:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 1448;
            this.match(PostgresParser.MODULAR);
          }
          break;
        case PostgresParser.EXP:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 1449;
            this.match(PostgresParser.EXP);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public character_string(): Character_stringContext {
    let _localctx: Character_stringContext = new Character_stringContext(this._ctx, this.state);
    this.enterRule(_localctx, 156, PostgresParser.RULE_character_string);
    let _la: number;
    try {
      this.state = 1461;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.BeginDollarStringConstant:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1452;
            this.match(PostgresParser.BeginDollarStringConstant);
            this.state = 1456;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.Text_between_Dollar) {
              {
                {
                  this.state = 1453;
                  this.match(PostgresParser.Text_between_Dollar);
                }
              }
              this.state = 1458;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1459;
            this.match(PostgresParser.EndDollarStringConstant);
          }
          break;
        case PostgresParser.Character_String_Literal:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1460;
            this.match(PostgresParser.Character_String_Literal);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public boolean_value(): Boolean_valueContext {
    let _localctx: Boolean_valueContext = new Boolean_valueContext(this._ctx, this.state);
    this.enterRule(_localctx, 158, PostgresParser.RULE_boolean_value);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1463;
        _la = this._input.LA(1);
        if (!(_la === PostgresParser.TRUE || _la === PostgresParser.FALSE)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_names(): Function_namesContext {
    let _localctx: Function_namesContext = new Function_namesContext(this._ctx, this.state);
    this.enterRule(_localctx, 160, PostgresParser.RULE_function_names);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1465;
        _la = this._input.LA(1);
        if (
          !(
            _la === PostgresParser.LEFT ||
            _la === PostgresParser.RIGHT ||
            _la === PostgresParser.GROUPING ||
            _la === PostgresParser.PATH ||
            (((_la - 147) & ~0x1f) === 0 &&
              ((1 << (_la - 147)) &
                ((1 << (PostgresParser.POW - 147)) |
                  (1 << (PostgresParser.DATE - 147)) |
                  (1 << (PostgresParser.ARRAY_AGG - 147)) |
                  (1 << (PostgresParser.AVG - 147)) |
                  (1 << (PostgresParser.BIT_AND - 147)) |
                  (1 << (PostgresParser.BIT_OR - 147)) |
                  (1 << (PostgresParser.BIT_XOR - 147)) |
                  (1 << (PostgresParser.BOOL_AND - 147)) |
                  (1 << (PostgresParser.BOOL_OR - 147)) |
                  (1 << (PostgresParser.COUNT - 147)) |
                  (1 << (PostgresParser.EVERY - 147)) |
                  (1 << (PostgresParser.JSON_AGG - 147)) |
                  (1 << (PostgresParser.JSON_OBJECT_AGG - 147)) |
                  (1 << (PostgresParser.MAX - 147)) |
                  (1 << (PostgresParser.MIN - 147)) |
                  (1 << (PostgresParser.RANGE_AGG - 147)) |
                  (1 << (PostgresParser.RANGE_INTERSECT_AGG - 147)) |
                  (1 << (PostgresParser.STRING_AGG - 147)) |
                  (1 << (PostgresParser.SUM - 147)) |
                  (1 << (PostgresParser.XMLAGG - 147)) |
                  (1 << (PostgresParser.ARRAY_APPEND - 147)) |
                  (1 << (PostgresParser.ARRAY_CAT - 147)) |
                  (1 << (PostgresParser.ARRAY_DIMS - 147)) |
                  (1 << (PostgresParser.ARRAY_FILL - 147)) |
                  (1 << (PostgresParser.ARRAY_LENGTH - 147)) |
                  (1 << (PostgresParser.ARRAY_LOWER - 147)) |
                  (1 << (PostgresParser.ARRAY_NDIMS - 147)) |
                  (1 << (PostgresParser.ARRAY_POSITION - 147)) |
                  (1 << (PostgresParser.ARRAY_PREPEND - 147)) |
                  (1 << (PostgresParser.ARRAY_REMOVE - 147)) |
                  (1 << (PostgresParser.ARRAY_REPLACE - 147)) |
                  (1 << (PostgresParser.ARRAY_TO_STRING - 147)))) !==
                0) ||
            (((_la - 179) & ~0x1f) === 0 &&
              ((1 << (_la - 179)) &
                ((1 << (PostgresParser.ARRAY_UPPER - 179)) |
                  (1 << (PostgresParser.CARDINALITY - 179)) |
                  (1 << (PostgresParser.TRIM_ARRAY - 179)) |
                  (1 << (PostgresParser.UNNEST - 179)) |
                  (1 << (PostgresParser.CONVERT - 179)) |
                  (1 << (PostgresParser.CONVERT_FROM - 179)) |
                  (1 << (PostgresParser.CONVERT_TO - 179)) |
                  (1 << (PostgresParser.ENCODE - 179)) |
                  (1 << (PostgresParser.DECODE - 179)) |
                  (1 << (PostgresParser.BIT_COUNT - 179)) |
                  (1 << (PostgresParser.BTRIM - 179)) |
                  (1 << (PostgresParser.GET_BIT - 179)) |
                  (1 << (PostgresParser.GET_BYTE - 179)) |
                  (1 << (PostgresParser.LENGTH - 179)) |
                  (1 << (PostgresParser.LTRIM - 179)) |
                  (1 << (PostgresParser.MD5 - 179)) |
                  (1 << (PostgresParser.RTRIM - 179)) |
                  (1 << (PostgresParser.SET_BIT - 179)) |
                  (1 << (PostgresParser.SET_BYTE - 179)) |
                  (1 << (PostgresParser.SHA224 - 179)) |
                  (1 << (PostgresParser.SHA256 - 179)) |
                  (1 << (PostgresParser.SHA384 - 179)) |
                  (1 << (PostgresParser.SHA512 - 179)) |
                  (1 << (PostgresParser.SUBSTR - 179)) |
                  (1 << (PostgresParser.NUM_NONNULLS - 179)) |
                  (1 << (PostgresParser.NUM_NULLS - 179)) |
                  (1 << (PostgresParser.COALESCE - 179)) |
                  (1 << (PostgresParser.NULLIF - 179)) |
                  (1 << (PostgresParser.GREATEST - 179)) |
                  (1 << (PostgresParser.LEAST - 179)) |
                  (1 << (PostgresParser.AGE - 179)) |
                  (1 << (PostgresParser.CLOCK_TIMESTAMP - 179)))) !==
                0) ||
            (((_la - 211) & ~0x1f) === 0 &&
              ((1 << (_la - 211)) &
                ((1 << (PostgresParser.CURRENT_DATE - 211)) |
                  (1 << (PostgresParser.CURRENT_TIME - 211)) |
                  (1 << (PostgresParser.CURRENT_TIMESTAMP - 211)) |
                  (1 << (PostgresParser.DATE_BIN - 211)) |
                  (1 << (PostgresParser.DATE_PART - 211)) |
                  (1 << (PostgresParser.DATE_TRUNC - 211)) |
                  (1 << (PostgresParser.EXTRACT - 211)) |
                  (1 << (PostgresParser.ISFINITE - 211)) |
                  (1 << (PostgresParser.JUSTIFY_DAYS - 211)) |
                  (1 << (PostgresParser.JUSTIFY_HOURS - 211)) |
                  (1 << (PostgresParser.JUSTIFY_INTERVAL - 211)) |
                  (1 << (PostgresParser.LOCALTIME - 211)) |
                  (1 << (PostgresParser.LOCALTIMESTAMP - 211)) |
                  (1 << (PostgresParser.MAKE_DATE - 211)) |
                  (1 << (PostgresParser.MAKE_INTERVAL - 211)) |
                  (1 << (PostgresParser.MAKE_TIME - 211)) |
                  (1 << (PostgresParser.MAKE_TIMESTAMP - 211)) |
                  (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 211)) |
                  (1 << (PostgresParser.NOW - 211)) |
                  (1 << (PostgresParser.STATEMENT_TIMESTAMP - 211)) |
                  (1 << (PostgresParser.TIMEOFDAY - 211)) |
                  (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 211)) |
                  (1 << (PostgresParser.ENUM_FIRST - 211)) |
                  (1 << (PostgresParser.ENUM_LAST - 211)) |
                  (1 << (PostgresParser.ENUM_RANGE - 211)) |
                  (1 << (PostgresParser.TO_CHAR - 211)) |
                  (1 << (PostgresParser.TO_DATE - 211)) |
                  (1 << (PostgresParser.TO_NUMBER - 211)) |
                  (1 << (PostgresParser.TO_TIMESTAMP - 211)) |
                  (1 << (PostgresParser.BOX - 211)) |
                  (1 << (PostgresParser.CIRCLE - 211)) |
                  (1 << (PostgresParser.LINE - 211)))) !==
                0) ||
            (((_la - 243) & ~0x1f) === 0 &&
              ((1 << (_la - 243)) &
                ((1 << (PostgresParser.LSEG - 243)) |
                  (1 << (PostgresParser.POINT - 243)) |
                  (1 << (PostgresParser.POLYGON - 243)) |
                  (1 << (PostgresParser.AREA - 243)) |
                  (1 << (PostgresParser.CENTER - 243)) |
                  (1 << (PostgresParser.DIAGONAL - 243)) |
                  (1 << (PostgresParser.DIAMETER - 243)) |
                  (1 << (PostgresParser.HEIGHT - 243)) |
                  (1 << (PostgresParser.ISCLOSED - 243)) |
                  (1 << (PostgresParser.ISOPEN - 243)) |
                  (1 << (PostgresParser.NPOINTS - 243)) |
                  (1 << (PostgresParser.PCLOSE - 243)) |
                  (1 << (PostgresParser.POPEN - 243)) |
                  (1 << (PostgresParser.RADIUS - 243)) |
                  (1 << (PostgresParser.SLOPE - 243)) |
                  (1 << (PostgresParser.WIDTH - 243)) |
                  (1 << (PostgresParser.SINH - 243)) |
                  (1 << (PostgresParser.COSH - 243)) |
                  (1 << (PostgresParser.TANH - 243)) |
                  (1 << (PostgresParser.ASINH - 243)) |
                  (1 << (PostgresParser.ACOSH - 243)) |
                  (1 << (PostgresParser.ATANH - 243)) |
                  (1 << (PostgresParser.ABBREV - 243)) |
                  (1 << (PostgresParser.BROADCAST - 243)) |
                  (1 << (PostgresParser.FAMILY - 243)) |
                  (1 << (PostgresParser.HOST - 243)) |
                  (1 << (PostgresParser.HOSTMASK - 243)) |
                  (1 << (PostgresParser.INET_MERGE - 243)) |
                  (1 << (PostgresParser.INET_SAME_FAMILY - 243)) |
                  (1 << (PostgresParser.MASKLEN - 243)) |
                  (1 << (PostgresParser.NETMASK - 243)) |
                  (1 << (PostgresParser.NETWORK - 243)))) !==
                0) ||
            (((_la - 275) & ~0x1f) === 0 &&
              ((1 << (_la - 275)) &
                ((1 << (PostgresParser.SET_MASKLEN - 275)) |
                  (1 << (PostgresParser.TEXT - 275)) |
                  (1 << (PostgresParser.TRUNC - 275)) |
                  (1 << (PostgresParser.MACADDR8_SET7BIT - 275)) |
                  (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 275)) |
                  (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 275)) |
                  (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 275)) |
                  (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 275)) |
                  (1 << (PostgresParser.JSON_ARRAY_LENGTH - 275)) |
                  (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 275)) |
                  (1 << (PostgresParser.JSON_EACH - 275)) |
                  (1 << (PostgresParser.JSONB_EACH - 275)) |
                  (1 << (PostgresParser.JSON_EACH_TEXT - 275)) |
                  (1 << (PostgresParser.JSONB_EACH_TEXT - 275)) |
                  (1 << (PostgresParser.JSON_EXTRACT_PATH - 275)) |
                  (1 << (PostgresParser.JSONB_EXTRACT_PATH - 275)) |
                  (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 275)) |
                  (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 275)) |
                  (1 << (PostgresParser.JSON_OBJECT_KEYS - 275)) |
                  (1 << (PostgresParser.JSONB_OBJECT_KEYS - 275)) |
                  (1 << (PostgresParser.JSON_POPULATE_RECORD - 275)) |
                  (1 << (PostgresParser.JSONB_POPULATE_RECORD - 275)) |
                  (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 275)) |
                  (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 275)) |
                  (1 << (PostgresParser.JSON_TO_RECORD - 275)) |
                  (1 << (PostgresParser.JSONB_TO_RECORD - 275)) |
                  (1 << (PostgresParser.JSON_TO_RECORDSET - 275)) |
                  (1 << (PostgresParser.JSONB_TO_RECORDSET - 275)) |
                  (1 << (PostgresParser.JSON_STRIP_NULLS - 275)) |
                  (1 << (PostgresParser.JSONB_STRIP_NULLS - 275)) |
                  (1 << (PostgresParser.JSONB_SET - 275)) |
                  (1 << (PostgresParser.JSONB_SET_LAX - 275)))) !==
                0) ||
            (((_la - 307) & ~0x1f) === 0 &&
              ((1 << (_la - 307)) &
                ((1 << (PostgresParser.JSONB_INSERT - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_EXISTS - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_MATCH - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_QUERY - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 307)) |
                  (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 307)) |
                  (1 << (PostgresParser.JSONB_PRETTY - 307)) |
                  (1 << (PostgresParser.JSON_TYPEOF - 307)) |
                  (1 << (PostgresParser.JSONB_TYPEOF - 307)) |
                  (1 << (PostgresParser.TO_JSON - 307)) |
                  (1 << (PostgresParser.TO_JSONB - 307)) |
                  (1 << (PostgresParser.ARRAY_TO_JSON - 307)) |
                  (1 << (PostgresParser.ROW_TO_JSON - 307)) |
                  (1 << (PostgresParser.JSON_BUILD_ARRAY - 307)) |
                  (1 << (PostgresParser.JSONB_BUILD_ARRAY - 307)) |
                  (1 << (PostgresParser.JSON_BUILD_OBJECT - 307)) |
                  (1 << (PostgresParser.JSON_OBJECT - 307)) |
                  (1 << (PostgresParser.JSONB_OBJECT - 307)) |
                  (1 << (PostgresParser.ABS - 307)) |
                  (1 << (PostgresParser.CBRT - 307)) |
                  (1 << (PostgresParser.CEIL - 307)) |
                  (1 << (PostgresParser.DEGREES - 307)) |
                  (1 << (PostgresParser.DIV - 307)) |
                  (1 << (PostgresParser.EXP - 307)) |
                  (1 << (PostgresParser.FACTORIAL - 307)) |
                  (1 << (PostgresParser.FLOOR - 307)) |
                  (1 << (PostgresParser.GCD - 307)))) !==
                0) ||
            (((_la - 339) & ~0x1f) === 0 &&
              ((1 << (_la - 339)) &
                ((1 << (PostgresParser.LCM - 339)) |
                  (1 << (PostgresParser.LN - 339)) |
                  (1 << (PostgresParser.LOG - 339)) |
                  (1 << (PostgresParser.LOG10 - 339)) |
                  (1 << (PostgresParser.MIN_SCALE - 339)) |
                  (1 << (PostgresParser.MOD - 339)) |
                  (1 << (PostgresParser.PI - 339)) |
                  (1 << (PostgresParser.POWER - 339)) |
                  (1 << (PostgresParser.RADIANS - 339)) |
                  (1 << (PostgresParser.ROUND - 339)) |
                  (1 << (PostgresParser.SCALE - 339)) |
                  (1 << (PostgresParser.SIGN - 339)) |
                  (1 << (PostgresParser.SQRT - 339)) |
                  (1 << (PostgresParser.TRIM_SCALE - 339)) |
                  (1 << (PostgresParser.WIDTH_BUCKET - 339)) |
                  (1 << (PostgresParser.MODE - 339)) |
                  (1 << (PostgresParser.PERCENTILE_CONT - 339)) |
                  (1 << (PostgresParser.PERCENTILE_DISC - 339)) |
                  (1 << (PostgresParser.RANDOM - 339)) |
                  (1 << (PostgresParser.SETSEED - 339)) |
                  (1 << (PostgresParser.LOWER - 339)) |
                  (1 << (PostgresParser.UPPER - 339)) |
                  (1 << (PostgresParser.ISEMPTY - 339)) |
                  (1 << (PostgresParser.LOWER_INC - 339)) |
                  (1 << (PostgresParser.UPPER_INC - 339)) |
                  (1 << (PostgresParser.LOWER_INF - 339)) |
                  (1 << (PostgresParser.UPPER_INF - 339)) |
                  (1 << (PostgresParser.RANGE_MERGE - 339)) |
                  (1 << (PostgresParser.MULTIRANGE - 339)) |
                  (1 << (PostgresParser.TS_DEBUG - 339)) |
                  (1 << (PostgresParser.TS_LEXIZE - 339)) |
                  (1 << (PostgresParser.TS_PARSE - 339)))) !==
                0) ||
            (((_la - 371) & ~0x1f) === 0 &&
              ((1 << (_la - 371)) &
                ((1 << (PostgresParser.TS_TOKEN_TYPE - 371)) |
                  (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 371)) |
                  (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 371)) |
                  (1 << (PostgresParser.NUMNODE - 371)) |
                  (1 << (PostgresParser.PLAINTO_TSQUERY - 371)) |
                  (1 << (PostgresParser.PHRASETO_TSQUERY - 371)) |
                  (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 371)) |
                  (1 << (PostgresParser.QUERYTREE - 371)) |
                  (1 << (PostgresParser.SETWEIGHT - 371)) |
                  (1 << (PostgresParser.STRIP - 371)) |
                  (1 << (PostgresParser.TO_TSQUERY - 371)) |
                  (1 << (PostgresParser.TO_TSVECTOR - 371)) |
                  (1 << (PostgresParser.JSON_TO_TSVECTOR - 371)) |
                  (1 << (PostgresParser.TS_DELETE - 371)) |
                  (1 << (PostgresParser.TS_FILTER - 371)) |
                  (1 << (PostgresParser.TS_HEADLINE - 371)) |
                  (1 << (PostgresParser.TS_RANK - 371)) |
                  (1 << (PostgresParser.TS_RANK_CD - 371)) |
                  (1 << (PostgresParser.TS_REWRITE - 371)) |
                  (1 << (PostgresParser.TSQUERY_PHRASE - 371)) |
                  (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 371)) |
                  (1 << (PostgresParser.GENERATE_SERIES - 371)) |
                  (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 371)) |
                  (1 << (PostgresParser.CORR - 371)) |
                  (1 << (PostgresParser.COVAR_POP - 371)) |
                  (1 << (PostgresParser.COVAR_SAMP - 371)) |
                  (1 << (PostgresParser.REGR_AVGX - 371)) |
                  (1 << (PostgresParser.REGR_AVGY - 371)) |
                  (1 << (PostgresParser.REGR_COUNT - 371)) |
                  (1 << (PostgresParser.REGR_INTERCEPT - 371)) |
                  (1 << (PostgresParser.REGR_R2 - 371)) |
                  (1 << (PostgresParser.REGR_SLOPE - 371)))) !==
                0) ||
            (((_la - 403) & ~0x1f) === 0 &&
              ((1 << (_la - 403)) &
                ((1 << (PostgresParser.REGR_SXX - 403)) |
                  (1 << (PostgresParser.REGR_SXY - 403)) |
                  (1 << (PostgresParser.REGR_SYY - 403)) |
                  (1 << (PostgresParser.STDDEV - 403)) |
                  (1 << (PostgresParser.STDDEV_POP - 403)) |
                  (1 << (PostgresParser.STDDEV_SAMP - 403)) |
                  (1 << (PostgresParser.VARIANCE - 403)) |
                  (1 << (PostgresParser.VAR_POP - 403)) |
                  (1 << (PostgresParser.VAR_SAMP - 403)) |
                  (1 << (PostgresParser.ASCII - 403)) |
                  (1 << (PostgresParser.CHR - 403)) |
                  (1 << (PostgresParser.CONCAT - 403)) |
                  (1 << (PostgresParser.CONCAT_WS - 403)) |
                  (1 << (PostgresParser.FORMAT - 403)) |
                  (1 << (PostgresParser.INITCAP - 403)) |
                  (1 << (PostgresParser.LPAD - 403)) |
                  (1 << (PostgresParser.PARSE_IDENT - 403)) |
                  (1 << (PostgresParser.QUOTE_IDENT - 403)) |
                  (1 << (PostgresParser.QUOTE_LITERAL - 403)) |
                  (1 << (PostgresParser.QUOTE_NULLABLE - 403)) |
                  (1 << (PostgresParser.REGEXP_MATCH - 403)) |
                  (1 << (PostgresParser.REGEXP_MATCHES - 403)) |
                  (1 << (PostgresParser.REGEXP_REPLACE - 403)) |
                  (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 403)) |
                  (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 403)) |
                  (1 << (PostgresParser.REPEAT - 403)) |
                  (1 << (PostgresParser.REPLACE - 403)) |
                  (1 << (PostgresParser.REVERSE - 403)) |
                  (1 << (PostgresParser.RPAD - 403)) |
                  (1 << (PostgresParser.SPLIT_PART - 403)) |
                  (1 << (PostgresParser.STRPOS - 403)) |
                  (1 << (PostgresParser.STARTS_WITH - 403)))) !==
                0) ||
            (((_la - 435) & ~0x1f) === 0 &&
              ((1 << (_la - 435)) &
                ((1 << (PostgresParser.STRING_TO_ARRAY - 435)) |
                  (1 << (PostgresParser.STRING_TO_TABLE - 435)) |
                  (1 << (PostgresParser.TO_ASCII - 435)) |
                  (1 << (PostgresParser.TO_HEX - 435)) |
                  (1 << (PostgresParser.TRANSLATE - 435)) |
                  (1 << (PostgresParser.UNISTR - 435)) |
                  (1 << (PostgresParser.BIT_LENGTH - 435)) |
                  (1 << (PostgresParser.CHAR_LENGTH - 435)) |
                  (1 << (PostgresParser.CHARACTER_LENGTH - 435)) |
                  (1 << (PostgresParser.NORMALIZE - 435)) |
                  (1 << (PostgresParser.OCTET_LENGTH - 435)) |
                  (1 << (PostgresParser.OVERLAY - 435)) |
                  (1 << (PostgresParser.POSITION - 435)) |
                  (1 << (PostgresParser.SUBSTRING - 435)) |
                  (1 << (PostgresParser.TRIM - 435)) |
                  (1 << (PostgresParser.ACOS - 435)) |
                  (1 << (PostgresParser.ACOSD - 435)) |
                  (1 << (PostgresParser.ASIN - 435)) |
                  (1 << (PostgresParser.ASIND - 435)) |
                  (1 << (PostgresParser.ATAN - 435)) |
                  (1 << (PostgresParser.ATAND - 435)) |
                  (1 << (PostgresParser.ATAN2 - 435)) |
                  (1 << (PostgresParser.ATAN2D - 435)) |
                  (1 << (PostgresParser.COS - 435)) |
                  (1 << (PostgresParser.COSD - 435)) |
                  (1 << (PostgresParser.COT - 435)) |
                  (1 << (PostgresParser.COTD - 435)) |
                  (1 << (PostgresParser.SIN - 435)) |
                  (1 << (PostgresParser.SIND - 435)) |
                  (1 << (PostgresParser.TAN - 435)) |
                  (1 << (PostgresParser.TAND - 435)) |
                  (1 << (PostgresParser.GEN_RANDOM_UUID - 435)))) !==
                0) ||
            (((_la - 467) & ~0x1f) === 0 &&
              ((1 << (_la - 467)) &
                ((1 << (PostgresParser.ROW_NUMBER - 467)) |
                  (1 << (PostgresParser.RANK - 467)) |
                  (1 << (PostgresParser.DENSE_RANK - 467)) |
                  (1 << (PostgresParser.PERCENT_RANK - 467)) |
                  (1 << (PostgresParser.CUME_DIST - 467)) |
                  (1 << (PostgresParser.NTILE - 467)) |
                  (1 << (PostgresParser.LAG - 467)) |
                  (1 << (PostgresParser.LEAD - 467)) |
                  (1 << (PostgresParser.FIRST_VALUE - 467)) |
                  (1 << (PostgresParser.LAST_VALUE - 467)) |
                  (1 << (PostgresParser.NTH_VALUE - 467)) |
                  (1 << (PostgresParser.XMLCOMMENT - 467)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_custom(): Function_customContext {
    let _localctx: Function_customContext = new Function_customContext(this._ctx, this.state);
    this.enterRule(_localctx, 162, PostgresParser.RULE_function_custom);
    let _la: number;
    try {
      this.state = 1768;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.XMLCONCAT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1467;
            this.match(PostgresParser.XMLCONCAT);
            this.state = 1468;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1469;
            this.vex(0);
            this.state = 1474;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 1470;
                  this.match(PostgresParser.COMMA);
                  this.state = 1471;
                  this.vex(0);
                }
              }
              this.state = 1476;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1477;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XMLELEMENT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1479;
            this.match(PostgresParser.XMLELEMENT);
            this.state = 1480;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1481;
            this.match(PostgresParser.NAME);
            this.state = 1482;
            _localctx._name = this.identifier();
            this.state = 1504;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 207, this._ctx)) {
              case 1:
                {
                  this.state = 1483;
                  this.match(PostgresParser.COMMA);
                  this.state = 1484;
                  this.match(PostgresParser.XMLATTRIBUTES);
                  this.state = 1485;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 1486;
                  this.vex(0);
                  this.state = 1489;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1487;
                      this.match(PostgresParser.AS);
                      this.state = 1488;
                      _localctx._attname = this.identifier();
                    }
                  }

                  this.state = 1499;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  while (_la === PostgresParser.COMMA) {
                    {
                      {
                        this.state = 1491;
                        this.match(PostgresParser.COMMA);
                        this.state = 1492;
                        this.vex(0);
                        this.state = 1495;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PostgresParser.AS) {
                          {
                            this.state = 1493;
                            this.match(PostgresParser.AS);
                            this.state = 1494;
                            _localctx._attname = this.identifier();
                          }
                        }
                      }
                    }
                    this.state = 1501;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                  }
                  this.state = 1502;
                  this.match(PostgresParser.RIGHT_PAREN);
                }
                break;
            }
            this.state = 1510;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 1506;
                  this.match(PostgresParser.COMMA);
                  this.state = 1507;
                  this.vex(0);
                }
              }
              this.state = 1512;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1513;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XMLFOREST:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1515;
            this.match(PostgresParser.XMLFOREST);
            this.state = 1516;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1517;
            this.vex(0);
            this.state = 1520;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.AS) {
              {
                this.state = 1518;
                this.match(PostgresParser.AS);
                this.state = 1519;
                _localctx._name = this.identifier();
              }
            }

            this.state = 1530;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 1522;
                  this.match(PostgresParser.COMMA);
                  this.state = 1523;
                  this.vex(0);
                  this.state = 1526;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1524;
                      this.match(PostgresParser.AS);
                      this.state = 1525;
                      _localctx._name = this.identifier();
                    }
                  }
                }
              }
              this.state = 1532;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1533;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XMLPI:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1535;
            this.match(PostgresParser.XMLPI);
            this.state = 1536;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1537;
            this.match(PostgresParser.NAME);
            this.state = 1538;
            _localctx._name = this.identifier();
            this.state = 1541;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.COMMA) {
              {
                this.state = 1539;
                this.match(PostgresParser.COMMA);
                this.state = 1540;
                this.vex(0);
              }
            }

            this.state = 1543;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XMLROOT:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1545;
            this.match(PostgresParser.XMLROOT);
            this.state = 1546;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1547;
            this.vex(0);
            this.state = 1548;
            this.match(PostgresParser.COMMA);
            this.state = 1549;
            this.match(PostgresParser.VERSION);
            this.state = 1553;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 213, this._ctx)) {
              case 1:
                {
                  this.state = 1550;
                  this.vex(0);
                }
                break;

              case 2:
                {
                  this.state = 1551;
                  this.match(PostgresParser.NO);
                  this.state = 1552;
                  this.match(PostgresParser.VALUE);
                }
                break;
            }
            this.state = 1563;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.COMMA) {
              {
                this.state = 1555;
                this.match(PostgresParser.COMMA);
                this.state = 1556;
                this.match(PostgresParser.STANDALONE);
                this.state = 1561;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 214, this._ctx)) {
                  case 1:
                    {
                      this.state = 1557;
                      this.match(PostgresParser.YES);
                    }
                    break;

                  case 2:
                    {
                      this.state = 1558;
                      this.match(PostgresParser.NO);
                    }
                    break;

                  case 3:
                    {
                      this.state = 1559;
                      this.match(PostgresParser.NO);
                      this.state = 1560;
                      this.match(PostgresParser.VALUE);
                    }
                    break;
                }
              }
            }

            this.state = 1565;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XMLAGG:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1567;
            this.match(PostgresParser.XMLAGG);
            this.state = 1568;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1569;
            this.match(PostgresParser.NAME);
            this.state = 1570;
            _localctx._name = this.identifier();
            this.state = 1592;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 219, this._ctx)) {
              case 1:
                {
                  this.state = 1571;
                  this.match(PostgresParser.COMMA);
                  this.state = 1572;
                  this.match(PostgresParser.XMLATTRIBUTES);
                  this.state = 1573;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 1574;
                  this.vex(0);
                  this.state = 1577;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1575;
                      this.match(PostgresParser.AS);
                      this.state = 1576;
                      _localctx._attname = this.identifier();
                    }
                  }

                  this.state = 1587;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  while (_la === PostgresParser.COMMA) {
                    {
                      {
                        this.state = 1579;
                        this.match(PostgresParser.COMMA);
                        this.state = 1580;
                        this.vex(0);
                        this.state = 1583;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PostgresParser.AS) {
                          {
                            this.state = 1581;
                            this.match(PostgresParser.AS);
                            this.state = 1582;
                            _localctx._attname = this.identifier();
                          }
                        }
                      }
                    }
                    this.state = 1589;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                  }
                  this.state = 1590;
                  this.match(PostgresParser.RIGHT_PAREN);
                }
                break;
            }
            this.state = 1598;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 1594;
                  this.match(PostgresParser.COMMA);
                  this.state = 1595;
                  this.vex(0);
                }
              }
              this.state = 1600;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1601;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XMLEXISTS:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1603;
            this.match(PostgresParser.XMLEXISTS);
            this.state = 1604;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1605;
            this.vex(0);
            this.state = 1606;
            this.match(PostgresParser.PASSING);
            this.state = 1609;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 221, this._ctx)) {
              case 1:
                {
                  this.state = 1607;
                  this.match(PostgresParser.BY);
                  this.state = 1608;
                  this.match(PostgresParser.REF);
                }
                break;
            }
            this.state = 1611;
            this.vex(0);
            this.state = 1614;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.BY) {
              {
                this.state = 1612;
                this.match(PostgresParser.BY);
                this.state = 1613;
                this.match(PostgresParser.REF);
              }
            }

            this.state = 1616;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XML_IS_WELL_FORMED:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1618;
            this.match(PostgresParser.XML_IS_WELL_FORMED);
            this.state = 1619;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1620;
            this.vex(0);
            this.state = 1621;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 1623;
            this.match(PostgresParser.XML_IS_WELL_FORMED_CONTENT);
            this.state = 1624;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1625;
            this.vex(0);
            this.state = 1626;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 1628;
            this.match(PostgresParser.XML_IS_WELL_FORMED_DOCUMENT);
            this.state = 1629;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1630;
            this.vex(0);
            this.state = 1631;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XPATH:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 1633;
            this.match(PostgresParser.XPATH);
            this.state = 1634;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1635;
            this.vex(0);
            this.state = 1636;
            this.match(PostgresParser.COMMA);
            this.state = 1637;
            this.vex(0);
            this.state = 1650;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ARRAY) {
              {
                this.state = 1638;
                this.match(PostgresParser.ARRAY);
                this.state = 1639;
                this.match(PostgresParser.LEFT_BRACKET);
                this.state = 1640;
                this.match(PostgresParser.ARRAY);
                this.state = 1641;
                this.match(PostgresParser.LEFT_BRACKET);
                this.state = 1646;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (
                  ((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                      ((1 << PostgresParser.RECURSIVE) |
                        (1 << PostgresParser.BY) |
                        (1 << PostgresParser.ALL) |
                        (1 << PostgresParser.ANY) |
                        (1 << PostgresParser.SOME) |
                        (1 << PostgresParser.OPERATOR) |
                        (1 << PostgresParser.NULLS) |
                        (1 << PostgresParser.FIRST) |
                        (1 << PostgresParser.LAST) |
                        (1 << PostgresParser.LEFT) |
                        (1 << PostgresParser.RIGHT) |
                        (1 << PostgresParser.FULL) |
                        (1 << PostgresParser.INNER) |
                        (1 << PostgresParser.OUTER) |
                        (1 << PostgresParser.CROSS))) !==
                      0) ||
                  (((_la - 32) & ~0x1f) === 0 &&
                    ((1 << (_la - 32)) &
                      ((1 << (PostgresParser.JOIN - 32)) |
                        (1 << (PostgresParser.ON - 32)) |
                        (1 << (PostgresParser.VALUES - 32)) |
                        (1 << (PostgresParser.NATURAL - 32)) |
                        (1 << (PostgresParser.TABLESAMPLE - 32)) |
                        (1 << (PostgresParser.INTERVAL - 32)) |
                        (1 << (PostgresParser.SECOND - 32)) |
                        (1 << (PostgresParser.MINUTE - 32)) |
                        (1 << (PostgresParser.HOUR - 32)) |
                        (1 << (PostgresParser.DAY - 32)) |
                        (1 << (PostgresParser.MONTH - 32)) |
                        (1 << (PostgresParser.YEAR - 32)) |
                        (1 << (PostgresParser.TREAT - 32)) |
                        (1 << (PostgresParser.CASE - 32)) |
                        (1 << (PostgresParser.NOT - 32)) |
                        (1 << (PostgresParser.IS - 32)) |
                        (1 << (PostgresParser.NULL - 32)) |
                        (1 << (PostgresParser.ISNULL - 32)) |
                        (1 << (PostgresParser.NOTNULL - 32)))) !==
                      0) ||
                  (((_la - 64) & ~0x1f) === 0 &&
                    ((1 << (_la - 64)) &
                      ((1 << (PostgresParser.TRUE - 64)) |
                        (1 << (PostgresParser.FALSE - 64)) |
                        (1 << (PostgresParser.BETWEEN - 64)) |
                        (1 << (PostgresParser.LIKE - 64)) |
                        (1 << (PostgresParser.ILIKE - 64)) |
                        (1 << (PostgresParser.ARRAY - 64)) |
                        (1 << (PostgresParser.BOOLEAN - 64)) |
                        (1 << (PostgresParser.SMALLINT - 64)) |
                        (1 << (PostgresParser.INT - 64)) |
                        (1 << (PostgresParser.INTEGER - 64)) |
                        (1 << (PostgresParser.BIGINT - 64)) |
                        (1 << (PostgresParser.DEC - 64)) |
                        (1 << (PostgresParser.DECIMAL - 64)) |
                        (1 << (PostgresParser.DOUBLE - 64)) |
                        (1 << (PostgresParser.FLOAT - 64)) |
                        (1 << (PostgresParser.NUMERIC - 64)) |
                        (1 << (PostgresParser.PRECISION - 64)) |
                        (1 << (PostgresParser.REAL - 64)) |
                        (1 << (PostgresParser.BIT - 64)) |
                        (1 << (PostgresParser.VARYING - 64)) |
                        (1 << (PostgresParser.NATIONAL - 64)) |
                        (1 << (PostgresParser.CHARACTER - 64)) |
                        (1 << (PostgresParser.CHAR - 64)) |
                        (1 << (PostgresParser.NCHAR - 64)) |
                        (1 << (PostgresParser.TIME - 64)) |
                        (1 << (PostgresParser.WITHOUT - 64)) |
                        (1 << (PostgresParser.WITHIN - 64)) |
                        (1 << (PostgresParser.ZONE - 64)) |
                        (1 << (PostgresParser.TIMESTAMP - 64)) |
                        (1 << (PostgresParser.VARCHAR - 64)) |
                        (1 << (PostgresParser.SETOF - 64)))) !==
                      0) ||
                  (((_la - 96) & ~0x1f) === 0 &&
                    ((1 << (_la - 96)) &
                      ((1 << (PostgresParser.OF - 96)) |
                        (1 << (PostgresParser.OVER - 96)) |
                        (1 << (PostgresParser.PARTITION - 96)) |
                        (1 << (PostgresParser.ROWS - 96)) |
                        (1 << (PostgresParser.RANGE - 96)) |
                        (1 << (PostgresParser.GROUPS - 96)) |
                        (1 << (PostgresParser.UNBOUNDED - 96)) |
                        (1 << (PostgresParser.PRECEDING - 96)) |
                        (1 << (PostgresParser.FOLLOWING - 96)) |
                        (1 << (PostgresParser.CURRENT - 96)) |
                        (1 << (PostgresParser.ROW - 96)) |
                        (1 << (PostgresParser.EXCLUDE - 96)) |
                        (1 << (PostgresParser.TIES - 96)) |
                        (1 << (PostgresParser.NO - 96)) |
                        (1 << (PostgresParser.OTHERS - 96)) |
                        (1 << (PostgresParser.ROLLUP - 96)) |
                        (1 << (PostgresParser.GROUPING - 96)) |
                        (1 << (PostgresParser.SETS - 96)) |
                        (1 << (PostgresParser.OVERLAPS - 96)) |
                        (1 << (PostgresParser.AT - 96)) |
                        (1 << (PostgresParser.SIMILAR - 96)) |
                        (1 << (PostgresParser.ESCAPE - 96)) |
                        (1 << (PostgresParser.NEXT - 96)) |
                        (1 << (PostgresParser.DOCUMENT - 96)))) !==
                      0) ||
                  (((_la - 128) & ~0x1f) === 0 &&
                    ((1 << (_la - 128)) &
                      ((1 << (PostgresParser.UNKNOWN - 128)) |
                        (1 << (PostgresParser.EXISTS - 128)) |
                        (1 << (PostgresParser.FILTER - 128)) |
                        (1 << (PostgresParser.ALIAS - 128)) |
                        (1 << (PostgresParser.PATH - 128)) |
                        (1 << (PostgresParser.POW - 128)) |
                        (1 << (PostgresParser.DATE - 128)) |
                        (1 << (PostgresParser.ARRAY_AGG - 128)) |
                        (1 << (PostgresParser.AVG - 128)) |
                        (1 << (PostgresParser.BIT_AND - 128)) |
                        (1 << (PostgresParser.BIT_OR - 128)) |
                        (1 << (PostgresParser.BIT_XOR - 128)) |
                        (1 << (PostgresParser.BOOL_AND - 128)) |
                        (1 << (PostgresParser.BOOL_OR - 128)) |
                        (1 << (PostgresParser.COUNT - 128)) |
                        (1 << (PostgresParser.EVERY - 128)) |
                        (1 << (PostgresParser.JSON_AGG - 128)) |
                        (1 << (PostgresParser.JSON_OBJECT_AGG - 128)))) !==
                      0) ||
                  (((_la - 160) & ~0x1f) === 0 &&
                    ((1 << (_la - 160)) &
                      ((1 << (PostgresParser.MAX - 160)) |
                        (1 << (PostgresParser.MIN - 160)) |
                        (1 << (PostgresParser.RANGE_AGG - 160)) |
                        (1 << (PostgresParser.RANGE_INTERSECT_AGG - 160)) |
                        (1 << (PostgresParser.STRING_AGG - 160)) |
                        (1 << (PostgresParser.SUM - 160)) |
                        (1 << (PostgresParser.XMLAGG - 160)) |
                        (1 << (PostgresParser.ARRAY_APPEND - 160)) |
                        (1 << (PostgresParser.ARRAY_CAT - 160)) |
                        (1 << (PostgresParser.ARRAY_DIMS - 160)) |
                        (1 << (PostgresParser.ARRAY_FILL - 160)) |
                        (1 << (PostgresParser.ARRAY_LENGTH - 160)) |
                        (1 << (PostgresParser.ARRAY_LOWER - 160)) |
                        (1 << (PostgresParser.ARRAY_NDIMS - 160)) |
                        (1 << (PostgresParser.ARRAY_POSITION - 160)) |
                        (1 << (PostgresParser.ARRAY_PREPEND - 160)) |
                        (1 << (PostgresParser.ARRAY_REMOVE - 160)) |
                        (1 << (PostgresParser.ARRAY_REPLACE - 160)) |
                        (1 << (PostgresParser.ARRAY_TO_STRING - 160)) |
                        (1 << (PostgresParser.ARRAY_UPPER - 160)) |
                        (1 << (PostgresParser.CARDINALITY - 160)) |
                        (1 << (PostgresParser.TRIM_ARRAY - 160)) |
                        (1 << (PostgresParser.UNNEST - 160)) |
                        (1 << (PostgresParser.CONVERT - 160)) |
                        (1 << (PostgresParser.CONVERT_FROM - 160)) |
                        (1 << (PostgresParser.CONVERT_TO - 160)) |
                        (1 << (PostgresParser.ENCODE - 160)) |
                        (1 << (PostgresParser.DECODE - 160)) |
                        (1 << (PostgresParser.BIT_COUNT - 160)) |
                        (1 << (PostgresParser.BTRIM - 160)) |
                        (1 << (PostgresParser.GET_BIT - 160)) |
                        (1 << (PostgresParser.GET_BYTE - 160)))) !==
                      0) ||
                  (((_la - 192) & ~0x1f) === 0 &&
                    ((1 << (_la - 192)) &
                      ((1 << (PostgresParser.LENGTH - 192)) |
                        (1 << (PostgresParser.LTRIM - 192)) |
                        (1 << (PostgresParser.MD5 - 192)) |
                        (1 << (PostgresParser.RTRIM - 192)) |
                        (1 << (PostgresParser.SET_BIT - 192)) |
                        (1 << (PostgresParser.SET_BYTE - 192)) |
                        (1 << (PostgresParser.SHA224 - 192)) |
                        (1 << (PostgresParser.SHA256 - 192)) |
                        (1 << (PostgresParser.SHA384 - 192)) |
                        (1 << (PostgresParser.SHA512 - 192)) |
                        (1 << (PostgresParser.SUBSTR - 192)) |
                        (1 << (PostgresParser.NUM_NONNULLS - 192)) |
                        (1 << (PostgresParser.NUM_NULLS - 192)) |
                        (1 << (PostgresParser.COALESCE - 192)) |
                        (1 << (PostgresParser.NULLIF - 192)) |
                        (1 << (PostgresParser.GREATEST - 192)) |
                        (1 << (PostgresParser.LEAST - 192)) |
                        (1 << (PostgresParser.AGE - 192)) |
                        (1 << (PostgresParser.CLOCK_TIMESTAMP - 192)) |
                        (1 << (PostgresParser.CURRENT_DATE - 192)) |
                        (1 << (PostgresParser.CURRENT_TIME - 192)) |
                        (1 << (PostgresParser.CURRENT_TIMESTAMP - 192)) |
                        (1 << (PostgresParser.DATE_BIN - 192)) |
                        (1 << (PostgresParser.DATE_PART - 192)) |
                        (1 << (PostgresParser.DATE_TRUNC - 192)) |
                        (1 << (PostgresParser.EXTRACT - 192)) |
                        (1 << (PostgresParser.ISFINITE - 192)) |
                        (1 << (PostgresParser.JUSTIFY_DAYS - 192)) |
                        (1 << (PostgresParser.JUSTIFY_HOURS - 192)) |
                        (1 << (PostgresParser.JUSTIFY_INTERVAL - 192)) |
                        (1 << (PostgresParser.LOCALTIME - 192)) |
                        (1 << (PostgresParser.LOCALTIMESTAMP - 192)))) !==
                      0) ||
                  (((_la - 224) & ~0x1f) === 0 &&
                    ((1 << (_la - 224)) &
                      ((1 << (PostgresParser.MAKE_DATE - 224)) |
                        (1 << (PostgresParser.MAKE_INTERVAL - 224)) |
                        (1 << (PostgresParser.MAKE_TIME - 224)) |
                        (1 << (PostgresParser.MAKE_TIMESTAMP - 224)) |
                        (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 224)) |
                        (1 << (PostgresParser.NOW - 224)) |
                        (1 << (PostgresParser.STATEMENT_TIMESTAMP - 224)) |
                        (1 << (PostgresParser.TIMEOFDAY - 224)) |
                        (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 224)) |
                        (1 << (PostgresParser.ENUM_FIRST - 224)) |
                        (1 << (PostgresParser.ENUM_LAST - 224)) |
                        (1 << (PostgresParser.ENUM_RANGE - 224)) |
                        (1 << (PostgresParser.TO_CHAR - 224)) |
                        (1 << (PostgresParser.TO_DATE - 224)) |
                        (1 << (PostgresParser.TO_NUMBER - 224)) |
                        (1 << (PostgresParser.TO_TIMESTAMP - 224)) |
                        (1 << (PostgresParser.BOX - 224)) |
                        (1 << (PostgresParser.CIRCLE - 224)) |
                        (1 << (PostgresParser.LINE - 224)) |
                        (1 << (PostgresParser.LSEG - 224)) |
                        (1 << (PostgresParser.POINT - 224)) |
                        (1 << (PostgresParser.POLYGON - 224)) |
                        (1 << (PostgresParser.AREA - 224)) |
                        (1 << (PostgresParser.CENTER - 224)) |
                        (1 << (PostgresParser.DIAGONAL - 224)) |
                        (1 << (PostgresParser.DIAMETER - 224)) |
                        (1 << (PostgresParser.HEIGHT - 224)) |
                        (1 << (PostgresParser.ISCLOSED - 224)) |
                        (1 << (PostgresParser.ISOPEN - 224)) |
                        (1 << (PostgresParser.NPOINTS - 224)) |
                        (1 << (PostgresParser.PCLOSE - 224)) |
                        (1 << (PostgresParser.POPEN - 224)))) !==
                      0) ||
                  (((_la - 256) & ~0x1f) === 0 &&
                    ((1 << (_la - 256)) &
                      ((1 << (PostgresParser.RADIUS - 256)) |
                        (1 << (PostgresParser.SLOPE - 256)) |
                        (1 << (PostgresParser.WIDTH - 256)) |
                        (1 << (PostgresParser.SINH - 256)) |
                        (1 << (PostgresParser.COSH - 256)) |
                        (1 << (PostgresParser.TANH - 256)) |
                        (1 << (PostgresParser.ASINH - 256)) |
                        (1 << (PostgresParser.ACOSH - 256)) |
                        (1 << (PostgresParser.ATANH - 256)) |
                        (1 << (PostgresParser.ABBREV - 256)) |
                        (1 << (PostgresParser.BROADCAST - 256)) |
                        (1 << (PostgresParser.FAMILY - 256)) |
                        (1 << (PostgresParser.HOST - 256)) |
                        (1 << (PostgresParser.HOSTMASK - 256)) |
                        (1 << (PostgresParser.INET_MERGE - 256)) |
                        (1 << (PostgresParser.INET_SAME_FAMILY - 256)) |
                        (1 << (PostgresParser.MASKLEN - 256)) |
                        (1 << (PostgresParser.NETMASK - 256)) |
                        (1 << (PostgresParser.NETWORK - 256)) |
                        (1 << (PostgresParser.SET_MASKLEN - 256)) |
                        (1 << (PostgresParser.TEXT - 256)) |
                        (1 << (PostgresParser.TRUNC - 256)) |
                        (1 << (PostgresParser.MACADDR8_SET7BIT - 256)) |
                        (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 256)) |
                        (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 256)) |
                        (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 256)) |
                        (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 256)) |
                        (1 << (PostgresParser.JSON_ARRAY_LENGTH - 256)) |
                        (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 256)) |
                        (1 << (PostgresParser.JSON_EACH - 256)) |
                        (1 << (PostgresParser.JSONB_EACH - 256)) |
                        (1 << (PostgresParser.JSON_EACH_TEXT - 256)))) !==
                      0) ||
                  (((_la - 288) & ~0x1f) === 0 &&
                    ((1 << (_la - 288)) &
                      ((1 << (PostgresParser.JSONB_EACH_TEXT - 288)) |
                        (1 << (PostgresParser.JSON_EXTRACT_PATH - 288)) |
                        (1 << (PostgresParser.JSONB_EXTRACT_PATH - 288)) |
                        (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 288)) |
                        (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 288)) |
                        (1 << (PostgresParser.JSON_OBJECT_KEYS - 288)) |
                        (1 << (PostgresParser.JSONB_OBJECT_KEYS - 288)) |
                        (1 << (PostgresParser.JSON_POPULATE_RECORD - 288)) |
                        (1 << (PostgresParser.JSONB_POPULATE_RECORD - 288)) |
                        (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 288)) |
                        (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 288)) |
                        (1 << (PostgresParser.JSON_TO_RECORD - 288)) |
                        (1 << (PostgresParser.JSONB_TO_RECORD - 288)) |
                        (1 << (PostgresParser.JSON_TO_RECORDSET - 288)) |
                        (1 << (PostgresParser.JSONB_TO_RECORDSET - 288)) |
                        (1 << (PostgresParser.JSON_STRIP_NULLS - 288)) |
                        (1 << (PostgresParser.JSONB_STRIP_NULLS - 288)) |
                        (1 << (PostgresParser.JSONB_SET - 288)) |
                        (1 << (PostgresParser.JSONB_SET_LAX - 288)) |
                        (1 << (PostgresParser.JSONB_INSERT - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_EXISTS - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_MATCH - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PRETTY - 288)) |
                        (1 << (PostgresParser.JSON_TYPEOF - 288)))) !==
                      0) ||
                  (((_la - 320) & ~0x1f) === 0 &&
                    ((1 << (_la - 320)) &
                      ((1 << (PostgresParser.JSONB_TYPEOF - 320)) |
                        (1 << (PostgresParser.TO_JSON - 320)) |
                        (1 << (PostgresParser.TO_JSONB - 320)) |
                        (1 << (PostgresParser.ARRAY_TO_JSON - 320)) |
                        (1 << (PostgresParser.ROW_TO_JSON - 320)) |
                        (1 << (PostgresParser.JSON_BUILD_ARRAY - 320)) |
                        (1 << (PostgresParser.JSONB_BUILD_ARRAY - 320)) |
                        (1 << (PostgresParser.JSON_BUILD_OBJECT - 320)) |
                        (1 << (PostgresParser.JSON_OBJECT - 320)) |
                        (1 << (PostgresParser.JSONB_OBJECT - 320)) |
                        (1 << (PostgresParser.ABS - 320)) |
                        (1 << (PostgresParser.CBRT - 320)) |
                        (1 << (PostgresParser.CEIL - 320)) |
                        (1 << (PostgresParser.DEGREES - 320)) |
                        (1 << (PostgresParser.DIV - 320)) |
                        (1 << (PostgresParser.EXP - 320)) |
                        (1 << (PostgresParser.FACTORIAL - 320)) |
                        (1 << (PostgresParser.FLOOR - 320)) |
                        (1 << (PostgresParser.GCD - 320)) |
                        (1 << (PostgresParser.LCM - 320)) |
                        (1 << (PostgresParser.LN - 320)) |
                        (1 << (PostgresParser.LOG - 320)) |
                        (1 << (PostgresParser.LOG10 - 320)) |
                        (1 << (PostgresParser.MIN_SCALE - 320)) |
                        (1 << (PostgresParser.MOD - 320)) |
                        (1 << (PostgresParser.PI - 320)) |
                        (1 << (PostgresParser.POWER - 320)) |
                        (1 << (PostgresParser.RADIANS - 320)) |
                        (1 << (PostgresParser.ROUND - 320)) |
                        (1 << (PostgresParser.SCALE - 320)) |
                        (1 << (PostgresParser.SIGN - 320)) |
                        (1 << (PostgresParser.SQRT - 320)))) !==
                      0) ||
                  (((_la - 352) & ~0x1f) === 0 &&
                    ((1 << (_la - 352)) &
                      ((1 << (PostgresParser.TRIM_SCALE - 352)) |
                        (1 << (PostgresParser.WIDTH_BUCKET - 352)) |
                        (1 << (PostgresParser.MODE - 352)) |
                        (1 << (PostgresParser.PERCENTILE_CONT - 352)) |
                        (1 << (PostgresParser.PERCENTILE_DISC - 352)) |
                        (1 << (PostgresParser.RANDOM - 352)) |
                        (1 << (PostgresParser.SETSEED - 352)) |
                        (1 << (PostgresParser.LOWER - 352)) |
                        (1 << (PostgresParser.UPPER - 352)) |
                        (1 << (PostgresParser.ISEMPTY - 352)) |
                        (1 << (PostgresParser.LOWER_INC - 352)) |
                        (1 << (PostgresParser.UPPER_INC - 352)) |
                        (1 << (PostgresParser.LOWER_INF - 352)) |
                        (1 << (PostgresParser.UPPER_INF - 352)) |
                        (1 << (PostgresParser.RANGE_MERGE - 352)) |
                        (1 << (PostgresParser.MULTIRANGE - 352)) |
                        (1 << (PostgresParser.TS_DEBUG - 352)) |
                        (1 << (PostgresParser.TS_LEXIZE - 352)) |
                        (1 << (PostgresParser.TS_PARSE - 352)) |
                        (1 << (PostgresParser.TS_TOKEN_TYPE - 352)) |
                        (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 352)) |
                        (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 352)) |
                        (1 << (PostgresParser.NUMNODE - 352)) |
                        (1 << (PostgresParser.PLAINTO_TSQUERY - 352)) |
                        (1 << (PostgresParser.PHRASETO_TSQUERY - 352)) |
                        (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 352)) |
                        (1 << (PostgresParser.QUERYTREE - 352)) |
                        (1 << (PostgresParser.SETWEIGHT - 352)) |
                        (1 << (PostgresParser.STRIP - 352)) |
                        (1 << (PostgresParser.TO_TSQUERY - 352)) |
                        (1 << (PostgresParser.TO_TSVECTOR - 352)) |
                        (1 << (PostgresParser.JSON_TO_TSVECTOR - 352)))) !==
                      0) ||
                  (((_la - 384) & ~0x1f) === 0 &&
                    ((1 << (_la - 384)) &
                      ((1 << (PostgresParser.TS_DELETE - 384)) |
                        (1 << (PostgresParser.TS_FILTER - 384)) |
                        (1 << (PostgresParser.TS_HEADLINE - 384)) |
                        (1 << (PostgresParser.TS_RANK - 384)) |
                        (1 << (PostgresParser.TS_RANK_CD - 384)) |
                        (1 << (PostgresParser.TS_REWRITE - 384)) |
                        (1 << (PostgresParser.TSQUERY_PHRASE - 384)) |
                        (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 384)) |
                        (1 << (PostgresParser.GENERATE_SERIES - 384)) |
                        (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 384)) |
                        (1 << (PostgresParser.CORR - 384)) |
                        (1 << (PostgresParser.COVAR_POP - 384)) |
                        (1 << (PostgresParser.COVAR_SAMP - 384)) |
                        (1 << (PostgresParser.REGR_AVGX - 384)) |
                        (1 << (PostgresParser.REGR_AVGY - 384)) |
                        (1 << (PostgresParser.REGR_COUNT - 384)) |
                        (1 << (PostgresParser.REGR_INTERCEPT - 384)) |
                        (1 << (PostgresParser.REGR_R2 - 384)) |
                        (1 << (PostgresParser.REGR_SLOPE - 384)) |
                        (1 << (PostgresParser.REGR_SXX - 384)) |
                        (1 << (PostgresParser.REGR_SXY - 384)) |
                        (1 << (PostgresParser.REGR_SYY - 384)) |
                        (1 << (PostgresParser.STDDEV - 384)) |
                        (1 << (PostgresParser.STDDEV_POP - 384)) |
                        (1 << (PostgresParser.STDDEV_SAMP - 384)) |
                        (1 << (PostgresParser.VARIANCE - 384)) |
                        (1 << (PostgresParser.VAR_POP - 384)) |
                        (1 << (PostgresParser.VAR_SAMP - 384)) |
                        (1 << (PostgresParser.ASCII - 384)) |
                        (1 << (PostgresParser.CHR - 384)) |
                        (1 << (PostgresParser.CONCAT - 384)) |
                        (1 << (PostgresParser.CONCAT_WS - 384)))) !==
                      0) ||
                  (((_la - 416) & ~0x1f) === 0 &&
                    ((1 << (_la - 416)) &
                      ((1 << (PostgresParser.FORMAT - 416)) |
                        (1 << (PostgresParser.INITCAP - 416)) |
                        (1 << (PostgresParser.LPAD - 416)) |
                        (1 << (PostgresParser.PARSE_IDENT - 416)) |
                        (1 << (PostgresParser.QUOTE_IDENT - 416)) |
                        (1 << (PostgresParser.QUOTE_LITERAL - 416)) |
                        (1 << (PostgresParser.QUOTE_NULLABLE - 416)) |
                        (1 << (PostgresParser.REGEXP_MATCH - 416)) |
                        (1 << (PostgresParser.REGEXP_MATCHES - 416)) |
                        (1 << (PostgresParser.REGEXP_REPLACE - 416)) |
                        (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 416)) |
                        (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 416)) |
                        (1 << (PostgresParser.REPEAT - 416)) |
                        (1 << (PostgresParser.REPLACE - 416)) |
                        (1 << (PostgresParser.REVERSE - 416)) |
                        (1 << (PostgresParser.RPAD - 416)) |
                        (1 << (PostgresParser.SPLIT_PART - 416)) |
                        (1 << (PostgresParser.STRPOS - 416)) |
                        (1 << (PostgresParser.STARTS_WITH - 416)) |
                        (1 << (PostgresParser.STRING_TO_ARRAY - 416)) |
                        (1 << (PostgresParser.STRING_TO_TABLE - 416)) |
                        (1 << (PostgresParser.TO_ASCII - 416)) |
                        (1 << (PostgresParser.TO_HEX - 416)) |
                        (1 << (PostgresParser.TRANSLATE - 416)) |
                        (1 << (PostgresParser.UNISTR - 416)) |
                        (1 << (PostgresParser.BIT_LENGTH - 416)) |
                        (1 << (PostgresParser.CHAR_LENGTH - 416)) |
                        (1 << (PostgresParser.CHARACTER_LENGTH - 416)) |
                        (1 << (PostgresParser.NORMALIZE - 416)) |
                        (1 << (PostgresParser.OCTET_LENGTH - 416)) |
                        (1 << (PostgresParser.OVERLAY - 416)) |
                        (1 << (PostgresParser.POSITION - 416)))) !==
                      0) ||
                  (((_la - 448) & ~0x1f) === 0 &&
                    ((1 << (_la - 448)) &
                      ((1 << (PostgresParser.SUBSTRING - 448)) |
                        (1 << (PostgresParser.TRIM - 448)) |
                        (1 << (PostgresParser.ACOS - 448)) |
                        (1 << (PostgresParser.ACOSD - 448)) |
                        (1 << (PostgresParser.ASIN - 448)) |
                        (1 << (PostgresParser.ASIND - 448)) |
                        (1 << (PostgresParser.ATAN - 448)) |
                        (1 << (PostgresParser.ATAND - 448)) |
                        (1 << (PostgresParser.ATAN2 - 448)) |
                        (1 << (PostgresParser.ATAN2D - 448)) |
                        (1 << (PostgresParser.COS - 448)) |
                        (1 << (PostgresParser.COSD - 448)) |
                        (1 << (PostgresParser.COT - 448)) |
                        (1 << (PostgresParser.COTD - 448)) |
                        (1 << (PostgresParser.SIN - 448)) |
                        (1 << (PostgresParser.SIND - 448)) |
                        (1 << (PostgresParser.TAN - 448)) |
                        (1 << (PostgresParser.TAND - 448)) |
                        (1 << (PostgresParser.GEN_RANDOM_UUID - 448)) |
                        (1 << (PostgresParser.ROW_NUMBER - 448)) |
                        (1 << (PostgresParser.RANK - 448)) |
                        (1 << (PostgresParser.DENSE_RANK - 448)) |
                        (1 << (PostgresParser.PERCENT_RANK - 448)) |
                        (1 << (PostgresParser.CUME_DIST - 448)) |
                        (1 << (PostgresParser.NTILE - 448)) |
                        (1 << (PostgresParser.LAG - 448)) |
                        (1 << (PostgresParser.LEAD - 448)) |
                        (1 << (PostgresParser.FIRST_VALUE - 448)) |
                        (1 << (PostgresParser.LAST_VALUE - 448)) |
                        (1 << (PostgresParser.NTH_VALUE - 448)) |
                        (1 << (PostgresParser.XMLCOMMENT - 448)) |
                        (1 << (PostgresParser.XMLCONCAT - 448)))) !==
                      0) ||
                  (((_la - 480) & ~0x1f) === 0 &&
                    ((1 << (_la - 480)) &
                      ((1 << (PostgresParser.XMLELEMENT - 480)) |
                        (1 << (PostgresParser.XMLFOREST - 480)) |
                        (1 << (PostgresParser.XMLPI - 480)) |
                        (1 << (PostgresParser.XMLROOT - 480)) |
                        (1 << (PostgresParser.XMLEXISTS - 480)) |
                        (1 << (PostgresParser.XML_IS_WELL_FORMED - 480)) |
                        (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 480)) |
                        (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 480)) |
                        (1 << (PostgresParser.XPATH - 480)) |
                        (1 << (PostgresParser.XPATH_EXISTS - 480)) |
                        (1 << (PostgresParser.XMLTABLE - 480)) |
                        (1 << (PostgresParser.TABLE_TO_XML - 480)) |
                        (1 << (PostgresParser.LEFT_PAREN - 480)) |
                        (1 << (PostgresParser.PLUS - 480)) |
                        (1 << (PostgresParser.MINUS - 480)) |
                        (1 << (PostgresParser.MULTIPLY - 480)))) !==
                      0) ||
                  (((_la - 517) & ~0x1f) === 0 &&
                    ((1 << (_la - 517)) &
                      ((1 << (PostgresParser.LESS_LESS - 517)) |
                        (1 << (PostgresParser.GREATER_GREATER - 517)) |
                        (1 << (PostgresParser.HASH_SIGN - 517)) |
                        (1 << (PostgresParser.OP_CHARS - 517)) |
                        (1 << (PostgresParser.NUMBER_LITERAL - 517)) |
                        (1 << (PostgresParser.REAL_NUMBER - 517)) |
                        (1 << (PostgresParser.DOLLAR_NUMBER - 517)) |
                        (1 << (PostgresParser.Identifier - 517)) |
                        (1 << (PostgresParser.QuotedIdentifier - 517)) |
                        (1 << (PostgresParser.Character_String_Literal - 517)) |
                        (1 << (PostgresParser.BeginDollarStringConstant - 517)))) !==
                      0)
                ) {
                  {
                    this.state = 1642;
                    this.vex(0);
                    this.state = 1643;
                    this.match(PostgresParser.COMMA);
                    this.state = 1644;
                    this.vex(0);
                  }
                }

                this.state = 1648;
                this.match(PostgresParser.RIGHT_BRACKET);
                this.state = 1649;
                this.match(PostgresParser.RIGHT_BRACKET);
              }
            }

            this.state = 1652;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XPATH_EXISTS:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 1654;
            this.match(PostgresParser.XPATH_EXISTS);
            this.state = 1655;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1656;
            this.vex(0);
            this.state = 1657;
            this.match(PostgresParser.COMMA);
            this.state = 1658;
            this.vex(0);
            this.state = 1671;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ARRAY) {
              {
                this.state = 1659;
                this.match(PostgresParser.ARRAY);
                this.state = 1660;
                this.match(PostgresParser.LEFT_BRACKET);
                this.state = 1661;
                this.match(PostgresParser.ARRAY);
                this.state = 1662;
                this.match(PostgresParser.LEFT_BRACKET);
                this.state = 1667;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (
                  ((_la & ~0x1f) === 0 &&
                    ((1 << _la) &
                      ((1 << PostgresParser.RECURSIVE) |
                        (1 << PostgresParser.BY) |
                        (1 << PostgresParser.ALL) |
                        (1 << PostgresParser.ANY) |
                        (1 << PostgresParser.SOME) |
                        (1 << PostgresParser.OPERATOR) |
                        (1 << PostgresParser.NULLS) |
                        (1 << PostgresParser.FIRST) |
                        (1 << PostgresParser.LAST) |
                        (1 << PostgresParser.LEFT) |
                        (1 << PostgresParser.RIGHT) |
                        (1 << PostgresParser.FULL) |
                        (1 << PostgresParser.INNER) |
                        (1 << PostgresParser.OUTER) |
                        (1 << PostgresParser.CROSS))) !==
                      0) ||
                  (((_la - 32) & ~0x1f) === 0 &&
                    ((1 << (_la - 32)) &
                      ((1 << (PostgresParser.JOIN - 32)) |
                        (1 << (PostgresParser.ON - 32)) |
                        (1 << (PostgresParser.VALUES - 32)) |
                        (1 << (PostgresParser.NATURAL - 32)) |
                        (1 << (PostgresParser.TABLESAMPLE - 32)) |
                        (1 << (PostgresParser.INTERVAL - 32)) |
                        (1 << (PostgresParser.SECOND - 32)) |
                        (1 << (PostgresParser.MINUTE - 32)) |
                        (1 << (PostgresParser.HOUR - 32)) |
                        (1 << (PostgresParser.DAY - 32)) |
                        (1 << (PostgresParser.MONTH - 32)) |
                        (1 << (PostgresParser.YEAR - 32)) |
                        (1 << (PostgresParser.TREAT - 32)) |
                        (1 << (PostgresParser.CASE - 32)) |
                        (1 << (PostgresParser.NOT - 32)) |
                        (1 << (PostgresParser.IS - 32)) |
                        (1 << (PostgresParser.NULL - 32)) |
                        (1 << (PostgresParser.ISNULL - 32)) |
                        (1 << (PostgresParser.NOTNULL - 32)))) !==
                      0) ||
                  (((_la - 64) & ~0x1f) === 0 &&
                    ((1 << (_la - 64)) &
                      ((1 << (PostgresParser.TRUE - 64)) |
                        (1 << (PostgresParser.FALSE - 64)) |
                        (1 << (PostgresParser.BETWEEN - 64)) |
                        (1 << (PostgresParser.LIKE - 64)) |
                        (1 << (PostgresParser.ILIKE - 64)) |
                        (1 << (PostgresParser.ARRAY - 64)) |
                        (1 << (PostgresParser.BOOLEAN - 64)) |
                        (1 << (PostgresParser.SMALLINT - 64)) |
                        (1 << (PostgresParser.INT - 64)) |
                        (1 << (PostgresParser.INTEGER - 64)) |
                        (1 << (PostgresParser.BIGINT - 64)) |
                        (1 << (PostgresParser.DEC - 64)) |
                        (1 << (PostgresParser.DECIMAL - 64)) |
                        (1 << (PostgresParser.DOUBLE - 64)) |
                        (1 << (PostgresParser.FLOAT - 64)) |
                        (1 << (PostgresParser.NUMERIC - 64)) |
                        (1 << (PostgresParser.PRECISION - 64)) |
                        (1 << (PostgresParser.REAL - 64)) |
                        (1 << (PostgresParser.BIT - 64)) |
                        (1 << (PostgresParser.VARYING - 64)) |
                        (1 << (PostgresParser.NATIONAL - 64)) |
                        (1 << (PostgresParser.CHARACTER - 64)) |
                        (1 << (PostgresParser.CHAR - 64)) |
                        (1 << (PostgresParser.NCHAR - 64)) |
                        (1 << (PostgresParser.TIME - 64)) |
                        (1 << (PostgresParser.WITHOUT - 64)) |
                        (1 << (PostgresParser.WITHIN - 64)) |
                        (1 << (PostgresParser.ZONE - 64)) |
                        (1 << (PostgresParser.TIMESTAMP - 64)) |
                        (1 << (PostgresParser.VARCHAR - 64)) |
                        (1 << (PostgresParser.SETOF - 64)))) !==
                      0) ||
                  (((_la - 96) & ~0x1f) === 0 &&
                    ((1 << (_la - 96)) &
                      ((1 << (PostgresParser.OF - 96)) |
                        (1 << (PostgresParser.OVER - 96)) |
                        (1 << (PostgresParser.PARTITION - 96)) |
                        (1 << (PostgresParser.ROWS - 96)) |
                        (1 << (PostgresParser.RANGE - 96)) |
                        (1 << (PostgresParser.GROUPS - 96)) |
                        (1 << (PostgresParser.UNBOUNDED - 96)) |
                        (1 << (PostgresParser.PRECEDING - 96)) |
                        (1 << (PostgresParser.FOLLOWING - 96)) |
                        (1 << (PostgresParser.CURRENT - 96)) |
                        (1 << (PostgresParser.ROW - 96)) |
                        (1 << (PostgresParser.EXCLUDE - 96)) |
                        (1 << (PostgresParser.TIES - 96)) |
                        (1 << (PostgresParser.NO - 96)) |
                        (1 << (PostgresParser.OTHERS - 96)) |
                        (1 << (PostgresParser.ROLLUP - 96)) |
                        (1 << (PostgresParser.GROUPING - 96)) |
                        (1 << (PostgresParser.SETS - 96)) |
                        (1 << (PostgresParser.OVERLAPS - 96)) |
                        (1 << (PostgresParser.AT - 96)) |
                        (1 << (PostgresParser.SIMILAR - 96)) |
                        (1 << (PostgresParser.ESCAPE - 96)) |
                        (1 << (PostgresParser.NEXT - 96)) |
                        (1 << (PostgresParser.DOCUMENT - 96)))) !==
                      0) ||
                  (((_la - 128) & ~0x1f) === 0 &&
                    ((1 << (_la - 128)) &
                      ((1 << (PostgresParser.UNKNOWN - 128)) |
                        (1 << (PostgresParser.EXISTS - 128)) |
                        (1 << (PostgresParser.FILTER - 128)) |
                        (1 << (PostgresParser.ALIAS - 128)) |
                        (1 << (PostgresParser.PATH - 128)) |
                        (1 << (PostgresParser.POW - 128)) |
                        (1 << (PostgresParser.DATE - 128)) |
                        (1 << (PostgresParser.ARRAY_AGG - 128)) |
                        (1 << (PostgresParser.AVG - 128)) |
                        (1 << (PostgresParser.BIT_AND - 128)) |
                        (1 << (PostgresParser.BIT_OR - 128)) |
                        (1 << (PostgresParser.BIT_XOR - 128)) |
                        (1 << (PostgresParser.BOOL_AND - 128)) |
                        (1 << (PostgresParser.BOOL_OR - 128)) |
                        (1 << (PostgresParser.COUNT - 128)) |
                        (1 << (PostgresParser.EVERY - 128)) |
                        (1 << (PostgresParser.JSON_AGG - 128)) |
                        (1 << (PostgresParser.JSON_OBJECT_AGG - 128)))) !==
                      0) ||
                  (((_la - 160) & ~0x1f) === 0 &&
                    ((1 << (_la - 160)) &
                      ((1 << (PostgresParser.MAX - 160)) |
                        (1 << (PostgresParser.MIN - 160)) |
                        (1 << (PostgresParser.RANGE_AGG - 160)) |
                        (1 << (PostgresParser.RANGE_INTERSECT_AGG - 160)) |
                        (1 << (PostgresParser.STRING_AGG - 160)) |
                        (1 << (PostgresParser.SUM - 160)) |
                        (1 << (PostgresParser.XMLAGG - 160)) |
                        (1 << (PostgresParser.ARRAY_APPEND - 160)) |
                        (1 << (PostgresParser.ARRAY_CAT - 160)) |
                        (1 << (PostgresParser.ARRAY_DIMS - 160)) |
                        (1 << (PostgresParser.ARRAY_FILL - 160)) |
                        (1 << (PostgresParser.ARRAY_LENGTH - 160)) |
                        (1 << (PostgresParser.ARRAY_LOWER - 160)) |
                        (1 << (PostgresParser.ARRAY_NDIMS - 160)) |
                        (1 << (PostgresParser.ARRAY_POSITION - 160)) |
                        (1 << (PostgresParser.ARRAY_PREPEND - 160)) |
                        (1 << (PostgresParser.ARRAY_REMOVE - 160)) |
                        (1 << (PostgresParser.ARRAY_REPLACE - 160)) |
                        (1 << (PostgresParser.ARRAY_TO_STRING - 160)) |
                        (1 << (PostgresParser.ARRAY_UPPER - 160)) |
                        (1 << (PostgresParser.CARDINALITY - 160)) |
                        (1 << (PostgresParser.TRIM_ARRAY - 160)) |
                        (1 << (PostgresParser.UNNEST - 160)) |
                        (1 << (PostgresParser.CONVERT - 160)) |
                        (1 << (PostgresParser.CONVERT_FROM - 160)) |
                        (1 << (PostgresParser.CONVERT_TO - 160)) |
                        (1 << (PostgresParser.ENCODE - 160)) |
                        (1 << (PostgresParser.DECODE - 160)) |
                        (1 << (PostgresParser.BIT_COUNT - 160)) |
                        (1 << (PostgresParser.BTRIM - 160)) |
                        (1 << (PostgresParser.GET_BIT - 160)) |
                        (1 << (PostgresParser.GET_BYTE - 160)))) !==
                      0) ||
                  (((_la - 192) & ~0x1f) === 0 &&
                    ((1 << (_la - 192)) &
                      ((1 << (PostgresParser.LENGTH - 192)) |
                        (1 << (PostgresParser.LTRIM - 192)) |
                        (1 << (PostgresParser.MD5 - 192)) |
                        (1 << (PostgresParser.RTRIM - 192)) |
                        (1 << (PostgresParser.SET_BIT - 192)) |
                        (1 << (PostgresParser.SET_BYTE - 192)) |
                        (1 << (PostgresParser.SHA224 - 192)) |
                        (1 << (PostgresParser.SHA256 - 192)) |
                        (1 << (PostgresParser.SHA384 - 192)) |
                        (1 << (PostgresParser.SHA512 - 192)) |
                        (1 << (PostgresParser.SUBSTR - 192)) |
                        (1 << (PostgresParser.NUM_NONNULLS - 192)) |
                        (1 << (PostgresParser.NUM_NULLS - 192)) |
                        (1 << (PostgresParser.COALESCE - 192)) |
                        (1 << (PostgresParser.NULLIF - 192)) |
                        (1 << (PostgresParser.GREATEST - 192)) |
                        (1 << (PostgresParser.LEAST - 192)) |
                        (1 << (PostgresParser.AGE - 192)) |
                        (1 << (PostgresParser.CLOCK_TIMESTAMP - 192)) |
                        (1 << (PostgresParser.CURRENT_DATE - 192)) |
                        (1 << (PostgresParser.CURRENT_TIME - 192)) |
                        (1 << (PostgresParser.CURRENT_TIMESTAMP - 192)) |
                        (1 << (PostgresParser.DATE_BIN - 192)) |
                        (1 << (PostgresParser.DATE_PART - 192)) |
                        (1 << (PostgresParser.DATE_TRUNC - 192)) |
                        (1 << (PostgresParser.EXTRACT - 192)) |
                        (1 << (PostgresParser.ISFINITE - 192)) |
                        (1 << (PostgresParser.JUSTIFY_DAYS - 192)) |
                        (1 << (PostgresParser.JUSTIFY_HOURS - 192)) |
                        (1 << (PostgresParser.JUSTIFY_INTERVAL - 192)) |
                        (1 << (PostgresParser.LOCALTIME - 192)) |
                        (1 << (PostgresParser.LOCALTIMESTAMP - 192)))) !==
                      0) ||
                  (((_la - 224) & ~0x1f) === 0 &&
                    ((1 << (_la - 224)) &
                      ((1 << (PostgresParser.MAKE_DATE - 224)) |
                        (1 << (PostgresParser.MAKE_INTERVAL - 224)) |
                        (1 << (PostgresParser.MAKE_TIME - 224)) |
                        (1 << (PostgresParser.MAKE_TIMESTAMP - 224)) |
                        (1 << (PostgresParser.MAKE_TIMESTAMPTZ - 224)) |
                        (1 << (PostgresParser.NOW - 224)) |
                        (1 << (PostgresParser.STATEMENT_TIMESTAMP - 224)) |
                        (1 << (PostgresParser.TIMEOFDAY - 224)) |
                        (1 << (PostgresParser.TRANSACTION_TIMESTAMP - 224)) |
                        (1 << (PostgresParser.ENUM_FIRST - 224)) |
                        (1 << (PostgresParser.ENUM_LAST - 224)) |
                        (1 << (PostgresParser.ENUM_RANGE - 224)) |
                        (1 << (PostgresParser.TO_CHAR - 224)) |
                        (1 << (PostgresParser.TO_DATE - 224)) |
                        (1 << (PostgresParser.TO_NUMBER - 224)) |
                        (1 << (PostgresParser.TO_TIMESTAMP - 224)) |
                        (1 << (PostgresParser.BOX - 224)) |
                        (1 << (PostgresParser.CIRCLE - 224)) |
                        (1 << (PostgresParser.LINE - 224)) |
                        (1 << (PostgresParser.LSEG - 224)) |
                        (1 << (PostgresParser.POINT - 224)) |
                        (1 << (PostgresParser.POLYGON - 224)) |
                        (1 << (PostgresParser.AREA - 224)) |
                        (1 << (PostgresParser.CENTER - 224)) |
                        (1 << (PostgresParser.DIAGONAL - 224)) |
                        (1 << (PostgresParser.DIAMETER - 224)) |
                        (1 << (PostgresParser.HEIGHT - 224)) |
                        (1 << (PostgresParser.ISCLOSED - 224)) |
                        (1 << (PostgresParser.ISOPEN - 224)) |
                        (1 << (PostgresParser.NPOINTS - 224)) |
                        (1 << (PostgresParser.PCLOSE - 224)) |
                        (1 << (PostgresParser.POPEN - 224)))) !==
                      0) ||
                  (((_la - 256) & ~0x1f) === 0 &&
                    ((1 << (_la - 256)) &
                      ((1 << (PostgresParser.RADIUS - 256)) |
                        (1 << (PostgresParser.SLOPE - 256)) |
                        (1 << (PostgresParser.WIDTH - 256)) |
                        (1 << (PostgresParser.SINH - 256)) |
                        (1 << (PostgresParser.COSH - 256)) |
                        (1 << (PostgresParser.TANH - 256)) |
                        (1 << (PostgresParser.ASINH - 256)) |
                        (1 << (PostgresParser.ACOSH - 256)) |
                        (1 << (PostgresParser.ATANH - 256)) |
                        (1 << (PostgresParser.ABBREV - 256)) |
                        (1 << (PostgresParser.BROADCAST - 256)) |
                        (1 << (PostgresParser.FAMILY - 256)) |
                        (1 << (PostgresParser.HOST - 256)) |
                        (1 << (PostgresParser.HOSTMASK - 256)) |
                        (1 << (PostgresParser.INET_MERGE - 256)) |
                        (1 << (PostgresParser.INET_SAME_FAMILY - 256)) |
                        (1 << (PostgresParser.MASKLEN - 256)) |
                        (1 << (PostgresParser.NETMASK - 256)) |
                        (1 << (PostgresParser.NETWORK - 256)) |
                        (1 << (PostgresParser.SET_MASKLEN - 256)) |
                        (1 << (PostgresParser.TEXT - 256)) |
                        (1 << (PostgresParser.TRUNC - 256)) |
                        (1 << (PostgresParser.MACADDR8_SET7BIT - 256)) |
                        (1 << (PostgresParser.JSON_ARRAY_ELEMENTS - 256)) |
                        (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS - 256)) |
                        (1 << (PostgresParser.JSON_ARRAY_ELEMENTS_TEXT - 256)) |
                        (1 << (PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT - 256)) |
                        (1 << (PostgresParser.JSON_ARRAY_LENGTH - 256)) |
                        (1 << (PostgresParser.JSONB_ARRAY_LENGTH - 256)) |
                        (1 << (PostgresParser.JSON_EACH - 256)) |
                        (1 << (PostgresParser.JSONB_EACH - 256)) |
                        (1 << (PostgresParser.JSON_EACH_TEXT - 256)))) !==
                      0) ||
                  (((_la - 288) & ~0x1f) === 0 &&
                    ((1 << (_la - 288)) &
                      ((1 << (PostgresParser.JSONB_EACH_TEXT - 288)) |
                        (1 << (PostgresParser.JSON_EXTRACT_PATH - 288)) |
                        (1 << (PostgresParser.JSONB_EXTRACT_PATH - 288)) |
                        (1 << (PostgresParser.JSON_EXTRACT_PATH_TEXT - 288)) |
                        (1 << (PostgresParser.JSONB_EXTRACT_PATH_TEXT - 288)) |
                        (1 << (PostgresParser.JSON_OBJECT_KEYS - 288)) |
                        (1 << (PostgresParser.JSONB_OBJECT_KEYS - 288)) |
                        (1 << (PostgresParser.JSON_POPULATE_RECORD - 288)) |
                        (1 << (PostgresParser.JSONB_POPULATE_RECORD - 288)) |
                        (1 << (PostgresParser.JSON_POPULATE_RECORDSET - 288)) |
                        (1 << (PostgresParser.JSONB_POPULATE_RECORDSET - 288)) |
                        (1 << (PostgresParser.JSON_TO_RECORD - 288)) |
                        (1 << (PostgresParser.JSONB_TO_RECORD - 288)) |
                        (1 << (PostgresParser.JSON_TO_RECORDSET - 288)) |
                        (1 << (PostgresParser.JSONB_TO_RECORDSET - 288)) |
                        (1 << (PostgresParser.JSON_STRIP_NULLS - 288)) |
                        (1 << (PostgresParser.JSONB_STRIP_NULLS - 288)) |
                        (1 << (PostgresParser.JSONB_SET - 288)) |
                        (1 << (PostgresParser.JSONB_SET_LAX - 288)) |
                        (1 << (PostgresParser.JSONB_INSERT - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_EXISTS - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_MATCH - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_EXISTS_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_MATCH_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PATH_QUERY_FIRST_TZ - 288)) |
                        (1 << (PostgresParser.JSONB_PRETTY - 288)) |
                        (1 << (PostgresParser.JSON_TYPEOF - 288)))) !==
                      0) ||
                  (((_la - 320) & ~0x1f) === 0 &&
                    ((1 << (_la - 320)) &
                      ((1 << (PostgresParser.JSONB_TYPEOF - 320)) |
                        (1 << (PostgresParser.TO_JSON - 320)) |
                        (1 << (PostgresParser.TO_JSONB - 320)) |
                        (1 << (PostgresParser.ARRAY_TO_JSON - 320)) |
                        (1 << (PostgresParser.ROW_TO_JSON - 320)) |
                        (1 << (PostgresParser.JSON_BUILD_ARRAY - 320)) |
                        (1 << (PostgresParser.JSONB_BUILD_ARRAY - 320)) |
                        (1 << (PostgresParser.JSON_BUILD_OBJECT - 320)) |
                        (1 << (PostgresParser.JSON_OBJECT - 320)) |
                        (1 << (PostgresParser.JSONB_OBJECT - 320)) |
                        (1 << (PostgresParser.ABS - 320)) |
                        (1 << (PostgresParser.CBRT - 320)) |
                        (1 << (PostgresParser.CEIL - 320)) |
                        (1 << (PostgresParser.DEGREES - 320)) |
                        (1 << (PostgresParser.DIV - 320)) |
                        (1 << (PostgresParser.EXP - 320)) |
                        (1 << (PostgresParser.FACTORIAL - 320)) |
                        (1 << (PostgresParser.FLOOR - 320)) |
                        (1 << (PostgresParser.GCD - 320)) |
                        (1 << (PostgresParser.LCM - 320)) |
                        (1 << (PostgresParser.LN - 320)) |
                        (1 << (PostgresParser.LOG - 320)) |
                        (1 << (PostgresParser.LOG10 - 320)) |
                        (1 << (PostgresParser.MIN_SCALE - 320)) |
                        (1 << (PostgresParser.MOD - 320)) |
                        (1 << (PostgresParser.PI - 320)) |
                        (1 << (PostgresParser.POWER - 320)) |
                        (1 << (PostgresParser.RADIANS - 320)) |
                        (1 << (PostgresParser.ROUND - 320)) |
                        (1 << (PostgresParser.SCALE - 320)) |
                        (1 << (PostgresParser.SIGN - 320)) |
                        (1 << (PostgresParser.SQRT - 320)))) !==
                      0) ||
                  (((_la - 352) & ~0x1f) === 0 &&
                    ((1 << (_la - 352)) &
                      ((1 << (PostgresParser.TRIM_SCALE - 352)) |
                        (1 << (PostgresParser.WIDTH_BUCKET - 352)) |
                        (1 << (PostgresParser.MODE - 352)) |
                        (1 << (PostgresParser.PERCENTILE_CONT - 352)) |
                        (1 << (PostgresParser.PERCENTILE_DISC - 352)) |
                        (1 << (PostgresParser.RANDOM - 352)) |
                        (1 << (PostgresParser.SETSEED - 352)) |
                        (1 << (PostgresParser.LOWER - 352)) |
                        (1 << (PostgresParser.UPPER - 352)) |
                        (1 << (PostgresParser.ISEMPTY - 352)) |
                        (1 << (PostgresParser.LOWER_INC - 352)) |
                        (1 << (PostgresParser.UPPER_INC - 352)) |
                        (1 << (PostgresParser.LOWER_INF - 352)) |
                        (1 << (PostgresParser.UPPER_INF - 352)) |
                        (1 << (PostgresParser.RANGE_MERGE - 352)) |
                        (1 << (PostgresParser.MULTIRANGE - 352)) |
                        (1 << (PostgresParser.TS_DEBUG - 352)) |
                        (1 << (PostgresParser.TS_LEXIZE - 352)) |
                        (1 << (PostgresParser.TS_PARSE - 352)) |
                        (1 << (PostgresParser.TS_TOKEN_TYPE - 352)) |
                        (1 << (PostgresParser.ARRAY_TO_TSVECTOR - 352)) |
                        (1 << (PostgresParser.GET_CURRENT_TS_CONFIG - 352)) |
                        (1 << (PostgresParser.NUMNODE - 352)) |
                        (1 << (PostgresParser.PLAINTO_TSQUERY - 352)) |
                        (1 << (PostgresParser.PHRASETO_TSQUERY - 352)) |
                        (1 << (PostgresParser.WEBSEARCH_TO_TSQUERY - 352)) |
                        (1 << (PostgresParser.QUERYTREE - 352)) |
                        (1 << (PostgresParser.SETWEIGHT - 352)) |
                        (1 << (PostgresParser.STRIP - 352)) |
                        (1 << (PostgresParser.TO_TSQUERY - 352)) |
                        (1 << (PostgresParser.TO_TSVECTOR - 352)) |
                        (1 << (PostgresParser.JSON_TO_TSVECTOR - 352)))) !==
                      0) ||
                  (((_la - 384) & ~0x1f) === 0 &&
                    ((1 << (_la - 384)) &
                      ((1 << (PostgresParser.TS_DELETE - 384)) |
                        (1 << (PostgresParser.TS_FILTER - 384)) |
                        (1 << (PostgresParser.TS_HEADLINE - 384)) |
                        (1 << (PostgresParser.TS_RANK - 384)) |
                        (1 << (PostgresParser.TS_RANK_CD - 384)) |
                        (1 << (PostgresParser.TS_REWRITE - 384)) |
                        (1 << (PostgresParser.TSQUERY_PHRASE - 384)) |
                        (1 << (PostgresParser.TSVECTOR_TO_ARRAY - 384)) |
                        (1 << (PostgresParser.GENERATE_SERIES - 384)) |
                        (1 << (PostgresParser.GENERATE_SUBSCRIPTS - 384)) |
                        (1 << (PostgresParser.CORR - 384)) |
                        (1 << (PostgresParser.COVAR_POP - 384)) |
                        (1 << (PostgresParser.COVAR_SAMP - 384)) |
                        (1 << (PostgresParser.REGR_AVGX - 384)) |
                        (1 << (PostgresParser.REGR_AVGY - 384)) |
                        (1 << (PostgresParser.REGR_COUNT - 384)) |
                        (1 << (PostgresParser.REGR_INTERCEPT - 384)) |
                        (1 << (PostgresParser.REGR_R2 - 384)) |
                        (1 << (PostgresParser.REGR_SLOPE - 384)) |
                        (1 << (PostgresParser.REGR_SXX - 384)) |
                        (1 << (PostgresParser.REGR_SXY - 384)) |
                        (1 << (PostgresParser.REGR_SYY - 384)) |
                        (1 << (PostgresParser.STDDEV - 384)) |
                        (1 << (PostgresParser.STDDEV_POP - 384)) |
                        (1 << (PostgresParser.STDDEV_SAMP - 384)) |
                        (1 << (PostgresParser.VARIANCE - 384)) |
                        (1 << (PostgresParser.VAR_POP - 384)) |
                        (1 << (PostgresParser.VAR_SAMP - 384)) |
                        (1 << (PostgresParser.ASCII - 384)) |
                        (1 << (PostgresParser.CHR - 384)) |
                        (1 << (PostgresParser.CONCAT - 384)) |
                        (1 << (PostgresParser.CONCAT_WS - 384)))) !==
                      0) ||
                  (((_la - 416) & ~0x1f) === 0 &&
                    ((1 << (_la - 416)) &
                      ((1 << (PostgresParser.FORMAT - 416)) |
                        (1 << (PostgresParser.INITCAP - 416)) |
                        (1 << (PostgresParser.LPAD - 416)) |
                        (1 << (PostgresParser.PARSE_IDENT - 416)) |
                        (1 << (PostgresParser.QUOTE_IDENT - 416)) |
                        (1 << (PostgresParser.QUOTE_LITERAL - 416)) |
                        (1 << (PostgresParser.QUOTE_NULLABLE - 416)) |
                        (1 << (PostgresParser.REGEXP_MATCH - 416)) |
                        (1 << (PostgresParser.REGEXP_MATCHES - 416)) |
                        (1 << (PostgresParser.REGEXP_REPLACE - 416)) |
                        (1 << (PostgresParser.REGEXP_SPLIT_TO_ARRAY - 416)) |
                        (1 << (PostgresParser.REGEXP_SPLIT_TO_TABLE - 416)) |
                        (1 << (PostgresParser.REPEAT - 416)) |
                        (1 << (PostgresParser.REPLACE - 416)) |
                        (1 << (PostgresParser.REVERSE - 416)) |
                        (1 << (PostgresParser.RPAD - 416)) |
                        (1 << (PostgresParser.SPLIT_PART - 416)) |
                        (1 << (PostgresParser.STRPOS - 416)) |
                        (1 << (PostgresParser.STARTS_WITH - 416)) |
                        (1 << (PostgresParser.STRING_TO_ARRAY - 416)) |
                        (1 << (PostgresParser.STRING_TO_TABLE - 416)) |
                        (1 << (PostgresParser.TO_ASCII - 416)) |
                        (1 << (PostgresParser.TO_HEX - 416)) |
                        (1 << (PostgresParser.TRANSLATE - 416)) |
                        (1 << (PostgresParser.UNISTR - 416)) |
                        (1 << (PostgresParser.BIT_LENGTH - 416)) |
                        (1 << (PostgresParser.CHAR_LENGTH - 416)) |
                        (1 << (PostgresParser.CHARACTER_LENGTH - 416)) |
                        (1 << (PostgresParser.NORMALIZE - 416)) |
                        (1 << (PostgresParser.OCTET_LENGTH - 416)) |
                        (1 << (PostgresParser.OVERLAY - 416)) |
                        (1 << (PostgresParser.POSITION - 416)))) !==
                      0) ||
                  (((_la - 448) & ~0x1f) === 0 &&
                    ((1 << (_la - 448)) &
                      ((1 << (PostgresParser.SUBSTRING - 448)) |
                        (1 << (PostgresParser.TRIM - 448)) |
                        (1 << (PostgresParser.ACOS - 448)) |
                        (1 << (PostgresParser.ACOSD - 448)) |
                        (1 << (PostgresParser.ASIN - 448)) |
                        (1 << (PostgresParser.ASIND - 448)) |
                        (1 << (PostgresParser.ATAN - 448)) |
                        (1 << (PostgresParser.ATAND - 448)) |
                        (1 << (PostgresParser.ATAN2 - 448)) |
                        (1 << (PostgresParser.ATAN2D - 448)) |
                        (1 << (PostgresParser.COS - 448)) |
                        (1 << (PostgresParser.COSD - 448)) |
                        (1 << (PostgresParser.COT - 448)) |
                        (1 << (PostgresParser.COTD - 448)) |
                        (1 << (PostgresParser.SIN - 448)) |
                        (1 << (PostgresParser.SIND - 448)) |
                        (1 << (PostgresParser.TAN - 448)) |
                        (1 << (PostgresParser.TAND - 448)) |
                        (1 << (PostgresParser.GEN_RANDOM_UUID - 448)) |
                        (1 << (PostgresParser.ROW_NUMBER - 448)) |
                        (1 << (PostgresParser.RANK - 448)) |
                        (1 << (PostgresParser.DENSE_RANK - 448)) |
                        (1 << (PostgresParser.PERCENT_RANK - 448)) |
                        (1 << (PostgresParser.CUME_DIST - 448)) |
                        (1 << (PostgresParser.NTILE - 448)) |
                        (1 << (PostgresParser.LAG - 448)) |
                        (1 << (PostgresParser.LEAD - 448)) |
                        (1 << (PostgresParser.FIRST_VALUE - 448)) |
                        (1 << (PostgresParser.LAST_VALUE - 448)) |
                        (1 << (PostgresParser.NTH_VALUE - 448)) |
                        (1 << (PostgresParser.XMLCOMMENT - 448)) |
                        (1 << (PostgresParser.XMLCONCAT - 448)))) !==
                      0) ||
                  (((_la - 480) & ~0x1f) === 0 &&
                    ((1 << (_la - 480)) &
                      ((1 << (PostgresParser.XMLELEMENT - 480)) |
                        (1 << (PostgresParser.XMLFOREST - 480)) |
                        (1 << (PostgresParser.XMLPI - 480)) |
                        (1 << (PostgresParser.XMLROOT - 480)) |
                        (1 << (PostgresParser.XMLEXISTS - 480)) |
                        (1 << (PostgresParser.XML_IS_WELL_FORMED - 480)) |
                        (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 480)) |
                        (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 480)) |
                        (1 << (PostgresParser.XPATH - 480)) |
                        (1 << (PostgresParser.XPATH_EXISTS - 480)) |
                        (1 << (PostgresParser.XMLTABLE - 480)) |
                        (1 << (PostgresParser.TABLE_TO_XML - 480)) |
                        (1 << (PostgresParser.LEFT_PAREN - 480)) |
                        (1 << (PostgresParser.PLUS - 480)) |
                        (1 << (PostgresParser.MINUS - 480)) |
                        (1 << (PostgresParser.MULTIPLY - 480)))) !==
                      0) ||
                  (((_la - 517) & ~0x1f) === 0 &&
                    ((1 << (_la - 517)) &
                      ((1 << (PostgresParser.LESS_LESS - 517)) |
                        (1 << (PostgresParser.GREATER_GREATER - 517)) |
                        (1 << (PostgresParser.HASH_SIGN - 517)) |
                        (1 << (PostgresParser.OP_CHARS - 517)) |
                        (1 << (PostgresParser.NUMBER_LITERAL - 517)) |
                        (1 << (PostgresParser.REAL_NUMBER - 517)) |
                        (1 << (PostgresParser.DOLLAR_NUMBER - 517)) |
                        (1 << (PostgresParser.Identifier - 517)) |
                        (1 << (PostgresParser.QuotedIdentifier - 517)) |
                        (1 << (PostgresParser.Character_String_Literal - 517)) |
                        (1 << (PostgresParser.BeginDollarStringConstant - 517)))) !==
                      0)
                ) {
                  {
                    this.state = 1663;
                    this.vex(0);
                    this.state = 1664;
                    this.match(PostgresParser.COMMA);
                    this.state = 1665;
                    this.vex(0);
                  }
                }

                this.state = 1669;
                this.match(PostgresParser.RIGHT_BRACKET);
                this.state = 1670;
                this.match(PostgresParser.RIGHT_BRACKET);
              }
            }

            this.state = 1673;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.XMLTABLE:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 1675;
            this.match(PostgresParser.XMLTABLE);
            this.state = 1676;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1695;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.XMLNAMESPACES) {
              {
                this.state = 1677;
                this.match(PostgresParser.XMLNAMESPACES);
                this.state = 1678;
                this.match(PostgresParser.LEFT_PAREN);
                this.state = 1679;
                this.vex(0);
                this.state = 1680;
                this.match(PostgresParser.AS);
                this.state = 1681;
                _localctx._name = this.identifier();
                this.state = 1689;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PostgresParser.COMMA) {
                  {
                    {
                      this.state = 1682;
                      this.match(PostgresParser.COMMA);
                      this.state = 1683;
                      this.vex(0);
                      this.state = 1684;
                      this.match(PostgresParser.AS);
                      this.state = 1685;
                      _localctx._name = this.identifier();
                    }
                  }
                  this.state = 1691;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                }
                this.state = 1692;
                this.match(PostgresParser.RIGHT_PAREN);
                this.state = 1693;
                this.match(PostgresParser.COMMA);
              }
            }

            this.state = 1697;
            this.vex(0);
            this.state = 1698;
            this.match(PostgresParser.PASSING);
            this.state = 1701;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 229, this._ctx)) {
              case 1:
                {
                  this.state = 1699;
                  this.match(PostgresParser.BY);
                  this.state = 1700;
                  this.match(PostgresParser.REF);
                }
                break;
            }
            this.state = 1703;
            this.vex(0);
            this.state = 1706;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.BY) {
              {
                this.state = 1704;
                this.match(PostgresParser.BY);
                this.state = 1705;
                this.match(PostgresParser.REF);
              }
            }

            this.state = 1708;
            this.match(PostgresParser.COLUMNS);
            this.state = 1709;
            _localctx._name = this.identifier();
            this.state = 1727;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.RECURSIVE:
              case PostgresParser.BY:
              case PostgresParser.OPERATOR:
              case PostgresParser.NULLS:
              case PostgresParser.FIRST:
              case PostgresParser.LAST:
              case PostgresParser.LEFT:
              case PostgresParser.RIGHT:
              case PostgresParser.FULL:
              case PostgresParser.INNER:
              case PostgresParser.OUTER:
              case PostgresParser.CROSS:
              case PostgresParser.JOIN:
              case PostgresParser.NATURAL:
              case PostgresParser.TABLESAMPLE:
              case PostgresParser.INTERVAL:
              case PostgresParser.SECOND:
              case PostgresParser.MINUTE:
              case PostgresParser.HOUR:
              case PostgresParser.DAY:
              case PostgresParser.MONTH:
              case PostgresParser.YEAR:
              case PostgresParser.IS:
              case PostgresParser.ISNULL:
              case PostgresParser.NOTNULL:
              case PostgresParser.LIKE:
              case PostgresParser.ILIKE:
              case PostgresParser.BOOLEAN:
              case PostgresParser.SMALLINT:
              case PostgresParser.INT:
              case PostgresParser.INTEGER:
              case PostgresParser.BIGINT:
              case PostgresParser.DEC:
              case PostgresParser.DECIMAL:
              case PostgresParser.DOUBLE:
              case PostgresParser.FLOAT:
              case PostgresParser.NUMERIC:
              case PostgresParser.REAL:
              case PostgresParser.BIT:
              case PostgresParser.VARYING:
              case PostgresParser.NATIONAL:
              case PostgresParser.CHARACTER:
              case PostgresParser.CHAR:
              case PostgresParser.NCHAR:
              case PostgresParser.TIME:
              case PostgresParser.WITHOUT:
              case PostgresParser.WITHIN:
              case PostgresParser.ZONE:
              case PostgresParser.TIMESTAMP:
              case PostgresParser.VARCHAR:
              case PostgresParser.SETOF:
              case PostgresParser.OF:
              case PostgresParser.OVER:
              case PostgresParser.PARTITION:
              case PostgresParser.ROWS:
              case PostgresParser.RANGE:
              case PostgresParser.GROUPS:
              case PostgresParser.UNBOUNDED:
              case PostgresParser.PRECEDING:
              case PostgresParser.FOLLOWING:
              case PostgresParser.CURRENT:
              case PostgresParser.EXCLUDE:
              case PostgresParser.TIES:
              case PostgresParser.NO:
              case PostgresParser.OTHERS:
              case PostgresParser.ROLLUP:
              case PostgresParser.SETS:
              case PostgresParser.OVERLAPS:
              case PostgresParser.AT:
              case PostgresParser.SIMILAR:
              case PostgresParser.ESCAPE:
              case PostgresParser.NEXT:
              case PostgresParser.DOCUMENT:
              case PostgresParser.UNKNOWN:
              case PostgresParser.FILTER:
              case PostgresParser.ALIAS:
              case PostgresParser.FAMILY:
              case PostgresParser.TEXT:
              case PostgresParser.MODE:
              case PostgresParser.STRIP:
              case PostgresParser.REPLACE:
              case PostgresParser.Identifier:
              case PostgresParser.QuotedIdentifier:
                {
                  this.state = 1710;
                  this.data_type();
                  this.state = 1713;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.PATH) {
                    {
                      this.state = 1711;
                      this.match(PostgresParser.PATH);
                      this.state = 1712;
                      this.vex(0);
                    }
                  }

                  this.state = 1717;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.DEFAULT) {
                    {
                      this.state = 1715;
                      this.match(PostgresParser.DEFAULT);
                      this.state = 1716;
                      this.vex(0);
                    }
                  }

                  this.state = 1723;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.NOT || _la === PostgresParser.NULL) {
                    {
                      this.state = 1720;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                      if (_la === PostgresParser.NOT) {
                        {
                          this.state = 1719;
                          this.match(PostgresParser.NOT);
                        }
                      }

                      this.state = 1722;
                      this.match(PostgresParser.NULL);
                    }
                  }
                }
                break;
              case PostgresParser.FOR:
                {
                  this.state = 1725;
                  this.match(PostgresParser.FOR);
                  this.state = 1726;
                  this.match(PostgresParser.ORDINALITY);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 1752;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 1729;
                  this.match(PostgresParser.COMMA);
                  this.state = 1730;
                  _localctx._name = this.identifier();
                  this.state = 1748;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case PostgresParser.RECURSIVE:
                    case PostgresParser.BY:
                    case PostgresParser.OPERATOR:
                    case PostgresParser.NULLS:
                    case PostgresParser.FIRST:
                    case PostgresParser.LAST:
                    case PostgresParser.LEFT:
                    case PostgresParser.RIGHT:
                    case PostgresParser.FULL:
                    case PostgresParser.INNER:
                    case PostgresParser.OUTER:
                    case PostgresParser.CROSS:
                    case PostgresParser.JOIN:
                    case PostgresParser.NATURAL:
                    case PostgresParser.TABLESAMPLE:
                    case PostgresParser.INTERVAL:
                    case PostgresParser.SECOND:
                    case PostgresParser.MINUTE:
                    case PostgresParser.HOUR:
                    case PostgresParser.DAY:
                    case PostgresParser.MONTH:
                    case PostgresParser.YEAR:
                    case PostgresParser.IS:
                    case PostgresParser.ISNULL:
                    case PostgresParser.NOTNULL:
                    case PostgresParser.LIKE:
                    case PostgresParser.ILIKE:
                    case PostgresParser.BOOLEAN:
                    case PostgresParser.SMALLINT:
                    case PostgresParser.INT:
                    case PostgresParser.INTEGER:
                    case PostgresParser.BIGINT:
                    case PostgresParser.DEC:
                    case PostgresParser.DECIMAL:
                    case PostgresParser.DOUBLE:
                    case PostgresParser.FLOAT:
                    case PostgresParser.NUMERIC:
                    case PostgresParser.REAL:
                    case PostgresParser.BIT:
                    case PostgresParser.VARYING:
                    case PostgresParser.NATIONAL:
                    case PostgresParser.CHARACTER:
                    case PostgresParser.CHAR:
                    case PostgresParser.NCHAR:
                    case PostgresParser.TIME:
                    case PostgresParser.WITHOUT:
                    case PostgresParser.WITHIN:
                    case PostgresParser.ZONE:
                    case PostgresParser.TIMESTAMP:
                    case PostgresParser.VARCHAR:
                    case PostgresParser.SETOF:
                    case PostgresParser.OF:
                    case PostgresParser.OVER:
                    case PostgresParser.PARTITION:
                    case PostgresParser.ROWS:
                    case PostgresParser.RANGE:
                    case PostgresParser.GROUPS:
                    case PostgresParser.UNBOUNDED:
                    case PostgresParser.PRECEDING:
                    case PostgresParser.FOLLOWING:
                    case PostgresParser.CURRENT:
                    case PostgresParser.EXCLUDE:
                    case PostgresParser.TIES:
                    case PostgresParser.NO:
                    case PostgresParser.OTHERS:
                    case PostgresParser.ROLLUP:
                    case PostgresParser.SETS:
                    case PostgresParser.OVERLAPS:
                    case PostgresParser.AT:
                    case PostgresParser.SIMILAR:
                    case PostgresParser.ESCAPE:
                    case PostgresParser.NEXT:
                    case PostgresParser.DOCUMENT:
                    case PostgresParser.UNKNOWN:
                    case PostgresParser.FILTER:
                    case PostgresParser.ALIAS:
                    case PostgresParser.FAMILY:
                    case PostgresParser.TEXT:
                    case PostgresParser.MODE:
                    case PostgresParser.STRIP:
                    case PostgresParser.REPLACE:
                    case PostgresParser.Identifier:
                    case PostgresParser.QuotedIdentifier:
                      {
                        this.state = 1731;
                        this.data_type();
                        this.state = 1734;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PostgresParser.PATH) {
                          {
                            this.state = 1732;
                            this.match(PostgresParser.PATH);
                            this.state = 1733;
                            this.vex(0);
                          }
                        }

                        this.state = 1738;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PostgresParser.DEFAULT) {
                          {
                            this.state = 1736;
                            this.match(PostgresParser.DEFAULT);
                            this.state = 1737;
                            this.vex(0);
                          }
                        }

                        this.state = 1744;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PostgresParser.NOT || _la === PostgresParser.NULL) {
                          {
                            this.state = 1741;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PostgresParser.NOT) {
                              {
                                this.state = 1740;
                                this.match(PostgresParser.NOT);
                              }
                            }

                            this.state = 1743;
                            this.match(PostgresParser.NULL);
                          }
                        }
                      }
                      break;
                    case PostgresParser.FOR:
                      {
                        this.state = 1746;
                        this.match(PostgresParser.FOR);
                        this.state = 1747;
                        this.match(PostgresParser.ORDINALITY);
                      }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                }
              }
              this.state = 1754;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1755;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.TABLE_TO_XML:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 1757;
            this.match(PostgresParser.TABLE_TO_XML);
            this.state = 1758;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1759;
            this.identifier();
            this.state = 1760;
            this.match(PostgresParser.COMMA);
            this.state = 1761;
            this.boolean_value();
            this.state = 1762;
            this.match(PostgresParser.COMMA);
            this.state = 1763;
            this.boolean_value();
            this.state = 1764;
            this.match(PostgresParser.COMMA);
            this.state = 1765;
            this.vex(0);
            this.state = 1766;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 17:
        return this.vex_sempred(_localctx as VexContext, predIndex);

      case 18:
        return this.vex_b_sempred(_localctx as Vex_bContext, predIndex);

      case 49:
        return this.select_ops_sempred(_localctx as Select_opsContext, predIndex);

      case 54:
        return this.from_item_sempred(_localctx as From_itemContext, predIndex);
    }
    return true;
  }
  private vex_sempred(_localctx: VexContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 23);

      case 1:
        return this.precpred(this._ctx, 22);

      case 2:
        return this.precpred(this._ctx, 21);

      case 3:
        return this.precpred(this._ctx, 20);

      case 4:
        return this.precpred(this._ctx, 19);

      case 5:
        return this.precpred(this._ctx, 15);

      case 6:
        return this.precpred(this._ctx, 14);

      case 7:
        return this.precpred(this._ctx, 13);

      case 8:
        return this.precpred(this._ctx, 12);

      case 9:
        return this.precpred(this._ctx, 10);

      case 10:
        return this.precpred(this._ctx, 3);

      case 11:
        return this.precpred(this._ctx, 2);

      case 12:
        return this.precpred(this._ctx, 28);

      case 13:
        return this.precpred(this._ctx, 25);

      case 14:
        return this.precpred(this._ctx, 17);

      case 15:
        return this.precpred(this._ctx, 16);

      case 16:
        return this.precpred(this._ctx, 11);

      case 17:
        return this.precpred(this._ctx, 9);

      case 18:
        return this.precpred(this._ctx, 8);

      case 19:
        return this.precpred(this._ctx, 7);

      case 20:
        return this.precpred(this._ctx, 6);

      case 21:
        return this.precpred(this._ctx, 5);
    }
    return true;
  }
  private vex_b_sempred(_localctx: Vex_bContext, predIndex: number): boolean {
    switch (predIndex) {
      case 22:
        return this.precpred(this._ctx, 12);

      case 23:
        return this.precpred(this._ctx, 11);

      case 24:
        return this.precpred(this._ctx, 10);

      case 25:
        return this.precpred(this._ctx, 9);

      case 26:
        return this.precpred(this._ctx, 6);

      case 27:
        return this.precpred(this._ctx, 5);

      case 28:
        return this.precpred(this._ctx, 16);

      case 29:
        return this.precpred(this._ctx, 7);

      case 30:
        return this.precpred(this._ctx, 4);

      case 31:
        return this.precpred(this._ctx, 3);

      case 32:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private select_ops_sempred(_localctx: Select_opsContext, predIndex: number): boolean {
    switch (predIndex) {
      case 33:
        return this.precpred(this._ctx, 2);
    }
    return true;
  }
  private from_item_sempred(_localctx: From_itemContext, predIndex: number): boolean {
    switch (predIndex) {
      case 34:
        return this.precpred(this._ctx, 5);

      case 35:
        return this.precpred(this._ctx, 2);

      case 36:
        return this.precpred(this._ctx, 4);

      case 37:
        return this.precpred(this._ctx, 3);
    }
    return true;
  }

  private static readonly _serializedATNSegments: number = 4;
  private static readonly _serializedATNSegment0: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u021C\u06ED\x04' +
    '\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04' +
    '\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r' +
    '\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12' +
    '\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17' +
    '\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C' +
    '\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04' +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    '+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
    '4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04' +
    'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x03\x02\x05\x02\xA8\n\x02\x03\x02' +
    '\x07\x02\xAB\n\x02\f\x02\x0E\x02\xAE\v\x02\x03\x02\x03\x02\x06\x02\xB2' +
    '\n\x02\r\x02\x0E\x02\xB3\x03\x02\x05\x02\xB7\n\x02\x07\x02\xB9\n\x02\f' +
    '\x02\x0E\x02\xBC\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03' +
    '\xC3\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\xC8\n\x04\x03\x05\x03\x05\x03' +
    '\x05\x05\x05\xCD\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06' +
    '\xD4\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03' +
    '\v\x03\f\x03\f\x03\f\x07\f\xE3\n\f\f\f\x0E\f\xE6\v\f\x03\r\x05\r\xE9\n' +
    '\r\x03\r\x03\r\x03\r\x05\r\xEE\n\r\x03\r\x06\r\xF1\n\r\r\r\x0E\r\xF2\x05' +
    '\r\xF5\n\r\x03\x0E\x03\x0E\x05\x0E\xF9\n\x0E\x03\x0E\x03\x0E\x03\x0F\x03' +
    '\x0F\x03\x0F\x05\x0F\u0100\n\x0F\x03\x0F\x05\x0F\u0103\n\x0F\x03\x0F\x03' +
    '\x0F\x03\x0F\x05\x0F\u0108\n\x0F\x03\x0F\x03\x0F\x05\x0F\u010C\n\x0F\x03' +
    '\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0112\n\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x05\x0F\u0118\n\x0F\x03\x0F\x05\x0F\u011B\n\x0F\x03\x0F\x05\x0F' +
    '\u011E\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0122\n\x0F\x03\x0F\x05\x0F\u0125' +
    '\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0129\n\x0F\x03\x0F\x05\x0F\u012C\n\x0F' +
    '\x03\x0F\x03\x0F\x05\x0F\u0130\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05' +
    '\x0F\u0136\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u013B\n\x0F\x03\x0F\x03' +
    '\x0F\x05\x0F\u013F\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0144\n\x0F\x03' +
    '\x0F\x03\x0F\x05\x0F\u0148\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x07\x0F\u014F\n\x0F\f\x0F\x0E\x0F\u0152\v\x0F\x03\x0F\x03\x0F\x05\x0F' +
    '\u0156\n\x0F\x05\x0F\u0158\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10' +
    '\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10' +
    '\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10' +
    '\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0175\n\x10\x03\x11\x03\x11\x03' +
    '\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u017F\n\x12\x03\x12' +
    '\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0188\n\x13\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x06\x13\u018E\n\x13\r\x13\x0E\x13\u018F\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x05\x13\u019C\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01B2\n\x13\x03\x13\x03' +
    '\x13\x05\x13\u01B6\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x05\x13\u01BE\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01C4\n\x13' +
    '\x03\x13\x03\x13\x03\x13\x05\x13\u01C9\n\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x05\x13\u01CF\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01DB\n\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01EF\n\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u01F7\n\x13\f' +
    '\x13\x0E\x13\u01FA\v\x13\x05\x13\u01FC\n\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x13\x05\x13\u0203\n\x13\x03\x13\x03\x13\x05\x13\u0207\n\x13\x03' +
    '\x13\x03\x13\x03\x13\x05\x13\u020C\n\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x05\x13\u0212\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0218\n\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x07\x13\u0223\n\x13\f\x13\x0E\x13\u0226\v\x13\x03\x14\x03\x14\x03\x14' +
    '\x03\x14\x03\x14\x05\x14\u022D\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x06' +
    '\x14\u0233\n\x14\r\x14\x0E\x14\u0234\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x05\x14\u023F\n\x14\x03\x14\x03\x14\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0254' +
    '\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x05\x14\u0261\n\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x05\x14\u0267\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u026D' +
    '\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0274\n\x14\f\x14' +
    '\x0E\x14\u0277\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03' +
    '\x15\x03\x15\x05\x15\u0281\n\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16' +
    '\x03\x16\x03\x16\x03\x16\x05\x16\u028B\n\x16\x03\x17\x03\x17\x03\x17\x03' +
    '\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03' +
    '\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u029E\n\x18\x03\x18\x03\x18' +
    '\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18' +
    '\x05\x18\u02AB\n\x18\x03\x19\x03\x19\x03\x19\x05\x19\u02B0\n\x19\x03\x1A' +
    '\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C\u02B8\n\x1C\x03\x1C\x03' +
    '\x1C\x03\x1C\x03\x1C\x03\x1C\x06\x1C\u02BF\n\x1C\r\x1C\x0E\x1C\u02C0\x03' +
    '\x1C\x03\x1C\x05\x1C\u02C5\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D' +
    '\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x05\x1E\u02D2\n\x1E\x03' +
    '\x1E\x03\x1E\x03\x1E\x07\x1E\u02D7\n\x1E\f\x1E\x0E\x1E\u02DA\v\x1E\x03' +
    '\x1E\x05\x1E\u02DD\n\x1E\x05\x1E\u02DF\n\x1E\x03\x1E\x03\x1E\x03\x1F\x03' +
    '\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02EA\n\x1F\x03\x1F' +
    '\x05\x1F\u02ED\n\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u02F2\n\x1F\x05\x1F' +
    '\u02F4\n\x1F\x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03 \x03' +
    ' \x07 \u0302\n \f \x0E \u0305\v \x05 \u0307\n \x03 \x05 \u030A\n \x03' +
    '!\x05!\u030D\n!\x03!\x03!\x03!\x05!\u0312\n!\x03!\x03!\x03"\x03"\x03' +
    '#\x03#\x03#\x03#\x05#\u031C\n#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03' +
    '$\x03%\x03%\x05%\u0328\n%\x03%\x05%\u032B\n%\x03%\x05%\u032E\n%\x03%\x05' +
    '%\u0331\n%\x03%\x03%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u033C\n&' +
    "\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0345\n&\x05&\u0347\n&\x03'" +
    "\x03'\x03'\x03'\x03'\x05'\u034E\n'\x03(\x03(\x03(\x05(\u0353\n(" +
    '\x03)\x03)\x03)\x05)\u0358\n)\x03)\x03)\x03)\x05)\u035D\n)\x07)\u035F' +
    '\n)\f)\x0E)\u0362\v)\x05)\u0364\n)\x03)\x03)\x03*\x03*\x03*\x03*\x03*' +
    '\x03*\x03*\x05*\u036F\n*\x05*\u0371\n*\x03+\x03+\x03+\x03+\x03+\x05+\u0378' +
    '\n+\x05+\u037A\n+\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x05.\u0383\n.\x03' +
    '.\x03.\x07.\u0387\n.\f.\x0E.\u038A\v.\x03/\x03/\x03/\x03/\x05/\u0390\n' +
    '/\x03/\x03/\x03/\x05/\u0395\n/\x03/\x03/\x03/\x05/\u039A\n/\x03/\x03/' +
    '\x05/\u039E\n/\x05/\u03A0\n/\x030\x050\u03A3\n0\x030\x030\x070\u03A7\n' +
    '0\f0\x0E0\u03AA\v0\x031\x031\x051\u03AE\n1\x031\x031\x031\x071\u03B3\n' +
    '1\f1\x0E1\u03B6\v1\x032\x032\x032\x032\x032\x072\u03BD\n2\f2\x0E2\u03C0' +
    '\v2\x032\x032\x052\u03C4\n2\x032\x032\x032\x032\x032\x033\x033\x033\x03' +
    '3\x033\x033\x053\u03D1\n3\x033\x033\x033\x053\u03D6\n3\x033\x073\u03D9' +
    '\n3\f3\x0E3\u03DC\v3\x034\x034\x034\x054\u03E1\n4\x034\x034\x034\x034' +
    '\x034\x054\u03E8\n4\x034\x054\u03EB\n4\x035\x035\x035\x035\x035\x035\x03' +
    '5\x075\u03F4\n5\f5\x0E5\u03F7\v5\x035\x035\x055\u03FB\n5\x055\u03FD\n' +
    '5\x035\x055\u0400\n5\x035\x035\x035\x035\x075\u0406\n5\f5\x0E5\u0409\v' +
    '5\x055\u040B\n5\x035\x035\x055\u040F\n5\x035\x055\u0412\n5\x035\x035\x05' +
    '5\u0416\n5\x035\x035\x035\x035\x035\x035\x035\x035\x035\x075\u0421\n5' +
    '\f5\x0E5\u0424\v5\x055\u0426\n5\x035\x035\x055\u042A\n5\x035\x035\x05' +
    '5\u042E\n5\x035\x055\u0431\n5\x036\x036\x036\x076\u0436\n6\f6\x0E6\u0439' +
    '\v6\x037\x037\x037\x037\x057\u043F\n7\x038\x038\x038\x038\x038\x058\u0446' +
    '\n8\x038\x058\u0449\n8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x05' +
    '8\u0454\n8\x058\u0456\n8\x038\x038\x038\x038\x038\x038\x058\u045E\n8\x05' +
    '8\u0460\n8\x038\x038\x038\x038\x038\x038\x038\x038\x038\x058\u046B\n8' +
    '\x058\u046D\n8\x038\x038\x038\x038\x038\x078\u0474\n8\f8\x0E8\u0477\v' +
    '8\x039\x059\u047A\n9\x039\x039\x059\u047E\n9\x039\x059\u0481\n9\x039\x03' +
    '9\x039\x039\x039\x039\x079\u0489\n9\f9\x0E9\u048C\v9\x039\x039\x039\x05' +
    '9\u0491\n9\x059\u0493\n9\x039\x059\u0496\n9\x039\x039\x039\x039\x059\u049C' +
    '\n9\x039\x039\x039\x059\u04A1\n9\x039\x039\x039\x059\u04A6\n9\x039\x03' +
    '9\x039\x039\x039\x079\u04AD\n9\f9\x0E9\u04B0\v9\x039\x039\x039\x059\u04B5' +
    '\n9\x059\u04B7\n9\x039\x059\u04BA\n9\x039\x039\x039\x039\x039\x039\x05' +
    '9\u04C2\n9\x039\x039\x039\x039\x059\u04C8\n9\x079\u04CA\n9\f9\x0E9\u04CD' +
    '\v9\x039\x039\x039\x059\u04D2\n9\x039\x059\u04D5\n9\x039\x039\x039\x03' +
    '9\x039\x079\u04DC\n9\f9\x0E9\u04DF\v9\x039\x039\x059\u04E3\n9\x059\u04E5' +
    '\n9\x059\u04E7\n9\x03:\x05:\u04EA\n:\x03:\x03:\x03:\x03:\x03:\x07:\u04F1' +
    '\n:\f:\x0E:\u04F4\v:\x03:\x03:\x05:\u04F8\n:\x03;\x03;\x03;\x03;\x03;' +
    '\x03;\x03;\x07;\u0501\n;\f;\x0E;\u0504\v;\x03;\x03;\x03<\x03<\x03<\x03' +
    '<\x03=\x03=\x03=\x07=\u050F\n=\f=\x0E=\u0512\v=\x03>\x03>\x03>\x03>\x03' +
    '>\x03>\x03>\x05>\u051B\n>\x03>\x03>\x03>\x03>\x05>\u0521\n>\x03?\x03?' +
    '\x03?\x03?\x07?\u0527\n?\f?\x0E?\u052A\v?\x03@\x03@\x03@\x05@\u052F\n' +
    '@\x03@\x03@\x03@\x05@\u0534\n@\x07@\u0536\n@\f@\x0E@\u0539\v@\x03@\x03' +
    '@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x07B\u0544\nB\fB\x0EB\u0547\vB\x03' +
    'C\x03C\x05C\u054B\nC\x03C\x05C\u054E\nC\x03C\x05C\u0551\nC\x03D\x03D\x03' +
    'D\x03D\x05D\u0557\nD\x03E\x03E\x03E\x03F\x03F\x03G\x03G\x03G\x03G\x03' +
    'H\x03H\x03H\x07H\u0565\nH\fH\x0EH\u0568\vH\x03I\x03I\x03J\x03J\x03J\x03' +
    'J\x03J\x07J\u0571\nJ\fJ\x0EJ\u0574\vJ\x03K\x03K\x03K\x03L\x03L\x03L\x03' +
    'L\x03L\x03L\x03L\x03L\x05L\u0581\nL\x03L\x03L\x05L\u0585\nL\x03L\x05L' +
    '\u0588\nL\x03M\x06M\u058B\nM\rM\x0EM\u058C\x03M\x07M\u0590\nM\fM\x0EM' +
    '\u0593\vM\x03M\x03M\x05M\u0597\nM\x03N\x03N\x05N\u059B\nN\x03N\x05N\u059E' +
    '\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x03O\x05' +
    'O\u05AD\nO\x03P\x03P\x07P\u05B1\nP\fP\x0EP\u05B4\vP\x03P\x03P\x05P\u05B8' +
    '\nP\x03Q\x03Q\x03R\x03R\x03S\x03S\x03S\x03S\x03S\x07S\u05C3\nS\fS\x0E' +
    'S\u05C6\vS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03' +
    'S\x05S\u05D4\nS\x03S\x03S\x03S\x03S\x05S\u05DA\nS\x07S\u05DC\nS\fS\x0E' +
    'S\u05DF\vS\x03S\x03S\x05S\u05E3\nS\x03S\x03S\x07S\u05E7\nS\fS\x0ES\u05EA' +
    '\vS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u05F3\nS\x03S\x03S\x03S\x03' +
    'S\x05S\u05F9\nS\x07S\u05FB\nS\fS\x0ES\u05FE\vS\x03S\x03S\x03S\x03S\x03' +
    'S\x03S\x03S\x03S\x05S\u0608\nS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03' +
    'S\x03S\x03S\x05S\u0614\nS\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u061C\nS' +
    '\x05S\u061E\nS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S' +
    '\x03S\x05S\u062C\nS\x03S\x03S\x03S\x03S\x05S\u0632\nS\x07S\u0634\nS\f' +
    'S\x0ES\u0637\vS\x03S\x03S\x05S\u063B\nS\x03S\x03S\x07S\u063F\nS\fS\x0E' +
    'S\u0642\vS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u064C\nS\x03S' +
    '\x03S\x03S\x05S\u0651\nS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S' +
    '\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03' +
    'S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x05S\u0671\nS\x03S\x03S\x05S\u0675' +
    '\nS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03' +
    'S\x03S\x05S\u0686\nS\x03S\x03S\x05S\u068A\nS\x03S\x03S\x03S\x03S\x03S' +
    '\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x07S\u069A\nS\fS\x0ES\u069D' +
    '\vS\x03S\x03S\x03S\x05S\u06A2\nS\x03S\x03S\x03S\x03S\x05S\u06A8\nS\x03' +
    'S\x03S\x03S\x05S\u06AD\nS\x03S\x03S\x03S\x03S\x03S\x05S\u06B4\nS\x03S' +
    '\x03S\x05S\u06B8\nS\x03S\x05S\u06BB\nS\x03S\x05S\u06BE\nS\x03S\x03S\x05' +
    'S\u06C2\nS\x03S\x03S\x03S\x03S\x03S\x05S\u06C9\nS\x03S\x03S\x05S\u06CD' +
    '\nS\x03S\x05S\u06D0\nS\x03S\x05S\u06D3\nS\x03S\x03S\x05S\u06D7\nS\x07' +
    'S\u06D9\nS\fS\x0ES\u06DC\vS\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03S\x03' +
    'S\x03S\x03S\x03S\x03S\x05S\u06EB\nS\x03S\x02\x02\x06$&dnT\x02\x02\x04' +
    '\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02' +
    '\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.' +
    '\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02' +
    'J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02' +
    'f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80' +
    '\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92' +
    '\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4' +
    '\x02\x02\x1C\x17\x02\x04\x04\t\t\x18\x1B.3PPVV\\^bbdegmosvvyy~~\x80\x82' +
    '\x86\x86\u010D\u010D\u0116\u0116\u0164\u0164\u017E\u017E\u01AF\u01AF\x11' +
    '\x02$$,,55DDIOQUW[_annuu\x83\x83\xCF\xD2\xDB\xDB\u01C0\u01C3\u01E1\u01E1' +
    '\t\x02\x1C"&\'>>@AFGxx}}\x16\x02\x03\x03\x05\b\n\x17##%%)+--446=??BC' +
    'EEHHccffz|\x7F\x7F\x85\x85\xD5\xD7\xE0\xE1\x03\x02XY\x04\x02\x03\x03\\' +
    '\\\x03\x02\u01FA\u01FB\x03\x02\u01FC\u01FE\x03\x02{|\x04\x02\u01EF\u01EF' +
    '\u01F3\u01F7\x03\x02\u020E\u020F\x04\x02##BC\x03\x0245\x03\x02\u0205\u0206' +
    '\x03\x02\x0F\x11\x03\x02gi\x03\x02kl\x03\x02\x0E\x0F\x04\x02ggnn\x04\x02' +
    '\x1A\x1A\x80\x80\x03\x02\x12\x14\x03\x02\x1C\x1E\x03\x02\x1A\x1B\x05\x02' +
    '\u0207\u0208\u020A\u020A\u020D\u020D\x03\x02BC\x06\x02\x1C\x1Duu\x92\x92' +
    '\x95\u01E0\x02\u080E\x02\xA7\x03\x02\x02\x02\x04\xC2\x03\x02\x02\x02\x06' +
    '\xC7\x03\x02\x02\x02\b\xCC\x03\x02\x02\x02\n\xD3\x03\x02\x02\x02\f\xD5' +
    '\x03\x02\x02\x02\x0E\xD7\x03\x02\x02\x02\x10\xD9\x03\x02\x02\x02\x12\xDB' +
    '\x03\x02\x02\x02\x14\xDD\x03\x02\x02\x02\x16\xDF\x03\x02\x02\x02\x18\xE8' +
    '\x03\x02\x02\x02\x1A\xF6\x03\x02\x02\x02\x1C\u0157\x03\x02\x02\x02\x1E' +
    '\u0174\x03\x02\x02\x02 \u0176\x03\x02\x02\x02"\u017A\x03\x02\x02\x02' +
    '$\u019B\x03\x02\x02\x02&\u023E\x03\x02\x02\x02(\u0280\x03\x02\x02\x02' +
    '*\u028A\x03\x02\x02\x02,\u028C\x03\x02\x02\x02.\u02AA\x03\x02\x02\x02' +
    '0\u02AF\x03\x02\x02\x022\u02B1\x03\x02\x02\x024\u02B3\x03\x02\x02\x02' +
    '6\u02B5\x03\x02\x02\x028\u02C8\x03\x02\x02\x02:\u02CF\x03\x02\x02\x02' +
    '<\u02E2\x03\x02\x02\x02>\u0309\x03\x02\x02\x02@\u030C\x03\x02\x02\x02' +
    'B\u0315\x03\x02\x02\x02D\u0317\x03\x02\x02\x02F\u031F\x03\x02\x02\x02' +
    'H\u0325\x03\x02\x02\x02J\u0334\x03\x02\x02\x02L\u034D\x03\x02\x02\x02' +
    'N\u034F\x03\x02\x02\x02P\u0354\x03\x02\x02\x02R\u0370\x03\x02\x02\x02' +
    'T\u0372\x03\x02\x02\x02V\u037B\x03\x02\x02\x02X\u037D\x03\x02\x02\x02' +
    'Z\u0382\x03\x02\x02\x02\\\u039F\x03\x02\x02\x02^\u03A2\x03\x02\x02\x02' +
    '`\u03AB\x03\x02\x02\x02b\u03B7\x03\x02\x02\x02d\u03D0\x03\x02\x02\x02' +
    'f\u03EA\x03\x02\x02\x02h\u0430\x03\x02\x02\x02j\u0432\x03\x02\x02\x02' +
    'l\u043A\x03\x02\x02\x02n\u0448\x03\x02\x02\x02p\u04E6\x03\x02\x02\x02' +
    'r\u04E9\x03\x02\x02\x02t\u04F9\x03\x02\x02\x02v\u0507\x03\x02\x02\x02' +
    'x\u050B\x03\x02\x02\x02z\u0520\x03\x02\x02\x02|\u0522\x03\x02\x02\x02' +
    '~\u052B\x03\x02\x02\x02\x80\u053C\x03\x02\x02\x02\x82\u0540\x03\x02\x02' +
    '\x02\x84\u0548\x03\x02\x02\x02\x86\u0556\x03\x02\x02\x02\x88\u0558\x03' +
    '\x02\x02\x02\x8A\u055B\x03\x02\x02\x02\x8C\u055D\x03\x02\x02\x02\x8E\u0561' +
    '\x03\x02\x02\x02\x90\u0569\x03\x02\x02\x02\x92\u056B\x03\x02\x02\x02\x94' +
    '\u0575\x03\x02\x02\x02\x96\u0587\x03\x02\x02\x02\x98\u0596\x03\x02\x02' +
    '\x02\x9A\u059A\x03\x02\x02\x02\x9C\u05AC\x03\x02\x02\x02\x9E\u05B7\x03' +
    '\x02\x02\x02\xA0\u05B9\x03\x02\x02\x02\xA2\u05BB\x03\x02\x02\x02\xA4\u06EA' +
    '\x03\x02\x02\x02\xA6\xA8\x07\u0219\x02\x02\xA7\xA6\x03\x02\x02\x02\xA7' +
    '\xA8\x03\x02\x02\x02\xA8\xAC\x03\x02\x02\x02\xA9\xAB\x07\u01F1\x02\x02' +
    '\xAA\xA9\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02' +
    '\xAC\xAD\x03\x02\x02\x02\xAD\xBA\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02' +
    '\xAF\xB6\x05Z.\x02\xB0\xB2\x07\u01F1\x02\x02\xB1\xB0\x03\x02\x02\x02\xB2' +
    '\xB3\x03\x02\x02\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4' +
    '\xB7\x03\x02\x02\x02\xB5\xB7\x07\x02\x02\x03\xB6\xB1\x03\x02\x02\x02\xB6' +
    '\xB5\x03\x02\x02\x02\xB7\xB9\x03\x02\x02\x02\xB8\xAF\x03\x02\x02\x02\xB9' +
    '\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB' +
    '\xBD\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x07\x02\x02\x03\xBE' +
    '\x03\x03\x02\x02\x02\xBF\xC3\x07\u0211\x02\x02\xC0\xC3\x07\u0212\x02\x02' +
    '\xC1\xC3\x05\x14\v\x02\xC2\xBF\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02' +
    '\xC2\xC1\x03\x02\x02\x02\xC3\x05\x03\x02\x02\x02\xC4\xC8\x05\x04\x03\x02' +
    '\xC5\xC8\x05\f\x07\x02\xC6\xC8\x05\x0E\b\x02\xC7\xC4\x03\x02\x02\x02\xC7' +
    '\xC5';
  private static readonly _serializedATNSegment1: string =
    '\x03\x02\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\x07\x03\x02\x02\x02\xC9\xCD' +
    '\x05\x04\x03\x02\xCA\xCD\x05\f\x07\x02\xCB\xCD\x05\x10\t\x02\xCC\xC9\x03' +
    '\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\t\x03' +
    '\x02\x02\x02\xCE\xD4\x05\x04\x03\x02\xCF\xD4\x05\x12\n\x02\xD0\xD4\x05' +
    '\f\x07\x02\xD1\xD4\x05\x10\t\x02\xD2\xD4\x05\x0E\b\x02\xD3\xCE\x03\x02' +
    '\x02\x02\xD3\xCF\x03\x02\x02\x02\xD3\xD0\x03\x02\x02\x02\xD3\xD1\x03\x02' +
    '\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\v\x03\x02\x02\x02\xD5\xD6\t\x02\x02' +
    '\x02\xD6\r\x03\x02\x02\x02\xD7\xD8\t\x03\x02\x02\xD8\x0F\x03\x02\x02\x02' +
    '\xD9\xDA\t\x04\x02\x02\xDA\x11\x03\x02\x02\x02\xDB\xDC\t\x05\x02\x02\xDC' +
    '\x13\x03\x02\x02\x02\xDD\xDE\x07\x87\x02\x02\xDE\x15\x03\x02\x02\x02\xDF' +
    '\xE4\x05\x18\r\x02\xE0\xE1\x07\u01F2\x02\x02\xE1\xE3\x05\x18\r\x02\xE2' +
    '\xE0\x03\x02\x02\x02\xE3\xE6\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE4' +
    '\xE5\x03\x02\x02\x02\xE5\x17\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE7' +
    '\xE9\x07a\x02\x02\xE8\xE7\x03\x02\x02\x02\xE8\xE9\x03\x02\x02\x02\xE9' +
    '\xEA\x03\x02\x02\x02\xEA\xF4\x05\x1C\x0F\x02\xEB\xED\x07H\x02\x02\xEC' +
    '\xEE\x05\x1A\x0E\x02\xED\xEC\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE' +
    '\xF5\x03\x02\x02\x02\xEF\xF1\x05\x1A\x0E\x02\xF0\xEF\x03\x02\x02\x02\xF1' +
    '\xF2\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3' +
    '\xF5\x03\x02\x02\x02\xF4\xEB\x03\x02\x02\x02\xF4\xF0\x03\x02\x02\x02\xF4' +
    '\xF5\x03\x02\x02\x02\xF5\x19\x03\x02\x02\x02\xF6\xF8\x07\u0203\x02\x02' +
    '\xF7\xF9\x07\u020E\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02' +
    '\x02\xF9\xFA\x03\x02\x02\x02\xFA\xFB\x07\u0204\x02\x02\xFB\x1B\x03\x02' +
    '\x02\x02\xFC\u0158\x07M\x02\x02\xFD\xFF\x07U\x02\x02\xFE\u0100\x07V\x02' +
    '\x02\xFF\xFE\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0102\x03' +
    '\x02\x02\x02\u0101\u0103\x05 \x11\x02\u0102\u0101\x03\x02\x02\x02\u0102' +
    '\u0103\x03\x02\x02\x02\u0103\u0158\x03\x02\x02\x02\u0104\u0158\x07I\x02' +
    '\x02\u0105\u0107\x07N\x02\x02\u0106\u0108\x05"\x12\x02\u0107\u0106\x03' +
    '\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0158\x03\x02\x02\x02\u0109' +
    '\u010B\x07O\x02\x02\u010A\u010C\x05"\x12\x02\u010B\u010A\x03\x02\x02' +
    '\x02\u010B\u010C\x03\x02\x02\x02\u010C\u0158\x03\x02\x02\x02\u010D\u010E' +
    '\x07P\x02\x02\u010E\u0158\x07S\x02\x02\u010F\u0111\x07Q\x02\x02\u0110' +
    '\u0112\x05"\x12\x02\u0111\u0110\x03\x02\x02\x02\u0111\u0112\x03\x02\x02' +
    '\x02\u0112\u0158\x03\x02\x02\x02\u0113\u0158\x07K\x02\x02\u0114\u0158' +
    '\x07L\x02\x02\u0115\u0117\x07,\x02\x02\u0116\u0118\x05\x1E\x10\x02\u0117' +
    '\u0116\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011A\x03\x02' +
    '\x02\x02\u0119\u011B\x05 \x11\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B' +
    '\x03\x02\x02\x02\u011B\u0158\x03\x02\x02\x02\u011C\u011E\x07W\x02\x02' +
    '\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u011F\x03' +
    '\x02\x02\x02\u011F\u0121\t\x06\x02\x02\u0120\u0122\x07V\x02\x02\u0121' +
    '\u0120\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02' +
    '\x02\x02\u0123\u0125\x05 \x11\x02\u0124\u0123\x03\x02\x02\x02\u0124\u0125' +
    '\x03\x02\x02\x02\u0125\u0158\x03\x02\x02\x02\u0126\u0128\x07Z\x02\x02' +
    '\u0127\u0129\x07V\x02\x02\u0128\u0127\x03\x02\x02\x02\u0128\u0129\x03' +
    '\x02\x02\x02\u0129\u012B\x03\x02\x02\x02\u012A\u012C\x05 \x11\x02\u012B' +
    '\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u0158\x03\x02' +
    '\x02\x02\u012D\u012F\x07R\x02\x02\u012E\u0130\x05"\x12\x02\u012F\u012E' +
    '\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130\u0158\x03\x02\x02\x02' +
    '\u0131\u0158\x07T\x02\x02\u0132\u0158\x07J\x02\x02\u0133\u0135\x07[\x02' +
    '\x02\u0134\u0136\x05 \x11\x02\u0135\u0134\x03\x02\x02\x02\u0135\u0136' +
    '\x03\x02\x02\x02\u0136\u013A\x03\x02\x02\x02\u0137\u0138\t\x07\x02\x02' +
    '\u0138\u0139\x07[\x02\x02\u0139\u013B\x07^\x02\x02\u013A\u0137\x03\x02' +
    '\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u0158\x03\x02\x02\x02\u013C' +
    '\u013E\x07_\x02\x02\u013D\u013F\x05 \x11\x02\u013E\u013D\x03\x02\x02\x02' +
    '\u013E\u013F\x03\x02\x02\x02\u013F\u0143\x03\x02\x02\x02\u0140\u0141\t' +
    '\x07\x02\x02\u0141\u0142\x07[\x02\x02\u0142\u0144\x07^\x02\x02\u0143\u0140' +
    '\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0158\x03\x02\x02\x02' +
    '\u0145\u0147\x07`\x02\x02\u0146\u0148\x05 \x11\x02\u0147\u0146\x03\x02' +
    '\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0158\x03\x02\x02\x02\u0149' +
    '\u0155\x05\b\x05\x02\u014A\u014B\x07\u01F8\x02\x02\u014B\u0150\x05$\x13' +
    '\x02\u014C\u014D\x07\u01F2\x02\x02\u014D\u014F\x05$\x13\x02\u014E\u014C' +
    '\x03\x02\x02\x02\u014F\u0152\x03\x02\x02\x02\u0150\u014E\x03\x02\x02\x02' +
    '\u0150\u0151\x03\x02\x02\x02\u0151\u0153\x03\x02\x02\x02\u0152\u0150\x03' +
    '\x02\x02\x02\u0153\u0154\x07\u01F9\x02\x02\u0154\u0156\x03\x02\x02\x02' +
    '\u0155\u014A\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0158\x03' +
    '\x02\x02\x02\u0157\xFC\x03\x02\x02\x02\u0157\xFD\x03\x02\x02\x02\u0157' +
    '\u0104\x03\x02\x02\x02\u0157\u0105\x03\x02\x02\x02\u0157\u0109\x03\x02' +
    '\x02\x02\u0157\u010D\x03\x02\x02\x02\u0157\u010F\x03\x02\x02\x02\u0157' +
    '\u0113\x03\x02\x02\x02\u0157\u0114\x03\x02\x02\x02\u0157\u0115\x03\x02' +
    '\x02\x02\u0157\u011D\x03\x02\x02\x02\u0157\u0126\x03\x02\x02\x02\u0157' +
    '\u012D\x03\x02\x02\x02\u0157\u0131\x03\x02\x02\x02\u0157\u0132\x03\x02' +
    '\x02\x02\u0157\u0133\x03\x02\x02\x02\u0157\u013C\x03\x02\x02\x02\u0157' +
    '\u0145\x03\x02\x02\x02\u0157\u0149\x03\x02\x02\x02\u0158\x1D\x03\x02\x02' +
    '\x02\u0159\u0175\x073\x02\x02\u015A\u0175\x072\x02\x02\u015B\u0175\x07' +
    '1\x02\x02\u015C\u0175\x070\x02\x02\u015D\u0175\x07/\x02\x02\u015E\u0175' +
    '\x07.\x02\x02\u015F\u0160\x073\x02\x02\u0160\u0161\x07-\x02\x02\u0161' +
    '\u0175\x072\x02\x02\u0162\u0163\x071\x02\x02\u0163\u0164\x07-\x02\x02' +
    '\u0164\u0175\x070\x02\x02\u0165\u0166\x071\x02\x02\u0166\u0167\x07-\x02' +
    '\x02\u0167\u0175\x07/\x02\x02\u0168\u0169\x071\x02\x02\u0169\u016A\x07' +
    '-\x02\x02\u016A\u0175\x07.\x02\x02\u016B\u016C\x070\x02\x02\u016C\u016D' +
    '\x07-\x02\x02\u016D\u0175\x07/\x02\x02\u016E\u016F\x070\x02\x02\u016F' +
    '\u0170\x07-\x02\x02\u0170\u0175\x07.\x02\x02\u0171\u0172\x07/\x02\x02' +
    '\u0172\u0173\x07-\x02\x02\u0173\u0175\x07.\x02\x02\u0174\u0159\x03\x02' +
    '\x02\x02\u0174\u015A\x03\x02\x02\x02\u0174\u015B\x03\x02\x02\x02\u0174' +
    '\u015C\x03\x02\x02\x02\u0174\u015D\x03\x02\x02\x02\u0174\u015E\x03\x02' +
    '\x02\x02\u0174\u015F\x03\x02\x02\x02\u0174\u0162\x03\x02\x02\x02\u0174' +
    '\u0165\x03\x02\x02\x02\u0174\u0168\x03\x02\x02\x02\u0174\u016B\x03\x02' +
    '\x02\x02\u0174\u016E\x03\x02\x02\x02\u0174\u0171\x03\x02\x02\x02\u0175' +
    '\x1F\x03\x02\x02\x02\u0176\u0177\x07\u01F8\x02\x02\u0177\u0178\x07\u020E' +
    '\x02\x02\u0178\u0179\x07\u01F9\x02\x02\u0179!\x03\x02\x02\x02\u017A\u017B' +
    '\x07\u01F8\x02\x02\u017B\u017E\x07\u020E\x02\x02\u017C\u017D\x07\u01F2' +
    '\x02\x02\u017D\u017F\x07\u020E\x02\x02\u017E\u017C\x03\x02\x02\x02\u017E' +
    '\u017F\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181\x07\u01F9' +
    '\x02\x02\u0181#\x03\x02\x02\x02\u0182\u0183\b\x13\x01\x02\u0183\u0184' +
    '\x07\u01F8\x02\x02\u0184\u0185\x05$\x13\x02\u0185\u0187\x07\u01F9\x02' +
    '\x02\u0186\u0188\x05\x98M\x02\u0187\u0186\x03\x02\x02\x02\u0187\u0188' +
    '\x03\x02\x02\x02\u0188\u019C\x03\x02\x02\x02\u0189\u018A\x07\u01F8\x02' +
    '\x02\u018A\u018D\x05$\x13\x02\u018B\u018C\x07\u01F2\x02\x02\u018C\u018E' +
    '\x05$\x13\x02\u018D\u018B\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02' +
    '\u018F\u018D\x03\x02\x02\x02\u018F\u0190\x03\x02\x02\x02\u0190\u0191\x03' +
    '\x02\x02\x02\u0191\u0192\x07\u01F9\x02\x02\u0192\u019C\x03\x02\x02\x02' +
    '\u0193\u0194\t\b\x02\x02\u0194\u019C\x05$\x13\x1A\u0195\u0196\x05(\x15' +
    '\x02\u0196\u0197\x05$\x13\x14\u0197\u019C\x03\x02\x02\x02\u0198\u0199' +
    '\x07=\x02\x02\u0199\u019C\x05$\x13\x06\u019A\u019C\x05.\x18\x02\u019B' +
    '\u0182\x03\x02\x02\x02\u019B\u0189\x03\x02\x02\x02\u019B\u0193\x03\x02' +
    '\x02\x02\u019B\u0195\x03\x02\x02\x02\u019B\u0198\x03\x02\x02\x02\u019B' +
    '\u019A\x03\x02\x02\x02\u019C\u0224\x03\x02\x02\x02\u019D\u019E\f\x19\x02' +
    '\x02\u019E\u019F\x07y\x02\x02\u019F\u01A0\x07[\x02\x02\u01A0\u01A1\x07' +
    '^\x02\x02\u01A1\u0223\x05$\x13\x1A\u01A2\u01A3\f\x18\x02\x02\u01A3\u01A4' +
    '\x07\u0151\x02\x02\u01A4\u0223\x05$\x13\x19\u01A5\u01A6\f\x17\x02\x02' +
    '\u01A6\u01A7\t\t\x02\x02\u01A7\u0223\x05$\x13\x18\u01A8\u01A9\f\x16\x02' +
    '\x02\u01A9\u01AA\t\b\x02\x02\u01AA\u0223\x05$\x13\x17\u01AB\u01AC\f\x15' +
    '\x02\x02\u01AC\u01AD\x05(\x15\x02\u01AD\u01AE\x05$\x13\x16\u01AE\u0223' +
    '\x03\x02\x02\x02\u01AF\u01B1\f\x11\x02\x02\u01B0\u01B2\x07=\x02\x02\u01B1' +
    '\u01B0\x03\x02\x02\x02\u01B1\u01B2\x03\x02\x02\x02\u01B2\u01B3\x03\x02' +
    '\x02\x02\u01B3\u01B5\x07D\x02\x02\u01B4\u01B6\t\n\x02\x02\u01B5\u01B4' +
    '\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02' +
    '\u01B7\u01B8\x05&\x14\x02\u01B8\u01B9\x07;\x02\x02\u01B9\u01BA\x05$\x13' +
    '\x12\u01BA\u0223\x03\x02\x02\x02\u01BB\u01BD\f\x10\x02\x02\u01BC\u01BE' +
    '\x07=\x02\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02' +
    '\u01BE\u01C3\x03\x02\x02\x02\u01BF\u01C4\x07F\x02\x02\u01C0\u01C4\x07' +
    'G\x02\x02\u01C1\u01C2\x07}\x02\x02\u01C2\u01C4\x07-\x02\x02\u01C3\u01BF' +
    '\x03\x02\x02\x02\u01C3\u01C0\x03\x02\x02\x02\u01C3\u01C1\x03\x02\x02\x02' +
    '\u01C4\u01C5\x03\x02\x02\x02\u01C5\u0223\x05$\x13\x11\u01C6\u01C8\f\x0F' +
    '\x02\x02\u01C7\u01C9\x07=\x02\x02\u01C8\u01C7\x03\x02\x02\x02\u01C8\u01C9' +
    '\x03\x02\x02\x02\u01C9\u01CE\x03\x02\x02\x02\u01CA\u01CF\x07F\x02\x02' +
    '\u01CB\u01CF\x07G\x02\x02\u01CC\u01CD\x07}\x02\x02\u01CD\u01CF\x07-\x02' +
    '\x02\u01CE\u01CA\x03\x02\x02\x02\u01CE\u01CB\x03\x02\x02\x02\u01CE\u01CC' +
    '\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0\u01D1\x05$\x13\x02' +
    '\u01D1\u01D2\x07~\x02\x02\u01D2\u01D3\x05$\x13\x10\u01D3\u0223\x03\x02' +
    '\x02\x02\u01D4\u01D5\f\x0E\x02\x02\u01D5\u01D6\t\v\x02\x02\u01D6\u0223' +
    '\x05$\x13\x0F\u01D7\u01D8\f\f\x02\x02\u01D8\u01DA\x07>\x02\x02\u01D9\u01DB' +
    '\x07=\x02\x02\u01DA\u01D9\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02' +
    '\u01DB\u01DC\x03\x02\x02\x02\u01DC\u01DD\x07\x0E\x02\x02\u01DD\u01DE\x07' +
    '\x06\x02\x02\u01DE\u0223\x05$\x13\r\u01DF\u01E0\f\x05\x02\x02\u01E0\u01E1' +
    '\x07;\x02\x02\u01E1\u0223\x05$\x13\x06\u01E2\u01E3\f\x04\x02\x02\u01E3' +
    '\u01E4\x07<\x02\x02\u01E4\u0223\x05$\x13\x05\u01E5\u01E6\f\x1E\x02\x02' +
    '\u01E6\u01E7\x07\u01EE\x02\x02\u01E7\u0223\x05\x18\r\x02\u01E8\u01E9\f' +
    '\x1B\x02\x02\u01E9\u0223\x05\x94K\x02\u01EA\u01EB\f\x13\x02\x02\u01EB' +
    '\u0223\x05(\x15\x02\u01EC\u01EE\f\x12\x02\x02\u01ED\u01EF\x07=\x02\x02' +
    '\u01EE\u01ED\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F0\x03' +
    '\x02\x02\x02\u01F0\u01F1\x07E\x02\x02\u01F1\u01FB\x07\u01F8\x02\x02\u01F2' +
    '\u01FC\x05^0\x02\u01F3\u01F8\x05$\x13\x02\u01F4\u01F5\x07\u01F2\x02\x02' +
    '\u01F5\u01F7\x05$\x13\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7\u01FA\x03' +
    '\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9' +
    '\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01F2\x03\x02' +
    '\x02\x02\u01FB\u01F3\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FD' +
    '\u01FE\x07\u01F9\x02\x02\u01FE\u0223\x03\x02\x02\x02\u01FF\u0200\f\r\x02' +
    '\x02\u0200\u0202\x07>\x02\x02\u0201\u0203\x07=\x02\x02\u0202\u0201\x03' +
    '\x02\x02\x02\u0202\u0203\x03\x02\x02\x02\u0203\u0206\x03\x02\x02\x02\u0204' +
    '\u0207\x054\x1B\x02\u0205\u0207\x07?\x02\x02\u0206\u0204\x03\x02\x02\x02' +
    '\u0206\u0205\x03\x02\x02\x02\u0207\u0223\x03\x02\x02\x02\u0208\u0209\f' +
    '\v\x02\x02\u0209\u020B\x07>\x02\x02\u020A\u020C\x07=\x02\x02\u020B\u020A' +
    '\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02' +
    '\u020D\u0223\x07\x81\x02\x02\u020E\u020F\f\n\x02\x02\u020F\u0211\x07>' +
    '\x02\x02\u0210\u0212\x07=\x02\x02\u0211\u0210\x03\x02\x02\x02\u0211\u0212' +
    '\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0223\x07\x82\x02\x02' +
    '\u0214\u0215\f\t\x02\x02\u0215\u0217\x07>\x02\x02\u0216\u0218\x07=\x02' +
    '\x02\u0217\u0216\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u0219' +
    '\x03\x02\x02\x02\u0219\u021A\x07b\x02\x02\u021A\u021B\x07\u01F8\x02\x02' +
    '\u021B\u021C\x05\x16\f\x02\u021C\u021D\x07\u01F9\x02\x02\u021D\u0223\x03' +
    '\x02\x02\x02\u021E\u021F\f\b\x02\x02\u021F\u0223\x07@\x02\x02\u0220\u0221' +
    '\f\x07\x02\x02\u0221\u0223\x07A\x02\x02\u0222\u019D\x03\x02\x02\x02\u0222' +
    '\u01A2\x03\x02\x02\x02\u0222\u01A5\x03\x02\x02\x02\u0222\u01A8\x03\x02' +
    '\x02\x02\u0222\u01AB\x03\x02\x02\x02\u0222\u01AF\x03\x02\x02\x02\u0222' +
    '\u01BB\x03\x02\x02\x02\u0222\u01C6\x03\x02\x02\x02\u0222\u01D4\x03\x02' +
    '\x02\x02\u0222\u01D7\x03\x02\x02\x02\u0222\u01DF\x03\x02\x02\x02\u0222' +
    '\u01E2\x03\x02\x02\x02\u0222\u01E5\x03\x02\x02\x02\u0222\u01E8\x03\x02' +
    '\x02\x02\u0222\u01EA\x03\x02\x02\x02\u0222\u01EC\x03\x02\x02\x02\u0222' +
    '\u01FF\x03\x02\x02\x02\u0222\u0208\x03\x02\x02\x02\u0222\u020E\x03\x02' +
    '\x02\x02\u0222\u0214\x03\x02\x02\x02\u0222\u021E\x03\x02\x02\x02\u0222' +
    '\u0220\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0222\x03\x02' +
    '\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225%\x03\x02\x02\x02\u0226\u0224' +
    '\x03\x02\x02\x02\u0227\u0228\b\x14\x01\x02\u0228\u0229\x07\u01F8\x02\x02' +
    '\u0229\u022A\x05$\x13\x02\u022A\u022C\x07\u01F9\x02\x02\u022B\u022D\x05' +
    '\x98M\x02\u022C\u022B\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D' +
    '\u023F\x03\x02\x02\x02\u022E\u022F\x07\u01F8\x02\x02\u022F\u0232\x05$' +
    '\x13\x02\u0230\u0231\x07\u01F2\x02\x02\u0231\u0233\x05$\x13\x02\u0232' +
    '\u0230\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0232\x03\x02' +
    '\x02\x02\u0234\u0235\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236' +
    '\u0237\x07\u01F9\x02\x02\u0237\u023F\x03\x02\x02\x02\u0238\u0239\t\b\x02' +
    '\x02\u0239\u023F\x05&\x14\x0F\u023A\u023B\x05(\x15\x02\u023B\u023C\x05' +
    '&\x14\n\u023C\u023F\x03\x02\x02\x02\u023D\u023F\x05.\x18\x02\u023E\u0227' +
    '\x03\x02\x02\x02\u023E\u022E\x03\x02\x02\x02\u023E\u0238\x03\x02\x02\x02' +
    '\u023E\u023A\x03\x02\x02\x02\u023E\u023D\x03\x02\x02\x02\u023F\u0275\x03' +
    '\x02\x02\x02\u0240\u0241\f\x0E\x02\x02\u0241\u0242\x07\u0151\x02\x02\u0242' +
    '\u0274\x05&\x14\x0F\u0243\u0244\f\r\x02\x02\u0244\u0245\t\t\x02\x02\u0245' +
    '\u0274\x05&\x14\x0E\u0246\u0247\f\f\x02\x02\u0247\u0248\t\b\x02\x02\u0248' +
    '\u0274\x05&\x14\r\u0249\u024A\f\v\x02\x02\u024A\u024B\x05(\x15\x02\u024B' +
    '\u024C\x05&\x14\f\u024C\u0274\x03\x02\x02\x02\u024D\u024E\f\b\x02\x02' +
    '\u024E\u024F\t\v\x02\x02\u024F\u0274\x05&\x14\t\u0250\u0251\f\x07\x02' +
    '\x02\u0251\u0253\x07>\x02\x02\u0252\u0254\x07=\x02\x02\u0253\u0252\x03' +
    '\x02\x02\x02\u0253\u0254\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255' +
    '\u0256\x07\x0E\x02\x02\u0256\u0257\x07\x06\x02\x02\u0257\u0274\x05&\x14' +
    '\b\u0258\u0259\f\x12\x02\x02\u0259\u025A\x07\u01EE\x02\x02\u025A\u0274' +
    '\x05\x18\r\x02\u025B\u025C\f\t\x02\x02\u025C\u0274\x05(\x15\x02\u025D' +
    '\u025E\f\x06\x02\x02\u025E\u0260\x07>\x02\x02\u025F\u0261\x07=\x02\x02' +
    '\u0260\u025F\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x03' +
    '\x02\x02\x02\u0262\u0274\x07\x81\x02\x02\u0263\u0264\f\x05\x02\x02\u0264' +
    '\u0266\x07>\x02\x02\u0265\u0267\x07=\x02\x02\u0266\u0265\x03\x02\x02\x02' +
    '\u0266\u0267\x03\x02\x02\x02\u0267\u0268\x03\x02\x02\x02\u0268\u0274\x07' +
    '\x82\x02\x02\u0269\u026A\f\x04\x02\x02\u026A\u026C\x07>\x02\x02\u026B' +
    '\u026D\x07=\x02\x02\u026C\u026B\x03\x02\x02\x02\u026C\u026D\x03\x02\x02' +
    '\x02\u026D\u026E\x03\x02\x02\x02\u026E\u026F\x07b\x02\x02\u026F\u0270' +
    '\x07\u01F8\x02\x02\u0270\u0271\x05\x16\f\x02\u0271\u0272\x07\u01F9\x02' +
    '\x02\u0272\u0274\x03\x02\x02\x02\u0273\u0240\x03\x02\x02\x02\u0273\u0243' +
    '\x03\x02\x02\x02\u0273\u0246\x03\x02\x02\x02\u0273\u0249\x03\x02\x02\x02' +
    '\u0273\u024D\x03\x02\x02\x02\u0273\u0250\x03\x02\x02\x02\u0273\u0258\x03' +
    '\x02\x02\x02\u0273\u025B\x03\x02\x02\x02\u0273\u025D\x03\x02\x02\x02\u0273' +
    '\u0263\x03\x02\x02\x02\u0273\u0269\x03\x02\x02\x02\u0274\u0277\x03\x02' +
    '\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276' +
    "'\x03\x02\x02\x02\u0277\u0275\x03\x02\x02\x02\u0278\u0281\x05\x90I\x02" +
    '\u0279\u027A\x07\x18\x02\x02\u027A\u027B\x07\u01F8\x02\x02\u027B\u027C' +
    '\x05\x06\x04\x02\u027C\u027D\x07\u01FF\x02\x02\u027D\u027E\x05\x9CO\x02' +
    '\u027E\u027F\x07\u01F9\x02\x02\u027F\u0281\x03\x02\x02\x02\u0280\u0278' +
    '\x03\x02\x02\x02\u0280\u0279\x03\x02\x02\x02\u0281)\x03\x02\x02\x02\u0282' +
    '\u028B\x05\x9CO\x02\u0283\u0284\x07\x18\x02\x02\u0284\u0285\x07\u01F8' +
    '\x02\x02\u0285\u0286\x05\x06\x04\x02\u0286\u0287\x07\u01FF\x02\x02\u0287' +
    '\u0288\x05\x9CO\x02\u0288\u0289\x07\u01F9\x02\x02\u0289\u028B\x03\x02' +
    '\x02\x02\u028A\u0282\x03\x02\x02\x02\u028A\u0283\x03\x02\x02\x02\u028B' +
    '+\x03\x02\x02\x02\u028C\u028D\x07\u01F8\x02\x02\u028D\u028E\x05$\x13\x02' +
    '\u028E\u028F\x07\u01F2\x02\x02\u028F\u0290\x05$\x13\x02\u0290\u0291\x07' +
    '\u01F9\x02\x02\u0291\u0292\x07x\x02\x02\u0292\u0293\x07\u01F8\x02\x02' +
    '\u0293\u0294\x05$\x13\x02\u0294\u0295\x07\u01F2\x02\x02\u0295\u0296\x05' +
    '$\x13\x02\u0296\u0297\x07\u01F9\x02\x02\u0297-\x03\x02\x02\x02\u0298\u02AB' +
    '\x050\x19\x02\u0299\u029A\x07\u01F8\x02\x02\u029A\u029B\x05^0\x02\u029B' +
    '\u029D\x07\u01F9\x02\x02\u029C\u029E\x05\x98M\x02\u029D\u029C\x03\x02' +
    '\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u02AB\x03\x02\x02\x02\u029F' +
    '\u02AB\x056\x1C\x02\u02A0\u02AB\x07?\x02\x02\u02A1\u02AB\x07\u01FC\x02' +
    '\x02\u02A2\u02AB\x05D#\x02\u02A3\u02A4\x07\x83\x02\x02\u02A4\u02AB\x05' +
    'X-\x02\u02A5\u02AB\x05> \x02\u02A6\u02AB\x05\x9AN\x02\u02A7\u02AB\x05' +
    'N(\x02\u02A8\u02AB\x05R*\x02\u02A9\u02AB\x05,\x17\x02\u02AA\u0298\x03' +
    '\x02\x02\x02\u02AA\u0299\x03\x02\x02\x02\u02AA\u029F\x03\x02\x02\x02\u02AA' +
    '\u02A0\x03\x02\x02\x02\u02AA\u02A1\x03\x02\x02\x02\u02AA\u02A2\x03\x02' +
    '\x02\x02\u02AA\u02A3\x03\x02\x02\x02\u02AA\u02A5\x03\x02\x02\x02\u02AA' +
    '\u02A6\x03\x02\x02\x02\u02AA\u02A7\x03\x02\x02\x02\u02AA\u02A8\x03\x02' +
    '\x02\x02\u02AA\u02A9\x03\x02\x02\x02\u02AB/\x03\x02\x02\x02\u02AC\u02B0' +
    '\x052\x1A\x02\u02AD\u02B0\x05\x9EP\x02\u02AE\u02B0\x054\x1B\x02\u02AF' +
    '\u02AC\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF\u02AE\x03\x02' +
    '\x02\x02\u02B01\x03\x02\x02\x02\u02B1\u02B2\t\f\x02\x02\u02B23\x03\x02' +
    '\x02\x02\u02B3\u02B4\t\r\x02\x02\u02B45\x03\x02\x02\x02\u02B5\u02B7\x07' +
    '6\x02\x02\u02B6\u02B8\x05$\x13\x02\u02B7\u02B6\x03\x02\x02\x02\u02B7\u02B8' +
    '\x03\x02\x02\x02\u02B8\u02BE\x03\x02\x02\x02\u02B9\u02BA\x077\x02\x02' +
    '\u02BA\u02BB\x05$\x13\x02\u02BB\u02BC\x078\x02\x02\u02BC\u02BD\x05$\x13' +
    '\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02B9\x03\x02\x02\x02\u02BF\u02C0' +
    '\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02C1\x03\x02\x02\x02' +
    '\u02C1\u02C4\x03\x02\x02\x02\u02C2\u02C3\x079\x02\x02\u02C3\u02C5\x05' +
    '$\x13\x02\u02C4\u02C2\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5' +
    '\u02C6\x03\x02\x02\x02\u02C6\u02C7\x07:\x02\x02\u02C77\x03\x02\x02\x02' +
    '\u02C8\u02C9\t\x0E\x02\x02\u02C9\u02CA\x07\u01F8\x02\x02\u02CA\u02CB\x05' +
    '$\x13\x02\u02CB\u02CC\x07z\x02\x02\u02CC\u02CD\x05\x18\r\x02\u02CD\u02CE' +
    '\x07\u01F9\x02\x02\u02CE9\x03\x02\x02\x02\u02CF\u02DE\x07\u01F8\x02\x02' +
    '\u02D0\u02D2\x05V,\x02\u02D1\u02D0\x03\x02\x02\x02\u02D1\u02D2\x03\x02' +
    '\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\u02D8\x05@!\x02\u02D4\u02D5' +
    '\x07\u01F2\x02\x02\u02D5\u02D7\x05@!\x02\u02D6\u02D4\x03\x02\x02\x02\u02D7' +
    '\u02DA\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D8\u02D9\x03\x02' +
    '\x02\x02\u02D9\u02DC\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DB' +
    '\u02DD\x05\x80A\x02\u02DC\u02DB\x03\x02\x02\x02\u02DC\u02DD\x03\x02\x02' +
    '\x02\u02DD\u02DF\x03\x02\x02\x02\u02DE\u02D1\x03\x02\x02\x02\u02DE\u02DF' +
    '\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E1\x07\u01F9\x02' +
    '\x02\u02E1;\x03\x02\x02\x02\u02E2\u02E9\x05:\x1E\x02\u02E3\u02E4\x07]' +
    '\x02\x02\u02E4\u02E5\x07\b\x02\x02\u02E5\u02E6\x07\u01F8\x02\x02\u02E6' +
    '\u02E7\x05\x80A\x02\u02E7\u02E8\x07\u01F9\x02\x02\u02E8\u02EA\x03\x02' +
    '\x02\x02\u02E9\u02E3\x03\x02\x02\x02\u02E9\u02EA\x03\x02\x02\x02\u02EA' +
    '\u02EC\x03\x02\x02\x02\u02EB\u02ED\x05F$\x02\u02EC\u02EB\x03\x02\x02\x02' +
    '\u02EC\u02ED\x03\x02\x02\x02\u02ED\u02F3\x03\x02\x02\x02\u02EE\u02F1\x07' +
    'd\x02\x02\u02EF\u02F2\x05\x06\x04\x02\u02F0\u02F2\x05H%\x02\u02F1\u02EF' +
    '\x03\x02\x02\x02\u02F1\u02F0\x03\x02\x02\x02\u02F2\u02F4\x03\x02\x02\x02' +
    '\u02F3\u02EE\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4=\x03\x02' +
    '\x02\x02\u02F5\u02F6\x05\xA2R\x02\u02F6\u02F7\x05<\x1F\x02\u02F7\u030A' +
    '\x03\x02\x02\x02\u02F8\u030A\x05\xA4S\x02\u02F9\u02FA\x05\x06\x04\x02' +
    '\u02FA\u02FB\x05<\x1F\x02\u02FB\u030A\x03\x02\x02\x02\u02FC\u02FD\x07' +
    'n\x02\x02\u02FD\u0306\x07\u01F8\x02\x02\u02FE\u0303\x05$\x13\x02\u02FF' +
    '\u0300\x07\u01F2\x02\x02\u0300\u0302\x05$\x13\x02\u0301\u02FF\x03\x02' +
    '\x02\x02\u0302\u0305\x03\x02\x02\x02\u0303\u0301\x03\x02\x02\x02\u0303' +
    '\u0304\x03\x02\x02\x02\u0304\u0307\x03\x02\x02\x02\u0305\u0303\x03\x02' +
    '\x02\x02\u0306\u02FE\x03\x02\x02\x02\u0306\u0307\x03\x02\x02\x02\u0307' +
    '\u0308\x03\x02\x02\x02\u0308\u030A\x07\u01F9\x02\x02\u0309\u02F5\x03\x02' +
    '\x02\x02\u0309\u02F8\x03\x02\x02\x02\u0309\u02F9\x03\x02\x02\x02\u0309' +
    '\u02FC\x03\x02\x02\x02\u030A?\x03\x02\x02\x02\u030B\u030D\x07\x85\x02' +
    '\x02\u030C\u030B\x03\x02\x02\x02\u030C\u030D\x03\x02\x02\x02\u030D\u0311' +
    '\x03\x02\x02\x02\u030E\u030F\x05\x06\x04\x02\u030F\u0310\x05B"\x02\u0310' +
    '\u0312\x03\x02\x02\x02\u0311\u030E\x03\x02\x02\x02\u0311\u0312\x03\x02' +
    '\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0314\x05$\x13\x02\u0314A\x03' +
    '\x02\x02\x02\u0315\u0316\t\x0F\x02\x02\u0316C\x03\x02\x02\x02\u0317\u0318' +
    '\t\x10\x02\x02\u0318\u031B\x07\u01F8\x02\x02\u0319\u031C\x05$\x13\x02' +
    '\u031A\u031C\x05^0\x02\u031B\u0319\x03\x02\x02\x02\u031B\u031A\x03\x02' +
    '\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031E\x07\u01F9\x02\x02\u031E' +
    'E\x03\x02\x02\x02\u031F\u0320\x07\x86\x02\x02\u0320\u0321\x07\u01F8\x02' +
    '\x02\u0321\u0322\x07\x07\x02\x02\u0322\u0323\x05$\x13\x02\u0323\u0324' +
    '\x07\u01F9\x02\x02\u0324G\x03\x02\x02\x02\u0325\u0327\x07\u01F8\x02\x02' +
    '\u0326\u0328\x05\x06\x04\x02\u0327\u0326\x03\x02\x02\x02\u0327\u0328\x03' +
    '\x02\x02\x02\u0328\u032A\x03\x02\x02\x02\u0329\u032B\x05\x92J\x02\u032A' +
    '\u0329\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032D\x03\x02' +
    '\x02\x02\u032C\u032E\x05\x80A\x02\u032D\u032C\x03\x02\x02\x02\u032D\u032E' +
    '\x03\x02\x02\x02\u032E\u0330\x03\x02\x02\x02\u032F\u0331\x05J&\x02\u0330' +
    '\u032F\x03\x02\x02\x02\u0330\u0331\x03\x02\x02\x02\u0331\u0332\x03\x02' +
    '\x02\x02\u0332\u0333\x07\u01F9\x02\x02\u0333I\x03\x02\x02\x02\u0334\u033B' +
    "\t\x11\x02\x02\u0335\u033C\x05L'\x02\u0336\u0337\x07D\x02\x02\u0337\u0338" +
    "\x05L'\x02\u0338\u0339\x07;\x02\x02\u0339\u033A\x05L'\x02\u033A\u033C" +
    '\x03\x02\x02\x02\u033B\u0335\x03\x02\x02\x02\u033B\u0336\x03\x02\x02\x02' +
    '\u033C\u0346\x03\x02\x02\x02\u033D\u0344\x07o\x02\x02\u033E\u033F\x07' +
    'm\x02\x02\u033F\u0345\x07n\x02\x02\u0340\u0345\x07\b\x02\x02\u0341\u0345' +
    '\x07p\x02\x02\u0342\u0343\x07q\x02\x02\u0343\u0345\x07r\x02\x02\u0344' +
    '\u033E\x03\x02\x02\x02\u0344\u0340\x03\x02\x02\x02\u0344\u0341\x03\x02' +
    '\x02\x02\u0344\u0342\x03\x02\x02\x02\u0345\u0347\x03\x02\x02\x02\u0346' +
    '\u033D\x03\x02\x02\x02\u0346\u0347\x03\x02\x02\x02\u0347K\x03\x02\x02' +
    '\x02\u0348\u0349\x05$\x13\x02\u0349\u034A\t\x12\x02\x02\u034A\u034E\x03' +
    '\x02\x02\x02\u034B\u034C\x07m\x02\x02\u034C\u034E\x07n\x02\x02\u034D\u0348' +
    '\x03\x02\x02\x02\u034D\u034B\x03\x02\x02\x02\u034EM\x03\x02\x02\x02\u034F' +
    '\u0352\x07H\x02\x02\u0350\u0353\x05P)\x02\u0351\u0353\x05X-\x02\u0352' +
    '\u0350\x03\x02\x02\x02\u0352\u0351\x03\x02\x02\x02\u0353O\x03\x02\x02' +
    '\x02\u0354\u0363\x07\u0203\x02\x02\u0355\u0358\x05$\x13\x02\u0356\u0358' +
    '\x05P';
  private static readonly _serializedATNSegment2: string =
    ')\x02\u0357\u0355\x03\x02\x02\x02\u0357\u0356\x03\x02\x02\x02\u0358\u0360' +
    '\x03\x02\x02\x02\u0359\u035C\x07\u01F2\x02\x02\u035A\u035D\x05$\x13\x02' +
    '\u035B\u035D\x05P)\x02\u035C\u035A\x03\x02\x02\x02\u035C\u035B\x03\x02' +
    '\x02\x02\u035D\u035F\x03\x02\x02\x02\u035E\u0359\x03\x02\x02\x02\u035F' +
    '\u0362\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0360\u0361\x03\x02' +
    '\x02\x02\u0361\u0364\x03\x02\x02\x02\u0362\u0360\x03\x02\x02\x02\u0363' +
    '\u0357\x03\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02' +
    '\x02\x02\u0365\u0366\x07\u0204\x02\x02\u0366Q\x03\x02\x02\x02\u0367\u0368' +
    '\x05\x18\r\x02\u0368\u0369\x05\x9EP\x02\u0369\u0371\x03\x02\x02\x02\u036A' +
    '\u036B\x07,\x02\x02\u036B\u036C\x05\x9EP\x02\u036C\u036E\x05\x1E\x10\x02' +
    '\u036D\u036F\x05 \x11\x02\u036E\u036D\x03\x02\x02\x02\u036E\u036F\x03' +
    '\x02\x02\x02\u036F\u0371\x03\x02\x02\x02\u0370\u0367\x03\x02\x02\x02\u0370' +
    '\u036A\x03\x02\x02\x02\u0371S\x03\x02\x02\x02\u0372\u0379\x05\x06\x04' +
    '\x02\u0373\u0374\x07\u01FF\x02\x02\u0374\u0377\x05\x06\x04\x02\u0375\u0376' +
    '\x07\u01FF\x02\x02\u0376\u0378\x05\x06\x04\x02\u0377\u0375\x03\x02\x02' +
    '\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037A\x03\x02\x02\x02\u0379\u0373' +
    '\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037AU\x03\x02\x02\x02\u037B' +
    '\u037C\t\x13\x02\x02\u037CW\x03\x02\x02\x02\u037D\u037E\x07\u01F8\x02' +
    '\x02\u037E\u037F\x05Z.\x02\u037F\u0380\x07\u01F9\x02\x02\u0380Y\x03\x02' +
    '\x02\x02\u0381\u0383\x05`1\x02\u0382\u0381\x03\x02\x02\x02\u0382\u0383' +
    '\x03\x02\x02\x02\u0383\u0384\x03\x02\x02\x02\u0384\u0388\x05d3\x02\u0385' +
    '\u0387\x05\\/\x02\u0386\u0385\x03\x02\x02\x02\u0387\u038A\x03\x02\x02' +
    '\x02\u0388\u0386\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389[\x03' +
    '\x02\x02\x02\u038A\u0388\x03\x02\x02\x02\u038B\u03A0\x05\x80A\x02\u038C' +
    '\u038F\x07\f\x02\x02\u038D\u0390\x05$\x13\x02\u038E\u0390\x07\x0F\x02' +
    '\x02\u038F\u038D\x03\x02\x02\x02\u038F\u038E\x03\x02\x02\x02\u0390\u03A0' +
    '\x03\x02\x02\x02\u0391\u0392\x07\r\x02\x02\u0392\u0394\x05$\x13\x02\u0393' +
    '\u0395\t\x14\x02\x02\u0394\u0393\x03\x02\x02\x02\u0394\u0395\x03\x02\x02' +
    '\x02\u0395\u03A0\x03\x02\x02\x02\u0396\u0397\x07\x7F\x02\x02\u0397\u0399' +
    '\t\x15\x02\x02\u0398\u039A\x05$\x13\x02\u0399\u0398\x03\x02\x02\x02\u0399' +
    '\u039A\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\u039D\t\x14\x02' +
    '\x02\u039C\u039E\x07+\x02\x02\u039D\u039C\x03\x02\x02\x02\u039D\u039E' +
    '\x03\x02\x02\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u038B\x03\x02\x02\x02' +
    '\u039F\u038C\x03\x02\x02\x02\u039F\u0391\x03\x02\x02\x02\u039F\u0396\x03' +
    '\x02\x02\x02\u03A0]\x03\x02\x02\x02\u03A1\u03A3\x05`1\x02\u03A2\u03A1' +
    '\x03\x02\x02\x02\u03A2\u03A3\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02\x02' +
    '\u03A4\u03A8\x05f4\x02\u03A5\u03A7\x05\\/\x02\u03A6\u03A5\x03\x02\x02' +
    '\x02\u03A7\u03AA\x03\x02\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8\u03A9' +
    '\x03\x02\x02\x02\u03A9_\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AB' +
    '\u03AD\x07\x03\x02\x02\u03AC\u03AE\x07\x04\x02\x02\u03AD\u03AC\x03\x02' +
    '\x02\x02\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02\u03AF' +
    '\u03B4\x05b2\x02\u03B0\u03B1\x07\u01F2\x02\x02\u03B1\u03B3\x05b2\x02\u03B2' +
    '\u03B0\x03\x02\x02\x02\u03B3\u03B6\x03\x02\x02\x02\u03B4\u03B2\x03\x02' +
    '\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5a\x03\x02\x02\x02\u03B6\u03B4' +
    '\x03\x02\x02\x02\u03B7\u03C3\x05\x06\x04\x02\u03B8\u03B9\x07\u01F8\x02' +
    '\x02\u03B9\u03BE\x05\x06\x04\x02\u03BA\u03BB\x07\u01F2\x02\x02\u03BB\u03BD' +
    '\x05\x06\x04\x02\u03BC\u03BA\x03\x02\x02\x02\u03BD\u03C0\x03\x02\x02\x02' +
    '\u03BE\u03BC\x03\x02\x02\x02\u03BE\u03BF\x03\x02\x02\x02\u03BF\u03C1\x03' +
    '\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C1\u03C2\x07\u01F9\x02\x02' +
    '\u03C2\u03C4\x03\x02\x02\x02\u03C3\u03B8\x03\x02\x02\x02\u03C3\u03C4\x03' +
    '\x02\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C6\x07z\x02\x02\u03C6' +
    '\u03C7\x07\u01F8\x02\x02\u03C7\u03C8\x05Z.\x02\u03C8\u03C9\x07\u01F9\x02' +
    '\x02\u03C9c\x03\x02\x02\x02\u03CA\u03CB\b3\x01\x02\u03CB\u03CC\x07\u01F8' +
    '\x02\x02\u03CC\u03CD\x05Z.\x02\u03CD\u03CE\x07\u01F9\x02\x02\u03CE\u03D1' +
    '\x03\x02\x02\x02\u03CF\u03D1\x05h5\x02\u03D0\u03CA\x03\x02\x02\x02\u03D0' +
    '\u03CF\x03\x02\x02\x02\u03D1\u03DA\x03\x02\x02\x02\u03D2\u03D3\f\x04\x02' +
    '\x02\u03D3\u03D5\t\x16\x02\x02\u03D4\u03D6\x05V,\x02\u03D5\u03D4\x03\x02' +
    '\x02\x02\u03D5\u03D6\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7' +
    '\u03D9\x05d3\x05\u03D8\u03D2\x03\x02\x02\x02\u03D9\u03DC\x03\x02\x02\x02' +
    '\u03DA\u03D8\x03\x02\x02\x02\u03DA\u03DB\x03\x02\x02\x02\u03DBe\x03\x02' +
    '\x02\x02\u03DC\u03DA\x03\x02\x02\x02\u03DD\u03DE\x05d3\x02\u03DE\u03E0' +
    '\t\x16\x02\x02\u03DF\u03E1\x05V,\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0' +
    '\u03E1\x03\x02\x02\x02\u03E1\u03E7\x03\x02\x02\x02\u03E2\u03E8\x05h5\x02' +
    '\u03E3\u03E4\x07\u01F8\x02\x02\u03E4\u03E5\x05Z.\x02\u03E5\u03E6\x07\u01F9' +
    '\x02\x02\u03E6\u03E8\x03\x02\x02\x02\u03E7\u03E2\x03\x02\x02\x02\u03E7' +
    '\u03E3\x03\x02\x02\x02\u03E8\u03EB\x03\x02\x02\x02\u03E9\u03EB\x05h5\x02' +
    '\u03EA\u03DD\x03\x02\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EBg\x03\x02' +
    '\x02\x02\u03EC\u03FC\x07\x05\x02\x02\u03ED\u03FA\x05V,\x02\u03EE\u03EF' +
    '\x07#\x02\x02\u03EF\u03F0\x07\u01F8\x02\x02\u03F0\u03F5\x05$\x13\x02\u03F1' +
    '\u03F2\x07\u01F2\x02\x02\u03F2\u03F4\x05$\x13\x02\u03F3\u03F1\x03\x02' +
    '\x02\x02\u03F4\u03F7\x03\x02\x02\x02\u03F5\u03F3\x03\x02\x02\x02\u03F5' +
    '\u03F6\x03\x02\x02\x02\u03F6\u03F8\x03\x02\x02\x02\u03F7\u03F5\x03\x02' +
    '\x02\x02\u03F8\u03F9\x07\u01F9\x02\x02\u03F9\u03FB\x03\x02\x02\x02\u03FA' +
    '\u03EE\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB\u03FD\x03\x02' +
    '\x02\x02\u03FC\u03ED\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD' +
    '\u03FF\x03\x02\x02\x02\u03FE\u0400\x05j6\x02\u03FF\u03FE\x03\x02\x02\x02' +
    '\u03FF\u0400\x03\x02\x02\x02\u0400\u040A\x03\x02\x02\x02\u0401\u0402\x07' +
    '\x06\x02\x02\u0402\u0407\x05n8\x02\u0403\u0404\x07\u01F2\x02\x02\u0404' +
    '\u0406\x05n8\x02\u0405\u0403\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02' +
    '\u0407\u0405\x03\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040B\x03' +
    '\x02\x02\x02\u0409\u0407\x03\x02\x02\x02\u040A\u0401\x03\x02\x02\x02\u040A' +
    '\u040B\x03\x02\x02\x02\u040B\u040E\x03\x02\x02\x02\u040C\u040D\x07\x07' +
    '\x02\x02\u040D\u040F\x05$\x13\x02\u040E\u040C\x03\x02\x02\x02\u040E\u040F' +
    '\x03\x02\x02\x02\u040F\u0411\x03\x02\x02\x02\u0410\u0412\x05v<\x02\u0411' +
    '\u0410\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02\u0412\u0415\x03\x02' +
    '\x02\x02\u0413\u0414\x07\n\x02\x02\u0414\u0416\x05$\x13\x02\u0415\u0413' +
    '\x03\x02\x02\x02\u0415\u0416\x03\x02\x02\x02\u0416\u0425\x03\x02\x02\x02' +
    '\u0417\u0418\x07f\x02\x02\u0418\u0419\x05\x06\x04\x02\u0419\u041A\x07' +
    'z\x02\x02\u041A\u0422\x05H%\x02\u041B\u041C\x07\u01F2\x02\x02\u041C\u041D' +
    '\x05\x06\x04\x02\u041D\u041E\x07z\x02\x02\u041E\u041F\x05H%\x02\u041F' +
    '\u0421\x03\x02\x02\x02\u0420\u041B\x03\x02\x02\x02\u0421\u0424\x03\x02' +
    '\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423' +
    '\u0426\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425\u0417\x03\x02' +
    '\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0431\x03\x02\x02\x02\u0427' +
    '\u0429\x07*\x02\x02\u0428\u042A\x07+\x02\x02\u0429\u0428\x03\x02\x02\x02' +
    '\u0429\u042A\x03\x02\x02\x02\u042A\u042B\x03\x02\x02\x02\u042B\u042D\x05' +
    'T+\x02\u042C\u042E\x07\u01FC\x02\x02\u042D\u042C\x03\x02\x02\x02\u042D' +
    '\u042E\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F\u0431\x05|?\x02' +
    '\u0430\u03EC\x03\x02\x02\x02\u0430\u0427\x03\x02\x02\x02\u0430\u042F\x03' +
    '\x02\x02\x02\u0431i\x03\x02\x02\x02\u0432\u0437\x05l7\x02\u0433\u0434' +
    '\x07\u01F2\x02\x02\u0434\u0436\x05l7\x02\u0435\u0433\x03\x02\x02\x02\u0436' +
    '\u0439\x03\x02\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437\u0438\x03\x02' +
    '\x02\x02\u0438k\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02\u043A\u043E' +
    '\x05$\x13\x02\u043B\u043C\x07z\x02\x02\u043C\u043F\x05\n\x06\x02\u043D' +
    '\u043F\x05\x04\x03\x02\u043E\u043B\x03\x02\x02\x02\u043E\u043D\x03\x02' +
    '\x02\x02\u043E\u043F\x03\x02\x02\x02\u043Fm\x03\x02\x02\x02\u0440\u0441' +
    '\b8\x01\x02\u0441\u0442\x07\u01F8\x02\x02\u0442\u0443\x05n8\x02\u0443' +
    '\u0445\x07\u01F9\x02\x02\u0444\u0446\x05r:\x02\u0445\u0444\x03\x02\x02' +
    '\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0449\x03\x02\x02\x02\u0447\u0449' +
    '\x05p9\x02\u0448\u0440\x03\x02\x02\x02\u0448\u0447\x03\x02\x02\x02\u0449' +
    '\u0475\x03\x02\x02\x02\u044A\u044B\f\x07\x02\x02\u044B\u044C\x07!\x02' +
    '\x02\u044C\u044D\x07"\x02\x02\u044D\u0474\x05n8\b\u044E\u044F\f\x04\x02' +
    '\x02\u044F\u0455\x07&\x02\x02\u0450\u0456\x07\x1F\x02\x02\u0451\u0453' +
    '\t\x17\x02\x02\u0452\u0454\x07 \x02\x02\u0453\u0452\x03\x02\x02\x02\u0453' +
    '\u0454\x03\x02\x02\x02\u0454\u0456\x03\x02\x02\x02\u0455\u0450\x03\x02' +
    '\x02\x02\u0455\u0451\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456' +
    '\u0457\x03\x02\x02\x02\u0457\u0458\x07"\x02\x02\u0458\u0474\x05n8\x05' +
    '\u0459\u045F\f\x06\x02\x02\u045A\u0460\x07\x1F\x02\x02\u045B\u045D\t\x17' +
    '\x02\x02\u045C\u045E\x07 \x02\x02\u045D\u045C\x03\x02\x02\x02\u045D\u045E' +
    '\x03\x02\x02\x02\u045E\u0460\x03\x02\x02\x02\u045F\u045A\x03\x02\x02\x02' +
    '\u045F\u045B\x03\x02\x02\x02\u045F\u0460\x03\x02\x02\x02\u0460\u0461\x03' +
    '\x02\x02\x02\u0461\u0462\x07"\x02\x02\u0462\u0463\x05n8\x02\u0463\u0464' +
    '\x07#\x02\x02\u0464\u0465\x05$\x13\x02\u0465\u0474\x03\x02\x02\x02\u0466' +
    '\u046C\f\x05\x02\x02\u0467\u046D\x07\x1F\x02\x02\u0468\u046A\t\x17\x02' +
    '\x02\u0469\u046B\x07 \x02\x02\u046A\u0469\x03\x02\x02\x02\u046A\u046B' +
    '\x03\x02\x02\x02\u046B\u046D\x03\x02\x02\x02\u046C\u0467\x03\x02\x02\x02' +
    '\u046C\u0468\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x03' +
    '\x02\x02\x02\u046E\u046F\x07"\x02\x02\u046F\u0470\x05n8\x02\u0470\u0471' +
    '\x07\x17\x02\x02\u0471\u0472\x05\x8CG\x02\u0472\u0474\x03\x02\x02\x02' +
    '\u0473\u044A\x03\x02\x02\x02\u0473\u044E\x03\x02\x02\x02\u0473\u0459\x03' +
    '\x02\x02\x02\u0473\u0466\x03\x02\x02\x02\u0474\u0477\x03\x02\x02\x02\u0475' +
    '\u0473\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476o\x03\x02\x02' +
    '\x02\u0477\u0475\x03\x02\x02\x02\u0478\u047A\x07+\x02\x02\u0479\u0478' +
    '\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\u047B\x03\x02\x02\x02' +
    '\u047B\u047D\x05T+\x02\u047C\u047E\x07\u01FC\x02\x02\u047D\u047C\x03\x02' +
    '\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E\u0480\x03\x02\x02\x02\u047F' +
    '\u0481\x05r:\x02\u0480\u047F\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02' +
    "\u0481\u0492\x03\x02\x02\x02\u0482\u0483\x07'\x02\x02\u0483\u0484\x05" +
    '\x06\x04\x02\u0484\u0485\x07\u01F8\x02\x02\u0485\u048A\x05$\x13\x02\u0486' +
    '\u0487\x07\u01F2\x02\x02\u0487\u0489\x05$\x13\x02\u0488\u0486\x03\x02' +
    '\x02\x02\u0489\u048C\x03\x02\x02\x02\u048A\u0488\x03\x02\x02\x02\u048A' +
    '\u048B\x03\x02\x02\x02\u048B\u048D\x03\x02\x02\x02\u048C\u048A\x03\x02' +
    '\x02\x02\u048D\u0490\x07\u01F9\x02\x02\u048E\u048F\x07(\x02\x02\u048F' +
    '\u0491\x05$\x13\x02\u0490\u048E\x03\x02\x02\x02\u0490\u0491\x03\x02\x02' +
    '\x02\u0491\u0493\x03\x02\x02\x02\u0492\u0482\x03\x02\x02\x02\u0492\u0493' +
    '\x03\x02\x02\x02\u0493\u04E7\x03\x02\x02\x02\u0494\u0496\x07)\x02\x02' +
    '\u0495\u0494\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0497\x03' +
    '\x02\x02\x02\u0497\u0498\x05X-\x02\u0498\u0499\x05r:\x02\u0499\u04E7\x03' +
    '\x02\x02\x02\u049A\u049C\x07)\x02\x02\u049B\u049A\x03\x02\x02\x02\u049B' +
    '\u049C\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D\u04A0\x05> \x02' +
    '\u049E\u049F\x07\x03\x02\x02\u049F\u04A1\x07w\x02\x02\u04A0\u049E\x03' +
    '\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1\u04B6\x03\x02\x02\x02\u04A2' +
    '\u04A3\x07z\x02\x02\u04A3\u04B7\x05t;\x02\u04A4\u04A6\x07z\x02\x02\u04A5' +
    '\u04A4\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u04A7\x03\x02' +
    '\x02\x02\u04A7\u04B4\x05\x06\x04\x02\u04A8\u04A9\x07\u01F8\x02\x02\u04A9' +
    '\u04AE\x05\x06\x04\x02\u04AA\u04AB\x07\u01F2\x02\x02\u04AB\u04AD\x05\x06' +
    '\x04\x02\u04AC\u04AA\x03\x02\x02\x02\u04AD\u04B0\x03\x02\x02\x02\u04AE' +
    '\u04AC\x03\x02\x02\x02\u04AE\u04AF\x03\x02\x02\x02\u04AF\u04B1\x03\x02' +
    '\x02\x02\u04B0\u04AE\x03\x02\x02\x02\u04B1\u04B2\x07\u01F9\x02\x02\u04B2' +
    '\u04B5\x03\x02\x02\x02\u04B3\u04B5\x05t;\x02\u04B4\u04A8\x03\x02\x02\x02' +
    '\u04B4\u04B3\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5\u04B7\x03' +
    '\x02\x02\x02\u04B6\u04A2\x03\x02\x02\x02\u04B6\u04A5\x03\x02\x02\x02\u04B6' +
    '\u04B7\x03\x02\x02\x02\u04B7\u04E7\x03\x02\x02\x02\u04B8\u04BA\x07)\x02' +
    '\x02\u04B9\u04B8\x03\x02\x02\x02\u04B9\u04BA\x03\x02\x02\x02\u04BA\u04BB' +
    '\x03\x02\x02\x02\u04BB\u04BC\x07g\x02\x02\u04BC\u04BD\x07\x06\x02\x02' +
    '\u04BD\u04BE\x07\u01F8\x02\x02\u04BE\u04C1\x05> \x02\u04BF\u04C0\x07z' +
    '\x02\x02\u04C0\u04C2\x05t;\x02\u04C1\u04BF\x03\x02\x02\x02\u04C1\u04C2' +
    '\x03\x02\x02\x02\u04C2\u04CB\x03\x02\x02\x02\u04C3\u04C4\x07\u01F2\x02' +
    '\x02\u04C4\u04C7\x05> \x02\u04C5\u04C6\x07z\x02\x02\u04C6\u04C8\x05t;' +
    '\x02\u04C7\u04C5\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04CA' +
    '\x03\x02\x02\x02\u04C9\u04C3\x03\x02\x02\x02\u04CA\u04CD\x03\x02\x02\x02' +
    '\u04CB\u04C9\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CE\x03' +
    '\x02\x02\x02\u04CD\u04CB\x03\x02\x02\x02\u04CE\u04D1\x07\u01F9\x02\x02' +
    '\u04CF\u04D0\x07\x03\x02\x02\u04D0\u04D2\x07w\x02\x02\u04D1\u04CF\x03' +
    '\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2\u04E4\x03\x02\x02\x02\u04D3' +
    '\u04D5\x07z\x02\x02\u04D4\u04D3\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02' +
    '\x02\u04D5\u04D6\x03\x02\x02\x02\u04D6\u04E2\x05\x06\x04\x02\u04D7\u04D8' +
    '\x07\u01F8\x02\x02\u04D8\u04DD\x05\x06\x04\x02\u04D9\u04DA\x07\u01F2\x02' +
    '\x02\u04DA\u04DC\x05\x06\x04\x02\u04DB\u04D9\x03\x02\x02\x02\u04DC\u04DF' +
    '\x03\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02' +
    '\u04DE\u04E0\x03\x02\x02\x02\u04DF\u04DD\x03\x02\x02\x02\u04E0\u04E1\x07' +
    '\u01F9\x02\x02\u04E1\u04E3\x03\x02\x02\x02\u04E2\u04D7\x03\x02\x02\x02' +
    '\u04E2\u04E3\x03\x02\x02\x02\u04E3\u04E5\x03\x02\x02\x02\u04E4\u04D4\x03' +
    '\x02\x02\x02\u04E4\u04E5\x03\x02\x02\x02\u04E5\u04E7\x03\x02\x02\x02\u04E6' +
    '\u0479\x03\x02\x02\x02\u04E6\u0495\x03\x02\x02\x02\u04E6\u049B\x03\x02' +
    '\x02\x02\u04E6\u04B9\x03\x02\x02\x02\u04E7q\x03\x02\x02\x02\u04E8\u04EA' +
    '\x07z\x02\x02\u04E9\u04E8\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02' +
    '\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04F7\x05\x06\x04\x02\u04EC\u04ED\x07' +
    '\u01F8\x02\x02\u04ED\u04F2\x05\x06\x04\x02\u04EE\u04EF\x07\u01F2\x02\x02' +
    '\u04EF\u04F1\x05\x06\x04\x02\u04F0\u04EE\x03\x02\x02\x02\u04F1\u04F4\x03' +
    '\x02\x02\x02\u04F2\u04F0\x03\x02\x02\x02\u04F2\u04F3\x03\x02\x02\x02\u04F3' +
    '\u04F5\x03\x02\x02\x02\u04F4\u04F2\x03\x02\x02\x02\u04F5\u04F6\x07\u01F9' +
    '\x02\x02\u04F6\u04F8\x03\x02\x02\x02\u04F7\u04EC\x03\x02\x02\x02\u04F7' +
    '\u04F8\x03\x02\x02\x02\u04F8s\x03\x02\x02\x02\u04F9\u04FA\x07\u01F8\x02' +
    '\x02\u04FA\u04FB\x05\x06\x04\x02\u04FB\u0502\x05\x18\r\x02\u04FC\u04FD' +
    '\x07\u01F2\x02\x02\u04FD\u04FE\x05\x06\x04\x02\u04FE\u04FF\x05\x18\r\x02' +
    '\u04FF\u0501\x03\x02\x02\x02\u0500\u04FC\x03\x02\x02\x02\u0501\u0504\x03' +
    '\x02\x02\x02\u0502\u0500\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503' +
    '\u0505\x03\x02\x02\x02\u0504\u0502\x03\x02\x02\x02\u0505\u0506\x07\u01F9' +
    '\x02\x02\u0506u\x03\x02\x02\x02\u0507\u0508\x07\b\x02\x02\u0508\u0509' +
    '\x07\t\x02\x02\u0509\u050A\x05x=\x02\u050Aw\x03\x02\x02\x02\u050B\u0510' +
    '\x05z>\x02\u050C\u050D\x07\u01F2\x02\x02\u050D\u050F\x05z>\x02\u050E\u050C' +
    '\x03\x02\x02\x02\u050F\u0512\x03\x02\x02\x02\u0510\u050E\x03\x02\x02\x02' +
    '\u0510\u0511\x03\x02\x02\x02\u0511y\x03\x02\x02\x02\u0512\u0510\x03\x02' +
    '\x02\x02\u0513\u0521\x05$\x13\x02\u0514\u0515\x07\u01F8\x02\x02\u0515' +
    '\u0521\x07\u01F9\x02\x02\u0516\u051B\x07s\x02\x02\u0517\u051B\x07t\x02' +
    '\x02\u0518\u0519\x07u\x02\x02\u0519\u051B\x07v\x02\x02\u051A\u0516\x03' +
    '\x02\x02\x02\u051A\u0517\x03\x02\x02\x02\u051A\u0518\x03\x02\x02\x02\u051B' +
    '\u051C\x03\x02\x02\x02\u051C\u051D\x07\u01F8\x02\x02\u051D\u051E\x05x' +
    '=\x02\u051E\u051F\x07\u01F9\x02\x02\u051F\u0521\x03\x02\x02\x02\u0520' +
    '\u0513\x03\x02\x02\x02\u0520\u0514\x03\x02\x02\x02\u0520\u051A\x03\x02' +
    '\x02\x02\u0521{\x03\x02\x02\x02\u0522\u0523\x07$\x02\x02\u0523\u0528\x05' +
    '~@\x02\u0524\u0525\x07\u01F2\x02\x02\u0525\u0527\x05~@\x02\u0526\u0524' +
    '\x03\x02\x02\x02\u0527\u052A\x03\x02\x02\x02\u0528\u0526\x03\x02\x02\x02' +
    '\u0528\u0529\x03\x02\x02\x02\u0529}\x03\x02\x02\x02\u052A\u0528\x03\x02' +
    '\x02\x02\u052B\u052E\x07\u01F8\x02\x02\u052C\u052F\x05$\x13\x02\u052D' +
    '\u052F\x07%\x02\x02\u052E\u052C\x03\x02\x02\x02\u052E\u052D\x03\x02\x02' +
    '\x02\u052F\u0537\x03\x02\x02\x02\u0530\u0533\x07\u01F2\x02\x02\u0531\u0534' +
    '\x05$\x13\x02\u0532\u0534\x07%\x02\x02\u0533\u0531\x03\x02\x02\x02\u0533' +
    '\u0532\x03\x02\x02\x02\u0534\u0536\x03\x02\x02\x02\u0535\u0530\x03\x02' +
    '\x02\x02\u0536\u0539\x03\x02\x02\x02\u0537\u0535\x03\x02\x02\x02\u0537' +
    '\u0538\x03\x02\x02\x02\u0538\u053A\x03\x02\x02\x02\u0539\u0537\x03\x02' +
    '\x02\x02\u053A\u053B\x07\u01F9\x02\x02\u053B\x7F\x03\x02\x02\x02\u053C' +
    '\u053D\x07\v\x02\x02\u053D\u053E\x07\t\x02\x02\u053E\u053F\x05\x82B\x02' +
    '\u053F\x81\x03\x02\x02\x02\u0540\u0545\x05\x84C\x02\u0541\u0542\x07\u01F2' +
    '\x02\x02\u0542\u0544\x05\x84C\x02\u0543\u0541\x03\x02\x02\x02\u0544\u0547' +
    '\x03\x02\x02\x02\u0545\u0543\x03\x02\x02\x02\u0545\u0546\x03\x02\x02\x02' +
    '\u0546\x83\x03\x02\x02\x02\u0547\u0545\x03\x02\x02\x02\u0548\u054A\x05' +
    '$\x13\x02\u0549\u054B\x05T+\x02\u054A\u0549\x03\x02\x02\x02\u054A\u054B' +
    '\x03\x02\x02\x02\u054B\u054D\x03\x02\x02\x02\u054C\u054E\x05\x86D\x02' +
    '\u054D\u054C\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E\u0550\x03' +
    '\x02\x02\x02\u054F\u0551\x05\x88E\x02\u0550\u054F\x03\x02\x02\x02\u0550' +
    '\u0551\x03\x02\x02\x02\u0551\x85\x03\x02\x02\x02\u0552\u0557\x07\x16\x02' +
    '\x02\u0553\u0557\x07\x15\x02\x02\u0554\u0555\x07\x17\x02\x02\u0555\u0557' +
    '\x05*\x16\x02\u0556\u0552\x03\x02\x02\x02\u0556\u0553\x03\x02\x02\x02' +
    '\u0556\u0554\x03\x02\x02\x02\u0557\x87\x03\x02\x02\x02\u0558\u0559\x07' +
    '\x19\x02\x02\u0559\u055A\t\x18\x02\x02\u055A\x89\x03\x02\x02\x02\u055B' +
    '\u055C\x07\u0210\x02\x02\u055C\x8B\x03\x02\x02\x02\u055D\u055E\x07\u01F8' +
    '\x02\x02\u055E\u055F\x05\x8EH\x02\u055F\u0560\x07\u01F9\x02\x02\u0560' +
    '\x8D\x03\x02\x02\x02\u0561\u0566\x05\x06\x04\x02\u0562\u0563\x07\u01F2' +
    '\x02\x02\u0563\u0565\x05\x06\x04\x02\u0564\u0562\x03\x02\x02\x02\u0565' +
    '\u0568\x03\x02\x02\x02\u0566\u0564\x03\x02\x02\x02\u0566\u0567\x03\x02' +
    '\x02\x02\u0567\x8F\x03\x02\x02\x02\u0568\u0566\x03\x02\x02\x02\u0569\u056A' +
    '\t\x19\x02\x02\u056A\x91\x03\x02\x02\x02\u056B\u056C\x07e\x02\x02\u056C' +
    '\u056D\x07\t\x02\x02\u056D\u0572\x05$\x13\x02\u056E\u056F\x07\u01F2\x02' +
    '\x02\u056F\u0571\x05$\x13\x02\u0570\u056E\x03\x02\x02\x02\u0571\u0574' +
    '\x03\x02\x02\x02\u0572\u0570\x03\x02\x02\x02\u0572\u0573\x03\x02\x02\x02' +
    '\u0573\x93\x03\x02\x02\x02\u0574\u0572\x03\x02\x02\x02\u0575\u0576\x07' +
    'c\x02\x02\u0576\u0577\x05\x06\x04\x02\u0577\x95\x03\x02\x02\x02\u0578' +
    '\u0579\x07\u01FF\x02\x02\u0579\u0588\x05\n\x06\x02\u057A\u057B\x07\u0203' +
    '\x02\x02\u057B\u057C\x05$\x13\x02\u057C\u057D\x07\u0204\x02\x02\u057D' +
    '\u0588\x03\x02\x02\x02\u057E\u0580\x07\u0203\x02\x02\u057F\u0581\x05$' +
    '\x13\x02\u0580\u057F\x03\x02\x02\x02\u0580\u0581\x03\x02\x02\x02\u0581' +
    '\u0582\x03\x02\x02\x02\u0582\u0584\x07\u01F0\x02\x02\u0583\u0585\x05$' +
    '\x13\x02\u0584\u0583\x03\x02\x02\x02\u0584\u0585\x03\x02\x02\x02\u0585' +
    '\u0586\x03\x02\x02\x02\u0586\u0588\x07\u0204\x02\x02\u0587\u0578\x03\x02' +
    '\x02\x02\u0587\u057A\x03\x02\x02\x02\u0587\u057E\x03\x02\x02\x02\u0588' +
    '\x97\x03\x02\x02\x02\u0589\u058B\x05\x96L\x02\u058A\u0589\x03\x02\x02' +
    '\x02\u058B\u058C\x03\x02\x02\x02\u058C\u058A\x03\x02\x02\x02\u058C\u058D' +
    '\x03\x02\x02\x02\u058D\u0597\x03\x02\x02\x02\u058E\u0590\x05\x96L\x02' +
    '\u058F\u058E\x03\x02\x02\x02\u0590\u0593\x03\x02\x02\x02\u0591\u058F\x03' +
    '\x02\x02\x02\u0591\u0592\x03\x02\x02\x02\u0592\u0594\x03\x02\x02\x02\u0593' +
    '\u0591\x03\x02\x02\x02\u0594\u0595\x07\u01FF\x02\x02\u0595\u0597\x07\u01FC' +
    '\x02\x02\u0596\u058A\x03\x02\x02\x02\u0596\u0591\x03\x02\x02\x02\u0597' +
    '\x99\x03\x02\x02\x02\u0598\u059B\x05\x06\x04\x02\u0599\u059B\x05\x8AF' +
    '\x02\u059A\u0598\x03\x02\x02\x02\u059A\u0599\x03\x02\x02\x02\u059B\u059D' +
    '\x03\x02\x02\x02\u059C\u059E\x05\x98M\x02\u059D\u059C\x03\x02\x02\x02' +
    '\u059D\u059E\x03\x02\x02\x02\u059E\x9B\x03\x02\x02\x02\u059F\u05AD\x05' +
    '\x90I\x02\u05A0\u05AD\x07\u01EF\x02\x02\u05A1\u05AD\x07\u01F3\x02\x02' +
    '\u05A2\u05AD\x07\u01F4\x02\x02\u05A3\u05AD\x07\u01F5\x02\x02\u05A4\u05AD' +
    '\x07\u01F6\x02\x02\u05A5\u05AD\x07\u01F7\x02\x02\u05A6\u05AD\x07\u01FA' +
    '\x02\x02\u05A7\u05AD\x07\u01FB\x02\x02\u05A8\u05AD\x07\u01FC\x02\x02\u05A9' +
    '\u05AD\x07\u01FD\x02\x02\u05AA\u05AD\x07\u01FE\x02\x02\u05AB\u05AD\x07' +
    '\u0151\x02\x02\u05AC\u059F\x03\x02\x02\x02\u05AC\u05A0\x03\x02\x02\x02' +
    '\u05AC\u05A1\x03\x02\x02\x02\u05AC\u05A2\x03\x02\x02\x02\u05AC\u05A3\x03' +
    '\x02\x02\x02\u05AC\u05A4\x03\x02\x02\x02\u05AC\u05A5\x03\x02\x02\x02\u05AC' +
    '\u05A6\x03\x02\x02\x02\u05AC\u05A7\x03\x02\x02\x02\u05AC\u05A8\x03\x02' +
    '\x02\x02\u05AC\u05A9\x03\x02\x02\x02\u05AC\u05AA\x03\x02\x02\x02\u05AC' +
    '\u05AB\x03\x02\x02\x02\u05AD\x9D\x03\x02\x02\x02\u05AE\u05B2\x07\u0214' +
    '\x02\x02\u05AF\u05B1\x07\u021B\x02\x02\u05B0\u05AF\x03\x02\x02\x02\u05B1' +
    '\u05B4\x03\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B2\u05B3\x03\x02' +
    '\x02\x02\u05B3\u05B5\x03\x02\x02\x02\u05B4\u05B2\x03\x02\x02\x02\u05B5' +
    '\u05B8\x07\u021C\x02\x02\u05B6\u05B8\x07\u0213\x02\x02\u05B7\u05AE\x03' +
    '\x02\x02\x02\u05B7\u05B6\x03\x02\x02\x02\u05B8\x9F\x03\x02\x02\x02\u05B9' +
    '\u05BA\t\x1A\x02\x02\u05BA\xA1\x03\x02\x02\x02\u05BB\u05BC\t\x1B\x02\x02' +
    '\u05BC\xA3\x03\x02\x02\x02\u05BD\u05BE\x07\u01E1\x02\x02\u05BE\u05BF\x07' +
    '\u01F8\x02\x02\u05BF\u05C4\x05$\x13\x02\u05C0\u05C1\x07\u01F2\x02\x02' +
    '\u05C1\u05C3\x05$\x13\x02\u05C2\u05C0\x03\x02\x02\x02\u05C3\u05C6\x03' +
    '\x02\x02\x02\u05C4\u05C2\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5' +
    '\u05C7\x03\x02\x02\x02\u05C6\u05C4\x03\x02\x02\x02\u05C7\u05C8\x07\u01F9' +
    '\x02\x02\u05C8\u06EB\x03\x02\x02\x02\u05C9\u05CA\x07\u01E2\x02\x02\u05CA' +
    '\u05CB\x07\u01F8\x02\x02\u05CB\u05CC\x07\x8C\x02\x02\u05CC\u05E2\x05\x06' +
    '\x04\x02\u05CD\u05CE\x07\u01F2\x02\x02\u05CE\u05CF\x07\x91\x02\x02\u05CF' +
    '\u05D0\x07\u01F8\x02\x02\u05D0\u05D3\x05$\x13\x02\u05D1\u05D2\x07z\x02' +
    '\x02\u05D2\u05D4\x05\x06\x04\x02\u05D3\u05D1\x03\x02\x02\x02\u05D3\u05D4' +
    '\x03\x02\x02\x02\u05D4\u05DD\x03\x02\x02\x02\u05D5\u05D6\x07\u01F2\x02' +
    '\x02\u05D6\u05D9\x05$\x13\x02\u05D7\u05D8\x07z\x02\x02\u05D8\u05DA\x05' +
    '\x06\x04\x02\u05D9\u05D7\x03\x02\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA' +
    '\u05DC\x03\x02\x02\x02\u05DB\u05D5\x03\x02\x02\x02\u05DC\u05DF\x03\x02' +
    '\x02\x02\u05DD\u05DB\x03\x02\x02\x02\u05DD\u05DE\x03\x02\x02\x02\u05DE' +
    '\u05E0\x03\x02\x02\x02\u05DF\u05DD\x03\x02\x02\x02\u05E0\u05E1\x07\u01F9' +
    '\x02\x02\u05E1\u05E3\x03\x02\x02\x02\u05E2\u05CD\x03\x02\x02\x02\u05E2' +
    '\u05E3\x03\x02\x02\x02\u05E3\u05E8\x03\x02\x02\x02\u05E4\u05E5\x07\u01F2' +
    '\x02\x02\u05E5\u05E7\x05$\x13\x02\u05E6\u05E4\x03\x02\x02\x02\u05E7\u05EA' +
    '\x03\x02\x02\x02\u05E8\u05E6\x03\x02\x02\x02\u05E8\u05E9\x03\x02\x02\x02' +
    '\u05E9\u05EB\x03\x02\x02\x02\u05EA\u05E8\x03\x02\x02\x02\u05EB\u05EC\x07' +
    '\u01F9\x02\x02\u05EC\u06EB\x03\x02\x02\x02\u05ED\u05EE\x07\u01E3\x02\x02' +
    '\u05EE\u05EF\x07\u01F8\x02\x02\u05EF\u05F2\x05$\x13\x02\u05F0\u05F1\x07' +
    'z\x02\x02\u05F1\u05F3\x05\x06\x04\x02\u05F2\u05F0\x03\x02\x02\x02\u05F2' +
    '\u05F3\x03\x02\x02\x02\u05F3\u05FC\x03\x02\x02\x02\u05F4\u05F5\x07\u01F2' +
    '\x02\x02\u05F5\u05F8\x05$\x13\x02\u05F6\u05F7\x07z\x02\x02\u05F7\u05F9' +
    '\x05\x06\x04\x02\u05F8\u05F6\x03\x02\x02\x02\u05F8\u05F9\x03\x02\x02\x02' +
    '\u05F9\u05FB\x03\x02\x02\x02\u05FA\u05F4\x03\x02\x02\x02\u05FB\u05FE\x03' +
    '\x02\x02\x02\u05FC\u05FA\x03\x02\x02\x02\u05FC\u05FD\x03\x02\x02\x02\u05FD' +
    '\u05FF\x03\x02\x02\x02\u05FE\u05FC\x03\x02\x02\x02\u05FF\u0600\x07\u01F9' +
    '\x02\x02\u0600\u06EB\x03\x02\x02\x02\u0601\u0602\x07\u01E4\x02\x02\u0602' +
    '\u0603\x07\u01F8\x02\x02\u0603\u0604\x07\x8C\x02\x02\u0604\u0607\x05\x06' +
    '\x04\x02\u0605\u0606\x07\u01F2\x02\x02\u0606\u0608\x05$\x13\x02\u0607' +
    '\u0605\x03\x02\x02\x02\u0607\u0608\x03\x02\x02\x02\u0608\u0609\x03\x02' +
    '\x02\x02';
  private static readonly _serializedATNSegment3: string =
    '\u0609\u060A\x07\u01F9\x02\x02\u060A\u06EB\x03\x02\x02\x02\u060B\u060C' +
    '\x07\u01E5\x02\x02\u060C\u060D\x07\u01F8\x02\x02\u060D\u060E\x05$\x13' +
    '\x02\u060E\u060F\x07\u01F2\x02\x02\u060F\u0613\x07\x8D\x02\x02\u0610\u0614' +
    '\x05$\x13\x02\u0611\u0612\x07q\x02\x02\u0612\u0614\x07\x8A\x02\x02\u0613' +
    '\u0610\x03\x02\x02\x02\u0613\u0611\x03\x02\x02\x02\u0614\u061D\x03\x02' +
    '\x02\x02\u0615\u0616\x07\u01F2\x02\x02\u0616\u061B\x07\x88\x02\x02\u0617' +
    '\u061C\x07\x89\x02\x02\u0618\u061C\x07q\x02\x02\u0619\u061A\x07q\x02\x02' +
    '\u061A\u061C\x07\x8A\x02\x02\u061B\u0617\x03\x02\x02\x02\u061B\u0618\x03' +
    '\x02\x02\x02\u061B\u0619\x03\x02\x02\x02\u061C\u061E\x03\x02\x02\x02\u061D' +
    '\u0615\x03\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\u061F\x03\x02' +
    '\x02\x02\u061F\u0620\x07\u01F9\x02\x02\u0620\u06EB\x03\x02\x02\x02\u0621' +
    '\u0622\x07\xA8\x02\x02\u0622\u0623\x07\u01F8\x02\x02\u0623\u0624\x07\x8C' +
    '\x02\x02\u0624\u063A\x05\x06\x04\x02\u0625\u0626\x07\u01F2\x02\x02\u0626' +
    '\u0627\x07\x91\x02\x02\u0627\u0628\x07\u01F8\x02\x02\u0628\u062B\x05$' +
    '\x13\x02\u0629\u062A\x07z\x02\x02\u062A\u062C\x05\x06\x04\x02\u062B\u0629' +
    '\x03\x02\x02\x02\u062B\u062C\x03\x02\x02\x02\u062C\u0635\x03\x02\x02\x02' +
    '\u062D\u062E\x07\u01F2\x02\x02\u062E\u0631\x05$\x13\x02\u062F\u0630\x07' +
    'z\x02\x02\u0630\u0632\x05\x06\x04\x02\u0631\u062F\x03\x02\x02\x02\u0631' +
    '\u0632\x03\x02\x02\x02\u0632\u0634\x03\x02\x02\x02\u0633\u062D\x03\x02' +
    '\x02\x02\u0634\u0637\x03\x02\x02\x02\u0635\u0633\x03\x02\x02\x02\u0635' +
    '\u0636\x03\x02\x02\x02\u0636\u0638\x03\x02\x02\x02\u0637\u0635\x03\x02' +
    '\x02\x02\u0638\u0639\x07\u01F9\x02\x02\u0639\u063B\x03\x02\x02\x02\u063A' +
    '\u0625\x03\x02\x02\x02\u063A\u063B\x03\x02\x02\x02\u063B\u0640\x03\x02' +
    '\x02\x02\u063C\u063D\x07\u01F2\x02\x02\u063D\u063F\x05$\x13\x02\u063E' +
    '\u063C\x03\x02\x02\x02\u063F\u0642\x03\x02\x02\x02\u0640\u063E\x03\x02' +
    '\x02\x02\u0640\u0641\x03\x02\x02\x02\u0641\u0643\x03\x02\x02\x02\u0642' +
    '\u0640\x03\x02\x02\x02\u0643\u0644\x07\u01F9\x02\x02\u0644\u06EB\x03\x02' +
    '\x02\x02\u0645\u0646\x07\u01E6\x02\x02\u0646\u0647\x07\u01F8\x02\x02\u0647' +
    '\u0648\x05$\x13\x02\u0648\u064B\x07\x8E\x02\x02\u0649\u064A\x07\t\x02' +
    '\x02\u064A\u064C\x07\x8F\x02\x02\u064B\u0649\x03\x02\x02\x02\u064B\u064C' +
    '\x03\x02\x02\x02\u064C\u064D\x03\x02\x02\x02\u064D\u0650\x05$\x13\x02' +
    '\u064E\u064F\x07\t\x02\x02\u064F\u0651\x07\x8F\x02\x02\u0650\u064E\x03' +
    '\x02\x02\x02\u0650\u0651\x03\x02\x02\x02\u0651\u0652\x03\x02\x02\x02\u0652' +
    '\u0653\x07\u01F9\x02\x02\u0653\u06EB\x03\x02\x02\x02\u0654\u0655\x07\u01E7' +
    '\x02\x02\u0655\u0656\x07\u01F8\x02\x02\u0656\u0657\x05$\x13\x02\u0657' +
    '\u0658\x07\u01F9\x02\x02\u0658\u06EB\x03\x02\x02\x02\u0659\u065A\x07\u01E8' +
    '\x02\x02\u065A\u065B\x07\u01F8\x02\x02\u065B\u065C\x05$\x13\x02\u065C' +
    '\u065D\x07\u01F9\x02\x02\u065D\u06EB\x03\x02\x02\x02\u065E\u065F\x07\u01E9' +
    '\x02\x02\u065F\u0660\x07\u01F8\x02\x02\u0660\u0661\x05$\x13\x02\u0661' +
    '\u0662\x07\u01F9\x02\x02\u0662\u06EB\x03\x02\x02\x02\u0663\u0664\x07\u01EA' +
    '\x02\x02\u0664\u0665\x07\u01F8\x02\x02\u0665\u0666\x05$\x13\x02\u0666' +
    '\u0667\x07\u01F2\x02\x02\u0667\u0674\x05$\x13\x02\u0668\u0669\x07H\x02' +
    '\x02\u0669\u066A\x07\u0203\x02\x02\u066A\u066B\x07H\x02\x02\u066B\u0670' +
    '\x07\u0203\x02\x02\u066C\u066D\x05$\x13\x02\u066D\u066E\x07\u01F2\x02' +
    '\x02\u066E\u066F\x05$\x13\x02\u066F\u0671\x03\x02\x02\x02\u0670\u066C' +
    '\x03\x02\x02\x02\u0670\u0671\x03\x02\x02\x02\u0671\u0672\x03\x02\x02\x02' +
    '\u0672\u0673\x07\u0204\x02\x02\u0673\u0675\x07\u0204\x02\x02\u0674\u0668' +
    '\x03\x02\x02\x02\u0674\u0675\x03\x02\x02\x02\u0675\u0676\x03\x02\x02\x02' +
    '\u0676\u0677\x07\u01F9\x02\x02\u0677\u06EB\x03\x02\x02\x02\u0678\u0679' +
    '\x07\u01EB\x02\x02\u0679\u067A\x07\u01F8\x02\x02\u067A\u067B\x05$\x13' +
    '\x02\u067B\u067C\x07\u01F2\x02\x02\u067C\u0689\x05$\x13\x02\u067D\u067E' +
    '\x07H\x02\x02\u067E\u067F\x07\u0203\x02\x02\u067F\u0680\x07H\x02\x02\u0680' +
    '\u0685\x07\u0203\x02\x02\u0681\u0682\x05$\x13\x02\u0682\u0683\x07\u01F2' +
    '\x02\x02\u0683\u0684\x05$\x13\x02\u0684\u0686\x03\x02\x02\x02\u0685\u0681' +
    '\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686\u0687\x03\x02\x02\x02' +
    '\u0687\u0688\x07\u0204\x02\x02\u0688\u068A\x07\u0204\x02\x02\u0689\u067D' +
    '\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02\u068A\u068B\x03\x02\x02\x02' +
    '\u068B\u068C\x07\u01F9\x02\x02\u068C\u06EB\x03\x02\x02\x02\u068D\u068E' +
    '\x07\u01EC\x02\x02\u068E\u06A1\x07\u01F8\x02\x02\u068F\u0690\x07\x94\x02' +
    '\x02\u0690\u0691\x07\u01F8\x02\x02\u0691\u0692\x05$\x13\x02\u0692\u0693' +
    '\x07z\x02\x02\u0693\u069B\x05\x06\x04\x02\u0694\u0695\x07\u01F2\x02\x02' +
    '\u0695\u0696\x05$\x13\x02\u0696\u0697\x07z\x02\x02\u0697\u0698\x05\x06' +
    '\x04\x02\u0698\u069A\x03\x02\x02\x02\u0699\u0694\x03\x02\x02\x02\u069A' +
    '\u069D\x03\x02\x02\x02\u069B\u0699\x03\x02\x02\x02\u069B\u069C\x03\x02' +
    '\x02\x02\u069C\u069E\x03\x02\x02\x02\u069D\u069B\x03\x02\x02\x02\u069E' +
    '\u069F\x07\u01F9\x02\x02\u069F\u06A0\x07\u01F2\x02\x02\u06A0\u06A2\x03' +
    '\x02\x02\x02\u06A1\u068F\x03\x02\x02\x02\u06A1\u06A2\x03\x02\x02\x02\u06A2' +
    '\u06A3\x03\x02\x02\x02\u06A3\u06A4\x05$\x13\x02\u06A4\u06A7\x07\x8E\x02' +
    '\x02\u06A5\u06A6\x07\t\x02\x02\u06A6\u06A8\x07\x8F\x02\x02\u06A7\u06A5' +
    '\x03\x02\x02\x02\u06A7\u06A8\x03\x02\x02\x02\u06A8\u06A9\x03\x02\x02\x02' +
    '\u06A9\u06AC\x05$\x13\x02\u06AA\u06AB\x07\t\x02\x02\u06AB\u06AD\x07\x8F' +
    '\x02\x02\u06AC\u06AA\x03\x02\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD' +
    '\u06AE\x03\x02\x02\x02\u06AE\u06AF\x07\x90\x02\x02\u06AF\u06C1\x05\x06' +
    '\x04\x02\u06B0\u06B3\x05\x18\r\x02\u06B1\u06B2\x07\x92\x02\x02\u06B2\u06B4' +
    '\x05$\x13\x02\u06B3\u06B1\x03\x02\x02\x02\u06B3\u06B4\x03\x02\x02\x02' +
    '\u06B4\u06B7\x03\x02\x02\x02\u06B5\u06B6\x07%\x02\x02\u06B6\u06B8\x05' +
    '$\x13\x02\u06B7\u06B5\x03\x02\x02\x02\u06B7\u06B8\x03\x02\x02\x02\u06B8' +
    '\u06BD\x03\x02\x02\x02\u06B9\u06BB\x07=\x02\x02\u06BA\u06B9\x03\x02\x02' +
    '\x02\u06BA\u06BB\x03\x02\x02\x02\u06BB\u06BC\x03\x02\x02\x02\u06BC\u06BE' +
    '\x07?\x02\x02\u06BD\u06BA\x03\x02\x02\x02\u06BD\u06BE\x03\x02\x02\x02' +
    '\u06BE\u06C2\x03\x02\x02\x02\u06BF\u06C0\x07\x93\x02\x02\u06C0\u06C2\x07' +
    'w\x02\x02\u06C1\u06B0\x03\x02\x02\x02\u06C1\u06BF\x03\x02\x02\x02\u06C2' +
    '\u06DA\x03\x02\x02\x02\u06C3\u06C4\x07\u01F2\x02\x02\u06C4\u06D6\x05\x06' +
    '\x04\x02\u06C5\u06C8\x05\x18\r\x02\u06C6\u06C7\x07\x92\x02\x02\u06C7\u06C9' +
    '\x05$\x13\x02\u06C8\u06C6\x03\x02\x02\x02\u06C8\u06C9\x03\x02\x02\x02' +
    '\u06C9\u06CC\x03\x02\x02\x02\u06CA\u06CB\x07%\x02\x02\u06CB\u06CD\x05' +
    '$\x13\x02\u06CC\u06CA\x03\x02\x02\x02\u06CC\u06CD\x03\x02\x02\x02\u06CD' +
    '\u06D2\x03\x02\x02\x02\u06CE\u06D0\x07=\x02\x02\u06CF\u06CE\x03\x02\x02' +
    '\x02\u06CF\u06D0\x03\x02\x02\x02\u06D0\u06D1\x03\x02\x02\x02\u06D1\u06D3' +
    '\x07?\x02\x02\u06D2\u06CF\x03\x02\x02\x02\u06D2\u06D3\x03\x02\x02\x02' +
    '\u06D3\u06D7\x03\x02\x02\x02\u06D4\u06D5\x07\x93\x02\x02\u06D5\u06D7\x07' +
    'w\x02\x02\u06D6\u06C5\x03\x02\x02\x02\u06D6\u06D4\x03\x02\x02\x02\u06D7' +
    '\u06D9\x03\x02\x02\x02\u06D8\u06C3\x03\x02\x02\x02\u06D9\u06DC\x03\x02' +
    '\x02\x02\u06DA\u06D8\x03\x02\x02\x02\u06DA\u06DB\x03\x02\x02\x02\u06DB' +
    '\u06DD\x03\x02\x02\x02\u06DC\u06DA\x03\x02\x02\x02\u06DD\u06DE\x07\u01F9' +
    '\x02\x02\u06DE\u06EB\x03\x02\x02\x02\u06DF\u06E0\x07\u01ED\x02\x02\u06E0' +
    '\u06E1\x07\u01F8\x02\x02\u06E1\u06E2\x05\x06\x04\x02\u06E2\u06E3\x07\u01F2' +
    '\x02\x02\u06E3\u06E4\x05\xA0Q\x02\u06E4\u06E5\x07\u01F2\x02\x02\u06E5' +
    '\u06E6\x05\xA0Q\x02\u06E6\u06E7\x07\u01F2\x02\x02\u06E7\u06E8\x05$\x13' +
    '\x02\u06E8\u06E9\x07\u01F9\x02\x02\u06E9\u06EB\x03\x02\x02\x02\u06EA\u05BD' +
    '\x03\x02\x02\x02\u06EA\u05C9\x03\x02\x02\x02\u06EA\u05ED\x03\x02\x02\x02' +
    '\u06EA\u0601\x03\x02\x02\x02\u06EA\u060B\x03\x02\x02\x02\u06EA\u0621\x03' +
    '\x02\x02\x02\u06EA\u0645\x03\x02\x02\x02\u06EA\u0654\x03\x02\x02\x02\u06EA' +
    '\u0659\x03\x02\x02\x02\u06EA\u065E\x03\x02\x02\x02\u06EA\u0663\x03\x02' +
    '\x02\x02\u06EA\u0678\x03\x02\x02\x02\u06EA\u068D\x03\x02\x02\x02\u06EA' +
    '\u06DF\x03\x02\x02\x02\u06EB\xA5\x03\x02\x02\x02\xF5\xA7\xAC\xB3\xB6\xBA' +
    '\xC2\xC7\xCC\xD3\xE4\xE8\xED\xF2\xF4\xF8\xFF\u0102\u0107\u010B\u0111\u0117' +
    '\u011A\u011D\u0121\u0124\u0128\u012B\u012F\u0135\u013A\u013E\u0143\u0147' +
    '\u0150\u0155\u0157\u0174\u017E\u0187\u018F\u019B\u01B1\u01B5\u01BD\u01C3' +
    '\u01C8\u01CE\u01DA\u01EE\u01F8\u01FB\u0202\u0206\u020B\u0211\u0217\u0222' +
    '\u0224\u022C\u0234\u023E\u0253\u0260\u0266\u026C\u0273\u0275\u0280\u028A' +
    '\u029D\u02AA\u02AF\u02B7\u02C0\u02C4\u02D1\u02D8\u02DC\u02DE\u02E9\u02EC' +
    '\u02F1\u02F3\u0303\u0306\u0309\u030C\u0311\u031B\u0327\u032A\u032D\u0330' +
    '\u033B\u0344\u0346\u034D\u0352\u0357\u035C\u0360\u0363\u036E\u0370\u0377' +
    '\u0379\u0382\u0388\u038F\u0394\u0399\u039D\u039F\u03A2\u03A8\u03AD\u03B4' +
    '\u03BE\u03C3\u03D0\u03D5\u03DA\u03E0\u03E7\u03EA\u03F5\u03FA\u03FC\u03FF' +
    '\u0407\u040A\u040E\u0411\u0415\u0422\u0425\u0429\u042D\u0430\u0437\u043E' +
    '\u0445\u0448\u0453\u0455\u045D\u045F\u046A\u046C\u0473\u0475\u0479\u047D' +
    '\u0480\u048A\u0490\u0492\u0495\u049B\u04A0\u04A5\u04AE\u04B4\u04B6\u04B9' +
    '\u04C1\u04C7\u04CB\u04D1\u04D4\u04DD\u04E2\u04E4\u04E6\u04E9\u04F2\u04F7' +
    '\u0502\u0510\u051A\u0520\u0528\u052E\u0533\u0537\u0545\u054A\u054D\u0550' +
    '\u0556\u0566\u0572\u0580\u0584\u0587\u058C\u0591\u0596\u059A\u059D\u05AC' +
    '\u05B2\u05B7\u05C4\u05D3\u05D9\u05DD\u05E2\u05E8\u05F2\u05F8\u05FC\u0607' +
    '\u0613\u061B\u061D\u062B\u0631\u0635\u063A\u0640\u064B\u0650\u0670\u0674' +
    '\u0685\u0689\u069B\u06A1\u06A7\u06AC\u06B3\u06B7\u06BA\u06BD\u06C1\u06C8' +
    '\u06CC\u06CF\u06D2\u06D6\u06DA\u06EA';
  public static readonly _serializedATN: string = Utils.join(
    [
      PostgresParser._serializedATNSegment0,
      PostgresParser._serializedATNSegment1,
      PostgresParser._serializedATNSegment2,
      PostgresParser._serializedATNSegment3
    ],
    ''
  );
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!PostgresParser.__ATN) {
      PostgresParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(PostgresParser._serializedATN)
      );
    }

    return PostgresParser.__ATN;
  }
}

export class SqlContext extends ParserRuleContext {
  public EOF(): TerminalNode[];
  public EOF(i: number): TerminalNode;
  public EOF(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.EOF);
    } else {
      return this.getToken(PostgresParser.EOF, i);
    }
  }
  public BOM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BOM, 0);
  }
  public SEMI_COLON(): TerminalNode[];
  public SEMI_COLON(i: number): TerminalNode;
  public SEMI_COLON(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.SEMI_COLON);
    } else {
      return this.getToken(PostgresParser.SEMI_COLON, i);
    }
  }
  public select_stmt(): Select_stmtContext[];
  public select_stmt(i: number): Select_stmtContext;
  public select_stmt(i?: number): Select_stmtContext | Select_stmtContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Select_stmtContext);
    } else {
      return this.getRuleContext(i, Select_stmtContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_sql;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSql) {
      listener.enterSql(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSql) {
      listener.exitSql(this);
    }
  }
}

export class Id_tokenContext extends ParserRuleContext {
  public Identifier(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.Identifier, 0);
  }
  public QuotedIdentifier(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.QuotedIdentifier, 0);
  }
  public tokens_nonkeyword(): Tokens_nonkeywordContext | undefined {
    return this.tryGetRuleContext(0, Tokens_nonkeywordContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_id_token;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterId_token) {
      listener.enterId_token(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitId_token) {
      listener.exitId_token(this);
    }
  }
}

export class IdentifierContext extends ParserRuleContext {
  public id_token(): Id_tokenContext | undefined {
    return this.tryGetRuleContext(0, Id_tokenContext);
  }
  public tokens_nonreserved(): Tokens_nonreservedContext | undefined {
    return this.tryGetRuleContext(0, Tokens_nonreservedContext);
  }
  public tokens_nonreserved_except_function_type():
    | Tokens_nonreserved_except_function_typeContext
    | undefined {
    return this.tryGetRuleContext(0, Tokens_nonreserved_except_function_typeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_identifier;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterIdentifier) {
      listener.enterIdentifier(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitIdentifier) {
      listener.exitIdentifier(this);
    }
  }
}

export class Identifier_nontypeContext extends ParserRuleContext {
  public id_token(): Id_tokenContext | undefined {
    return this.tryGetRuleContext(0, Id_tokenContext);
  }
  public tokens_nonreserved(): Tokens_nonreservedContext | undefined {
    return this.tryGetRuleContext(0, Tokens_nonreservedContext);
  }
  public tokens_reserved_except_function_type():
    | Tokens_reserved_except_function_typeContext
    | undefined {
    return this.tryGetRuleContext(0, Tokens_reserved_except_function_typeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_identifier_nontype;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterIdentifier_nontype) {
      listener.enterIdentifier_nontype(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitIdentifier_nontype) {
      listener.exitIdentifier_nontype(this);
    }
  }
}

export class Col_labelContext extends ParserRuleContext {
  public id_token(): Id_tokenContext | undefined {
    return this.tryGetRuleContext(0, Id_tokenContext);
  }
  public tokens_reserved(): Tokens_reservedContext | undefined {
    return this.tryGetRuleContext(0, Tokens_reservedContext);
  }
  public tokens_nonreserved(): Tokens_nonreservedContext | undefined {
    return this.tryGetRuleContext(0, Tokens_nonreservedContext);
  }
  public tokens_reserved_except_function_type():
    | Tokens_reserved_except_function_typeContext
    | undefined {
    return this.tryGetRuleContext(0, Tokens_reserved_except_function_typeContext);
  }
  public tokens_nonreserved_except_function_type():
    | Tokens_nonreserved_except_function_typeContext
    | undefined {
    return this.tryGetRuleContext(0, Tokens_nonreserved_except_function_typeContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_col_label;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterCol_label) {
      listener.enterCol_label(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitCol_label) {
      listener.exitCol_label(this);
    }
  }
}

export class Tokens_nonreservedContext extends ParserRuleContext {
  public AT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AT, 0);
  }
  public BY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BY, 0);
  }
  public CURRENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT, 0);
  }
  public DAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DAY, 0);
  }
  public DOCUMENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOCUMENT, 0);
  }
  public DOUBLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOUBLE, 0);
  }
  public ESCAPE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ESCAPE, 0);
  }
  public EXCLUDE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXCLUDE, 0);
  }
  public FAMILY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FAMILY, 0);
  }
  public FILTER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FILTER, 0);
  }
  public FIRST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FIRST, 0);
  }
  public FOLLOWING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FOLLOWING, 0);
  }
  public GROUPS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUPS, 0);
  }
  public HOUR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.HOUR, 0);
  }
  public LAST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LAST, 0);
  }
  public MINUTE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MINUTE, 0);
  }
  public MODE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MODE, 0);
  }
  public MONTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MONTH, 0);
  }
  public NEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NEXT, 0);
  }
  public NO(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NO, 0);
  }
  public NULLS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NULLS, 0);
  }
  public OF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OF, 0);
  }
  public OPERATOR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OPERATOR, 0);
  }
  public OTHERS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OTHERS, 0);
  }
  public OVER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OVER, 0);
  }
  public PARTITION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PARTITION, 0);
  }
  public PRECEDING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PRECEDING, 0);
  }
  public RANGE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RANGE, 0);
  }
  public RECURSIVE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RECURSIVE, 0);
  }
  public REPLACE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REPLACE, 0);
  }
  public ROLLUP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROLLUP, 0);
  }
  public ROWS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROWS, 0);
  }
  public SECOND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SECOND, 0);
  }
  public SETS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SETS, 0);
  }
  public STRIP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STRIP, 0);
  }
  public TEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TEXT, 0);
  }
  public TIES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TIES, 0);
  }
  public UNBOUNDED(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNBOUNDED, 0);
  }
  public UNKNOWN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNKNOWN, 0);
  }
  public VARYING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VARYING, 0);
  }
  public WITHIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WITHIN, 0);
  }
  public WITHOUT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WITHOUT, 0);
  }
  public YEAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.YEAR, 0);
  }
  public ZONE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ZONE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_tokens_nonreserved;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterTokens_nonreserved) {
      listener.enterTokens_nonreserved(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitTokens_nonreserved) {
      listener.exitTokens_nonreserved(this);
    }
  }
}

export class Tokens_nonreserved_except_function_typeContext extends ParserRuleContext {
  public BETWEEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BETWEEN, 0);
  }
  public BIGINT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIGINT, 0);
  }
  public BIT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIT, 0);
  }
  public BOOLEAN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BOOLEAN, 0);
  }
  public CHAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CHAR, 0);
  }
  public CHARACTER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CHARACTER, 0);
  }
  public COALESCE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COALESCE, 0);
  }
  public DEC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DEC, 0);
  }
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DECIMAL, 0);
  }
  public EXISTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXISTS, 0);
  }
  public EXTRACT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXTRACT, 0);
  }
  public FLOAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FLOAT, 0);
  }
  public GREATEST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GREATEST, 0);
  }
  public GROUPING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUPING, 0);
  }
  public INT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INT, 0);
  }
  public INTEGER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INTEGER, 0);
  }
  public INTERVAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INTERVAL, 0);
  }
  public LEAST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEAST, 0);
  }
  public NATIONAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NATIONAL, 0);
  }
  public NCHAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NCHAR, 0);
  }
  public NULLIF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NULLIF, 0);
  }
  public NUMERIC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NUMERIC, 0);
  }
  public OVERLAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OVERLAY, 0);
  }
  public POSITION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.POSITION, 0);
  }
  public PRECISION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PRECISION, 0);
  }
  public REAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REAL, 0);
  }
  public ROW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROW, 0);
  }
  public SETOF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SETOF, 0);
  }
  public SMALLINT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SMALLINT, 0);
  }
  public SUBSTRING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SUBSTRING, 0);
  }
  public TIME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TIME, 0);
  }
  public TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TIMESTAMP, 0);
  }
  public TREAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TREAT, 0);
  }
  public TRIM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRIM, 0);
  }
  public VALUES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VALUES, 0);
  }
  public VARCHAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VARCHAR, 0);
  }
  public XMLCONCAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLCONCAT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_tokens_nonreserved_except_function_type;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterTokens_nonreserved_except_function_type) {
      listener.enterTokens_nonreserved_except_function_type(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitTokens_nonreserved_except_function_type) {
      listener.exitTokens_nonreserved_except_function_type(this);
    }
  }
}

export class Tokens_reserved_except_function_typeContext extends ParserRuleContext {
  public CROSS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CROSS, 0);
  }
  public FULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FULL, 0);
  }
  public ILIKE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ILIKE, 0);
  }
  public INNER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INNER, 0);
  }
  public IS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.IS, 0);
  }
  public ISNULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ISNULL, 0);
  }
  public JOIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JOIN, 0);
  }
  public LEFT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT, 0);
  }
  public LIKE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LIKE, 0);
  }
  public NATURAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NATURAL, 0);
  }
  public NOTNULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOTNULL, 0);
  }
  public OUTER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OUTER, 0);
  }
  public OVERLAPS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OVERLAPS, 0);
  }
  public RIGHT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT, 0);
  }
  public SIMILAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SIMILAR, 0);
  }
  public TABLESAMPLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TABLESAMPLE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_tokens_reserved_except_function_type;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterTokens_reserved_except_function_type) {
      listener.enterTokens_reserved_except_function_type(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitTokens_reserved_except_function_type) {
      listener.exitTokens_reserved_except_function_type(this);
    }
  }
}

export class Tokens_reservedContext extends ParserRuleContext {
  public ALL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ALL, 0);
  }
  public AND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AND, 0);
  }
  public ANY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ANY, 0);
  }
  public ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY, 0);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AS, 0);
  }
  public ASC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ASC, 0);
  }
  public ASYMMETRIC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ASYMMETRIC, 0);
  }
  public CASE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CASE, 0);
  }
  public CAST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CAST, 0);
  }
  public COLLATE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COLLATE, 0);
  }
  public CURRENT_DATE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT_DATE, 0);
  }
  public CURRENT_TIME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT_TIME, 0);
  }
  public CURRENT_TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT_TIMESTAMP, 0);
  }
  public DEFAULT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DEFAULT, 0);
  }
  public DESC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DESC, 0);
  }
  public DISTINCT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DISTINCT, 0);
  }
  public ELSE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ELSE, 0);
  }
  public END(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.END, 0);
  }
  public EXCEPT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXCEPT, 0);
  }
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FALSE, 0);
  }
  public FETCH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FETCH, 0);
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FROM, 0);
  }
  public GROUP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUP, 0);
  }
  public HAVING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.HAVING, 0);
  }
  public IN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.IN, 0);
  }
  public INTERSECT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INTERSECT, 0);
  }
  public LATERAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LATERAL, 0);
  }
  public LIMIT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LIMIT, 0);
  }
  public LOCALTIME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOCALTIME, 0);
  }
  public LOCALTIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOCALTIMESTAMP, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOT, 0);
  }
  public NULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NULL, 0);
  }
  public OFFSET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OFFSET, 0);
  }
  public ON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ON, 0);
  }
  public ONLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ONLY, 0);
  }
  public OR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OR, 0);
  }
  public ORDER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ORDER, 0);
  }
  public SELECT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SELECT, 0);
  }
  public SOME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SOME, 0);
  }
  public SYMMETRIC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SYMMETRIC, 0);
  }
  public TABLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TABLE, 0);
  }
  public THEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.THEN, 0);
  }
  public TO(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO, 0);
  }
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRUE, 0);
  }
  public UNION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNION, 0);
  }
  public USING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.USING, 0);
  }
  public VARIADIC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VARIADIC, 0);
  }
  public WHEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WHEN, 0);
  }
  public WHERE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WHERE, 0);
  }
  public WINDOW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WINDOW, 0);
  }
  public WITH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WITH, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_tokens_reserved;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterTokens_reserved) {
      listener.enterTokens_reserved(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitTokens_reserved) {
      listener.exitTokens_reserved(this);
    }
  }
}

export class Tokens_nonkeywordContext extends ParserRuleContext {
  public ALIAS(): TerminalNode {
    return this.getToken(PostgresParser.ALIAS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_tokens_nonkeyword;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterTokens_nonkeyword) {
      listener.enterTokens_nonkeyword(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitTokens_nonkeyword) {
      listener.exitTokens_nonkeyword(this);
    }
  }
}

export class Type_listContext extends ParserRuleContext {
  public data_type(): Data_typeContext[];
  public data_type(i: number): Data_typeContext;
  public data_type(i?: number): Data_typeContext | Data_typeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Data_typeContext);
    } else {
      return this.getRuleContext(i, Data_typeContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_type_list;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterType_list) {
      listener.enterType_list(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitType_list) {
      listener.exitType_list(this);
    }
  }
}

export class Data_typeContext extends ParserRuleContext {
  public predefined_type(): Predefined_typeContext {
    return this.getRuleContext(0, Predefined_typeContext);
  }
  public SETOF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SETOF, 0);
  }
  public ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY, 0);
  }
  public array_type(): Array_typeContext[];
  public array_type(i: number): Array_typeContext;
  public array_type(i?: number): Array_typeContext | Array_typeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Array_typeContext);
    } else {
      return this.getRuleContext(i, Array_typeContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_data_type;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterData_type) {
      listener.enterData_type(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitData_type) {
      listener.exitData_type(this);
    }
  }
}

export class Array_typeContext extends ParserRuleContext {
  public LEFT_BRACKET(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_BRACKET, 0);
  }
  public RIGHT_BRACKET(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_BRACKET, 0);
  }
  public NUMBER_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NUMBER_LITERAL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_array_type;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterArray_type) {
      listener.enterArray_type(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitArray_type) {
      listener.exitArray_type(this);
    }
  }
}

export class Predefined_typeContext extends ParserRuleContext {
  public BIGINT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIGINT, 0);
  }
  public BIT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIT, 0);
  }
  public VARYING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VARYING, 0);
  }
  public type_length(): Type_lengthContext | undefined {
    return this.tryGetRuleContext(0, Type_lengthContext);
  }
  public BOOLEAN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BOOLEAN, 0);
  }
  public DEC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DEC, 0);
  }
  public precision_param(): Precision_paramContext | undefined {
    return this.tryGetRuleContext(0, Precision_paramContext);
  }
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DECIMAL, 0);
  }
  public DOUBLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOUBLE, 0);
  }
  public PRECISION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PRECISION, 0);
  }
  public FLOAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FLOAT, 0);
  }
  public INT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INT, 0);
  }
  public INTEGER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INTEGER, 0);
  }
  public INTERVAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INTERVAL, 0);
  }
  public interval_field(): Interval_fieldContext | undefined {
    return this.tryGetRuleContext(0, Interval_fieldContext);
  }
  public CHARACTER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CHARACTER, 0);
  }
  public CHAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CHAR, 0);
  }
  public NATIONAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NATIONAL, 0);
  }
  public NCHAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NCHAR, 0);
  }
  public NUMERIC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NUMERIC, 0);
  }
  public REAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REAL, 0);
  }
  public SMALLINT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SMALLINT, 0);
  }
  public TIME(): TerminalNode[];
  public TIME(i: number): TerminalNode;
  public TIME(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.TIME);
    } else {
      return this.getToken(PostgresParser.TIME, i);
    }
  }
  public ZONE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ZONE, 0);
  }
  public WITH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WITH, 0);
  }
  public WITHOUT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WITHOUT, 0);
  }
  public TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TIMESTAMP, 0);
  }
  public VARCHAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VARCHAR, 0);
  }
  public identifier_nontype(): Identifier_nontypeContext | undefined {
    return this.tryGetRuleContext(0, Identifier_nontypeContext);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_predefined_type;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterPredefined_type) {
      listener.enterPredefined_type(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitPredefined_type) {
      listener.exitPredefined_type(this);
    }
  }
}

export class Interval_fieldContext extends ParserRuleContext {
  public YEAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.YEAR, 0);
  }
  public MONTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MONTH, 0);
  }
  public DAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DAY, 0);
  }
  public HOUR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.HOUR, 0);
  }
  public MINUTE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MINUTE, 0);
  }
  public SECOND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SECOND, 0);
  }
  public TO(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_interval_field;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterInterval_field) {
      listener.enterInterval_field(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitInterval_field) {
      listener.exitInterval_field(this);
    }
  }
}

export class Type_lengthContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public NUMBER_LITERAL(): TerminalNode {
    return this.getToken(PostgresParser.NUMBER_LITERAL, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_type_length;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterType_length) {
      listener.enterType_length(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitType_length) {
      listener.exitType_length(this);
    }
  }
}

export class Precision_paramContext extends ParserRuleContext {
  public _precision!: Token;
  public _scale!: Token;
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public NUMBER_LITERAL(): TerminalNode[];
  public NUMBER_LITERAL(i: number): TerminalNode;
  public NUMBER_LITERAL(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.NUMBER_LITERAL);
    } else {
      return this.getToken(PostgresParser.NUMBER_LITERAL, i);
    }
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COMMA, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_precision_param;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterPrecision_param) {
      listener.enterPrecision_param(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitPrecision_param) {
      listener.exitPrecision_param(this);
    }
  }
}

export class VexContext extends ParserRuleContext {
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public CAST_EXPRESSION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CAST_EXPRESSION, 0);
  }
  public data_type(): Data_typeContext | undefined {
    return this.tryGetRuleContext(0, Data_typeContext);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public indirection_list(): Indirection_listContext | undefined {
    return this.tryGetRuleContext(0, Indirection_listContext);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  public collate_identifier(): Collate_identifierContext | undefined {
    return this.tryGetRuleContext(0, Collate_identifierContext);
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PLUS, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MINUS, 0);
  }
  public AT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AT, 0);
  }
  public TIME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TIME, 0);
  }
  public ZONE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ZONE, 0);
  }
  public EXP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXP, 0);
  }
  public MULTIPLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MULTIPLY, 0);
  }
  public DIVIDE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DIVIDE, 0);
  }
  public MODULAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MODULAR, 0);
  }
  public op(): OpContext | undefined {
    return this.tryGetRuleContext(0, OpContext);
  }
  public IN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.IN, 0);
  }
  public select_stmt_no_parens(): Select_stmt_no_parensContext | undefined {
    return this.tryGetRuleContext(0, Select_stmt_no_parensContext);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOT, 0);
  }
  public BETWEEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BETWEEN, 0);
  }
  public vex_b(): Vex_bContext | undefined {
    return this.tryGetRuleContext(0, Vex_bContext);
  }
  public AND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AND, 0);
  }
  public ASYMMETRIC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ASYMMETRIC, 0);
  }
  public SYMMETRIC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SYMMETRIC, 0);
  }
  public LIKE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LIKE, 0);
  }
  public ILIKE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ILIKE, 0);
  }
  public SIMILAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SIMILAR, 0);
  }
  public TO(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO, 0);
  }
  public ESCAPE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ESCAPE, 0);
  }
  public LTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LTH, 0);
  }
  public GTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GTH, 0);
  }
  public LEQ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEQ, 0);
  }
  public GEQ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GEQ, 0);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EQUAL, 0);
  }
  public NOT_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOT_EQUAL, 0);
  }
  public IS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.IS, 0);
  }
  public truth_value(): Truth_valueContext | undefined {
    return this.tryGetRuleContext(0, Truth_valueContext);
  }
  public NULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NULL, 0);
  }
  public DISTINCT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DISTINCT, 0);
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FROM, 0);
  }
  public DOCUMENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOCUMENT, 0);
  }
  public UNKNOWN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNKNOWN, 0);
  }
  public OF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OF, 0);
  }
  public type_list(): Type_listContext | undefined {
    return this.tryGetRuleContext(0, Type_listContext);
  }
  public ISNULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ISNULL, 0);
  }
  public NOTNULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOTNULL, 0);
  }
  public OR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OR, 0);
  }
  public value_expression_primary(): Value_expression_primaryContext | undefined {
    return this.tryGetRuleContext(0, Value_expression_primaryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_vex;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterVex) {
      listener.enterVex(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitVex) {
      listener.exitVex(this);
    }
  }
}

export class Vex_bContext extends ParserRuleContext {
  public vex_b(): Vex_bContext[];
  public vex_b(i: number): Vex_bContext;
  public vex_b(i?: number): Vex_bContext | Vex_bContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Vex_bContext);
    } else {
      return this.getRuleContext(i, Vex_bContext);
    }
  }
  public CAST_EXPRESSION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CAST_EXPRESSION, 0);
  }
  public data_type(): Data_typeContext | undefined {
    return this.tryGetRuleContext(0, Data_typeContext);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public indirection_list(): Indirection_listContext | undefined {
    return this.tryGetRuleContext(0, Indirection_listContext);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PLUS, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MINUS, 0);
  }
  public EXP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXP, 0);
  }
  public MULTIPLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MULTIPLY, 0);
  }
  public DIVIDE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DIVIDE, 0);
  }
  public MODULAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MODULAR, 0);
  }
  public op(): OpContext | undefined {
    return this.tryGetRuleContext(0, OpContext);
  }
  public LTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LTH, 0);
  }
  public GTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GTH, 0);
  }
  public LEQ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEQ, 0);
  }
  public GEQ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GEQ, 0);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EQUAL, 0);
  }
  public NOT_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOT_EQUAL, 0);
  }
  public IS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.IS, 0);
  }
  public DISTINCT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DISTINCT, 0);
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FROM, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOT, 0);
  }
  public DOCUMENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOCUMENT, 0);
  }
  public UNKNOWN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNKNOWN, 0);
  }
  public OF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OF, 0);
  }
  public type_list(): Type_listContext | undefined {
    return this.tryGetRuleContext(0, Type_listContext);
  }
  public value_expression_primary(): Value_expression_primaryContext | undefined {
    return this.tryGetRuleContext(0, Value_expression_primaryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_vex_b;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterVex_b) {
      listener.enterVex_b(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitVex_b) {
      listener.exitVex_b(this);
    }
  }
}

export class OpContext extends ParserRuleContext {
  public op_chars(): Op_charsContext | undefined {
    return this.tryGetRuleContext(0, Op_charsContext);
  }
  public OPERATOR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OPERATOR, 0);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOT, 0);
  }
  public all_simple_op(): All_simple_opContext | undefined {
    return this.tryGetRuleContext(0, All_simple_opContext);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_op;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterOp) {
      listener.enterOp(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitOp) {
      listener.exitOp(this);
    }
  }
}

export class All_op_refContext extends ParserRuleContext {
  public all_simple_op(): All_simple_opContext {
    return this.getRuleContext(0, All_simple_opContext);
  }
  public OPERATOR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OPERATOR, 0);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOT, 0);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_all_op_ref;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterAll_op_ref) {
      listener.enterAll_op_ref(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitAll_op_ref) {
      listener.exitAll_op_ref(this);
    }
  }
}

export class Datetime_overlapsContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode[];
  public LEFT_PAREN(i: number): TerminalNode;
  public LEFT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.LEFT_PAREN);
    } else {
      return this.getToken(PostgresParser.LEFT_PAREN, i);
    }
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  public RIGHT_PAREN(): TerminalNode[];
  public RIGHT_PAREN(i: number): TerminalNode;
  public RIGHT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.RIGHT_PAREN);
    } else {
      return this.getToken(PostgresParser.RIGHT_PAREN, i);
    }
  }
  public OVERLAPS(): TerminalNode {
    return this.getToken(PostgresParser.OVERLAPS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_datetime_overlaps;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterDatetime_overlaps) {
      listener.enterDatetime_overlaps(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitDatetime_overlaps) {
      listener.exitDatetime_overlaps(this);
    }
  }
}

export class Value_expression_primaryContext extends ParserRuleContext {
  public unsigned_value_specification(): Unsigned_value_specificationContext | undefined {
    return this.tryGetRuleContext(0, Unsigned_value_specificationContext);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public select_stmt_no_parens(): Select_stmt_no_parensContext | undefined {
    return this.tryGetRuleContext(0, Select_stmt_no_parensContext);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public indirection_list(): Indirection_listContext | undefined {
    return this.tryGetRuleContext(0, Indirection_listContext);
  }
  public case_expression(): Case_expressionContext | undefined {
    return this.tryGetRuleContext(0, Case_expressionContext);
  }
  public NULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NULL, 0);
  }
  public MULTIPLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MULTIPLY, 0);
  }
  public comparison_mod(): Comparison_modContext | undefined {
    return this.tryGetRuleContext(0, Comparison_modContext);
  }
  public EXISTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXISTS, 0);
  }
  public table_subquery(): Table_subqueryContext | undefined {
    return this.tryGetRuleContext(0, Table_subqueryContext);
  }
  public function_call(): Function_callContext | undefined {
    return this.tryGetRuleContext(0, Function_callContext);
  }
  public indirection_var(): Indirection_varContext | undefined {
    return this.tryGetRuleContext(0, Indirection_varContext);
  }
  public array_expression(): Array_expressionContext | undefined {
    return this.tryGetRuleContext(0, Array_expressionContext);
  }
  public type_coercion(): Type_coercionContext | undefined {
    return this.tryGetRuleContext(0, Type_coercionContext);
  }
  public datetime_overlaps(): Datetime_overlapsContext | undefined {
    return this.tryGetRuleContext(0, Datetime_overlapsContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_value_expression_primary;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterValue_expression_primary) {
      listener.enterValue_expression_primary(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitValue_expression_primary) {
      listener.exitValue_expression_primary(this);
    }
  }
}

export class Unsigned_value_specificationContext extends ParserRuleContext {
  public unsigned_numeric_literal(): Unsigned_numeric_literalContext | undefined {
    return this.tryGetRuleContext(0, Unsigned_numeric_literalContext);
  }
  public character_string(): Character_stringContext | undefined {
    return this.tryGetRuleContext(0, Character_stringContext);
  }
  public truth_value(): Truth_valueContext | undefined {
    return this.tryGetRuleContext(0, Truth_valueContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_unsigned_value_specification;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterUnsigned_value_specification) {
      listener.enterUnsigned_value_specification(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitUnsigned_value_specification) {
      listener.exitUnsigned_value_specification(this);
    }
  }
}

export class Unsigned_numeric_literalContext extends ParserRuleContext {
  public NUMBER_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NUMBER_LITERAL, 0);
  }
  public REAL_NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REAL_NUMBER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_unsigned_numeric_literal;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterUnsigned_numeric_literal) {
      listener.enterUnsigned_numeric_literal(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitUnsigned_numeric_literal) {
      listener.exitUnsigned_numeric_literal(this);
    }
  }
}

export class Truth_valueContext extends ParserRuleContext {
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRUE, 0);
  }
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FALSE, 0);
  }
  public ON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ON, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_truth_value;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterTruth_value) {
      listener.enterTruth_value(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitTruth_value) {
      listener.exitTruth_value(this);
    }
  }
}

export class Case_expressionContext extends ParserRuleContext {
  public _vex!: VexContext;
  public _r: VexContext[] = [];
  public CASE(): TerminalNode {
    return this.getToken(PostgresParser.CASE, 0);
  }
  public END(): TerminalNode {
    return this.getToken(PostgresParser.END, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public WHEN(): TerminalNode[];
  public WHEN(i: number): TerminalNode;
  public WHEN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.WHEN);
    } else {
      return this.getToken(PostgresParser.WHEN, i);
    }
  }
  public THEN(): TerminalNode[];
  public THEN(i: number): TerminalNode;
  public THEN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.THEN);
    } else {
      return this.getToken(PostgresParser.THEN, i);
    }
  }
  public ELSE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ELSE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_case_expression;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterCase_expression) {
      listener.enterCase_expression(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitCase_expression) {
      listener.exitCase_expression(this);
    }
  }
}

export class Cast_specificationContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public vex(): VexContext {
    return this.getRuleContext(0, VexContext);
  }
  public AS(): TerminalNode {
    return this.getToken(PostgresParser.AS, 0);
  }
  public data_type(): Data_typeContext {
    return this.getRuleContext(0, Data_typeContext);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public CAST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CAST, 0);
  }
  public TREAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TREAT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_cast_specification;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterCast_specification) {
      listener.enterCast_specification(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitCast_specification) {
      listener.exitCast_specification(this);
    }
  }
}

export class Function_argsContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public vex_or_named_notation(): Vex_or_named_notationContext[];
  public vex_or_named_notation(i: number): Vex_or_named_notationContext;
  public vex_or_named_notation(
    i?: number
  ): Vex_or_named_notationContext | Vex_or_named_notationContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Vex_or_named_notationContext);
    } else {
      return this.getRuleContext(i, Vex_or_named_notationContext);
    }
  }
  public set_qualifier(): Set_qualifierContext | undefined {
    return this.tryGetRuleContext(0, Set_qualifierContext);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  public orderby_clause(): Orderby_clauseContext | undefined {
    return this.tryGetRuleContext(0, Orderby_clauseContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_args;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_args) {
      listener.enterFunction_args(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_args) {
      listener.exitFunction_args(this);
    }
  }
}

export class Function_bodyContext extends ParserRuleContext {
  public function_args(): Function_argsContext {
    return this.getRuleContext(0, Function_argsContext);
  }
  public WITHIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WITHIN, 0);
  }
  public GROUP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUP, 0);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public orderby_clause(): Orderby_clauseContext | undefined {
    return this.tryGetRuleContext(0, Orderby_clauseContext);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public filter_clause(): Filter_clauseContext | undefined {
    return this.tryGetRuleContext(0, Filter_clauseContext);
  }
  public OVER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OVER, 0);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public window_definition(): Window_definitionContext | undefined {
    return this.tryGetRuleContext(0, Window_definitionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_body;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_body) {
      listener.enterFunction_body(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_body) {
      listener.exitFunction_body(this);
    }
  }
}

export class Function_callContext extends ParserRuleContext {
  public function_names(): Function_namesContext | undefined {
    return this.tryGetRuleContext(0, Function_namesContext);
  }
  public function_body(): Function_bodyContext | undefined {
    return this.tryGetRuleContext(0, Function_bodyContext);
  }
  public function_custom(): Function_customContext | undefined {
    return this.tryGetRuleContext(0, Function_customContext);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public ROW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROW, 0);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_call;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_call) {
      listener.enterFunction_call(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_call) {
      listener.exitFunction_call(this);
    }
  }
}

export class Vex_or_named_notationContext extends ParserRuleContext {
  public _argname!: IdentifierContext;
  public vex(): VexContext {
    return this.getRuleContext(0, VexContext);
  }
  public VARIADIC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VARIADIC, 0);
  }
  public pointer(): PointerContext | undefined {
    return this.tryGetRuleContext(0, PointerContext);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_vex_or_named_notation;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterVex_or_named_notation) {
      listener.enterVex_or_named_notation(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitVex_or_named_notation) {
      listener.exitVex_or_named_notation(this);
    }
  }
}

export class PointerContext extends ParserRuleContext {
  public EQUAL_GTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EQUAL_GTH, 0);
  }
  public COLON_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COLON_EQUAL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_pointer;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterPointer) {
      listener.enterPointer(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitPointer) {
      listener.exitPointer(this);
    }
  }
}

export class Comparison_modContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public ALL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ALL, 0);
  }
  public ANY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ANY, 0);
  }
  public SOME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SOME, 0);
  }
  public vex(): VexContext | undefined {
    return this.tryGetRuleContext(0, VexContext);
  }
  public select_stmt_no_parens(): Select_stmt_no_parensContext | undefined {
    return this.tryGetRuleContext(0, Select_stmt_no_parensContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_comparison_mod;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterComparison_mod) {
      listener.enterComparison_mod(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitComparison_mod) {
      listener.exitComparison_mod(this);
    }
  }
}

export class Filter_clauseContext extends ParserRuleContext {
  public FILTER(): TerminalNode {
    return this.getToken(PostgresParser.FILTER, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public WHERE(): TerminalNode {
    return this.getToken(PostgresParser.WHERE, 0);
  }
  public vex(): VexContext {
    return this.getRuleContext(0, VexContext);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_filter_clause;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFilter_clause) {
      listener.enterFilter_clause(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFilter_clause) {
      listener.exitFilter_clause(this);
    }
  }
}

export class Window_definitionContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public partition_by_columns(): Partition_by_columnsContext | undefined {
    return this.tryGetRuleContext(0, Partition_by_columnsContext);
  }
  public orderby_clause(): Orderby_clauseContext | undefined {
    return this.tryGetRuleContext(0, Orderby_clauseContext);
  }
  public frame_clause(): Frame_clauseContext | undefined {
    return this.tryGetRuleContext(0, Frame_clauseContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_window_definition;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterWindow_definition) {
      listener.enterWindow_definition(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitWindow_definition) {
      listener.exitWindow_definition(this);
    }
  }
}

export class Frame_clauseContext extends ParserRuleContext {
  public RANGE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RANGE, 0);
  }
  public ROWS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROWS, 0);
  }
  public GROUPS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUPS, 0);
  }
  public frame_bound(): Frame_boundContext[];
  public frame_bound(i: number): Frame_boundContext;
  public frame_bound(i?: number): Frame_boundContext | Frame_boundContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Frame_boundContext);
    } else {
      return this.getRuleContext(i, Frame_boundContext);
    }
  }
  public BETWEEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BETWEEN, 0);
  }
  public AND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AND, 0);
  }
  public EXCLUDE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXCLUDE, 0);
  }
  public CURRENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT, 0);
  }
  public ROW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROW, 0);
  }
  public GROUP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUP, 0);
  }
  public TIES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TIES, 0);
  }
  public NO(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NO, 0);
  }
  public OTHERS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OTHERS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_frame_clause;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFrame_clause) {
      listener.enterFrame_clause(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFrame_clause) {
      listener.exitFrame_clause(this);
    }
  }
}

export class Frame_boundContext extends ParserRuleContext {
  public vex(): VexContext | undefined {
    return this.tryGetRuleContext(0, VexContext);
  }
  public PRECEDING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PRECEDING, 0);
  }
  public FOLLOWING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FOLLOWING, 0);
  }
  public CURRENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT, 0);
  }
  public ROW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROW, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_frame_bound;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFrame_bound) {
      listener.enterFrame_bound(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFrame_bound) {
      listener.exitFrame_bound(this);
    }
  }
}

export class Array_expressionContext extends ParserRuleContext {
  public ARRAY(): TerminalNode {
    return this.getToken(PostgresParser.ARRAY, 0);
  }
  public array_elements(): Array_elementsContext | undefined {
    return this.tryGetRuleContext(0, Array_elementsContext);
  }
  public table_subquery(): Table_subqueryContext | undefined {
    return this.tryGetRuleContext(0, Table_subqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_array_expression;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterArray_expression) {
      listener.enterArray_expression(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitArray_expression) {
      listener.exitArray_expression(this);
    }
  }
}

export class Array_elementsContext extends ParserRuleContext {
  public LEFT_BRACKET(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_BRACKET, 0);
  }
  public RIGHT_BRACKET(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_BRACKET, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public array_elements(): Array_elementsContext[];
  public array_elements(i: number): Array_elementsContext;
  public array_elements(i?: number): Array_elementsContext | Array_elementsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Array_elementsContext);
    } else {
      return this.getRuleContext(i, Array_elementsContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_array_elements;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterArray_elements) {
      listener.enterArray_elements(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitArray_elements) {
      listener.exitArray_elements(this);
    }
  }
}

export class Type_coercionContext extends ParserRuleContext {
  public data_type(): Data_typeContext | undefined {
    return this.tryGetRuleContext(0, Data_typeContext);
  }
  public character_string(): Character_stringContext {
    return this.getRuleContext(0, Character_stringContext);
  }
  public INTERVAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INTERVAL, 0);
  }
  public interval_field(): Interval_fieldContext | undefined {
    return this.tryGetRuleContext(0, Interval_fieldContext);
  }
  public type_length(): Type_lengthContext | undefined {
    return this.tryGetRuleContext(0, Type_lengthContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_type_coercion;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterType_coercion) {
      listener.enterType_coercion(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitType_coercion) {
      listener.exitType_coercion(this);
    }
  }
}

export class Schema_qualified_nameContext extends ParserRuleContext {
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public DOT(): TerminalNode[];
  public DOT(i: number): TerminalNode;
  public DOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.DOT);
    } else {
      return this.getToken(PostgresParser.DOT, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_schema_qualified_name;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSchema_qualified_name) {
      listener.enterSchema_qualified_name(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSchema_qualified_name) {
      listener.exitSchema_qualified_name(this);
    }
  }
}

export class Set_qualifierContext extends ParserRuleContext {
  public DISTINCT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DISTINCT, 0);
  }
  public ALL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ALL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_set_qualifier;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSet_qualifier) {
      listener.enterSet_qualifier(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSet_qualifier) {
      listener.exitSet_qualifier(this);
    }
  }
}

export class Table_subqueryContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public select_stmt(): Select_stmtContext {
    return this.getRuleContext(0, Select_stmtContext);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_table_subquery;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterTable_subquery) {
      listener.enterTable_subquery(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitTable_subquery) {
      listener.exitTable_subquery(this);
    }
  }
}

export class Select_stmtContext extends ParserRuleContext {
  public select_ops(): Select_opsContext {
    return this.getRuleContext(0, Select_opsContext);
  }
  public with_clause(): With_clauseContext | undefined {
    return this.tryGetRuleContext(0, With_clauseContext);
  }
  public after_ops(): After_opsContext[];
  public after_ops(i: number): After_opsContext;
  public after_ops(i?: number): After_opsContext | After_opsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(After_opsContext);
    } else {
      return this.getRuleContext(i, After_opsContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_select_stmt;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSelect_stmt) {
      listener.enterSelect_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSelect_stmt) {
      listener.exitSelect_stmt(this);
    }
  }
}

export class After_opsContext extends ParserRuleContext {
  public orderby_clause(): Orderby_clauseContext | undefined {
    return this.tryGetRuleContext(0, Orderby_clauseContext);
  }
  public LIMIT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LIMIT, 0);
  }
  public vex(): VexContext | undefined {
    return this.tryGetRuleContext(0, VexContext);
  }
  public ALL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ALL, 0);
  }
  public OFFSET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OFFSET, 0);
  }
  public ROW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROW, 0);
  }
  public ROWS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROWS, 0);
  }
  public FETCH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FETCH, 0);
  }
  public FIRST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FIRST, 0);
  }
  public NEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NEXT, 0);
  }
  public ONLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ONLY, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_after_ops;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterAfter_ops) {
      listener.enterAfter_ops(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitAfter_ops) {
      listener.exitAfter_ops(this);
    }
  }
}

export class Select_stmt_no_parensContext extends ParserRuleContext {
  public select_ops_no_parens(): Select_ops_no_parensContext {
    return this.getRuleContext(0, Select_ops_no_parensContext);
  }
  public with_clause(): With_clauseContext | undefined {
    return this.tryGetRuleContext(0, With_clauseContext);
  }
  public after_ops(): After_opsContext[];
  public after_ops(i: number): After_opsContext;
  public after_ops(i?: number): After_opsContext | After_opsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(After_opsContext);
    } else {
      return this.getRuleContext(i, After_opsContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_select_stmt_no_parens;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSelect_stmt_no_parens) {
      listener.enterSelect_stmt_no_parens(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSelect_stmt_no_parens) {
      listener.exitSelect_stmt_no_parens(this);
    }
  }
}

export class With_clauseContext extends ParserRuleContext {
  public WITH(): TerminalNode {
    return this.getToken(PostgresParser.WITH, 0);
  }
  public with_query(): With_queryContext[];
  public with_query(i: number): With_queryContext;
  public with_query(i?: number): With_queryContext | With_queryContext[] {
    if (i === undefined) {
      return this.getRuleContexts(With_queryContext);
    } else {
      return this.getRuleContext(i, With_queryContext);
    }
  }
  public RECURSIVE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RECURSIVE, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_with_clause;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterWith_clause) {
      listener.enterWith_clause(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitWith_clause) {
      listener.exitWith_clause(this);
    }
  }
}

export class With_queryContext extends ParserRuleContext {
  public _query_name!: IdentifierContext;
  public _identifier!: IdentifierContext;
  public _column_name: IdentifierContext[] = [];
  public AS(): TerminalNode {
    return this.getToken(PostgresParser.AS, 0);
  }
  public LEFT_PAREN(): TerminalNode[];
  public LEFT_PAREN(i: number): TerminalNode;
  public LEFT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.LEFT_PAREN);
    } else {
      return this.getToken(PostgresParser.LEFT_PAREN, i);
    }
  }
  public select_stmt(): Select_stmtContext {
    return this.getRuleContext(0, Select_stmtContext);
  }
  public RIGHT_PAREN(): TerminalNode[];
  public RIGHT_PAREN(i: number): TerminalNode;
  public RIGHT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.RIGHT_PAREN);
    } else {
      return this.getToken(PostgresParser.RIGHT_PAREN, i);
    }
  }
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_with_query;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterWith_query) {
      listener.enterWith_query(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitWith_query) {
      listener.exitWith_query(this);
    }
  }
}

export class Select_opsContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public select_stmt(): Select_stmtContext | undefined {
    return this.tryGetRuleContext(0, Select_stmtContext);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public select_ops(): Select_opsContext[];
  public select_ops(i: number): Select_opsContext;
  public select_ops(i?: number): Select_opsContext | Select_opsContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Select_opsContext);
    } else {
      return this.getRuleContext(i, Select_opsContext);
    }
  }
  public INTERSECT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INTERSECT, 0);
  }
  public UNION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNION, 0);
  }
  public EXCEPT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXCEPT, 0);
  }
  public set_qualifier(): Set_qualifierContext | undefined {
    return this.tryGetRuleContext(0, Set_qualifierContext);
  }
  public select_primary(): Select_primaryContext | undefined {
    return this.tryGetRuleContext(0, Select_primaryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_select_ops;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSelect_ops) {
      listener.enterSelect_ops(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSelect_ops) {
      listener.exitSelect_ops(this);
    }
  }
}

export class Select_ops_no_parensContext extends ParserRuleContext {
  public select_ops(): Select_opsContext | undefined {
    return this.tryGetRuleContext(0, Select_opsContext);
  }
  public INTERSECT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INTERSECT, 0);
  }
  public UNION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNION, 0);
  }
  public EXCEPT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXCEPT, 0);
  }
  public select_primary(): Select_primaryContext | undefined {
    return this.tryGetRuleContext(0, Select_primaryContext);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public select_stmt(): Select_stmtContext | undefined {
    return this.tryGetRuleContext(0, Select_stmtContext);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public set_qualifier(): Set_qualifierContext | undefined {
    return this.tryGetRuleContext(0, Set_qualifierContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_select_ops_no_parens;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSelect_ops_no_parens) {
      listener.enterSelect_ops_no_parens(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSelect_ops_no_parens) {
      listener.exitSelect_ops_no_parens(this);
    }
  }
}

export class Select_primaryContext extends ParserRuleContext {
  public SELECT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SELECT, 0);
  }
  public set_qualifier(): Set_qualifierContext | undefined {
    return this.tryGetRuleContext(0, Set_qualifierContext);
  }
  public select_list(): Select_listContext | undefined {
    return this.tryGetRuleContext(0, Select_listContext);
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FROM, 0);
  }
  public from_item(): From_itemContext[];
  public from_item(i: number): From_itemContext;
  public from_item(i?: number): From_itemContext | From_itemContext[] {
    if (i === undefined) {
      return this.getRuleContexts(From_itemContext);
    } else {
      return this.getRuleContext(i, From_itemContext);
    }
  }
  public WHERE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WHERE, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public groupby_clause(): Groupby_clauseContext | undefined {
    return this.tryGetRuleContext(0, Groupby_clauseContext);
  }
  public HAVING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.HAVING, 0);
  }
  public WINDOW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WINDOW, 0);
  }
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public AS(): TerminalNode[];
  public AS(i: number): TerminalNode;
  public AS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.AS);
    } else {
      return this.getToken(PostgresParser.AS, i);
    }
  }
  public window_definition(): Window_definitionContext[];
  public window_definition(i: number): Window_definitionContext;
  public window_definition(i?: number): Window_definitionContext | Window_definitionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Window_definitionContext);
    } else {
      return this.getRuleContext(i, Window_definitionContext);
    }
  }
  public ON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ON, 0);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  public TABLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TABLE, 0);
  }
  public schema_qualified_name(): Schema_qualified_nameContext | undefined {
    return this.tryGetRuleContext(0, Schema_qualified_nameContext);
  }
  public ONLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ONLY, 0);
  }
  public MULTIPLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MULTIPLY, 0);
  }
  public values_stmt(): Values_stmtContext | undefined {
    return this.tryGetRuleContext(0, Values_stmtContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_select_primary;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSelect_primary) {
      listener.enterSelect_primary(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSelect_primary) {
      listener.exitSelect_primary(this);
    }
  }
}

export class Select_listContext extends ParserRuleContext {
  public select_sublist(): Select_sublistContext[];
  public select_sublist(i: number): Select_sublistContext;
  public select_sublist(i?: number): Select_sublistContext | Select_sublistContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Select_sublistContext);
    } else {
      return this.getRuleContext(i, Select_sublistContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_select_list;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSelect_list) {
      listener.enterSelect_list(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSelect_list) {
      listener.exitSelect_list(this);
    }
  }
}

export class Select_sublistContext extends ParserRuleContext {
  public vex(): VexContext {
    return this.getRuleContext(0, VexContext);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AS, 0);
  }
  public col_label(): Col_labelContext | undefined {
    return this.tryGetRuleContext(0, Col_labelContext);
  }
  public id_token(): Id_tokenContext | undefined {
    return this.tryGetRuleContext(0, Id_tokenContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_select_sublist;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSelect_sublist) {
      listener.enterSelect_sublist(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSelect_sublist) {
      listener.exitSelect_sublist(this);
    }
  }
}

export class From_itemContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public from_item(): From_itemContext[];
  public from_item(i: number): From_itemContext;
  public from_item(i?: number): From_itemContext | From_itemContext[] {
    if (i === undefined) {
      return this.getRuleContexts(From_itemContext);
    } else {
      return this.getRuleContext(i, From_itemContext);
    }
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public alias_clause(): Alias_clauseContext | undefined {
    return this.tryGetRuleContext(0, Alias_clauseContext);
  }
  public CROSS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CROSS, 0);
  }
  public JOIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JOIN, 0);
  }
  public ON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ON, 0);
  }
  public vex(): VexContext | undefined {
    return this.tryGetRuleContext(0, VexContext);
  }
  public INNER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INNER, 0);
  }
  public LEFT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT, 0);
  }
  public RIGHT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT, 0);
  }
  public FULL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FULL, 0);
  }
  public OUTER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OUTER, 0);
  }
  public USING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.USING, 0);
  }
  public names_in_parens(): Names_in_parensContext | undefined {
    return this.tryGetRuleContext(0, Names_in_parensContext);
  }
  public NATURAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NATURAL, 0);
  }
  public from_primary(): From_primaryContext | undefined {
    return this.tryGetRuleContext(0, From_primaryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_from_item;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFrom_item) {
      listener.enterFrom_item(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFrom_item) {
      listener.exitFrom_item(this);
    }
  }
}

export class From_primaryContext extends ParserRuleContext {
  public _method!: IdentifierContext;
  public _alias!: IdentifierContext;
  public _identifier!: IdentifierContext;
  public _column_alias: IdentifierContext[] = [];
  public schema_qualified_name(): Schema_qualified_nameContext | undefined {
    return this.tryGetRuleContext(0, Schema_qualified_nameContext);
  }
  public ONLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ONLY, 0);
  }
  public MULTIPLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MULTIPLY, 0);
  }
  public alias_clause(): Alias_clauseContext | undefined {
    return this.tryGetRuleContext(0, Alias_clauseContext);
  }
  public TABLESAMPLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TABLESAMPLE, 0);
  }
  public LEFT_PAREN(): TerminalNode[];
  public LEFT_PAREN(i: number): TerminalNode;
  public LEFT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.LEFT_PAREN);
    } else {
      return this.getToken(PostgresParser.LEFT_PAREN, i);
    }
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public RIGHT_PAREN(): TerminalNode[];
  public RIGHT_PAREN(i: number): TerminalNode;
  public RIGHT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.RIGHT_PAREN);
    } else {
      return this.getToken(PostgresParser.RIGHT_PAREN, i);
    }
  }
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  public REPEATABLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REPEATABLE, 0);
  }
  public table_subquery(): Table_subqueryContext | undefined {
    return this.tryGetRuleContext(0, Table_subqueryContext);
  }
  public LATERAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LATERAL, 0);
  }
  public function_call(): Function_callContext[];
  public function_call(i: number): Function_callContext;
  public function_call(i?: number): Function_callContext | Function_callContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Function_callContext);
    } else {
      return this.getRuleContext(i, Function_callContext);
    }
  }
  public WITH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WITH, 0);
  }
  public ORDINALITY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ORDINALITY, 0);
  }
  public AS(): TerminalNode[];
  public AS(i: number): TerminalNode;
  public AS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.AS);
    } else {
      return this.getToken(PostgresParser.AS, i);
    }
  }
  public from_function_column_def(): From_function_column_defContext[];
  public from_function_column_def(i: number): From_function_column_defContext;
  public from_function_column_def(
    i?: number
  ): From_function_column_defContext | From_function_column_defContext[] {
    if (i === undefined) {
      return this.getRuleContexts(From_function_column_defContext);
    } else {
      return this.getRuleContext(i, From_function_column_defContext);
    }
  }
  public ROWS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROWS, 0);
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FROM, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_from_primary;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFrom_primary) {
      listener.enterFrom_primary(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFrom_primary) {
      listener.exitFrom_primary(this);
    }
  }
}

export class Alias_clauseContext extends ParserRuleContext {
  public _alias!: IdentifierContext;
  public _identifier!: IdentifierContext;
  public _column_alias: IdentifierContext[] = [];
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AS, 0);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_alias_clause;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterAlias_clause) {
      listener.enterAlias_clause(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitAlias_clause) {
      listener.exitAlias_clause(this);
    }
  }
}

export class From_function_column_defContext extends ParserRuleContext {
  public _identifier!: IdentifierContext;
  public _column_alias: IdentifierContext[] = [];
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public data_type(): Data_typeContext[];
  public data_type(i: number): Data_typeContext;
  public data_type(i?: number): Data_typeContext | Data_typeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Data_typeContext);
    } else {
      return this.getRuleContext(i, Data_typeContext);
    }
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_from_function_column_def;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFrom_function_column_def) {
      listener.enterFrom_function_column_def(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFrom_function_column_def) {
      listener.exitFrom_function_column_def(this);
    }
  }
}

export class Groupby_clauseContext extends ParserRuleContext {
  public GROUP(): TerminalNode {
    return this.getToken(PostgresParser.GROUP, 0);
  }
  public BY(): TerminalNode {
    return this.getToken(PostgresParser.BY, 0);
  }
  public grouping_element_list(): Grouping_element_listContext {
    return this.getRuleContext(0, Grouping_element_listContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_groupby_clause;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterGroupby_clause) {
      listener.enterGroupby_clause(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitGroupby_clause) {
      listener.exitGroupby_clause(this);
    }
  }
}

export class Grouping_element_listContext extends ParserRuleContext {
  public grouping_element(): Grouping_elementContext[];
  public grouping_element(i: number): Grouping_elementContext;
  public grouping_element(i?: number): Grouping_elementContext | Grouping_elementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Grouping_elementContext);
    } else {
      return this.getRuleContext(i, Grouping_elementContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_grouping_element_list;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterGrouping_element_list) {
      listener.enterGrouping_element_list(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitGrouping_element_list) {
      listener.exitGrouping_element_list(this);
    }
  }
}

export class Grouping_elementContext extends ParserRuleContext {
  public vex(): VexContext | undefined {
    return this.tryGetRuleContext(0, VexContext);
  }
  public LEFT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public grouping_element_list(): Grouping_element_listContext | undefined {
    return this.tryGetRuleContext(0, Grouping_element_listContext);
  }
  public ROLLUP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROLLUP, 0);
  }
  public CUBE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CUBE, 0);
  }
  public GROUPING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUPING, 0);
  }
  public SETS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SETS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_grouping_element;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterGrouping_element) {
      listener.enterGrouping_element(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitGrouping_element) {
      listener.exitGrouping_element(this);
    }
  }
}

export class Values_stmtContext extends ParserRuleContext {
  public VALUES(): TerminalNode {
    return this.getToken(PostgresParser.VALUES, 0);
  }
  public values_values(): Values_valuesContext[];
  public values_values(i: number): Values_valuesContext;
  public values_values(i?: number): Values_valuesContext | Values_valuesContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Values_valuesContext);
    } else {
      return this.getRuleContext(i, Values_valuesContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_values_stmt;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterValues_stmt) {
      listener.enterValues_stmt(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitValues_stmt) {
      listener.exitValues_stmt(this);
    }
  }
}

export class Values_valuesContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public DEFAULT(): TerminalNode[];
  public DEFAULT(i: number): TerminalNode;
  public DEFAULT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.DEFAULT);
    } else {
      return this.getToken(PostgresParser.DEFAULT, i);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_values_values;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterValues_values) {
      listener.enterValues_values(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitValues_values) {
      listener.exitValues_values(this);
    }
  }
}

export class Orderby_clauseContext extends ParserRuleContext {
  public ORDER(): TerminalNode {
    return this.getToken(PostgresParser.ORDER, 0);
  }
  public BY(): TerminalNode {
    return this.getToken(PostgresParser.BY, 0);
  }
  public sort_specifier_list(): Sort_specifier_listContext {
    return this.getRuleContext(0, Sort_specifier_listContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_orderby_clause;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterOrderby_clause) {
      listener.enterOrderby_clause(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitOrderby_clause) {
      listener.exitOrderby_clause(this);
    }
  }
}

export class Sort_specifier_listContext extends ParserRuleContext {
  public sort_specifier(): Sort_specifierContext[];
  public sort_specifier(i: number): Sort_specifierContext;
  public sort_specifier(i?: number): Sort_specifierContext | Sort_specifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Sort_specifierContext);
    } else {
      return this.getRuleContext(i, Sort_specifierContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_sort_specifier_list;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSort_specifier_list) {
      listener.enterSort_specifier_list(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSort_specifier_list) {
      listener.exitSort_specifier_list(this);
    }
  }
}

export class Sort_specifierContext extends ParserRuleContext {
  public _key!: VexContext;
  public _opclass!: Schema_qualified_nameContext;
  public _order!: Order_specificationContext;
  public _null_order!: Null_orderingContext;
  public vex(): VexContext {
    return this.getRuleContext(0, VexContext);
  }
  public schema_qualified_name(): Schema_qualified_nameContext | undefined {
    return this.tryGetRuleContext(0, Schema_qualified_nameContext);
  }
  public order_specification(): Order_specificationContext | undefined {
    return this.tryGetRuleContext(0, Order_specificationContext);
  }
  public null_ordering(): Null_orderingContext | undefined {
    return this.tryGetRuleContext(0, Null_orderingContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_sort_specifier;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterSort_specifier) {
      listener.enterSort_specifier(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitSort_specifier) {
      listener.exitSort_specifier(this);
    }
  }
}

export class Order_specificationContext extends ParserRuleContext {
  public ASC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ASC, 0);
  }
  public DESC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DESC, 0);
  }
  public USING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.USING, 0);
  }
  public all_op_ref(): All_op_refContext | undefined {
    return this.tryGetRuleContext(0, All_op_refContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_order_specification;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterOrder_specification) {
      listener.enterOrder_specification(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitOrder_specification) {
      listener.exitOrder_specification(this);
    }
  }
}

export class Null_orderingContext extends ParserRuleContext {
  public NULLS(): TerminalNode {
    return this.getToken(PostgresParser.NULLS, 0);
  }
  public FIRST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FIRST, 0);
  }
  public LAST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LAST, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_null_ordering;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterNull_ordering) {
      listener.enterNull_ordering(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitNull_ordering) {
      listener.exitNull_ordering(this);
    }
  }
}

export class Dollar_numberContext extends ParserRuleContext {
  public DOLLAR_NUMBER(): TerminalNode {
    return this.getToken(PostgresParser.DOLLAR_NUMBER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_dollar_number;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterDollar_number) {
      listener.enterDollar_number(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitDollar_number) {
      listener.exitDollar_number(this);
    }
  }
}

export class Names_in_parensContext extends ParserRuleContext {
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public names_references(): Names_referencesContext {
    return this.getRuleContext(0, Names_referencesContext);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_names_in_parens;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterNames_in_parens) {
      listener.enterNames_in_parens(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitNames_in_parens) {
      listener.exitNames_in_parens(this);
    }
  }
}

export class Names_referencesContext extends ParserRuleContext {
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_names_references;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterNames_references) {
      listener.enterNames_references(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitNames_references) {
      listener.exitNames_references(this);
    }
  }
}

export class Op_charsContext extends ParserRuleContext {
  public OP_CHARS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OP_CHARS, 0);
  }
  public LESS_LESS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LESS_LESS, 0);
  }
  public GREATER_GREATER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GREATER_GREATER, 0);
  }
  public HASH_SIGN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.HASH_SIGN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_op_chars;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterOp_chars) {
      listener.enterOp_chars(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitOp_chars) {
      listener.exitOp_chars(this);
    }
  }
}

export class Partition_by_columnsContext extends ParserRuleContext {
  public PARTITION(): TerminalNode {
    return this.getToken(PostgresParser.PARTITION, 0);
  }
  public BY(): TerminalNode {
    return this.getToken(PostgresParser.BY, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_partition_by_columns;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterPartition_by_columns) {
      listener.enterPartition_by_columns(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitPartition_by_columns) {
      listener.exitPartition_by_columns(this);
    }
  }
}

export class Collate_identifierContext extends ParserRuleContext {
  public _collation!: IdentifierContext;
  public COLLATE(): TerminalNode {
    return this.getToken(PostgresParser.COLLATE, 0);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_collate_identifier;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterCollate_identifier) {
      listener.enterCollate_identifier(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitCollate_identifier) {
      listener.exitCollate_identifier(this);
    }
  }
}

export class IndirectionContext extends ParserRuleContext {
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOT, 0);
  }
  public col_label(): Col_labelContext | undefined {
    return this.tryGetRuleContext(0, Col_labelContext);
  }
  public LEFT_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT_BRACKET, 0);
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public RIGHT_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT_BRACKET, 0);
  }
  public COLON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COLON, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_indirection;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterIndirection) {
      listener.enterIndirection(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitIndirection) {
      listener.exitIndirection(this);
    }
  }
}

export class Indirection_listContext extends ParserRuleContext {
  public indirection(): IndirectionContext[];
  public indirection(i: number): IndirectionContext;
  public indirection(i?: number): IndirectionContext | IndirectionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IndirectionContext);
    } else {
      return this.getRuleContext(i, IndirectionContext);
    }
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DOT, 0);
  }
  public MULTIPLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MULTIPLY, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_indirection_list;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterIndirection_list) {
      listener.enterIndirection_list(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitIndirection_list) {
      listener.exitIndirection_list(this);
    }
  }
}

export class Indirection_varContext extends ParserRuleContext {
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
  }
  public dollar_number(): Dollar_numberContext | undefined {
    return this.tryGetRuleContext(0, Dollar_numberContext);
  }
  public indirection_list(): Indirection_listContext | undefined {
    return this.tryGetRuleContext(0, Indirection_listContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_indirection_var;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterIndirection_var) {
      listener.enterIndirection_var(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitIndirection_var) {
      listener.exitIndirection_var(this);
    }
  }
}

export class All_simple_opContext extends ParserRuleContext {
  public op_chars(): Op_charsContext | undefined {
    return this.tryGetRuleContext(0, Op_charsContext);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EQUAL, 0);
  }
  public NOT_EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOT_EQUAL, 0);
  }
  public LTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LTH, 0);
  }
  public LEQ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEQ, 0);
  }
  public GTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GTH, 0);
  }
  public GEQ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GEQ, 0);
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PLUS, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MINUS, 0);
  }
  public MULTIPLY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MULTIPLY, 0);
  }
  public DIVIDE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DIVIDE, 0);
  }
  public MODULAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MODULAR, 0);
  }
  public EXP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXP, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_all_simple_op;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterAll_simple_op) {
      listener.enterAll_simple_op(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitAll_simple_op) {
      listener.exitAll_simple_op(this);
    }
  }
}

export class Character_stringContext extends ParserRuleContext {
  public BeginDollarStringConstant(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BeginDollarStringConstant, 0);
  }
  public EndDollarStringConstant(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EndDollarStringConstant, 0);
  }
  public Text_between_Dollar(): TerminalNode[];
  public Text_between_Dollar(i: number): TerminalNode;
  public Text_between_Dollar(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.Text_between_Dollar);
    } else {
      return this.getToken(PostgresParser.Text_between_Dollar, i);
    }
  }
  public Character_String_Literal(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.Character_String_Literal, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_character_string;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterCharacter_string) {
      listener.enterCharacter_string(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitCharacter_string) {
      listener.exitCharacter_string(this);
    }
  }
}

export class Boolean_valueContext extends ParserRuleContext {
  public TRUE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRUE, 0);
  }
  public FALSE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FALSE, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_boolean_value;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterBoolean_value) {
      listener.enterBoolean_value(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitBoolean_value) {
      listener.exitBoolean_value(this);
    }
  }
}

export class Function_namesContext extends ParserRuleContext {
  public POW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.POW, 0);
  }
  public DATE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DATE, 0);
  }
  public ARRAY_AGG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_AGG, 0);
  }
  public AVG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AVG, 0);
  }
  public BIT_AND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIT_AND, 0);
  }
  public BIT_OR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIT_OR, 0);
  }
  public BIT_XOR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIT_XOR, 0);
  }
  public BOOL_AND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BOOL_AND, 0);
  }
  public BOOL_OR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BOOL_OR, 0);
  }
  public COUNT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COUNT, 0);
  }
  public EVERY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EVERY, 0);
  }
  public JSON_AGG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_AGG, 0);
  }
  public JSON_OBJECT_AGG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_OBJECT_AGG, 0);
  }
  public MAX(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MAX, 0);
  }
  public MIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MIN, 0);
  }
  public RANGE_AGG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RANGE_AGG, 0);
  }
  public RANGE_INTERSECT_AGG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RANGE_INTERSECT_AGG, 0);
  }
  public STRING_AGG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STRING_AGG, 0);
  }
  public SUM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SUM, 0);
  }
  public XMLAGG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLAGG, 0);
  }
  public ARRAY_APPEND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_APPEND, 0);
  }
  public ARRAY_CAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_CAT, 0);
  }
  public ARRAY_DIMS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_DIMS, 0);
  }
  public ARRAY_FILL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_FILL, 0);
  }
  public ARRAY_LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_LENGTH, 0);
  }
  public ARRAY_LOWER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_LOWER, 0);
  }
  public ARRAY_NDIMS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_NDIMS, 0);
  }
  public ARRAY_POSITION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_POSITION, 0);
  }
  public ARRAY_PREPEND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_PREPEND, 0);
  }
  public ARRAY_REMOVE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_REMOVE, 0);
  }
  public ARRAY_REPLACE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_REPLACE, 0);
  }
  public ARRAY_TO_STRING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_TO_STRING, 0);
  }
  public ARRAY_UPPER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_UPPER, 0);
  }
  public CARDINALITY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CARDINALITY, 0);
  }
  public TRIM_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRIM_ARRAY, 0);
  }
  public UNNEST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNNEST, 0);
  }
  public CONVERT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CONVERT, 0);
  }
  public CONVERT_FROM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CONVERT_FROM, 0);
  }
  public CONVERT_TO(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CONVERT_TO, 0);
  }
  public ENCODE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ENCODE, 0);
  }
  public DECODE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DECODE, 0);
  }
  public BIT_COUNT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIT_COUNT, 0);
  }
  public BTRIM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BTRIM, 0);
  }
  public GET_BIT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GET_BIT, 0);
  }
  public GET_BYTE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GET_BYTE, 0);
  }
  public LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LENGTH, 0);
  }
  public LTRIM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LTRIM, 0);
  }
  public MD5(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MD5, 0);
  }
  public RTRIM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RTRIM, 0);
  }
  public SET_BIT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SET_BIT, 0);
  }
  public SET_BYTE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SET_BYTE, 0);
  }
  public SHA224(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SHA224, 0);
  }
  public SHA256(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SHA256, 0);
  }
  public SHA384(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SHA384, 0);
  }
  public SHA512(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SHA512, 0);
  }
  public SUBSTR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SUBSTR, 0);
  }
  public NUM_NONNULLS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NUM_NONNULLS, 0);
  }
  public NUM_NULLS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NUM_NULLS, 0);
  }
  public COALESCE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COALESCE, 0);
  }
  public NULLIF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NULLIF, 0);
  }
  public GREATEST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GREATEST, 0);
  }
  public LEAST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEAST, 0);
  }
  public AGE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AGE, 0);
  }
  public CLOCK_TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CLOCK_TIMESTAMP, 0);
  }
  public CURRENT_DATE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT_DATE, 0);
  }
  public CURRENT_TIME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT_TIME, 0);
  }
  public CURRENT_TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CURRENT_TIMESTAMP, 0);
  }
  public DATE_BIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DATE_BIN, 0);
  }
  public DATE_PART(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DATE_PART, 0);
  }
  public DATE_TRUNC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DATE_TRUNC, 0);
  }
  public EXTRACT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXTRACT, 0);
  }
  public ISFINITE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ISFINITE, 0);
  }
  public JUSTIFY_DAYS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JUSTIFY_DAYS, 0);
  }
  public JUSTIFY_HOURS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JUSTIFY_HOURS, 0);
  }
  public JUSTIFY_INTERVAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JUSTIFY_INTERVAL, 0);
  }
  public LOCALTIME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOCALTIME, 0);
  }
  public LOCALTIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOCALTIMESTAMP, 0);
  }
  public MAKE_DATE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MAKE_DATE, 0);
  }
  public MAKE_INTERVAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MAKE_INTERVAL, 0);
  }
  public MAKE_TIME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MAKE_TIME, 0);
  }
  public MAKE_TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MAKE_TIMESTAMP, 0);
  }
  public MAKE_TIMESTAMPTZ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MAKE_TIMESTAMPTZ, 0);
  }
  public NOW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NOW, 0);
  }
  public STATEMENT_TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STATEMENT_TIMESTAMP, 0);
  }
  public TIMEOFDAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TIMEOFDAY, 0);
  }
  public TRANSACTION_TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRANSACTION_TIMESTAMP, 0);
  }
  public ENUM_FIRST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ENUM_FIRST, 0);
  }
  public ENUM_LAST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ENUM_LAST, 0);
  }
  public ENUM_RANGE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ENUM_RANGE, 0);
  }
  public TO_CHAR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_CHAR, 0);
  }
  public TO_DATE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_DATE, 0);
  }
  public TO_NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_NUMBER, 0);
  }
  public TO_TIMESTAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_TIMESTAMP, 0);
  }
  public BOX(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BOX, 0);
  }
  public CIRCLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CIRCLE, 0);
  }
  public LINE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LINE, 0);
  }
  public LSEG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LSEG, 0);
  }
  public PATH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PATH, 0);
  }
  public POINT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.POINT, 0);
  }
  public POLYGON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.POLYGON, 0);
  }
  public AREA(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.AREA, 0);
  }
  public CENTER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CENTER, 0);
  }
  public DIAGONAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DIAGONAL, 0);
  }
  public DIAMETER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DIAMETER, 0);
  }
  public HEIGHT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.HEIGHT, 0);
  }
  public ISCLOSED(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ISCLOSED, 0);
  }
  public ISOPEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ISOPEN, 0);
  }
  public NPOINTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NPOINTS, 0);
  }
  public PCLOSE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PCLOSE, 0);
  }
  public POPEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.POPEN, 0);
  }
  public RADIUS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RADIUS, 0);
  }
  public SLOPE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SLOPE, 0);
  }
  public WIDTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WIDTH, 0);
  }
  public GROUPING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUPING, 0);
  }
  public SINH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SINH, 0);
  }
  public COSH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COSH, 0);
  }
  public TANH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TANH, 0);
  }
  public ASINH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ASINH, 0);
  }
  public ACOSH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ACOSH, 0);
  }
  public ATANH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ATANH, 0);
  }
  public ABBREV(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ABBREV, 0);
  }
  public BROADCAST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BROADCAST, 0);
  }
  public FAMILY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FAMILY, 0);
  }
  public HOST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.HOST, 0);
  }
  public HOSTMASK(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.HOSTMASK, 0);
  }
  public INET_MERGE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INET_MERGE, 0);
  }
  public INET_SAME_FAMILY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INET_SAME_FAMILY, 0);
  }
  public MASKLEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MASKLEN, 0);
  }
  public NETMASK(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NETMASK, 0);
  }
  public NETWORK(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NETWORK, 0);
  }
  public SET_MASKLEN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SET_MASKLEN, 0);
  }
  public TEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TEXT, 0);
  }
  public TRUNC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRUNC, 0);
  }
  public MACADDR8_SET7BIT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MACADDR8_SET7BIT, 0);
  }
  public JSON_ARRAY_ELEMENTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_ARRAY_ELEMENTS, 0);
  }
  public JSONB_ARRAY_ELEMENTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_ARRAY_ELEMENTS, 0);
  }
  public JSON_ARRAY_ELEMENTS_TEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_ARRAY_ELEMENTS_TEXT, 0);
  }
  public JSONB_ARRAY_ELEMENTS_TEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_ARRAY_ELEMENTS_TEXT, 0);
  }
  public JSON_ARRAY_LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_ARRAY_LENGTH, 0);
  }
  public JSONB_ARRAY_LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_ARRAY_LENGTH, 0);
  }
  public JSON_EACH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_EACH, 0);
  }
  public JSONB_EACH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_EACH, 0);
  }
  public JSON_EACH_TEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_EACH_TEXT, 0);
  }
  public JSONB_EACH_TEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_EACH_TEXT, 0);
  }
  public JSON_EXTRACT_PATH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_EXTRACT_PATH, 0);
  }
  public JSONB_EXTRACT_PATH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_EXTRACT_PATH, 0);
  }
  public JSON_EXTRACT_PATH_TEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_EXTRACT_PATH_TEXT, 0);
  }
  public JSONB_EXTRACT_PATH_TEXT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_EXTRACT_PATH_TEXT, 0);
  }
  public JSON_OBJECT_KEYS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_OBJECT_KEYS, 0);
  }
  public JSONB_OBJECT_KEYS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_OBJECT_KEYS, 0);
  }
  public JSON_POPULATE_RECORD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_POPULATE_RECORD, 0);
  }
  public JSONB_POPULATE_RECORD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_POPULATE_RECORD, 0);
  }
  public JSON_POPULATE_RECORDSET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_POPULATE_RECORDSET, 0);
  }
  public JSONB_POPULATE_RECORDSET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_POPULATE_RECORDSET, 0);
  }
  public JSON_TO_RECORD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_TO_RECORD, 0);
  }
  public JSONB_TO_RECORD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_TO_RECORD, 0);
  }
  public JSON_TO_RECORDSET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_TO_RECORDSET, 0);
  }
  public JSONB_TO_RECORDSET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_TO_RECORDSET, 0);
  }
  public JSON_STRIP_NULLS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_STRIP_NULLS, 0);
  }
  public JSONB_STRIP_NULLS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_STRIP_NULLS, 0);
  }
  public JSONB_SET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_SET, 0);
  }
  public JSONB_SET_LAX(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_SET_LAX, 0);
  }
  public JSONB_INSERT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_INSERT, 0);
  }
  public JSONB_PATH_EXISTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_EXISTS, 0);
  }
  public JSONB_PATH_MATCH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_MATCH, 0);
  }
  public JSONB_PATH_QUERY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_QUERY, 0);
  }
  public JSONB_PATH_QUERY_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_QUERY_ARRAY, 0);
  }
  public JSONB_PATH_QUERY_FIRST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_QUERY_FIRST, 0);
  }
  public JSONB_PATH_EXISTS_TZ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_EXISTS_TZ, 0);
  }
  public JSONB_PATH_MATCH_TZ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_MATCH_TZ, 0);
  }
  public JSONB_PATH_QUERY_TZ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_QUERY_TZ, 0);
  }
  public JSONB_PATH_QUERY_ARRAY_TZ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_QUERY_ARRAY_TZ, 0);
  }
  public JSONB_PATH_QUERY_FIRST_TZ(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PATH_QUERY_FIRST_TZ, 0);
  }
  public JSONB_PRETTY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_PRETTY, 0);
  }
  public JSON_TYPEOF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_TYPEOF, 0);
  }
  public JSONB_TYPEOF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_TYPEOF, 0);
  }
  public TO_JSON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_JSON, 0);
  }
  public TO_JSONB(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_JSONB, 0);
  }
  public ARRAY_TO_JSON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_TO_JSON, 0);
  }
  public ROW_TO_JSON(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROW_TO_JSON, 0);
  }
  public JSON_BUILD_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_BUILD_ARRAY, 0);
  }
  public JSONB_BUILD_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_BUILD_ARRAY, 0);
  }
  public JSON_BUILD_OBJECT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_BUILD_OBJECT, 0);
  }
  public JSON_OBJECT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_OBJECT, 0);
  }
  public JSONB_OBJECT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSONB_OBJECT, 0);
  }
  public ABS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ABS, 0);
  }
  public CBRT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CBRT, 0);
  }
  public CEIL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CEIL, 0);
  }
  public DEGREES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DEGREES, 0);
  }
  public DIV(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DIV, 0);
  }
  public EXP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.EXP, 0);
  }
  public FACTORIAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FACTORIAL, 0);
  }
  public FLOOR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FLOOR, 0);
  }
  public GCD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GCD, 0);
  }
  public LCM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LCM, 0);
  }
  public LN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LN, 0);
  }
  public LOG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOG, 0);
  }
  public LOG10(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOG10, 0);
  }
  public MIN_SCALE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MIN_SCALE, 0);
  }
  public MOD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MOD, 0);
  }
  public PI(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PI, 0);
  }
  public POWER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.POWER, 0);
  }
  public RADIANS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RADIANS, 0);
  }
  public ROUND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROUND, 0);
  }
  public SCALE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SCALE, 0);
  }
  public SIGN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SIGN, 0);
  }
  public SQRT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SQRT, 0);
  }
  public TRIM_SCALE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRIM_SCALE, 0);
  }
  public WIDTH_BUCKET(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WIDTH_BUCKET, 0);
  }
  public MODE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MODE, 0);
  }
  public PERCENTILE_CONT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PERCENTILE_CONT, 0);
  }
  public PERCENTILE_DISC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PERCENTILE_DISC, 0);
  }
  public RANDOM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RANDOM, 0);
  }
  public SETSEED(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SETSEED, 0);
  }
  public LOWER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOWER, 0);
  }
  public UPPER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UPPER, 0);
  }
  public ISEMPTY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ISEMPTY, 0);
  }
  public LOWER_INC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOWER_INC, 0);
  }
  public UPPER_INC(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UPPER_INC, 0);
  }
  public LOWER_INF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LOWER_INF, 0);
  }
  public UPPER_INF(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UPPER_INF, 0);
  }
  public RANGE_MERGE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RANGE_MERGE, 0);
  }
  public MULTIRANGE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.MULTIRANGE, 0);
  }
  public TS_DEBUG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_DEBUG, 0);
  }
  public TS_LEXIZE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_LEXIZE, 0);
  }
  public TS_PARSE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_PARSE, 0);
  }
  public TS_TOKEN_TYPE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_TOKEN_TYPE, 0);
  }
  public ARRAY_TO_TSVECTOR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ARRAY_TO_TSVECTOR, 0);
  }
  public GET_CURRENT_TS_CONFIG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GET_CURRENT_TS_CONFIG, 0);
  }
  public NUMNODE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NUMNODE, 0);
  }
  public PLAINTO_TSQUERY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PLAINTO_TSQUERY, 0);
  }
  public PHRASETO_TSQUERY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PHRASETO_TSQUERY, 0);
  }
  public WEBSEARCH_TO_TSQUERY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WEBSEARCH_TO_TSQUERY, 0);
  }
  public QUERYTREE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.QUERYTREE, 0);
  }
  public SETWEIGHT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SETWEIGHT, 0);
  }
  public STRIP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STRIP, 0);
  }
  public TO_TSQUERY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_TSQUERY, 0);
  }
  public TO_TSVECTOR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_TSVECTOR, 0);
  }
  public JSON_TO_TSVECTOR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.JSON_TO_TSVECTOR, 0);
  }
  public TS_DELETE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_DELETE, 0);
  }
  public TS_FILTER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_FILTER, 0);
  }
  public TS_HEADLINE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_HEADLINE, 0);
  }
  public TS_RANK(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_RANK, 0);
  }
  public TS_RANK_CD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_RANK_CD, 0);
  }
  public TS_REWRITE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TS_REWRITE, 0);
  }
  public TSQUERY_PHRASE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TSQUERY_PHRASE, 0);
  }
  public TSVECTOR_TO_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TSVECTOR_TO_ARRAY, 0);
  }
  public GENERATE_SERIES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GENERATE_SERIES, 0);
  }
  public GENERATE_SUBSCRIPTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GENERATE_SUBSCRIPTS, 0);
  }
  public CORR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CORR, 0);
  }
  public COVAR_POP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COVAR_POP, 0);
  }
  public COVAR_SAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COVAR_SAMP, 0);
  }
  public REGR_AVGX(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_AVGX, 0);
  }
  public REGR_AVGY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_AVGY, 0);
  }
  public REGR_COUNT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_COUNT, 0);
  }
  public REGR_INTERCEPT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_INTERCEPT, 0);
  }
  public REGR_R2(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_R2, 0);
  }
  public REGR_SLOPE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_SLOPE, 0);
  }
  public REGR_SXX(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_SXX, 0);
  }
  public REGR_SXY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_SXY, 0);
  }
  public REGR_SYY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGR_SYY, 0);
  }
  public STDDEV(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STDDEV, 0);
  }
  public STDDEV_POP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STDDEV_POP, 0);
  }
  public STDDEV_SAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STDDEV_SAMP, 0);
  }
  public VARIANCE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VARIANCE, 0);
  }
  public VAR_POP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VAR_POP, 0);
  }
  public VAR_SAMP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VAR_SAMP, 0);
  }
  public ASCII(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ASCII, 0);
  }
  public CHR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CHR, 0);
  }
  public CONCAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CONCAT, 0);
  }
  public CONCAT_WS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CONCAT_WS, 0);
  }
  public FORMAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FORMAT, 0);
  }
  public INITCAP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.INITCAP, 0);
  }
  public LEFT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEFT, 0);
  }
  public LPAD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LPAD, 0);
  }
  public PARSE_IDENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PARSE_IDENT, 0);
  }
  public QUOTE_IDENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.QUOTE_IDENT, 0);
  }
  public QUOTE_LITERAL(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.QUOTE_LITERAL, 0);
  }
  public QUOTE_NULLABLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.QUOTE_NULLABLE, 0);
  }
  public REGEXP_MATCH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGEXP_MATCH, 0);
  }
  public REGEXP_MATCHES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGEXP_MATCHES, 0);
  }
  public REGEXP_REPLACE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGEXP_REPLACE, 0);
  }
  public REGEXP_SPLIT_TO_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGEXP_SPLIT_TO_ARRAY, 0);
  }
  public REGEXP_SPLIT_TO_TABLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REGEXP_SPLIT_TO_TABLE, 0);
  }
  public REPEAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REPEAT, 0);
  }
  public REPLACE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REPLACE, 0);
  }
  public REVERSE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.REVERSE, 0);
  }
  public RIGHT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RIGHT, 0);
  }
  public RPAD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RPAD, 0);
  }
  public SPLIT_PART(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SPLIT_PART, 0);
  }
  public STRPOS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STRPOS, 0);
  }
  public STARTS_WITH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STARTS_WITH, 0);
  }
  public STRING_TO_ARRAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STRING_TO_ARRAY, 0);
  }
  public STRING_TO_TABLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STRING_TO_TABLE, 0);
  }
  public TO_ASCII(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_ASCII, 0);
  }
  public TO_HEX(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TO_HEX, 0);
  }
  public TRANSLATE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRANSLATE, 0);
  }
  public UNISTR(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.UNISTR, 0);
  }
  public BIT_LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.BIT_LENGTH, 0);
  }
  public CHAR_LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CHAR_LENGTH, 0);
  }
  public CHARACTER_LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CHARACTER_LENGTH, 0);
  }
  public NORMALIZE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NORMALIZE, 0);
  }
  public OCTET_LENGTH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OCTET_LENGTH, 0);
  }
  public OVERLAY(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.OVERLAY, 0);
  }
  public POSITION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.POSITION, 0);
  }
  public SUBSTRING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SUBSTRING, 0);
  }
  public TRIM(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TRIM, 0);
  }
  public ACOS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ACOS, 0);
  }
  public ACOSD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ACOSD, 0);
  }
  public ASIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ASIN, 0);
  }
  public ASIND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ASIND, 0);
  }
  public ATAN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ATAN, 0);
  }
  public ATAND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ATAND, 0);
  }
  public ATAN2(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ATAN2, 0);
  }
  public ATAN2D(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ATAN2D, 0);
  }
  public COS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COS, 0);
  }
  public COSD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COSD, 0);
  }
  public COT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COT, 0);
  }
  public COTD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COTD, 0);
  }
  public SIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SIN, 0);
  }
  public SIND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.SIND, 0);
  }
  public TAN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TAN, 0);
  }
  public TAND(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TAND, 0);
  }
  public GEN_RANDOM_UUID(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GEN_RANDOM_UUID, 0);
  }
  public ROW_NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROW_NUMBER, 0);
  }
  public RANK(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.RANK, 0);
  }
  public DENSE_RANK(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.DENSE_RANK, 0);
  }
  public PERCENT_RANK(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PERCENT_RANK, 0);
  }
  public CUME_DIST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.CUME_DIST, 0);
  }
  public NTILE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NTILE, 0);
  }
  public LAG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LAG, 0);
  }
  public LEAD(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LEAD, 0);
  }
  public FIRST_VALUE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.FIRST_VALUE, 0);
  }
  public LAST_VALUE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.LAST_VALUE, 0);
  }
  public NTH_VALUE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NTH_VALUE, 0);
  }
  public XMLCOMMENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLCOMMENT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_names;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_names) {
      listener.enterFunction_names(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_names) {
      listener.exitFunction_names(this);
    }
  }
}

export class Function_customContext extends ParserRuleContext {
  public _name!: IdentifierContext;
  public _attname!: IdentifierContext;
  public XMLCONCAT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLCONCAT, 0);
  }
  public LEFT_PAREN(): TerminalNode[];
  public LEFT_PAREN(i: number): TerminalNode;
  public LEFT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.LEFT_PAREN);
    } else {
      return this.getToken(PostgresParser.LEFT_PAREN, i);
    }
  }
  public vex(): VexContext[];
  public vex(i: number): VexContext;
  public vex(i?: number): VexContext | VexContext[] {
    if (i === undefined) {
      return this.getRuleContexts(VexContext);
    } else {
      return this.getRuleContext(i, VexContext);
    }
  }
  public RIGHT_PAREN(): TerminalNode[];
  public RIGHT_PAREN(i: number): TerminalNode;
  public RIGHT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.RIGHT_PAREN);
    } else {
      return this.getToken(PostgresParser.RIGHT_PAREN, i);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
    }
  }
  public XMLELEMENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLELEMENT, 0);
  }
  public NAME(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.NAME, 0);
  }
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
  }
  public XMLATTRIBUTES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLATTRIBUTES, 0);
  }
  public AS(): TerminalNode[];
  public AS(i: number): TerminalNode;
  public AS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.AS);
    } else {
      return this.getToken(PostgresParser.AS, i);
    }
  }
  public XMLFOREST(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLFOREST, 0);
  }
  public XMLPI(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLPI, 0);
  }
  public XMLROOT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLROOT, 0);
  }
  public VERSION(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.VERSION, 0);
  }
  public NO(): TerminalNode[];
  public NO(i: number): TerminalNode;
  public NO(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.NO);
    } else {
      return this.getToken(PostgresParser.NO, i);
    }
  }
  public VALUE(): TerminalNode[];
  public VALUE(i: number): TerminalNode;
  public VALUE(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.VALUE);
    } else {
      return this.getToken(PostgresParser.VALUE, i);
    }
  }
  public STANDALONE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.STANDALONE, 0);
  }
  public YES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.YES, 0);
  }
  public XMLAGG(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLAGG, 0);
  }
  public XMLEXISTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLEXISTS, 0);
  }
  public PASSING(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.PASSING, 0);
  }
  public BY(): TerminalNode[];
  public BY(i: number): TerminalNode;
  public BY(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.BY);
    } else {
      return this.getToken(PostgresParser.BY, i);
    }
  }
  public REF(): TerminalNode[];
  public REF(i: number): TerminalNode;
  public REF(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.REF);
    } else {
      return this.getToken(PostgresParser.REF, i);
    }
  }
  public XML_IS_WELL_FORMED(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XML_IS_WELL_FORMED, 0);
  }
  public XML_IS_WELL_FORMED_CONTENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XML_IS_WELL_FORMED_CONTENT, 0);
  }
  public XML_IS_WELL_FORMED_DOCUMENT(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XML_IS_WELL_FORMED_DOCUMENT, 0);
  }
  public XPATH(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XPATH, 0);
  }
  public ARRAY(): TerminalNode[];
  public ARRAY(i: number): TerminalNode;
  public ARRAY(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.ARRAY);
    } else {
      return this.getToken(PostgresParser.ARRAY, i);
    }
  }
  public LEFT_BRACKET(): TerminalNode[];
  public LEFT_BRACKET(i: number): TerminalNode;
  public LEFT_BRACKET(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.LEFT_BRACKET);
    } else {
      return this.getToken(PostgresParser.LEFT_BRACKET, i);
    }
  }
  public RIGHT_BRACKET(): TerminalNode[];
  public RIGHT_BRACKET(i: number): TerminalNode;
  public RIGHT_BRACKET(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.RIGHT_BRACKET);
    } else {
      return this.getToken(PostgresParser.RIGHT_BRACKET, i);
    }
  }
  public XPATH_EXISTS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XPATH_EXISTS, 0);
  }
  public XMLTABLE(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLTABLE, 0);
  }
  public COLUMNS(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COLUMNS, 0);
  }
  public data_type(): Data_typeContext[];
  public data_type(i: number): Data_typeContext;
  public data_type(i?: number): Data_typeContext | Data_typeContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Data_typeContext);
    } else {
      return this.getRuleContext(i, Data_typeContext);
    }
  }
  public FOR(): TerminalNode[];
  public FOR(i: number): TerminalNode;
  public FOR(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.FOR);
    } else {
      return this.getToken(PostgresParser.FOR, i);
    }
  }
  public ORDINALITY(): TerminalNode[];
  public ORDINALITY(i: number): TerminalNode;
  public ORDINALITY(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.ORDINALITY);
    } else {
      return this.getToken(PostgresParser.ORDINALITY, i);
    }
  }
  public XMLNAMESPACES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLNAMESPACES, 0);
  }
  public PATH(): TerminalNode[];
  public PATH(i: number): TerminalNode;
  public PATH(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.PATH);
    } else {
      return this.getToken(PostgresParser.PATH, i);
    }
  }
  public DEFAULT(): TerminalNode[];
  public DEFAULT(i: number): TerminalNode;
  public DEFAULT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.DEFAULT);
    } else {
      return this.getToken(PostgresParser.DEFAULT, i);
    }
  }
  public NULL(): TerminalNode[];
  public NULL(i: number): TerminalNode;
  public NULL(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.NULL);
    } else {
      return this.getToken(PostgresParser.NULL, i);
    }
  }
  public NOT(): TerminalNode[];
  public NOT(i: number): TerminalNode;
  public NOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.NOT);
    } else {
      return this.getToken(PostgresParser.NOT, i);
    }
  }
  public TABLE_TO_XML(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.TABLE_TO_XML, 0);
  }
  public boolean_value(): Boolean_valueContext[];
  public boolean_value(i: number): Boolean_valueContext;
  public boolean_value(i?: number): Boolean_valueContext | Boolean_valueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Boolean_valueContext);
    } else {
      return this.getRuleContext(i, Boolean_valueContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_custom;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_custom) {
      listener.enterFunction_custom(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_custom) {
      listener.exitFunction_custom(this);
    }
  }
}
