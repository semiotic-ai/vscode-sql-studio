// Generated from syntaxes/postgres/grammar/PostgresParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { SqlContext } from './PostgresParser';
import { Id_tokenContext } from './PostgresParser';
import { IdentifierContext } from './PostgresParser';
import { Identifier_nontypeContext } from './PostgresParser';
import { Col_labelContext } from './PostgresParser';
import { Tokens_nonreservedContext } from './PostgresParser';
import { Tokens_nonreserved_except_function_typeContext } from './PostgresParser';
import { Tokens_reserved_except_function_typeContext } from './PostgresParser';
import { Tokens_reservedContext } from './PostgresParser';
import { Tokens_nonkeywordContext } from './PostgresParser';
import { Type_listContext } from './PostgresParser';
import { Data_typeContext } from './PostgresParser';
import { Array_typeContext } from './PostgresParser';
import { Predefined_typeContext } from './PostgresParser';
import { Interval_fieldContext } from './PostgresParser';
import { Type_lengthContext } from './PostgresParser';
import { Precision_paramContext } from './PostgresParser';
import { VexContext } from './PostgresParser';
import { Vex_bContext } from './PostgresParser';
import { OpContext } from './PostgresParser';
import { All_op_refContext } from './PostgresParser';
import { Datetime_overlapsContext } from './PostgresParser';
import { Value_expression_primaryContext } from './PostgresParser';
import { Unsigned_value_specificationContext } from './PostgresParser';
import { Unsigned_numeric_literalContext } from './PostgresParser';
import { Truth_valueContext } from './PostgresParser';
import { Case_expressionContext } from './PostgresParser';
import { Cast_specificationContext } from './PostgresParser';
import { Function_argsContext } from './PostgresParser';
import { Function_bodyContext } from './PostgresParser';
import { Function_callContext } from './PostgresParser';
import { Vex_or_named_notationContext } from './PostgresParser';
import { PointerContext } from './PostgresParser';
import { Comparison_modContext } from './PostgresParser';
import { Filter_clauseContext } from './PostgresParser';
import { Window_definitionContext } from './PostgresParser';
import { Frame_clauseContext } from './PostgresParser';
import { Frame_boundContext } from './PostgresParser';
import { Array_expressionContext } from './PostgresParser';
import { Array_elementsContext } from './PostgresParser';
import { Type_coercionContext } from './PostgresParser';
import { Schema_qualified_nameContext } from './PostgresParser';
import { Set_qualifierContext } from './PostgresParser';
import { Table_subqueryContext } from './PostgresParser';
import { Select_stmtContext } from './PostgresParser';
import { After_opsContext } from './PostgresParser';
import { Select_stmt_no_parensContext } from './PostgresParser';
import { With_clauseContext } from './PostgresParser';
import { With_queryContext } from './PostgresParser';
import { Select_opsContext } from './PostgresParser';
import { Select_ops_no_parensContext } from './PostgresParser';
import { Select_primaryContext } from './PostgresParser';
import { Select_listContext } from './PostgresParser';
import { Select_sublistContext } from './PostgresParser';
import { From_itemContext } from './PostgresParser';
import { From_primaryContext } from './PostgresParser';
import { Alias_clauseContext } from './PostgresParser';
import { From_function_column_defContext } from './PostgresParser';
import { Groupby_clauseContext } from './PostgresParser';
import { Grouping_element_listContext } from './PostgresParser';
import { Grouping_elementContext } from './PostgresParser';
import { Values_stmtContext } from './PostgresParser';
import { Values_valuesContext } from './PostgresParser';
import { Orderby_clauseContext } from './PostgresParser';
import { Sort_specifier_listContext } from './PostgresParser';
import { Sort_specifierContext } from './PostgresParser';
import { Order_specificationContext } from './PostgresParser';
import { Null_orderingContext } from './PostgresParser';
import { Dollar_numberContext } from './PostgresParser';
import { Names_in_parensContext } from './PostgresParser';
import { Names_referencesContext } from './PostgresParser';
import { Op_charsContext } from './PostgresParser';
import { Partition_by_columnsContext } from './PostgresParser';
import { Collate_identifierContext } from './PostgresParser';
import { IndirectionContext } from './PostgresParser';
import { Indirection_listContext } from './PostgresParser';
import { Indirection_varContext } from './PostgresParser';
import { All_simple_opContext } from './PostgresParser';
import { Character_stringContext } from './PostgresParser';
import { Boolean_valueContext } from './PostgresParser';
import { Function_namesContext } from './PostgresParser';
import { Function_customContext } from './PostgresParser';

/**
 * This interface defines a complete listener for a parse tree produced by
 * `PostgresParser`.
 */
export interface PostgresParserListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by `PostgresParser.sql`.
   * @param ctx the parse tree
   */
  enterSql?: (ctx: SqlContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.sql`.
   * @param ctx the parse tree
   */
  exitSql?: (ctx: SqlContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.id_token`.
   * @param ctx the parse tree
   */
  enterId_token?: (ctx: Id_tokenContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.id_token`.
   * @param ctx the parse tree
   */
  exitId_token?: (ctx: Id_tokenContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.identifier_nontype`.
   * @param ctx the parse tree
   */
  enterIdentifier_nontype?: (ctx: Identifier_nontypeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.identifier_nontype`.
   * @param ctx the parse tree
   */
  exitIdentifier_nontype?: (ctx: Identifier_nontypeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.col_label`.
   * @param ctx the parse tree
   */
  enterCol_label?: (ctx: Col_labelContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.col_label`.
   * @param ctx the parse tree
   */
  exitCol_label?: (ctx: Col_labelContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.tokens_nonreserved`.
   * @param ctx the parse tree
   */
  enterTokens_nonreserved?: (ctx: Tokens_nonreservedContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.tokens_nonreserved`.
   * @param ctx the parse tree
   */
  exitTokens_nonreserved?: (ctx: Tokens_nonreservedContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.tokens_nonreserved_except_function_type`.
   * @param ctx the parse tree
   */
  enterTokens_nonreserved_except_function_type?: (
    ctx: Tokens_nonreserved_except_function_typeContext
  ) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.tokens_nonreserved_except_function_type`.
   * @param ctx the parse tree
   */
  exitTokens_nonreserved_except_function_type?: (
    ctx: Tokens_nonreserved_except_function_typeContext
  ) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.tokens_reserved_except_function_type`.
   * @param ctx the parse tree
   */
  enterTokens_reserved_except_function_type?: (
    ctx: Tokens_reserved_except_function_typeContext
  ) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.tokens_reserved_except_function_type`.
   * @param ctx the parse tree
   */
  exitTokens_reserved_except_function_type?: (
    ctx: Tokens_reserved_except_function_typeContext
  ) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.tokens_reserved`.
   * @param ctx the parse tree
   */
  enterTokens_reserved?: (ctx: Tokens_reservedContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.tokens_reserved`.
   * @param ctx the parse tree
   */
  exitTokens_reserved?: (ctx: Tokens_reservedContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.tokens_nonkeyword`.
   * @param ctx the parse tree
   */
  enterTokens_nonkeyword?: (ctx: Tokens_nonkeywordContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.tokens_nonkeyword`.
   * @param ctx the parse tree
   */
  exitTokens_nonkeyword?: (ctx: Tokens_nonkeywordContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.type_list`.
   * @param ctx the parse tree
   */
  enterType_list?: (ctx: Type_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.type_list`.
   * @param ctx the parse tree
   */
  exitType_list?: (ctx: Type_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.data_type`.
   * @param ctx the parse tree
   */
  enterData_type?: (ctx: Data_typeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.data_type`.
   * @param ctx the parse tree
   */
  exitData_type?: (ctx: Data_typeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.array_type`.
   * @param ctx the parse tree
   */
  enterArray_type?: (ctx: Array_typeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.array_type`.
   * @param ctx the parse tree
   */
  exitArray_type?: (ctx: Array_typeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.predefined_type`.
   * @param ctx the parse tree
   */
  enterPredefined_type?: (ctx: Predefined_typeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.predefined_type`.
   * @param ctx the parse tree
   */
  exitPredefined_type?: (ctx: Predefined_typeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.interval_field`.
   * @param ctx the parse tree
   */
  enterInterval_field?: (ctx: Interval_fieldContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.interval_field`.
   * @param ctx the parse tree
   */
  exitInterval_field?: (ctx: Interval_fieldContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.type_length`.
   * @param ctx the parse tree
   */
  enterType_length?: (ctx: Type_lengthContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.type_length`.
   * @param ctx the parse tree
   */
  exitType_length?: (ctx: Type_lengthContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.precision_param`.
   * @param ctx the parse tree
   */
  enterPrecision_param?: (ctx: Precision_paramContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.precision_param`.
   * @param ctx the parse tree
   */
  exitPrecision_param?: (ctx: Precision_paramContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.vex`.
   * @param ctx the parse tree
   */
  enterVex?: (ctx: VexContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.vex`.
   * @param ctx the parse tree
   */
  exitVex?: (ctx: VexContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.vex_b`.
   * @param ctx the parse tree
   */
  enterVex_b?: (ctx: Vex_bContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.vex_b`.
   * @param ctx the parse tree
   */
  exitVex_b?: (ctx: Vex_bContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.op`.
   * @param ctx the parse tree
   */
  enterOp?: (ctx: OpContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.op`.
   * @param ctx the parse tree
   */
  exitOp?: (ctx: OpContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.all_op_ref`.
   * @param ctx the parse tree
   */
  enterAll_op_ref?: (ctx: All_op_refContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.all_op_ref`.
   * @param ctx the parse tree
   */
  exitAll_op_ref?: (ctx: All_op_refContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.datetime_overlaps`.
   * @param ctx the parse tree
   */
  enterDatetime_overlaps?: (ctx: Datetime_overlapsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.datetime_overlaps`.
   * @param ctx the parse tree
   */
  exitDatetime_overlaps?: (ctx: Datetime_overlapsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.value_expression_primary`.
   * @param ctx the parse tree
   */
  enterValue_expression_primary?: (ctx: Value_expression_primaryContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.value_expression_primary`.
   * @param ctx the parse tree
   */
  exitValue_expression_primary?: (ctx: Value_expression_primaryContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.unsigned_value_specification`.
   * @param ctx the parse tree
   */
  enterUnsigned_value_specification?: (ctx: Unsigned_value_specificationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.unsigned_value_specification`.
   * @param ctx the parse tree
   */
  exitUnsigned_value_specification?: (ctx: Unsigned_value_specificationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.unsigned_numeric_literal`.
   * @param ctx the parse tree
   */
  enterUnsigned_numeric_literal?: (ctx: Unsigned_numeric_literalContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.unsigned_numeric_literal`.
   * @param ctx the parse tree
   */
  exitUnsigned_numeric_literal?: (ctx: Unsigned_numeric_literalContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.truth_value`.
   * @param ctx the parse tree
   */
  enterTruth_value?: (ctx: Truth_valueContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.truth_value`.
   * @param ctx the parse tree
   */
  exitTruth_value?: (ctx: Truth_valueContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.case_expression`.
   * @param ctx the parse tree
   */
  enterCase_expression?: (ctx: Case_expressionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.case_expression`.
   * @param ctx the parse tree
   */
  exitCase_expression?: (ctx: Case_expressionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.cast_specification`.
   * @param ctx the parse tree
   */
  enterCast_specification?: (ctx: Cast_specificationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.cast_specification`.
   * @param ctx the parse tree
   */
  exitCast_specification?: (ctx: Cast_specificationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_args`.
   * @param ctx the parse tree
   */
  enterFunction_args?: (ctx: Function_argsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_args`.
   * @param ctx the parse tree
   */
  exitFunction_args?: (ctx: Function_argsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_body`.
   * @param ctx the parse tree
   */
  enterFunction_body?: (ctx: Function_bodyContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_body`.
   * @param ctx the parse tree
   */
  exitFunction_body?: (ctx: Function_bodyContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_call`.
   * @param ctx the parse tree
   */
  enterFunction_call?: (ctx: Function_callContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_call`.
   * @param ctx the parse tree
   */
  exitFunction_call?: (ctx: Function_callContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.vex_or_named_notation`.
   * @param ctx the parse tree
   */
  enterVex_or_named_notation?: (ctx: Vex_or_named_notationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.vex_or_named_notation`.
   * @param ctx the parse tree
   */
  exitVex_or_named_notation?: (ctx: Vex_or_named_notationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.pointer`.
   * @param ctx the parse tree
   */
  enterPointer?: (ctx: PointerContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.pointer`.
   * @param ctx the parse tree
   */
  exitPointer?: (ctx: PointerContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.comparison_mod`.
   * @param ctx the parse tree
   */
  enterComparison_mod?: (ctx: Comparison_modContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.comparison_mod`.
   * @param ctx the parse tree
   */
  exitComparison_mod?: (ctx: Comparison_modContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.filter_clause`.
   * @param ctx the parse tree
   */
  enterFilter_clause?: (ctx: Filter_clauseContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.filter_clause`.
   * @param ctx the parse tree
   */
  exitFilter_clause?: (ctx: Filter_clauseContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.window_definition`.
   * @param ctx the parse tree
   */
  enterWindow_definition?: (ctx: Window_definitionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.window_definition`.
   * @param ctx the parse tree
   */
  exitWindow_definition?: (ctx: Window_definitionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.frame_clause`.
   * @param ctx the parse tree
   */
  enterFrame_clause?: (ctx: Frame_clauseContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.frame_clause`.
   * @param ctx the parse tree
   */
  exitFrame_clause?: (ctx: Frame_clauseContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.frame_bound`.
   * @param ctx the parse tree
   */
  enterFrame_bound?: (ctx: Frame_boundContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.frame_bound`.
   * @param ctx the parse tree
   */
  exitFrame_bound?: (ctx: Frame_boundContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.array_expression`.
   * @param ctx the parse tree
   */
  enterArray_expression?: (ctx: Array_expressionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.array_expression`.
   * @param ctx the parse tree
   */
  exitArray_expression?: (ctx: Array_expressionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.array_elements`.
   * @param ctx the parse tree
   */
  enterArray_elements?: (ctx: Array_elementsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.array_elements`.
   * @param ctx the parse tree
   */
  exitArray_elements?: (ctx: Array_elementsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.type_coercion`.
   * @param ctx the parse tree
   */
  enterType_coercion?: (ctx: Type_coercionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.type_coercion`.
   * @param ctx the parse tree
   */
  exitType_coercion?: (ctx: Type_coercionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.schema_qualified_name`.
   * @param ctx the parse tree
   */
  enterSchema_qualified_name?: (ctx: Schema_qualified_nameContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.schema_qualified_name`.
   * @param ctx the parse tree
   */
  exitSchema_qualified_name?: (ctx: Schema_qualified_nameContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.set_qualifier`.
   * @param ctx the parse tree
   */
  enterSet_qualifier?: (ctx: Set_qualifierContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.set_qualifier`.
   * @param ctx the parse tree
   */
  exitSet_qualifier?: (ctx: Set_qualifierContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_subquery`.
   * @param ctx the parse tree
   */
  enterTable_subquery?: (ctx: Table_subqueryContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_subquery`.
   * @param ctx the parse tree
   */
  exitTable_subquery?: (ctx: Table_subqueryContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.select_stmt`.
   * @param ctx the parse tree
   */
  enterSelect_stmt?: (ctx: Select_stmtContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.select_stmt`.
   * @param ctx the parse tree
   */
  exitSelect_stmt?: (ctx: Select_stmtContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.after_ops`.
   * @param ctx the parse tree
   */
  enterAfter_ops?: (ctx: After_opsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.after_ops`.
   * @param ctx the parse tree
   */
  exitAfter_ops?: (ctx: After_opsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.select_stmt_no_parens`.
   * @param ctx the parse tree
   */
  enterSelect_stmt_no_parens?: (ctx: Select_stmt_no_parensContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.select_stmt_no_parens`.
   * @param ctx the parse tree
   */
  exitSelect_stmt_no_parens?: (ctx: Select_stmt_no_parensContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.with_clause`.
   * @param ctx the parse tree
   */
  enterWith_clause?: (ctx: With_clauseContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.with_clause`.
   * @param ctx the parse tree
   */
  exitWith_clause?: (ctx: With_clauseContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.with_query`.
   * @param ctx the parse tree
   */
  enterWith_query?: (ctx: With_queryContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.with_query`.
   * @param ctx the parse tree
   */
  exitWith_query?: (ctx: With_queryContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.select_ops`.
   * @param ctx the parse tree
   */
  enterSelect_ops?: (ctx: Select_opsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.select_ops`.
   * @param ctx the parse tree
   */
  exitSelect_ops?: (ctx: Select_opsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.select_ops_no_parens`.
   * @param ctx the parse tree
   */
  enterSelect_ops_no_parens?: (ctx: Select_ops_no_parensContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.select_ops_no_parens`.
   * @param ctx the parse tree
   */
  exitSelect_ops_no_parens?: (ctx: Select_ops_no_parensContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.select_primary`.
   * @param ctx the parse tree
   */
  enterSelect_primary?: (ctx: Select_primaryContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.select_primary`.
   * @param ctx the parse tree
   */
  exitSelect_primary?: (ctx: Select_primaryContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.select_list`.
   * @param ctx the parse tree
   */
  enterSelect_list?: (ctx: Select_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.select_list`.
   * @param ctx the parse tree
   */
  exitSelect_list?: (ctx: Select_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.select_sublist`.
   * @param ctx the parse tree
   */
  enterSelect_sublist?: (ctx: Select_sublistContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.select_sublist`.
   * @param ctx the parse tree
   */
  exitSelect_sublist?: (ctx: Select_sublistContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.from_item`.
   * @param ctx the parse tree
   */
  enterFrom_item?: (ctx: From_itemContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.from_item`.
   * @param ctx the parse tree
   */
  exitFrom_item?: (ctx: From_itemContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.from_primary`.
   * @param ctx the parse tree
   */
  enterFrom_primary?: (ctx: From_primaryContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.from_primary`.
   * @param ctx the parse tree
   */
  exitFrom_primary?: (ctx: From_primaryContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alias_clause`.
   * @param ctx the parse tree
   */
  enterAlias_clause?: (ctx: Alias_clauseContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alias_clause`.
   * @param ctx the parse tree
   */
  exitAlias_clause?: (ctx: Alias_clauseContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.from_function_column_def`.
   * @param ctx the parse tree
   */
  enterFrom_function_column_def?: (ctx: From_function_column_defContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.from_function_column_def`.
   * @param ctx the parse tree
   */
  exitFrom_function_column_def?: (ctx: From_function_column_defContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.groupby_clause`.
   * @param ctx the parse tree
   */
  enterGroupby_clause?: (ctx: Groupby_clauseContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.groupby_clause`.
   * @param ctx the parse tree
   */
  exitGroupby_clause?: (ctx: Groupby_clauseContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.grouping_element_list`.
   * @param ctx the parse tree
   */
  enterGrouping_element_list?: (ctx: Grouping_element_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.grouping_element_list`.
   * @param ctx the parse tree
   */
  exitGrouping_element_list?: (ctx: Grouping_element_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.grouping_element`.
   * @param ctx the parse tree
   */
  enterGrouping_element?: (ctx: Grouping_elementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.grouping_element`.
   * @param ctx the parse tree
   */
  exitGrouping_element?: (ctx: Grouping_elementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.values_stmt`.
   * @param ctx the parse tree
   */
  enterValues_stmt?: (ctx: Values_stmtContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.values_stmt`.
   * @param ctx the parse tree
   */
  exitValues_stmt?: (ctx: Values_stmtContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.values_values`.
   * @param ctx the parse tree
   */
  enterValues_values?: (ctx: Values_valuesContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.values_values`.
   * @param ctx the parse tree
   */
  exitValues_values?: (ctx: Values_valuesContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.orderby_clause`.
   * @param ctx the parse tree
   */
  enterOrderby_clause?: (ctx: Orderby_clauseContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.orderby_clause`.
   * @param ctx the parse tree
   */
  exitOrderby_clause?: (ctx: Orderby_clauseContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.sort_specifier_list`.
   * @param ctx the parse tree
   */
  enterSort_specifier_list?: (ctx: Sort_specifier_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.sort_specifier_list`.
   * @param ctx the parse tree
   */
  exitSort_specifier_list?: (ctx: Sort_specifier_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.sort_specifier`.
   * @param ctx the parse tree
   */
  enterSort_specifier?: (ctx: Sort_specifierContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.sort_specifier`.
   * @param ctx the parse tree
   */
  exitSort_specifier?: (ctx: Sort_specifierContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.order_specification`.
   * @param ctx the parse tree
   */
  enterOrder_specification?: (ctx: Order_specificationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.order_specification`.
   * @param ctx the parse tree
   */
  exitOrder_specification?: (ctx: Order_specificationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.null_ordering`.
   * @param ctx the parse tree
   */
  enterNull_ordering?: (ctx: Null_orderingContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.null_ordering`.
   * @param ctx the parse tree
   */
  exitNull_ordering?: (ctx: Null_orderingContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.dollar_number`.
   * @param ctx the parse tree
   */
  enterDollar_number?: (ctx: Dollar_numberContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.dollar_number`.
   * @param ctx the parse tree
   */
  exitDollar_number?: (ctx: Dollar_numberContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.names_in_parens`.
   * @param ctx the parse tree
   */
  enterNames_in_parens?: (ctx: Names_in_parensContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.names_in_parens`.
   * @param ctx the parse tree
   */
  exitNames_in_parens?: (ctx: Names_in_parensContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.names_references`.
   * @param ctx the parse tree
   */
  enterNames_references?: (ctx: Names_referencesContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.names_references`.
   * @param ctx the parse tree
   */
  exitNames_references?: (ctx: Names_referencesContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.op_chars`.
   * @param ctx the parse tree
   */
  enterOp_chars?: (ctx: Op_charsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.op_chars`.
   * @param ctx the parse tree
   */
  exitOp_chars?: (ctx: Op_charsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.partition_by_columns`.
   * @param ctx the parse tree
   */
  enterPartition_by_columns?: (ctx: Partition_by_columnsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.partition_by_columns`.
   * @param ctx the parse tree
   */
  exitPartition_by_columns?: (ctx: Partition_by_columnsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.collate_identifier`.
   * @param ctx the parse tree
   */
  enterCollate_identifier?: (ctx: Collate_identifierContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.collate_identifier`.
   * @param ctx the parse tree
   */
  exitCollate_identifier?: (ctx: Collate_identifierContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.indirection`.
   * @param ctx the parse tree
   */
  enterIndirection?: (ctx: IndirectionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.indirection`.
   * @param ctx the parse tree
   */
  exitIndirection?: (ctx: IndirectionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.indirection_list`.
   * @param ctx the parse tree
   */
  enterIndirection_list?: (ctx: Indirection_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.indirection_list`.
   * @param ctx the parse tree
   */
  exitIndirection_list?: (ctx: Indirection_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.indirection_var`.
   * @param ctx the parse tree
   */
  enterIndirection_var?: (ctx: Indirection_varContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.indirection_var`.
   * @param ctx the parse tree
   */
  exitIndirection_var?: (ctx: Indirection_varContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.all_simple_op`.
   * @param ctx the parse tree
   */
  enterAll_simple_op?: (ctx: All_simple_opContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.all_simple_op`.
   * @param ctx the parse tree
   */
  exitAll_simple_op?: (ctx: All_simple_opContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.character_string`.
   * @param ctx the parse tree
   */
  enterCharacter_string?: (ctx: Character_stringContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.character_string`.
   * @param ctx the parse tree
   */
  exitCharacter_string?: (ctx: Character_stringContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.boolean_value`.
   * @param ctx the parse tree
   */
  enterBoolean_value?: (ctx: Boolean_valueContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.boolean_value`.
   * @param ctx the parse tree
   */
  exitBoolean_value?: (ctx: Boolean_valueContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_names`.
   * @param ctx the parse tree
   */
  enterFunction_names?: (ctx: Function_namesContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_names`.
   * @param ctx the parse tree
   */
  exitFunction_names?: (ctx: Function_namesContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_custom`.
   * @param ctx the parse tree
   */
  enterFunction_custom?: (ctx: Function_customContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_custom`.
   * @param ctx the parse tree
   */
  exitFunction_custom?: (ctx: Function_customContext) => void;
}
