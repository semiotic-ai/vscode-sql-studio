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
  public static readonly BlockComment = 1;
  public static readonly LineComment = 2;
  public static readonly OP_CHARS = 3;
  public static readonly NUMBER_LITERAL = 4;
  public static readonly REAL_NUMBER = 5;
  public static readonly DOLLAR_NUMBER = 6;
  public static readonly Identifier = 7;
  public static readonly QuotedIdentifier = 8;
  public static readonly Character_String_Literal = 9;
  public static readonly BeginDollarStringConstant = 10;
  public static readonly Space = 11;
  public static readonly White_Space = 12;
  public static readonly New_Line = 13;
  public static readonly Tab = 14;
  public static readonly BOM = 15;
  public static readonly BAD = 16;
  public static readonly CAST_EXPRESSION = 17;
  public static readonly EQUAL = 18;
  public static readonly COLON = 19;
  public static readonly SEMI_COLON = 20;
  public static readonly COMMA = 21;
  public static readonly NOT_EQUAL = 22;
  public static readonly LTH = 23;
  public static readonly LEQ = 24;
  public static readonly GTH = 25;
  public static readonly GEQ = 26;
  public static readonly LEFT_PAREN = 27;
  public static readonly RIGHT_PAREN = 28;
  public static readonly PLUS = 29;
  public static readonly MINUS = 30;
  public static readonly MULTIPLY = 31;
  public static readonly DIVIDE = 32;
  public static readonly MODULAR = 33;
  public static readonly EXP = 34;
  public static readonly DOT = 35;
  public static readonly QUOTE_CHAR = 36;
  public static readonly DOUBLE_QUOTE = 37;
  public static readonly DOLLAR = 38;
  public static readonly LEFT_BRACKET = 39;
  public static readonly RIGHT_BRACKET = 40;
  public static readonly EQUAL_GTH = 41;
  public static readonly COLON_EQUAL = 42;
  public static readonly LESS_LESS = 43;
  public static readonly GREATER_GREATER = 44;
  public static readonly DOUBLE_DOT = 45;
  public static readonly HASH_SIGN = 46;
  public static readonly WITH = 47;
  public static readonly RECURSIVE = 48;
  public static readonly SELECT = 49;
  public static readonly FROM = 50;
  public static readonly WHERE = 51;
  public static readonly GROUP = 52;
  public static readonly BY = 53;
  public static readonly HAVING = 54;
  public static readonly ORDER = 55;
  public static readonly LIMIT = 56;
  public static readonly OFFSET = 57;
  public static readonly DISTINCT = 58;
  public static readonly ALL = 59;
  public static readonly ANY = 60;
  public static readonly SOME = 61;
  public static readonly UNION = 62;
  public static readonly INTERSECT = 63;
  public static readonly EXCEPT = 64;
  public static readonly DESC = 65;
  public static readonly ASC = 66;
  public static readonly USING = 67;
  public static readonly OPERATOR = 68;
  public static readonly NULLS = 69;
  public static readonly FIRST = 70;
  public static readonly LAST = 71;
  public static readonly LEFT = 72;
  public static readonly RIGHT = 73;
  public static readonly FULL = 74;
  public static readonly INNER = 75;
  public static readonly OUTER = 76;
  public static readonly CROSS = 77;
  public static readonly JOIN = 78;
  public static readonly ON = 79;
  public static readonly VALUES = 80;
  public static readonly DEFAULT = 81;
  public static readonly NATURAL = 82;
  public static readonly TABLESAMPLE = 83;
  public static readonly REPEATABLE = 84;
  public static readonly LATERAL = 85;
  public static readonly TABLE = 86;
  public static readonly ONLY = 87;
  public static readonly INTERVAL = 88;
  public static readonly TO = 89;
  public static readonly SECOND = 90;
  public static readonly MINUTE = 91;
  public static readonly HOUR = 92;
  public static readonly DAY = 93;
  public static readonly MONTH = 94;
  public static readonly YEAR = 95;
  public static readonly CAST = 96;
  public static readonly TREAT = 97;
  public static readonly CASE = 98;
  public static readonly WHEN = 99;
  public static readonly THEN = 100;
  public static readonly ELSE = 101;
  public static readonly END = 102;
  public static readonly AND = 103;
  public static readonly OR = 104;
  public static readonly NOT = 105;
  public static readonly IS = 106;
  public static readonly NULL = 107;
  public static readonly ISNULL = 108;
  public static readonly NOTNULL = 109;
  public static readonly TRUE = 110;
  public static readonly FALSE = 111;
  public static readonly BETWEEN = 112;
  public static readonly IN = 113;
  public static readonly LIKE = 114;
  public static readonly ILIKE = 115;
  public static readonly ARRAY = 116;
  public static readonly BOOLEAN = 117;
  public static readonly SMALLINT = 118;
  public static readonly INT = 119;
  public static readonly INTEGER = 120;
  public static readonly BIGINT = 121;
  public static readonly DEC = 122;
  public static readonly DECIMAL = 123;
  public static readonly DOUBLE = 124;
  public static readonly FLOAT = 125;
  public static readonly NUMERIC = 126;
  public static readonly PRECISION = 127;
  public static readonly REAL = 128;
  public static readonly BIT = 129;
  public static readonly VARYING = 130;
  public static readonly NATIONAL = 131;
  public static readonly CHARACTER = 132;
  public static readonly CHAR = 133;
  public static readonly NCHAR = 134;
  public static readonly TIME = 135;
  public static readonly WITHOUT = 136;
  public static readonly WITHIN = 137;
  public static readonly ZONE = 138;
  public static readonly TIMESTAMP = 139;
  public static readonly VARCHAR = 140;
  public static readonly SETOF = 141;
  public static readonly OF = 142;
  public static readonly COLLATE = 143;
  public static readonly OVER = 144;
  public static readonly PARTITION = 145;
  public static readonly WINDOW = 146;
  public static readonly ROWS = 147;
  public static readonly RANGE = 148;
  public static readonly GROUPS = 149;
  public static readonly UNBOUNDED = 150;
  public static readonly PRECEDING = 151;
  public static readonly FOLLOWING = 152;
  public static readonly CURRENT = 153;
  public static readonly ROW = 154;
  public static readonly EXCLUDE = 155;
  public static readonly TIES = 156;
  public static readonly NO = 157;
  public static readonly OTHERS = 158;
  public static readonly ROLLUP = 159;
  public static readonly CUBE = 160;
  public static readonly GROUPING = 161;
  public static readonly SETS = 162;
  public static readonly ORDINALITY = 163;
  public static readonly OVERLAPS = 164;
  public static readonly AT = 165;
  public static readonly AS = 166;
  public static readonly ASYMMETRIC = 167;
  public static readonly SYMMETRIC = 168;
  public static readonly SIMILAR = 169;
  public static readonly ESCAPE = 170;
  public static readonly FETCH = 171;
  public static readonly NEXT = 172;
  public static readonly DOCUMENT = 173;
  public static readonly UNKNOWN = 174;
  public static readonly EXISTS = 175;
  public static readonly CONTENT = 176;
  public static readonly VARIADIC = 177;
  public static readonly FILTER = 178;
  public static readonly ALIAS = 179;
  public static readonly ABBREV = 180;
  public static readonly ABS = 181;
  public static readonly ACOS = 182;
  public static readonly ACOSD = 183;
  public static readonly ACOSH = 184;
  public static readonly AGE = 185;
  public static readonly AREA = 186;
  public static readonly ARRAY_AGG = 187;
  public static readonly ARRAY_APPEND = 188;
  public static readonly ARRAY_CAT = 189;
  public static readonly ARRAY_DIMS = 190;
  public static readonly ARRAY_FILL = 191;
  public static readonly ARRAY_LENGTH = 192;
  public static readonly ARRAY_LOWER = 193;
  public static readonly ARRAY_NDIMS = 194;
  public static readonly ARRAY_POSITION = 195;
  public static readonly ARRAY_PREPEND = 196;
  public static readonly ARRAY_REMOVE = 197;
  public static readonly ARRAY_REPLACE = 198;
  public static readonly ARRAY_TO_JSON = 199;
  public static readonly ARRAY_TO_STRING = 200;
  public static readonly ARRAY_TO_TSVECTOR = 201;
  public static readonly ARRAY_UPPER = 202;
  public static readonly ASCII = 203;
  public static readonly ASIN = 204;
  public static readonly ASIND = 205;
  public static readonly ASINH = 206;
  public static readonly ATAN = 207;
  public static readonly ATAN2 = 208;
  public static readonly ATAN2D = 209;
  public static readonly ATAND = 210;
  public static readonly ATANH = 211;
  public static readonly AVG = 212;
  public static readonly BIT_AND = 213;
  public static readonly BIT_COUNT = 214;
  public static readonly BIT_LENGTH = 215;
  public static readonly BIT_OR = 216;
  public static readonly BIT_XOR = 217;
  public static readonly BOOL_AND = 218;
  public static readonly BOOL_OR = 219;
  public static readonly BOX = 220;
  public static readonly BROADCAST = 221;
  public static readonly BTRIM = 222;
  public static readonly CARDINALITY = 223;
  public static readonly CBRT = 224;
  public static readonly CEIL = 225;
  public static readonly CENTER = 226;
  public static readonly CHAR_LENGTH = 227;
  public static readonly CHARACTER_LENGTH = 228;
  public static readonly CHR = 229;
  public static readonly CIRCLE = 230;
  public static readonly CLOCK_TIMESTAMP = 231;
  public static readonly COALESCE = 232;
  public static readonly COLUMNS = 233;
  public static readonly CONCAT = 234;
  public static readonly CONCAT_WS = 235;
  public static readonly CONVERT = 236;
  public static readonly CONVERT_FROM = 237;
  public static readonly CONVERT_TO = 238;
  public static readonly CORR = 239;
  public static readonly COS = 240;
  public static readonly COSD = 241;
  public static readonly COSH = 242;
  public static readonly COT = 243;
  public static readonly COTD = 244;
  public static readonly COUNT = 245;
  public static readonly COVAR_POP = 246;
  public static readonly COVAR_SAMP = 247;
  public static readonly CUME_DIST = 248;
  public static readonly CURRENT_DATE = 249;
  public static readonly CURRENT_TIME = 250;
  public static readonly CURRENT_TIMESTAMP = 251;
  public static readonly DATE = 252;
  public static readonly DATE_BIN = 253;
  public static readonly DATE_PART = 254;
  public static readonly DATE_TRUNC = 255;
  public static readonly DECODE = 256;
  public static readonly DEGREES = 257;
  public static readonly DENSE_RANK = 258;
  public static readonly DIAGONAL = 259;
  public static readonly DIAMETER = 260;
  public static readonly DIV = 261;
  public static readonly ENCODE = 262;
  public static readonly ENUM_FIRST = 263;
  public static readonly ENUM_LAST = 264;
  public static readonly ENUM_RANGE = 265;
  public static readonly EVERY = 266;
  public static readonly EXTRACT = 267;
  public static readonly FACTORIAL = 268;
  public static readonly FAMILY = 269;
  public static readonly FIRST_VALUE = 270;
  public static readonly FLOOR = 271;
  public static readonly FORMAT = 272;
  public static readonly GCD = 273;
  public static readonly GEN_RANDOM_UUID = 274;
  public static readonly GENERATE_SERIES = 275;
  public static readonly GENERATE_SUBSCRIPTS = 276;
  public static readonly GET_BIT = 277;
  public static readonly GET_BYTE = 278;
  public static readonly GET_CURRENT_TS_CONFIG = 279;
  public static readonly GREATEST = 280;
  public static readonly HEIGHT = 281;
  public static readonly HOST = 282;
  public static readonly HOSTMASK = 283;
  public static readonly INET_MERGE = 284;
  public static readonly INET_SAME_FAMILY = 285;
  public static readonly INITCAP = 286;
  public static readonly ISCLOSED = 287;
  public static readonly ISEMPTY = 288;
  public static readonly ISFINITE = 289;
  public static readonly ISOPEN = 290;
  public static readonly JSON_AGG = 291;
  public static readonly JSON_ARRAY_ELEMENTS = 292;
  public static readonly JSON_ARRAY_ELEMENTS_TEXT = 293;
  public static readonly JSON_ARRAY_LENGTH = 294;
  public static readonly JSON_BUILD_ARRAY = 295;
  public static readonly JSON_BUILD_OBJECT = 296;
  public static readonly JSON_EACH = 297;
  public static readonly JSON_EACH_TEXT = 298;
  public static readonly JSON_EXTRACT_PATH = 299;
  public static readonly JSON_EXTRACT_PATH_TEXT = 300;
  public static readonly JSON_OBJECT = 301;
  public static readonly JSON_OBJECT_AGG = 302;
  public static readonly JSON_OBJECT_KEYS = 303;
  public static readonly JSON_POPULATE_RECORD = 304;
  public static readonly JSON_POPULATE_RECORDSET = 305;
  public static readonly JSON_STRIP_NULLS = 306;
  public static readonly JSON_TO_RECORD = 307;
  public static readonly JSON_TO_RECORDSET = 308;
  public static readonly JSON_TO_TSVECTOR = 309;
  public static readonly JSON_TYPEOF = 310;
  public static readonly JSONB_ARRAY_ELEMENTS = 311;
  public static readonly JSONB_ARRAY_ELEMENTS_TEXT = 312;
  public static readonly JSONB_ARRAY_LENGTH = 313;
  public static readonly JSONB_BUILD_ARRAY = 314;
  public static readonly JSONB_EACH = 315;
  public static readonly JSONB_EACH_TEXT = 316;
  public static readonly JSONB_EXTRACT_PATH = 317;
  public static readonly JSONB_EXTRACT_PATH_TEXT = 318;
  public static readonly JSONB_INSERT = 319;
  public static readonly JSONB_OBJECT = 320;
  public static readonly JSONB_OBJECT_KEYS = 321;
  public static readonly JSONB_PATH_EXISTS = 322;
  public static readonly JSONB_PATH_EXISTS_TZ = 323;
  public static readonly JSONB_PATH_MATCH = 324;
  public static readonly JSONB_PATH_MATCH_TZ = 325;
  public static readonly JSONB_PATH_QUERY = 326;
  public static readonly JSONB_PATH_QUERY_ARRAY = 327;
  public static readonly JSONB_PATH_QUERY_ARRAY_TZ = 328;
  public static readonly JSONB_PATH_QUERY_FIRST = 329;
  public static readonly JSONB_PATH_QUERY_FIRST_TZ = 330;
  public static readonly JSONB_PATH_QUERY_TZ = 331;
  public static readonly JSONB_POPULATE_RECORD = 332;
  public static readonly JSONB_POPULATE_RECORDSET = 333;
  public static readonly JSONB_PRETTY = 334;
  public static readonly JSONB_SET = 335;
  public static readonly JSONB_SET_LAX = 336;
  public static readonly JSONB_STRIP_NULLS = 337;
  public static readonly JSONB_TO_RECORD = 338;
  public static readonly JSONB_TO_RECORDSET = 339;
  public static readonly JSONB_TYPEOF = 340;
  public static readonly JUSTIFY_DAYS = 341;
  public static readonly JUSTIFY_HOURS = 342;
  public static readonly JUSTIFY_INTERVAL = 343;
  public static readonly LAG = 344;
  public static readonly LAST_VALUE = 345;
  public static readonly LCM = 346;
  public static readonly LEAD = 347;
  public static readonly LEAST = 348;
  public static readonly LENGTH = 349;
  public static readonly LINE = 350;
  public static readonly LN = 351;
  public static readonly LOCALTIME = 352;
  public static readonly LOCALTIMESTAMP = 353;
  public static readonly LOG = 354;
  public static readonly LOG10 = 355;
  public static readonly LOWER = 356;
  public static readonly LOWER_INC = 357;
  public static readonly LOWER_INF = 358;
  public static readonly LPAD = 359;
  public static readonly LSEG = 360;
  public static readonly LTRIM = 361;
  public static readonly MACADDR8_SET7BIT = 362;
  public static readonly MAKE_DATE = 363;
  public static readonly MAKE_INTERVAL = 364;
  public static readonly MAKE_TIME = 365;
  public static readonly MAKE_TIMESTAMP = 366;
  public static readonly MAKE_TIMESTAMPTZ = 367;
  public static readonly MASKLEN = 368;
  public static readonly MAX = 369;
  public static readonly MD5 = 370;
  public static readonly MIN = 371;
  public static readonly MIN_SCALE = 372;
  public static readonly MOD = 373;
  public static readonly MODE = 374;
  public static readonly MULTIRANGE = 375;
  public static readonly NAME = 376;
  public static readonly NETMASK = 377;
  public static readonly NETWORK = 378;
  public static readonly NODE = 379;
  public static readonly NORMALIZE = 380;
  public static readonly NOW = 381;
  public static readonly NPOINTS = 382;
  public static readonly NTH_VALUE = 383;
  public static readonly NTILE = 384;
  public static readonly NULLIF = 385;
  public static readonly NUM_NONNULLS = 386;
  public static readonly NUM_NULLS = 387;
  public static readonly NUMNODE = 388;
  public static readonly OCTET_LENGTH = 389;
  public static readonly OVERLAY = 390;
  public static readonly PARSE_IDENT = 391;
  public static readonly PASSING = 392;
  public static readonly PATH = 393;
  public static readonly PCLOSE = 394;
  public static readonly PERCENT_RANK = 395;
  public static readonly PERCENTILE_CONT = 396;
  public static readonly PERCENTILE_DISC = 397;
  public static readonly PHRASETO_TSQUERY = 398;
  public static readonly PI = 399;
  public static readonly PLAINTO_TSQUERY = 400;
  public static readonly POINT = 401;
  public static readonly POLYGON = 402;
  public static readonly POPEN = 403;
  public static readonly POSITION = 404;
  public static readonly POW = 405;
  public static readonly POWER = 406;
  public static readonly QUERYTREE = 407;
  public static readonly QUOTE_IDENT = 408;
  public static readonly QUOTE_LITERAL = 409;
  public static readonly QUOTE_NULLABLE = 410;
  public static readonly RADIANS = 411;
  public static readonly RADIUS = 412;
  public static readonly RANDOM = 413;
  public static readonly RANGE_AGG = 414;
  public static readonly RANGE_INTERSECT_AGG = 415;
  public static readonly RANGE_MERGE = 416;
  public static readonly RANK = 417;
  public static readonly REF = 418;
  public static readonly REGEXP_MATCH = 419;
  public static readonly REGEXP_MATCHES = 420;
  public static readonly REGEXP_REPLACE = 421;
  public static readonly REGEXP_SPLIT_TO_ARRAY = 422;
  public static readonly REGEXP_SPLIT_TO_TABLE = 423;
  public static readonly REGR_AVGX = 424;
  public static readonly REGR_AVGY = 425;
  public static readonly REGR_COUNT = 426;
  public static readonly REGR_INTERCEPT = 427;
  public static readonly REGR_R2 = 428;
  public static readonly REGR_SLOPE = 429;
  public static readonly REGR_SXX = 430;
  public static readonly REGR_SXY = 431;
  public static readonly REGR_SYY = 432;
  public static readonly REPEAT = 433;
  public static readonly REPLACE = 434;
  public static readonly REVERSE = 435;
  public static readonly ROUND = 436;
  public static readonly ROW_NUMBER = 437;
  public static readonly ROW_TO_JSON = 438;
  public static readonly RPAD = 439;
  public static readonly RTRIM = 440;
  public static readonly SCALE = 441;
  public static readonly SET_BIT = 442;
  public static readonly SET_BYTE = 443;
  public static readonly SET_MASKLEN = 444;
  public static readonly SETSEED = 445;
  public static readonly SETWEIGHT = 446;
  public static readonly SHA224 = 447;
  public static readonly SHA256 = 448;
  public static readonly SHA384 = 449;
  public static readonly SHA512 = 450;
  public static readonly SIGN = 451;
  public static readonly SIN = 452;
  public static readonly SIND = 453;
  public static readonly SINH = 454;
  public static readonly SLOPE = 455;
  public static readonly SPLIT_PART = 456;
  public static readonly SQRT = 457;
  public static readonly STANDALONE = 458;
  public static readonly STARTS_WITH = 459;
  public static readonly STATEMENT_TIMESTAMP = 460;
  public static readonly STDDEV = 461;
  public static readonly STDDEV_POP = 462;
  public static readonly STDDEV_SAMP = 463;
  public static readonly STRING_AGG = 464;
  public static readonly STRING_TO_ARRAY = 465;
  public static readonly STRING_TO_TABLE = 466;
  public static readonly STRIP = 467;
  public static readonly STRPOS = 468;
  public static readonly SUBSTR = 469;
  public static readonly SUBSTRING = 470;
  public static readonly SUM = 471;
  public static readonly TABLE_TO_XML = 472;
  public static readonly TAN = 473;
  public static readonly TAND = 474;
  public static readonly TANH = 475;
  public static readonly TEXT = 476;
  public static readonly TIMEOFDAY = 477;
  public static readonly TO_ASCII = 478;
  public static readonly TO_CHAR = 479;
  public static readonly TO_DATE = 480;
  public static readonly TO_HEX = 481;
  public static readonly TO_JSON = 482;
  public static readonly TO_JSONB = 483;
  public static readonly TO_NUMBER = 484;
  public static readonly TO_TIMESTAMP = 485;
  public static readonly TO_TSQUERY = 486;
  public static readonly TO_TSVECTOR = 487;
  public static readonly TRANSACTION_TIMESTAMP = 488;
  public static readonly TRANSLATE = 489;
  public static readonly TRIM = 490;
  public static readonly TRIM_ARRAY = 491;
  public static readonly TRIM_SCALE = 492;
  public static readonly TRUNC = 493;
  public static readonly TS_DEBUG = 494;
  public static readonly TS_DELETE = 495;
  public static readonly TS_FILTER = 496;
  public static readonly TS_HEADLINE = 497;
  public static readonly TS_LEXIZE = 498;
  public static readonly TS_PARSE = 499;
  public static readonly TS_RANK = 500;
  public static readonly TS_RANK_CD = 501;
  public static readonly TS_REWRITE = 502;
  public static readonly TS_TOKEN_TYPE = 503;
  public static readonly TSQUERY_PHRASE = 504;
  public static readonly TSVECTOR_TO_ARRAY = 505;
  public static readonly UNISTR = 506;
  public static readonly UNNEST = 507;
  public static readonly UPPER = 508;
  public static readonly UPPER_INC = 509;
  public static readonly UPPER_INF = 510;
  public static readonly VALUE = 511;
  public static readonly VAR_POP = 512;
  public static readonly VAR_SAMP = 513;
  public static readonly VARIANCE = 514;
  public static readonly VERSION = 515;
  public static readonly WEBSEARCH_TO_TSQUERY = 516;
  public static readonly WIDTH = 517;
  public static readonly WIDTH_BUCKET = 518;
  public static readonly XML_IS_WELL_FORMED = 519;
  public static readonly XML_IS_WELL_FORMED_CONTENT = 520;
  public static readonly XML_IS_WELL_FORMED_DOCUMENT = 521;
  public static readonly XMLAGG = 522;
  public static readonly XMLATTRIBUTES = 523;
  public static readonly XMLCOMMENT = 524;
  public static readonly XMLCONCAT = 525;
  public static readonly XMLELEMENT = 526;
  public static readonly XMLEXISTS = 527;
  public static readonly XMLFOREST = 528;
  public static readonly XMLPI = 529;
  public static readonly XMLROOT = 530;
  public static readonly XMLTABLE = 531;
  public static readonly XPATH = 532;
  public static readonly XPATH_EXISTS = 533;
  public static readonly YES = 534;
  public static readonly Text_between_Dollar = 535;
  public static readonly EndDollarStringConstant = 536;
  public static readonly XMLNAMESPACES = 537;
  public static readonly FOR = 538;
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
  public static readonly RULE_function_call = 28;
  public static readonly RULE_vex_or_named_notation = 29;
  public static readonly RULE_pointer = 30;
  public static readonly RULE_comparison_mod = 31;
  public static readonly RULE_filter_clause = 32;
  public static readonly RULE_window_definition = 33;
  public static readonly RULE_frame_clause = 34;
  public static readonly RULE_frame_bound = 35;
  public static readonly RULE_array_expression = 36;
  public static readonly RULE_array_elements = 37;
  public static readonly RULE_type_coercion = 38;
  public static readonly RULE_set_qualifier = 39;
  public static readonly RULE_table_subquery = 40;
  public static readonly RULE_select_stmt = 41;
  public static readonly RULE_after_ops = 42;
  public static readonly RULE_select_stmt_no_parens = 43;
  public static readonly RULE_with_clause = 44;
  public static readonly RULE_with_query = 45;
  public static readonly RULE_select_ops = 46;
  public static readonly RULE_select_ops_no_parens = 47;
  public static readonly RULE_select_primary = 48;
  public static readonly RULE_select_list = 49;
  public static readonly RULE_select_sublist = 50;
  public static readonly RULE_from_item = 51;
  public static readonly RULE_from_primary = 52;
  public static readonly RULE_alias_clause = 53;
  public static readonly RULE_from_function_column_def = 54;
  public static readonly RULE_groupby_clause = 55;
  public static readonly RULE_grouping_element_list = 56;
  public static readonly RULE_grouping_element = 57;
  public static readonly RULE_values_stmt = 58;
  public static readonly RULE_values_values = 59;
  public static readonly RULE_orderby_clause = 60;
  public static readonly RULE_sort_specifier_list = 61;
  public static readonly RULE_sort_specifier = 62;
  public static readonly RULE_order_specification = 63;
  public static readonly RULE_null_ordering = 64;
  public static readonly RULE_dollar_number = 65;
  public static readonly RULE_names_in_parens = 66;
  public static readonly RULE_names_references = 67;
  public static readonly RULE_op_chars = 68;
  public static readonly RULE_partition_by_columns = 69;
  public static readonly RULE_collate_identifier = 70;
  public static readonly RULE_indirection = 71;
  public static readonly RULE_indirection_list = 72;
  public static readonly RULE_indirection_var = 73;
  public static readonly RULE_all_simple_op = 74;
  public static readonly RULE_character_string = 75;
  public static readonly RULE_boolean_value = 76;
  public static readonly RULE_function_xml_xmlcomment = 77;
  public static readonly RULE_function_xml_xmlconcat = 78;
  public static readonly RULE_function_xml_xmlelement = 79;
  public static readonly RULE_function_xml_xmlforest = 80;
  public static readonly RULE_function_xml_xmlpi = 81;
  public static readonly RULE_function_xml_xmlroot = 82;
  public static readonly RULE_function_xml_xmlagg = 83;
  public static readonly RULE_function_xml_xmlexists = 84;
  public static readonly RULE_function_xml_xml_is_well_formed = 85;
  public static readonly RULE_function_xml_xml_is_well_formed_content = 86;
  public static readonly RULE_function_xml_xml_is_well_formed_document = 87;
  public static readonly RULE_function_xml_xpath = 88;
  public static readonly RULE_function_xml_xpath_exists = 89;
  public static readonly RULE_function_xml_xmltable = 90;
  public static readonly RULE_function_xml_table_to_xml = 91;
  public static readonly RULE_functions_all = 92;
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
    'function_xml_xmlcomment',
    'function_xml_xmlconcat',
    'function_xml_xmlelement',
    'function_xml_xmlforest',
    'function_xml_xmlpi',
    'function_xml_xmlroot',
    'function_xml_xmlagg',
    'function_xml_xmlexists',
    'function_xml_xml_is_well_formed',
    'function_xml_xml_is_well_formed_content',
    'function_xml_xml_is_well_formed_document',
    'function_xml_xpath',
    'function_xml_xpath_exists',
    'function_xml_xmltable',
    'function_xml_table_to_xml',
    'functions_all'
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
    "' '",
    undefined,
    undefined,
    "'\u0009'",
    "'\uFEFF'",
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
    "'^'",
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
    "'#'"
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
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
    'EXP',
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
    'ABBREV',
    'ABS',
    'ACOS',
    'ACOSD',
    'ACOSH',
    'AGE',
    'AREA',
    'ARRAY_AGG',
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
    'ARRAY_TO_JSON',
    'ARRAY_TO_STRING',
    'ARRAY_TO_TSVECTOR',
    'ARRAY_UPPER',
    'ASCII',
    'ASIN',
    'ASIND',
    'ASINH',
    'ATAN',
    'ATAN2',
    'ATAN2D',
    'ATAND',
    'ATANH',
    'AVG',
    'BIT_AND',
    'BIT_COUNT',
    'BIT_LENGTH',
    'BIT_OR',
    'BIT_XOR',
    'BOOL_AND',
    'BOOL_OR',
    'BOX',
    'BROADCAST',
    'BTRIM',
    'CARDINALITY',
    'CBRT',
    'CEIL',
    'CENTER',
    'CHAR_LENGTH',
    'CHARACTER_LENGTH',
    'CHR',
    'CIRCLE',
    'CLOCK_TIMESTAMP',
    'COALESCE',
    'COLUMNS',
    'CONCAT',
    'CONCAT_WS',
    'CONVERT',
    'CONVERT_FROM',
    'CONVERT_TO',
    'CORR',
    'COS',
    'COSD',
    'COSH',
    'COT',
    'COTD',
    'COUNT',
    'COVAR_POP',
    'COVAR_SAMP',
    'CUME_DIST',
    'CURRENT_DATE',
    'CURRENT_TIME',
    'CURRENT_TIMESTAMP',
    'DATE',
    'DATE_BIN',
    'DATE_PART',
    'DATE_TRUNC',
    'DECODE',
    'DEGREES',
    'DENSE_RANK',
    'DIAGONAL',
    'DIAMETER',
    'DIV',
    'ENCODE',
    'ENUM_FIRST',
    'ENUM_LAST',
    'ENUM_RANGE',
    'EVERY',
    'EXTRACT',
    'FACTORIAL',
    'FAMILY',
    'FIRST_VALUE',
    'FLOOR',
    'FORMAT',
    'GCD',
    'GEN_RANDOM_UUID',
    'GENERATE_SERIES',
    'GENERATE_SUBSCRIPTS',
    'GET_BIT',
    'GET_BYTE',
    'GET_CURRENT_TS_CONFIG',
    'GREATEST',
    'HEIGHT',
    'HOST',
    'HOSTMASK',
    'INET_MERGE',
    'INET_SAME_FAMILY',
    'INITCAP',
    'ISCLOSED',
    'ISEMPTY',
    'ISFINITE',
    'ISOPEN',
    'JSON_AGG',
    'JSON_ARRAY_ELEMENTS',
    'JSON_ARRAY_ELEMENTS_TEXT',
    'JSON_ARRAY_LENGTH',
    'JSON_BUILD_ARRAY',
    'JSON_BUILD_OBJECT',
    'JSON_EACH',
    'JSON_EACH_TEXT',
    'JSON_EXTRACT_PATH',
    'JSON_EXTRACT_PATH_TEXT',
    'JSON_OBJECT',
    'JSON_OBJECT_AGG',
    'JSON_OBJECT_KEYS',
    'JSON_POPULATE_RECORD',
    'JSON_POPULATE_RECORDSET',
    'JSON_STRIP_NULLS',
    'JSON_TO_RECORD',
    'JSON_TO_RECORDSET',
    'JSON_TO_TSVECTOR',
    'JSON_TYPEOF',
    'JSONB_ARRAY_ELEMENTS',
    'JSONB_ARRAY_ELEMENTS_TEXT',
    'JSONB_ARRAY_LENGTH',
    'JSONB_BUILD_ARRAY',
    'JSONB_EACH',
    'JSONB_EACH_TEXT',
    'JSONB_EXTRACT_PATH',
    'JSONB_EXTRACT_PATH_TEXT',
    'JSONB_INSERT',
    'JSONB_OBJECT',
    'JSONB_OBJECT_KEYS',
    'JSONB_PATH_EXISTS',
    'JSONB_PATH_EXISTS_TZ',
    'JSONB_PATH_MATCH',
    'JSONB_PATH_MATCH_TZ',
    'JSONB_PATH_QUERY',
    'JSONB_PATH_QUERY_ARRAY',
    'JSONB_PATH_QUERY_ARRAY_TZ',
    'JSONB_PATH_QUERY_FIRST',
    'JSONB_PATH_QUERY_FIRST_TZ',
    'JSONB_PATH_QUERY_TZ',
    'JSONB_POPULATE_RECORD',
    'JSONB_POPULATE_RECORDSET',
    'JSONB_PRETTY',
    'JSONB_SET',
    'JSONB_SET_LAX',
    'JSONB_STRIP_NULLS',
    'JSONB_TO_RECORD',
    'JSONB_TO_RECORDSET',
    'JSONB_TYPEOF',
    'JUSTIFY_DAYS',
    'JUSTIFY_HOURS',
    'JUSTIFY_INTERVAL',
    'LAG',
    'LAST_VALUE',
    'LCM',
    'LEAD',
    'LEAST',
    'LENGTH',
    'LINE',
    'LN',
    'LOCALTIME',
    'LOCALTIMESTAMP',
    'LOG',
    'LOG10',
    'LOWER',
    'LOWER_INC',
    'LOWER_INF',
    'LPAD',
    'LSEG',
    'LTRIM',
    'MACADDR8_SET7BIT',
    'MAKE_DATE',
    'MAKE_INTERVAL',
    'MAKE_TIME',
    'MAKE_TIMESTAMP',
    'MAKE_TIMESTAMPTZ',
    'MASKLEN',
    'MAX',
    'MD5',
    'MIN',
    'MIN_SCALE',
    'MOD',
    'MODE',
    'MULTIRANGE',
    'NAME',
    'NETMASK',
    'NETWORK',
    'NODE',
    'NORMALIZE',
    'NOW',
    'NPOINTS',
    'NTH_VALUE',
    'NTILE',
    'NULLIF',
    'NUM_NONNULLS',
    'NUM_NULLS',
    'NUMNODE',
    'OCTET_LENGTH',
    'OVERLAY',
    'PARSE_IDENT',
    'PASSING',
    'PATH',
    'PCLOSE',
    'PERCENT_RANK',
    'PERCENTILE_CONT',
    'PERCENTILE_DISC',
    'PHRASETO_TSQUERY',
    'PI',
    'PLAINTO_TSQUERY',
    'POINT',
    'POLYGON',
    'POPEN',
    'POSITION',
    'POW',
    'POWER',
    'QUERYTREE',
    'QUOTE_IDENT',
    'QUOTE_LITERAL',
    'QUOTE_NULLABLE',
    'RADIANS',
    'RADIUS',
    'RANDOM',
    'RANGE_AGG',
    'RANGE_INTERSECT_AGG',
    'RANGE_MERGE',
    'RANK',
    'REF',
    'REGEXP_MATCH',
    'REGEXP_MATCHES',
    'REGEXP_REPLACE',
    'REGEXP_SPLIT_TO_ARRAY',
    'REGEXP_SPLIT_TO_TABLE',
    'REGR_AVGX',
    'REGR_AVGY',
    'REGR_COUNT',
    'REGR_INTERCEPT',
    'REGR_R2',
    'REGR_SLOPE',
    'REGR_SXX',
    'REGR_SXY',
    'REGR_SYY',
    'REPEAT',
    'REPLACE',
    'REVERSE',
    'ROUND',
    'ROW_NUMBER',
    'ROW_TO_JSON',
    'RPAD',
    'RTRIM',
    'SCALE',
    'SET_BIT',
    'SET_BYTE',
    'SET_MASKLEN',
    'SETSEED',
    'SETWEIGHT',
    'SHA224',
    'SHA256',
    'SHA384',
    'SHA512',
    'SIGN',
    'SIN',
    'SIND',
    'SINH',
    'SLOPE',
    'SPLIT_PART',
    'SQRT',
    'STANDALONE',
    'STARTS_WITH',
    'STATEMENT_TIMESTAMP',
    'STDDEV',
    'STDDEV_POP',
    'STDDEV_SAMP',
    'STRING_AGG',
    'STRING_TO_ARRAY',
    'STRING_TO_TABLE',
    'STRIP',
    'STRPOS',
    'SUBSTR',
    'SUBSTRING',
    'SUM',
    'TABLE_TO_XML',
    'TAN',
    'TAND',
    'TANH',
    'TEXT',
    'TIMEOFDAY',
    'TO_ASCII',
    'TO_CHAR',
    'TO_DATE',
    'TO_HEX',
    'TO_JSON',
    'TO_JSONB',
    'TO_NUMBER',
    'TO_TIMESTAMP',
    'TO_TSQUERY',
    'TO_TSVECTOR',
    'TRANSACTION_TIMESTAMP',
    'TRANSLATE',
    'TRIM',
    'TRIM_ARRAY',
    'TRIM_SCALE',
    'TRUNC',
    'TS_DEBUG',
    'TS_DELETE',
    'TS_FILTER',
    'TS_HEADLINE',
    'TS_LEXIZE',
    'TS_PARSE',
    'TS_RANK',
    'TS_RANK_CD',
    'TS_REWRITE',
    'TS_TOKEN_TYPE',
    'TSQUERY_PHRASE',
    'TSVECTOR_TO_ARRAY',
    'UNISTR',
    'UNNEST',
    'UPPER',
    'UPPER_INC',
    'UPPER_INF',
    'VALUE',
    'VAR_POP',
    'VAR_SAMP',
    'VARIANCE',
    'VERSION',
    'WEBSEARCH_TO_TSQUERY',
    'WIDTH',
    'WIDTH_BUCKET',
    'XML_IS_WELL_FORMED',
    'XML_IS_WELL_FORMED_CONTENT',
    'XML_IS_WELL_FORMED_DOCUMENT',
    'XMLAGG',
    'XMLATTRIBUTES',
    'XMLCOMMENT',
    'XMLCONCAT',
    'XMLELEMENT',
    'XMLEXISTS',
    'XMLFOREST',
    'XMLPI',
    'XMLROOT',
    'XMLTABLE',
    'XPATH',
    'XPATH_EXISTS',
    'YES',
    'Text_between_Dollar',
    'EndDollarStringConstant',
    'XMLNAMESPACES',
    'FOR'
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
        this.state = 187;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.BOM) {
          {
            this.state = 186;
            this.match(PostgresParser.BOM);
          }
        }

        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.SEMI_COLON) {
          {
            {
              this.state = 189;
              this.match(PostgresParser.SEMI_COLON);
            }
          }
          this.state = 194;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 206;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (((_la - 27) & ~0x1f) === 0 &&
            ((1 << (_la - 27)) &
              ((1 << (PostgresParser.LEFT_PAREN - 27)) |
                (1 << (PostgresParser.WITH - 27)) |
                (1 << (PostgresParser.SELECT - 27)))) !==
              0) ||
          _la === PostgresParser.VALUES ||
          _la === PostgresParser.TABLE
        ) {
          {
            {
              this.state = 195;
              this.select_stmt();
              this.state = 202;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case PostgresParser.SEMI_COLON:
                  {
                    this.state = 197;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    do {
                      {
                        {
                          this.state = 196;
                          this.match(PostgresParser.SEMI_COLON);
                        }
                      }
                      this.state = 199;
                      this._errHandler.sync(this);
                      _la = this._input.LA(1);
                    } while (_la === PostgresParser.SEMI_COLON);
                  }
                  break;
                case PostgresParser.EOF:
                  {
                    this.state = 201;
                    this.match(PostgresParser.EOF);
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 208;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 209;
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
      this.state = 214;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.Identifier:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 211;
            this.match(PostgresParser.Identifier);
          }
          break;
        case PostgresParser.QuotedIdentifier:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 212;
            this.match(PostgresParser.QuotedIdentifier);
          }
          break;
        case PostgresParser.ALIAS:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 213;
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
      this.state = 219;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.Identifier:
        case PostgresParser.QuotedIdentifier:
        case PostgresParser.ALIAS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 216;
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
        case PostgresParser.MODE:
        case PostgresParser.REPLACE:
        case PostgresParser.STRIP:
        case PostgresParser.TEXT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 217;
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
        case PostgresParser.EXTRACT:
        case PostgresParser.GREATEST:
        case PostgresParser.LEAST:
        case PostgresParser.NULLIF:
        case PostgresParser.OVERLAY:
        case PostgresParser.POSITION:
        case PostgresParser.SUBSTRING:
        case PostgresParser.TRIM:
        case PostgresParser.XMLCONCAT:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 218;
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
      this.state = 224;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.Identifier:
        case PostgresParser.QuotedIdentifier:
        case PostgresParser.ALIAS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 221;
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
        case PostgresParser.MODE:
        case PostgresParser.REPLACE:
        case PostgresParser.STRIP:
        case PostgresParser.TEXT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 222;
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
            this.state = 223;
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
      this.state = 231;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.Identifier:
        case PostgresParser.QuotedIdentifier:
        case PostgresParser.ALIAS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 226;
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
            this.state = 227;
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
        case PostgresParser.MODE:
        case PostgresParser.REPLACE:
        case PostgresParser.STRIP:
        case PostgresParser.TEXT:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 228;
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
            this.state = 229;
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
        case PostgresParser.EXTRACT:
        case PostgresParser.GREATEST:
        case PostgresParser.LEAST:
        case PostgresParser.NULLIF:
        case PostgresParser.OVERLAY:
        case PostgresParser.POSITION:
        case PostgresParser.SUBSTRING:
        case PostgresParser.TRIM:
        case PostgresParser.XMLCONCAT:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 230;
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
        this.state = 233;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 48) & ~0x1f) === 0 &&
              ((1 << (_la - 48)) &
                ((1 << (PostgresParser.RECURSIVE - 48)) |
                  (1 << (PostgresParser.BY - 48)) |
                  (1 << (PostgresParser.OPERATOR - 48)) |
                  (1 << (PostgresParser.NULLS - 48)) |
                  (1 << (PostgresParser.FIRST - 48)) |
                  (1 << (PostgresParser.LAST - 48)))) !==
                0) ||
            (((_la - 90) & ~0x1f) === 0 &&
              ((1 << (_la - 90)) &
                ((1 << (PostgresParser.SECOND - 90)) |
                  (1 << (PostgresParser.MINUTE - 90)) |
                  (1 << (PostgresParser.HOUR - 90)) |
                  (1 << (PostgresParser.DAY - 90)) |
                  (1 << (PostgresParser.MONTH - 90)) |
                  (1 << (PostgresParser.YEAR - 90)))) !==
                0) ||
            (((_la - 124) & ~0x1f) === 0 &&
              ((1 << (_la - 124)) &
                ((1 << (PostgresParser.DOUBLE - 124)) |
                  (1 << (PostgresParser.VARYING - 124)) |
                  (1 << (PostgresParser.WITHOUT - 124)) |
                  (1 << (PostgresParser.WITHIN - 124)) |
                  (1 << (PostgresParser.ZONE - 124)) |
                  (1 << (PostgresParser.OF - 124)) |
                  (1 << (PostgresParser.OVER - 124)) |
                  (1 << (PostgresParser.PARTITION - 124)) |
                  (1 << (PostgresParser.ROWS - 124)) |
                  (1 << (PostgresParser.RANGE - 124)) |
                  (1 << (PostgresParser.GROUPS - 124)) |
                  (1 << (PostgresParser.UNBOUNDED - 124)) |
                  (1 << (PostgresParser.PRECEDING - 124)) |
                  (1 << (PostgresParser.FOLLOWING - 124)) |
                  (1 << (PostgresParser.CURRENT - 124)) |
                  (1 << (PostgresParser.EXCLUDE - 124)))) !==
                0) ||
            (((_la - 156) & ~0x1f) === 0 &&
              ((1 << (_la - 156)) &
                ((1 << (PostgresParser.TIES - 156)) |
                  (1 << (PostgresParser.NO - 156)) |
                  (1 << (PostgresParser.OTHERS - 156)) |
                  (1 << (PostgresParser.ROLLUP - 156)) |
                  (1 << (PostgresParser.SETS - 156)) |
                  (1 << (PostgresParser.AT - 156)) |
                  (1 << (PostgresParser.ESCAPE - 156)) |
                  (1 << (PostgresParser.NEXT - 156)) |
                  (1 << (PostgresParser.DOCUMENT - 156)) |
                  (1 << (PostgresParser.UNKNOWN - 156)) |
                  (1 << (PostgresParser.FILTER - 156)))) !==
                0) ||
            _la === PostgresParser.FAMILY ||
            _la === PostgresParser.MODE ||
            _la === PostgresParser.REPLACE ||
            _la === PostgresParser.STRIP ||
            _la === PostgresParser.TEXT
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
        this.state = 235;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 80) & ~0x1f) === 0 &&
              ((1 << (_la - 80)) &
                ((1 << (PostgresParser.VALUES - 80)) |
                  (1 << (PostgresParser.INTERVAL - 80)) |
                  (1 << (PostgresParser.TREAT - 80)))) !==
                0) ||
            (((_la - 112) & ~0x1f) === 0 &&
              ((1 << (_la - 112)) &
                ((1 << (PostgresParser.BETWEEN - 112)) |
                  (1 << (PostgresParser.BOOLEAN - 112)) |
                  (1 << (PostgresParser.SMALLINT - 112)) |
                  (1 << (PostgresParser.INT - 112)) |
                  (1 << (PostgresParser.INTEGER - 112)) |
                  (1 << (PostgresParser.BIGINT - 112)) |
                  (1 << (PostgresParser.DEC - 112)) |
                  (1 << (PostgresParser.DECIMAL - 112)) |
                  (1 << (PostgresParser.FLOAT - 112)) |
                  (1 << (PostgresParser.NUMERIC - 112)) |
                  (1 << (PostgresParser.PRECISION - 112)) |
                  (1 << (PostgresParser.REAL - 112)) |
                  (1 << (PostgresParser.BIT - 112)) |
                  (1 << (PostgresParser.NATIONAL - 112)) |
                  (1 << (PostgresParser.CHARACTER - 112)) |
                  (1 << (PostgresParser.CHAR - 112)) |
                  (1 << (PostgresParser.NCHAR - 112)) |
                  (1 << (PostgresParser.TIME - 112)) |
                  (1 << (PostgresParser.TIMESTAMP - 112)) |
                  (1 << (PostgresParser.VARCHAR - 112)) |
                  (1 << (PostgresParser.SETOF - 112)))) !==
                0) ||
            (((_la - 154) & ~0x1f) === 0 &&
              ((1 << (_la - 154)) &
                ((1 << (PostgresParser.ROW - 154)) |
                  (1 << (PostgresParser.GROUPING - 154)) |
                  (1 << (PostgresParser.EXISTS - 154)))) !==
                0) ||
            _la === PostgresParser.COALESCE ||
            _la === PostgresParser.EXTRACT ||
            _la === PostgresParser.GREATEST ||
            _la === PostgresParser.LEAST ||
            (((_la - 385) & ~0x1f) === 0 &&
              ((1 << (_la - 385)) &
                ((1 << (PostgresParser.NULLIF - 385)) |
                  (1 << (PostgresParser.OVERLAY - 385)) |
                  (1 << (PostgresParser.POSITION - 385)))) !==
                0) ||
            _la === PostgresParser.SUBSTRING ||
            _la === PostgresParser.TRIM ||
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
        this.state = 237;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 72) & ~0x1f) === 0 &&
              ((1 << (_la - 72)) &
                ((1 << (PostgresParser.LEFT - 72)) |
                  (1 << (PostgresParser.RIGHT - 72)) |
                  (1 << (PostgresParser.FULL - 72)) |
                  (1 << (PostgresParser.INNER - 72)) |
                  (1 << (PostgresParser.OUTER - 72)) |
                  (1 << (PostgresParser.CROSS - 72)) |
                  (1 << (PostgresParser.JOIN - 72)) |
                  (1 << (PostgresParser.NATURAL - 72)) |
                  (1 << (PostgresParser.TABLESAMPLE - 72)))) !==
                0) ||
            (((_la - 106) & ~0x1f) === 0 &&
              ((1 << (_la - 106)) &
                ((1 << (PostgresParser.IS - 106)) |
                  (1 << (PostgresParser.ISNULL - 106)) |
                  (1 << (PostgresParser.NOTNULL - 106)) |
                  (1 << (PostgresParser.LIKE - 106)) |
                  (1 << (PostgresParser.ILIKE - 106)))) !==
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
        this.state = 239;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 47) & ~0x1f) === 0 &&
              ((1 << (_la - 47)) &
                ((1 << (PostgresParser.WITH - 47)) |
                  (1 << (PostgresParser.SELECT - 47)) |
                  (1 << (PostgresParser.FROM - 47)) |
                  (1 << (PostgresParser.WHERE - 47)) |
                  (1 << (PostgresParser.GROUP - 47)) |
                  (1 << (PostgresParser.HAVING - 47)) |
                  (1 << (PostgresParser.ORDER - 47)) |
                  (1 << (PostgresParser.LIMIT - 47)) |
                  (1 << (PostgresParser.OFFSET - 47)) |
                  (1 << (PostgresParser.DISTINCT - 47)) |
                  (1 << (PostgresParser.ALL - 47)) |
                  (1 << (PostgresParser.ANY - 47)) |
                  (1 << (PostgresParser.SOME - 47)) |
                  (1 << (PostgresParser.UNION - 47)) |
                  (1 << (PostgresParser.INTERSECT - 47)) |
                  (1 << (PostgresParser.EXCEPT - 47)) |
                  (1 << (PostgresParser.DESC - 47)) |
                  (1 << (PostgresParser.ASC - 47)) |
                  (1 << (PostgresParser.USING - 47)))) !==
                0) ||
            (((_la - 79) & ~0x1f) === 0 &&
              ((1 << (_la - 79)) &
                ((1 << (PostgresParser.ON - 79)) |
                  (1 << (PostgresParser.DEFAULT - 79)) |
                  (1 << (PostgresParser.LATERAL - 79)) |
                  (1 << (PostgresParser.TABLE - 79)) |
                  (1 << (PostgresParser.ONLY - 79)) |
                  (1 << (PostgresParser.TO - 79)) |
                  (1 << (PostgresParser.CAST - 79)) |
                  (1 << (PostgresParser.CASE - 79)) |
                  (1 << (PostgresParser.WHEN - 79)) |
                  (1 << (PostgresParser.THEN - 79)) |
                  (1 << (PostgresParser.ELSE - 79)) |
                  (1 << (PostgresParser.END - 79)) |
                  (1 << (PostgresParser.AND - 79)) |
                  (1 << (PostgresParser.OR - 79)) |
                  (1 << (PostgresParser.NOT - 79)) |
                  (1 << (PostgresParser.NULL - 79)) |
                  (1 << (PostgresParser.TRUE - 79)))) !==
                0) ||
            (((_la - 111) & ~0x1f) === 0 &&
              ((1 << (_la - 111)) &
                ((1 << (PostgresParser.FALSE - 111)) |
                  (1 << (PostgresParser.IN - 111)) |
                  (1 << (PostgresParser.ARRAY - 111)))) !==
                0) ||
            (((_la - 143) & ~0x1f) === 0 &&
              ((1 << (_la - 143)) &
                ((1 << (PostgresParser.COLLATE - 143)) |
                  (1 << (PostgresParser.WINDOW - 143)) |
                  (1 << (PostgresParser.AS - 143)) |
                  (1 << (PostgresParser.ASYMMETRIC - 143)) |
                  (1 << (PostgresParser.SYMMETRIC - 143)) |
                  (1 << (PostgresParser.FETCH - 143)))) !==
                0) ||
            _la === PostgresParser.VARIADIC ||
            (((_la - 249) & ~0x1f) === 0 &&
              ((1 << (_la - 249)) &
                ((1 << (PostgresParser.CURRENT_DATE - 249)) |
                  (1 << (PostgresParser.CURRENT_TIME - 249)) |
                  (1 << (PostgresParser.CURRENT_TIMESTAMP - 249)))) !==
                0) ||
            _la === PostgresParser.LOCALTIME ||
            _la === PostgresParser.LOCALTIMESTAMP
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
        this.state = 241;
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
        this.state = 243;
        this.data_type();
        this.state = 248;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 244;
              this.match(PostgresParser.COMMA);
              this.state = 245;
              this.data_type();
            }
          }
          this.state = 250;
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
        this.state = 252;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.SETOF) {
          {
            this.state = 251;
            this.match(PostgresParser.SETOF);
          }
        }

        this.state = 254;
        this.predefined_type();
        this.state = 264;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
          case 1:
            {
              this.state = 255;
              this.match(PostgresParser.ARRAY);
              this.state = 257;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                  {
                    this.state = 256;
                    this.array_type();
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              this.state = 260;
              this._errHandler.sync(this);
              _alt = 1;
              do {
                switch (_alt) {
                  case 1:
                    {
                      {
                        this.state = 259;
                        this.array_type();
                      }
                    }
                    break;
                  default:
                    throw new NoViableAltException(this);
                }
                this.state = 262;
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
        this.state = 266;
        this.match(PostgresParser.LEFT_BRACKET);
        this.state = 268;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.NUMBER_LITERAL) {
          {
            this.state = 267;
            this.match(PostgresParser.NUMBER_LITERAL);
          }
        }

        this.state = 270;
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
      this.state = 363;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 272;
            this.match(PostgresParser.BIGINT);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 273;
            this.match(PostgresParser.BIT);
            this.state = 275;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
              case 1:
                {
                  this.state = 274;
                  this.match(PostgresParser.VARYING);
                }
                break;
            }
            this.state = 278;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
              case 1:
                {
                  this.state = 277;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 280;
            this.match(PostgresParser.BOOLEAN);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 281;
            this.match(PostgresParser.DEC);
            this.state = 283;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
              case 1:
                {
                  this.state = 282;
                  this.precision_param();
                }
                break;
            }
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 285;
            this.match(PostgresParser.DECIMAL);
            this.state = 287;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
              case 1:
                {
                  this.state = 286;
                  this.precision_param();
                }
                break;
            }
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 289;
            this.match(PostgresParser.DOUBLE);
            this.state = 290;
            this.match(PostgresParser.PRECISION);
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 291;
            this.match(PostgresParser.FLOAT);
            this.state = 293;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
              case 1:
                {
                  this.state = 292;
                  this.precision_param();
                }
                break;
            }
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 295;
            this.match(PostgresParser.INT);
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 296;
            this.match(PostgresParser.INTEGER);
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 297;
            this.match(PostgresParser.INTERVAL);
            this.state = 299;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 20, this._ctx)) {
              case 1:
                {
                  this.state = 298;
                  this.interval_field();
                }
                break;
            }
            this.state = 302;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 21, this._ctx)) {
              case 1:
                {
                  this.state = 301;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 305;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.NATIONAL) {
              {
                this.state = 304;
                this.match(PostgresParser.NATIONAL);
              }
            }

            this.state = 307;
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
            this.state = 309;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 23, this._ctx)) {
              case 1:
                {
                  this.state = 308;
                  this.match(PostgresParser.VARYING);
                }
                break;
            }
            this.state = 312;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
              case 1:
                {
                  this.state = 311;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 314;
            this.match(PostgresParser.NCHAR);
            this.state = 316;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 25, this._ctx)) {
              case 1:
                {
                  this.state = 315;
                  this.match(PostgresParser.VARYING);
                }
                break;
            }
            this.state = 319;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 26, this._ctx)) {
              case 1:
                {
                  this.state = 318;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 321;
            this.match(PostgresParser.NUMERIC);
            this.state = 323;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
              case 1:
                {
                  this.state = 322;
                  this.precision_param();
                }
                break;
            }
          }
          break;

        case 14:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 325;
            this.match(PostgresParser.REAL);
          }
          break;

        case 15:
          this.enterOuterAlt(_localctx, 15);
          {
            this.state = 326;
            this.match(PostgresParser.SMALLINT);
          }
          break;

        case 16:
          this.enterOuterAlt(_localctx, 16);
          {
            this.state = 327;
            this.match(PostgresParser.TIME);
            this.state = 329;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
              case 1:
                {
                  this.state = 328;
                  this.type_length();
                }
                break;
            }
            this.state = 334;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
              case 1:
                {
                  this.state = 331;
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
                  this.state = 332;
                  this.match(PostgresParser.TIME);
                  this.state = 333;
                  this.match(PostgresParser.ZONE);
                }
                break;
            }
          }
          break;

        case 17:
          this.enterOuterAlt(_localctx, 17);
          {
            this.state = 336;
            this.match(PostgresParser.TIMESTAMP);
            this.state = 338;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
              case 1:
                {
                  this.state = 337;
                  this.type_length();
                }
                break;
            }
            this.state = 343;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
              case 1:
                {
                  this.state = 340;
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
                  this.state = 341;
                  this.match(PostgresParser.TIME);
                  this.state = 342;
                  this.match(PostgresParser.ZONE);
                }
                break;
            }
          }
          break;

        case 18:
          this.enterOuterAlt(_localctx, 18);
          {
            this.state = 345;
            this.match(PostgresParser.VARCHAR);
            this.state = 347;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
              case 1:
                {
                  this.state = 346;
                  this.type_length();
                }
                break;
            }
          }
          break;

        case 19:
          this.enterOuterAlt(_localctx, 19);
          {
            this.state = 349;
            this.identifier_nontype();
            this.state = 361;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 34, this._ctx)) {
              case 1:
                {
                  this.state = 350;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 351;
                  this.vex(0);
                  this.state = 356;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  while (_la === PostgresParser.COMMA) {
                    {
                      {
                        this.state = 352;
                        this.match(PostgresParser.COMMA);
                        this.state = 353;
                        this.vex(0);
                      }
                    }
                    this.state = 358;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                  }
                  this.state = 359;
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
      this.state = 392;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 365;
            this.match(PostgresParser.YEAR);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 366;
            this.match(PostgresParser.MONTH);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 367;
            this.match(PostgresParser.DAY);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 368;
            this.match(PostgresParser.HOUR);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 369;
            this.match(PostgresParser.MINUTE);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 370;
            this.match(PostgresParser.SECOND);
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 371;
            this.match(PostgresParser.YEAR);
            this.state = 372;
            this.match(PostgresParser.TO);
            this.state = 373;
            this.match(PostgresParser.MONTH);
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 374;
            this.match(PostgresParser.DAY);
            this.state = 375;
            this.match(PostgresParser.TO);
            this.state = 376;
            this.match(PostgresParser.HOUR);
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 377;
            this.match(PostgresParser.DAY);
            this.state = 378;
            this.match(PostgresParser.TO);
            this.state = 379;
            this.match(PostgresParser.MINUTE);
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 380;
            this.match(PostgresParser.DAY);
            this.state = 381;
            this.match(PostgresParser.TO);
            this.state = 382;
            this.match(PostgresParser.SECOND);
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 383;
            this.match(PostgresParser.HOUR);
            this.state = 384;
            this.match(PostgresParser.TO);
            this.state = 385;
            this.match(PostgresParser.MINUTE);
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 386;
            this.match(PostgresParser.HOUR);
            this.state = 387;
            this.match(PostgresParser.TO);
            this.state = 388;
            this.match(PostgresParser.SECOND);
          }
          break;

        case 13:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 389;
            this.match(PostgresParser.MINUTE);
            this.state = 390;
            this.match(PostgresParser.TO);
            this.state = 391;
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
        this.state = 394;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 395;
        this.match(PostgresParser.NUMBER_LITERAL);
        this.state = 396;
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
        this.state = 398;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 399;
        _localctx._precision = this.match(PostgresParser.NUMBER_LITERAL);
        this.state = 402;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.COMMA) {
          {
            this.state = 400;
            this.match(PostgresParser.COMMA);
            this.state = 401;
            _localctx._scale = this.match(PostgresParser.NUMBER_LITERAL);
          }
        }

        this.state = 404;
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
        this.state = 431;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
          case 1:
            {
              this.state = 407;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 408;
              this.vex(0);
              this.state = 409;
              this.match(PostgresParser.RIGHT_PAREN);
              this.state = 411;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                  {
                    this.state = 410;
                    this.indirection_list();
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              this.state = 413;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 414;
              this.vex(0);
              this.state = 417;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              do {
                {
                  {
                    this.state = 415;
                    this.match(PostgresParser.COMMA);
                    this.state = 416;
                    this.vex(0);
                  }
                }
                this.state = 419;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              } while (_la === PostgresParser.COMMA);
              this.state = 421;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;

          case 3:
            {
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
              this.vex(24);
            }
            break;

          case 4:
            {
              this.state = 425;
              this.op();
              this.state = 426;
              this.vex(18);
            }
            break;

          case 5:
            {
              this.state = 428;
              this.match(PostgresParser.NOT);
              this.state = 429;
              this.vex(4);
            }
            break;

          case 6:
            {
              this.state = 430;
              this.value_expression_primary();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 568;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 566;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                case 1:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 433;
                    if (!this.precpred(this._ctx, 23)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 23)');
                    }
                    this.state = 434;
                    this.match(PostgresParser.AT);
                    this.state = 435;
                    this.match(PostgresParser.TIME);
                    this.state = 436;
                    this.match(PostgresParser.ZONE);
                    this.state = 437;
                    this.vex(24);
                  }
                  break;

                case 2:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 438;
                    if (!this.precpred(this._ctx, 22)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 22)');
                    }
                    this.state = 439;
                    this.match(PostgresParser.EXP);
                    this.state = 440;
                    this.vex(23);
                  }
                  break;

                case 3:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 441;
                    if (!this.precpred(this._ctx, 21)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 21)');
                    }
                    this.state = 442;
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 31) & ~0x1f) === 0 &&
                        ((1 << (_la - 31)) &
                          ((1 << (PostgresParser.MULTIPLY - 31)) |
                            (1 << (PostgresParser.DIVIDE - 31)) |
                            (1 << (PostgresParser.MODULAR - 31)))) !==
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
                    this.state = 443;
                    this.vex(22);
                  }
                  break;

                case 4:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 444;
                    if (!this.precpred(this._ctx, 20)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 20)');
                    }
                    this.state = 445;
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
                    this.state = 446;
                    this.vex(21);
                  }
                  break;

                case 5:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 447;
                    if (!this.precpred(this._ctx, 19)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 19)');
                    }
                    this.state = 448;
                    this.op();
                    this.state = 449;
                    this.vex(20);
                  }
                  break;

                case 6:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 451;
                    if (!this.precpred(this._ctx, 15)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 15)');
                    }
                    this.state = 453;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 452;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 455;
                    this.match(PostgresParser.BETWEEN);
                    this.state = 457;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.ASYMMETRIC || _la === PostgresParser.SYMMETRIC) {
                      {
                        this.state = 456;
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

                    this.state = 459;
                    this.vex_b(0);
                    this.state = 460;
                    this.match(PostgresParser.AND);
                    this.state = 461;
                    this.vex(16);
                  }
                  break;

                case 7:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 463;
                    if (!this.precpred(this._ctx, 14)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 14)');
                    }
                    this.state = 465;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 464;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 471;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.LIKE:
                        {
                          this.state = 467;
                          this.match(PostgresParser.LIKE);
                        }
                        break;
                      case PostgresParser.ILIKE:
                        {
                          this.state = 468;
                          this.match(PostgresParser.ILIKE);
                        }
                        break;
                      case PostgresParser.SIMILAR:
                        {
                          this.state = 469;
                          this.match(PostgresParser.SIMILAR);
                          this.state = 470;
                          this.match(PostgresParser.TO);
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                    this.state = 473;
                    this.vex(15);
                  }
                  break;

                case 8:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 474;
                    if (!this.precpred(this._ctx, 13)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 13)');
                    }
                    this.state = 476;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 475;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 482;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.LIKE:
                        {
                          this.state = 478;
                          this.match(PostgresParser.LIKE);
                        }
                        break;
                      case PostgresParser.ILIKE:
                        {
                          this.state = 479;
                          this.match(PostgresParser.ILIKE);
                        }
                        break;
                      case PostgresParser.SIMILAR:
                        {
                          this.state = 480;
                          this.match(PostgresParser.SIMILAR);
                          this.state = 481;
                          this.match(PostgresParser.TO);
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                    this.state = 484;
                    this.vex(0);
                    this.state = 485;
                    this.match(PostgresParser.ESCAPE);
                    this.state = 486;
                    this.vex(14);
                  }
                  break;

                case 9:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 488;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)');
                    }
                    this.state = 489;
                    _la = this._input.LA(1);
                    if (
                      !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << PostgresParser.EQUAL) |
                            (1 << PostgresParser.NOT_EQUAL) |
                            (1 << PostgresParser.LTH) |
                            (1 << PostgresParser.LEQ) |
                            (1 << PostgresParser.GTH) |
                            (1 << PostgresParser.GEQ))) !==
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
                    this.state = 490;
                    this.vex(13);
                  }
                  break;

                case 10:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 491;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)');
                    }
                    this.state = 492;
                    this.match(PostgresParser.IS);
                    this.state = 494;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 493;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 496;
                    this.match(PostgresParser.DISTINCT);
                    this.state = 497;
                    this.match(PostgresParser.FROM);
                    this.state = 498;
                    this.vex(11);
                  }
                  break;

                case 11:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 499;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
                    }
                    this.state = 500;
                    this.match(PostgresParser.AND);
                    this.state = 501;
                    this.vex(4);
                  }
                  break;

                case 12:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 502;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 503;
                    this.match(PostgresParser.OR);
                    this.state = 504;
                    this.vex(3);
                  }
                  break;

                case 13:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 505;
                    if (!this.precpred(this._ctx, 28)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 28)');
                    }
                    this.state = 506;
                    this.match(PostgresParser.CAST_EXPRESSION);
                    this.state = 507;
                    this.data_type();
                  }
                  break;

                case 14:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 508;
                    if (!this.precpred(this._ctx, 25)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 25)');
                    }
                    this.state = 509;
                    this.collate_identifier();
                  }
                  break;

                case 15:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 510;
                    if (!this.precpred(this._ctx, 17)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 17)');
                    }
                    this.state = 511;
                    this.op();
                  }
                  break;

                case 16:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 512;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)');
                    }
                    this.state = 514;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 513;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 516;
                    this.match(PostgresParser.IN);
                    this.state = 517;
                    this.match(PostgresParser.LEFT_PAREN);
                    this.state = 527;
                    this._errHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                      case 1:
                        {
                          this.state = 518;
                          this.select_stmt_no_parens();
                        }
                        break;

                      case 2:
                        {
                          this.state = 519;
                          this.vex(0);
                          this.state = 524;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          while (_la === PostgresParser.COMMA) {
                            {
                              {
                                this.state = 520;
                                this.match(PostgresParser.COMMA);
                                this.state = 521;
                                this.vex(0);
                              }
                            }
                            this.state = 526;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                          }
                        }
                        break;
                    }
                    this.state = 529;
                    this.match(PostgresParser.RIGHT_PAREN);
                  }
                  break;

                case 17:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 531;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)');
                    }
                    this.state = 532;
                    this.match(PostgresParser.IS);
                    this.state = 534;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 533;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 538;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.ON:
                      case PostgresParser.TRUE:
                      case PostgresParser.FALSE:
                        {
                          this.state = 536;
                          this.truth_value();
                        }
                        break;
                      case PostgresParser.NULL:
                        {
                          this.state = 537;
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
                    this.state = 540;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)');
                    }
                    this.state = 541;
                    this.match(PostgresParser.IS);
                    this.state = 543;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 542;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 545;
                    this.match(PostgresParser.DOCUMENT);
                  }
                  break;

                case 19:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 546;
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)');
                    }
                    this.state = 547;
                    this.match(PostgresParser.IS);
                    this.state = 549;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 548;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 551;
                    this.match(PostgresParser.UNKNOWN);
                  }
                  break;

                case 20:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 552;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)');
                    }
                    this.state = 553;
                    this.match(PostgresParser.IS);
                    this.state = 555;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 554;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 557;
                    this.match(PostgresParser.OF);
                    this.state = 558;
                    this.match(PostgresParser.LEFT_PAREN);
                    this.state = 559;
                    this.type_list();
                    this.state = 560;
                    this.match(PostgresParser.RIGHT_PAREN);
                  }
                  break;

                case 21:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 562;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)');
                    }
                    this.state = 563;
                    this.match(PostgresParser.ISNULL);
                  }
                  break;

                case 22:
                  {
                    _localctx = new VexContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex);
                    this.state = 564;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                    }
                    this.state = 565;
                    this.match(PostgresParser.NOTNULL);
                  }
                  break;
              }
            }
          }
          this.state = 570;
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
        this.state = 594;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 60, this._ctx)) {
          case 1:
            {
              this.state = 572;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 573;
              this.vex(0);
              this.state = 574;
              this.match(PostgresParser.RIGHT_PAREN);
              this.state = 576;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 58, this._ctx)) {
                case 1:
                  {
                    this.state = 575;
                    this.indirection_list();
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              this.state = 578;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 579;
              this.vex(0);
              this.state = 582;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              do {
                {
                  {
                    this.state = 580;
                    this.match(PostgresParser.COMMA);
                    this.state = 581;
                    this.vex(0);
                  }
                }
                this.state = 584;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              } while (_la === PostgresParser.COMMA);
              this.state = 586;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;

          case 3:
            {
              this.state = 588;
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
              this.state = 589;
              this.vex_b(13);
            }
            break;

          case 4:
            {
              this.state = 590;
              this.op();
              this.state = 591;
              this.vex_b(8);
            }
            break;

          case 5:
            {
              this.state = 593;
              this.value_expression_primary();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 649;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 647;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 65, this._ctx)) {
                case 1:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 596;
                    if (!this.precpred(this._ctx, 12)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 12)');
                    }
                    this.state = 597;
                    this.match(PostgresParser.EXP);
                    this.state = 598;
                    this.vex_b(13);
                  }
                  break;

                case 2:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 599;
                    if (!this.precpred(this._ctx, 11)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 11)');
                    }
                    this.state = 600;
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 31) & ~0x1f) === 0 &&
                        ((1 << (_la - 31)) &
                          ((1 << (PostgresParser.MULTIPLY - 31)) |
                            (1 << (PostgresParser.DIVIDE - 31)) |
                            (1 << (PostgresParser.MODULAR - 31)))) !==
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
                    this.state = 601;
                    this.vex_b(12);
                  }
                  break;

                case 3:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 602;
                    if (!this.precpred(this._ctx, 10)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 10)');
                    }
                    this.state = 603;
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
                    this.state = 604;
                    this.vex_b(11);
                  }
                  break;

                case 4:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 605;
                    if (!this.precpred(this._ctx, 9)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 9)');
                    }
                    this.state = 606;
                    this.op();
                    this.state = 607;
                    this.vex_b(10);
                  }
                  break;

                case 5:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 609;
                    if (!this.precpred(this._ctx, 6)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 6)');
                    }
                    this.state = 610;
                    _la = this._input.LA(1);
                    if (
                      !(
                        (_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << PostgresParser.EQUAL) |
                            (1 << PostgresParser.NOT_EQUAL) |
                            (1 << PostgresParser.LTH) |
                            (1 << PostgresParser.LEQ) |
                            (1 << PostgresParser.GTH) |
                            (1 << PostgresParser.GEQ))) !==
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
                    this.state = 611;
                    this.vex_b(7);
                  }
                  break;

                case 6:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 612;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                    }
                    this.state = 613;
                    this.match(PostgresParser.IS);
                    this.state = 615;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 614;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 617;
                    this.match(PostgresParser.DISTINCT);
                    this.state = 618;
                    this.match(PostgresParser.FROM);
                    this.state = 619;
                    this.vex_b(6);
                  }
                  break;

                case 7:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 620;
                    if (!this.precpred(this._ctx, 16)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 16)');
                    }
                    this.state = 621;
                    this.match(PostgresParser.CAST_EXPRESSION);
                    this.state = 622;
                    this.data_type();
                  }
                  break;

                case 8:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 623;
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)');
                    }
                    this.state = 624;
                    this.op();
                  }
                  break;

                case 9:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 625;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)');
                    }
                    this.state = 626;
                    this.match(PostgresParser.IS);
                    this.state = 628;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 627;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 630;
                    this.match(PostgresParser.DOCUMENT);
                  }
                  break;

                case 10:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 631;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
                    }
                    this.state = 632;
                    this.match(PostgresParser.IS);
                    this.state = 634;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 633;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 636;
                    this.match(PostgresParser.UNKNOWN);
                  }
                  break;

                case 11:
                  {
                    _localctx = new Vex_bContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(_localctx, _startState, PostgresParser.RULE_vex_b);
                    this.state = 637;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 638;
                    this.match(PostgresParser.IS);
                    this.state = 640;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT) {
                      {
                        this.state = 639;
                        this.match(PostgresParser.NOT);
                      }
                    }

                    this.state = 642;
                    this.match(PostgresParser.OF);
                    this.state = 643;
                    this.match(PostgresParser.LEFT_PAREN);
                    this.state = 644;
                    this.type_list();
                    this.state = 645;
                    this.match(PostgresParser.RIGHT_PAREN);
                  }
                  break;
              }
            }
          }
          this.state = 651;
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
      this.state = 660;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.OP_CHARS:
        case PostgresParser.LESS_LESS:
        case PostgresParser.GREATER_GREATER:
        case PostgresParser.HASH_SIGN:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 652;
            this.op_chars();
          }
          break;
        case PostgresParser.OPERATOR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 653;
            this.match(PostgresParser.OPERATOR);
            this.state = 654;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 655;
            this.identifier();
            this.state = 656;
            this.match(PostgresParser.DOT);
            this.state = 657;
            this.all_simple_op();
            this.state = 658;
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
      this.state = 670;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.OP_CHARS:
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
        case PostgresParser.EXP:
        case PostgresParser.LESS_LESS:
        case PostgresParser.GREATER_GREATER:
        case PostgresParser.HASH_SIGN:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 662;
            this.all_simple_op();
          }
          break;
        case PostgresParser.OPERATOR:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 663;
            this.match(PostgresParser.OPERATOR);
            this.state = 664;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 665;
            this.identifier();
            this.state = 666;
            this.match(PostgresParser.DOT);
            this.state = 667;
            this.all_simple_op();
            this.state = 668;
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
        this.state = 672;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 673;
        this.vex(0);
        this.state = 674;
        this.match(PostgresParser.COMMA);
        this.state = 675;
        this.vex(0);
        this.state = 676;
        this.match(PostgresParser.RIGHT_PAREN);
        this.state = 677;
        this.match(PostgresParser.OVERLAPS);
        this.state = 678;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 679;
        this.vex(0);
        this.state = 680;
        this.match(PostgresParser.COMMA);
        this.state = 681;
        this.vex(0);
        this.state = 682;
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
      this.state = 702;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 70, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 684;
            this.unsigned_value_specification();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 685;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 686;
            this.select_stmt_no_parens();
            this.state = 687;
            this.match(PostgresParser.RIGHT_PAREN);
            this.state = 689;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
              case 1:
                {
                  this.state = 688;
                  this.indirection_list();
                }
                break;
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 691;
            this.case_expression();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 692;
            this.match(PostgresParser.NULL);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 693;
            this.match(PostgresParser.MULTIPLY);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 694;
            this.comparison_mod();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 695;
            this.match(PostgresParser.EXISTS);
            this.state = 696;
            this.table_subquery();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 697;
            this.function_call();
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 698;
            this.indirection_var();
          }
          break;

        case 10:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 699;
            this.array_expression();
          }
          break;

        case 11:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 700;
            this.type_coercion();
          }
          break;

        case 12:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 701;
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
      this.state = 707;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.NUMBER_LITERAL:
        case PostgresParser.REAL_NUMBER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 704;
            this.unsigned_numeric_literal();
          }
          break;
        case PostgresParser.Character_String_Literal:
        case PostgresParser.BeginDollarStringConstant:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 705;
            this.character_string();
          }
          break;
        case PostgresParser.ON:
        case PostgresParser.TRUE:
        case PostgresParser.FALSE:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 706;
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
        this.state = 709;
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
        this.state = 711;
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
        this.state = 713;
        this.match(PostgresParser.CASE);
        this.state = 715;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PostgresParser.OP_CHARS) |
                (1 << PostgresParser.NUMBER_LITERAL) |
                (1 << PostgresParser.REAL_NUMBER) |
                (1 << PostgresParser.DOLLAR_NUMBER) |
                (1 << PostgresParser.Identifier) |
                (1 << PostgresParser.QuotedIdentifier) |
                (1 << PostgresParser.Character_String_Literal) |
                (1 << PostgresParser.BeginDollarStringConstant) |
                (1 << PostgresParser.LEFT_PAREN) |
                (1 << PostgresParser.PLUS) |
                (1 << PostgresParser.MINUS) |
                (1 << PostgresParser.MULTIPLY))) !==
              0) ||
          (((_la - 43) & ~0x1f) === 0 &&
            ((1 << (_la - 43)) &
              ((1 << (PostgresParser.LESS_LESS - 43)) |
                (1 << (PostgresParser.GREATER_GREATER - 43)) |
                (1 << (PostgresParser.HASH_SIGN - 43)) |
                (1 << (PostgresParser.RECURSIVE - 43)) |
                (1 << (PostgresParser.BY - 43)) |
                (1 << (PostgresParser.ALL - 43)) |
                (1 << (PostgresParser.ANY - 43)) |
                (1 << (PostgresParser.SOME - 43)) |
                (1 << (PostgresParser.OPERATOR - 43)) |
                (1 << (PostgresParser.NULLS - 43)) |
                (1 << (PostgresParser.FIRST - 43)) |
                (1 << (PostgresParser.LAST - 43)) |
                (1 << (PostgresParser.LEFT - 43)) |
                (1 << (PostgresParser.RIGHT - 43)) |
                (1 << (PostgresParser.FULL - 43)))) !==
              0) ||
          (((_la - 75) & ~0x1f) === 0 &&
            ((1 << (_la - 75)) &
              ((1 << (PostgresParser.INNER - 75)) |
                (1 << (PostgresParser.OUTER - 75)) |
                (1 << (PostgresParser.CROSS - 75)) |
                (1 << (PostgresParser.JOIN - 75)) |
                (1 << (PostgresParser.ON - 75)) |
                (1 << (PostgresParser.VALUES - 75)) |
                (1 << (PostgresParser.NATURAL - 75)) |
                (1 << (PostgresParser.TABLESAMPLE - 75)) |
                (1 << (PostgresParser.INTERVAL - 75)) |
                (1 << (PostgresParser.SECOND - 75)) |
                (1 << (PostgresParser.MINUTE - 75)) |
                (1 << (PostgresParser.HOUR - 75)) |
                (1 << (PostgresParser.DAY - 75)) |
                (1 << (PostgresParser.MONTH - 75)) |
                (1 << (PostgresParser.YEAR - 75)) |
                (1 << (PostgresParser.TREAT - 75)) |
                (1 << (PostgresParser.CASE - 75)) |
                (1 << (PostgresParser.NOT - 75)) |
                (1 << (PostgresParser.IS - 75)))) !==
              0) ||
          (((_la - 107) & ~0x1f) === 0 &&
            ((1 << (_la - 107)) &
              ((1 << (PostgresParser.NULL - 107)) |
                (1 << (PostgresParser.ISNULL - 107)) |
                (1 << (PostgresParser.NOTNULL - 107)) |
                (1 << (PostgresParser.TRUE - 107)) |
                (1 << (PostgresParser.FALSE - 107)) |
                (1 << (PostgresParser.BETWEEN - 107)) |
                (1 << (PostgresParser.LIKE - 107)) |
                (1 << (PostgresParser.ILIKE - 107)) |
                (1 << (PostgresParser.ARRAY - 107)) |
                (1 << (PostgresParser.BOOLEAN - 107)) |
                (1 << (PostgresParser.SMALLINT - 107)) |
                (1 << (PostgresParser.INT - 107)) |
                (1 << (PostgresParser.INTEGER - 107)) |
                (1 << (PostgresParser.BIGINT - 107)) |
                (1 << (PostgresParser.DEC - 107)) |
                (1 << (PostgresParser.DECIMAL - 107)) |
                (1 << (PostgresParser.DOUBLE - 107)) |
                (1 << (PostgresParser.FLOAT - 107)) |
                (1 << (PostgresParser.NUMERIC - 107)) |
                (1 << (PostgresParser.PRECISION - 107)) |
                (1 << (PostgresParser.REAL - 107)) |
                (1 << (PostgresParser.BIT - 107)) |
                (1 << (PostgresParser.VARYING - 107)) |
                (1 << (PostgresParser.NATIONAL - 107)) |
                (1 << (PostgresParser.CHARACTER - 107)) |
                (1 << (PostgresParser.CHAR - 107)) |
                (1 << (PostgresParser.NCHAR - 107)) |
                (1 << (PostgresParser.TIME - 107)) |
                (1 << (PostgresParser.WITHOUT - 107)) |
                (1 << (PostgresParser.WITHIN - 107)) |
                (1 << (PostgresParser.ZONE - 107)))) !==
              0) ||
          (((_la - 139) & ~0x1f) === 0 &&
            ((1 << (_la - 139)) &
              ((1 << (PostgresParser.TIMESTAMP - 139)) |
                (1 << (PostgresParser.VARCHAR - 139)) |
                (1 << (PostgresParser.SETOF - 139)) |
                (1 << (PostgresParser.OF - 139)) |
                (1 << (PostgresParser.OVER - 139)) |
                (1 << (PostgresParser.PARTITION - 139)) |
                (1 << (PostgresParser.ROWS - 139)) |
                (1 << (PostgresParser.RANGE - 139)) |
                (1 << (PostgresParser.GROUPS - 139)) |
                (1 << (PostgresParser.UNBOUNDED - 139)) |
                (1 << (PostgresParser.PRECEDING - 139)) |
                (1 << (PostgresParser.FOLLOWING - 139)) |
                (1 << (PostgresParser.CURRENT - 139)) |
                (1 << (PostgresParser.ROW - 139)) |
                (1 << (PostgresParser.EXCLUDE - 139)) |
                (1 << (PostgresParser.TIES - 139)) |
                (1 << (PostgresParser.NO - 139)) |
                (1 << (PostgresParser.OTHERS - 139)) |
                (1 << (PostgresParser.ROLLUP - 139)) |
                (1 << (PostgresParser.GROUPING - 139)) |
                (1 << (PostgresParser.SETS - 139)) |
                (1 << (PostgresParser.OVERLAPS - 139)) |
                (1 << (PostgresParser.AT - 139)) |
                (1 << (PostgresParser.SIMILAR - 139)) |
                (1 << (PostgresParser.ESCAPE - 139)))) !==
              0) ||
          (((_la - 172) & ~0x1f) === 0 &&
            ((1 << (_la - 172)) &
              ((1 << (PostgresParser.NEXT - 172)) |
                (1 << (PostgresParser.DOCUMENT - 172)) |
                (1 << (PostgresParser.UNKNOWN - 172)) |
                (1 << (PostgresParser.EXISTS - 172)) |
                (1 << (PostgresParser.FILTER - 172)) |
                (1 << (PostgresParser.ALIAS - 172)))) !==
              0) ||
          _la === PostgresParser.COALESCE ||
          (((_la - 267) & ~0x1f) === 0 &&
            ((1 << (_la - 267)) &
              ((1 << (PostgresParser.EXTRACT - 267)) |
                (1 << (PostgresParser.FAMILY - 267)) |
                (1 << (PostgresParser.GREATEST - 267)))) !==
              0) ||
          _la === PostgresParser.LEAST ||
          _la === PostgresParser.MODE ||
          (((_la - 385) & ~0x1f) === 0 &&
            ((1 << (_la - 385)) &
              ((1 << (PostgresParser.NULLIF - 385)) |
                (1 << (PostgresParser.OVERLAY - 385)) |
                (1 << (PostgresParser.POSITION - 385)))) !==
              0) ||
          _la === PostgresParser.REPLACE ||
          (((_la - 467) & ~0x1f) === 0 &&
            ((1 << (_la - 467)) &
              ((1 << (PostgresParser.STRIP - 467)) |
                (1 << (PostgresParser.SUBSTRING - 467)) |
                (1 << (PostgresParser.TABLE_TO_XML - 467)) |
                (1 << (PostgresParser.TEXT - 467)) |
                (1 << (PostgresParser.TRIM - 467)))) !==
              0) ||
          (((_la - 519) & ~0x1f) === 0 &&
            ((1 << (_la - 519)) &
              ((1 << (PostgresParser.XML_IS_WELL_FORMED - 519)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 519)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 519)) |
                (1 << (PostgresParser.XMLAGG - 519)) |
                (1 << (PostgresParser.XMLCOMMENT - 519)) |
                (1 << (PostgresParser.XMLCONCAT - 519)) |
                (1 << (PostgresParser.XMLELEMENT - 519)) |
                (1 << (PostgresParser.XMLEXISTS - 519)) |
                (1 << (PostgresParser.XMLFOREST - 519)) |
                (1 << (PostgresParser.XMLPI - 519)) |
                (1 << (PostgresParser.XMLROOT - 519)) |
                (1 << (PostgresParser.XMLTABLE - 519)) |
                (1 << (PostgresParser.XPATH - 519)) |
                (1 << (PostgresParser.XPATH_EXISTS - 519)))) !==
              0)
        ) {
          {
            this.state = 714;
            this.vex(0);
          }
        }

        this.state = 722;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 717;
              this.match(PostgresParser.WHEN);
              this.state = 718;
              this.vex(0);
              this.state = 719;
              this.match(PostgresParser.THEN);
              this.state = 720;
              _localctx._vex = this.vex(0);
              _localctx._r.push(_localctx._vex);
            }
          }
          this.state = 724;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (_la === PostgresParser.WHEN);
        this.state = 728;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.ELSE) {
          {
            this.state = 726;
            this.match(PostgresParser.ELSE);
            this.state = 727;
            _localctx._vex = this.vex(0);
            _localctx._r.push(_localctx._vex);
          }
        }

        this.state = 730;
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
        this.state = 732;
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
        this.state = 733;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 734;
        this.vex(0);
        this.state = 735;
        this.match(PostgresParser.AS);
        this.state = 736;
        this.data_type();
        this.state = 737;
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
  public function_call(): Function_callContext {
    let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
    this.enterRule(_localctx, 56, PostgresParser.RULE_function_call);
    let _la: number;
    try {
      this.state = 790;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.Identifier:
        case PostgresParser.QuotedIdentifier:
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
        case PostgresParser.MODE:
        case PostgresParser.REPLACE:
        case PostgresParser.STRIP:
        case PostgresParser.TEXT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 739;
            this.identifier_nontype();
            this.state = 740;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 755;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.OP_CHARS) |
                    (1 << PostgresParser.NUMBER_LITERAL) |
                    (1 << PostgresParser.REAL_NUMBER) |
                    (1 << PostgresParser.DOLLAR_NUMBER) |
                    (1 << PostgresParser.Identifier) |
                    (1 << PostgresParser.QuotedIdentifier) |
                    (1 << PostgresParser.Character_String_Literal) |
                    (1 << PostgresParser.BeginDollarStringConstant) |
                    (1 << PostgresParser.LEFT_PAREN) |
                    (1 << PostgresParser.PLUS) |
                    (1 << PostgresParser.MINUS) |
                    (1 << PostgresParser.MULTIPLY))) !==
                  0) ||
              (((_la - 43) & ~0x1f) === 0 &&
                ((1 << (_la - 43)) &
                  ((1 << (PostgresParser.LESS_LESS - 43)) |
                    (1 << (PostgresParser.GREATER_GREATER - 43)) |
                    (1 << (PostgresParser.HASH_SIGN - 43)) |
                    (1 << (PostgresParser.RECURSIVE - 43)) |
                    (1 << (PostgresParser.BY - 43)) |
                    (1 << (PostgresParser.DISTINCT - 43)) |
                    (1 << (PostgresParser.ALL - 43)) |
                    (1 << (PostgresParser.ANY - 43)) |
                    (1 << (PostgresParser.SOME - 43)) |
                    (1 << (PostgresParser.OPERATOR - 43)) |
                    (1 << (PostgresParser.NULLS - 43)) |
                    (1 << (PostgresParser.FIRST - 43)) |
                    (1 << (PostgresParser.LAST - 43)) |
                    (1 << (PostgresParser.LEFT - 43)) |
                    (1 << (PostgresParser.RIGHT - 43)) |
                    (1 << (PostgresParser.FULL - 43)))) !==
                  0) ||
              (((_la - 75) & ~0x1f) === 0 &&
                ((1 << (_la - 75)) &
                  ((1 << (PostgresParser.INNER - 75)) |
                    (1 << (PostgresParser.OUTER - 75)) |
                    (1 << (PostgresParser.CROSS - 75)) |
                    (1 << (PostgresParser.JOIN - 75)) |
                    (1 << (PostgresParser.ON - 75)) |
                    (1 << (PostgresParser.VALUES - 75)) |
                    (1 << (PostgresParser.NATURAL - 75)) |
                    (1 << (PostgresParser.TABLESAMPLE - 75)) |
                    (1 << (PostgresParser.INTERVAL - 75)) |
                    (1 << (PostgresParser.SECOND - 75)) |
                    (1 << (PostgresParser.MINUTE - 75)) |
                    (1 << (PostgresParser.HOUR - 75)) |
                    (1 << (PostgresParser.DAY - 75)) |
                    (1 << (PostgresParser.MONTH - 75)) |
                    (1 << (PostgresParser.YEAR - 75)) |
                    (1 << (PostgresParser.TREAT - 75)) |
                    (1 << (PostgresParser.CASE - 75)) |
                    (1 << (PostgresParser.NOT - 75)) |
                    (1 << (PostgresParser.IS - 75)))) !==
                  0) ||
              (((_la - 107) & ~0x1f) === 0 &&
                ((1 << (_la - 107)) &
                  ((1 << (PostgresParser.NULL - 107)) |
                    (1 << (PostgresParser.ISNULL - 107)) |
                    (1 << (PostgresParser.NOTNULL - 107)) |
                    (1 << (PostgresParser.TRUE - 107)) |
                    (1 << (PostgresParser.FALSE - 107)) |
                    (1 << (PostgresParser.BETWEEN - 107)) |
                    (1 << (PostgresParser.LIKE - 107)) |
                    (1 << (PostgresParser.ILIKE - 107)) |
                    (1 << (PostgresParser.ARRAY - 107)) |
                    (1 << (PostgresParser.BOOLEAN - 107)) |
                    (1 << (PostgresParser.SMALLINT - 107)) |
                    (1 << (PostgresParser.INT - 107)) |
                    (1 << (PostgresParser.INTEGER - 107)) |
                    (1 << (PostgresParser.BIGINT - 107)) |
                    (1 << (PostgresParser.DEC - 107)) |
                    (1 << (PostgresParser.DECIMAL - 107)) |
                    (1 << (PostgresParser.DOUBLE - 107)) |
                    (1 << (PostgresParser.FLOAT - 107)) |
                    (1 << (PostgresParser.NUMERIC - 107)) |
                    (1 << (PostgresParser.PRECISION - 107)) |
                    (1 << (PostgresParser.REAL - 107)) |
                    (1 << (PostgresParser.BIT - 107)) |
                    (1 << (PostgresParser.VARYING - 107)) |
                    (1 << (PostgresParser.NATIONAL - 107)) |
                    (1 << (PostgresParser.CHARACTER - 107)) |
                    (1 << (PostgresParser.CHAR - 107)) |
                    (1 << (PostgresParser.NCHAR - 107)) |
                    (1 << (PostgresParser.TIME - 107)) |
                    (1 << (PostgresParser.WITHOUT - 107)) |
                    (1 << (PostgresParser.WITHIN - 107)) |
                    (1 << (PostgresParser.ZONE - 107)))) !==
                  0) ||
              (((_la - 139) & ~0x1f) === 0 &&
                ((1 << (_la - 139)) &
                  ((1 << (PostgresParser.TIMESTAMP - 139)) |
                    (1 << (PostgresParser.VARCHAR - 139)) |
                    (1 << (PostgresParser.SETOF - 139)) |
                    (1 << (PostgresParser.OF - 139)) |
                    (1 << (PostgresParser.OVER - 139)) |
                    (1 << (PostgresParser.PARTITION - 139)) |
                    (1 << (PostgresParser.ROWS - 139)) |
                    (1 << (PostgresParser.RANGE - 139)) |
                    (1 << (PostgresParser.GROUPS - 139)) |
                    (1 << (PostgresParser.UNBOUNDED - 139)) |
                    (1 << (PostgresParser.PRECEDING - 139)) |
                    (1 << (PostgresParser.FOLLOWING - 139)) |
                    (1 << (PostgresParser.CURRENT - 139)) |
                    (1 << (PostgresParser.ROW - 139)) |
                    (1 << (PostgresParser.EXCLUDE - 139)) |
                    (1 << (PostgresParser.TIES - 139)) |
                    (1 << (PostgresParser.NO - 139)) |
                    (1 << (PostgresParser.OTHERS - 139)) |
                    (1 << (PostgresParser.ROLLUP - 139)) |
                    (1 << (PostgresParser.GROUPING - 139)) |
                    (1 << (PostgresParser.SETS - 139)) |
                    (1 << (PostgresParser.OVERLAPS - 139)) |
                    (1 << (PostgresParser.AT - 139)) |
                    (1 << (PostgresParser.SIMILAR - 139)) |
                    (1 << (PostgresParser.ESCAPE - 139)))) !==
                  0) ||
              (((_la - 172) & ~0x1f) === 0 &&
                ((1 << (_la - 172)) &
                  ((1 << (PostgresParser.NEXT - 172)) |
                    (1 << (PostgresParser.DOCUMENT - 172)) |
                    (1 << (PostgresParser.UNKNOWN - 172)) |
                    (1 << (PostgresParser.EXISTS - 172)) |
                    (1 << (PostgresParser.VARIADIC - 172)) |
                    (1 << (PostgresParser.FILTER - 172)) |
                    (1 << (PostgresParser.ALIAS - 172)))) !==
                  0) ||
              _la === PostgresParser.COALESCE ||
              (((_la - 267) & ~0x1f) === 0 &&
                ((1 << (_la - 267)) &
                  ((1 << (PostgresParser.EXTRACT - 267)) |
                    (1 << (PostgresParser.FAMILY - 267)) |
                    (1 << (PostgresParser.GREATEST - 267)))) !==
                  0) ||
              _la === PostgresParser.LEAST ||
              _la === PostgresParser.MODE ||
              (((_la - 385) & ~0x1f) === 0 &&
                ((1 << (_la - 385)) &
                  ((1 << (PostgresParser.NULLIF - 385)) |
                    (1 << (PostgresParser.OVERLAY - 385)) |
                    (1 << (PostgresParser.POSITION - 385)))) !==
                  0) ||
              _la === PostgresParser.REPLACE ||
              (((_la - 467) & ~0x1f) === 0 &&
                ((1 << (_la - 467)) &
                  ((1 << (PostgresParser.STRIP - 467)) |
                    (1 << (PostgresParser.SUBSTRING - 467)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 467)) |
                    (1 << (PostgresParser.TEXT - 467)) |
                    (1 << (PostgresParser.TRIM - 467)))) !==
                  0) ||
              (((_la - 519) & ~0x1f) === 0 &&
                ((1 << (_la - 519)) &
                  ((1 << (PostgresParser.XML_IS_WELL_FORMED - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 519)) |
                    (1 << (PostgresParser.XMLAGG - 519)) |
                    (1 << (PostgresParser.XMLCOMMENT - 519)) |
                    (1 << (PostgresParser.XMLCONCAT - 519)) |
                    (1 << (PostgresParser.XMLELEMENT - 519)) |
                    (1 << (PostgresParser.XMLEXISTS - 519)) |
                    (1 << (PostgresParser.XMLFOREST - 519)) |
                    (1 << (PostgresParser.XMLPI - 519)) |
                    (1 << (PostgresParser.XMLROOT - 519)) |
                    (1 << (PostgresParser.XMLTABLE - 519)) |
                    (1 << (PostgresParser.XPATH - 519)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 519)))) !==
                  0)
            ) {
              {
                this.state = 742;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 75, this._ctx)) {
                  case 1:
                    {
                      this.state = 741;
                      this.set_qualifier();
                    }
                    break;
                }
                this.state = 744;
                this.vex_or_named_notation();
                this.state = 749;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PostgresParser.COMMA) {
                  {
                    {
                      this.state = 745;
                      this.match(PostgresParser.COMMA);
                      this.state = 746;
                      this.vex_or_named_notation();
                    }
                  }
                  this.state = 751;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                }
                this.state = 753;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PostgresParser.ORDER) {
                  {
                    this.state = 752;
                    this.orderby_clause();
                  }
                }
              }
            }

            this.state = 757;
            this.match(PostgresParser.RIGHT_PAREN);
            this.state = 764;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
              case 1:
                {
                  this.state = 758;
                  this.match(PostgresParser.WITHIN);
                  this.state = 759;
                  this.match(PostgresParser.GROUP);
                  this.state = 760;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 761;
                  this.orderby_clause();
                  this.state = 762;
                  this.match(PostgresParser.RIGHT_PAREN);
                }
                break;
            }
            this.state = 767;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 80, this._ctx)) {
              case 1:
                {
                  this.state = 766;
                  this.filter_clause();
                }
                break;
            }
            this.state = 774;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 82, this._ctx)) {
              case 1:
                {
                  this.state = 769;
                  this.match(PostgresParser.OVER);
                  this.state = 772;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case PostgresParser.Identifier:
                    case PostgresParser.QuotedIdentifier:
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
                    case PostgresParser.EXTRACT:
                    case PostgresParser.FAMILY:
                    case PostgresParser.GREATEST:
                    case PostgresParser.LEAST:
                    case PostgresParser.MODE:
                    case PostgresParser.NULLIF:
                    case PostgresParser.OVERLAY:
                    case PostgresParser.POSITION:
                    case PostgresParser.REPLACE:
                    case PostgresParser.STRIP:
                    case PostgresParser.SUBSTRING:
                    case PostgresParser.TEXT:
                    case PostgresParser.TRIM:
                    case PostgresParser.XMLCONCAT:
                      {
                        this.state = 770;
                        this.identifier();
                      }
                      break;
                    case PostgresParser.LEFT_PAREN:
                      {
                        this.state = 771;
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
          break;
        case PostgresParser.ROW:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 776;
            this.match(PostgresParser.ROW);
            this.state = 777;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 786;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.OP_CHARS) |
                    (1 << PostgresParser.NUMBER_LITERAL) |
                    (1 << PostgresParser.REAL_NUMBER) |
                    (1 << PostgresParser.DOLLAR_NUMBER) |
                    (1 << PostgresParser.Identifier) |
                    (1 << PostgresParser.QuotedIdentifier) |
                    (1 << PostgresParser.Character_String_Literal) |
                    (1 << PostgresParser.BeginDollarStringConstant) |
                    (1 << PostgresParser.LEFT_PAREN) |
                    (1 << PostgresParser.PLUS) |
                    (1 << PostgresParser.MINUS) |
                    (1 << PostgresParser.MULTIPLY))) !==
                  0) ||
              (((_la - 43) & ~0x1f) === 0 &&
                ((1 << (_la - 43)) &
                  ((1 << (PostgresParser.LESS_LESS - 43)) |
                    (1 << (PostgresParser.GREATER_GREATER - 43)) |
                    (1 << (PostgresParser.HASH_SIGN - 43)) |
                    (1 << (PostgresParser.RECURSIVE - 43)) |
                    (1 << (PostgresParser.BY - 43)) |
                    (1 << (PostgresParser.ALL - 43)) |
                    (1 << (PostgresParser.ANY - 43)) |
                    (1 << (PostgresParser.SOME - 43)) |
                    (1 << (PostgresParser.OPERATOR - 43)) |
                    (1 << (PostgresParser.NULLS - 43)) |
                    (1 << (PostgresParser.FIRST - 43)) |
                    (1 << (PostgresParser.LAST - 43)) |
                    (1 << (PostgresParser.LEFT - 43)) |
                    (1 << (PostgresParser.RIGHT - 43)) |
                    (1 << (PostgresParser.FULL - 43)))) !==
                  0) ||
              (((_la - 75) & ~0x1f) === 0 &&
                ((1 << (_la - 75)) &
                  ((1 << (PostgresParser.INNER - 75)) |
                    (1 << (PostgresParser.OUTER - 75)) |
                    (1 << (PostgresParser.CROSS - 75)) |
                    (1 << (PostgresParser.JOIN - 75)) |
                    (1 << (PostgresParser.ON - 75)) |
                    (1 << (PostgresParser.VALUES - 75)) |
                    (1 << (PostgresParser.NATURAL - 75)) |
                    (1 << (PostgresParser.TABLESAMPLE - 75)) |
                    (1 << (PostgresParser.INTERVAL - 75)) |
                    (1 << (PostgresParser.SECOND - 75)) |
                    (1 << (PostgresParser.MINUTE - 75)) |
                    (1 << (PostgresParser.HOUR - 75)) |
                    (1 << (PostgresParser.DAY - 75)) |
                    (1 << (PostgresParser.MONTH - 75)) |
                    (1 << (PostgresParser.YEAR - 75)) |
                    (1 << (PostgresParser.TREAT - 75)) |
                    (1 << (PostgresParser.CASE - 75)) |
                    (1 << (PostgresParser.NOT - 75)) |
                    (1 << (PostgresParser.IS - 75)))) !==
                  0) ||
              (((_la - 107) & ~0x1f) === 0 &&
                ((1 << (_la - 107)) &
                  ((1 << (PostgresParser.NULL - 107)) |
                    (1 << (PostgresParser.ISNULL - 107)) |
                    (1 << (PostgresParser.NOTNULL - 107)) |
                    (1 << (PostgresParser.TRUE - 107)) |
                    (1 << (PostgresParser.FALSE - 107)) |
                    (1 << (PostgresParser.BETWEEN - 107)) |
                    (1 << (PostgresParser.LIKE - 107)) |
                    (1 << (PostgresParser.ILIKE - 107)) |
                    (1 << (PostgresParser.ARRAY - 107)) |
                    (1 << (PostgresParser.BOOLEAN - 107)) |
                    (1 << (PostgresParser.SMALLINT - 107)) |
                    (1 << (PostgresParser.INT - 107)) |
                    (1 << (PostgresParser.INTEGER - 107)) |
                    (1 << (PostgresParser.BIGINT - 107)) |
                    (1 << (PostgresParser.DEC - 107)) |
                    (1 << (PostgresParser.DECIMAL - 107)) |
                    (1 << (PostgresParser.DOUBLE - 107)) |
                    (1 << (PostgresParser.FLOAT - 107)) |
                    (1 << (PostgresParser.NUMERIC - 107)) |
                    (1 << (PostgresParser.PRECISION - 107)) |
                    (1 << (PostgresParser.REAL - 107)) |
                    (1 << (PostgresParser.BIT - 107)) |
                    (1 << (PostgresParser.VARYING - 107)) |
                    (1 << (PostgresParser.NATIONAL - 107)) |
                    (1 << (PostgresParser.CHARACTER - 107)) |
                    (1 << (PostgresParser.CHAR - 107)) |
                    (1 << (PostgresParser.NCHAR - 107)) |
                    (1 << (PostgresParser.TIME - 107)) |
                    (1 << (PostgresParser.WITHOUT - 107)) |
                    (1 << (PostgresParser.WITHIN - 107)) |
                    (1 << (PostgresParser.ZONE - 107)))) !==
                  0) ||
              (((_la - 139) & ~0x1f) === 0 &&
                ((1 << (_la - 139)) &
                  ((1 << (PostgresParser.TIMESTAMP - 139)) |
                    (1 << (PostgresParser.VARCHAR - 139)) |
                    (1 << (PostgresParser.SETOF - 139)) |
                    (1 << (PostgresParser.OF - 139)) |
                    (1 << (PostgresParser.OVER - 139)) |
                    (1 << (PostgresParser.PARTITION - 139)) |
                    (1 << (PostgresParser.ROWS - 139)) |
                    (1 << (PostgresParser.RANGE - 139)) |
                    (1 << (PostgresParser.GROUPS - 139)) |
                    (1 << (PostgresParser.UNBOUNDED - 139)) |
                    (1 << (PostgresParser.PRECEDING - 139)) |
                    (1 << (PostgresParser.FOLLOWING - 139)) |
                    (1 << (PostgresParser.CURRENT - 139)) |
                    (1 << (PostgresParser.ROW - 139)) |
                    (1 << (PostgresParser.EXCLUDE - 139)) |
                    (1 << (PostgresParser.TIES - 139)) |
                    (1 << (PostgresParser.NO - 139)) |
                    (1 << (PostgresParser.OTHERS - 139)) |
                    (1 << (PostgresParser.ROLLUP - 139)) |
                    (1 << (PostgresParser.GROUPING - 139)) |
                    (1 << (PostgresParser.SETS - 139)) |
                    (1 << (PostgresParser.OVERLAPS - 139)) |
                    (1 << (PostgresParser.AT - 139)) |
                    (1 << (PostgresParser.SIMILAR - 139)) |
                    (1 << (PostgresParser.ESCAPE - 139)))) !==
                  0) ||
              (((_la - 172) & ~0x1f) === 0 &&
                ((1 << (_la - 172)) &
                  ((1 << (PostgresParser.NEXT - 172)) |
                    (1 << (PostgresParser.DOCUMENT - 172)) |
                    (1 << (PostgresParser.UNKNOWN - 172)) |
                    (1 << (PostgresParser.EXISTS - 172)) |
                    (1 << (PostgresParser.FILTER - 172)) |
                    (1 << (PostgresParser.ALIAS - 172)))) !==
                  0) ||
              _la === PostgresParser.COALESCE ||
              (((_la - 267) & ~0x1f) === 0 &&
                ((1 << (_la - 267)) &
                  ((1 << (PostgresParser.EXTRACT - 267)) |
                    (1 << (PostgresParser.FAMILY - 267)) |
                    (1 << (PostgresParser.GREATEST - 267)))) !==
                  0) ||
              _la === PostgresParser.LEAST ||
              _la === PostgresParser.MODE ||
              (((_la - 385) & ~0x1f) === 0 &&
                ((1 << (_la - 385)) &
                  ((1 << (PostgresParser.NULLIF - 385)) |
                    (1 << (PostgresParser.OVERLAY - 385)) |
                    (1 << (PostgresParser.POSITION - 385)))) !==
                  0) ||
              _la === PostgresParser.REPLACE ||
              (((_la - 467) & ~0x1f) === 0 &&
                ((1 << (_la - 467)) &
                  ((1 << (PostgresParser.STRIP - 467)) |
                    (1 << (PostgresParser.SUBSTRING - 467)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 467)) |
                    (1 << (PostgresParser.TEXT - 467)) |
                    (1 << (PostgresParser.TRIM - 467)))) !==
                  0) ||
              (((_la - 519) & ~0x1f) === 0 &&
                ((1 << (_la - 519)) &
                  ((1 << (PostgresParser.XML_IS_WELL_FORMED - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 519)) |
                    (1 << (PostgresParser.XMLAGG - 519)) |
                    (1 << (PostgresParser.XMLCOMMENT - 519)) |
                    (1 << (PostgresParser.XMLCONCAT - 519)) |
                    (1 << (PostgresParser.XMLELEMENT - 519)) |
                    (1 << (PostgresParser.XMLEXISTS - 519)) |
                    (1 << (PostgresParser.XMLFOREST - 519)) |
                    (1 << (PostgresParser.XMLPI - 519)) |
                    (1 << (PostgresParser.XMLROOT - 519)) |
                    (1 << (PostgresParser.XMLTABLE - 519)) |
                    (1 << (PostgresParser.XPATH - 519)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 519)))) !==
                  0)
            ) {
              {
                this.state = 778;
                this.vex(0);
                this.state = 783;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PostgresParser.COMMA) {
                  {
                    {
                      this.state = 779;
                      this.match(PostgresParser.COMMA);
                      this.state = 780;
                      this.vex(0);
                    }
                  }
                  this.state = 785;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                }
              }
            }

            this.state = 788;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;
        case PostgresParser.TABLE_TO_XML:
        case PostgresParser.XML_IS_WELL_FORMED:
        case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
        case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
        case PostgresParser.XMLAGG:
        case PostgresParser.XMLCOMMENT:
        case PostgresParser.XMLCONCAT:
        case PostgresParser.XMLELEMENT:
        case PostgresParser.XMLEXISTS:
        case PostgresParser.XMLFOREST:
        case PostgresParser.XMLPI:
        case PostgresParser.XMLROOT:
        case PostgresParser.XMLTABLE:
        case PostgresParser.XPATH:
        case PostgresParser.XPATH_EXISTS:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 789;
            this.functions_all();
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
  public vex_or_named_notation(): Vex_or_named_notationContext {
    let _localctx: Vex_or_named_notationContext = new Vex_or_named_notationContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 58, PostgresParser.RULE_vex_or_named_notation);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 793;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.VARIADIC) {
          {
            this.state = 792;
            this.match(PostgresParser.VARIADIC);
          }
        }

        this.state = 798;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
          case 1:
            {
              this.state = 795;
              _localctx._argname = this.identifier();
              this.state = 796;
              this.pointer();
            }
            break;
        }
        this.state = 800;
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
    this.enterRule(_localctx, 60, PostgresParser.RULE_pointer);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 802;
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
    this.enterRule(_localctx, 62, PostgresParser.RULE_comparison_mod);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 804;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 59) & ~0x1f) === 0 &&
            ((1 << (_la - 59)) &
              ((1 << (PostgresParser.ALL - 59)) |
                (1 << (PostgresParser.ANY - 59)) |
                (1 << (PostgresParser.SOME - 59)))) !==
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
        this.state = 805;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 808;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 88, this._ctx)) {
          case 1:
            {
              this.state = 806;
              this.vex(0);
            }
            break;

          case 2:
            {
              this.state = 807;
              this.select_stmt_no_parens();
            }
            break;
        }
        this.state = 810;
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
    this.enterRule(_localctx, 64, PostgresParser.RULE_filter_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 812;
        this.match(PostgresParser.FILTER);
        this.state = 813;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 814;
        this.match(PostgresParser.WHERE);
        this.state = 815;
        this.vex(0);
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
  public window_definition(): Window_definitionContext {
    let _localctx: Window_definitionContext = new Window_definitionContext(this._ctx, this.state);
    this.enterRule(_localctx, 66, PostgresParser.RULE_window_definition);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 818;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 820;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
          case 1:
            {
              this.state = 819;
              this.identifier();
            }
            break;
        }
        this.state = 823;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.PARTITION) {
          {
            this.state = 822;
            this.partition_by_columns();
          }
        }

        this.state = 826;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.ORDER) {
          {
            this.state = 825;
            this.orderby_clause();
          }
        }

        this.state = 829;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la - 147) & ~0x1f) === 0 &&
          ((1 << (_la - 147)) &
            ((1 << (PostgresParser.ROWS - 147)) |
              (1 << (PostgresParser.RANGE - 147)) |
              (1 << (PostgresParser.GROUPS - 147)))) !==
            0
        ) {
          {
            this.state = 828;
            this.frame_clause();
          }
        }

        this.state = 831;
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
    this.enterRule(_localctx, 68, PostgresParser.RULE_frame_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 833;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 147) & ~0x1f) === 0 &&
            ((1 << (_la - 147)) &
              ((1 << (PostgresParser.ROWS - 147)) |
                (1 << (PostgresParser.RANGE - 147)) |
                (1 << (PostgresParser.GROUPS - 147)))) !==
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
        this.state = 840;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
          case 1:
            {
              this.state = 834;
              this.frame_bound();
            }
            break;

          case 2:
            {
              this.state = 835;
              this.match(PostgresParser.BETWEEN);
              this.state = 836;
              this.frame_bound();
              this.state = 837;
              this.match(PostgresParser.AND);
              this.state = 838;
              this.frame_bound();
            }
            break;
        }
        this.state = 851;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.EXCLUDE) {
          {
            this.state = 842;
            this.match(PostgresParser.EXCLUDE);
            this.state = 849;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.CURRENT:
                {
                  this.state = 843;
                  this.match(PostgresParser.CURRENT);
                  this.state = 844;
                  this.match(PostgresParser.ROW);
                }
                break;
              case PostgresParser.GROUP:
                {
                  this.state = 845;
                  this.match(PostgresParser.GROUP);
                }
                break;
              case PostgresParser.TIES:
                {
                  this.state = 846;
                  this.match(PostgresParser.TIES);
                }
                break;
              case PostgresParser.NO:
                {
                  this.state = 847;
                  this.match(PostgresParser.NO);
                  this.state = 848;
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
    this.enterRule(_localctx, 70, PostgresParser.RULE_frame_bound);
    let _la: number;
    try {
      this.state = 858;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 96, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 853;
            this.vex(0);
            this.state = 854;
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
            this.state = 856;
            this.match(PostgresParser.CURRENT);
            this.state = 857;
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
    this.enterRule(_localctx, 72, PostgresParser.RULE_array_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 860;
        this.match(PostgresParser.ARRAY);
        this.state = 863;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.LEFT_BRACKET:
            {
              this.state = 861;
              this.array_elements();
            }
            break;
          case PostgresParser.LEFT_PAREN:
            {
              this.state = 862;
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
    this.enterRule(_localctx, 74, PostgresParser.RULE_array_elements);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 865;
        this.match(PostgresParser.LEFT_BRACKET);
        this.state = 880;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << PostgresParser.OP_CHARS) |
                (1 << PostgresParser.NUMBER_LITERAL) |
                (1 << PostgresParser.REAL_NUMBER) |
                (1 << PostgresParser.DOLLAR_NUMBER) |
                (1 << PostgresParser.Identifier) |
                (1 << PostgresParser.QuotedIdentifier) |
                (1 << PostgresParser.Character_String_Literal) |
                (1 << PostgresParser.BeginDollarStringConstant) |
                (1 << PostgresParser.LEFT_PAREN) |
                (1 << PostgresParser.PLUS) |
                (1 << PostgresParser.MINUS) |
                (1 << PostgresParser.MULTIPLY))) !==
              0) ||
          (((_la - 39) & ~0x1f) === 0 &&
            ((1 << (_la - 39)) &
              ((1 << (PostgresParser.LEFT_BRACKET - 39)) |
                (1 << (PostgresParser.LESS_LESS - 39)) |
                (1 << (PostgresParser.GREATER_GREATER - 39)) |
                (1 << (PostgresParser.HASH_SIGN - 39)) |
                (1 << (PostgresParser.RECURSIVE - 39)) |
                (1 << (PostgresParser.BY - 39)) |
                (1 << (PostgresParser.ALL - 39)) |
                (1 << (PostgresParser.ANY - 39)) |
                (1 << (PostgresParser.SOME - 39)) |
                (1 << (PostgresParser.OPERATOR - 39)) |
                (1 << (PostgresParser.NULLS - 39)) |
                (1 << (PostgresParser.FIRST - 39)))) !==
              0) ||
          (((_la - 71) & ~0x1f) === 0 &&
            ((1 << (_la - 71)) &
              ((1 << (PostgresParser.LAST - 71)) |
                (1 << (PostgresParser.LEFT - 71)) |
                (1 << (PostgresParser.RIGHT - 71)) |
                (1 << (PostgresParser.FULL - 71)) |
                (1 << (PostgresParser.INNER - 71)) |
                (1 << (PostgresParser.OUTER - 71)) |
                (1 << (PostgresParser.CROSS - 71)) |
                (1 << (PostgresParser.JOIN - 71)) |
                (1 << (PostgresParser.ON - 71)) |
                (1 << (PostgresParser.VALUES - 71)) |
                (1 << (PostgresParser.NATURAL - 71)) |
                (1 << (PostgresParser.TABLESAMPLE - 71)) |
                (1 << (PostgresParser.INTERVAL - 71)) |
                (1 << (PostgresParser.SECOND - 71)) |
                (1 << (PostgresParser.MINUTE - 71)) |
                (1 << (PostgresParser.HOUR - 71)) |
                (1 << (PostgresParser.DAY - 71)) |
                (1 << (PostgresParser.MONTH - 71)) |
                (1 << (PostgresParser.YEAR - 71)) |
                (1 << (PostgresParser.TREAT - 71)) |
                (1 << (PostgresParser.CASE - 71)))) !==
              0) ||
          (((_la - 105) & ~0x1f) === 0 &&
            ((1 << (_la - 105)) &
              ((1 << (PostgresParser.NOT - 105)) |
                (1 << (PostgresParser.IS - 105)) |
                (1 << (PostgresParser.NULL - 105)) |
                (1 << (PostgresParser.ISNULL - 105)) |
                (1 << (PostgresParser.NOTNULL - 105)) |
                (1 << (PostgresParser.TRUE - 105)) |
                (1 << (PostgresParser.FALSE - 105)) |
                (1 << (PostgresParser.BETWEEN - 105)) |
                (1 << (PostgresParser.LIKE - 105)) |
                (1 << (PostgresParser.ILIKE - 105)) |
                (1 << (PostgresParser.ARRAY - 105)) |
                (1 << (PostgresParser.BOOLEAN - 105)) |
                (1 << (PostgresParser.SMALLINT - 105)) |
                (1 << (PostgresParser.INT - 105)) |
                (1 << (PostgresParser.INTEGER - 105)) |
                (1 << (PostgresParser.BIGINT - 105)) |
                (1 << (PostgresParser.DEC - 105)) |
                (1 << (PostgresParser.DECIMAL - 105)) |
                (1 << (PostgresParser.DOUBLE - 105)) |
                (1 << (PostgresParser.FLOAT - 105)) |
                (1 << (PostgresParser.NUMERIC - 105)) |
                (1 << (PostgresParser.PRECISION - 105)) |
                (1 << (PostgresParser.REAL - 105)) |
                (1 << (PostgresParser.BIT - 105)) |
                (1 << (PostgresParser.VARYING - 105)) |
                (1 << (PostgresParser.NATIONAL - 105)) |
                (1 << (PostgresParser.CHARACTER - 105)) |
                (1 << (PostgresParser.CHAR - 105)) |
                (1 << (PostgresParser.NCHAR - 105)) |
                (1 << (PostgresParser.TIME - 105)) |
                (1 << (PostgresParser.WITHOUT - 105)))) !==
              0) ||
          (((_la - 137) & ~0x1f) === 0 &&
            ((1 << (_la - 137)) &
              ((1 << (PostgresParser.WITHIN - 137)) |
                (1 << (PostgresParser.ZONE - 137)) |
                (1 << (PostgresParser.TIMESTAMP - 137)) |
                (1 << (PostgresParser.VARCHAR - 137)) |
                (1 << (PostgresParser.SETOF - 137)) |
                (1 << (PostgresParser.OF - 137)) |
                (1 << (PostgresParser.OVER - 137)) |
                (1 << (PostgresParser.PARTITION - 137)) |
                (1 << (PostgresParser.ROWS - 137)) |
                (1 << (PostgresParser.RANGE - 137)) |
                (1 << (PostgresParser.GROUPS - 137)) |
                (1 << (PostgresParser.UNBOUNDED - 137)) |
                (1 << (PostgresParser.PRECEDING - 137)) |
                (1 << (PostgresParser.FOLLOWING - 137)) |
                (1 << (PostgresParser.CURRENT - 137)) |
                (1 << (PostgresParser.ROW - 137)) |
                (1 << (PostgresParser.EXCLUDE - 137)) |
                (1 << (PostgresParser.TIES - 137)) |
                (1 << (PostgresParser.NO - 137)) |
                (1 << (PostgresParser.OTHERS - 137)) |
                (1 << (PostgresParser.ROLLUP - 137)) |
                (1 << (PostgresParser.GROUPING - 137)) |
                (1 << (PostgresParser.SETS - 137)) |
                (1 << (PostgresParser.OVERLAPS - 137)) |
                (1 << (PostgresParser.AT - 137)))) !==
              0) ||
          (((_la - 169) & ~0x1f) === 0 &&
            ((1 << (_la - 169)) &
              ((1 << (PostgresParser.SIMILAR - 169)) |
                (1 << (PostgresParser.ESCAPE - 169)) |
                (1 << (PostgresParser.NEXT - 169)) |
                (1 << (PostgresParser.DOCUMENT - 169)) |
                (1 << (PostgresParser.UNKNOWN - 169)) |
                (1 << (PostgresParser.EXISTS - 169)) |
                (1 << (PostgresParser.FILTER - 169)) |
                (1 << (PostgresParser.ALIAS - 169)))) !==
              0) ||
          _la === PostgresParser.COALESCE ||
          (((_la - 267) & ~0x1f) === 0 &&
            ((1 << (_la - 267)) &
              ((1 << (PostgresParser.EXTRACT - 267)) |
                (1 << (PostgresParser.FAMILY - 267)) |
                (1 << (PostgresParser.GREATEST - 267)))) !==
              0) ||
          _la === PostgresParser.LEAST ||
          _la === PostgresParser.MODE ||
          (((_la - 385) & ~0x1f) === 0 &&
            ((1 << (_la - 385)) &
              ((1 << (PostgresParser.NULLIF - 385)) |
                (1 << (PostgresParser.OVERLAY - 385)) |
                (1 << (PostgresParser.POSITION - 385)))) !==
              0) ||
          _la === PostgresParser.REPLACE ||
          (((_la - 467) & ~0x1f) === 0 &&
            ((1 << (_la - 467)) &
              ((1 << (PostgresParser.STRIP - 467)) |
                (1 << (PostgresParser.SUBSTRING - 467)) |
                (1 << (PostgresParser.TABLE_TO_XML - 467)) |
                (1 << (PostgresParser.TEXT - 467)) |
                (1 << (PostgresParser.TRIM - 467)))) !==
              0) ||
          (((_la - 519) & ~0x1f) === 0 &&
            ((1 << (_la - 519)) &
              ((1 << (PostgresParser.XML_IS_WELL_FORMED - 519)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 519)) |
                (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 519)) |
                (1 << (PostgresParser.XMLAGG - 519)) |
                (1 << (PostgresParser.XMLCOMMENT - 519)) |
                (1 << (PostgresParser.XMLCONCAT - 519)) |
                (1 << (PostgresParser.XMLELEMENT - 519)) |
                (1 << (PostgresParser.XMLEXISTS - 519)) |
                (1 << (PostgresParser.XMLFOREST - 519)) |
                (1 << (PostgresParser.XMLPI - 519)) |
                (1 << (PostgresParser.XMLROOT - 519)) |
                (1 << (PostgresParser.XMLTABLE - 519)) |
                (1 << (PostgresParser.XPATH - 519)) |
                (1 << (PostgresParser.XPATH_EXISTS - 519)))) !==
              0)
        ) {
          {
            this.state = 868;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.OP_CHARS:
              case PostgresParser.NUMBER_LITERAL:
              case PostgresParser.REAL_NUMBER:
              case PostgresParser.DOLLAR_NUMBER:
              case PostgresParser.Identifier:
              case PostgresParser.QuotedIdentifier:
              case PostgresParser.Character_String_Literal:
              case PostgresParser.BeginDollarStringConstant:
              case PostgresParser.LEFT_PAREN:
              case PostgresParser.PLUS:
              case PostgresParser.MINUS:
              case PostgresParser.MULTIPLY:
              case PostgresParser.LESS_LESS:
              case PostgresParser.GREATER_GREATER:
              case PostgresParser.HASH_SIGN:
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
              case PostgresParser.COALESCE:
              case PostgresParser.EXTRACT:
              case PostgresParser.FAMILY:
              case PostgresParser.GREATEST:
              case PostgresParser.LEAST:
              case PostgresParser.MODE:
              case PostgresParser.NULLIF:
              case PostgresParser.OVERLAY:
              case PostgresParser.POSITION:
              case PostgresParser.REPLACE:
              case PostgresParser.STRIP:
              case PostgresParser.SUBSTRING:
              case PostgresParser.TABLE_TO_XML:
              case PostgresParser.TEXT:
              case PostgresParser.TRIM:
              case PostgresParser.XML_IS_WELL_FORMED:
              case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
              case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
              case PostgresParser.XMLAGG:
              case PostgresParser.XMLCOMMENT:
              case PostgresParser.XMLCONCAT:
              case PostgresParser.XMLELEMENT:
              case PostgresParser.XMLEXISTS:
              case PostgresParser.XMLFOREST:
              case PostgresParser.XMLPI:
              case PostgresParser.XMLROOT:
              case PostgresParser.XMLTABLE:
              case PostgresParser.XPATH:
              case PostgresParser.XPATH_EXISTS:
                {
                  this.state = 866;
                  this.vex(0);
                }
                break;
              case PostgresParser.LEFT_BRACKET:
                {
                  this.state = 867;
                  this.array_elements();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 877;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 870;
                  this.match(PostgresParser.COMMA);
                  this.state = 873;
                  this._errHandler.sync(this);
                  switch (this._input.LA(1)) {
                    case PostgresParser.OP_CHARS:
                    case PostgresParser.NUMBER_LITERAL:
                    case PostgresParser.REAL_NUMBER:
                    case PostgresParser.DOLLAR_NUMBER:
                    case PostgresParser.Identifier:
                    case PostgresParser.QuotedIdentifier:
                    case PostgresParser.Character_String_Literal:
                    case PostgresParser.BeginDollarStringConstant:
                    case PostgresParser.LEFT_PAREN:
                    case PostgresParser.PLUS:
                    case PostgresParser.MINUS:
                    case PostgresParser.MULTIPLY:
                    case PostgresParser.LESS_LESS:
                    case PostgresParser.GREATER_GREATER:
                    case PostgresParser.HASH_SIGN:
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
                    case PostgresParser.COALESCE:
                    case PostgresParser.EXTRACT:
                    case PostgresParser.FAMILY:
                    case PostgresParser.GREATEST:
                    case PostgresParser.LEAST:
                    case PostgresParser.MODE:
                    case PostgresParser.NULLIF:
                    case PostgresParser.OVERLAY:
                    case PostgresParser.POSITION:
                    case PostgresParser.REPLACE:
                    case PostgresParser.STRIP:
                    case PostgresParser.SUBSTRING:
                    case PostgresParser.TABLE_TO_XML:
                    case PostgresParser.TEXT:
                    case PostgresParser.TRIM:
                    case PostgresParser.XML_IS_WELL_FORMED:
                    case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
                    case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
                    case PostgresParser.XMLAGG:
                    case PostgresParser.XMLCOMMENT:
                    case PostgresParser.XMLCONCAT:
                    case PostgresParser.XMLELEMENT:
                    case PostgresParser.XMLEXISTS:
                    case PostgresParser.XMLFOREST:
                    case PostgresParser.XMLPI:
                    case PostgresParser.XMLROOT:
                    case PostgresParser.XMLTABLE:
                    case PostgresParser.XPATH:
                    case PostgresParser.XPATH_EXISTS:
                      {
                        this.state = 871;
                        this.vex(0);
                      }
                      break;
                    case PostgresParser.LEFT_BRACKET:
                      {
                        this.state = 872;
                        this.array_elements();
                      }
                      break;
                    default:
                      throw new NoViableAltException(this);
                  }
                }
              }
              this.state = 879;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 882;
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
    this.enterRule(_localctx, 76, PostgresParser.RULE_type_coercion);
    try {
      this.state = 893;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 103, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 884;
            this.data_type();
            this.state = 885;
            this.character_string();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 887;
            this.match(PostgresParser.INTERVAL);
            this.state = 888;
            this.character_string();
            this.state = 889;
            this.interval_field();
            this.state = 891;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
              case 1:
                {
                  this.state = 890;
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
  public set_qualifier(): Set_qualifierContext {
    let _localctx: Set_qualifierContext = new Set_qualifierContext(this._ctx, this.state);
    this.enterRule(_localctx, 78, PostgresParser.RULE_set_qualifier);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 895;
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
    this.enterRule(_localctx, 80, PostgresParser.RULE_table_subquery);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 897;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 898;
        this.select_stmt();
        this.state = 899;
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
    this.enterRule(_localctx, 82, PostgresParser.RULE_select_stmt);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 902;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.WITH) {
          {
            this.state = 901;
            this.with_clause();
          }
        }

        this.state = 904;
        this.select_ops(0);
        this.state = 908;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (((_la - 55) & ~0x1f) === 0 &&
            ((1 << (_la - 55)) &
              ((1 << (PostgresParser.ORDER - 55)) |
                (1 << (PostgresParser.LIMIT - 55)) |
                (1 << (PostgresParser.OFFSET - 55)))) !==
              0) ||
          _la === PostgresParser.FETCH
        ) {
          {
            {
              this.state = 905;
              this.after_ops();
            }
          }
          this.state = 910;
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
    this.enterRule(_localctx, 84, PostgresParser.RULE_after_ops);
    let _la: number;
    try {
      this.state = 931;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.ORDER:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 911;
            this.orderby_clause();
          }
          break;
        case PostgresParser.LIMIT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 912;
            this.match(PostgresParser.LIMIT);
            this.state = 915;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
              case 1:
                {
                  this.state = 913;
                  this.vex(0);
                }
                break;

              case 2:
                {
                  this.state = 914;
                  this.match(PostgresParser.ALL);
                }
                break;
            }
          }
          break;
        case PostgresParser.OFFSET:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 917;
            this.match(PostgresParser.OFFSET);
            this.state = 918;
            this.vex(0);
            this.state = 920;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ROWS || _la === PostgresParser.ROW) {
              {
                this.state = 919;
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
            this.state = 922;
            this.match(PostgresParser.FETCH);
            this.state = 923;
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
            this.state = 925;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 108, this._ctx)) {
              case 1:
                {
                  this.state = 924;
                  this.vex(0);
                }
                break;
            }
            this.state = 927;
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
            this.state = 929;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ONLY) {
              {
                this.state = 928;
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
    this.enterRule(_localctx, 86, PostgresParser.RULE_select_stmt_no_parens);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 934;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.WITH) {
          {
            this.state = 933;
            this.with_clause();
          }
        }

        this.state = 936;
        this.select_ops_no_parens();
        this.state = 940;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          (((_la - 55) & ~0x1f) === 0 &&
            ((1 << (_la - 55)) &
              ((1 << (PostgresParser.ORDER - 55)) |
                (1 << (PostgresParser.LIMIT - 55)) |
                (1 << (PostgresParser.OFFSET - 55)))) !==
              0) ||
          _la === PostgresParser.FETCH
        ) {
          {
            {
              this.state = 937;
              this.after_ops();
            }
          }
          this.state = 942;
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
    this.enterRule(_localctx, 88, PostgresParser.RULE_with_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 943;
        this.match(PostgresParser.WITH);
        this.state = 945;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
          case 1:
            {
              this.state = 944;
              this.match(PostgresParser.RECURSIVE);
            }
            break;
        }
        this.state = 947;
        this.with_query();
        this.state = 952;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 948;
              this.match(PostgresParser.COMMA);
              this.state = 949;
              this.with_query();
            }
          }
          this.state = 954;
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
    this.enterRule(_localctx, 90, PostgresParser.RULE_with_query);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 955;
        _localctx._query_name = this.identifier();
        this.state = 967;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.LEFT_PAREN) {
          {
            this.state = 956;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 957;
            _localctx._identifier = this.identifier();
            _localctx._column_name.push(_localctx._identifier);
            this.state = 962;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 958;
                  this.match(PostgresParser.COMMA);
                  this.state = 959;
                  _localctx._identifier = this.identifier();
                  _localctx._column_name.push(_localctx._identifier);
                }
              }
              this.state = 964;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 965;
            this.match(PostgresParser.RIGHT_PAREN);
          }
        }

        this.state = 969;
        this.match(PostgresParser.AS);
        this.state = 970;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 971;
        this.select_stmt();
        this.state = 972;
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
    let _startState: number = 92;
    this.enterRecursionRule(_localctx, 92, PostgresParser.RULE_select_ops, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 980;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.LEFT_PAREN:
            {
              this.state = 975;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 976;
              this.select_stmt();
              this.state = 977;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;
          case PostgresParser.SELECT:
          case PostgresParser.VALUES:
          case PostgresParser.TABLE:
            {
              this.state = 979;
              this.select_primary();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 990;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
                this.state = 982;
                if (!this.precpred(this._ctx, 2)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                }
                this.state = 983;
                _la = this._input.LA(1);
                if (
                  !(
                    ((_la - 62) & ~0x1f) === 0 &&
                    ((1 << (_la - 62)) &
                      ((1 << (PostgresParser.UNION - 62)) |
                        (1 << (PostgresParser.INTERSECT - 62)) |
                        (1 << (PostgresParser.EXCEPT - 62)))) !==
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
                this.state = 985;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PostgresParser.DISTINCT || _la === PostgresParser.ALL) {
                  {
                    this.state = 984;
                    this.set_qualifier();
                  }
                }

                this.state = 987;
                this.select_ops(3);
              }
            }
          }
          this.state = 992;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 119, this._ctx);
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
    this.enterRule(_localctx, 94, PostgresParser.RULE_select_ops_no_parens);
    let _la: number;
    try {
      this.state = 1006;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 122, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 993;
            this.select_ops(0);
            this.state = 994;
            _la = this._input.LA(1);
            if (
              !(
                ((_la - 62) & ~0x1f) === 0 &&
                ((1 << (_la - 62)) &
                  ((1 << (PostgresParser.UNION - 62)) |
                    (1 << (PostgresParser.INTERSECT - 62)) |
                    (1 << (PostgresParser.EXCEPT - 62)))) !==
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
            this.state = 996;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.DISTINCT || _la === PostgresParser.ALL) {
              {
                this.state = 995;
                this.set_qualifier();
              }
            }

            this.state = 1003;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.SELECT:
              case PostgresParser.VALUES:
              case PostgresParser.TABLE:
                {
                  this.state = 998;
                  this.select_primary();
                }
                break;
              case PostgresParser.LEFT_PAREN:
                {
                  this.state = 999;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 1000;
                  this.select_stmt();
                  this.state = 1001;
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
            this.state = 1005;
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
    this.enterRule(_localctx, 96, PostgresParser.RULE_select_primary);
    let _la: number;
    try {
      let _alt: number;
      this.state = 1076;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.SELECT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1008;
            this.match(PostgresParser.SELECT);
            this.state = 1024;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 125, this._ctx)) {
              case 1:
                {
                  this.state = 1009;
                  this.set_qualifier();
                  this.state = 1022;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 124, this._ctx)) {
                    case 1:
                      {
                        this.state = 1010;
                        this.match(PostgresParser.ON);
                        this.state = 1011;
                        this.match(PostgresParser.LEFT_PAREN);
                        this.state = 1012;
                        this.vex(0);
                        this.state = 1017;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PostgresParser.COMMA) {
                          {
                            {
                              this.state = 1013;
                              this.match(PostgresParser.COMMA);
                              this.state = 1014;
                              this.vex(0);
                            }
                          }
                          this.state = 1019;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                        }
                        this.state = 1020;
                        this.match(PostgresParser.RIGHT_PAREN);
                      }
                      break;
                  }
                }
                break;
            }
            this.state = 1027;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 126, this._ctx)) {
              case 1:
                {
                  this.state = 1026;
                  this.select_list();
                }
                break;
            }
            this.state = 1038;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 128, this._ctx)) {
              case 1:
                {
                  this.state = 1029;
                  this.match(PostgresParser.FROM);
                  this.state = 1030;
                  this.from_item(0);
                  this.state = 1035;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                  while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                      {
                        {
                          this.state = 1031;
                          this.match(PostgresParser.COMMA);
                          this.state = 1032;
                          this.from_item(0);
                        }
                      }
                    }
                    this.state = 1037;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
                  }
                }
                break;
            }
            this.state = 1042;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
              case 1:
                {
                  this.state = 1040;
                  this.match(PostgresParser.WHERE);
                  this.state = 1041;
                  this.vex(0);
                }
                break;
            }
            this.state = 1045;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 130, this._ctx)) {
              case 1:
                {
                  this.state = 1044;
                  this.groupby_clause();
                }
                break;
            }
            this.state = 1049;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
              case 1:
                {
                  this.state = 1047;
                  this.match(PostgresParser.HAVING);
                  this.state = 1048;
                  this.vex(0);
                }
                break;
            }
            this.state = 1065;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 133, this._ctx)) {
              case 1:
                {
                  this.state = 1051;
                  this.match(PostgresParser.WINDOW);
                  this.state = 1052;
                  this.identifier();
                  this.state = 1053;
                  this.match(PostgresParser.AS);
                  this.state = 1054;
                  this.window_definition();
                  this.state = 1062;
                  this._errHandler.sync(this);
                  _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                  while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                      {
                        {
                          this.state = 1055;
                          this.match(PostgresParser.COMMA);
                          this.state = 1056;
                          this.identifier();
                          this.state = 1057;
                          this.match(PostgresParser.AS);
                          this.state = 1058;
                          this.window_definition();
                        }
                      }
                    }
                    this.state = 1064;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 132, this._ctx);
                  }
                }
                break;
            }
          }
          break;
        case PostgresParser.TABLE:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1067;
            this.match(PostgresParser.TABLE);
            this.state = 1069;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ONLY) {
              {
                this.state = 1068;
                this.match(PostgresParser.ONLY);
              }
            }

            this.state = 1071;
            this.identifier();
            this.state = 1073;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
              case 1:
                {
                  this.state = 1072;
                  this.match(PostgresParser.MULTIPLY);
                }
                break;
            }
          }
          break;
        case PostgresParser.VALUES:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1075;
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
    this.enterRule(_localctx, 98, PostgresParser.RULE_select_list);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1078;
        this.select_sublist();
        this.state = 1083;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1079;
                this.match(PostgresParser.COMMA);
                this.state = 1080;
                this.select_sublist();
              }
            }
          }
          this.state = 1085;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
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
    this.enterRule(_localctx, 100, PostgresParser.RULE_select_sublist);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1086;
        this.vex(0);
        this.state = 1090;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
          case 1:
            {
              this.state = 1087;
              this.match(PostgresParser.AS);
              this.state = 1088;
              this.col_label();
            }
            break;

          case 2:
            {
              this.state = 1089;
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
    let _startState: number = 102;
    this.enterRecursionRule(_localctx, 102, PostgresParser.RULE_from_item, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1100;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
          case 1:
            {
              this.state = 1093;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 1094;
              this.from_item(0);
              this.state = 1095;
              this.match(PostgresParser.RIGHT_PAREN);
              this.state = 1097;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 139, this._ctx)) {
                case 1:
                  {
                    this.state = 1096;
                    this.alias_clause();
                  }
                  break;
              }
            }
            break;

          case 2:
            {
              this.state = 1099;
              this.from_primary();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 1145;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 1143;
              this._errHandler.sync(this);
              switch (this.interpreter.adaptivePredict(this._input, 147, this._ctx)) {
                case 1:
                  {
                    _localctx = new From_itemContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      PostgresParser.RULE_from_item
                    );
                    this.state = 1102;
                    if (!this.precpred(this._ctx, 5)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 5)');
                    }
                    this.state = 1103;
                    this.match(PostgresParser.CROSS);
                    this.state = 1104;
                    this.match(PostgresParser.JOIN);
                    this.state = 1105;
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
                    this.state = 1106;
                    if (!this.precpred(this._ctx, 2)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 2)');
                    }
                    this.state = 1107;
                    this.match(PostgresParser.NATURAL);
                    this.state = 1113;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.INNER:
                        {
                          this.state = 1108;
                          this.match(PostgresParser.INNER);
                        }
                        break;
                      case PostgresParser.LEFT:
                      case PostgresParser.RIGHT:
                      case PostgresParser.FULL:
                        {
                          this.state = 1109;
                          _la = this._input.LA(1);
                          if (
                            !(
                              ((_la - 72) & ~0x1f) === 0 &&
                              ((1 << (_la - 72)) &
                                ((1 << (PostgresParser.LEFT - 72)) |
                                  (1 << (PostgresParser.RIGHT - 72)) |
                                  (1 << (PostgresParser.FULL - 72)))) !==
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
                          this.state = 1111;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          if (_la === PostgresParser.OUTER) {
                            {
                              this.state = 1110;
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
                    this.state = 1115;
                    this.match(PostgresParser.JOIN);
                    this.state = 1116;
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
                    this.state = 1117;
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)');
                    }
                    this.state = 1123;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.INNER:
                        {
                          this.state = 1118;
                          this.match(PostgresParser.INNER);
                        }
                        break;
                      case PostgresParser.LEFT:
                      case PostgresParser.RIGHT:
                      case PostgresParser.FULL:
                        {
                          this.state = 1119;
                          _la = this._input.LA(1);
                          if (
                            !(
                              ((_la - 72) & ~0x1f) === 0 &&
                              ((1 << (_la - 72)) &
                                ((1 << (PostgresParser.LEFT - 72)) |
                                  (1 << (PostgresParser.RIGHT - 72)) |
                                  (1 << (PostgresParser.FULL - 72)))) !==
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
                          this.state = 1121;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          if (_la === PostgresParser.OUTER) {
                            {
                              this.state = 1120;
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
                    this.state = 1125;
                    this.match(PostgresParser.JOIN);
                    this.state = 1126;
                    this.from_item(0);
                    this.state = 1127;
                    this.match(PostgresParser.ON);
                    this.state = 1128;
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
                    this.state = 1130;
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)');
                    }
                    this.state = 1136;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case PostgresParser.INNER:
                        {
                          this.state = 1131;
                          this.match(PostgresParser.INNER);
                        }
                        break;
                      case PostgresParser.LEFT:
                      case PostgresParser.RIGHT:
                      case PostgresParser.FULL:
                        {
                          this.state = 1132;
                          _la = this._input.LA(1);
                          if (
                            !(
                              ((_la - 72) & ~0x1f) === 0 &&
                              ((1 << (_la - 72)) &
                                ((1 << (PostgresParser.LEFT - 72)) |
                                  (1 << (PostgresParser.RIGHT - 72)) |
                                  (1 << (PostgresParser.FULL - 72)))) !==
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
                          this.state = 1134;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                          if (_la === PostgresParser.OUTER) {
                            {
                              this.state = 1133;
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
                    this.state = 1138;
                    this.match(PostgresParser.JOIN);
                    this.state = 1139;
                    this.from_item(0);
                    this.state = 1140;
                    this.match(PostgresParser.USING);
                    this.state = 1141;
                    this.names_in_parens();
                  }
                  break;
              }
            }
          }
          this.state = 1147;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 148, this._ctx);
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
    this.enterRule(_localctx, 104, PostgresParser.RULE_from_primary);
    let _la: number;
    try {
      this.state = 1258;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 171, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1149;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.ONLY) {
              {
                this.state = 1148;
                this.match(PostgresParser.ONLY);
              }
            }

            this.state = 1151;
            this.identifier();
            this.state = 1153;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
              case 1:
                {
                  this.state = 1152;
                  this.match(PostgresParser.MULTIPLY);
                }
                break;
            }
            this.state = 1156;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 151, this._ctx)) {
              case 1:
                {
                  this.state = 1155;
                  this.alias_clause();
                }
                break;
            }
            this.state = 1174;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
              case 1:
                {
                  this.state = 1158;
                  this.match(PostgresParser.TABLESAMPLE);
                  this.state = 1159;
                  _localctx._method = this.identifier();
                  this.state = 1160;
                  this.match(PostgresParser.LEFT_PAREN);
                  this.state = 1161;
                  this.vex(0);
                  this.state = 1166;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  while (_la === PostgresParser.COMMA) {
                    {
                      {
                        this.state = 1162;
                        this.match(PostgresParser.COMMA);
                        this.state = 1163;
                        this.vex(0);
                      }
                    }
                    this.state = 1168;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                  }
                  this.state = 1169;
                  this.match(PostgresParser.RIGHT_PAREN);
                  this.state = 1172;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 153, this._ctx)) {
                    case 1:
                      {
                        this.state = 1170;
                        this.match(PostgresParser.REPEATABLE);
                        this.state = 1171;
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
            this.table_subquery();
            this.state = 1180;
            this.alias_clause();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.LATERAL) {
              {
                this.state = 1182;
                this.match(PostgresParser.LATERAL);
              }
            }

            this.state = 1185;
            this.function_call();
            this.state = 1188;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 157, this._ctx)) {
              case 1:
                {
                  this.state = 1186;
                  this.match(PostgresParser.WITH);
                  this.state = 1187;
                  this.match(PostgresParser.ORDINALITY);
                }
                break;
            }
            this.state = 1210;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
              case 1:
                {
                  this.state = 1190;
                  this.match(PostgresParser.AS);
                  this.state = 1191;
                  this.from_function_column_def();
                }
                break;

              case 2:
                {
                  this.state = 1193;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1192;
                      this.match(PostgresParser.AS);
                    }
                  }

                  this.state = 1195;
                  _localctx._alias = this.identifier();
                  this.state = 1208;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 160, this._ctx)) {
                    case 1:
                      {
                        this.state = 1196;
                        this.match(PostgresParser.LEFT_PAREN);
                        this.state = 1197;
                        _localctx._identifier = this.identifier();
                        _localctx._column_alias.push(_localctx._identifier);
                        this.state = 1202;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PostgresParser.COMMA) {
                          {
                            {
                              this.state = 1198;
                              this.match(PostgresParser.COMMA);
                              this.state = 1199;
                              _localctx._identifier = this.identifier();
                              _localctx._column_alias.push(_localctx._identifier);
                            }
                          }
                          this.state = 1204;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                        }
                        this.state = 1205;
                        this.match(PostgresParser.RIGHT_PAREN);
                      }
                      break;

                    case 2:
                      {
                        this.state = 1207;
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
            this.state = 1213;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === PostgresParser.LATERAL) {
              {
                this.state = 1212;
                this.match(PostgresParser.LATERAL);
              }
            }

            this.state = 1215;
            this.match(PostgresParser.ROWS);
            this.state = 1216;
            this.match(PostgresParser.FROM);
            this.state = 1217;
            this.match(PostgresParser.LEFT_PAREN);
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

            this.state = 1231;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 1223;
                  this.match(PostgresParser.COMMA);
                  this.state = 1224;
                  this.function_call();
                  this.state = 1227;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1225;
                      this.match(PostgresParser.AS);
                      this.state = 1226;
                      this.from_function_column_def();
                    }
                  }
                }
              }
              this.state = 1233;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1234;
            this.match(PostgresParser.RIGHT_PAREN);
            this.state = 1237;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
              case 1:
                {
                  this.state = 1235;
                  this.match(PostgresParser.WITH);
                  this.state = 1236;
                  this.match(PostgresParser.ORDINALITY);
                }
                break;
            }
            this.state = 1256;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 170, this._ctx)) {
              case 1:
                {
                  this.state = 1240;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.AS) {
                    {
                      this.state = 1239;
                      this.match(PostgresParser.AS);
                    }
                  }

                  this.state = 1242;
                  this.identifier();
                  this.state = 1254;
                  this._errHandler.sync(this);
                  switch (this.interpreter.adaptivePredict(this._input, 169, this._ctx)) {
                    case 1:
                      {
                        this.state = 1243;
                        this.match(PostgresParser.LEFT_PAREN);
                        this.state = 1244;
                        this.identifier();
                        this.state = 1249;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === PostgresParser.COMMA) {
                          {
                            {
                              this.state = 1245;
                              this.match(PostgresParser.COMMA);
                              this.state = 1246;
                              this.identifier();
                            }
                          }
                          this.state = 1251;
                          this._errHandler.sync(this);
                          _la = this._input.LA(1);
                        }
                        this.state = 1252;
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
    this.enterRule(_localctx, 106, PostgresParser.RULE_alias_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1261;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.AS) {
          {
            this.state = 1260;
            this.match(PostgresParser.AS);
          }
        }

        this.state = 1263;
        _localctx._alias = this.identifier();
        this.state = 1275;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 174, this._ctx)) {
          case 1:
            {
              this.state = 1264;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 1265;
              _localctx._identifier = this.identifier();
              _localctx._column_alias.push(_localctx._identifier);
              this.state = 1270;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === PostgresParser.COMMA) {
                {
                  {
                    this.state = 1266;
                    this.match(PostgresParser.COMMA);
                    this.state = 1267;
                    _localctx._identifier = this.identifier();
                    _localctx._column_alias.push(_localctx._identifier);
                  }
                }
                this.state = 1272;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
              this.state = 1273;
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
    this.enterRule(_localctx, 108, PostgresParser.RULE_from_function_column_def);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1277;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1278;
        _localctx._identifier = this.identifier();
        _localctx._column_alias.push(_localctx._identifier);
        this.state = 1279;
        this.data_type();
        this.state = 1286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1280;
              this.match(PostgresParser.COMMA);
              this.state = 1281;
              _localctx._identifier = this.identifier();
              _localctx._column_alias.push(_localctx._identifier);
              this.state = 1282;
              this.data_type();
            }
          }
          this.state = 1288;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1289;
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
    this.enterRule(_localctx, 110, PostgresParser.RULE_groupby_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1291;
        this.match(PostgresParser.GROUP);
        this.state = 1292;
        this.match(PostgresParser.BY);
        this.state = 1293;
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
    this.enterRule(_localctx, 112, PostgresParser.RULE_grouping_element_list);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1295;
        this.grouping_element();
        this.state = 1300;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1296;
                this.match(PostgresParser.COMMA);
                this.state = 1297;
                this.grouping_element();
              }
            }
          }
          this.state = 1302;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 176, this._ctx);
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
    this.enterRule(_localctx, 114, PostgresParser.RULE_grouping_element);
    try {
      this.state = 1316;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 178, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1303;
            this.vex(0);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1304;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1305;
            this.match(PostgresParser.RIGHT_PAREN);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1310;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case PostgresParser.ROLLUP:
                {
                  this.state = 1306;
                  this.match(PostgresParser.ROLLUP);
                }
                break;
              case PostgresParser.CUBE:
                {
                  this.state = 1307;
                  this.match(PostgresParser.CUBE);
                }
                break;
              case PostgresParser.GROUPING:
                {
                  this.state = 1308;
                  this.match(PostgresParser.GROUPING);
                  this.state = 1309;
                  this.match(PostgresParser.SETS);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 1312;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1313;
            this.grouping_element_list();
            this.state = 1314;
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
    this.enterRule(_localctx, 116, PostgresParser.RULE_values_stmt);
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1318;
        this.match(PostgresParser.VALUES);
        this.state = 1319;
        this.values_values();
        this.state = 1324;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            {
              {
                this.state = 1320;
                this.match(PostgresParser.COMMA);
                this.state = 1321;
                this.values_values();
              }
            }
          }
          this.state = 1326;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 179, this._ctx);
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
    this.enterRule(_localctx, 118, PostgresParser.RULE_values_values);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1327;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1330;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.OP_CHARS:
          case PostgresParser.NUMBER_LITERAL:
          case PostgresParser.REAL_NUMBER:
          case PostgresParser.DOLLAR_NUMBER:
          case PostgresParser.Identifier:
          case PostgresParser.QuotedIdentifier:
          case PostgresParser.Character_String_Literal:
          case PostgresParser.BeginDollarStringConstant:
          case PostgresParser.LEFT_PAREN:
          case PostgresParser.PLUS:
          case PostgresParser.MINUS:
          case PostgresParser.MULTIPLY:
          case PostgresParser.LESS_LESS:
          case PostgresParser.GREATER_GREATER:
          case PostgresParser.HASH_SIGN:
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
          case PostgresParser.COALESCE:
          case PostgresParser.EXTRACT:
          case PostgresParser.FAMILY:
          case PostgresParser.GREATEST:
          case PostgresParser.LEAST:
          case PostgresParser.MODE:
          case PostgresParser.NULLIF:
          case PostgresParser.OVERLAY:
          case PostgresParser.POSITION:
          case PostgresParser.REPLACE:
          case PostgresParser.STRIP:
          case PostgresParser.SUBSTRING:
          case PostgresParser.TABLE_TO_XML:
          case PostgresParser.TEXT:
          case PostgresParser.TRIM:
          case PostgresParser.XML_IS_WELL_FORMED:
          case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
          case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
          case PostgresParser.XMLAGG:
          case PostgresParser.XMLCOMMENT:
          case PostgresParser.XMLCONCAT:
          case PostgresParser.XMLELEMENT:
          case PostgresParser.XMLEXISTS:
          case PostgresParser.XMLFOREST:
          case PostgresParser.XMLPI:
          case PostgresParser.XMLROOT:
          case PostgresParser.XMLTABLE:
          case PostgresParser.XPATH:
          case PostgresParser.XPATH_EXISTS:
            {
              this.state = 1328;
              this.vex(0);
            }
            break;
          case PostgresParser.DEFAULT:
            {
              this.state = 1329;
              this.match(PostgresParser.DEFAULT);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1339;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1332;
              this.match(PostgresParser.COMMA);
              this.state = 1335;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case PostgresParser.OP_CHARS:
                case PostgresParser.NUMBER_LITERAL:
                case PostgresParser.REAL_NUMBER:
                case PostgresParser.DOLLAR_NUMBER:
                case PostgresParser.Identifier:
                case PostgresParser.QuotedIdentifier:
                case PostgresParser.Character_String_Literal:
                case PostgresParser.BeginDollarStringConstant:
                case PostgresParser.LEFT_PAREN:
                case PostgresParser.PLUS:
                case PostgresParser.MINUS:
                case PostgresParser.MULTIPLY:
                case PostgresParser.LESS_LESS:
                case PostgresParser.GREATER_GREATER:
                case PostgresParser.HASH_SIGN:
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
                case PostgresParser.COALESCE:
                case PostgresParser.EXTRACT:
                case PostgresParser.FAMILY:
                case PostgresParser.GREATEST:
                case PostgresParser.LEAST:
                case PostgresParser.MODE:
                case PostgresParser.NULLIF:
                case PostgresParser.OVERLAY:
                case PostgresParser.POSITION:
                case PostgresParser.REPLACE:
                case PostgresParser.STRIP:
                case PostgresParser.SUBSTRING:
                case PostgresParser.TABLE_TO_XML:
                case PostgresParser.TEXT:
                case PostgresParser.TRIM:
                case PostgresParser.XML_IS_WELL_FORMED:
                case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
                case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
                case PostgresParser.XMLAGG:
                case PostgresParser.XMLCOMMENT:
                case PostgresParser.XMLCONCAT:
                case PostgresParser.XMLELEMENT:
                case PostgresParser.XMLEXISTS:
                case PostgresParser.XMLFOREST:
                case PostgresParser.XMLPI:
                case PostgresParser.XMLROOT:
                case PostgresParser.XMLTABLE:
                case PostgresParser.XPATH:
                case PostgresParser.XPATH_EXISTS:
                  {
                    this.state = 1333;
                    this.vex(0);
                  }
                  break;
                case PostgresParser.DEFAULT:
                  {
                    this.state = 1334;
                    this.match(PostgresParser.DEFAULT);
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 1341;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1342;
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
    this.enterRule(_localctx, 120, PostgresParser.RULE_orderby_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1344;
        this.match(PostgresParser.ORDER);
        this.state = 1345;
        this.match(PostgresParser.BY);
        this.state = 1346;
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
    this.enterRule(_localctx, 122, PostgresParser.RULE_sort_specifier_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1348;
        this.sort_specifier();
        this.state = 1353;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1349;
              this.match(PostgresParser.COMMA);
              this.state = 1350;
              this.sort_specifier();
            }
          }
          this.state = 1355;
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
    this.enterRule(_localctx, 124, PostgresParser.RULE_sort_specifier);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1356;
        _localctx._key = this.vex(0);
        this.state = 1358;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 184, this._ctx)) {
          case 1:
            {
              this.state = 1357;
              _localctx._opclass = this.identifier();
            }
            break;
        }
        this.state = 1361;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          ((_la - 65) & ~0x1f) === 0 &&
          ((1 << (_la - 65)) &
            ((1 << (PostgresParser.DESC - 65)) |
              (1 << (PostgresParser.ASC - 65)) |
              (1 << (PostgresParser.USING - 65)))) !==
            0
        ) {
          {
            this.state = 1360;
            _localctx._order = this.order_specification();
          }
        }

        this.state = 1364;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.NULLS) {
          {
            this.state = 1363;
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
    this.enterRule(_localctx, 126, PostgresParser.RULE_order_specification);
    try {
      this.state = 1370;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.ASC:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1366;
            this.match(PostgresParser.ASC);
          }
          break;
        case PostgresParser.DESC:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1367;
            this.match(PostgresParser.DESC);
          }
          break;
        case PostgresParser.USING:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1368;
            this.match(PostgresParser.USING);
            this.state = 1369;
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
    this.enterRule(_localctx, 128, PostgresParser.RULE_null_ordering);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1372;
        this.match(PostgresParser.NULLS);
        this.state = 1373;
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
    this.enterRule(_localctx, 130, PostgresParser.RULE_dollar_number);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1375;
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
    this.enterRule(_localctx, 132, PostgresParser.RULE_names_in_parens);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1377;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1378;
        this.names_references();
        this.state = 1379;
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
    this.enterRule(_localctx, 134, PostgresParser.RULE_names_references);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1381;
        this.identifier();
        this.state = 1386;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1382;
              this.match(PostgresParser.COMMA);
              this.state = 1383;
              this.identifier();
            }
          }
          this.state = 1388;
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
    this.enterRule(_localctx, 136, PostgresParser.RULE_op_chars);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1389;
        _la = this._input.LA(1);
        if (
          !(
            _la === PostgresParser.OP_CHARS ||
            (((_la - 43) & ~0x1f) === 0 &&
              ((1 << (_la - 43)) &
                ((1 << (PostgresParser.LESS_LESS - 43)) |
                  (1 << (PostgresParser.GREATER_GREATER - 43)) |
                  (1 << (PostgresParser.HASH_SIGN - 43)))) !==
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
  public partition_by_columns(): Partition_by_columnsContext {
    let _localctx: Partition_by_columnsContext = new Partition_by_columnsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 138, PostgresParser.RULE_partition_by_columns);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1391;
        this.match(PostgresParser.PARTITION);
        this.state = 1392;
        this.match(PostgresParser.BY);
        this.state = 1393;
        this.vex(0);
        this.state = 1398;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1394;
              this.match(PostgresParser.COMMA);
              this.state = 1395;
              this.vex(0);
            }
          }
          this.state = 1400;
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
    this.enterRule(_localctx, 140, PostgresParser.RULE_collate_identifier);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1401;
        this.match(PostgresParser.COLLATE);
        this.state = 1402;
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
    this.enterRule(_localctx, 142, PostgresParser.RULE_indirection);
    let _la: number;
    try {
      this.state = 1419;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 192, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1404;
            this.match(PostgresParser.DOT);
            this.state = 1405;
            this.col_label();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1406;
            this.match(PostgresParser.LEFT_BRACKET);
            this.state = 1407;
            this.vex(0);
            this.state = 1408;
            this.match(PostgresParser.RIGHT_BRACKET);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1410;
            this.match(PostgresParser.LEFT_BRACKET);
            this.state = 1412;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.OP_CHARS) |
                    (1 << PostgresParser.NUMBER_LITERAL) |
                    (1 << PostgresParser.REAL_NUMBER) |
                    (1 << PostgresParser.DOLLAR_NUMBER) |
                    (1 << PostgresParser.Identifier) |
                    (1 << PostgresParser.QuotedIdentifier) |
                    (1 << PostgresParser.Character_String_Literal) |
                    (1 << PostgresParser.BeginDollarStringConstant) |
                    (1 << PostgresParser.LEFT_PAREN) |
                    (1 << PostgresParser.PLUS) |
                    (1 << PostgresParser.MINUS) |
                    (1 << PostgresParser.MULTIPLY))) !==
                  0) ||
              (((_la - 43) & ~0x1f) === 0 &&
                ((1 << (_la - 43)) &
                  ((1 << (PostgresParser.LESS_LESS - 43)) |
                    (1 << (PostgresParser.GREATER_GREATER - 43)) |
                    (1 << (PostgresParser.HASH_SIGN - 43)) |
                    (1 << (PostgresParser.RECURSIVE - 43)) |
                    (1 << (PostgresParser.BY - 43)) |
                    (1 << (PostgresParser.ALL - 43)) |
                    (1 << (PostgresParser.ANY - 43)) |
                    (1 << (PostgresParser.SOME - 43)) |
                    (1 << (PostgresParser.OPERATOR - 43)) |
                    (1 << (PostgresParser.NULLS - 43)) |
                    (1 << (PostgresParser.FIRST - 43)) |
                    (1 << (PostgresParser.LAST - 43)) |
                    (1 << (PostgresParser.LEFT - 43)) |
                    (1 << (PostgresParser.RIGHT - 43)) |
                    (1 << (PostgresParser.FULL - 43)))) !==
                  0) ||
              (((_la - 75) & ~0x1f) === 0 &&
                ((1 << (_la - 75)) &
                  ((1 << (PostgresParser.INNER - 75)) |
                    (1 << (PostgresParser.OUTER - 75)) |
                    (1 << (PostgresParser.CROSS - 75)) |
                    (1 << (PostgresParser.JOIN - 75)) |
                    (1 << (PostgresParser.ON - 75)) |
                    (1 << (PostgresParser.VALUES - 75)) |
                    (1 << (PostgresParser.NATURAL - 75)) |
                    (1 << (PostgresParser.TABLESAMPLE - 75)) |
                    (1 << (PostgresParser.INTERVAL - 75)) |
                    (1 << (PostgresParser.SECOND - 75)) |
                    (1 << (PostgresParser.MINUTE - 75)) |
                    (1 << (PostgresParser.HOUR - 75)) |
                    (1 << (PostgresParser.DAY - 75)) |
                    (1 << (PostgresParser.MONTH - 75)) |
                    (1 << (PostgresParser.YEAR - 75)) |
                    (1 << (PostgresParser.TREAT - 75)) |
                    (1 << (PostgresParser.CASE - 75)) |
                    (1 << (PostgresParser.NOT - 75)) |
                    (1 << (PostgresParser.IS - 75)))) !==
                  0) ||
              (((_la - 107) & ~0x1f) === 0 &&
                ((1 << (_la - 107)) &
                  ((1 << (PostgresParser.NULL - 107)) |
                    (1 << (PostgresParser.ISNULL - 107)) |
                    (1 << (PostgresParser.NOTNULL - 107)) |
                    (1 << (PostgresParser.TRUE - 107)) |
                    (1 << (PostgresParser.FALSE - 107)) |
                    (1 << (PostgresParser.BETWEEN - 107)) |
                    (1 << (PostgresParser.LIKE - 107)) |
                    (1 << (PostgresParser.ILIKE - 107)) |
                    (1 << (PostgresParser.ARRAY - 107)) |
                    (1 << (PostgresParser.BOOLEAN - 107)) |
                    (1 << (PostgresParser.SMALLINT - 107)) |
                    (1 << (PostgresParser.INT - 107)) |
                    (1 << (PostgresParser.INTEGER - 107)) |
                    (1 << (PostgresParser.BIGINT - 107)) |
                    (1 << (PostgresParser.DEC - 107)) |
                    (1 << (PostgresParser.DECIMAL - 107)) |
                    (1 << (PostgresParser.DOUBLE - 107)) |
                    (1 << (PostgresParser.FLOAT - 107)) |
                    (1 << (PostgresParser.NUMERIC - 107)) |
                    (1 << (PostgresParser.PRECISION - 107)) |
                    (1 << (PostgresParser.REAL - 107)) |
                    (1 << (PostgresParser.BIT - 107)) |
                    (1 << (PostgresParser.VARYING - 107)) |
                    (1 << (PostgresParser.NATIONAL - 107)) |
                    (1 << (PostgresParser.CHARACTER - 107)) |
                    (1 << (PostgresParser.CHAR - 107)) |
                    (1 << (PostgresParser.NCHAR - 107)) |
                    (1 << (PostgresParser.TIME - 107)) |
                    (1 << (PostgresParser.WITHOUT - 107)) |
                    (1 << (PostgresParser.WITHIN - 107)) |
                    (1 << (PostgresParser.ZONE - 107)))) !==
                  0) ||
              (((_la - 139) & ~0x1f) === 0 &&
                ((1 << (_la - 139)) &
                  ((1 << (PostgresParser.TIMESTAMP - 139)) |
                    (1 << (PostgresParser.VARCHAR - 139)) |
                    (1 << (PostgresParser.SETOF - 139)) |
                    (1 << (PostgresParser.OF - 139)) |
                    (1 << (PostgresParser.OVER - 139)) |
                    (1 << (PostgresParser.PARTITION - 139)) |
                    (1 << (PostgresParser.ROWS - 139)) |
                    (1 << (PostgresParser.RANGE - 139)) |
                    (1 << (PostgresParser.GROUPS - 139)) |
                    (1 << (PostgresParser.UNBOUNDED - 139)) |
                    (1 << (PostgresParser.PRECEDING - 139)) |
                    (1 << (PostgresParser.FOLLOWING - 139)) |
                    (1 << (PostgresParser.CURRENT - 139)) |
                    (1 << (PostgresParser.ROW - 139)) |
                    (1 << (PostgresParser.EXCLUDE - 139)) |
                    (1 << (PostgresParser.TIES - 139)) |
                    (1 << (PostgresParser.NO - 139)) |
                    (1 << (PostgresParser.OTHERS - 139)) |
                    (1 << (PostgresParser.ROLLUP - 139)) |
                    (1 << (PostgresParser.GROUPING - 139)) |
                    (1 << (PostgresParser.SETS - 139)) |
                    (1 << (PostgresParser.OVERLAPS - 139)) |
                    (1 << (PostgresParser.AT - 139)) |
                    (1 << (PostgresParser.SIMILAR - 139)) |
                    (1 << (PostgresParser.ESCAPE - 139)))) !==
                  0) ||
              (((_la - 172) & ~0x1f) === 0 &&
                ((1 << (_la - 172)) &
                  ((1 << (PostgresParser.NEXT - 172)) |
                    (1 << (PostgresParser.DOCUMENT - 172)) |
                    (1 << (PostgresParser.UNKNOWN - 172)) |
                    (1 << (PostgresParser.EXISTS - 172)) |
                    (1 << (PostgresParser.FILTER - 172)) |
                    (1 << (PostgresParser.ALIAS - 172)))) !==
                  0) ||
              _la === PostgresParser.COALESCE ||
              (((_la - 267) & ~0x1f) === 0 &&
                ((1 << (_la - 267)) &
                  ((1 << (PostgresParser.EXTRACT - 267)) |
                    (1 << (PostgresParser.FAMILY - 267)) |
                    (1 << (PostgresParser.GREATEST - 267)))) !==
                  0) ||
              _la === PostgresParser.LEAST ||
              _la === PostgresParser.MODE ||
              (((_la - 385) & ~0x1f) === 0 &&
                ((1 << (_la - 385)) &
                  ((1 << (PostgresParser.NULLIF - 385)) |
                    (1 << (PostgresParser.OVERLAY - 385)) |
                    (1 << (PostgresParser.POSITION - 385)))) !==
                  0) ||
              _la === PostgresParser.REPLACE ||
              (((_la - 467) & ~0x1f) === 0 &&
                ((1 << (_la - 467)) &
                  ((1 << (PostgresParser.STRIP - 467)) |
                    (1 << (PostgresParser.SUBSTRING - 467)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 467)) |
                    (1 << (PostgresParser.TEXT - 467)) |
                    (1 << (PostgresParser.TRIM - 467)))) !==
                  0) ||
              (((_la - 519) & ~0x1f) === 0 &&
                ((1 << (_la - 519)) &
                  ((1 << (PostgresParser.XML_IS_WELL_FORMED - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 519)) |
                    (1 << (PostgresParser.XMLAGG - 519)) |
                    (1 << (PostgresParser.XMLCOMMENT - 519)) |
                    (1 << (PostgresParser.XMLCONCAT - 519)) |
                    (1 << (PostgresParser.XMLELEMENT - 519)) |
                    (1 << (PostgresParser.XMLEXISTS - 519)) |
                    (1 << (PostgresParser.XMLFOREST - 519)) |
                    (1 << (PostgresParser.XMLPI - 519)) |
                    (1 << (PostgresParser.XMLROOT - 519)) |
                    (1 << (PostgresParser.XMLTABLE - 519)) |
                    (1 << (PostgresParser.XPATH - 519)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 519)))) !==
                  0)
            ) {
              {
                this.state = 1411;
                this.vex(0);
              }
            }

            this.state = 1414;
            this.match(PostgresParser.COLON);
            this.state = 1416;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.OP_CHARS) |
                    (1 << PostgresParser.NUMBER_LITERAL) |
                    (1 << PostgresParser.REAL_NUMBER) |
                    (1 << PostgresParser.DOLLAR_NUMBER) |
                    (1 << PostgresParser.Identifier) |
                    (1 << PostgresParser.QuotedIdentifier) |
                    (1 << PostgresParser.Character_String_Literal) |
                    (1 << PostgresParser.BeginDollarStringConstant) |
                    (1 << PostgresParser.LEFT_PAREN) |
                    (1 << PostgresParser.PLUS) |
                    (1 << PostgresParser.MINUS) |
                    (1 << PostgresParser.MULTIPLY))) !==
                  0) ||
              (((_la - 43) & ~0x1f) === 0 &&
                ((1 << (_la - 43)) &
                  ((1 << (PostgresParser.LESS_LESS - 43)) |
                    (1 << (PostgresParser.GREATER_GREATER - 43)) |
                    (1 << (PostgresParser.HASH_SIGN - 43)) |
                    (1 << (PostgresParser.RECURSIVE - 43)) |
                    (1 << (PostgresParser.BY - 43)) |
                    (1 << (PostgresParser.ALL - 43)) |
                    (1 << (PostgresParser.ANY - 43)) |
                    (1 << (PostgresParser.SOME - 43)) |
                    (1 << (PostgresParser.OPERATOR - 43)) |
                    (1 << (PostgresParser.NULLS - 43)) |
                    (1 << (PostgresParser.FIRST - 43)) |
                    (1 << (PostgresParser.LAST - 43)) |
                    (1 << (PostgresParser.LEFT - 43)) |
                    (1 << (PostgresParser.RIGHT - 43)) |
                    (1 << (PostgresParser.FULL - 43)))) !==
                  0) ||
              (((_la - 75) & ~0x1f) === 0 &&
                ((1 << (_la - 75)) &
                  ((1 << (PostgresParser.INNER - 75)) |
                    (1 << (PostgresParser.OUTER - 75)) |
                    (1 << (PostgresParser.CROSS - 75)) |
                    (1 << (PostgresParser.JOIN - 75)) |
                    (1 << (PostgresParser.ON - 75)) |
                    (1 << (PostgresParser.VALUES - 75)) |
                    (1 << (PostgresParser.NATURAL - 75)) |
                    (1 << (PostgresParser.TABLESAMPLE - 75)) |
                    (1 << (PostgresParser.INTERVAL - 75)) |
                    (1 << (PostgresParser.SECOND - 75)) |
                    (1 << (PostgresParser.MINUTE - 75)) |
                    (1 << (PostgresParser.HOUR - 75)) |
                    (1 << (PostgresParser.DAY - 75)) |
                    (1 << (PostgresParser.MONTH - 75)) |
                    (1 << (PostgresParser.YEAR - 75)) |
                    (1 << (PostgresParser.TREAT - 75)) |
                    (1 << (PostgresParser.CASE - 75)) |
                    (1 << (PostgresParser.NOT - 75)) |
                    (1 << (PostgresParser.IS - 75)))) !==
                  0) ||
              (((_la - 107) & ~0x1f) === 0 &&
                ((1 << (_la - 107)) &
                  ((1 << (PostgresParser.NULL - 107)) |
                    (1 << (PostgresParser.ISNULL - 107)) |
                    (1 << (PostgresParser.NOTNULL - 107)) |
                    (1 << (PostgresParser.TRUE - 107)) |
                    (1 << (PostgresParser.FALSE - 107)) |
                    (1 << (PostgresParser.BETWEEN - 107)) |
                    (1 << (PostgresParser.LIKE - 107)) |
                    (1 << (PostgresParser.ILIKE - 107)) |
                    (1 << (PostgresParser.ARRAY - 107)) |
                    (1 << (PostgresParser.BOOLEAN - 107)) |
                    (1 << (PostgresParser.SMALLINT - 107)) |
                    (1 << (PostgresParser.INT - 107)) |
                    (1 << (PostgresParser.INTEGER - 107)) |
                    (1 << (PostgresParser.BIGINT - 107)) |
                    (1 << (PostgresParser.DEC - 107)) |
                    (1 << (PostgresParser.DECIMAL - 107)) |
                    (1 << (PostgresParser.DOUBLE - 107)) |
                    (1 << (PostgresParser.FLOAT - 107)) |
                    (1 << (PostgresParser.NUMERIC - 107)) |
                    (1 << (PostgresParser.PRECISION - 107)) |
                    (1 << (PostgresParser.REAL - 107)) |
                    (1 << (PostgresParser.BIT - 107)) |
                    (1 << (PostgresParser.VARYING - 107)) |
                    (1 << (PostgresParser.NATIONAL - 107)) |
                    (1 << (PostgresParser.CHARACTER - 107)) |
                    (1 << (PostgresParser.CHAR - 107)) |
                    (1 << (PostgresParser.NCHAR - 107)) |
                    (1 << (PostgresParser.TIME - 107)) |
                    (1 << (PostgresParser.WITHOUT - 107)) |
                    (1 << (PostgresParser.WITHIN - 107)) |
                    (1 << (PostgresParser.ZONE - 107)))) !==
                  0) ||
              (((_la - 139) & ~0x1f) === 0 &&
                ((1 << (_la - 139)) &
                  ((1 << (PostgresParser.TIMESTAMP - 139)) |
                    (1 << (PostgresParser.VARCHAR - 139)) |
                    (1 << (PostgresParser.SETOF - 139)) |
                    (1 << (PostgresParser.OF - 139)) |
                    (1 << (PostgresParser.OVER - 139)) |
                    (1 << (PostgresParser.PARTITION - 139)) |
                    (1 << (PostgresParser.ROWS - 139)) |
                    (1 << (PostgresParser.RANGE - 139)) |
                    (1 << (PostgresParser.GROUPS - 139)) |
                    (1 << (PostgresParser.UNBOUNDED - 139)) |
                    (1 << (PostgresParser.PRECEDING - 139)) |
                    (1 << (PostgresParser.FOLLOWING - 139)) |
                    (1 << (PostgresParser.CURRENT - 139)) |
                    (1 << (PostgresParser.ROW - 139)) |
                    (1 << (PostgresParser.EXCLUDE - 139)) |
                    (1 << (PostgresParser.TIES - 139)) |
                    (1 << (PostgresParser.NO - 139)) |
                    (1 << (PostgresParser.OTHERS - 139)) |
                    (1 << (PostgresParser.ROLLUP - 139)) |
                    (1 << (PostgresParser.GROUPING - 139)) |
                    (1 << (PostgresParser.SETS - 139)) |
                    (1 << (PostgresParser.OVERLAPS - 139)) |
                    (1 << (PostgresParser.AT - 139)) |
                    (1 << (PostgresParser.SIMILAR - 139)) |
                    (1 << (PostgresParser.ESCAPE - 139)))) !==
                  0) ||
              (((_la - 172) & ~0x1f) === 0 &&
                ((1 << (_la - 172)) &
                  ((1 << (PostgresParser.NEXT - 172)) |
                    (1 << (PostgresParser.DOCUMENT - 172)) |
                    (1 << (PostgresParser.UNKNOWN - 172)) |
                    (1 << (PostgresParser.EXISTS - 172)) |
                    (1 << (PostgresParser.FILTER - 172)) |
                    (1 << (PostgresParser.ALIAS - 172)))) !==
                  0) ||
              _la === PostgresParser.COALESCE ||
              (((_la - 267) & ~0x1f) === 0 &&
                ((1 << (_la - 267)) &
                  ((1 << (PostgresParser.EXTRACT - 267)) |
                    (1 << (PostgresParser.FAMILY - 267)) |
                    (1 << (PostgresParser.GREATEST - 267)))) !==
                  0) ||
              _la === PostgresParser.LEAST ||
              _la === PostgresParser.MODE ||
              (((_la - 385) & ~0x1f) === 0 &&
                ((1 << (_la - 385)) &
                  ((1 << (PostgresParser.NULLIF - 385)) |
                    (1 << (PostgresParser.OVERLAY - 385)) |
                    (1 << (PostgresParser.POSITION - 385)))) !==
                  0) ||
              _la === PostgresParser.REPLACE ||
              (((_la - 467) & ~0x1f) === 0 &&
                ((1 << (_la - 467)) &
                  ((1 << (PostgresParser.STRIP - 467)) |
                    (1 << (PostgresParser.SUBSTRING - 467)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 467)) |
                    (1 << (PostgresParser.TEXT - 467)) |
                    (1 << (PostgresParser.TRIM - 467)))) !==
                  0) ||
              (((_la - 519) & ~0x1f) === 0 &&
                ((1 << (_la - 519)) &
                  ((1 << (PostgresParser.XML_IS_WELL_FORMED - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 519)) |
                    (1 << (PostgresParser.XMLAGG - 519)) |
                    (1 << (PostgresParser.XMLCOMMENT - 519)) |
                    (1 << (PostgresParser.XMLCONCAT - 519)) |
                    (1 << (PostgresParser.XMLELEMENT - 519)) |
                    (1 << (PostgresParser.XMLEXISTS - 519)) |
                    (1 << (PostgresParser.XMLFOREST - 519)) |
                    (1 << (PostgresParser.XMLPI - 519)) |
                    (1 << (PostgresParser.XMLROOT - 519)) |
                    (1 << (PostgresParser.XMLTABLE - 519)) |
                    (1 << (PostgresParser.XPATH - 519)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 519)))) !==
                  0)
            ) {
              {
                this.state = 1415;
                this.vex(0);
              }
            }

            this.state = 1418;
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
    this.enterRule(_localctx, 144, PostgresParser.RULE_indirection_list);
    try {
      let _alt: number;
      this.state = 1434;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 195, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1422;
            this._errHandler.sync(this);
            _alt = 1;
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 1421;
                      this.indirection();
                    }
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
              this.state = 1424;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 193, this._ctx);
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1429;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 1426;
                    this.indirection();
                  }
                }
              }
              this.state = 1431;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(this._input, 194, this._ctx);
            }
            this.state = 1432;
            this.match(PostgresParser.DOT);
            this.state = 1433;
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
    this.enterRule(_localctx, 146, PostgresParser.RULE_indirection_var);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1438;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.Identifier:
          case PostgresParser.QuotedIdentifier:
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
          case PostgresParser.EXTRACT:
          case PostgresParser.FAMILY:
          case PostgresParser.GREATEST:
          case PostgresParser.LEAST:
          case PostgresParser.MODE:
          case PostgresParser.NULLIF:
          case PostgresParser.OVERLAY:
          case PostgresParser.POSITION:
          case PostgresParser.REPLACE:
          case PostgresParser.STRIP:
          case PostgresParser.SUBSTRING:
          case PostgresParser.TEXT:
          case PostgresParser.TRIM:
          case PostgresParser.XMLCONCAT:
            {
              this.state = 1436;
              this.identifier();
            }
            break;
          case PostgresParser.DOLLAR_NUMBER:
            {
              this.state = 1437;
              this.dollar_number();
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1441;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 197, this._ctx)) {
          case 1:
            {
              this.state = 1440;
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
    this.enterRule(_localctx, 148, PostgresParser.RULE_all_simple_op);
    try {
      this.state = 1456;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.OP_CHARS:
        case PostgresParser.LESS_LESS:
        case PostgresParser.GREATER_GREATER:
        case PostgresParser.HASH_SIGN:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1443;
            this.op_chars();
          }
          break;
        case PostgresParser.EQUAL:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1444;
            this.match(PostgresParser.EQUAL);
          }
          break;
        case PostgresParser.NOT_EQUAL:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1445;
            this.match(PostgresParser.NOT_EQUAL);
          }
          break;
        case PostgresParser.LTH:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1446;
            this.match(PostgresParser.LTH);
          }
          break;
        case PostgresParser.LEQ:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1447;
            this.match(PostgresParser.LEQ);
          }
          break;
        case PostgresParser.GTH:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1448;
            this.match(PostgresParser.GTH);
          }
          break;
        case PostgresParser.GEQ:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1449;
            this.match(PostgresParser.GEQ);
          }
          break;
        case PostgresParser.PLUS:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1450;
            this.match(PostgresParser.PLUS);
          }
          break;
        case PostgresParser.MINUS:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 1451;
            this.match(PostgresParser.MINUS);
          }
          break;
        case PostgresParser.MULTIPLY:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 1452;
            this.match(PostgresParser.MULTIPLY);
          }
          break;
        case PostgresParser.DIVIDE:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 1453;
            this.match(PostgresParser.DIVIDE);
          }
          break;
        case PostgresParser.MODULAR:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 1454;
            this.match(PostgresParser.MODULAR);
          }
          break;
        case PostgresParser.EXP:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 1455;
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
    this.enterRule(_localctx, 150, PostgresParser.RULE_character_string);
    let _la: number;
    try {
      this.state = 1467;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.BeginDollarStringConstant:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1458;
            this.match(PostgresParser.BeginDollarStringConstant);
            this.state = 1462;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.Text_between_Dollar) {
              {
                {
                  this.state = 1459;
                  this.match(PostgresParser.Text_between_Dollar);
                }
              }
              this.state = 1464;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1465;
            this.match(PostgresParser.EndDollarStringConstant);
          }
          break;
        case PostgresParser.Character_String_Literal:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1466;
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
    this.enterRule(_localctx, 152, PostgresParser.RULE_boolean_value);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1469;
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
  public function_xml_xmlcomment(): Function_xml_xmlcommentContext {
    let _localctx: Function_xml_xmlcommentContext = new Function_xml_xmlcommentContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 154, PostgresParser.RULE_function_xml_xmlcomment);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1471;
        this.match(PostgresParser.XMLCOMMENT);
        this.state = 1472;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1473;
        this.vex(0);
        this.state = 1474;
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
  public function_xml_xmlconcat(): Function_xml_xmlconcatContext {
    let _localctx: Function_xml_xmlconcatContext = new Function_xml_xmlconcatContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 156, PostgresParser.RULE_function_xml_xmlconcat);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1476;
        this.match(PostgresParser.XMLCONCAT);
        this.state = 1477;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1478;
        this.vex(0);
        this.state = 1483;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1479;
              this.match(PostgresParser.COMMA);
              this.state = 1480;
              this.vex(0);
            }
          }
          this.state = 1485;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1486;
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
  public function_xml_xmlelement(): Function_xml_xmlelementContext {
    let _localctx: Function_xml_xmlelementContext = new Function_xml_xmlelementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 158, PostgresParser.RULE_function_xml_xmlelement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1488;
        this.match(PostgresParser.XMLELEMENT);
        this.state = 1489;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1490;
        this.match(PostgresParser.NAME);
        this.state = 1491;
        _localctx._name = this.identifier();
        this.state = 1513;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 205, this._ctx)) {
          case 1:
            {
              this.state = 1492;
              this.match(PostgresParser.COMMA);
              this.state = 1493;
              this.match(PostgresParser.XMLATTRIBUTES);
              this.state = 1494;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 1495;
              this.vex(0);
              this.state = 1498;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PostgresParser.AS) {
                {
                  this.state = 1496;
                  this.match(PostgresParser.AS);
                  this.state = 1497;
                  _localctx._attname = this.identifier();
                }
              }

              this.state = 1508;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === PostgresParser.COMMA) {
                {
                  {
                    this.state = 1500;
                    this.match(PostgresParser.COMMA);
                    this.state = 1501;
                    this.vex(0);
                    this.state = 1504;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.AS) {
                      {
                        this.state = 1502;
                        this.match(PostgresParser.AS);
                        this.state = 1503;
                        _localctx._attname = this.identifier();
                      }
                    }
                  }
                }
                this.state = 1510;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
              this.state = 1511;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;
        }
        this.state = 1519;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1515;
              this.match(PostgresParser.COMMA);
              this.state = 1516;
              this.vex(0);
            }
          }
          this.state = 1521;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1522;
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
  public function_xml_xmlforest(): Function_xml_xmlforestContext {
    let _localctx: Function_xml_xmlforestContext = new Function_xml_xmlforestContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 160, PostgresParser.RULE_function_xml_xmlforest);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1524;
        this.match(PostgresParser.XMLFOREST);
        this.state = 1525;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1526;
        this.vex(0);
        this.state = 1529;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.AS) {
          {
            this.state = 1527;
            this.match(PostgresParser.AS);
            this.state = 1528;
            _localctx._name = this.identifier();
          }
        }

        this.state = 1539;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1531;
              this.match(PostgresParser.COMMA);
              this.state = 1532;
              this.vex(0);
              this.state = 1535;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PostgresParser.AS) {
                {
                  this.state = 1533;
                  this.match(PostgresParser.AS);
                  this.state = 1534;
                  _localctx._name = this.identifier();
                }
              }
            }
          }
          this.state = 1541;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1542;
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
  public function_xml_xmlpi(): Function_xml_xmlpiContext {
    let _localctx: Function_xml_xmlpiContext = new Function_xml_xmlpiContext(this._ctx, this.state);
    this.enterRule(_localctx, 162, PostgresParser.RULE_function_xml_xmlpi);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1544;
        this.match(PostgresParser.XMLPI);
        this.state = 1545;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1546;
        this.match(PostgresParser.NAME);
        this.state = 1547;
        _localctx._name = this.identifier();
        this.state = 1550;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.COMMA) {
          {
            this.state = 1548;
            this.match(PostgresParser.COMMA);
            this.state = 1549;
            this.vex(0);
          }
        }

        this.state = 1552;
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
  public function_xml_xmlroot(): Function_xml_xmlrootContext {
    let _localctx: Function_xml_xmlrootContext = new Function_xml_xmlrootContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 164, PostgresParser.RULE_function_xml_xmlroot);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1554;
        this.match(PostgresParser.XMLROOT);
        this.state = 1555;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1556;
        this.vex(0);
        this.state = 1557;
        this.match(PostgresParser.COMMA);
        this.state = 1558;
        this.match(PostgresParser.VERSION);
        this.state = 1562;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 211, this._ctx)) {
          case 1:
            {
              this.state = 1559;
              this.vex(0);
            }
            break;

          case 2:
            {
              this.state = 1560;
              this.match(PostgresParser.NO);
              this.state = 1561;
              this.match(PostgresParser.VALUE);
            }
            break;
        }
        this.state = 1572;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.COMMA) {
          {
            this.state = 1564;
            this.match(PostgresParser.COMMA);
            this.state = 1565;
            this.match(PostgresParser.STANDALONE);
            this.state = 1570;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 212, this._ctx)) {
              case 1:
                {
                  this.state = 1566;
                  this.match(PostgresParser.YES);
                }
                break;

              case 2:
                {
                  this.state = 1567;
                  this.match(PostgresParser.NO);
                }
                break;

              case 3:
                {
                  this.state = 1568;
                  this.match(PostgresParser.NO);
                  this.state = 1569;
                  this.match(PostgresParser.VALUE);
                }
                break;
            }
          }
        }

        this.state = 1574;
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
  public function_xml_xmlagg(): Function_xml_xmlaggContext {
    let _localctx: Function_xml_xmlaggContext = new Function_xml_xmlaggContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 166, PostgresParser.RULE_function_xml_xmlagg);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1576;
        this.match(PostgresParser.XMLAGG);
        this.state = 1577;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1578;
        this.match(PostgresParser.NAME);
        this.state = 1579;
        _localctx._name = this.identifier();
        this.state = 1601;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 217, this._ctx)) {
          case 1:
            {
              this.state = 1580;
              this.match(PostgresParser.COMMA);
              this.state = 1581;
              this.match(PostgresParser.XMLATTRIBUTES);
              this.state = 1582;
              this.match(PostgresParser.LEFT_PAREN);
              this.state = 1583;
              this.vex(0);
              this.state = 1586;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PostgresParser.AS) {
                {
                  this.state = 1584;
                  this.match(PostgresParser.AS);
                  this.state = 1585;
                  _localctx._attname = this.identifier();
                }
              }

              this.state = 1596;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === PostgresParser.COMMA) {
                {
                  {
                    this.state = 1588;
                    this.match(PostgresParser.COMMA);
                    this.state = 1589;
                    this.vex(0);
                    this.state = 1592;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.AS) {
                      {
                        this.state = 1590;
                        this.match(PostgresParser.AS);
                        this.state = 1591;
                        _localctx._attname = this.identifier();
                      }
                    }
                  }
                }
                this.state = 1598;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
              this.state = 1599;
              this.match(PostgresParser.RIGHT_PAREN);
            }
            break;
        }
        this.state = 1607;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1603;
              this.match(PostgresParser.COMMA);
              this.state = 1604;
              this.vex(0);
            }
          }
          this.state = 1609;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1610;
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
  public function_xml_xmlexists(): Function_xml_xmlexistsContext {
    let _localctx: Function_xml_xmlexistsContext = new Function_xml_xmlexistsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 168, PostgresParser.RULE_function_xml_xmlexists);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1612;
        this.match(PostgresParser.XMLEXISTS);
        this.state = 1613;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1614;
        this.vex(0);
        this.state = 1615;
        this.match(PostgresParser.PASSING);
        this.state = 1618;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 219, this._ctx)) {
          case 1:
            {
              this.state = 1616;
              this.match(PostgresParser.BY);
              this.state = 1617;
              this.match(PostgresParser.REF);
            }
            break;
        }
        this.state = 1620;
        this.vex(0);
        this.state = 1623;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.BY) {
          {
            this.state = 1621;
            this.match(PostgresParser.BY);
            this.state = 1622;
            this.match(PostgresParser.REF);
          }
        }

        this.state = 1625;
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
  public function_xml_xml_is_well_formed(): Function_xml_xml_is_well_formedContext {
    let _localctx: Function_xml_xml_is_well_formedContext =
      new Function_xml_xml_is_well_formedContext(this._ctx, this.state);
    this.enterRule(_localctx, 170, PostgresParser.RULE_function_xml_xml_is_well_formed);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1627;
        this.match(PostgresParser.XML_IS_WELL_FORMED);
        this.state = 1628;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1629;
        this.vex(0);
        this.state = 1630;
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
  public function_xml_xml_is_well_formed_content(): Function_xml_xml_is_well_formed_contentContext {
    let _localctx: Function_xml_xml_is_well_formed_contentContext =
      new Function_xml_xml_is_well_formed_contentContext(this._ctx, this.state);
    this.enterRule(_localctx, 172, PostgresParser.RULE_function_xml_xml_is_well_formed_content);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1632;
        this.match(PostgresParser.XML_IS_WELL_FORMED_CONTENT);
        this.state = 1633;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1634;
        this.vex(0);
        this.state = 1635;
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
  public function_xml_xml_is_well_formed_document(): Function_xml_xml_is_well_formed_documentContext {
    let _localctx: Function_xml_xml_is_well_formed_documentContext =
      new Function_xml_xml_is_well_formed_documentContext(this._ctx, this.state);
    this.enterRule(_localctx, 174, PostgresParser.RULE_function_xml_xml_is_well_formed_document);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1637;
        this.match(PostgresParser.XML_IS_WELL_FORMED_DOCUMENT);
        this.state = 1638;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1639;
        this.vex(0);
        this.state = 1640;
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
  public function_xml_xpath(): Function_xml_xpathContext {
    let _localctx: Function_xml_xpathContext = new Function_xml_xpathContext(this._ctx, this.state);
    this.enterRule(_localctx, 176, PostgresParser.RULE_function_xml_xpath);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1642;
        this.match(PostgresParser.XPATH);
        this.state = 1643;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1644;
        this.vex(0);
        this.state = 1645;
        this.match(PostgresParser.COMMA);
        this.state = 1646;
        this.vex(0);
        this.state = 1659;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.ARRAY) {
          {
            this.state = 1647;
            this.match(PostgresParser.ARRAY);
            this.state = 1648;
            this.match(PostgresParser.LEFT_BRACKET);
            this.state = 1649;
            this.match(PostgresParser.ARRAY);
            this.state = 1650;
            this.match(PostgresParser.LEFT_BRACKET);
            this.state = 1655;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.OP_CHARS) |
                    (1 << PostgresParser.NUMBER_LITERAL) |
                    (1 << PostgresParser.REAL_NUMBER) |
                    (1 << PostgresParser.DOLLAR_NUMBER) |
                    (1 << PostgresParser.Identifier) |
                    (1 << PostgresParser.QuotedIdentifier) |
                    (1 << PostgresParser.Character_String_Literal) |
                    (1 << PostgresParser.BeginDollarStringConstant) |
                    (1 << PostgresParser.LEFT_PAREN) |
                    (1 << PostgresParser.PLUS) |
                    (1 << PostgresParser.MINUS) |
                    (1 << PostgresParser.MULTIPLY))) !==
                  0) ||
              (((_la - 43) & ~0x1f) === 0 &&
                ((1 << (_la - 43)) &
                  ((1 << (PostgresParser.LESS_LESS - 43)) |
                    (1 << (PostgresParser.GREATER_GREATER - 43)) |
                    (1 << (PostgresParser.HASH_SIGN - 43)) |
                    (1 << (PostgresParser.RECURSIVE - 43)) |
                    (1 << (PostgresParser.BY - 43)) |
                    (1 << (PostgresParser.ALL - 43)) |
                    (1 << (PostgresParser.ANY - 43)) |
                    (1 << (PostgresParser.SOME - 43)) |
                    (1 << (PostgresParser.OPERATOR - 43)) |
                    (1 << (PostgresParser.NULLS - 43)) |
                    (1 << (PostgresParser.FIRST - 43)) |
                    (1 << (PostgresParser.LAST - 43)) |
                    (1 << (PostgresParser.LEFT - 43)) |
                    (1 << (PostgresParser.RIGHT - 43)) |
                    (1 << (PostgresParser.FULL - 43)))) !==
                  0) ||
              (((_la - 75) & ~0x1f) === 0 &&
                ((1 << (_la - 75)) &
                  ((1 << (PostgresParser.INNER - 75)) |
                    (1 << (PostgresParser.OUTER - 75)) |
                    (1 << (PostgresParser.CROSS - 75)) |
                    (1 << (PostgresParser.JOIN - 75)) |
                    (1 << (PostgresParser.ON - 75)) |
                    (1 << (PostgresParser.VALUES - 75)) |
                    (1 << (PostgresParser.NATURAL - 75)) |
                    (1 << (PostgresParser.TABLESAMPLE - 75)) |
                    (1 << (PostgresParser.INTERVAL - 75)) |
                    (1 << (PostgresParser.SECOND - 75)) |
                    (1 << (PostgresParser.MINUTE - 75)) |
                    (1 << (PostgresParser.HOUR - 75)) |
                    (1 << (PostgresParser.DAY - 75)) |
                    (1 << (PostgresParser.MONTH - 75)) |
                    (1 << (PostgresParser.YEAR - 75)) |
                    (1 << (PostgresParser.TREAT - 75)) |
                    (1 << (PostgresParser.CASE - 75)) |
                    (1 << (PostgresParser.NOT - 75)) |
                    (1 << (PostgresParser.IS - 75)))) !==
                  0) ||
              (((_la - 107) & ~0x1f) === 0 &&
                ((1 << (_la - 107)) &
                  ((1 << (PostgresParser.NULL - 107)) |
                    (1 << (PostgresParser.ISNULL - 107)) |
                    (1 << (PostgresParser.NOTNULL - 107)) |
                    (1 << (PostgresParser.TRUE - 107)) |
                    (1 << (PostgresParser.FALSE - 107)) |
                    (1 << (PostgresParser.BETWEEN - 107)) |
                    (1 << (PostgresParser.LIKE - 107)) |
                    (1 << (PostgresParser.ILIKE - 107)) |
                    (1 << (PostgresParser.ARRAY - 107)) |
                    (1 << (PostgresParser.BOOLEAN - 107)) |
                    (1 << (PostgresParser.SMALLINT - 107)) |
                    (1 << (PostgresParser.INT - 107)) |
                    (1 << (PostgresParser.INTEGER - 107)) |
                    (1 << (PostgresParser.BIGINT - 107)) |
                    (1 << (PostgresParser.DEC - 107)) |
                    (1 << (PostgresParser.DECIMAL - 107)) |
                    (1 << (PostgresParser.DOUBLE - 107)) |
                    (1 << (PostgresParser.FLOAT - 107)) |
                    (1 << (PostgresParser.NUMERIC - 107)) |
                    (1 << (PostgresParser.PRECISION - 107)) |
                    (1 << (PostgresParser.REAL - 107)) |
                    (1 << (PostgresParser.BIT - 107)) |
                    (1 << (PostgresParser.VARYING - 107)) |
                    (1 << (PostgresParser.NATIONAL - 107)) |
                    (1 << (PostgresParser.CHARACTER - 107)) |
                    (1 << (PostgresParser.CHAR - 107)) |
                    (1 << (PostgresParser.NCHAR - 107)) |
                    (1 << (PostgresParser.TIME - 107)) |
                    (1 << (PostgresParser.WITHOUT - 107)) |
                    (1 << (PostgresParser.WITHIN - 107)) |
                    (1 << (PostgresParser.ZONE - 107)))) !==
                  0) ||
              (((_la - 139) & ~0x1f) === 0 &&
                ((1 << (_la - 139)) &
                  ((1 << (PostgresParser.TIMESTAMP - 139)) |
                    (1 << (PostgresParser.VARCHAR - 139)) |
                    (1 << (PostgresParser.SETOF - 139)) |
                    (1 << (PostgresParser.OF - 139)) |
                    (1 << (PostgresParser.OVER - 139)) |
                    (1 << (PostgresParser.PARTITION - 139)) |
                    (1 << (PostgresParser.ROWS - 139)) |
                    (1 << (PostgresParser.RANGE - 139)) |
                    (1 << (PostgresParser.GROUPS - 139)) |
                    (1 << (PostgresParser.UNBOUNDED - 139)) |
                    (1 << (PostgresParser.PRECEDING - 139)) |
                    (1 << (PostgresParser.FOLLOWING - 139)) |
                    (1 << (PostgresParser.CURRENT - 139)) |
                    (1 << (PostgresParser.ROW - 139)) |
                    (1 << (PostgresParser.EXCLUDE - 139)) |
                    (1 << (PostgresParser.TIES - 139)) |
                    (1 << (PostgresParser.NO - 139)) |
                    (1 << (PostgresParser.OTHERS - 139)) |
                    (1 << (PostgresParser.ROLLUP - 139)) |
                    (1 << (PostgresParser.GROUPING - 139)) |
                    (1 << (PostgresParser.SETS - 139)) |
                    (1 << (PostgresParser.OVERLAPS - 139)) |
                    (1 << (PostgresParser.AT - 139)) |
                    (1 << (PostgresParser.SIMILAR - 139)) |
                    (1 << (PostgresParser.ESCAPE - 139)))) !==
                  0) ||
              (((_la - 172) & ~0x1f) === 0 &&
                ((1 << (_la - 172)) &
                  ((1 << (PostgresParser.NEXT - 172)) |
                    (1 << (PostgresParser.DOCUMENT - 172)) |
                    (1 << (PostgresParser.UNKNOWN - 172)) |
                    (1 << (PostgresParser.EXISTS - 172)) |
                    (1 << (PostgresParser.FILTER - 172)) |
                    (1 << (PostgresParser.ALIAS - 172)))) !==
                  0) ||
              _la === PostgresParser.COALESCE ||
              (((_la - 267) & ~0x1f) === 0 &&
                ((1 << (_la - 267)) &
                  ((1 << (PostgresParser.EXTRACT - 267)) |
                    (1 << (PostgresParser.FAMILY - 267)) |
                    (1 << (PostgresParser.GREATEST - 267)))) !==
                  0) ||
              _la === PostgresParser.LEAST ||
              _la === PostgresParser.MODE ||
              (((_la - 385) & ~0x1f) === 0 &&
                ((1 << (_la - 385)) &
                  ((1 << (PostgresParser.NULLIF - 385)) |
                    (1 << (PostgresParser.OVERLAY - 385)) |
                    (1 << (PostgresParser.POSITION - 385)))) !==
                  0) ||
              _la === PostgresParser.REPLACE ||
              (((_la - 467) & ~0x1f) === 0 &&
                ((1 << (_la - 467)) &
                  ((1 << (PostgresParser.STRIP - 467)) |
                    (1 << (PostgresParser.SUBSTRING - 467)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 467)) |
                    (1 << (PostgresParser.TEXT - 467)) |
                    (1 << (PostgresParser.TRIM - 467)))) !==
                  0) ||
              (((_la - 519) & ~0x1f) === 0 &&
                ((1 << (_la - 519)) &
                  ((1 << (PostgresParser.XML_IS_WELL_FORMED - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 519)) |
                    (1 << (PostgresParser.XMLAGG - 519)) |
                    (1 << (PostgresParser.XMLCOMMENT - 519)) |
                    (1 << (PostgresParser.XMLCONCAT - 519)) |
                    (1 << (PostgresParser.XMLELEMENT - 519)) |
                    (1 << (PostgresParser.XMLEXISTS - 519)) |
                    (1 << (PostgresParser.XMLFOREST - 519)) |
                    (1 << (PostgresParser.XMLPI - 519)) |
                    (1 << (PostgresParser.XMLROOT - 519)) |
                    (1 << (PostgresParser.XMLTABLE - 519)) |
                    (1 << (PostgresParser.XPATH - 519)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 519)))) !==
                  0)
            ) {
              {
                this.state = 1651;
                this.vex(0);
                this.state = 1652;
                this.match(PostgresParser.COMMA);
                this.state = 1653;
                this.vex(0);
              }
            }

            this.state = 1657;
            this.match(PostgresParser.RIGHT_BRACKET);
            this.state = 1658;
            this.match(PostgresParser.RIGHT_BRACKET);
          }
        }

        this.state = 1661;
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
  public function_xml_xpath_exists(): Function_xml_xpath_existsContext {
    let _localctx: Function_xml_xpath_existsContext = new Function_xml_xpath_existsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 178, PostgresParser.RULE_function_xml_xpath_exists);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1663;
        this.match(PostgresParser.XPATH_EXISTS);
        this.state = 1664;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1665;
        this.vex(0);
        this.state = 1666;
        this.match(PostgresParser.COMMA);
        this.state = 1667;
        this.vex(0);
        this.state = 1680;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.ARRAY) {
          {
            this.state = 1668;
            this.match(PostgresParser.ARRAY);
            this.state = 1669;
            this.match(PostgresParser.LEFT_BRACKET);
            this.state = 1670;
            this.match(PostgresParser.ARRAY);
            this.state = 1671;
            this.match(PostgresParser.LEFT_BRACKET);
            this.state = 1676;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << PostgresParser.OP_CHARS) |
                    (1 << PostgresParser.NUMBER_LITERAL) |
                    (1 << PostgresParser.REAL_NUMBER) |
                    (1 << PostgresParser.DOLLAR_NUMBER) |
                    (1 << PostgresParser.Identifier) |
                    (1 << PostgresParser.QuotedIdentifier) |
                    (1 << PostgresParser.Character_String_Literal) |
                    (1 << PostgresParser.BeginDollarStringConstant) |
                    (1 << PostgresParser.LEFT_PAREN) |
                    (1 << PostgresParser.PLUS) |
                    (1 << PostgresParser.MINUS) |
                    (1 << PostgresParser.MULTIPLY))) !==
                  0) ||
              (((_la - 43) & ~0x1f) === 0 &&
                ((1 << (_la - 43)) &
                  ((1 << (PostgresParser.LESS_LESS - 43)) |
                    (1 << (PostgresParser.GREATER_GREATER - 43)) |
                    (1 << (PostgresParser.HASH_SIGN - 43)) |
                    (1 << (PostgresParser.RECURSIVE - 43)) |
                    (1 << (PostgresParser.BY - 43)) |
                    (1 << (PostgresParser.ALL - 43)) |
                    (1 << (PostgresParser.ANY - 43)) |
                    (1 << (PostgresParser.SOME - 43)) |
                    (1 << (PostgresParser.OPERATOR - 43)) |
                    (1 << (PostgresParser.NULLS - 43)) |
                    (1 << (PostgresParser.FIRST - 43)) |
                    (1 << (PostgresParser.LAST - 43)) |
                    (1 << (PostgresParser.LEFT - 43)) |
                    (1 << (PostgresParser.RIGHT - 43)) |
                    (1 << (PostgresParser.FULL - 43)))) !==
                  0) ||
              (((_la - 75) & ~0x1f) === 0 &&
                ((1 << (_la - 75)) &
                  ((1 << (PostgresParser.INNER - 75)) |
                    (1 << (PostgresParser.OUTER - 75)) |
                    (1 << (PostgresParser.CROSS - 75)) |
                    (1 << (PostgresParser.JOIN - 75)) |
                    (1 << (PostgresParser.ON - 75)) |
                    (1 << (PostgresParser.VALUES - 75)) |
                    (1 << (PostgresParser.NATURAL - 75)) |
                    (1 << (PostgresParser.TABLESAMPLE - 75)) |
                    (1 << (PostgresParser.INTERVAL - 75)) |
                    (1 << (PostgresParser.SECOND - 75)) |
                    (1 << (PostgresParser.MINUTE - 75)) |
                    (1 << (PostgresParser.HOUR - 75)) |
                    (1 << (PostgresParser.DAY - 75)) |
                    (1 << (PostgresParser.MONTH - 75)) |
                    (1 << (PostgresParser.YEAR - 75)) |
                    (1 << (PostgresParser.TREAT - 75)) |
                    (1 << (PostgresParser.CASE - 75)) |
                    (1 << (PostgresParser.NOT - 75)) |
                    (1 << (PostgresParser.IS - 75)))) !==
                  0) ||
              (((_la - 107) & ~0x1f) === 0 &&
                ((1 << (_la - 107)) &
                  ((1 << (PostgresParser.NULL - 107)) |
                    (1 << (PostgresParser.ISNULL - 107)) |
                    (1 << (PostgresParser.NOTNULL - 107)) |
                    (1 << (PostgresParser.TRUE - 107)) |
                    (1 << (PostgresParser.FALSE - 107)) |
                    (1 << (PostgresParser.BETWEEN - 107)) |
                    (1 << (PostgresParser.LIKE - 107)) |
                    (1 << (PostgresParser.ILIKE - 107)) |
                    (1 << (PostgresParser.ARRAY - 107)) |
                    (1 << (PostgresParser.BOOLEAN - 107)) |
                    (1 << (PostgresParser.SMALLINT - 107)) |
                    (1 << (PostgresParser.INT - 107)) |
                    (1 << (PostgresParser.INTEGER - 107)) |
                    (1 << (PostgresParser.BIGINT - 107)) |
                    (1 << (PostgresParser.DEC - 107)) |
                    (1 << (PostgresParser.DECIMAL - 107)) |
                    (1 << (PostgresParser.DOUBLE - 107)) |
                    (1 << (PostgresParser.FLOAT - 107)) |
                    (1 << (PostgresParser.NUMERIC - 107)) |
                    (1 << (PostgresParser.PRECISION - 107)) |
                    (1 << (PostgresParser.REAL - 107)) |
                    (1 << (PostgresParser.BIT - 107)) |
                    (1 << (PostgresParser.VARYING - 107)) |
                    (1 << (PostgresParser.NATIONAL - 107)) |
                    (1 << (PostgresParser.CHARACTER - 107)) |
                    (1 << (PostgresParser.CHAR - 107)) |
                    (1 << (PostgresParser.NCHAR - 107)) |
                    (1 << (PostgresParser.TIME - 107)) |
                    (1 << (PostgresParser.WITHOUT - 107)) |
                    (1 << (PostgresParser.WITHIN - 107)) |
                    (1 << (PostgresParser.ZONE - 107)))) !==
                  0) ||
              (((_la - 139) & ~0x1f) === 0 &&
                ((1 << (_la - 139)) &
                  ((1 << (PostgresParser.TIMESTAMP - 139)) |
                    (1 << (PostgresParser.VARCHAR - 139)) |
                    (1 << (PostgresParser.SETOF - 139)) |
                    (1 << (PostgresParser.OF - 139)) |
                    (1 << (PostgresParser.OVER - 139)) |
                    (1 << (PostgresParser.PARTITION - 139)) |
                    (1 << (PostgresParser.ROWS - 139)) |
                    (1 << (PostgresParser.RANGE - 139)) |
                    (1 << (PostgresParser.GROUPS - 139)) |
                    (1 << (PostgresParser.UNBOUNDED - 139)) |
                    (1 << (PostgresParser.PRECEDING - 139)) |
                    (1 << (PostgresParser.FOLLOWING - 139)) |
                    (1 << (PostgresParser.CURRENT - 139)) |
                    (1 << (PostgresParser.ROW - 139)) |
                    (1 << (PostgresParser.EXCLUDE - 139)) |
                    (1 << (PostgresParser.TIES - 139)) |
                    (1 << (PostgresParser.NO - 139)) |
                    (1 << (PostgresParser.OTHERS - 139)) |
                    (1 << (PostgresParser.ROLLUP - 139)) |
                    (1 << (PostgresParser.GROUPING - 139)) |
                    (1 << (PostgresParser.SETS - 139)) |
                    (1 << (PostgresParser.OVERLAPS - 139)) |
                    (1 << (PostgresParser.AT - 139)) |
                    (1 << (PostgresParser.SIMILAR - 139)) |
                    (1 << (PostgresParser.ESCAPE - 139)))) !==
                  0) ||
              (((_la - 172) & ~0x1f) === 0 &&
                ((1 << (_la - 172)) &
                  ((1 << (PostgresParser.NEXT - 172)) |
                    (1 << (PostgresParser.DOCUMENT - 172)) |
                    (1 << (PostgresParser.UNKNOWN - 172)) |
                    (1 << (PostgresParser.EXISTS - 172)) |
                    (1 << (PostgresParser.FILTER - 172)) |
                    (1 << (PostgresParser.ALIAS - 172)))) !==
                  0) ||
              _la === PostgresParser.COALESCE ||
              (((_la - 267) & ~0x1f) === 0 &&
                ((1 << (_la - 267)) &
                  ((1 << (PostgresParser.EXTRACT - 267)) |
                    (1 << (PostgresParser.FAMILY - 267)) |
                    (1 << (PostgresParser.GREATEST - 267)))) !==
                  0) ||
              _la === PostgresParser.LEAST ||
              _la === PostgresParser.MODE ||
              (((_la - 385) & ~0x1f) === 0 &&
                ((1 << (_la - 385)) &
                  ((1 << (PostgresParser.NULLIF - 385)) |
                    (1 << (PostgresParser.OVERLAY - 385)) |
                    (1 << (PostgresParser.POSITION - 385)))) !==
                  0) ||
              _la === PostgresParser.REPLACE ||
              (((_la - 467) & ~0x1f) === 0 &&
                ((1 << (_la - 467)) &
                  ((1 << (PostgresParser.STRIP - 467)) |
                    (1 << (PostgresParser.SUBSTRING - 467)) |
                    (1 << (PostgresParser.TABLE_TO_XML - 467)) |
                    (1 << (PostgresParser.TEXT - 467)) |
                    (1 << (PostgresParser.TRIM - 467)))) !==
                  0) ||
              (((_la - 519) & ~0x1f) === 0 &&
                ((1 << (_la - 519)) &
                  ((1 << (PostgresParser.XML_IS_WELL_FORMED - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_CONTENT - 519)) |
                    (1 << (PostgresParser.XML_IS_WELL_FORMED_DOCUMENT - 519)) |
                    (1 << (PostgresParser.XMLAGG - 519)) |
                    (1 << (PostgresParser.XMLCOMMENT - 519)) |
                    (1 << (PostgresParser.XMLCONCAT - 519)) |
                    (1 << (PostgresParser.XMLELEMENT - 519)) |
                    (1 << (PostgresParser.XMLEXISTS - 519)) |
                    (1 << (PostgresParser.XMLFOREST - 519)) |
                    (1 << (PostgresParser.XMLPI - 519)) |
                    (1 << (PostgresParser.XMLROOT - 519)) |
                    (1 << (PostgresParser.XMLTABLE - 519)) |
                    (1 << (PostgresParser.XPATH - 519)) |
                    (1 << (PostgresParser.XPATH_EXISTS - 519)))) !==
                  0)
            ) {
              {
                this.state = 1672;
                this.vex(0);
                this.state = 1673;
                this.match(PostgresParser.COMMA);
                this.state = 1674;
                this.vex(0);
              }
            }

            this.state = 1678;
            this.match(PostgresParser.RIGHT_BRACKET);
            this.state = 1679;
            this.match(PostgresParser.RIGHT_BRACKET);
          }
        }

        this.state = 1682;
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
  public function_xml_xmltable(): Function_xml_xmltableContext {
    let _localctx: Function_xml_xmltableContext = new Function_xml_xmltableContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 180, PostgresParser.RULE_function_xml_xmltable);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1684;
        this.match(PostgresParser.XMLTABLE);
        this.state = 1685;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1704;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.XMLNAMESPACES) {
          {
            this.state = 1686;
            this.match(PostgresParser.XMLNAMESPACES);
            this.state = 1687;
            this.match(PostgresParser.LEFT_PAREN);
            this.state = 1688;
            this.vex(0);
            this.state = 1689;
            this.match(PostgresParser.AS);
            this.state = 1690;
            _localctx._name = this.identifier();
            this.state = 1698;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === PostgresParser.COMMA) {
              {
                {
                  this.state = 1691;
                  this.match(PostgresParser.COMMA);
                  this.state = 1692;
                  this.vex(0);
                  this.state = 1693;
                  this.match(PostgresParser.AS);
                  this.state = 1694;
                  _localctx._name = this.identifier();
                }
              }
              this.state = 1700;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 1701;
            this.match(PostgresParser.RIGHT_PAREN);
            this.state = 1702;
            this.match(PostgresParser.COMMA);
          }
        }

        this.state = 1706;
        this.vex(0);
        this.state = 1707;
        this.match(PostgresParser.PASSING);
        this.state = 1710;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 227, this._ctx)) {
          case 1:
            {
              this.state = 1708;
              this.match(PostgresParser.BY);
              this.state = 1709;
              this.match(PostgresParser.REF);
            }
            break;
        }
        this.state = 1712;
        this.vex(0);
        this.state = 1715;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === PostgresParser.BY) {
          {
            this.state = 1713;
            this.match(PostgresParser.BY);
            this.state = 1714;
            this.match(PostgresParser.REF);
          }
        }

        this.state = 1717;
        this.match(PostgresParser.COLUMNS);
        this.state = 1718;
        _localctx._name = this.identifier();
        this.state = 1736;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case PostgresParser.Identifier:
          case PostgresParser.QuotedIdentifier:
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
          case PostgresParser.MODE:
          case PostgresParser.REPLACE:
          case PostgresParser.STRIP:
          case PostgresParser.TEXT:
            {
              this.state = 1719;
              this.data_type();
              this.state = 1722;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PostgresParser.PATH) {
                {
                  this.state = 1720;
                  this.match(PostgresParser.PATH);
                  this.state = 1721;
                  this.vex(0);
                }
              }

              this.state = 1726;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PostgresParser.DEFAULT) {
                {
                  this.state = 1724;
                  this.match(PostgresParser.DEFAULT);
                  this.state = 1725;
                  this.vex(0);
                }
              }

              this.state = 1732;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === PostgresParser.NOT || _la === PostgresParser.NULL) {
                {
                  this.state = 1729;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (_la === PostgresParser.NOT) {
                    {
                      this.state = 1728;
                      this.match(PostgresParser.NOT);
                    }
                  }

                  this.state = 1731;
                  this.match(PostgresParser.NULL);
                }
              }
            }
            break;
          case PostgresParser.FOR:
            {
              this.state = 1734;
              this.match(PostgresParser.FOR);
              this.state = 1735;
              this.match(PostgresParser.ORDINALITY);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 1761;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === PostgresParser.COMMA) {
          {
            {
              this.state = 1738;
              this.match(PostgresParser.COMMA);
              this.state = 1739;
              _localctx._name = this.identifier();
              this.state = 1757;
              this._errHandler.sync(this);
              switch (this._input.LA(1)) {
                case PostgresParser.Identifier:
                case PostgresParser.QuotedIdentifier:
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
                case PostgresParser.MODE:
                case PostgresParser.REPLACE:
                case PostgresParser.STRIP:
                case PostgresParser.TEXT:
                  {
                    this.state = 1740;
                    this.data_type();
                    this.state = 1743;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.PATH) {
                      {
                        this.state = 1741;
                        this.match(PostgresParser.PATH);
                        this.state = 1742;
                        this.vex(0);
                      }
                    }

                    this.state = 1747;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.DEFAULT) {
                      {
                        this.state = 1745;
                        this.match(PostgresParser.DEFAULT);
                        this.state = 1746;
                        this.vex(0);
                      }
                    }

                    this.state = 1753;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === PostgresParser.NOT || _la === PostgresParser.NULL) {
                      {
                        this.state = 1750;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === PostgresParser.NOT) {
                          {
                            this.state = 1749;
                            this.match(PostgresParser.NOT);
                          }
                        }

                        this.state = 1752;
                        this.match(PostgresParser.NULL);
                      }
                    }
                  }
                  break;
                case PostgresParser.FOR:
                  {
                    this.state = 1755;
                    this.match(PostgresParser.FOR);
                    this.state = 1756;
                    this.match(PostgresParser.ORDINALITY);
                  }
                  break;
                default:
                  throw new NoViableAltException(this);
              }
            }
          }
          this.state = 1763;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1764;
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
  public function_xml_table_to_xml(): Function_xml_table_to_xmlContext {
    let _localctx: Function_xml_table_to_xmlContext = new Function_xml_table_to_xmlContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 182, PostgresParser.RULE_function_xml_table_to_xml);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1766;
        this.match(PostgresParser.TABLE_TO_XML);
        this.state = 1767;
        this.match(PostgresParser.LEFT_PAREN);
        this.state = 1768;
        this.identifier();
        this.state = 1769;
        this.match(PostgresParser.COMMA);
        this.state = 1770;
        this.boolean_value();
        this.state = 1771;
        this.match(PostgresParser.COMMA);
        this.state = 1772;
        this.boolean_value();
        this.state = 1773;
        this.match(PostgresParser.COMMA);
        this.state = 1774;
        this.vex(0);
        this.state = 1775;
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
  public functions_all(): Functions_allContext {
    let _localctx: Functions_allContext = new Functions_allContext(this._ctx, this.state);
    this.enterRule(_localctx, 184, PostgresParser.RULE_functions_all);
    try {
      this.state = 1792;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case PostgresParser.XMLCOMMENT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1777;
            this.function_xml_xmlcomment();
          }
          break;
        case PostgresParser.XMLCONCAT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1778;
            this.function_xml_xmlconcat();
          }
          break;
        case PostgresParser.XMLELEMENT:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1779;
            this.function_xml_xmlelement();
          }
          break;
        case PostgresParser.XMLFOREST:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1780;
            this.function_xml_xmlforest();
          }
          break;
        case PostgresParser.XMLPI:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1781;
            this.function_xml_xmlpi();
          }
          break;
        case PostgresParser.XMLROOT:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1782;
            this.function_xml_xmlroot();
          }
          break;
        case PostgresParser.XMLAGG:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1783;
            this.function_xml_xmlagg();
          }
          break;
        case PostgresParser.XMLEXISTS:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1784;
            this.function_xml_xmlexists();
          }
          break;
        case PostgresParser.XML_IS_WELL_FORMED:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 1785;
            this.function_xml_xml_is_well_formed();
          }
          break;
        case PostgresParser.XML_IS_WELL_FORMED_CONTENT:
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 1786;
            this.function_xml_xml_is_well_formed_content();
          }
          break;
        case PostgresParser.XML_IS_WELL_FORMED_DOCUMENT:
          this.enterOuterAlt(_localctx, 11);
          {
            this.state = 1787;
            this.function_xml_xml_is_well_formed_document();
          }
          break;
        case PostgresParser.XPATH:
          this.enterOuterAlt(_localctx, 12);
          {
            this.state = 1788;
            this.function_xml_xpath();
          }
          break;
        case PostgresParser.XPATH_EXISTS:
          this.enterOuterAlt(_localctx, 13);
          {
            this.state = 1789;
            this.function_xml_xpath_exists();
          }
          break;
        case PostgresParser.XMLTABLE:
          this.enterOuterAlt(_localctx, 14);
          {
            this.state = 1790;
            this.function_xml_xmltable();
          }
          break;
        case PostgresParser.TABLE_TO_XML:
          this.enterOuterAlt(_localctx, 15);
          {
            this.state = 1791;
            this.function_xml_table_to_xml();
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

      case 46:
        return this.select_ops_sempred(_localctx as Select_opsContext, predIndex);

      case 51:
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
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u021C\u0705\x04' +
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
    'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04' +
    'X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x03\x02\x05\x02' +
    '\xBE\n\x02\x03\x02\x07\x02\xC1\n\x02\f\x02\x0E\x02\xC4\v\x02\x03\x02\x03' +
    '\x02\x06\x02\xC8\n\x02\r\x02\x0E\x02\xC9\x03\x02\x05\x02\xCD\n\x02\x07' +
    '\x02\xCF\n\x02\f\x02\x0E\x02\xD2\v\x02\x03\x02\x03\x02\x03\x03\x03\x03' +
    '\x03\x03\x05\x03\xD9\n\x03\x03\x04\x03\x04\x03\x04\x05\x04\xDE\n\x04\x03' +
    '\x05\x03\x05\x03\x05\x05\x05\xE3\n\x05\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x05\x06\xEA\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03' +
    '\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x07\f\xF9\n\f\f\f\x0E\f\xFC\v\f' +
    '\x03\r\x05\r\xFF\n\r\x03\r\x03\r\x03\r\x05\r\u0104\n\r\x03\r\x06\r\u0107' +
    '\n\r\r\r\x0E\r\u0108\x05\r\u010B\n\r\x03\x0E\x03\x0E\x05\x0E\u010F\n\x0E' +
    '\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0116\n\x0F\x03\x0F\x05' +
    '\x0F\u0119\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u011E\n\x0F\x03\x0F\x03' +
    '\x0F\x05\x0F\u0122\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0128' +
    '\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u012E\n\x0F\x03\x0F\x05' +
    '\x0F\u0131\n\x0F\x03\x0F\x05\x0F\u0134\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0138' +
    '\n\x0F\x03\x0F\x05\x0F\u013B\n\x0F\x03\x0F\x03\x0F\x05\x0F\u013F\n\x0F' +
    '\x03\x0F\x05\x0F\u0142\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0146\n\x0F\x03\x0F' +
    '\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u014C\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05' +
    '\x0F\u0151\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0155\n\x0F\x03\x0F\x03\x0F\x03' +
    '\x0F\x05\x0F\u015A\n\x0F\x03\x0F\x03\x0F\x05\x0F\u015E\n\x0F\x03\x0F\x03' +
    '\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0165\n\x0F\f\x0F\x0E\x0F\u0168\v' +
    '\x0F\x03\x0F\x03\x0F\x05\x0F\u016C\n\x0F\x05\x0F\u016E\n\x0F\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03' +
    '\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u018B' +
    '\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12' +
    '\x05\x12\u0195\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x05\x13\u019E\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x06\x13\u01A4' +
    '\n\x13\r\x13\x0E\x13\u01A5\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01B2\n\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x05\x13\u01C8\n\x13\x03\x13\x03\x13\x05\x13\u01CC\n\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01D4\n\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x13\x05\x13\u01DA\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01DF' +
    '\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u01E5\n\x13\x03\x13\x03' +
    '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05' +
    '\x13\u01F1\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x05\x13\u0205\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03' +
    '\x13\x03\x13\x07\x13\u020D\n\x13\f\x13\x0E\x13\u0210\v\x13\x05\x13\u0212' +
    '\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0219\n\x13\x03' +
    '\x13\x03\x13\x05\x13\u021D\n\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0222' +
    '\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0228\n\x13\x03\x13\x03' +
    '\x13\x03\x13\x03\x13\x05\x13\u022E\n\x13\x03\x13\x03\x13\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0239\n\x13\f\x13\x0E' +
    '\x13\u023C\v\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0243' +
    '\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x06\x14\u0249\n\x14\r\x14\x0E\x14' +
    '\u024A\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14' +
    '\x05\x14\u0255\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x03\x14\x03\x14\x05\x14\u026A\n\x14\x03\x14\x03\x14\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14' +
    '\u0277\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u027D\n\x14\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x05\x14\u0283\n\x14\x03\x14\x03\x14\x03\x14\x03' +
    '\x14\x03\x14\x07\x14\u028A\n\x14\f\x14\x0E\x14\u028D\v\x14\x03\x15\x03' +
    '\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0297\n\x15' +
    '\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16' +
    '\u02A1\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03' +
    '\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03' +
    '\x18\x05\x18\u02B4\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18' +
    '\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02C1\n\x18\x03\x19\x03' +
    '\x19\x03\x19\x05\x19\u02C6\n\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C' +
    '\x03\x1C\x05\x1C\u02CE\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x06' +
    '\x1C\u02D5\n\x1C\r\x1C\x0E\x1C\u02D6\x03\x1C\x03\x1C\x05\x1C\u02DB\n\x1C' +
    '\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D' +
    '\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u02E9\n\x1E\x03\x1E\x03\x1E\x03\x1E\x07' +
    '\x1E\u02EE\n\x1E\f\x1E\x0E\x1E\u02F1\v\x1E\x03\x1E\x05\x1E\u02F4\n\x1E' +
    '\x05\x1E\u02F6\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03' +
    '\x1E\x05\x1E\u02FF\n\x1E\x03\x1E\x05\x1E\u0302\n\x1E\x03\x1E\x03\x1E\x03' +
    '\x1E\x05\x1E\u0307\n\x1E\x05\x1E\u0309\n\x1E\x03\x1E\x03\x1E\x03\x1E\x03' +
    '\x1E\x03\x1E\x07\x1E\u0310\n\x1E\f\x1E\x0E\x1E\u0313\v\x1E\x05\x1E\u0315' +
    '\n\x1E\x03\x1E\x03\x1E\x05\x1E\u0319\n\x1E\x03\x1F\x05\x1F\u031C\n\x1F' +
    '\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0321\n\x1F\x03\x1F\x03\x1F\x03 \x03' +
    ' \x03!\x03!\x03!\x03!\x05!\u032B\n!\x03!\x03!\x03"\x03"\x03"\x03"' +
    '\x03"\x03"\x03#\x03#\x05#\u0337\n#\x03#\x05#\u033A\n#\x03#\x05#\u033D' +
    '\n#\x03#\x05#\u0340\n#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05' +
    '$\u034B\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0354\n$\x05$\u0356' +
    '\n$\x03%\x03%\x03%\x03%\x03%\x05%\u035D\n%\x03&\x03&\x03&\x05&\u0362\n' +
    "&\x03'\x03'\x03'\x05'\u0367\n'\x03'\x03'\x03'\x05'\u036C\n'" +
    "\x07'\u036E\n'\f'\x0E'\u0371\v'\x05'\u0373\n'\x03'\x03'\x03(" +
    '\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u037E\n(\x05(\u0380\n(\x03)\x03)\x03' +
    '*\x03*\x03*\x03*\x03+\x05+\u0389\n+\x03+\x03+\x07+\u038D\n+\f+\x0E+\u0390' +
    '\v+\x03,\x03,\x03,\x03,\x05,\u0396\n,\x03,\x03,\x03,\x05,\u039B\n,\x03' +
    ',\x03,\x03,\x05,\u03A0\n,\x03,\x03,\x05,\u03A4\n,\x05,\u03A6\n,\x03-\x05' +
    '-\u03A9\n-\x03-\x03-\x07-\u03AD\n-\f-\x0E-\u03B0\v-\x03.\x03.\x05.\u03B4' +
    '\n.\x03.\x03.\x03.\x07.\u03B9\n.\f.\x0E.\u03BC\v.\x03/\x03/\x03/\x03/' +
    '\x03/\x07/\u03C3\n/\f/\x0E/\u03C6\v/\x03/\x03/\x05/\u03CA\n/\x03/\x03' +
    '/\x03/\x03/\x03/\x030\x030\x030\x030\x030\x030\x050\u03D7\n0\x030\x03' +
    '0\x030\x050\u03DC\n0\x030\x070\u03DF\n0\f0\x0E0\u03E2\v0\x031\x031\x03' +
    '1\x051\u03E7\n1\x031\x031\x031\x031\x031\x051\u03EE\n1\x031\x051\u03F1' +
    '\n1\x032\x032\x032\x032\x032\x032\x032\x072\u03FA\n2\f2\x0E2\u03FD\v2' +
    '\x032\x032\x052\u0401\n2\x052\u0403\n2\x032\x052\u0406\n2\x032\x032\x03' +
    '2\x032\x072\u040C\n2\f2\x0E2\u040F\v2\x052\u0411\n2\x032\x032\x052\u0415' +
    '\n2\x032\x052\u0418\n2\x032\x032\x052\u041C\n2\x032\x032\x032\x032\x03' +
    '2\x032\x032\x032\x032\x072\u0427\n2\f2\x0E2\u042A\v2\x052\u042C\n2\x03' +
    '2\x032\x052\u0430\n2\x032\x032\x052\u0434\n2\x032\x052\u0437\n2\x033\x03' +
    '3\x033\x073\u043C\n3\f3\x0E3\u043F\v3\x034\x034\x034\x034\x054\u0445\n' +
    '4\x035\x035\x035\x035\x035\x055\u044C\n5\x035\x055\u044F\n5\x035\x035' +
    '\x035\x035\x035\x035\x035\x035\x035\x055\u045A\n5\x055\u045C\n5\x035\x03' +
    '5\x035\x035\x035\x035\x055\u0464\n5\x055\u0466\n5\x035\x035\x035\x035' +
    '\x035\x035\x035\x035\x035\x055\u0471\n5\x055\u0473\n5\x035\x035\x035\x03' +
    '5\x035\x075\u047A\n5\f5\x0E5\u047D\v5\x036\x056\u0480\n6\x036\x036\x05' +
    '6\u0484\n6\x036\x056\u0487\n6\x036\x036\x036\x036\x036\x036\x076\u048F' +
    '\n6\f6\x0E6\u0492\v6\x036\x036\x036\x056\u0497\n6\x056\u0499\n6\x036\x05' +
    '6\u049C\n6\x036\x036\x036\x036\x056\u04A2\n6\x036\x036\x036\x056\u04A7' +
    '\n6\x036\x036\x036\x056\u04AC\n6\x036\x036\x036\x036\x036\x076\u04B3\n' +
    '6\f6\x0E6\u04B6\v6\x036\x036\x036\x056\u04BB\n6\x056\u04BD\n6\x036\x05' +
    '6\u04C0\n6\x036\x036\x036\x036\x036\x036\x056\u04C8\n6\x036\x036\x036' +
    '\x036\x056\u04CE\n6\x076\u04D0\n6\f6\x0E6\u04D3\v6\x036\x036\x036\x05' +
    '6\u04D8\n6\x036\x056\u04DB\n6\x036\x036\x036\x036\x036\x076\u04E2\n6\f' +
    '6\x0E6\u04E5\v6\x036\x036\x056\u04E9\n6\x056\u04EB\n6\x056\u04ED\n6\x03' +
    '7\x057\u04F0\n7\x037\x037\x037\x037\x037\x077\u04F7\n7\f7\x0E7\u04FA\v' +
    '7\x037\x037\x057\u04FE\n7\x038\x038\x038\x038\x038\x038\x038\x078\u0507' +
    '\n8\f8\x0E8\u050A\v8\x038\x038\x039\x039\x039\x039\x03:\x03:\x03:\x07' +
    ':\u0515\n:\f:\x0E:\u0518\v:\x03;\x03;\x03;\x03;\x03;\x03;\x03;\x05;\u0521' +
    '\n;\x03;\x03;\x03;\x03;\x05;\u0527\n;\x03<\x03<\x03<\x03<\x07<\u052D\n' +
    '<\f<\x0E<\u0530\v<\x03=\x03=\x03=\x05=\u0535\n=\x03=\x03=\x03=\x05=\u053A' +
    '\n=\x07=\u053C\n=\f=\x0E=\u053F\v=\x03=\x03=\x03>\x03>\x03>\x03>\x03?' +
    '\x03?\x03?\x07?\u054A\n?\f?\x0E?\u054D\v?\x03@\x03@\x05@\u0551\n@\x03' +
    '@\x05@\u0554\n@\x03@\x05@\u0557\n@\x03A\x03A\x03A\x03A\x05A\u055D\nA\x03' +
    'B\x03B\x03B\x03C\x03C\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x07E\u056B\n' +
    'E\fE\x0EE\u056E\vE\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x07G\u0577\nG\f' +
    'G\x0EG\u057A\vG\x03H\x03H\x03H\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03' +
    'I\x05I\u0587\nI\x03I\x03I\x05I\u058B\nI\x03I\x05I\u058E\nI\x03J\x06J\u0591' +
    '\nJ\rJ\x0EJ\u0592\x03J\x07J\u0596\nJ\fJ\x0EJ\u0599\vJ\x03J\x03J\x05J\u059D' +
    '\nJ\x03K\x03K\x05K\u05A1\nK\x03K\x05K\u05A4\nK\x03L\x03L\x03L\x03L\x03' +
    'L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u05B3\nL\x03M\x03M\x07' +
    'M\u05B7\nM\fM\x0EM\u05BA\vM\x03M\x03M\x05M\u05BE\nM\x03N\x03N\x03O\x03' +
    'O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x07P\u05CC\nP\fP\x0EP\u05CF' +
    '\vP\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u05DD' +
    '\nQ\x03Q\x03Q\x03Q\x03Q\x05Q\u05E3\nQ\x07Q\u05E5\nQ\fQ\x0EQ\u05E8\vQ\x03' +
    'Q\x03Q\x05Q\u05EC\nQ\x03Q\x03Q\x07Q\u05F0\nQ\fQ\x0EQ\u05F3\vQ\x03Q\x03' +
    'Q\x03R\x03R\x03R\x03R\x03R\x05R\u05FC\nR\x03R\x03R\x03R\x03R\x05R\u0602' +
    '\nR\x07R\u0604\nR\fR\x0ER\u0607\vR\x03R\x03R\x03S\x03S\x03S\x03S\x03S' +
    '\x03S\x05S\u0611\nS\x03S\x03S\x03T\x03T\x03T\x03T\x03T\x03T\x03T\x03T' +
    '\x05T\u061D\nT\x03T\x03T\x03T\x03T\x03T\x03T\x05T\u0625\nT\x05T\u0627' +
    '\nT\x03T\x03T\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x03U\x05U\u0635' +
    '\nU\x03U\x03U\x03U\x03U\x05U\u063B\nU\x07U\u063D\nU\fU\x0EU\u0640\vU\x03' +
    'U\x03U\x05U\u0644\nU\x03U\x03U\x07U\u0648\nU\fU\x0EU\u064B\vU\x03U\x03' +
    'U\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0655\nV\x03V\x03V\x03V\x05V\u065A' +
    '\nV\x03V\x03V\x03W\x03W\x03W\x03W\x03W\x03X\x03X\x03X\x03X\x03X\x03Y\x03' +
    'Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03' +
    'Z\x03Z\x03Z\x05Z\u067A\nZ\x03Z\x03Z\x05Z\u067E\nZ\x03Z\x03Z\x03[\x03[' +
    '\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u068F\n[' +
    '\x03[\x03[\x05[\u0693\n[\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\' +
    '\x03\\\x03\\\x03\\\x03\\\x03\\\x03\\\x07\\\u06A3\n\\\f\\\x0E\\\u06A6\v' +
    '\\\x03\\\x03\\\x03\\\x05\\\u06AB\n\\\x03\\\x03\\\x03\\\x03\\\x05\\\u06B1' +
    '\n\\\x03\\\x03\\\x03\\\x05\\\u06B6\n\\\x03\\\x03\\\x03\\\x03\\\x03\\\x05' +
    '\\\u06BD\n\\\x03\\\x03\\\x05\\\u06C1\n\\\x03\\\x05\\\u06C4\n\\\x03\\\x05' +
    '\\\u06C7\n\\\x03\\\x03\\\x05\\\u06CB\n\\\x03\\\x03\\\x03\\\x03\\\x03\\' +
    '\x05\\\u06D2\n\\\x03\\\x03\\\x05\\\u06D6\n\\\x03\\\x05\\\u06D9\n\\\x03' +
    '\\\x05\\\u06DC\n\\\x03\\\x03\\\x05\\\u06E0\n\\\x07\\\u06E2\n\\\f\\\x0E' +
    '\\\u06E5\v\\\x03\\\x03\\\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]\x03]' +
    '\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03^\x03' +
    '^\x03^\x03^\x03^\x05^\u0703\n^\x03^\x02\x02\x06$&^h_\x02\x02\x04\x02\x06' +
    '\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02' +
    '\x1A\x02\x1C\x02\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02' +
    '2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02' +
    'N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02' +
    'j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02' +
    '\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02' +
    '\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02' +
    '\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02' +
    '\xBA\x02\x02\x1B\x17\x022277FI\\a~~\x84\x84\x8A\x8C\x90\x90\x92\x93\x95' +
    '\x9B\x9D\xA1\xA4\xA4\xA7\xA7\xAC\xAC\xAE\xB0\xB4\xB4\u010F\u010F\u0178' +
    '\u0178\u01B4\u01B4\u01D5\u01D5\u01DE\u01DE\x17\x02RRZZccrrw}\x7F\x83\x85' +
    '\x89\x8D\x8F\x9C\x9C\xA3\xA3\xB1\xB1\xEA\xEA\u010D\u010D\u011A\u011A\u015E' +
    '\u015E\u0183\u0183\u0188\u0188\u0196\u0196\u01D8\u01D8\u01EC\u01EC\u020F' +
    '\u020F\t\x02JPTUllnotu\xA6\xA6\xAB\xAB\x16\x0211368EQQSSWY[[bbdkmmpqs' +
    'svv\x91\x91\x94\x94\xA8\xAA\xAD\xAD\xB3\xB3\xFB\xFD\u0162\u0163\x03\x02' +
    '\x86\x87\x04\x0211\x8A\x8A\x03\x02\x1F \x03\x02!#\x03\x02\xA9\xAA\x04' +
    '\x02\x14\x14\x18\x1C\x03\x02\x06\x07\x04\x02QQpq\x03\x02bc\x03\x02+,\x03' +
    '\x02=?\x03\x02\x95\x97\x03\x02\x99\x9A\x03\x02<=\x04\x02\x95\x95\x9C\x9C' +
    '\x04\x02HH\xAE\xAE\x03\x02@B\x03\x02JL\x03\x02HI\x05\x02\x05\x05-.00\x03' +
    '\x02pq\x02\u0819\x02\xBD\x03\x02\x02\x02\x04\xD8\x03\x02\x02\x02\x06\xDD' +
    '\x03\x02\x02\x02\b\xE2\x03\x02\x02\x02\n\xE9\x03\x02\x02\x02\f\xEB\x03' +
    '\x02\x02\x02\x0E\xED\x03\x02\x02\x02\x10\xEF\x03\x02\x02\x02\x12\xF1\x03' +
    '\x02\x02\x02\x14\xF3\x03\x02\x02\x02\x16\xF5\x03\x02\x02\x02\x18\xFE\x03' +
    '\x02\x02\x02\x1A\u010C\x03\x02\x02\x02\x1C\u016D\x03\x02\x02\x02\x1E\u018A' +
    '\x03\x02\x02\x02 \u018C\x03\x02\x02\x02"\u0190\x03\x02\x02\x02$\u01B1' +
    '\x03\x02\x02\x02&\u0254\x03\x02\x02\x02(\u0296\x03\x02\x02\x02*\u02A0' +
    '\x03\x02\x02\x02,\u02A2\x03\x02\x02\x02.\u02C0\x03\x02\x02\x020\u02C5' +
    '\x03\x02\x02\x022\u02C7\x03\x02\x02\x024\u02C9\x03\x02\x02\x026\u02CB' +
    '\x03\x02\x02\x028\u02DE\x03\x02\x02\x02:\u0318\x03\x02\x02\x02<\u031B' +
    '\x03\x02\x02\x02>\u0324\x03\x02\x02\x02@\u0326\x03\x02\x02\x02B\u032E' +
    '\x03\x02\x02\x02D\u0334\x03\x02\x02\x02F\u0343\x03\x02\x02\x02H\u035C' +
    '\x03\x02\x02\x02J\u035E\x03\x02\x02\x02L\u0363\x03\x02\x02\x02N\u037F' +
    '\x03\x02\x02\x02P\u0381\x03\x02\x02\x02R\u0383\x03\x02\x02\x02T\u0388' +
    '\x03\x02\x02\x02V\u03A5\x03\x02\x02\x02X\u03A8\x03\x02\x02\x02Z\u03B1' +
    '\x03\x02\x02\x02\\\u03BD\x03\x02\x02\x02^\u03D6\x03\x02\x02\x02`\u03F0' +
    '\x03\x02\x02\x02b\u0436\x03\x02\x02\x02d\u0438\x03\x02\x02\x02f\u0440' +
    '\x03\x02\x02\x02h\u044E\x03\x02\x02\x02j\u04EC\x03\x02\x02\x02l\u04EF' +
    '\x03\x02\x02\x02n\u04FF\x03\x02\x02\x02p\u050D\x03\x02\x02\x02r\u0511' +
    '\x03\x02\x02\x02t\u0526\x03\x02\x02\x02v\u0528\x03\x02\x02\x02x\u0531' +
    '\x03\x02\x02\x02z\u0542\x03\x02\x02\x02|\u0546\x03\x02\x02\x02~\u054E' +
    '\x03\x02\x02\x02\x80\u055C\x03\x02\x02\x02\x82\u055E\x03\x02\x02\x02\x84' +
    '\u0561\x03\x02\x02\x02\x86\u0563\x03\x02\x02\x02\x88\u0567\x03\x02\x02' +
    '\x02\x8A\u056F\x03\x02\x02\x02\x8C\u0571\x03\x02\x02\x02\x8E\u057B\x03' +
    '\x02\x02\x02\x90\u058D\x03\x02\x02\x02\x92\u059C\x03\x02\x02\x02\x94\u05A0' +
    '\x03\x02\x02\x02\x96\u05B2\x03\x02\x02\x02\x98\u05BD\x03\x02\x02\x02\x9A' +
    '\u05BF\x03\x02\x02\x02\x9C\u05C1\x03\x02\x02\x02\x9E\u05C6\x03\x02\x02' +
    '\x02\xA0\u05D2\x03\x02\x02\x02\xA2\u05F6\x03\x02\x02\x02\xA4\u060A\x03' +
    '\x02\x02\x02\xA6\u0614\x03\x02\x02\x02\xA8\u062A\x03\x02\x02\x02\xAA\u064E' +
    '\x03\x02\x02\x02\xAC\u065D\x03\x02\x02\x02\xAE\u0662\x03\x02\x02\x02\xB0' +
    '\u0667\x03\x02\x02\x02\xB2\u066C\x03\x02\x02\x02\xB4\u0681\x03\x02\x02' +
    '\x02\xB6\u0696\x03\x02\x02\x02\xB8\u06E8\x03\x02\x02\x02\xBA\u0702\x03' +
    '\x02\x02\x02\xBC\xBE\x07\x11\x02\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03' +
    '\x02\x02\x02\xBE\xC2\x03\x02\x02\x02\xBF\xC1\x07\x16\x02\x02\xC0\xBF\x03' +
    '\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2\xC3\x03' +
    '\x02\x02\x02\xC3\xD0\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xCC\x05' +
    'T+\x02\xC6\xC8\x07\x16\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02' +
    '\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCD\x03\x02' +
    '\x02\x02\xCB\xCD\x07\x02';
  private static readonly _serializedATNSegment1: string =
    '\x02\x03\xCC\xC7\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xCF\x03\x02' +
    '\x02\x02\xCE\xC5\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02' +
    '\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xD0\x03\x02' +
    '\x02\x02\xD3\xD4\x07\x02\x02\x03\xD4\x03\x03\x02\x02\x02\xD5\xD9\x07\t' +
    '\x02\x02\xD6\xD9\x07\n\x02\x02\xD7\xD9\x05\x14\v\x02\xD8\xD5\x03\x02\x02' +
    '\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\x05\x03\x02\x02' +
    '\x02\xDA\xDE\x05\x04\x03\x02\xDB\xDE\x05\f\x07\x02\xDC\xDE\x05\x0E\b\x02' +
    '\xDD\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDC\x03\x02\x02\x02' +
    '\xDE\x07\x03\x02\x02\x02\xDF\xE3\x05\x04\x03\x02\xE0\xE3\x05\f\x07\x02' +
    '\xE1\xE3\x05\x10\t\x02\xE2\xDF\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02' +
    '\xE2\xE1\x03\x02\x02\x02\xE3\t\x03\x02\x02\x02\xE4\xEA\x05\x04\x03\x02' +
    '\xE5\xEA\x05\x12\n\x02\xE6\xEA\x05\f\x07\x02\xE7\xEA\x05\x10\t\x02\xE8' +
    '\xEA\x05\x0E\b\x02\xE9\xE4\x03\x02\x02\x02\xE9\xE5\x03\x02\x02\x02\xE9' +
    '\xE6\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA' +
    '\v\x03\x02\x02\x02\xEB\xEC\t\x02\x02\x02\xEC\r\x03\x02\x02\x02\xED\xEE' +
    '\t\x03\x02\x02\xEE\x0F\x03\x02\x02\x02\xEF\xF0\t\x04\x02\x02\xF0\x11\x03' +
    '\x02\x02\x02\xF1\xF2\t\x05\x02\x02\xF2\x13\x03\x02\x02\x02\xF3\xF4\x07' +
    '\xB5\x02\x02\xF4\x15\x03\x02\x02\x02\xF5\xFA\x05\x18\r\x02\xF6\xF7\x07' +
    '\x17\x02\x02\xF7\xF9\x05\x18\r\x02\xF8\xF6\x03\x02\x02\x02\xF9\xFC\x03' +
    '\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\x17\x03' +
    '\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFD\xFF\x07\x8F\x02\x02\xFE\xFD\x03' +
    '\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u010A' +
    '\x05\x1C\x0F\x02\u0101\u0103\x07v\x02\x02\u0102\u0104\x05\x1A\x0E\x02' +
    '\u0103\u0102\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u010B\x03' +
    '\x02\x02\x02\u0105\u0107\x05\x1A\x0E\x02\u0106\u0105\x03\x02\x02\x02\u0107' +
    '\u0108\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02' +
    '\x02\x02\u0109\u010B\x03\x02\x02\x02\u010A\u0101\x03\x02\x02\x02\u010A' +
    '\u0106\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\x19\x03\x02\x02' +
    '\x02\u010C\u010E\x07)\x02\x02\u010D\u010F\x07\x06\x02\x02\u010E\u010D' +
    '\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110\x03\x02\x02\x02' +
    '\u0110\u0111\x07*\x02\x02\u0111\x1B\x03\x02\x02\x02\u0112\u016E\x07{\x02' +
    '\x02\u0113\u0115\x07\x83\x02\x02\u0114\u0116\x07\x84\x02\x02\u0115\u0114' +
    '\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118\x03\x02\x02\x02' +
    '\u0117\u0119\x05 \x11\x02\u0118\u0117\x03\x02\x02\x02\u0118\u0119\x03' +
    '\x02\x02\x02\u0119\u016E\x03\x02\x02\x02\u011A\u016E\x07w\x02\x02\u011B' +
    '\u011D\x07|\x02\x02\u011C\u011E\x05"\x12\x02\u011D\u011C\x03\x02\x02' +
    '\x02\u011D\u011E\x03\x02\x02\x02\u011E\u016E\x03\x02\x02\x02\u011F\u0121' +
    '\x07}\x02\x02\u0120\u0122\x05"\x12\x02\u0121\u0120\x03\x02\x02\x02\u0121' +
    '\u0122\x03\x02\x02\x02\u0122\u016E\x03\x02\x02\x02\u0123\u0124\x07~\x02' +
    '\x02\u0124\u016E\x07\x81\x02\x02\u0125\u0127\x07\x7F\x02\x02\u0126\u0128' +
    '\x05"\x12\x02\u0127\u0126\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02' +
    '\u0128\u016E\x03\x02\x02\x02\u0129\u016E\x07y\x02\x02\u012A\u016E\x07' +
    'z\x02\x02\u012B\u012D\x07Z\x02\x02\u012C\u012E\x05\x1E\x10\x02\u012D\u012C' +
    '\x03\x02\x02\x02\u012D\u012E\x03\x02\x02\x02\u012E\u0130\x03\x02\x02\x02' +
    '\u012F\u0131\x05 \x11\x02\u0130\u012F\x03\x02\x02\x02\u0130\u0131\x03' +
    '\x02\x02\x02\u0131\u016E\x03\x02\x02\x02\u0132\u0134\x07\x85\x02\x02\u0133' +
    '\u0132\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x03\x02' +
    '\x02\x02\u0135\u0137\t\x06\x02\x02\u0136\u0138\x07\x84\x02\x02\u0137\u0136' +
    '\x03\x02\x02\x02\u0137\u0138\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02' +
    '\u0139\u013B\x05 \x11\x02\u013A\u0139\x03\x02\x02\x02\u013A\u013B\x03' +
    '\x02\x02\x02\u013B\u016E\x03\x02\x02\x02\u013C\u013E\x07\x88\x02\x02\u013D' +
    '\u013F\x07\x84\x02\x02\u013E\u013D\x03\x02\x02\x02\u013E\u013F\x03\x02' +
    '\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140\u0142\x05 \x11\x02\u0141\u0140' +
    '\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u016E\x03\x02\x02\x02' +
    '\u0143\u0145\x07\x80\x02\x02\u0144\u0146\x05"\x12\x02\u0145\u0144\x03' +
    '\x02\x02\x02\u0145\u0146\x03\x02\x02\x02\u0146\u016E\x03\x02\x02\x02\u0147' +
    '\u016E\x07\x82\x02\x02\u0148\u016E\x07x\x02\x02\u0149\u014B\x07\x89\x02' +
    '\x02\u014A\u014C\x05 \x11\x02\u014B\u014A\x03\x02\x02\x02\u014B\u014C' +
    '\x03\x02\x02\x02\u014C\u0150\x03\x02\x02\x02\u014D\u014E\t\x07\x02\x02' +
    '\u014E\u014F\x07\x89\x02\x02\u014F\u0151\x07\x8C\x02\x02\u0150\u014D\x03' +
    '\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u016E\x03\x02\x02\x02\u0152' +
    '\u0154\x07\x8D\x02\x02\u0153\u0155\x05 \x11\x02\u0154\u0153\x03\x02\x02' +
    '\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0159\x03\x02\x02\x02\u0156\u0157' +
    '\t\x07\x02\x02\u0157\u0158\x07\x89\x02\x02\u0158\u015A\x07\x8C\x02\x02' +
    '\u0159\u0156\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u016E\x03' +
    '\x02\x02\x02\u015B\u015D\x07\x8E\x02\x02\u015C\u015E\x05 \x11\x02\u015D' +
    '\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u016E\x03\x02' +
    '\x02\x02\u015F\u016B\x05\b\x05\x02\u0160\u0161\x07\x1D\x02\x02\u0161\u0166' +
    '\x05$\x13\x02\u0162\u0163\x07\x17\x02\x02\u0163\u0165\x05$\x13\x02\u0164' +
    '\u0162\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164\x03\x02' +
    '\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02\u0168' +
    '\u0166\x03\x02\x02\x02\u0169\u016A\x07\x1E\x02\x02\u016A\u016C\x03\x02' +
    '\x02\x02\u016B\u0160\x03\x02\x02\x02\u016B\u016C\x03\x02\x02\x02\u016C' +
    '\u016E\x03\x02\x02\x02\u016D\u0112\x03\x02\x02\x02\u016D\u0113\x03\x02' +
    '\x02\x02\u016D\u011A\x03\x02\x02\x02\u016D\u011B\x03\x02\x02\x02\u016D' +
    '\u011F\x03\x02\x02\x02\u016D\u0123\x03\x02\x02\x02\u016D\u0125\x03\x02' +
    '\x02\x02\u016D\u0129\x03\x02\x02\x02\u016D\u012A\x03\x02\x02\x02\u016D' +
    '\u012B\x03\x02\x02\x02\u016D\u0133\x03\x02\x02\x02\u016D\u013C\x03\x02' +
    '\x02\x02\u016D\u0143\x03\x02\x02\x02\u016D\u0147\x03\x02\x02\x02\u016D' +
    '\u0148\x03\x02\x02\x02\u016D\u0149\x03\x02\x02\x02\u016D\u0152\x03\x02' +
    '\x02\x02\u016D\u015B\x03\x02\x02\x02\u016D\u015F\x03\x02\x02\x02\u016E' +
    '\x1D\x03\x02\x02\x02\u016F\u018B\x07a\x02\x02\u0170\u018B\x07`\x02\x02' +
    '\u0171\u018B\x07_\x02\x02\u0172\u018B\x07^\x02\x02\u0173\u018B\x07]\x02' +
    '\x02\u0174\u018B\x07\\\x02\x02\u0175\u0176\x07a\x02\x02\u0176\u0177\x07' +
    '[\x02\x02\u0177\u018B\x07`\x02\x02\u0178\u0179\x07_\x02\x02\u0179\u017A' +
    '\x07[\x02\x02\u017A\u018B\x07^\x02\x02\u017B\u017C\x07_\x02\x02\u017C' +
    '\u017D\x07[\x02\x02\u017D\u018B\x07]\x02\x02\u017E\u017F\x07_\x02\x02' +
    '\u017F\u0180\x07[\x02\x02\u0180\u018B\x07\\\x02\x02\u0181\u0182\x07^\x02' +
    '\x02\u0182\u0183\x07[\x02\x02\u0183\u018B\x07]\x02\x02\u0184\u0185\x07' +
    '^\x02\x02\u0185\u0186\x07[\x02\x02\u0186\u018B\x07\\\x02\x02\u0187\u0188' +
    '\x07]\x02\x02\u0188\u0189\x07[\x02\x02\u0189\u018B\x07\\\x02\x02\u018A' +
    '\u016F\x03\x02\x02\x02\u018A\u0170\x03\x02\x02\x02\u018A\u0171\x03\x02' +
    '\x02\x02\u018A\u0172\x03\x02\x02\x02\u018A\u0173\x03\x02\x02\x02\u018A' +
    '\u0174\x03\x02\x02\x02\u018A\u0175\x03\x02\x02\x02\u018A\u0178\x03\x02' +
    '\x02\x02\u018A\u017B\x03\x02\x02\x02\u018A\u017E\x03\x02\x02\x02\u018A' +
    '\u0181\x03\x02\x02\x02\u018A\u0184\x03\x02\x02\x02\u018A\u0187\x03\x02' +
    '\x02\x02\u018B\x1F\x03\x02\x02\x02\u018C\u018D\x07\x1D\x02\x02\u018D\u018E' +
    '\x07\x06\x02\x02\u018E\u018F\x07\x1E\x02\x02\u018F!\x03\x02\x02\x02\u0190' +
    '\u0191\x07\x1D\x02\x02\u0191\u0194\x07\x06\x02\x02\u0192\u0193\x07\x17' +
    '\x02\x02\u0193\u0195\x07\x06\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194' +
    '\u0195\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x07\x1E' +
    '\x02\x02\u0197#\x03\x02\x02\x02\u0198\u0199\b\x13\x01\x02\u0199\u019A' +
    '\x07\x1D\x02\x02\u019A\u019B\x05$\x13\x02\u019B\u019D\x07\x1E\x02\x02' +
    '\u019C\u019E\x05\x92J\x02\u019D\u019C\x03\x02\x02\x02\u019D\u019E\x03' +
    '\x02\x02\x02\u019E\u01B2\x03\x02\x02\x02\u019F\u01A0\x07\x1D\x02\x02\u01A0' +
    '\u01A3\x05$\x13\x02\u01A1\u01A2\x07\x17\x02\x02\u01A2\u01A4\x05$\x13\x02' +
    '\u01A3\u01A1\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A3\x03' +
    '\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7' +
    '\u01A8\x07\x1E\x02\x02\u01A8\u01B2\x03\x02\x02\x02\u01A9\u01AA\t\b\x02' +
    '\x02\u01AA\u01B2\x05$\x13\x1A\u01AB\u01AC\x05(\x15\x02\u01AC\u01AD\x05' +
    '$\x13\x14\u01AD\u01B2\x03\x02\x02\x02\u01AE\u01AF\x07k\x02\x02\u01AF\u01B2' +
    '\x05$\x13\x06\u01B0\u01B2\x05.\x18\x02\u01B1\u0198\x03\x02\x02\x02\u01B1' +
    '\u019F\x03\x02\x02\x02\u01B1\u01A9\x03\x02\x02\x02\u01B1\u01AB\x03\x02' +
    '\x02\x02\u01B1\u01AE\x03\x02\x02\x02\u01B1\u01B0\x03\x02\x02\x02\u01B2' +
    '\u023A\x03\x02\x02\x02\u01B3\u01B4\f\x19\x02\x02\u01B4\u01B5\x07\xA7\x02' +
    '\x02\u01B5\u01B6\x07\x89\x02\x02\u01B6\u01B7\x07\x8C\x02\x02\u01B7\u0239' +
    '\x05$\x13\x1A\u01B8\u01B9\f\x18\x02\x02\u01B9\u01BA\x07$\x02\x02\u01BA' +
    '\u0239\x05$\x13\x19\u01BB\u01BC\f\x17\x02\x02\u01BC\u01BD\t\t\x02\x02' +
    '\u01BD\u0239\x05$\x13\x18\u01BE\u01BF\f\x16\x02\x02\u01BF\u01C0\t\b\x02' +
    '\x02\u01C0\u0239\x05$\x13\x17\u01C1\u01C2\f\x15\x02\x02\u01C2\u01C3\x05' +
    '(\x15\x02\u01C3\u01C4\x05$\x13\x16\u01C4\u0239\x03\x02\x02\x02\u01C5\u01C7' +
    '\f\x11\x02\x02\u01C6\u01C8\x07k\x02\x02\u01C7\u01C6\x03\x02\x02\x02\u01C7' +
    '\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB\x07r\x02' +
    '\x02\u01CA\u01CC\t\n\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CB\u01CC\x03' +
    '\x02\x02\x02\u01CC\u01CD\x03\x02\x02\x02\u01CD\u01CE\x05&\x14\x02\u01CE' +
    '\u01CF\x07i\x02\x02\u01CF\u01D0\x05$\x13\x12\u01D0\u0239\x03\x02\x02\x02' +
    '\u01D1\u01D3\f\x10\x02\x02\u01D2\u01D4\x07k\x02\x02\u01D3\u01D2\x03\x02' +
    '\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4\u01D9\x03\x02\x02\x02\u01D5' +
    '\u01DA\x07t\x02\x02\u01D6\u01DA\x07u\x02\x02\u01D7\u01D8\x07\xAB\x02\x02' +
    '\u01D8\u01DA\x07[\x02\x02\u01D9\u01D5\x03\x02\x02\x02\u01D9\u01D6\x03' +
    '\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01DA\u01DB\x03\x02\x02\x02\u01DB' +
    '\u0239\x05$\x13\x11\u01DC\u01DE\f\x0F\x02\x02\u01DD\u01DF\x07k\x02\x02' +
    '\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01E4\x03' +
    '\x02\x02\x02\u01E0\u01E5\x07t\x02\x02\u01E1\u01E5\x07u\x02\x02\u01E2\u01E3' +
    '\x07\xAB\x02\x02\u01E3\u01E5\x07[\x02\x02\u01E4\u01E0\x03\x02\x02\x02' +
    '\u01E4\u01E1\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E5\u01E6\x03' +
    '\x02\x02\x02\u01E6\u01E7\x05$\x13\x02\u01E7\u01E8\x07\xAC\x02\x02\u01E8' +
    '\u01E9\x05$\x13\x10\u01E9\u0239\x03\x02\x02\x02\u01EA\u01EB\f\x0E\x02' +
    '\x02\u01EB\u01EC\t\v\x02\x02\u01EC\u0239\x05$\x13\x0F\u01ED\u01EE\f\f' +
    '\x02\x02\u01EE\u01F0\x07l\x02\x02\u01EF\u01F1\x07k\x02\x02\u01F0\u01EF' +
    '\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x03\x02\x02\x02' +
    '\u01F2\u01F3\x07<\x02\x02\u01F3\u01F4\x074\x02\x02\u01F4\u0239\x05$\x13' +
    '\r\u01F5\u01F6\f\x05\x02\x02\u01F6\u01F7\x07i\x02\x02\u01F7\u0239\x05' +
    '$\x13\x06\u01F8\u01F9\f\x04\x02\x02\u01F9\u01FA\x07j\x02\x02\u01FA\u0239' +
    '\x05$\x13\x05\u01FB\u01FC\f\x1E\x02\x02\u01FC\u01FD\x07\x13\x02\x02\u01FD' +
    '\u0239\x05\x18\r\x02\u01FE\u01FF\f\x1B\x02\x02\u01FF\u0239\x05\x8EH\x02' +
    '\u0200\u0201\f\x13\x02\x02\u0201\u0239\x05(\x15\x02\u0202\u0204\f\x12' +
    '\x02\x02\u0203\u0205\x07k\x02\x02\u0204\u0203\x03\x02\x02\x02\u0204\u0205' +
    '\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u0207\x07s\x02\x02' +
    '\u0207\u0211\x07\x1D\x02\x02\u0208\u0212\x05X-\x02\u0209\u020E\x05$\x13' +
    '\x02\u020A\u020B\x07\x17\x02\x02\u020B\u020D\x05$\x13\x02\u020C\u020A' +
    '\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02\u020E\u020C\x03\x02\x02\x02' +
    '\u020E\u020F\x03\x02\x02\x02\u020F\u0212\x03\x02\x02\x02\u0210\u020E\x03' +
    '\x02\x02\x02\u0211\u0208\x03\x02\x02\x02\u0211\u0209\x03\x02\x02\x02\u0212' +
    '\u0213\x03\x02\x02\x02\u0213\u0214\x07\x1E\x02\x02\u0214\u0239\x03\x02' +
    '\x02\x02\u0215\u0216\f\r\x02\x02\u0216\u0218\x07l\x02\x02\u0217\u0219' +
    '\x07k\x02\x02\u0218\u0217\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02' +
    '\u0219\u021C\x03\x02\x02\x02\u021A\u021D\x054\x1B\x02\u021B\u021D\x07' +
    'm\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D' +
    '\u0239\x03\x02\x02\x02\u021E\u021F\f\v\x02\x02\u021F\u0221\x07l\x02\x02' +
    '\u0220\u0222\x07k\x02\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03' +
    '\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0239\x07\xAF\x02\x02\u0224' +
    '\u0225\f\n\x02\x02\u0225\u0227\x07l\x02\x02\u0226\u0228\x07k\x02\x02\u0227' +
    '\u0226\x03\x02\x02\x02\u0227\u0228\x03\x02\x02\x02\u0228\u0229\x03\x02' +
    '\x02\x02\u0229\u0239\x07\xB0\x02\x02\u022A\u022B\f\t\x02\x02\u022B\u022D' +
    '\x07l\x02\x02\u022C\u022E\x07k\x02\x02\u022D\u022C\x03\x02\x02\x02\u022D' +
    '\u022E\x03\x02\x02\x02\u022E\u022F\x03\x02\x02\x02\u022F\u0230\x07\x90' +
    '\x02\x02\u0230\u0231\x07\x1D\x02\x02\u0231\u0232\x05\x16\f\x02\u0232\u0233' +
    '\x07\x1E\x02\x02\u0233\u0239\x03\x02\x02\x02\u0234\u0235\f\b\x02\x02\u0235' +
    '\u0239\x07n\x02\x02\u0236\u0237\f\x07\x02\x02\u0237\u0239\x07o\x02\x02' +
    '\u0238\u01B3\x03\x02\x02\x02\u0238\u01B8\x03\x02\x02\x02\u0238\u01BB\x03' +
    '\x02\x02\x02\u0238\u01BE\x03\x02\x02\x02\u0238\u01C1\x03\x02\x02\x02\u0238' +
    '\u01C5\x03\x02\x02\x02\u0238\u01D1\x03\x02\x02\x02\u0238\u01DC\x03\x02' +
    '\x02\x02\u0238\u01EA\x03\x02\x02\x02\u0238\u01ED\x03\x02\x02\x02\u0238' +
    '\u01F5\x03\x02\x02\x02\u0238\u01F8\x03\x02\x02\x02\u0238\u01FB\x03\x02' +
    '\x02\x02\u0238\u01FE\x03\x02\x02\x02\u0238\u0200\x03\x02\x02\x02\u0238' +
    '\u0202\x03\x02\x02\x02\u0238\u0215\x03\x02\x02\x02\u0238\u021E\x03\x02' +
    '\x02\x02\u0238\u0224\x03\x02\x02\x02\u0238\u022A\x03\x02\x02\x02\u0238' +
    '\u0234\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0239\u023C\x03\x02' +
    '\x02\x02\u023A\u0238\x03\x02\x02\x02\u023A\u023B\x03\x02\x02\x02\u023B' +
    '%\x03\x02\x02\x02\u023C\u023A\x03\x02\x02\x02\u023D\u023E\b\x14\x01\x02' +
    '\u023E\u023F\x07\x1D\x02\x02\u023F\u0240\x05$\x13\x02\u0240\u0242\x07' +
    '\x1E\x02\x02\u0241\u0243\x05\x92J\x02\u0242\u0241\x03\x02\x02\x02\u0242' +
    '\u0243\x03\x02\x02\x02\u0243\u0255\x03\x02\x02\x02\u0244\u0245\x07\x1D' +
    '\x02\x02\u0245\u0248\x05$\x13\x02\u0246\u0247\x07\x17\x02\x02\u0247\u0249' +
    '\x05$\x13\x02\u0248\u0246\x03\x02\x02\x02\u0249\u024A\x03\x02\x02\x02' +
    '\u024A\u0248\x03\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x03' +
    '\x02\x02\x02\u024C\u024D\x07\x1E\x02\x02\u024D\u0255\x03\x02\x02\x02\u024E' +
    '\u024F\t\b\x02\x02\u024F\u0255\x05&\x14\x0F\u0250\u0251\x05(\x15\x02\u0251' +
    '\u0252\x05&\x14\n\u0252\u0255\x03\x02\x02\x02\u0253\u0255\x05.\x18\x02' +
    '\u0254\u023D\x03\x02\x02\x02\u0254\u0244\x03\x02\x02\x02\u0254\u024E\x03' +
    '\x02\x02\x02\u0254\u0250\x03\x02\x02\x02\u0254\u0253\x03\x02\x02\x02\u0255' +
    '\u028B\x03\x02\x02\x02\u0256\u0257\f\x0E\x02\x02\u0257\u0258\x07$\x02' +
    '\x02\u0258\u028A\x05&\x14\x0F\u0259\u025A\f\r\x02\x02\u025A\u025B\t\t' +
    '\x02\x02\u025B\u028A\x05&\x14\x0E\u025C\u025D\f\f\x02\x02\u025D\u025E' +
    '\t\b\x02\x02\u025E\u028A\x05&\x14\r\u025F\u0260\f\v\x02\x02\u0260\u0261' +
    '\x05(\x15\x02\u0261\u0262\x05&\x14\f\u0262\u028A\x03\x02\x02\x02\u0263' +
    '\u0264\f\b\x02\x02\u0264\u0265\t\v\x02\x02\u0265\u028A\x05&\x14\t\u0266' +
    '\u0267\f\x07\x02\x02\u0267\u0269\x07l\x02\x02\u0268\u026A\x07k\x02\x02' +
    '\u0269\u0268\x03\x02\x02\x02\u0269\u026A\x03\x02\x02\x02\u026A\u026B\x03' +
    '\x02\x02\x02\u026B\u026C\x07<\x02\x02\u026C\u026D\x074\x02\x02\u026D\u028A' +
    '\x05&\x14\b\u026E\u026F\f\x12\x02\x02\u026F\u0270\x07\x13\x02\x02\u0270' +
    '\u028A\x05\x18\r\x02\u0271\u0272\f\t\x02\x02\u0272\u028A\x05(\x15\x02' +
    '\u0273\u0274\f\x06\x02\x02\u0274\u0276\x07l\x02\x02\u0275\u0277\x07k\x02' +
    '\x02\u0276\u0275\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278' +
    '\x03\x02\x02\x02\u0278\u028A\x07\xAF\x02\x02\u0279\u027A\f\x05\x02\x02' +
    '\u027A\u027C\x07l\x02\x02\u027B\u027D\x07k\x02\x02\u027C\u027B\x03\x02' +
    '\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E' +
    '\u028A\x07\xB0\x02\x02\u027F\u0280\f\x04\x02\x02\u0280\u0282\x07l\x02' +
    '\x02\u0281\u0283\x07k\x02\x02\u0282\u0281\x03\x02\x02\x02\u0282\u0283' +
    '\x03\x02\x02\x02\u0283\u0284\x03\x02\x02\x02\u0284\u0285\x07\x90\x02\x02' +
    '\u0285\u0286\x07\x1D\x02\x02\u0286\u0287\x05\x16\f\x02\u0287\u0288\x07' +
    '\x1E\x02\x02\u0288\u028A\x03\x02\x02\x02\u0289\u0256\x03\x02\x02\x02\u0289' +
    '\u0259\x03\x02\x02\x02\u0289\u025C\x03\x02\x02\x02\u0289\u025F\x03\x02' +
    '\x02\x02\u0289\u0263\x03\x02\x02\x02\u0289\u0266\x03\x02\x02\x02\u0289' +
    '\u026E\x03\x02\x02\x02\u0289\u0271\x03\x02\x02\x02\u0289\u0273\x03\x02' +
    '\x02\x02\u0289\u0279\x03\x02\x02\x02\u0289\u027F\x03\x02\x02\x02\u028A' +
    '\u028D\x03\x02\x02\x02\u028B\u0289\x03\x02\x02\x02\u028B\u028C\x03\x02' +
    "\x02\x02\u028C'\x03\x02\x02\x02\u028D\u028B\x03\x02\x02\x02\u028E\u0297" +
    '\x05\x8AF\x02\u028F\u0290\x07F\x02\x02\u0290\u0291\x07\x1D\x02\x02\u0291' +
    '\u0292\x05\x06\x04\x02\u0292\u0293\x07%\x02\x02\u0293\u0294\x05\x96L\x02' +
    '\u0294\u0295\x07\x1E\x02\x02\u0295\u0297\x03\x02\x02\x02\u0296\u028E\x03' +
    '\x02\x02\x02\u0296\u028F\x03\x02\x02\x02\u0297)\x03\x02\x02\x02\u0298' +
    '\u02A1\x05\x96L\x02\u0299\u029A\x07F\x02\x02\u029A\u029B\x07\x1D\x02\x02' +
    '\u029B\u029C\x05\x06\x04\x02\u029C\u029D\x07%\x02\x02\u029D\u029E\x05' +
    '\x96L\x02\u029E\u029F\x07\x1E\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0' +
    '\u0298\x03\x02\x02\x02\u02A0\u0299\x03\x02\x02\x02\u02A1+\x03\x02\x02' +
    '\x02\u02A2\u02A3\x07\x1D\x02\x02\u02A3\u02A4\x05$\x13\x02\u02A4\u02A5' +
    '\x07\x17\x02\x02\u02A5\u02A6\x05$\x13\x02\u02A6\u02A7\x07\x1E\x02\x02' +
    '\u02A7\u02A8\x07\xA6\x02\x02\u02A8\u02A9\x07\x1D\x02\x02\u02A9\u02AA\x05' +
    '$\x13\x02\u02AA\u02AB\x07\x17\x02\x02\u02AB\u02AC\x05$\x13\x02\u02AC\u02AD' +
    '\x07\x1E\x02\x02\u02AD-\x03\x02\x02\x02\u02AE\u02C1\x050\x19\x02\u02AF' +
    '\u02B0\x07\x1D\x02\x02\u02B0\u02B1\x05X-\x02\u02B1\u02B3\x07\x1E\x02\x02' +
    '\u02B2\u02B4\x05\x92J\x02\u02B3\u02B2\x03\x02\x02\x02\u02B3\u02B4\x03' +
    '\x02\x02\x02\u02B4\u02C1\x03\x02\x02\x02\u02B5\u02C1\x056\x1C\x02\u02B6' +
    '\u02C1\x07m\x02\x02\u02B7\u02C1\x07!\x02\x02\u02B8\u02C1\x05@!\x02\u02B9' +
    '\u02BA\x07\xB1\x02\x02\u02BA\u02C1\x05R*\x02\u02BB\u02C1\x05:\x1E\x02' +
    '\u02BC\u02C1\x05\x94K\x02\u02BD\u02C1\x05J&\x02\u02BE\u02C1\x05N(\x02' +
    '\u02BF\u02C1\x05,\x17\x02\u02C0\u02AE\x03\x02\x02\x02\u02C0\u02AF\x03' +
    '\x02\x02\x02\u02C0\u02B5\x03\x02\x02\x02\u02C0\u02B6\x03\x02\x02\x02\u02C0' +
    '\u02B7\x03\x02\x02\x02\u02C0\u02B8\x03\x02\x02\x02\u02C0\u02B9\x03\x02' +
    '\x02\x02\u02C0\u02BB\x03\x02\x02\x02\u02C0\u02BC\x03\x02\x02\x02\u02C0' +
    '\u02BD\x03\x02\x02\x02\u02C0\u02BE\x03\x02\x02\x02\u02C0\u02BF\x03\x02' +
    '\x02\x02\u02C1/\x03\x02\x02\x02\u02C2\u02C6\x052\x1A\x02\u02C3\u02C6\x05' +
    '\x98M\x02\u02C4\u02C6\x054\x1B\x02\u02C5\u02C2\x03\x02\x02\x02\u02C5\u02C3' +
    '\x03\x02\x02\x02\u02C5\u02C4\x03\x02\x02\x02\u02C61\x03\x02\x02\x02\u02C7' +
    '\u02C8\t\f\x02\x02\u02C83\x03\x02\x02\x02\u02C9\u02CA\t\r\x02\x02\u02CA' +
    '5\x03\x02\x02\x02\u02CB\u02CD\x07d\x02\x02\u02CC\u02CE\x05$\x13\x02\u02CD' +
    '\u02CC\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D4\x03\x02' +
    '\x02\x02\u02CF\u02D0\x07e\x02\x02\u02D0\u02D1\x05$\x13\x02\u02D1\u02D2' +
    '\x07f\x02\x02\u02D2\u02D3\x05$\x13\x02\u02D3\u02D5\x03\x02\x02\x02\u02D4' +
    '\u02CF\x03\x02\x02\x02\u02D5\u02D6\x03\x02\x02\x02\u02D6\u02D4\x03\x02' +
    '\x02\x02\u02D6\u02D7\x03\x02\x02\x02\u02D7\u02DA\x03\x02\x02\x02\u02D8' +
    '\u02D9\x07g\x02\x02\u02D9\u02DB\x05$\x13\x02\u02DA\u02D8\x03\x02\x02\x02' +
    '\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DD\x07' +
    'h\x02\x02\u02DD7\x03\x02\x02\x02\u02DE\u02DF\t\x0E\x02\x02\u02DF\u02E0' +
    '\x07\x1D\x02\x02\u02E0\u02E1\x05$\x13\x02\u02E1\u02E2\x07\xA8\x02\x02' +
    '\u02E2\u02E3\x05\x18\r\x02\u02E3\u02E4\x07\x1E\x02\x02\u02E49\x03\x02' +
    '\x02\x02\u02E5\u02E6\x05\b\x05\x02\u02E6\u02F5\x07\x1D\x02\x02\u02E7\u02E9' +
    '\x05P)\x02\u02E8\u02E7\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9' +
    '\u02EA\x03\x02\x02\x02\u02EA\u02EF\x05<\x1F\x02\u02EB\u02EC\x07\x17\x02' +
    '\x02\u02EC\u02EE\x05<\x1F\x02\u02ED\u02EB\x03\x02\x02\x02\u02EE\u02F1' +
    '\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02' +
    '\u02F0\u02F3\x03\x02\x02\x02\u02F1\u02EF\x03\x02\x02\x02\u02F2\u02F4\x05' +
    'z>\x02\u02F3\u02F2\x03\x02\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F6' +
    '\x03\x02\x02\x02\u02F5\u02E8\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02' +
    '\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02FE\x07\x1E\x02\x02\u02F8\u02F9\x07' +
    '\x8B\x02\x02\u02F9\u02FA\x076\x02\x02\u02FA\u02FB\x07\x1D\x02\x02\u02FB' +
    '\u02FC\x05z>\x02\u02FC\u02FD\x07\x1E\x02\x02\u02FD\u02FF\x03\x02\x02\x02' +
    '\u02FE\u02F8\x03\x02\x02\x02\u02FE\u02FF\x03\x02\x02\x02\u02FF\u0301\x03' +
    '\x02\x02\x02\u0300\u0302\x05B"\x02\u0301\u0300\x03\x02\x02\x02\u0301' +
    '\u0302\x03\x02\x02\x02\u0302\u0308\x03\x02\x02\x02\u0303\u0306\x07\x92' +
    '\x02\x02\u0304\u0307\x05\x06\x04\x02\u0305\u0307\x05D#\x02\u0306\u0304' +
    '\x03\x02\x02\x02\u0306\u0305\x03\x02\x02\x02\u0307\u0309\x03\x02\x02\x02' +
    '\u0308\u0303\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u0319\x03' +
    '\x02\x02\x02\u030A\u030B\x07\x9C\x02\x02\u030B\u0314\x07\x1D\x02\x02\u030C' +
    '\u0311\x05$\x13\x02\u030D\u030E\x07\x17\x02\x02\u030E\u0310\x05$\x13\x02' +
    '\u030F\u030D\x03\x02\x02\x02\u0310\u0313\x03\x02\x02\x02\u0311\u030F\x03' +
    '\x02\x02\x02\u0311\u0312\x03\x02\x02\x02\u0312\u0315\x03\x02\x02\x02\u0313' +
    '\u0311\x03\x02\x02\x02\u0314\u030C\x03\x02\x02\x02\u0314\u0315\x03\x02' +
    '\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316\u0319\x07\x1E\x02\x02\u0317' +
    '\u0319\x05\xBA^\x02\u0318\u02E5\x03\x02\x02\x02\u0318\u030A\x03\x02\x02' +
    '\x02\u0318\u0317\x03\x02\x02\x02\u0319;\x03\x02\x02\x02\u031A\u031C\x07' +
    '\xB3\x02\x02\u031B\u031A\x03\x02\x02\x02\u031B\u031C\x03\x02\x02\x02\u031C' +
    '\u0320\x03\x02\x02\x02\u031D\u031E\x05\x06\x04\x02\u031E\u031F\x05> \x02' +
    '\u031F\u0321\x03\x02\x02\x02\u0320\u031D\x03\x02\x02\x02\u0320\u0321\x03' +
    '\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\u0323\x05$\x13\x02\u0323' +
    '=\x03\x02\x02\x02\u0324\u0325\t\x0F\x02\x02\u0325?\x03\x02\x02\x02\u0326' +
    '\u0327\t\x10\x02\x02\u0327\u032A\x07\x1D\x02\x02\u0328\u032B\x05$\x13' +
    '\x02\u0329\u032B\x05X-\x02\u032A\u0328\x03\x02\x02\x02\u032A\u0329\x03' +
    '\x02\x02\x02\u032B\u032C\x03\x02\x02\x02\u032C\u032D\x07\x1E\x02\x02\u032D' +
    'A\x03\x02\x02\x02\u032E\u032F\x07\xB4\x02\x02\u032F\u0330\x07\x1D\x02' +
    '\x02\u0330\u0331\x075\x02\x02\u0331\u0332\x05$\x13\x02\u0332\u0333\x07' +
    '\x1E\x02\x02\u0333C\x03\x02\x02\x02\u0334\u0336\x07\x1D\x02\x02\u0335' +
    '\u0337\x05\x06\x04\x02\u0336\u0335\x03\x02\x02\x02\u0336\u0337\x03\x02' +
    '\x02\x02\u0337\u0339\x03\x02\x02\x02\u0338\u033A\x05\x8CG\x02\u0339\u0338' +
    '\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033C\x03\x02\x02\x02' +
    '\u033B\u033D\x05z>\x02\u033C\u033B\x03\x02\x02\x02\u033C\u033D\x03\x02' +
    '\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E\u0340\x05F$\x02\u033F\u033E' +
    '\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02' +
    '\u0341\u0342\x07\x1E\x02\x02\u0342E\x03\x02\x02\x02\u0343\u034A\t\x11' +
    '\x02\x02\u0344\u034B\x05H%\x02\u0345\u0346\x07r\x02\x02\u0346\u0347\x05' +
    'H%\x02\u0347\u0348\x07i\x02\x02\u0348\u0349\x05H%\x02\u0349\u034B\x03' +
    '\x02\x02\x02\u034A\u0344\x03\x02\x02\x02\u034A\u0345\x03\x02\x02\x02\u034B' +
    '\u0355\x03\x02\x02\x02\u034C\u0353\x07\x9D\x02\x02\u034D\u034E\x07\x9B' +
    '\x02\x02\u034E\u0354\x07\x9C\x02\x02\u034F\u0354\x076\x02\x02\u0350\u0354' +
    '\x07\x9E\x02\x02\u0351\u0352\x07\x9F\x02\x02\u0352\u0354\x07\xA0\x02\x02' +
    '\u0353\u034D\x03\x02\x02\x02\u0353\u034F\x03\x02\x02\x02\u0353\u0350\x03' +
    '\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0354\u0356\x03\x02\x02\x02\u0355' +
    '\u034C\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356G\x03\x02\x02' +
    '\x02\u0357\u0358\x05$\x13\x02\u0358\u0359\t\x12\x02\x02';
  private static readonly _serializedATNSegment2: string =
    '\u0359\u035D\x03\x02\x02\x02\u035A\u035B\x07\x9B\x02\x02\u035B\u035D\x07' +
    '\x9C\x02\x02\u035C\u0357\x03\x02\x02\x02\u035C\u035A\x03\x02\x02\x02\u035D' +
    "I\x03\x02\x02\x02\u035E\u0361\x07v\x02\x02\u035F\u0362\x05L'\x02\u0360" +
    '\u0362\x05R*\x02\u0361\u035F\x03\x02\x02\x02\u0361\u0360\x03\x02\x02\x02' +
    '\u0362K\x03\x02\x02\x02\u0363\u0372\x07)\x02\x02\u0364\u0367\x05$\x13' +
    "\x02\u0365\u0367\x05L'\x02\u0366\u0364\x03\x02\x02\x02\u0366\u0365\x03" +
    '\x02\x02\x02\u0367\u036F\x03\x02\x02\x02\u0368\u036B\x07\x17\x02\x02\u0369' +
    "\u036C\x05$\x13\x02\u036A\u036C\x05L'\x02\u036B\u0369\x03\x02\x02\x02" +
    '\u036B\u036A\x03\x02\x02\x02\u036C\u036E\x03\x02\x02\x02\u036D\u0368\x03' +
    '\x02\x02\x02\u036E\u0371\x03\x02\x02\x02\u036F\u036D\x03\x02\x02\x02\u036F' +
    '\u0370\x03\x02\x02\x02\u0370\u0373\x03\x02\x02\x02\u0371\u036F\x03\x02' +
    '\x02\x02\u0372\u0366\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373' +
    '\u0374\x03\x02\x02\x02\u0374\u0375\x07*\x02\x02\u0375M\x03\x02\x02\x02' +
    '\u0376\u0377\x05\x18\r\x02\u0377\u0378\x05\x98M\x02\u0378\u0380\x03\x02' +
    '\x02\x02\u0379\u037A\x07Z\x02\x02\u037A\u037B\x05\x98M\x02\u037B\u037D' +
    '\x05\x1E\x10\x02\u037C\u037E\x05 \x11\x02\u037D\u037C\x03\x02\x02\x02' +
    '\u037D\u037E\x03\x02\x02\x02\u037E\u0380\x03\x02\x02\x02\u037F\u0376\x03' +
    '\x02\x02\x02\u037F\u0379\x03\x02\x02\x02\u0380O\x03\x02\x02\x02\u0381' +
    '\u0382\t\x13\x02\x02\u0382Q\x03\x02\x02\x02\u0383\u0384\x07\x1D\x02\x02' +
    '\u0384\u0385\x05T+\x02\u0385\u0386\x07\x1E\x02\x02\u0386S\x03\x02\x02' +
    '\x02\u0387\u0389\x05Z.\x02\u0388\u0387\x03\x02\x02\x02\u0388\u0389\x03' +
    '\x02\x02\x02\u0389\u038A\x03\x02\x02\x02\u038A\u038E\x05^0\x02\u038B\u038D' +
    '\x05V,\x02\u038C\u038B\x03\x02\x02\x02\u038D\u0390\x03\x02\x02\x02\u038E' +
    '\u038C\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038FU\x03\x02\x02' +
    '\x02\u0390\u038E\x03\x02\x02\x02\u0391\u03A6\x05z>\x02\u0392\u0395\x07' +
    ':\x02\x02\u0393\u0396\x05$\x13\x02\u0394\u0396\x07=\x02\x02\u0395\u0393' +
    '\x03\x02\x02\x02\u0395\u0394\x03\x02\x02\x02\u0396\u03A6\x03\x02\x02\x02' +
    '\u0397\u0398\x07;\x02\x02\u0398\u039A\x05$\x13\x02\u0399\u039B\t\x14\x02' +
    '\x02\u039A\u0399\x03\x02\x02\x02\u039A\u039B\x03\x02\x02\x02\u039B\u03A6' +
    '\x03\x02\x02\x02\u039C\u039D\x07\xAD\x02\x02\u039D\u039F\t\x15\x02\x02' +
    '\u039E\u03A0\x05$\x13\x02\u039F\u039E\x03\x02\x02\x02\u039F\u03A0\x03' +
    '\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A3\t\x14\x02\x02\u03A2' +
    '\u03A4\x07Y\x02\x02\u03A3\u03A2\x03\x02\x02\x02\u03A3\u03A4\x03\x02\x02' +
    '\x02\u03A4\u03A6\x03\x02\x02\x02\u03A5\u0391\x03\x02\x02\x02\u03A5\u0392' +
    '\x03\x02\x02\x02\u03A5\u0397\x03\x02\x02\x02\u03A5\u039C\x03\x02\x02\x02' +
    '\u03A6W\x03\x02\x02\x02\u03A7\u03A9\x05Z.\x02\u03A8\u03A7\x03\x02\x02' +
    '\x02\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AE' +
    '\x05`1\x02\u03AB\u03AD\x05V,\x02\u03AC\u03AB\x03\x02\x02\x02\u03AD\u03B0' +
    '\x03\x02\x02\x02\u03AE\u03AC\x03\x02\x02\x02\u03AE\u03AF\x03\x02\x02\x02' +
    '\u03AFY\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B1\u03B3\x071\x02' +
    '\x02\u03B2\u03B4\x072\x02\x02\u03B3\u03B2\x03\x02\x02\x02\u03B3\u03B4' +
    '\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5\u03BA\x05\\/\x02\u03B6' +
    '\u03B7\x07\x17\x02\x02\u03B7\u03B9\x05\\/\x02\u03B8\u03B6\x03\x02\x02' +
    '\x02\u03B9\u03BC\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02\u03BA\u03BB' +
    '\x03\x02\x02\x02\u03BB[\x03\x02\x02\x02\u03BC\u03BA\x03\x02\x02\x02\u03BD' +
    '\u03C9\x05\x06\x04\x02\u03BE\u03BF\x07\x1D\x02\x02\u03BF\u03C4\x05\x06' +
    '\x04\x02\u03C0\u03C1\x07\x17\x02\x02\u03C1\u03C3\x05\x06\x04\x02\u03C2' +
    '\u03C0\x03\x02\x02\x02\u03C3\u03C6\x03\x02\x02\x02\u03C4\u03C2\x03\x02' +
    '\x02\x02\u03C4\u03C5\x03\x02\x02\x02\u03C5\u03C7\x03\x02\x02\x02\u03C6' +
    '\u03C4\x03\x02\x02\x02\u03C7\u03C8\x07\x1E\x02\x02\u03C8\u03CA\x03\x02' +
    '\x02\x02\u03C9\u03BE\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA' +
    '\u03CB\x03\x02\x02\x02\u03CB\u03CC\x07\xA8\x02\x02\u03CC\u03CD\x07\x1D' +
    '\x02\x02\u03CD\u03CE\x05T+\x02\u03CE\u03CF\x07\x1E\x02\x02\u03CF]\x03' +
    '\x02\x02\x02\u03D0\u03D1\b0\x01\x02\u03D1\u03D2\x07\x1D\x02\x02\u03D2' +
    '\u03D3\x05T+\x02\u03D3\u03D4\x07\x1E\x02\x02\u03D4\u03D7\x03\x02\x02\x02' +
    '\u03D5\u03D7\x05b2\x02\u03D6\u03D0\x03\x02\x02\x02\u03D6\u03D5\x03\x02' +
    '\x02\x02\u03D7\u03E0\x03\x02\x02\x02\u03D8\u03D9\f\x04\x02\x02\u03D9\u03DB' +
    '\t\x16\x02\x02\u03DA\u03DC\x05P)\x02\u03DB\u03DA\x03\x02\x02\x02\u03DB' +
    '\u03DC\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x05^0\x05' +
    '\u03DE\u03D8\x03\x02\x02\x02\u03DF\u03E2\x03\x02\x02\x02\u03E0\u03DE\x03' +
    '\x02\x02\x02\u03E0\u03E1\x03\x02\x02\x02\u03E1_\x03\x02\x02\x02\u03E2' +
    '\u03E0\x03\x02\x02\x02\u03E3\u03E4\x05^0\x02\u03E4\u03E6\t\x16\x02\x02' +
    '\u03E5\u03E7\x05P)\x02\u03E6\u03E5\x03\x02\x02\x02\u03E6\u03E7\x03\x02' +
    '\x02\x02\u03E7\u03ED\x03\x02\x02\x02\u03E8\u03EE\x05b2\x02\u03E9\u03EA' +
    '\x07\x1D\x02\x02\u03EA\u03EB\x05T+\x02\u03EB\u03EC\x07\x1E\x02\x02\u03EC' +
    '\u03EE\x03\x02\x02\x02\u03ED\u03E8\x03\x02\x02\x02\u03ED\u03E9\x03\x02' +
    '\x02\x02\u03EE\u03F1\x03\x02\x02\x02\u03EF\u03F1\x05b2\x02\u03F0\u03E3' +
    '\x03\x02\x02\x02\u03F0\u03EF\x03\x02\x02\x02\u03F1a\x03\x02\x02\x02\u03F2' +
    '\u0402\x073\x02\x02\u03F3\u0400\x05P)\x02\u03F4\u03F5\x07Q\x02\x02\u03F5' +
    '\u03F6\x07\x1D\x02\x02\u03F6\u03FB\x05$\x13\x02\u03F7\u03F8\x07\x17\x02' +
    '\x02\u03F8\u03FA\x05$\x13\x02\u03F9\u03F7\x03\x02\x02\x02\u03FA\u03FD' +
    '\x03\x02\x02\x02\u03FB\u03F9\x03\x02\x02\x02\u03FB\u03FC\x03\x02\x02\x02' +
    '\u03FC\u03FE\x03\x02\x02\x02\u03FD\u03FB\x03\x02\x02\x02\u03FE\u03FF\x07' +
    '\x1E\x02\x02\u03FF\u0401\x03\x02\x02\x02\u0400\u03F4\x03\x02\x02\x02\u0400' +
    '\u0401\x03\x02\x02\x02\u0401\u0403\x03\x02\x02\x02\u0402\u03F3\x03\x02' +
    '\x02\x02\u0402\u0403\x03\x02\x02\x02\u0403\u0405\x03\x02\x02\x02\u0404' +
    '\u0406\x05d3\x02\u0405\u0404\x03\x02\x02\x02\u0405\u0406\x03\x02\x02\x02' +
    '\u0406\u0410\x03\x02\x02\x02\u0407\u0408\x074\x02\x02\u0408\u040D\x05' +
    'h5\x02\u0409\u040A\x07\x17\x02\x02\u040A\u040C\x05h5\x02\u040B\u0409\x03' +
    '\x02\x02\x02\u040C\u040F\x03\x02\x02\x02\u040D\u040B\x03\x02\x02\x02\u040D' +
    '\u040E\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02' +
    '\x02\x02\u0410\u0407\x03\x02\x02\x02\u0410\u0411\x03\x02\x02\x02\u0411' +
    '\u0414\x03\x02\x02\x02\u0412\u0413\x075\x02\x02\u0413\u0415\x05$\x13\x02' +
    '\u0414\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0417\x03' +
    '\x02\x02\x02\u0416\u0418\x05p9\x02\u0417\u0416\x03\x02\x02\x02\u0417\u0418' +
    '\x03\x02\x02\x02\u0418\u041B\x03\x02\x02\x02\u0419\u041A\x078\x02\x02' +
    '\u041A\u041C\x05$\x13\x02\u041B\u0419\x03\x02\x02\x02\u041B\u041C\x03' +
    '\x02\x02\x02\u041C\u042B\x03\x02\x02\x02\u041D\u041E\x07\x94\x02\x02\u041E' +
    '\u041F\x05\x06\x04\x02\u041F\u0420\x07\xA8\x02\x02\u0420\u0428\x05D#\x02' +
    '\u0421\u0422\x07\x17\x02\x02\u0422\u0423\x05\x06\x04\x02\u0423\u0424\x07' +
    '\xA8\x02\x02\u0424\u0425\x05D#\x02\u0425\u0427\x03\x02\x02\x02\u0426\u0421' +
    '\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u0426\x03\x02\x02\x02' +
    '\u0428\u0429\x03\x02\x02\x02\u0429\u042C\x03\x02\x02\x02\u042A\u0428\x03' +
    '\x02\x02\x02\u042B\u041D\x03\x02\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C' +
    '\u0437\x03\x02\x02\x02\u042D\u042F\x07X\x02\x02\u042E\u0430\x07Y\x02\x02' +
    '\u042F\u042E\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0431\x03' +
    '\x02\x02\x02\u0431\u0433\x05\x06\x04\x02\u0432\u0434\x07!\x02\x02\u0433' +
    '\u0432\x03\x02\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0437\x03\x02' +
    '\x02\x02\u0435\u0437\x05v<\x02\u0436\u03F2\x03\x02\x02\x02\u0436\u042D' +
    '\x03\x02\x02\x02\u0436\u0435\x03\x02\x02\x02\u0437c\x03\x02\x02\x02\u0438' +
    '\u043D\x05f4\x02\u0439\u043A\x07\x17\x02\x02\u043A\u043C\x05f4\x02\u043B' +
    '\u0439\x03\x02\x02\x02\u043C\u043F\x03\x02\x02\x02\u043D\u043B\x03\x02' +
    '\x02\x02\u043D\u043E\x03\x02\x02\x02\u043Ee\x03\x02\x02\x02\u043F\u043D' +
    '\x03\x02\x02\x02\u0440\u0444\x05$\x13\x02\u0441\u0442\x07\xA8\x02\x02' +
    '\u0442\u0445\x05\n\x06\x02\u0443\u0445\x05\x04\x03\x02\u0444\u0441\x03' +
    '\x02\x02\x02\u0444\u0443\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445' +
    'g\x03\x02\x02\x02\u0446\u0447\b5\x01\x02\u0447\u0448\x07\x1D\x02\x02\u0448' +
    '\u0449\x05h5\x02\u0449\u044B\x07\x1E\x02\x02\u044A\u044C\x05l7\x02\u044B' +
    '\u044A\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044F\x03\x02' +
    '\x02\x02\u044D\u044F\x05j6\x02\u044E\u0446\x03\x02\x02\x02\u044E\u044D' +
    '\x03\x02\x02\x02\u044F\u047B\x03\x02\x02\x02\u0450\u0451\f\x07\x02\x02' +
    '\u0451\u0452\x07O\x02\x02\u0452\u0453\x07P\x02\x02\u0453\u047A\x05h5\b' +
    '\u0454\u0455\f\x04\x02\x02\u0455\u045B\x07T\x02\x02\u0456\u045C\x07M\x02' +
    '\x02\u0457\u0459\t\x17\x02\x02\u0458\u045A\x07N\x02\x02\u0459\u0458\x03' +
    '\x02\x02\x02\u0459\u045A\x03\x02\x02\x02\u045A\u045C\x03\x02\x02\x02\u045B' +
    '\u0456\x03\x02\x02\x02\u045B\u0457\x03\x02\x02\x02\u045B\u045C\x03\x02' +
    '\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u045E\x07P\x02\x02\u045E\u047A' +
    '\x05h5\x05\u045F\u0465\f\x06\x02\x02\u0460\u0466\x07M\x02\x02\u0461\u0463' +
    '\t\x17\x02\x02\u0462\u0464\x07N\x02\x02\u0463\u0462\x03\x02\x02\x02\u0463' +
    '\u0464\x03\x02\x02\x02\u0464\u0466\x03\x02\x02\x02\u0465\u0460\x03\x02' +
    '\x02\x02\u0465\u0461\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466' +
    '\u0467\x03\x02\x02\x02\u0467\u0468\x07P\x02\x02\u0468\u0469\x05h5\x02' +
    '\u0469\u046A\x07Q\x02\x02\u046A\u046B\x05$\x13\x02\u046B\u047A\x03\x02' +
    '\x02\x02\u046C\u0472\f\x05\x02\x02\u046D\u0473\x07M\x02\x02\u046E\u0470' +
    '\t\x17\x02\x02\u046F\u0471\x07N\x02\x02\u0470\u046F\x03\x02\x02\x02\u0470' +
    '\u0471\x03\x02\x02\x02\u0471\u0473\x03\x02\x02\x02\u0472\u046D\x03\x02' +
    '\x02\x02\u0472\u046E\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473' +
    '\u0474\x03\x02\x02\x02\u0474\u0475\x07P\x02\x02\u0475\u0476\x05h5\x02' +
    '\u0476\u0477\x07E\x02\x02\u0477\u0478\x05\x86D\x02\u0478\u047A\x03\x02' +
    '\x02\x02\u0479\u0450\x03\x02\x02\x02\u0479\u0454\x03\x02\x02\x02\u0479' +
    '\u045F\x03\x02\x02\x02\u0479\u046C\x03\x02\x02\x02\u047A\u047D\x03\x02' +
    '\x02\x02\u047B\u0479\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C' +
    'i\x03\x02\x02\x02\u047D\u047B\x03\x02\x02\x02\u047E\u0480\x07Y\x02\x02' +
    '\u047F\u047E\x03\x02\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480\u0481\x03' +
    '\x02\x02\x02\u0481\u0483\x05\x06\x04\x02\u0482\u0484\x07!\x02\x02\u0483' +
    '\u0482\x03\x02\x02\x02\u0483\u0484\x03\x02\x02\x02\u0484\u0486\x03\x02' +
    '\x02\x02\u0485\u0487\x05l7\x02\u0486\u0485\x03\x02\x02\x02\u0486\u0487' +
    '\x03\x02\x02\x02\u0487\u0498\x03\x02\x02\x02\u0488\u0489\x07U\x02\x02' +
    '\u0489\u048A\x05\x06\x04\x02\u048A\u048B\x07\x1D\x02\x02\u048B\u0490\x05' +
    '$\x13\x02\u048C\u048D\x07\x17\x02\x02\u048D\u048F\x05$\x13\x02\u048E\u048C' +
    '\x03\x02\x02\x02\u048F\u0492\x03\x02\x02\x02\u0490\u048E\x03\x02\x02\x02' +
    '\u0490\u0491\x03\x02\x02\x02\u0491\u0493\x03\x02\x02\x02\u0492\u0490\x03' +
    '\x02\x02\x02\u0493\u0496\x07\x1E\x02\x02\u0494\u0495\x07V\x02\x02\u0495' +
    '\u0497\x05$\x13\x02\u0496\u0494\x03\x02\x02\x02\u0496\u0497\x03\x02\x02' +
    '\x02\u0497\u0499\x03\x02\x02\x02\u0498\u0488\x03\x02\x02\x02\u0498\u0499' +
    '\x03\x02\x02\x02\u0499\u04ED\x03\x02\x02\x02\u049A\u049C\x07W\x02\x02' +
    '\u049B\u049A\x03\x02\x02\x02\u049B\u049C\x03\x02\x02\x02\u049C\u049D\x03' +
    '\x02\x02\x02\u049D\u049E\x05R*\x02\u049E\u049F\x05l7\x02\u049F\u04ED\x03' +
    '\x02\x02\x02\u04A0\u04A2\x07W\x02\x02\u04A1\u04A0\x03\x02\x02\x02\u04A1' +
    '\u04A2\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A6\x05:\x1E' +
    '\x02\u04A4\u04A5\x071\x02\x02\u04A5\u04A7\x07\xA5\x02\x02\u04A6\u04A4' +
    '\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04BC\x03\x02\x02\x02' +
    '\u04A8\u04A9\x07\xA8\x02\x02\u04A9\u04BD\x05n8\x02\u04AA\u04AC\x07\xA8' +
    '\x02\x02\u04AB\u04AA\x03\x02\x02\x02\u04AB\u04AC\x03\x02\x02\x02\u04AC' +
    '\u04AD\x03\x02\x02\x02\u04AD\u04BA\x05\x06\x04\x02\u04AE\u04AF\x07\x1D' +
    '\x02\x02\u04AF\u04B4\x05\x06\x04\x02\u04B0\u04B1\x07\x17\x02\x02\u04B1' +
    '\u04B3\x05\x06\x04\x02\u04B2\u04B0\x03\x02\x02\x02\u04B3\u04B6\x03\x02' +
    '\x02\x02\u04B4\u04B2\x03\x02\x02\x02\u04B4\u04B5\x03\x02\x02\x02\u04B5' +
    '\u04B7\x03\x02\x02\x02\u04B6\u04B4\x03\x02\x02\x02\u04B7\u04B8\x07\x1E' +
    '\x02\x02\u04B8\u04BB\x03\x02\x02\x02\u04B9\u04BB\x05n8\x02\u04BA\u04AE' +
    '\x03\x02\x02\x02\u04BA\u04B9\x03\x02\x02\x02\u04BA\u04BB\x03\x02\x02\x02' +
    '\u04BB\u04BD\x03\x02\x02\x02\u04BC\u04A8\x03\x02\x02\x02\u04BC\u04AB\x03' +
    '\x02\x02\x02\u04BC\u04BD\x03\x02\x02\x02\u04BD\u04ED\x03\x02\x02\x02\u04BE' +
    '\u04C0\x07W\x02\x02\u04BF\u04BE\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02' +
    '\x02\u04C0\u04C1\x03\x02\x02\x02\u04C1\u04C2\x07\x95\x02\x02\u04C2\u04C3' +
    '\x074\x02\x02\u04C3\u04C4\x07\x1D\x02\x02\u04C4\u04C7\x05:\x1E\x02\u04C5' +
    '\u04C6\x07\xA8\x02\x02\u04C6\u04C8\x05n8\x02\u04C7\u04C5\x03\x02\x02\x02' +
    '\u04C7\u04C8\x03\x02\x02\x02\u04C8\u04D1\x03\x02\x02\x02\u04C9\u04CA\x07' +
    '\x17\x02\x02\u04CA\u04CD\x05:\x1E\x02\u04CB\u04CC\x07\xA8\x02\x02\u04CC' +
    '\u04CE\x05n8\x02\u04CD\u04CB\x03\x02\x02\x02\u04CD\u04CE\x03\x02\x02\x02' +
    '\u04CE\u04D0\x03\x02\x02\x02\u04CF\u04C9\x03\x02\x02\x02\u04D0\u04D3\x03' +
    '\x02\x02\x02\u04D1\u04CF\x03\x02\x02\x02\u04D1\u04D2\x03\x02\x02\x02\u04D2' +
    '\u04D4\x03\x02\x02\x02\u04D3\u04D1\x03\x02\x02\x02\u04D4\u04D7\x07\x1E' +
    '\x02\x02\u04D5\u04D6\x071\x02\x02\u04D6\u04D8\x07\xA5\x02\x02\u04D7\u04D5' +
    '\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04EA\x03\x02\x02\x02' +
    '\u04D9\u04DB\x07\xA8\x02\x02\u04DA\u04D9\x03\x02\x02\x02\u04DA\u04DB\x03' +
    '\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04E8\x05\x06\x04\x02\u04DD' +
    '\u04DE\x07\x1D\x02\x02\u04DE\u04E3\x05\x06\x04\x02\u04DF\u04E0\x07\x17' +
    '\x02\x02\u04E0\u04E2\x05\x06\x04\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2' +
    '\u04E5\x03\x02\x02\x02\u04E3\u04E1\x03\x02\x02\x02\u04E3\u04E4\x03\x02' +
    '\x02\x02\u04E4\u04E6\x03\x02\x02\x02\u04E5\u04E3\x03\x02\x02\x02\u04E6' +
    '\u04E7\x07\x1E\x02\x02\u04E7\u04E9\x03\x02\x02\x02\u04E8\u04DD\x03\x02' +
    '\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EB\x03\x02\x02\x02\u04EA' +
    '\u04DA\x03\x02\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04ED\x03\x02' +
    '\x02\x02\u04EC\u047F\x03\x02\x02\x02\u04EC\u049B\x03\x02\x02\x02\u04EC' +
    '\u04A1\x03\x02\x02\x02\u04EC\u04BF\x03\x02\x02\x02\u04EDk\x03\x02\x02' +
    '\x02\u04EE\u04F0\x07\xA8\x02\x02\u04EF\u04EE\x03\x02\x02\x02\u04EF\u04F0' +
    '\x03\x02\x02\x02\u04F0\u04F1\x03\x02\x02\x02\u04F1\u04FD\x05\x06\x04\x02' +
    '\u04F2\u04F3\x07\x1D\x02\x02\u04F3\u04F8\x05\x06\x04\x02\u04F4\u04F5\x07' +
    '\x17\x02\x02\u04F5\u04F7\x05\x06\x04\x02\u04F6\u04F4\x03\x02\x02\x02\u04F7' +
    '\u04FA\x03\x02\x02\x02\u04F8\u04F6\x03\x02\x02\x02\u04F8\u04F9\x03\x02' +
    '\x02\x02\u04F9\u04FB\x03\x02\x02\x02\u04FA\u04F8\x03\x02\x02\x02\u04FB' +
    '\u04FC\x07\x1E\x02\x02\u04FC\u04FE\x03\x02\x02\x02\u04FD\u04F2\x03\x02' +
    '\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FEm\x03\x02\x02\x02\u04FF\u0500' +
    '\x07\x1D\x02\x02\u0500\u0501\x05\x06\x04\x02\u0501\u0508\x05\x18\r\x02' +
    '\u0502\u0503\x07\x17\x02\x02\u0503\u0504\x05\x06\x04\x02\u0504\u0505\x05' +
    '\x18\r\x02\u0505\u0507\x03\x02\x02\x02\u0506\u0502\x03\x02\x02\x02\u0507' +
    '\u050A\x03\x02\x02\x02\u0508\u0506\x03\x02\x02\x02\u0508\u0509\x03\x02' +
    '\x02\x02\u0509\u050B\x03\x02\x02\x02\u050A\u0508\x03\x02\x02\x02\u050B' +
    '\u050C\x07\x1E\x02\x02\u050Co\x03\x02\x02\x02\u050D\u050E\x076\x02\x02' +
    '\u050E\u050F\x077\x02\x02\u050F\u0510\x05r:\x02\u0510q\x03\x02\x02\x02' +
    '\u0511\u0516\x05t;\x02\u0512\u0513\x07\x17\x02\x02\u0513\u0515\x05t;\x02' +
    '\u0514\u0512\x03\x02\x02\x02\u0515\u0518\x03\x02\x02\x02\u0516\u0514\x03' +
    '\x02\x02\x02\u0516\u0517\x03\x02\x02\x02\u0517s\x03\x02\x02\x02\u0518' +
    '\u0516\x03\x02\x02\x02\u0519\u0527\x05$\x13\x02\u051A\u051B\x07\x1D\x02' +
    '\x02\u051B\u0527\x07\x1E\x02\x02\u051C\u0521\x07\xA1\x02\x02\u051D\u0521' +
    '\x07\xA2\x02\x02\u051E\u051F\x07\xA3\x02\x02\u051F\u0521\x07\xA4\x02\x02' +
    '\u0520\u051C\x03\x02\x02\x02\u0520\u051D\x03\x02\x02\x02\u0520\u051E\x03' +
    '\x02\x02\x02\u0521\u0522\x03\x02\x02\x02\u0522\u0523\x07\x1D\x02\x02\u0523' +
    '\u0524\x05r:\x02\u0524\u0525\x07\x1E\x02\x02\u0525\u0527\x03\x02\x02\x02' +
    '\u0526\u0519\x03\x02\x02\x02\u0526\u051A\x03\x02\x02\x02\u0526\u0520\x03' +
    '\x02\x02\x02\u0527u\x03\x02\x02\x02\u0528\u0529\x07R\x02\x02\u0529\u052E' +
    '\x05x=\x02\u052A\u052B\x07\x17\x02\x02\u052B\u052D\x05x=\x02\u052C\u052A' +
    '\x03\x02\x02\x02\u052D\u0530\x03\x02\x02\x02\u052E\u052C\x03\x02\x02\x02' +
    '\u052E\u052F\x03\x02\x02\x02\u052Fw\x03\x02\x02\x02\u0530\u052E\x03\x02' +
    '\x02\x02\u0531\u0534\x07\x1D\x02\x02\u0532\u0535\x05$\x13\x02\u0533\u0535' +
    '\x07S\x02\x02\u0534\u0532\x03\x02\x02\x02\u0534\u0533\x03\x02\x02\x02' +
    '\u0535\u053D\x03\x02\x02\x02\u0536\u0539\x07\x17\x02\x02\u0537\u053A\x05' +
    '$\x13\x02\u0538\u053A\x07S\x02\x02\u0539\u0537\x03\x02\x02\x02\u0539\u0538' +
    '\x03\x02\x02\x02\u053A\u053C\x03\x02\x02\x02\u053B\u0536\x03\x02\x02\x02' +
    '\u053C\u053F\x03\x02\x02\x02\u053D\u053B\x03\x02\x02\x02\u053D\u053E\x03' +
    '\x02\x02\x02\u053E\u0540\x03\x02\x02\x02\u053F\u053D\x03\x02\x02\x02\u0540' +
    '\u0541\x07\x1E\x02\x02\u0541y\x03\x02\x02\x02\u0542\u0543\x079\x02\x02' +
    '\u0543\u0544\x077\x02\x02\u0544\u0545\x05|?\x02\u0545{\x03\x02\x02\x02' +
    '\u0546\u054B\x05~@\x02\u0547\u0548\x07\x17\x02\x02\u0548\u054A\x05~@\x02' +
    '\u0549\u0547\x03\x02\x02\x02\u054A\u054D\x03\x02\x02\x02\u054B\u0549\x03' +
    '\x02\x02\x02\u054B\u054C\x03\x02\x02\x02\u054C}\x03\x02\x02\x02\u054D' +
    '\u054B\x03\x02\x02\x02\u054E\u0550\x05$\x13\x02\u054F\u0551\x05\x06\x04' +
    '\x02\u0550\u054F\x03\x02\x02\x02\u0550\u0551\x03\x02\x02\x02\u0551\u0553' +
    '\x03\x02\x02\x02\u0552\u0554\x05\x80A\x02\u0553\u0552\x03\x02\x02\x02' +
    '\u0553\u0554\x03\x02\x02\x02\u0554\u0556\x03\x02\x02\x02\u0555\u0557\x05' +
    '\x82B\x02\u0556\u0555\x03\x02\x02\x02\u0556\u0557\x03\x02\x02\x02\u0557' +
    '\x7F\x03\x02\x02\x02\u0558\u055D\x07D\x02\x02\u0559\u055D\x07C\x02\x02' +
    '\u055A\u055B\x07E\x02\x02\u055B\u055D\x05*\x16\x02\u055C\u0558\x03\x02' +
    '\x02\x02\u055C\u0559\x03\x02\x02\x02\u055C\u055A\x03\x02\x02\x02\u055D' +
    '\x81\x03\x02\x02\x02\u055E\u055F\x07G\x02\x02\u055F\u0560\t\x18\x02\x02' +
    '\u0560\x83\x03\x02\x02\x02\u0561\u0562\x07\b\x02\x02\u0562\x85\x03\x02' +
    '\x02\x02\u0563\u0564\x07\x1D\x02\x02\u0564\u0565\x05\x88E\x02\u0565\u0566' +
    '\x07\x1E\x02\x02\u0566\x87\x03\x02\x02\x02\u0567\u056C\x05\x06\x04\x02' +
    '\u0568\u0569\x07\x17\x02\x02\u0569\u056B\x05\x06\x04\x02\u056A\u0568\x03' +
    '\x02\x02\x02\u056B\u056E\x03\x02\x02\x02\u056C\u056A\x03\x02\x02\x02\u056C' +
    '\u056D\x03\x02\x02\x02\u056D\x89\x03\x02\x02\x02\u056E\u056C\x03\x02\x02' +
    '\x02\u056F\u0570\t\x19\x02\x02\u0570\x8B\x03\x02\x02\x02\u0571\u0572\x07' +
    '\x93\x02\x02\u0572\u0573\x077\x02\x02\u0573\u0578\x05$\x13\x02\u0574\u0575' +
    '\x07\x17\x02\x02\u0575\u0577\x05$\x13\x02\u0576\u0574\x03\x02\x02\x02' +
    '\u0577\u057A\x03\x02\x02\x02\u0578\u0576\x03\x02\x02\x02\u0578\u0579\x03' +
    '\x02\x02\x02\u0579\x8D\x03\x02\x02\x02\u057A\u0578\x03\x02\x02\x02\u057B' +
    '\u057C\x07\x91\x02\x02\u057C\u057D\x05\x06\x04\x02\u057D\x8F\x03\x02\x02' +
    '\x02\u057E\u057F\x07%\x02\x02\u057F\u058E\x05\n\x06\x02\u0580\u0581\x07' +
    ')\x02\x02\u0581\u0582\x05$\x13\x02\u0582\u0583\x07*\x02\x02\u0583\u058E' +
    '\x03\x02\x02\x02\u0584\u0586\x07)\x02\x02\u0585\u0587\x05$\x13\x02\u0586' +
    '\u0585\x03\x02\x02\x02\u0586\u0587\x03\x02\x02\x02\u0587\u0588\x03\x02' +
    '\x02\x02\u0588\u058A\x07\x15\x02\x02\u0589\u058B\x05$\x13\x02\u058A\u0589' +
    '\x03\x02\x02\x02\u058A\u058B\x03\x02\x02\x02\u058B\u058C\x03\x02\x02\x02' +
    '\u058C\u058E\x07*\x02\x02\u058D\u057E\x03\x02\x02\x02\u058D\u0580\x03' +
    '\x02\x02\x02\u058D\u0584\x03\x02\x02\x02\u058E\x91\x03\x02\x02\x02\u058F' +
    '\u0591\x05\x90I\x02\u0590\u058F\x03\x02\x02\x02\u0591\u0592\x03\x02\x02' +
    '\x02\u0592\u0590\x03\x02\x02\x02\u0592\u0593\x03\x02\x02\x02\u0593\u059D' +
    '\x03\x02\x02\x02\u0594\u0596\x05\x90I\x02\u0595\u0594\x03\x02\x02\x02' +
    '\u0596\u0599\x03\x02\x02\x02\u0597\u0595\x03\x02\x02\x02\u0597\u0598\x03' +
    '\x02\x02\x02\u0598\u059A\x03\x02\x02\x02\u0599\u0597\x03\x02\x02\x02\u059A' +
    '\u059B\x07%\x02\x02\u059B\u059D\x07!\x02\x02\u059C\u0590\x03\x02\x02\x02' +
    '\u059C\u0597\x03\x02\x02\x02\u059D\x93\x03\x02\x02\x02\u059E\u05A1\x05' +
    '\x06\x04\x02\u059F\u05A1\x05\x84C\x02\u05A0\u059E\x03\x02\x02\x02\u05A0' +
    '\u059F\x03\x02\x02\x02\u05A1\u05A3\x03\x02\x02\x02\u05A2\u05A4\x05\x92' +
    'J\x02\u05A3\u05A2\x03\x02\x02\x02\u05A3\u05A4\x03\x02\x02\x02\u05A4\x95' +
    '\x03\x02\x02\x02\u05A5\u05B3\x05\x8AF\x02\u05A6\u05B3\x07\x14\x02\x02' +
    '\u05A7\u05B3\x07\x18\x02\x02\u05A8\u05B3\x07\x19\x02\x02\u05A9\u05B3\x07' +
    '\x1A\x02\x02\u05AA\u05B3\x07\x1B\x02\x02\u05AB\u05B3\x07\x1C\x02\x02\u05AC' +
    '\u05B3\x07\x1F\x02\x02\u05AD\u05B3\x07 \x02\x02\u05AE\u05B3\x07!\x02\x02' +
    '\u05AF\u05B3\x07"\x02\x02\u05B0\u05B3\x07#\x02\x02\u05B1\u05B3\x07$\x02' +
    '\x02\u05B2\u05A5\x03\x02\x02\x02\u05B2\u05A6\x03\x02\x02\x02\u05B2\u05A7' +
    '\x03\x02\x02\x02\u05B2\u05A8\x03\x02\x02\x02\u05B2\u05A9\x03\x02\x02\x02' +
    '\u05B2\u05AA\x03\x02\x02\x02\u05B2\u05AB\x03\x02\x02\x02\u05B2\u05AC\x03' +
    '\x02\x02\x02\u05B2\u05AD\x03\x02\x02\x02\u05B2\u05AE\x03\x02\x02\x02\u05B2' +
    '\u05AF\x03\x02\x02\x02\u05B2\u05B0\x03\x02\x02\x02\u05B2\u05B1\x03\x02' +
    '\x02\x02\u05B3\x97\x03\x02\x02\x02\u05B4\u05B8\x07\f\x02\x02\u05B5\u05B7' +
    '\x07\u0219\x02\x02\u05B6\u05B5\x03\x02\x02\x02\u05B7\u05BA\x03\x02\x02' +
    '\x02\u05B8\u05B6\x03\x02\x02\x02\u05B8\u05B9\x03\x02\x02\x02\u05B9\u05BB' +
    '\x03\x02\x02\x02\u05BA\u05B8\x03\x02\x02\x02\u05BB\u05BE\x07\u021A\x02' +
    '\x02\u05BC\u05BE\x07\v\x02\x02\u05BD\u05B4\x03\x02\x02\x02\u05BD\u05BC' +
    '\x03\x02\x02\x02\u05BE\x99\x03\x02\x02\x02\u05BF\u05C0\t\x1A\x02\x02\u05C0' +
    '\x9B\x03\x02\x02\x02\u05C1\u05C2\x07\u020E\x02\x02\u05C2\u05C3\x07\x1D' +
    '\x02\x02\u05C3\u05C4\x05$\x13\x02\u05C4\u05C5\x07\x1E\x02\x02\u05C5\x9D' +
    '\x03\x02\x02\x02\u05C6\u05C7\x07\u020F\x02\x02\u05C7\u05C8\x07\x1D\x02' +
    '\x02\u05C8\u05CD\x05$\x13\x02\u05C9\u05CA\x07\x17\x02\x02\u05CA\u05CC' +
    '\x05$\x13\x02\u05CB\u05C9\x03\x02\x02\x02\u05CC\u05CF\x03\x02\x02\x02' +
    '\u05CD\u05CB\x03\x02\x02\x02\u05CD\u05CE\x03\x02\x02\x02\u05CE\u05D0\x03' +
    '\x02\x02\x02\u05CF\u05CD\x03\x02\x02\x02\u05D0\u05D1\x07\x1E\x02\x02\u05D1' +
    '\x9F\x03\x02\x02\x02\u05D2\u05D3\x07\u0210\x02\x02\u05D3\u05D4\x07\x1D' +
    '\x02\x02\u05D4\u05D5\x07\u017A\x02\x02\u05D5\u05EB\x05\x06\x04\x02\u05D6' +
    '\u05D7\x07\x17\x02\x02\u05D7\u05D8\x07\u020D\x02\x02\u05D8\u05D9\x07\x1D' +
    '\x02\x02\u05D9\u05DC\x05$\x13\x02\u05DA\u05DB\x07\xA8\x02\x02\u05DB\u05DD' +
    '\x05\x06\x04\x02\u05DC\u05DA\x03\x02\x02\x02\u05DC\u05DD\x03\x02\x02\x02' +
    '\u05DD\u05E6\x03\x02\x02\x02\u05DE\u05DF\x07\x17\x02\x02\u05DF\u05E2\x05' +
    '$\x13\x02\u05E0\u05E1\x07\xA8\x02\x02\u05E1\u05E3\x05\x06\x04\x02\u05E2' +
    '\u05E0\x03\x02\x02\x02\u05E2\u05E3\x03\x02\x02\x02\u05E3\u05E5\x03\x02' +
    '\x02\x02\u05E4\u05DE\x03\x02\x02\x02\u05E5\u05E8\x03\x02\x02\x02\u05E6' +
    '\u05E4\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05E9\x03\x02' +
    '\x02\x02\u05E8\u05E6\x03\x02\x02\x02\u05E9\u05EA\x07\x1E\x02\x02\u05EA' +
    '\u05EC\x03\x02\x02\x02\u05EB\u05D6\x03\x02\x02\x02\u05EB\u05EC\x03\x02' +
    '\x02\x02\u05EC\u05F1\x03\x02\x02\x02\u05ED\u05EE\x07\x17\x02\x02\u05EE' +
    '\u05F0\x05$\x13\x02\u05EF\u05ED\x03\x02\x02\x02\u05F0\u05F3\x03\x02\x02' +
    '\x02\u05F1\u05EF\x03\x02\x02\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2\u05F4' +
    '\x03\x02\x02\x02\u05F3\u05F1\x03\x02\x02\x02\u05F4\u05F5\x07\x1E\x02\x02' +
    '\u05F5\xA1\x03\x02\x02\x02\u05F6\u05F7\x07\u0212\x02\x02\u05F7\u05F8\x07' +
    '\x1D\x02\x02\u05F8\u05FB\x05$\x13\x02\u05F9\u05FA\x07\xA8\x02\x02\u05FA' +
    '\u05FC\x05\x06\x04\x02\u05FB\u05F9\x03\x02\x02\x02\u05FB\u05FC\x03\x02' +
    '\x02\x02\u05FC\u0605\x03\x02\x02\x02\u05FD\u05FE\x07\x17\x02\x02\u05FE' +
    '\u0601\x05$\x13\x02\u05FF\u0600\x07\xA8\x02\x02\u0600\u0602\x05\x06\x04' +
    '\x02\u0601\u05FF\x03\x02\x02\x02\u0601\u0602\x03\x02\x02\x02\u0602\u0604' +
    '\x03\x02\x02\x02\u0603\u05FD\x03\x02\x02\x02\u0604\u0607\x03\x02\x02\x02' +
    '\u0605\u0603\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606\u0608\x03' +
    '\x02\x02\x02\u0607\u0605\x03\x02\x02\x02\u0608\u0609\x07\x1E\x02\x02\u0609' +
    '\xA3\x03\x02\x02\x02\u060A\u060B\x07\u0213\x02\x02\u060B\u060C\x07\x1D' +
    '\x02\x02\u060C\u060D';
  private static readonly _serializedATNSegment3: string =
    '\x07\u017A\x02\x02\u060D\u0610\x05\x06\x04\x02\u060E\u060F\x07\x17\x02' +
    '\x02\u060F\u0611\x05$\x13\x02\u0610\u060E\x03\x02\x02\x02\u0610\u0611' +
    '\x03\x02\x02\x02\u0611\u0612\x03\x02\x02\x02\u0612\u0613\x07\x1E\x02\x02' +
    '\u0613\xA5\x03\x02\x02\x02\u0614\u0615\x07\u0214\x02\x02\u0615\u0616\x07' +
    '\x1D\x02\x02\u0616\u0617\x05$\x13\x02\u0617\u0618\x07\x17\x02\x02\u0618' +
    '\u061C\x07\u0205\x02\x02\u0619\u061D\x05$\x13\x02\u061A\u061B\x07\x9F' +
    '\x02\x02\u061B\u061D\x07\u0201\x02\x02\u061C\u0619\x03\x02\x02\x02\u061C' +
    '\u061A\x03\x02\x02\x02\u061D\u0626\x03\x02\x02\x02\u061E\u061F\x07\x17' +
    '\x02\x02\u061F\u0624\x07\u01CC\x02\x02\u0620\u0625\x07\u0218\x02\x02\u0621' +
    '\u0625\x07\x9F\x02\x02\u0622\u0623\x07\x9F\x02\x02\u0623\u0625\x07\u0201' +
    '\x02\x02\u0624\u0620\x03\x02\x02\x02\u0624\u0621\x03\x02\x02\x02\u0624' +
    '\u0622\x03\x02\x02\x02\u0625\u0627\x03\x02\x02\x02\u0626\u061E\x03\x02' +
    '\x02\x02\u0626\u0627\x03\x02\x02\x02\u0627\u0628\x03\x02\x02\x02\u0628' +
    '\u0629\x07\x1E\x02\x02\u0629\xA7\x03\x02\x02\x02\u062A\u062B\x07\u020C' +
    '\x02\x02\u062B\u062C\x07\x1D\x02\x02\u062C\u062D\x07\u017A\x02\x02\u062D' +
    '\u0643\x05\x06\x04\x02\u062E\u062F\x07\x17\x02\x02\u062F\u0630\x07\u020D' +
    '\x02\x02\u0630\u0631\x07\x1D\x02\x02\u0631\u0634\x05$\x13\x02\u0632\u0633' +
    '\x07\xA8\x02\x02\u0633\u0635\x05\x06\x04\x02\u0634\u0632\x03\x02\x02\x02' +
    '\u0634\u0635\x03\x02\x02\x02\u0635\u063E\x03\x02\x02\x02\u0636\u0637\x07' +
    '\x17\x02\x02\u0637\u063A\x05$\x13\x02\u0638\u0639\x07\xA8\x02\x02\u0639' +
    '\u063B\x05\x06\x04\x02\u063A\u0638\x03\x02\x02\x02\u063A\u063B\x03\x02' +
    '\x02\x02\u063B\u063D\x03\x02\x02\x02\u063C\u0636\x03\x02\x02\x02\u063D' +
    '\u0640\x03\x02\x02\x02\u063E\u063C\x03\x02\x02\x02\u063E\u063F\x03\x02' +
    '\x02\x02\u063F\u0641\x03\x02\x02\x02\u0640\u063E\x03\x02\x02\x02\u0641' +
    '\u0642\x07\x1E\x02\x02\u0642\u0644\x03\x02\x02\x02\u0643\u062E\x03\x02' +
    '\x02\x02\u0643\u0644\x03\x02\x02\x02\u0644\u0649\x03\x02\x02\x02\u0645' +
    '\u0646\x07\x17\x02\x02\u0646\u0648\x05$\x13\x02\u0647\u0645\x03\x02\x02' +
    '\x02\u0648\u064B\x03\x02\x02\x02\u0649\u0647\x03\x02\x02\x02\u0649\u064A' +
    '\x03\x02\x02\x02\u064A\u064C\x03\x02\x02\x02\u064B\u0649\x03\x02\x02\x02' +
    '\u064C\u064D\x07\x1E\x02\x02\u064D\xA9\x03\x02\x02\x02\u064E\u064F\x07' +
    '\u0211\x02\x02\u064F\u0650\x07\x1D\x02\x02\u0650\u0651\x05$\x13\x02\u0651' +
    '\u0654\x07\u018A\x02\x02\u0652\u0653\x077\x02\x02\u0653\u0655\x07\u01A4' +
    '\x02\x02\u0654\u0652\x03\x02\x02\x02\u0654\u0655\x03\x02\x02\x02\u0655' +
    '\u0656\x03\x02\x02\x02\u0656\u0659\x05$\x13\x02\u0657\u0658\x077\x02\x02' +
    '\u0658\u065A\x07\u01A4\x02\x02\u0659\u0657\x03\x02\x02\x02\u0659\u065A' +
    '\x03\x02\x02\x02\u065A\u065B\x03\x02\x02\x02\u065B\u065C\x07\x1E\x02\x02' +
    '\u065C\xAB\x03\x02\x02\x02\u065D\u065E\x07\u0209\x02\x02\u065E\u065F\x07' +
    '\x1D\x02\x02\u065F\u0660\x05$\x13\x02\u0660\u0661\x07\x1E\x02\x02\u0661' +
    '\xAD\x03\x02\x02\x02\u0662\u0663\x07\u020A\x02\x02\u0663\u0664\x07\x1D' +
    '\x02\x02\u0664\u0665\x05$\x13\x02\u0665\u0666\x07\x1E\x02\x02\u0666\xAF' +
    '\x03\x02\x02\x02\u0667\u0668\x07\u020B\x02\x02\u0668\u0669\x07\x1D\x02' +
    '\x02\u0669\u066A\x05$\x13\x02\u066A\u066B\x07\x1E\x02\x02\u066B\xB1\x03' +
    '\x02\x02\x02\u066C\u066D\x07\u0216\x02\x02\u066D\u066E\x07\x1D\x02\x02' +
    '\u066E\u066F\x05$\x13\x02\u066F\u0670\x07\x17\x02\x02\u0670\u067D\x05' +
    '$\x13\x02\u0671\u0672\x07v\x02\x02\u0672\u0673\x07)\x02\x02\u0673\u0674' +
    '\x07v\x02\x02\u0674\u0679\x07)\x02\x02\u0675\u0676\x05$\x13\x02\u0676' +
    '\u0677\x07\x17\x02\x02\u0677\u0678\x05$\x13\x02\u0678\u067A\x03\x02\x02' +
    '\x02\u0679\u0675\x03\x02\x02\x02\u0679\u067A\x03\x02\x02\x02\u067A\u067B' +
    '\x03\x02\x02\x02\u067B\u067C\x07*\x02\x02\u067C\u067E\x07*\x02\x02\u067D' +
    '\u0671\x03\x02\x02\x02\u067D\u067E\x03\x02\x02\x02\u067E\u067F\x03\x02' +
    '\x02\x02\u067F\u0680\x07\x1E\x02\x02\u0680\xB3\x03\x02\x02\x02\u0681\u0682' +
    '\x07\u0217\x02\x02\u0682\u0683\x07\x1D\x02\x02\u0683\u0684\x05$\x13\x02' +
    '\u0684\u0685\x07\x17\x02\x02\u0685\u0692\x05$\x13\x02\u0686\u0687\x07' +
    'v\x02\x02\u0687\u0688\x07)\x02\x02\u0688\u0689\x07v\x02\x02\u0689\u068E' +
    '\x07)\x02\x02\u068A\u068B\x05$\x13\x02\u068B\u068C\x07\x17\x02\x02\u068C' +
    '\u068D\x05$\x13\x02\u068D\u068F\x03\x02\x02\x02\u068E\u068A\x03\x02\x02' +
    '\x02\u068E\u068F\x03\x02\x02\x02\u068F\u0690\x03\x02\x02\x02\u0690\u0691' +
    '\x07*\x02\x02\u0691\u0693\x07*\x02\x02\u0692\u0686\x03\x02\x02\x02\u0692' +
    '\u0693\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02\u0694\u0695\x07\x1E' +
    '\x02\x02\u0695\xB5\x03\x02\x02\x02\u0696\u0697\x07\u0215\x02\x02\u0697' +
    '\u06AA\x07\x1D\x02\x02\u0698\u0699\x07\u021B\x02\x02\u0699\u069A\x07\x1D' +
    '\x02\x02\u069A\u069B\x05$\x13\x02\u069B\u069C\x07\xA8\x02\x02\u069C\u06A4' +
    '\x05\x06\x04\x02\u069D\u069E\x07\x17\x02\x02\u069E\u069F\x05$\x13\x02' +
    '\u069F\u06A0\x07\xA8\x02\x02\u06A0\u06A1\x05\x06\x04\x02\u06A1\u06A3\x03' +
    '\x02\x02\x02\u06A2\u069D\x03\x02\x02\x02\u06A3\u06A6\x03\x02\x02\x02\u06A4' +
    '\u06A2\x03\x02\x02\x02\u06A4\u06A5\x03\x02\x02\x02\u06A5\u06A7\x03\x02' +
    '\x02\x02\u06A6\u06A4\x03\x02\x02\x02\u06A7\u06A8\x07\x1E\x02\x02\u06A8' +
    '\u06A9\x07\x17\x02\x02\u06A9\u06AB\x03\x02\x02\x02\u06AA\u0698\x03\x02' +
    '\x02\x02\u06AA\u06AB\x03\x02\x02\x02\u06AB\u06AC\x03\x02\x02\x02\u06AC' +
    '\u06AD\x05$\x13\x02\u06AD\u06B0\x07\u018A\x02\x02\u06AE\u06AF\x077\x02' +
    '\x02\u06AF\u06B1\x07\u01A4\x02\x02\u06B0\u06AE\x03\x02\x02\x02\u06B0\u06B1' +
    '\x03\x02\x02\x02\u06B1\u06B2\x03\x02\x02\x02\u06B2\u06B5\x05$\x13\x02' +
    '\u06B3\u06B4\x077\x02\x02\u06B4\u06B6\x07\u01A4\x02\x02\u06B5\u06B3\x03' +
    '\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6\u06B7\x03\x02\x02\x02\u06B7' +
    '\u06B8\x07\xEB\x02\x02\u06B8\u06CA\x05\x06\x04\x02\u06B9\u06BC\x05\x18' +
    '\r\x02\u06BA\u06BB\x07\u018B\x02\x02\u06BB\u06BD\x05$\x13\x02\u06BC\u06BA' +
    '\x03\x02\x02\x02\u06BC\u06BD\x03\x02\x02\x02\u06BD\u06C0\x03\x02\x02\x02' +
    '\u06BE\u06BF\x07S\x02\x02\u06BF\u06C1\x05$\x13\x02\u06C0\u06BE\x03\x02' +
    '\x02\x02\u06C0\u06C1\x03\x02\x02\x02\u06C1\u06C6\x03\x02\x02\x02\u06C2' +
    '\u06C4\x07k\x02\x02\u06C3\u06C2\x03\x02\x02\x02\u06C3\u06C4\x03\x02\x02' +
    '\x02\u06C4\u06C5\x03\x02\x02\x02\u06C5\u06C7\x07m\x02\x02\u06C6\u06C3' +
    '\x03\x02\x02\x02\u06C6\u06C7\x03\x02\x02\x02\u06C7\u06CB\x03\x02\x02\x02' +
    '\u06C8\u06C9\x07\u021C\x02\x02\u06C9\u06CB\x07\xA5\x02\x02\u06CA\u06B9' +
    '\x03\x02\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CB\u06E3\x03\x02\x02\x02' +
    '\u06CC\u06CD\x07\x17\x02\x02\u06CD\u06DF\x05\x06\x04\x02\u06CE\u06D1\x05' +
    '\x18\r\x02\u06CF\u06D0\x07\u018B\x02\x02\u06D0\u06D2\x05$\x13\x02\u06D1' +
    '\u06CF\x03\x02\x02\x02\u06D1\u06D2\x03\x02\x02\x02\u06D2\u06D5\x03\x02' +
    '\x02\x02\u06D3\u06D4\x07S\x02\x02\u06D4\u06D6\x05$\x13\x02\u06D5\u06D3' +
    '\x03\x02\x02\x02\u06D5\u06D6\x03\x02\x02\x02\u06D6\u06DB\x03\x02\x02\x02' +
    '\u06D7\u06D9\x07k\x02\x02\u06D8\u06D7\x03\x02\x02\x02\u06D8\u06D9\x03' +
    '\x02\x02\x02\u06D9\u06DA\x03\x02\x02\x02\u06DA\u06DC\x07m\x02\x02\u06DB' +
    '\u06D8\x03\x02\x02\x02\u06DB\u06DC\x03\x02\x02\x02\u06DC\u06E0\x03\x02' +
    '\x02\x02\u06DD\u06DE\x07\u021C\x02\x02\u06DE\u06E0\x07\xA5\x02\x02\u06DF' +
    '\u06CE\x03\x02\x02\x02\u06DF\u06DD\x03\x02\x02\x02\u06E0\u06E2\x03\x02' +
    '\x02\x02\u06E1\u06CC\x03\x02\x02\x02\u06E2\u06E5\x03\x02\x02\x02\u06E3' +
    '\u06E1\x03\x02\x02\x02\u06E3\u06E4\x03\x02\x02\x02\u06E4\u06E6\x03\x02' +
    '\x02\x02\u06E5\u06E3\x03\x02\x02\x02\u06E6\u06E7\x07\x1E\x02\x02\u06E7' +
    '\xB7\x03\x02\x02\x02\u06E8\u06E9\x07\u01DA\x02\x02\u06E9\u06EA\x07\x1D' +
    '\x02\x02\u06EA\u06EB\x05\x06\x04\x02\u06EB\u06EC\x07\x17\x02\x02\u06EC' +
    '\u06ED\x05\x9AN\x02\u06ED\u06EE\x07\x17\x02\x02\u06EE\u06EF\x05\x9AN\x02' +
    '\u06EF\u06F0\x07\x17\x02\x02\u06F0\u06F1\x05$\x13\x02\u06F1\u06F2\x07' +
    '\x1E\x02\x02\u06F2\xB9\x03\x02\x02\x02\u06F3\u0703\x05\x9CO\x02\u06F4' +
    '\u0703\x05\x9EP\x02\u06F5\u0703\x05\xA0Q\x02\u06F6\u0703\x05\xA2R\x02' +
    '\u06F7\u0703\x05\xA4S\x02\u06F8\u0703\x05\xA6T\x02\u06F9\u0703\x05\xA8' +
    'U\x02\u06FA\u0703\x05\xAAV\x02\u06FB\u0703\x05\xACW\x02\u06FC\u0703\x05' +
    '\xAEX\x02\u06FD\u0703\x05\xB0Y\x02\u06FE\u0703\x05\xB2Z\x02\u06FF\u0703' +
    '\x05\xB4[\x02\u0700\u0703\x05\xB6\\\x02\u0701\u0703\x05\xB8]\x02\u0702' +
    '\u06F3\x03\x02\x02\x02\u0702\u06F4\x03\x02\x02\x02\u0702\u06F5\x03\x02' +
    '\x02\x02\u0702\u06F6\x03\x02\x02\x02\u0702\u06F7\x03\x02\x02\x02\u0702' +
    '\u06F8\x03\x02\x02\x02\u0702\u06F9\x03\x02\x02\x02\u0702\u06FA\x03\x02' +
    '\x02\x02\u0702\u06FB\x03\x02\x02\x02\u0702\u06FC\x03\x02\x02\x02\u0702' +
    '\u06FD\x03\x02\x02\x02\u0702\u06FE\x03\x02\x02\x02\u0702\u06FF\x03\x02' +
    '\x02\x02\u0702\u0700\x03\x02\x02\x02\u0702\u0701\x03\x02\x02\x02\u0703' +
    '\xBB\x03\x02\x02\x02\xF3\xBD\xC2\xC9\xCC\xD0\xD8\xDD\xE2\xE9\xFA\xFE\u0103' +
    '\u0108\u010A\u010E\u0115\u0118\u011D\u0121\u0127\u012D\u0130\u0133\u0137' +
    '\u013A\u013E\u0141\u0145\u014B\u0150\u0154\u0159\u015D\u0166\u016B\u016D' +
    '\u018A\u0194\u019D\u01A5\u01B1\u01C7\u01CB\u01D3\u01D9\u01DE\u01E4\u01F0' +
    '\u0204\u020E\u0211\u0218\u021C\u0221\u0227\u022D\u0238\u023A\u0242\u024A' +
    '\u0254\u0269\u0276\u027C\u0282\u0289\u028B\u0296\u02A0\u02B3\u02C0\u02C5' +
    '\u02CD\u02D6\u02DA\u02E8\u02EF\u02F3\u02F5\u02FE\u0301\u0306\u0308\u0311' +
    '\u0314\u0318\u031B\u0320\u032A\u0336\u0339\u033C\u033F\u034A\u0353\u0355' +
    '\u035C\u0361\u0366\u036B\u036F\u0372\u037D\u037F\u0388\u038E\u0395\u039A' +
    '\u039F\u03A3\u03A5\u03A8\u03AE\u03B3\u03BA\u03C4\u03C9\u03D6\u03DB\u03E0' +
    '\u03E6\u03ED\u03F0\u03FB\u0400\u0402\u0405\u040D\u0410\u0414\u0417\u041B' +
    '\u0428\u042B\u042F\u0433\u0436\u043D\u0444\u044B\u044E\u0459\u045B\u0463' +
    '\u0465\u0470\u0472\u0479\u047B\u047F\u0483\u0486\u0490\u0496\u0498\u049B' +
    '\u04A1\u04A6\u04AB\u04B4\u04BA\u04BC\u04BF\u04C7\u04CD\u04D1\u04D7\u04DA' +
    '\u04E3\u04E8\u04EA\u04EC\u04EF\u04F8\u04FD\u0508\u0516\u0520\u0526\u052E' +
    '\u0534\u0539\u053D\u054B\u0550\u0553\u0556\u055C\u056C\u0578\u0586\u058A' +
    '\u058D\u0592\u0597\u059C\u05A0\u05A3\u05B2\u05B8\u05BD\u05CD\u05DC\u05E2' +
    '\u05E6\u05EB\u05F1\u05FB\u0601\u0605\u0610\u061C\u0624\u0626\u0634\u063A' +
    '\u063E\u0643\u0649\u0654\u0659\u0679\u067D\u068E\u0692\u06A4\u06AA\u06B0' +
    '\u06B5\u06BC\u06C0\u06C3\u06C6\u06CA\u06D1\u06D5\u06D8\u06DB\u06DF\u06E3' +
    '\u0702';
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

export class Function_callContext extends ParserRuleContext {
  public identifier_nontype(): Identifier_nontypeContext | undefined {
    return this.tryGetRuleContext(0, Identifier_nontypeContext);
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
  public RIGHT_PAREN(): TerminalNode[];
  public RIGHT_PAREN(i: number): TerminalNode;
  public RIGHT_PAREN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.RIGHT_PAREN);
    } else {
      return this.getToken(PostgresParser.RIGHT_PAREN, i);
    }
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
  public WITHIN(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.WITHIN, 0);
  }
  public GROUP(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.GROUP, 0);
  }
  public orderby_clause(): Orderby_clauseContext[];
  public orderby_clause(i: number): Orderby_clauseContext;
  public orderby_clause(i?: number): Orderby_clauseContext | Orderby_clauseContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Orderby_clauseContext);
    } else {
      return this.getRuleContext(i, Orderby_clauseContext);
    }
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
  public ROW(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.ROW, 0);
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
  public functions_all(): Functions_allContext | undefined {
    return this.tryGetRuleContext(0, Functions_allContext);
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
  public identifier(): IdentifierContext[];
  public identifier(i: number): IdentifierContext;
  public identifier(i?: number): IdentifierContext | IdentifierContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdentifierContext);
    } else {
      return this.getRuleContext(i, IdentifierContext);
    }
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
  public _opclass!: IdentifierContext;
  public _order!: Order_specificationContext;
  public _null_order!: Null_orderingContext;
  public vex(): VexContext {
    return this.getRuleContext(0, VexContext);
  }
  public identifier(): IdentifierContext | undefined {
    return this.tryGetRuleContext(0, IdentifierContext);
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

export class Function_xml_xmlcommentContext extends ParserRuleContext {
  public XMLCOMMENT(): TerminalNode {
    return this.getToken(PostgresParser.XMLCOMMENT, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
    return PostgresParser.RULE_function_xml_xmlcomment;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmlcomment) {
      listener.enterFunction_xml_xmlcomment(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmlcomment) {
      listener.exitFunction_xml_xmlcomment(this);
    }
  }
}

export class Function_xml_xmlconcatContext extends ParserRuleContext {
  public XMLCONCAT(): TerminalNode {
    return this.getToken(PostgresParser.XMLCONCAT, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
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
    return PostgresParser.RULE_function_xml_xmlconcat;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmlconcat) {
      listener.enterFunction_xml_xmlconcat(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmlconcat) {
      listener.exitFunction_xml_xmlconcat(this);
    }
  }
}

export class Function_xml_xmlelementContext extends ParserRuleContext {
  public _name!: IdentifierContext;
  public _attname!: IdentifierContext;
  public XMLELEMENT(): TerminalNode {
    return this.getToken(PostgresParser.XMLELEMENT, 0);
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
  public NAME(): TerminalNode {
    return this.getToken(PostgresParser.NAME, 0);
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
  public XMLATTRIBUTES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLATTRIBUTES, 0);
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
  public AS(): TerminalNode[];
  public AS(i: number): TerminalNode;
  public AS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.AS);
    } else {
      return this.getToken(PostgresParser.AS, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xmlelement;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmlelement) {
      listener.enterFunction_xml_xmlelement(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmlelement) {
      listener.exitFunction_xml_xmlelement(this);
    }
  }
}

export class Function_xml_xmlforestContext extends ParserRuleContext {
  public _name!: IdentifierContext;
  public XMLFOREST(): TerminalNode {
    return this.getToken(PostgresParser.XMLFOREST, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
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
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.COMMA);
    } else {
      return this.getToken(PostgresParser.COMMA, i);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xmlforest;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmlforest) {
      listener.enterFunction_xml_xmlforest(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmlforest) {
      listener.exitFunction_xml_xmlforest(this);
    }
  }
}

export class Function_xml_xmlpiContext extends ParserRuleContext {
  public _name!: IdentifierContext;
  public XMLPI(): TerminalNode {
    return this.getToken(PostgresParser.XMLPI, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public NAME(): TerminalNode {
    return this.getToken(PostgresParser.NAME, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.COMMA, 0);
  }
  public vex(): VexContext | undefined {
    return this.tryGetRuleContext(0, VexContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xmlpi;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmlpi) {
      listener.enterFunction_xml_xmlpi(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmlpi) {
      listener.exitFunction_xml_xmlpi(this);
    }
  }
}

export class Function_xml_xmlrootContext extends ParserRuleContext {
  public XMLROOT(): TerminalNode {
    return this.getToken(PostgresParser.XMLROOT, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
  public VERSION(): TerminalNode {
    return this.getToken(PostgresParser.VERSION, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xmlroot;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmlroot) {
      listener.enterFunction_xml_xmlroot(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmlroot) {
      listener.exitFunction_xml_xmlroot(this);
    }
  }
}

export class Function_xml_xmlaggContext extends ParserRuleContext {
  public _name!: IdentifierContext;
  public _attname!: IdentifierContext;
  public XMLAGG(): TerminalNode {
    return this.getToken(PostgresParser.XMLAGG, 0);
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
  public NAME(): TerminalNode {
    return this.getToken(PostgresParser.NAME, 0);
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
  public XMLATTRIBUTES(): TerminalNode | undefined {
    return this.tryGetToken(PostgresParser.XMLATTRIBUTES, 0);
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
  public AS(): TerminalNode[];
  public AS(i: number): TerminalNode;
  public AS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.AS);
    } else {
      return this.getToken(PostgresParser.AS, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xmlagg;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmlagg) {
      listener.enterFunction_xml_xmlagg(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmlagg) {
      listener.exitFunction_xml_xmlagg(this);
    }
  }
}

export class Function_xml_xmlexistsContext extends ParserRuleContext {
  public XMLEXISTS(): TerminalNode {
    return this.getToken(PostgresParser.XMLEXISTS, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
  public PASSING(): TerminalNode {
    return this.getToken(PostgresParser.PASSING, 0);
  }
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xmlexists;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmlexists) {
      listener.enterFunction_xml_xmlexists(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmlexists) {
      listener.exitFunction_xml_xmlexists(this);
    }
  }
}

export class Function_xml_xml_is_well_formedContext extends ParserRuleContext {
  public XML_IS_WELL_FORMED(): TerminalNode {
    return this.getToken(PostgresParser.XML_IS_WELL_FORMED, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
    return PostgresParser.RULE_function_xml_xml_is_well_formed;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xml_is_well_formed) {
      listener.enterFunction_xml_xml_is_well_formed(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xml_is_well_formed) {
      listener.exitFunction_xml_xml_is_well_formed(this);
    }
  }
}

export class Function_xml_xml_is_well_formed_contentContext extends ParserRuleContext {
  public XML_IS_WELL_FORMED_CONTENT(): TerminalNode {
    return this.getToken(PostgresParser.XML_IS_WELL_FORMED_CONTENT, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
    return PostgresParser.RULE_function_xml_xml_is_well_formed_content;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xml_is_well_formed_content) {
      listener.enterFunction_xml_xml_is_well_formed_content(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xml_is_well_formed_content) {
      listener.exitFunction_xml_xml_is_well_formed_content(this);
    }
  }
}

export class Function_xml_xml_is_well_formed_documentContext extends ParserRuleContext {
  public XML_IS_WELL_FORMED_DOCUMENT(): TerminalNode {
    return this.getToken(PostgresParser.XML_IS_WELL_FORMED_DOCUMENT, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
    return PostgresParser.RULE_function_xml_xml_is_well_formed_document;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xml_is_well_formed_document) {
      listener.enterFunction_xml_xml_is_well_formed_document(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xml_is_well_formed_document) {
      listener.exitFunction_xml_xml_is_well_formed_document(this);
    }
  }
}

export class Function_xml_xpathContext extends ParserRuleContext {
  public XPATH(): TerminalNode {
    return this.getToken(PostgresParser.XPATH, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xpath;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xpath) {
      listener.enterFunction_xml_xpath(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xpath) {
      listener.exitFunction_xml_xpath(this);
    }
  }
}

export class Function_xml_xpath_existsContext extends ParserRuleContext {
  public XPATH_EXISTS(): TerminalNode {
    return this.getToken(PostgresParser.XPATH_EXISTS, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
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
  public RIGHT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.RIGHT_PAREN, 0);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xpath_exists;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xpath_exists) {
      listener.enterFunction_xml_xpath_exists(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xpath_exists) {
      listener.exitFunction_xml_xpath_exists(this);
    }
  }
}

export class Function_xml_xmltableContext extends ParserRuleContext {
  public _name!: IdentifierContext;
  public XMLTABLE(): TerminalNode {
    return this.getToken(PostgresParser.XMLTABLE, 0);
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
  public PASSING(): TerminalNode {
    return this.getToken(PostgresParser.PASSING, 0);
  }
  public COLUMNS(): TerminalNode {
    return this.getToken(PostgresParser.COLUMNS, 0);
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
  public AS(): TerminalNode[];
  public AS(i: number): TerminalNode;
  public AS(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(PostgresParser.AS);
    } else {
      return this.getToken(PostgresParser.AS, i);
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
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_function_xml_xmltable;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_xmltable) {
      listener.enterFunction_xml_xmltable(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_xmltable) {
      listener.exitFunction_xml_xmltable(this);
    }
  }
}

export class Function_xml_table_to_xmlContext extends ParserRuleContext {
  public TABLE_TO_XML(): TerminalNode {
    return this.getToken(PostgresParser.TABLE_TO_XML, 0);
  }
  public LEFT_PAREN(): TerminalNode {
    return this.getToken(PostgresParser.LEFT_PAREN, 0);
  }
  public identifier(): IdentifierContext {
    return this.getRuleContext(0, IdentifierContext);
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
  public boolean_value(): Boolean_valueContext[];
  public boolean_value(i: number): Boolean_valueContext;
  public boolean_value(i?: number): Boolean_valueContext | Boolean_valueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Boolean_valueContext);
    } else {
      return this.getRuleContext(i, Boolean_valueContext);
    }
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
    return PostgresParser.RULE_function_xml_table_to_xml;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunction_xml_table_to_xml) {
      listener.enterFunction_xml_table_to_xml(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunction_xml_table_to_xml) {
      listener.exitFunction_xml_table_to_xml(this);
    }
  }
}

export class Functions_allContext extends ParserRuleContext {
  public function_xml_xmlcomment(): Function_xml_xmlcommentContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmlcommentContext);
  }
  public function_xml_xmlconcat(): Function_xml_xmlconcatContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmlconcatContext);
  }
  public function_xml_xmlelement(): Function_xml_xmlelementContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmlelementContext);
  }
  public function_xml_xmlforest(): Function_xml_xmlforestContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmlforestContext);
  }
  public function_xml_xmlpi(): Function_xml_xmlpiContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmlpiContext);
  }
  public function_xml_xmlroot(): Function_xml_xmlrootContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmlrootContext);
  }
  public function_xml_xmlagg(): Function_xml_xmlaggContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmlaggContext);
  }
  public function_xml_xmlexists(): Function_xml_xmlexistsContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmlexistsContext);
  }
  public function_xml_xml_is_well_formed(): Function_xml_xml_is_well_formedContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xml_is_well_formedContext);
  }
  public function_xml_xml_is_well_formed_content():
    | Function_xml_xml_is_well_formed_contentContext
    | undefined {
    return this.tryGetRuleContext(0, Function_xml_xml_is_well_formed_contentContext);
  }
  public function_xml_xml_is_well_formed_document():
    | Function_xml_xml_is_well_formed_documentContext
    | undefined {
    return this.tryGetRuleContext(0, Function_xml_xml_is_well_formed_documentContext);
  }
  public function_xml_xpath(): Function_xml_xpathContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xpathContext);
  }
  public function_xml_xpath_exists(): Function_xml_xpath_existsContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xpath_existsContext);
  }
  public function_xml_xmltable(): Function_xml_xmltableContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_xmltableContext);
  }
  public function_xml_table_to_xml(): Function_xml_table_to_xmlContext | undefined {
    return this.tryGetRuleContext(0, Function_xml_table_to_xmlContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return PostgresParser.RULE_functions_all;
  }
  // @Override
  public enterRule(listener: PostgresParserListener): void {
    if (listener.enterFunctions_all) {
      listener.enterFunctions_all(this);
    }
  }
  // @Override
  public exitRule(listener: PostgresParserListener): void {
    if (listener.exitFunctions_all) {
      listener.exitFunctions_all(this);
    }
  }
}
