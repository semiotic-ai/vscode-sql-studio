// Generated from syntaxes/postgres/grammar/PostgresParser.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { SqlContext } from './PostgresParser';
import { Qname_parserContext } from './PostgresParser';
import { Function_args_parserContext } from './PostgresParser';
import { Vex_eofContext } from './PostgresParser';
import { Plpgsql_functionContext } from './PostgresParser';
import { Plpgsql_function_test_listContext } from './PostgresParser';
import { StatementContext } from './PostgresParser';
import { Data_statementContext } from './PostgresParser';
import { Script_statementContext } from './PostgresParser';
import { Script_transactionContext } from './PostgresParser';
import { Transaction_modeContext } from './PostgresParser';
import { Lock_tableContext } from './PostgresParser';
import { Lock_modeContext } from './PostgresParser';
import { Script_additionalContext } from './PostgresParser';
import { Additional_statementContext } from './PostgresParser';
import { Explain_statementContext } from './PostgresParser';
import { Explain_queryContext } from './PostgresParser';
import { Execute_statementContext } from './PostgresParser';
import { Declare_statementContext } from './PostgresParser';
import { Show_statementContext } from './PostgresParser';
import { Explain_optionContext } from './PostgresParser';
import { User_nameContext } from './PostgresParser';
import { Table_cols_listContext } from './PostgresParser';
import { Table_colsContext } from './PostgresParser';
import { Vacuum_modeContext } from './PostgresParser';
import { Vacuum_optionContext } from './PostgresParser';
import { Analyze_modeContext } from './PostgresParser';
import { Boolean_valueContext } from './PostgresParser';
import { Fetch_move_directionContext } from './PostgresParser';
import { Schema_statementContext } from './PostgresParser';
import { Schema_createContext } from './PostgresParser';
import { Schema_alterContext } from './PostgresParser';
import { Schema_dropContext } from './PostgresParser';
import { Schema_importContext } from './PostgresParser';
import { Alter_function_statementContext } from './PostgresParser';
import { Alter_aggregate_statementContext } from './PostgresParser';
import { Alter_extension_statementContext } from './PostgresParser';
import { Alter_extension_actionContext } from './PostgresParser';
import { Extension_member_objectContext } from './PostgresParser';
import { Alter_schema_statementContext } from './PostgresParser';
import { Alter_language_statementContext } from './PostgresParser';
import { Alter_table_statementContext } from './PostgresParser';
import { Table_actionContext } from './PostgresParser';
import { Column_actionContext } from './PostgresParser';
import { Identity_bodyContext } from './PostgresParser';
import { Alter_identityContext } from './PostgresParser';
import { Storage_optionContext } from './PostgresParser';
import { Validate_constraintContext } from './PostgresParser';
import { Drop_constraintContext } from './PostgresParser';
import { Table_deferrableContext } from './PostgresParser';
import { Table_initialy_immedContext } from './PostgresParser';
import { Function_actions_commonContext } from './PostgresParser';
import { Function_defContext } from './PostgresParser';
import { Alter_index_statementContext } from './PostgresParser';
import { Index_def_actionContext } from './PostgresParser';
import { Alter_default_privilegesContext } from './PostgresParser';
import { Abbreviated_grant_or_revokeContext } from './PostgresParser';
import { Grant_option_forContext } from './PostgresParser';
import { Alter_sequence_statementContext } from './PostgresParser';
import { Alter_view_statementContext } from './PostgresParser';
import { Alter_event_triggerContext } from './PostgresParser';
import { Alter_event_trigger_actionContext } from './PostgresParser';
import { Alter_type_statementContext } from './PostgresParser';
import { Alter_domain_statementContext } from './PostgresParser';
import { Alter_server_statementContext } from './PostgresParser';
import { Alter_server_actionContext } from './PostgresParser';
import { Alter_fts_statementContext } from './PostgresParser';
import { Alter_fts_configurationContext } from './PostgresParser';
import { Type_actionContext } from './PostgresParser';
import { Set_def_columnContext } from './PostgresParser';
import { Drop_defContext } from './PostgresParser';
import { Create_index_statementContext } from './PostgresParser';
import { Index_restContext } from './PostgresParser';
import { Index_sortContext } from './PostgresParser';
import { Including_indexContext } from './PostgresParser';
import { Index_whereContext } from './PostgresParser';
import { Create_extension_statementContext } from './PostgresParser';
import { Create_language_statementContext } from './PostgresParser';
import { Create_event_triggerContext } from './PostgresParser';
import { Create_type_statementContext } from './PostgresParser';
import { Create_domain_statementContext } from './PostgresParser';
import { Create_server_statementContext } from './PostgresParser';
import { Create_fts_dictionaryContext } from './PostgresParser';
import { Option_with_valueContext } from './PostgresParser';
import { Create_fts_configurationContext } from './PostgresParser';
import { Create_fts_templateContext } from './PostgresParser';
import { Create_fts_parserContext } from './PostgresParser';
import { Create_collationContext } from './PostgresParser';
import { Alter_collationContext } from './PostgresParser';
import { Collation_optionContext } from './PostgresParser';
import { Create_user_mappingContext } from './PostgresParser';
import { Alter_user_mappingContext } from './PostgresParser';
import { Alter_user_or_roleContext } from './PostgresParser';
import { Alter_user_or_role_set_resetContext } from './PostgresParser';
import { User_or_role_set_resetContext } from './PostgresParser';
import { Alter_groupContext } from './PostgresParser';
import { Alter_group_actionContext } from './PostgresParser';
import { Alter_tablespaceContext } from './PostgresParser';
import { Alter_ownerContext } from './PostgresParser';
import { Alter_tablespace_actionContext } from './PostgresParser';
import { Alter_statisticsContext } from './PostgresParser';
import { Alter_foreign_data_wrapperContext } from './PostgresParser';
import { Alter_foreign_data_wrapper_actionContext } from './PostgresParser';
import { Alter_operator_statementContext } from './PostgresParser';
import { Alter_operator_actionContext } from './PostgresParser';
import { Operator_set_restrict_joinContext } from './PostgresParser';
import { Drop_user_mappingContext } from './PostgresParser';
import { Drop_ownedContext } from './PostgresParser';
import { Drop_operator_statementContext } from './PostgresParser';
import { Target_operatorContext } from './PostgresParser';
import { Domain_constraintContext } from './PostgresParser';
import { Create_transform_statementContext } from './PostgresParser';
import { Create_access_methodContext } from './PostgresParser';
import { Create_user_or_roleContext } from './PostgresParser';
import { User_or_role_optionContext } from './PostgresParser';
import { User_or_role_option_for_alterContext } from './PostgresParser';
import { User_or_role_or_group_common_optionContext } from './PostgresParser';
import { User_or_role_common_optionContext } from './PostgresParser';
import { User_or_role_or_group_option_for_createContext } from './PostgresParser';
import { Create_groupContext } from './PostgresParser';
import { Group_optionContext } from './PostgresParser';
import { Create_tablespaceContext } from './PostgresParser';
import { Create_statisticsContext } from './PostgresParser';
import { Create_foreign_data_wrapperContext } from './PostgresParser';
import { Option_without_equalContext } from './PostgresParser';
import { Create_operator_statementContext } from './PostgresParser';
import { Operator_nameContext } from './PostgresParser';
import { Operator_optionContext } from './PostgresParser';
import { Create_aggregate_statementContext } from './PostgresParser';
import { Aggregate_paramContext } from './PostgresParser';
import { Set_statementContext } from './PostgresParser';
import { Set_actionContext } from './PostgresParser';
import { Session_local_optionContext } from './PostgresParser';
import { Set_statement_valueContext } from './PostgresParser';
import { Create_rewrite_statementContext } from './PostgresParser';
import { Rewrite_commandContext } from './PostgresParser';
import { Create_trigger_statementContext } from './PostgresParser';
import { Trigger_referencingContext } from './PostgresParser';
import { When_triggerContext } from './PostgresParser';
import { Rule_commonContext } from './PostgresParser';
import { Rule_member_objectContext } from './PostgresParser';
import { Columns_permissionsContext } from './PostgresParser';
import { Table_column_privilegesContext } from './PostgresParser';
import { PermissionsContext } from './PostgresParser';
import { PermissionContext } from './PostgresParser';
import { Other_rulesContext } from './PostgresParser';
import { Grant_to_ruleContext } from './PostgresParser';
import { Revoke_from_cascade_restrictContext } from './PostgresParser';
import { Roles_namesContext } from './PostgresParser';
import { Role_name_with_groupContext } from './PostgresParser';
import { Comment_on_statementContext } from './PostgresParser';
import { Security_labelContext } from './PostgresParser';
import { Comment_member_objectContext } from './PostgresParser';
import { Label_member_objectContext } from './PostgresParser';
import { Create_function_statementContext } from './PostgresParser';
import { Create_funct_paramsContext } from './PostgresParser';
import { Transform_for_typeContext } from './PostgresParser';
import { Function_ret_tableContext } from './PostgresParser';
import { Function_column_name_typeContext } from './PostgresParser';
import { Function_parametersContext } from './PostgresParser';
import { Function_argsContext } from './PostgresParser';
import { Agg_orderContext } from './PostgresParser';
import { Character_stringContext } from './PostgresParser';
import { Function_argumentsContext } from './PostgresParser';
import { ArgmodeContext } from './PostgresParser';
import { Create_sequence_statementContext } from './PostgresParser';
import { Sequence_bodyContext } from './PostgresParser';
import { Signed_number_literalContext } from './PostgresParser';
import { Signed_numerical_literalContext } from './PostgresParser';
import { SignContext } from './PostgresParser';
import { Create_schema_statementContext } from './PostgresParser';
import { Create_policy_statementContext } from './PostgresParser';
import { Alter_policy_statementContext } from './PostgresParser';
import { Drop_policy_statementContext } from './PostgresParser';
import { Create_subscription_statementContext } from './PostgresParser';
import { Alter_subscription_statementContext } from './PostgresParser';
import { Alter_subscription_actionContext } from './PostgresParser';
import { Create_cast_statementContext } from './PostgresParser';
import { Drop_cast_statementContext } from './PostgresParser';
import { Create_operator_family_statementContext } from './PostgresParser';
import { Alter_operator_family_statementContext } from './PostgresParser';
import { Operator_family_actionContext } from './PostgresParser';
import { Add_operator_to_familyContext } from './PostgresParser';
import { Drop_operator_from_familyContext } from './PostgresParser';
import { Drop_operator_family_statementContext } from './PostgresParser';
import { Create_operator_class_statementContext } from './PostgresParser';
import { Create_operator_class_optionContext } from './PostgresParser';
import { Alter_operator_class_statementContext } from './PostgresParser';
import { Drop_operator_class_statementContext } from './PostgresParser';
import { Create_conversion_statementContext } from './PostgresParser';
import { Alter_conversion_statementContext } from './PostgresParser';
import { Create_publication_statementContext } from './PostgresParser';
import { Alter_publication_statementContext } from './PostgresParser';
import { Alter_publication_actionContext } from './PostgresParser';
import { Only_table_multiplyContext } from './PostgresParser';
import { Alter_trigger_statementContext } from './PostgresParser';
import { Alter_rule_statementContext } from './PostgresParser';
import { Copy_statementContext } from './PostgresParser';
import { Copy_from_statementContext } from './PostgresParser';
import { Copy_to_statementContext } from './PostgresParser';
import { Copy_option_listContext } from './PostgresParser';
import { Copy_optionContext } from './PostgresParser';
import { Create_view_statementContext } from './PostgresParser';
import { If_existsContext } from './PostgresParser';
import { If_not_existsContext } from './PostgresParser';
import { View_columnsContext } from './PostgresParser';
import { With_check_optionContext } from './PostgresParser';
import { Create_table_statementContext } from './PostgresParser';
import { Create_table_as_statementContext } from './PostgresParser';
import { Create_foreign_table_statementContext } from './PostgresParser';
import { Define_tableContext } from './PostgresParser';
import { Define_partitionContext } from './PostgresParser';
import { For_values_boundContext } from './PostgresParser';
import { Partition_bound_specContext } from './PostgresParser';
import { Partition_bound_partContext } from './PostgresParser';
import { Define_columnsContext } from './PostgresParser';
import { Define_typeContext } from './PostgresParser';
import { Partition_byContext } from './PostgresParser';
import { Partition_methodContext } from './PostgresParser';
import { Partition_columnContext } from './PostgresParser';
import { Define_serverContext } from './PostgresParser';
import { Define_foreign_optionsContext } from './PostgresParser';
import { Foreign_optionContext } from './PostgresParser';
import { Foreign_option_nameContext } from './PostgresParser';
import { List_of_type_column_defContext } from './PostgresParser';
import { Table_column_defContext } from './PostgresParser';
import { Table_of_type_column_defContext } from './PostgresParser';
import { Table_column_definitionContext } from './PostgresParser';
import { Like_optionContext } from './PostgresParser';
import { Constraint_commonContext } from './PostgresParser';
import { Constr_bodyContext } from './PostgresParser';
import { All_opContext } from './PostgresParser';
import { All_simple_opContext } from './PostgresParser';
import { Op_charsContext } from './PostgresParser';
import { Index_parametersContext } from './PostgresParser';
import { Names_in_parensContext } from './PostgresParser';
import { Names_referencesContext } from './PostgresParser';
import { Storage_parameterContext } from './PostgresParser';
import { Storage_parameter_optionContext } from './PostgresParser';
import { Storage_parameter_nameContext } from './PostgresParser';
import { With_storage_parameterContext } from './PostgresParser';
import { Storage_parameter_oidContext } from './PostgresParser';
import { On_commitContext } from './PostgresParser';
import { Table_spaceContext } from './PostgresParser';
import { ActionContext } from './PostgresParser';
import { Owner_toContext } from './PostgresParser';
import { Rename_toContext } from './PostgresParser';
import { Set_schemaContext } from './PostgresParser';
import { Table_column_privilegeContext } from './PostgresParser';
import { Usage_select_updateContext } from './PostgresParser';
import { Partition_by_columnsContext } from './PostgresParser';
import { Cascade_restrictContext } from './PostgresParser';
import { Collate_identifierContext } from './PostgresParser';
import { Indirection_varContext } from './PostgresParser';
import { Dollar_numberContext } from './PostgresParser';
import { Indirection_listContext } from './PostgresParser';
import { IndirectionContext } from './PostgresParser';
import { Drop_function_statementContext } from './PostgresParser';
import { Drop_trigger_statementContext } from './PostgresParser';
import { Drop_rule_statementContext } from './PostgresParser';
import { Drop_statementsContext } from './PostgresParser';
import { If_exist_names_restrict_cascadeContext } from './PostgresParser';
import { Id_tokenContext } from './PostgresParser';
import { IdentifierContext } from './PostgresParser';
import { Identifier_nontypeContext } from './PostgresParser';
import { Col_labelContext } from './PostgresParser';
import { Tokens_nonreservedContext } from './PostgresParser';
import { Tokens_nonreserved_except_function_typeContext } from './PostgresParser';
import { Tokens_reserved_except_function_typeContext } from './PostgresParser';
import { Tokens_reservedContext } from './PostgresParser';
import { Tokens_nonkeywordContext } from './PostgresParser';
import { Schema_qualified_name_nontypeContext } from './PostgresParser';
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
import { Function_callContext } from './PostgresParser';
import { Vex_or_named_notationContext } from './PostgresParser';
import { PointerContext } from './PostgresParser';
import { Function_constructContext } from './PostgresParser';
import { Extract_functionContext } from './PostgresParser';
import { System_functionContext } from './PostgresParser';
import { Date_time_functionContext } from './PostgresParser';
import { String_value_functionContext } from './PostgresParser';
import { Xml_functionContext } from './PostgresParser';
import { Xml_table_columnContext } from './PostgresParser';
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
import { Into_tableContext } from './PostgresParser';
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
import { Insert_stmt_for_psqlContext } from './PostgresParser';
import { Insert_columnsContext } from './PostgresParser';
import { Indirection_identifierContext } from './PostgresParser';
import { Conflict_objectContext } from './PostgresParser';
import { Conflict_actionContext } from './PostgresParser';
import { Delete_stmt_for_psqlContext } from './PostgresParser';
import { Update_stmt_for_psqlContext } from './PostgresParser';
import { Update_setContext } from './PostgresParser';
import { Notify_stmtContext } from './PostgresParser';
import { Truncate_stmtContext } from './PostgresParser';
import { Identifier_listContext } from './PostgresParser';
import { Anonymous_blockContext } from './PostgresParser';
import { Comp_optionsContext } from './PostgresParser';
import { Function_blockContext } from './PostgresParser';
import { Start_labelContext } from './PostgresParser';
import { DeclarationsContext } from './PostgresParser';
import { DeclarationContext } from './PostgresParser';
import { Type_declarationContext } from './PostgresParser';
import { Arguments_listContext } from './PostgresParser';
import { Data_type_decContext } from './PostgresParser';
import { Exception_statementContext } from './PostgresParser';
import { Function_statementsContext } from './PostgresParser';
import { Function_statementContext } from './PostgresParser';
import { Base_statementContext } from './PostgresParser';
import { VarContext } from './PostgresParser';
import { Diagnostic_optionContext } from './PostgresParser';
import { Perform_stmtContext } from './PostgresParser';
import { Assign_stmtContext } from './PostgresParser';
import { Execute_stmtContext } from './PostgresParser';
import { Control_statementContext } from './PostgresParser';
import { Cursor_statementContext } from './PostgresParser';
import { OptionContext } from './PostgresParser';
import { Transaction_statementContext } from './PostgresParser';
import { Message_statementContext } from './PostgresParser';
import { Log_levelContext } from './PostgresParser';
import { Raise_usingContext } from './PostgresParser';
import { Raise_paramContext } from './PostgresParser';
import { Return_stmtContext } from './PostgresParser';
import { Loop_statementContext } from './PostgresParser';
import { Loop_startContext } from './PostgresParser';
import { Using_vexContext } from './PostgresParser';
import { If_statementContext } from './PostgresParser';
import { Case_statementContext } from './PostgresParser';
import { Plpgsql_queryContext } from './PostgresParser';

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
   * Enter a parse tree produced by `PostgresParser.qname_parser`.
   * @param ctx the parse tree
   */
  enterQname_parser?: (ctx: Qname_parserContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.qname_parser`.
   * @param ctx the parse tree
   */
  exitQname_parser?: (ctx: Qname_parserContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_args_parser`.
   * @param ctx the parse tree
   */
  enterFunction_args_parser?: (ctx: Function_args_parserContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_args_parser`.
   * @param ctx the parse tree
   */
  exitFunction_args_parser?: (ctx: Function_args_parserContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.vex_eof`.
   * @param ctx the parse tree
   */
  enterVex_eof?: (ctx: Vex_eofContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.vex_eof`.
   * @param ctx the parse tree
   */
  exitVex_eof?: (ctx: Vex_eofContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.plpgsql_function`.
   * @param ctx the parse tree
   */
  enterPlpgsql_function?: (ctx: Plpgsql_functionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.plpgsql_function`.
   * @param ctx the parse tree
   */
  exitPlpgsql_function?: (ctx: Plpgsql_functionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.plpgsql_function_test_list`.
   * @param ctx the parse tree
   */
  enterPlpgsql_function_test_list?: (ctx: Plpgsql_function_test_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.plpgsql_function_test_list`.
   * @param ctx the parse tree
   */
  exitPlpgsql_function_test_list?: (ctx: Plpgsql_function_test_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.statement`.
   * @param ctx the parse tree
   */
  enterStatement?: (ctx: StatementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.statement`.
   * @param ctx the parse tree
   */
  exitStatement?: (ctx: StatementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.data_statement`.
   * @param ctx the parse tree
   */
  enterData_statement?: (ctx: Data_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.data_statement`.
   * @param ctx the parse tree
   */
  exitData_statement?: (ctx: Data_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.script_statement`.
   * @param ctx the parse tree
   */
  enterScript_statement?: (ctx: Script_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.script_statement`.
   * @param ctx the parse tree
   */
  exitScript_statement?: (ctx: Script_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.script_transaction`.
   * @param ctx the parse tree
   */
  enterScript_transaction?: (ctx: Script_transactionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.script_transaction`.
   * @param ctx the parse tree
   */
  exitScript_transaction?: (ctx: Script_transactionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.transaction_mode`.
   * @param ctx the parse tree
   */
  enterTransaction_mode?: (ctx: Transaction_modeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.transaction_mode`.
   * @param ctx the parse tree
   */
  exitTransaction_mode?: (ctx: Transaction_modeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.lock_table`.
   * @param ctx the parse tree
   */
  enterLock_table?: (ctx: Lock_tableContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.lock_table`.
   * @param ctx the parse tree
   */
  exitLock_table?: (ctx: Lock_tableContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.lock_mode`.
   * @param ctx the parse tree
   */
  enterLock_mode?: (ctx: Lock_modeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.lock_mode`.
   * @param ctx the parse tree
   */
  exitLock_mode?: (ctx: Lock_modeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.script_additional`.
   * @param ctx the parse tree
   */
  enterScript_additional?: (ctx: Script_additionalContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.script_additional`.
   * @param ctx the parse tree
   */
  exitScript_additional?: (ctx: Script_additionalContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.additional_statement`.
   * @param ctx the parse tree
   */
  enterAdditional_statement?: (ctx: Additional_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.additional_statement`.
   * @param ctx the parse tree
   */
  exitAdditional_statement?: (ctx: Additional_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.explain_statement`.
   * @param ctx the parse tree
   */
  enterExplain_statement?: (ctx: Explain_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.explain_statement`.
   * @param ctx the parse tree
   */
  exitExplain_statement?: (ctx: Explain_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.explain_query`.
   * @param ctx the parse tree
   */
  enterExplain_query?: (ctx: Explain_queryContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.explain_query`.
   * @param ctx the parse tree
   */
  exitExplain_query?: (ctx: Explain_queryContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.execute_statement`.
   * @param ctx the parse tree
   */
  enterExecute_statement?: (ctx: Execute_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.execute_statement`.
   * @param ctx the parse tree
   */
  exitExecute_statement?: (ctx: Execute_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.declare_statement`.
   * @param ctx the parse tree
   */
  enterDeclare_statement?: (ctx: Declare_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.declare_statement`.
   * @param ctx the parse tree
   */
  exitDeclare_statement?: (ctx: Declare_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.show_statement`.
   * @param ctx the parse tree
   */
  enterShow_statement?: (ctx: Show_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.show_statement`.
   * @param ctx the parse tree
   */
  exitShow_statement?: (ctx: Show_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.explain_option`.
   * @param ctx the parse tree
   */
  enterExplain_option?: (ctx: Explain_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.explain_option`.
   * @param ctx the parse tree
   */
  exitExplain_option?: (ctx: Explain_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.user_name`.
   * @param ctx the parse tree
   */
  enterUser_name?: (ctx: User_nameContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.user_name`.
   * @param ctx the parse tree
   */
  exitUser_name?: (ctx: User_nameContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_cols_list`.
   * @param ctx the parse tree
   */
  enterTable_cols_list?: (ctx: Table_cols_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_cols_list`.
   * @param ctx the parse tree
   */
  exitTable_cols_list?: (ctx: Table_cols_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_cols`.
   * @param ctx the parse tree
   */
  enterTable_cols?: (ctx: Table_colsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_cols`.
   * @param ctx the parse tree
   */
  exitTable_cols?: (ctx: Table_colsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.vacuum_mode`.
   * @param ctx the parse tree
   */
  enterVacuum_mode?: (ctx: Vacuum_modeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.vacuum_mode`.
   * @param ctx the parse tree
   */
  exitVacuum_mode?: (ctx: Vacuum_modeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.vacuum_option`.
   * @param ctx the parse tree
   */
  enterVacuum_option?: (ctx: Vacuum_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.vacuum_option`.
   * @param ctx the parse tree
   */
  exitVacuum_option?: (ctx: Vacuum_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.analyze_mode`.
   * @param ctx the parse tree
   */
  enterAnalyze_mode?: (ctx: Analyze_modeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.analyze_mode`.
   * @param ctx the parse tree
   */
  exitAnalyze_mode?: (ctx: Analyze_modeContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.fetch_move_direction`.
   * @param ctx the parse tree
   */
  enterFetch_move_direction?: (ctx: Fetch_move_directionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.fetch_move_direction`.
   * @param ctx the parse tree
   */
  exitFetch_move_direction?: (ctx: Fetch_move_directionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.schema_statement`.
   * @param ctx the parse tree
   */
  enterSchema_statement?: (ctx: Schema_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.schema_statement`.
   * @param ctx the parse tree
   */
  exitSchema_statement?: (ctx: Schema_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.schema_create`.
   * @param ctx the parse tree
   */
  enterSchema_create?: (ctx: Schema_createContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.schema_create`.
   * @param ctx the parse tree
   */
  exitSchema_create?: (ctx: Schema_createContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.schema_alter`.
   * @param ctx the parse tree
   */
  enterSchema_alter?: (ctx: Schema_alterContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.schema_alter`.
   * @param ctx the parse tree
   */
  exitSchema_alter?: (ctx: Schema_alterContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.schema_drop`.
   * @param ctx the parse tree
   */
  enterSchema_drop?: (ctx: Schema_dropContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.schema_drop`.
   * @param ctx the parse tree
   */
  exitSchema_drop?: (ctx: Schema_dropContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.schema_import`.
   * @param ctx the parse tree
   */
  enterSchema_import?: (ctx: Schema_importContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.schema_import`.
   * @param ctx the parse tree
   */
  exitSchema_import?: (ctx: Schema_importContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_function_statement`.
   * @param ctx the parse tree
   */
  enterAlter_function_statement?: (ctx: Alter_function_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_function_statement`.
   * @param ctx the parse tree
   */
  exitAlter_function_statement?: (ctx: Alter_function_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_aggregate_statement`.
   * @param ctx the parse tree
   */
  enterAlter_aggregate_statement?: (ctx: Alter_aggregate_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_aggregate_statement`.
   * @param ctx the parse tree
   */
  exitAlter_aggregate_statement?: (ctx: Alter_aggregate_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_extension_statement`.
   * @param ctx the parse tree
   */
  enterAlter_extension_statement?: (ctx: Alter_extension_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_extension_statement`.
   * @param ctx the parse tree
   */
  exitAlter_extension_statement?: (ctx: Alter_extension_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_extension_action`.
   * @param ctx the parse tree
   */
  enterAlter_extension_action?: (ctx: Alter_extension_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_extension_action`.
   * @param ctx the parse tree
   */
  exitAlter_extension_action?: (ctx: Alter_extension_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.extension_member_object`.
   * @param ctx the parse tree
   */
  enterExtension_member_object?: (ctx: Extension_member_objectContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.extension_member_object`.
   * @param ctx the parse tree
   */
  exitExtension_member_object?: (ctx: Extension_member_objectContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_schema_statement`.
   * @param ctx the parse tree
   */
  enterAlter_schema_statement?: (ctx: Alter_schema_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_schema_statement`.
   * @param ctx the parse tree
   */
  exitAlter_schema_statement?: (ctx: Alter_schema_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_language_statement`.
   * @param ctx the parse tree
   */
  enterAlter_language_statement?: (ctx: Alter_language_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_language_statement`.
   * @param ctx the parse tree
   */
  exitAlter_language_statement?: (ctx: Alter_language_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_table_statement`.
   * @param ctx the parse tree
   */
  enterAlter_table_statement?: (ctx: Alter_table_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_table_statement`.
   * @param ctx the parse tree
   */
  exitAlter_table_statement?: (ctx: Alter_table_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_action`.
   * @param ctx the parse tree
   */
  enterTable_action?: (ctx: Table_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_action`.
   * @param ctx the parse tree
   */
  exitTable_action?: (ctx: Table_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.column_action`.
   * @param ctx the parse tree
   */
  enterColumn_action?: (ctx: Column_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.column_action`.
   * @param ctx the parse tree
   */
  exitColumn_action?: (ctx: Column_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.identity_body`.
   * @param ctx the parse tree
   */
  enterIdentity_body?: (ctx: Identity_bodyContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.identity_body`.
   * @param ctx the parse tree
   */
  exitIdentity_body?: (ctx: Identity_bodyContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_identity`.
   * @param ctx the parse tree
   */
  enterAlter_identity?: (ctx: Alter_identityContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_identity`.
   * @param ctx the parse tree
   */
  exitAlter_identity?: (ctx: Alter_identityContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.storage_option`.
   * @param ctx the parse tree
   */
  enterStorage_option?: (ctx: Storage_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.storage_option`.
   * @param ctx the parse tree
   */
  exitStorage_option?: (ctx: Storage_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.validate_constraint`.
   * @param ctx the parse tree
   */
  enterValidate_constraint?: (ctx: Validate_constraintContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.validate_constraint`.
   * @param ctx the parse tree
   */
  exitValidate_constraint?: (ctx: Validate_constraintContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_constraint`.
   * @param ctx the parse tree
   */
  enterDrop_constraint?: (ctx: Drop_constraintContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_constraint`.
   * @param ctx the parse tree
   */
  exitDrop_constraint?: (ctx: Drop_constraintContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_deferrable`.
   * @param ctx the parse tree
   */
  enterTable_deferrable?: (ctx: Table_deferrableContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_deferrable`.
   * @param ctx the parse tree
   */
  exitTable_deferrable?: (ctx: Table_deferrableContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_initialy_immed`.
   * @param ctx the parse tree
   */
  enterTable_initialy_immed?: (ctx: Table_initialy_immedContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_initialy_immed`.
   * @param ctx the parse tree
   */
  exitTable_initialy_immed?: (ctx: Table_initialy_immedContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_actions_common`.
   * @param ctx the parse tree
   */
  enterFunction_actions_common?: (ctx: Function_actions_commonContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_actions_common`.
   * @param ctx the parse tree
   */
  exitFunction_actions_common?: (ctx: Function_actions_commonContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_def`.
   * @param ctx the parse tree
   */
  enterFunction_def?: (ctx: Function_defContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_def`.
   * @param ctx the parse tree
   */
  exitFunction_def?: (ctx: Function_defContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_index_statement`.
   * @param ctx the parse tree
   */
  enterAlter_index_statement?: (ctx: Alter_index_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_index_statement`.
   * @param ctx the parse tree
   */
  exitAlter_index_statement?: (ctx: Alter_index_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.index_def_action`.
   * @param ctx the parse tree
   */
  enterIndex_def_action?: (ctx: Index_def_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.index_def_action`.
   * @param ctx the parse tree
   */
  exitIndex_def_action?: (ctx: Index_def_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_default_privileges`.
   * @param ctx the parse tree
   */
  enterAlter_default_privileges?: (ctx: Alter_default_privilegesContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_default_privileges`.
   * @param ctx the parse tree
   */
  exitAlter_default_privileges?: (ctx: Alter_default_privilegesContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.abbreviated_grant_or_revoke`.
   * @param ctx the parse tree
   */
  enterAbbreviated_grant_or_revoke?: (ctx: Abbreviated_grant_or_revokeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.abbreviated_grant_or_revoke`.
   * @param ctx the parse tree
   */
  exitAbbreviated_grant_or_revoke?: (ctx: Abbreviated_grant_or_revokeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.grant_option_for`.
   * @param ctx the parse tree
   */
  enterGrant_option_for?: (ctx: Grant_option_forContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.grant_option_for`.
   * @param ctx the parse tree
   */
  exitGrant_option_for?: (ctx: Grant_option_forContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_sequence_statement`.
   * @param ctx the parse tree
   */
  enterAlter_sequence_statement?: (ctx: Alter_sequence_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_sequence_statement`.
   * @param ctx the parse tree
   */
  exitAlter_sequence_statement?: (ctx: Alter_sequence_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_view_statement`.
   * @param ctx the parse tree
   */
  enterAlter_view_statement?: (ctx: Alter_view_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_view_statement`.
   * @param ctx the parse tree
   */
  exitAlter_view_statement?: (ctx: Alter_view_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_event_trigger`.
   * @param ctx the parse tree
   */
  enterAlter_event_trigger?: (ctx: Alter_event_triggerContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_event_trigger`.
   * @param ctx the parse tree
   */
  exitAlter_event_trigger?: (ctx: Alter_event_triggerContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_event_trigger_action`.
   * @param ctx the parse tree
   */
  enterAlter_event_trigger_action?: (ctx: Alter_event_trigger_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_event_trigger_action`.
   * @param ctx the parse tree
   */
  exitAlter_event_trigger_action?: (ctx: Alter_event_trigger_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_type_statement`.
   * @param ctx the parse tree
   */
  enterAlter_type_statement?: (ctx: Alter_type_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_type_statement`.
   * @param ctx the parse tree
   */
  exitAlter_type_statement?: (ctx: Alter_type_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_domain_statement`.
   * @param ctx the parse tree
   */
  enterAlter_domain_statement?: (ctx: Alter_domain_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_domain_statement`.
   * @param ctx the parse tree
   */
  exitAlter_domain_statement?: (ctx: Alter_domain_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_server_statement`.
   * @param ctx the parse tree
   */
  enterAlter_server_statement?: (ctx: Alter_server_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_server_statement`.
   * @param ctx the parse tree
   */
  exitAlter_server_statement?: (ctx: Alter_server_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_server_action`.
   * @param ctx the parse tree
   */
  enterAlter_server_action?: (ctx: Alter_server_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_server_action`.
   * @param ctx the parse tree
   */
  exitAlter_server_action?: (ctx: Alter_server_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_fts_statement`.
   * @param ctx the parse tree
   */
  enterAlter_fts_statement?: (ctx: Alter_fts_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_fts_statement`.
   * @param ctx the parse tree
   */
  exitAlter_fts_statement?: (ctx: Alter_fts_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_fts_configuration`.
   * @param ctx the parse tree
   */
  enterAlter_fts_configuration?: (ctx: Alter_fts_configurationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_fts_configuration`.
   * @param ctx the parse tree
   */
  exitAlter_fts_configuration?: (ctx: Alter_fts_configurationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.type_action`.
   * @param ctx the parse tree
   */
  enterType_action?: (ctx: Type_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.type_action`.
   * @param ctx the parse tree
   */
  exitType_action?: (ctx: Type_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.set_def_column`.
   * @param ctx the parse tree
   */
  enterSet_def_column?: (ctx: Set_def_columnContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.set_def_column`.
   * @param ctx the parse tree
   */
  exitSet_def_column?: (ctx: Set_def_columnContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_def`.
   * @param ctx the parse tree
   */
  enterDrop_def?: (ctx: Drop_defContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_def`.
   * @param ctx the parse tree
   */
  exitDrop_def?: (ctx: Drop_defContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_index_statement`.
   * @param ctx the parse tree
   */
  enterCreate_index_statement?: (ctx: Create_index_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_index_statement`.
   * @param ctx the parse tree
   */
  exitCreate_index_statement?: (ctx: Create_index_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.index_rest`.
   * @param ctx the parse tree
   */
  enterIndex_rest?: (ctx: Index_restContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.index_rest`.
   * @param ctx the parse tree
   */
  exitIndex_rest?: (ctx: Index_restContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.index_sort`.
   * @param ctx the parse tree
   */
  enterIndex_sort?: (ctx: Index_sortContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.index_sort`.
   * @param ctx the parse tree
   */
  exitIndex_sort?: (ctx: Index_sortContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.including_index`.
   * @param ctx the parse tree
   */
  enterIncluding_index?: (ctx: Including_indexContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.including_index`.
   * @param ctx the parse tree
   */
  exitIncluding_index?: (ctx: Including_indexContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.index_where`.
   * @param ctx the parse tree
   */
  enterIndex_where?: (ctx: Index_whereContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.index_where`.
   * @param ctx the parse tree
   */
  exitIndex_where?: (ctx: Index_whereContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_extension_statement`.
   * @param ctx the parse tree
   */
  enterCreate_extension_statement?: (ctx: Create_extension_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_extension_statement`.
   * @param ctx the parse tree
   */
  exitCreate_extension_statement?: (ctx: Create_extension_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_language_statement`.
   * @param ctx the parse tree
   */
  enterCreate_language_statement?: (ctx: Create_language_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_language_statement`.
   * @param ctx the parse tree
   */
  exitCreate_language_statement?: (ctx: Create_language_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_event_trigger`.
   * @param ctx the parse tree
   */
  enterCreate_event_trigger?: (ctx: Create_event_triggerContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_event_trigger`.
   * @param ctx the parse tree
   */
  exitCreate_event_trigger?: (ctx: Create_event_triggerContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_type_statement`.
   * @param ctx the parse tree
   */
  enterCreate_type_statement?: (ctx: Create_type_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_type_statement`.
   * @param ctx the parse tree
   */
  exitCreate_type_statement?: (ctx: Create_type_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_domain_statement`.
   * @param ctx the parse tree
   */
  enterCreate_domain_statement?: (ctx: Create_domain_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_domain_statement`.
   * @param ctx the parse tree
   */
  exitCreate_domain_statement?: (ctx: Create_domain_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_server_statement`.
   * @param ctx the parse tree
   */
  enterCreate_server_statement?: (ctx: Create_server_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_server_statement`.
   * @param ctx the parse tree
   */
  exitCreate_server_statement?: (ctx: Create_server_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_fts_dictionary`.
   * @param ctx the parse tree
   */
  enterCreate_fts_dictionary?: (ctx: Create_fts_dictionaryContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_fts_dictionary`.
   * @param ctx the parse tree
   */
  exitCreate_fts_dictionary?: (ctx: Create_fts_dictionaryContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.option_with_value`.
   * @param ctx the parse tree
   */
  enterOption_with_value?: (ctx: Option_with_valueContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.option_with_value`.
   * @param ctx the parse tree
   */
  exitOption_with_value?: (ctx: Option_with_valueContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_fts_configuration`.
   * @param ctx the parse tree
   */
  enterCreate_fts_configuration?: (ctx: Create_fts_configurationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_fts_configuration`.
   * @param ctx the parse tree
   */
  exitCreate_fts_configuration?: (ctx: Create_fts_configurationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_fts_template`.
   * @param ctx the parse tree
   */
  enterCreate_fts_template?: (ctx: Create_fts_templateContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_fts_template`.
   * @param ctx the parse tree
   */
  exitCreate_fts_template?: (ctx: Create_fts_templateContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_fts_parser`.
   * @param ctx the parse tree
   */
  enterCreate_fts_parser?: (ctx: Create_fts_parserContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_fts_parser`.
   * @param ctx the parse tree
   */
  exitCreate_fts_parser?: (ctx: Create_fts_parserContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_collation`.
   * @param ctx the parse tree
   */
  enterCreate_collation?: (ctx: Create_collationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_collation`.
   * @param ctx the parse tree
   */
  exitCreate_collation?: (ctx: Create_collationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_collation`.
   * @param ctx the parse tree
   */
  enterAlter_collation?: (ctx: Alter_collationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_collation`.
   * @param ctx the parse tree
   */
  exitAlter_collation?: (ctx: Alter_collationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.collation_option`.
   * @param ctx the parse tree
   */
  enterCollation_option?: (ctx: Collation_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.collation_option`.
   * @param ctx the parse tree
   */
  exitCollation_option?: (ctx: Collation_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_user_mapping`.
   * @param ctx the parse tree
   */
  enterCreate_user_mapping?: (ctx: Create_user_mappingContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_user_mapping`.
   * @param ctx the parse tree
   */
  exitCreate_user_mapping?: (ctx: Create_user_mappingContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_user_mapping`.
   * @param ctx the parse tree
   */
  enterAlter_user_mapping?: (ctx: Alter_user_mappingContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_user_mapping`.
   * @param ctx the parse tree
   */
  exitAlter_user_mapping?: (ctx: Alter_user_mappingContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_user_or_role`.
   * @param ctx the parse tree
   */
  enterAlter_user_or_role?: (ctx: Alter_user_or_roleContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_user_or_role`.
   * @param ctx the parse tree
   */
  exitAlter_user_or_role?: (ctx: Alter_user_or_roleContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_user_or_role_set_reset`.
   * @param ctx the parse tree
   */
  enterAlter_user_or_role_set_reset?: (ctx: Alter_user_or_role_set_resetContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_user_or_role_set_reset`.
   * @param ctx the parse tree
   */
  exitAlter_user_or_role_set_reset?: (ctx: Alter_user_or_role_set_resetContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.user_or_role_set_reset`.
   * @param ctx the parse tree
   */
  enterUser_or_role_set_reset?: (ctx: User_or_role_set_resetContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.user_or_role_set_reset`.
   * @param ctx the parse tree
   */
  exitUser_or_role_set_reset?: (ctx: User_or_role_set_resetContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_group`.
   * @param ctx the parse tree
   */
  enterAlter_group?: (ctx: Alter_groupContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_group`.
   * @param ctx the parse tree
   */
  exitAlter_group?: (ctx: Alter_groupContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_group_action`.
   * @param ctx the parse tree
   */
  enterAlter_group_action?: (ctx: Alter_group_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_group_action`.
   * @param ctx the parse tree
   */
  exitAlter_group_action?: (ctx: Alter_group_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_tablespace`.
   * @param ctx the parse tree
   */
  enterAlter_tablespace?: (ctx: Alter_tablespaceContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_tablespace`.
   * @param ctx the parse tree
   */
  exitAlter_tablespace?: (ctx: Alter_tablespaceContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_owner`.
   * @param ctx the parse tree
   */
  enterAlter_owner?: (ctx: Alter_ownerContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_owner`.
   * @param ctx the parse tree
   */
  exitAlter_owner?: (ctx: Alter_ownerContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_tablespace_action`.
   * @param ctx the parse tree
   */
  enterAlter_tablespace_action?: (ctx: Alter_tablespace_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_tablespace_action`.
   * @param ctx the parse tree
   */
  exitAlter_tablespace_action?: (ctx: Alter_tablespace_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_statistics`.
   * @param ctx the parse tree
   */
  enterAlter_statistics?: (ctx: Alter_statisticsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_statistics`.
   * @param ctx the parse tree
   */
  exitAlter_statistics?: (ctx: Alter_statisticsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_foreign_data_wrapper`.
   * @param ctx the parse tree
   */
  enterAlter_foreign_data_wrapper?: (ctx: Alter_foreign_data_wrapperContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_foreign_data_wrapper`.
   * @param ctx the parse tree
   */
  exitAlter_foreign_data_wrapper?: (ctx: Alter_foreign_data_wrapperContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_foreign_data_wrapper_action`.
   * @param ctx the parse tree
   */
  enterAlter_foreign_data_wrapper_action?: (ctx: Alter_foreign_data_wrapper_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_foreign_data_wrapper_action`.
   * @param ctx the parse tree
   */
  exitAlter_foreign_data_wrapper_action?: (ctx: Alter_foreign_data_wrapper_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_operator_statement`.
   * @param ctx the parse tree
   */
  enterAlter_operator_statement?: (ctx: Alter_operator_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_operator_statement`.
   * @param ctx the parse tree
   */
  exitAlter_operator_statement?: (ctx: Alter_operator_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_operator_action`.
   * @param ctx the parse tree
   */
  enterAlter_operator_action?: (ctx: Alter_operator_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_operator_action`.
   * @param ctx the parse tree
   */
  exitAlter_operator_action?: (ctx: Alter_operator_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.operator_set_restrict_join`.
   * @param ctx the parse tree
   */
  enterOperator_set_restrict_join?: (ctx: Operator_set_restrict_joinContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.operator_set_restrict_join`.
   * @param ctx the parse tree
   */
  exitOperator_set_restrict_join?: (ctx: Operator_set_restrict_joinContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_user_mapping`.
   * @param ctx the parse tree
   */
  enterDrop_user_mapping?: (ctx: Drop_user_mappingContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_user_mapping`.
   * @param ctx the parse tree
   */
  exitDrop_user_mapping?: (ctx: Drop_user_mappingContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_owned`.
   * @param ctx the parse tree
   */
  enterDrop_owned?: (ctx: Drop_ownedContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_owned`.
   * @param ctx the parse tree
   */
  exitDrop_owned?: (ctx: Drop_ownedContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_operator_statement`.
   * @param ctx the parse tree
   */
  enterDrop_operator_statement?: (ctx: Drop_operator_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_operator_statement`.
   * @param ctx the parse tree
   */
  exitDrop_operator_statement?: (ctx: Drop_operator_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.target_operator`.
   * @param ctx the parse tree
   */
  enterTarget_operator?: (ctx: Target_operatorContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.target_operator`.
   * @param ctx the parse tree
   */
  exitTarget_operator?: (ctx: Target_operatorContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.domain_constraint`.
   * @param ctx the parse tree
   */
  enterDomain_constraint?: (ctx: Domain_constraintContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.domain_constraint`.
   * @param ctx the parse tree
   */
  exitDomain_constraint?: (ctx: Domain_constraintContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_transform_statement`.
   * @param ctx the parse tree
   */
  enterCreate_transform_statement?: (ctx: Create_transform_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_transform_statement`.
   * @param ctx the parse tree
   */
  exitCreate_transform_statement?: (ctx: Create_transform_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_access_method`.
   * @param ctx the parse tree
   */
  enterCreate_access_method?: (ctx: Create_access_methodContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_access_method`.
   * @param ctx the parse tree
   */
  exitCreate_access_method?: (ctx: Create_access_methodContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_user_or_role`.
   * @param ctx the parse tree
   */
  enterCreate_user_or_role?: (ctx: Create_user_or_roleContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_user_or_role`.
   * @param ctx the parse tree
   */
  exitCreate_user_or_role?: (ctx: Create_user_or_roleContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.user_or_role_option`.
   * @param ctx the parse tree
   */
  enterUser_or_role_option?: (ctx: User_or_role_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.user_or_role_option`.
   * @param ctx the parse tree
   */
  exitUser_or_role_option?: (ctx: User_or_role_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.user_or_role_option_for_alter`.
   * @param ctx the parse tree
   */
  enterUser_or_role_option_for_alter?: (ctx: User_or_role_option_for_alterContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.user_or_role_option_for_alter`.
   * @param ctx the parse tree
   */
  exitUser_or_role_option_for_alter?: (ctx: User_or_role_option_for_alterContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.user_or_role_or_group_common_option`.
   * @param ctx the parse tree
   */
  enterUser_or_role_or_group_common_option?: (
    ctx: User_or_role_or_group_common_optionContext
  ) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.user_or_role_or_group_common_option`.
   * @param ctx the parse tree
   */
  exitUser_or_role_or_group_common_option?: (
    ctx: User_or_role_or_group_common_optionContext
  ) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.user_or_role_common_option`.
   * @param ctx the parse tree
   */
  enterUser_or_role_common_option?: (ctx: User_or_role_common_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.user_or_role_common_option`.
   * @param ctx the parse tree
   */
  exitUser_or_role_common_option?: (ctx: User_or_role_common_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.user_or_role_or_group_option_for_create`.
   * @param ctx the parse tree
   */
  enterUser_or_role_or_group_option_for_create?: (
    ctx: User_or_role_or_group_option_for_createContext
  ) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.user_or_role_or_group_option_for_create`.
   * @param ctx the parse tree
   */
  exitUser_or_role_or_group_option_for_create?: (
    ctx: User_or_role_or_group_option_for_createContext
  ) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_group`.
   * @param ctx the parse tree
   */
  enterCreate_group?: (ctx: Create_groupContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_group`.
   * @param ctx the parse tree
   */
  exitCreate_group?: (ctx: Create_groupContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.group_option`.
   * @param ctx the parse tree
   */
  enterGroup_option?: (ctx: Group_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.group_option`.
   * @param ctx the parse tree
   */
  exitGroup_option?: (ctx: Group_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_tablespace`.
   * @param ctx the parse tree
   */
  enterCreate_tablespace?: (ctx: Create_tablespaceContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_tablespace`.
   * @param ctx the parse tree
   */
  exitCreate_tablespace?: (ctx: Create_tablespaceContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_statistics`.
   * @param ctx the parse tree
   */
  enterCreate_statistics?: (ctx: Create_statisticsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_statistics`.
   * @param ctx the parse tree
   */
  exitCreate_statistics?: (ctx: Create_statisticsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_foreign_data_wrapper`.
   * @param ctx the parse tree
   */
  enterCreate_foreign_data_wrapper?: (ctx: Create_foreign_data_wrapperContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_foreign_data_wrapper`.
   * @param ctx the parse tree
   */
  exitCreate_foreign_data_wrapper?: (ctx: Create_foreign_data_wrapperContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.option_without_equal`.
   * @param ctx the parse tree
   */
  enterOption_without_equal?: (ctx: Option_without_equalContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.option_without_equal`.
   * @param ctx the parse tree
   */
  exitOption_without_equal?: (ctx: Option_without_equalContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_operator_statement`.
   * @param ctx the parse tree
   */
  enterCreate_operator_statement?: (ctx: Create_operator_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_operator_statement`.
   * @param ctx the parse tree
   */
  exitCreate_operator_statement?: (ctx: Create_operator_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.operator_name`.
   * @param ctx the parse tree
   */
  enterOperator_name?: (ctx: Operator_nameContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.operator_name`.
   * @param ctx the parse tree
   */
  exitOperator_name?: (ctx: Operator_nameContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.operator_option`.
   * @param ctx the parse tree
   */
  enterOperator_option?: (ctx: Operator_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.operator_option`.
   * @param ctx the parse tree
   */
  exitOperator_option?: (ctx: Operator_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_aggregate_statement`.
   * @param ctx the parse tree
   */
  enterCreate_aggregate_statement?: (ctx: Create_aggregate_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_aggregate_statement`.
   * @param ctx the parse tree
   */
  exitCreate_aggregate_statement?: (ctx: Create_aggregate_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.aggregate_param`.
   * @param ctx the parse tree
   */
  enterAggregate_param?: (ctx: Aggregate_paramContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.aggregate_param`.
   * @param ctx the parse tree
   */
  exitAggregate_param?: (ctx: Aggregate_paramContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.set_statement`.
   * @param ctx the parse tree
   */
  enterSet_statement?: (ctx: Set_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.set_statement`.
   * @param ctx the parse tree
   */
  exitSet_statement?: (ctx: Set_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.set_action`.
   * @param ctx the parse tree
   */
  enterSet_action?: (ctx: Set_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.set_action`.
   * @param ctx the parse tree
   */
  exitSet_action?: (ctx: Set_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.session_local_option`.
   * @param ctx the parse tree
   */
  enterSession_local_option?: (ctx: Session_local_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.session_local_option`.
   * @param ctx the parse tree
   */
  exitSession_local_option?: (ctx: Session_local_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.set_statement_value`.
   * @param ctx the parse tree
   */
  enterSet_statement_value?: (ctx: Set_statement_valueContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.set_statement_value`.
   * @param ctx the parse tree
   */
  exitSet_statement_value?: (ctx: Set_statement_valueContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_rewrite_statement`.
   * @param ctx the parse tree
   */
  enterCreate_rewrite_statement?: (ctx: Create_rewrite_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_rewrite_statement`.
   * @param ctx the parse tree
   */
  exitCreate_rewrite_statement?: (ctx: Create_rewrite_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.rewrite_command`.
   * @param ctx the parse tree
   */
  enterRewrite_command?: (ctx: Rewrite_commandContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.rewrite_command`.
   * @param ctx the parse tree
   */
  exitRewrite_command?: (ctx: Rewrite_commandContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_trigger_statement`.
   * @param ctx the parse tree
   */
  enterCreate_trigger_statement?: (ctx: Create_trigger_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_trigger_statement`.
   * @param ctx the parse tree
   */
  exitCreate_trigger_statement?: (ctx: Create_trigger_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.trigger_referencing`.
   * @param ctx the parse tree
   */
  enterTrigger_referencing?: (ctx: Trigger_referencingContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.trigger_referencing`.
   * @param ctx the parse tree
   */
  exitTrigger_referencing?: (ctx: Trigger_referencingContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.when_trigger`.
   * @param ctx the parse tree
   */
  enterWhen_trigger?: (ctx: When_triggerContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.when_trigger`.
   * @param ctx the parse tree
   */
  exitWhen_trigger?: (ctx: When_triggerContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.rule_common`.
   * @param ctx the parse tree
   */
  enterRule_common?: (ctx: Rule_commonContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.rule_common`.
   * @param ctx the parse tree
   */
  exitRule_common?: (ctx: Rule_commonContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.rule_member_object`.
   * @param ctx the parse tree
   */
  enterRule_member_object?: (ctx: Rule_member_objectContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.rule_member_object`.
   * @param ctx the parse tree
   */
  exitRule_member_object?: (ctx: Rule_member_objectContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.columns_permissions`.
   * @param ctx the parse tree
   */
  enterColumns_permissions?: (ctx: Columns_permissionsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.columns_permissions`.
   * @param ctx the parse tree
   */
  exitColumns_permissions?: (ctx: Columns_permissionsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_column_privileges`.
   * @param ctx the parse tree
   */
  enterTable_column_privileges?: (ctx: Table_column_privilegesContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_column_privileges`.
   * @param ctx the parse tree
   */
  exitTable_column_privileges?: (ctx: Table_column_privilegesContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.permissions`.
   * @param ctx the parse tree
   */
  enterPermissions?: (ctx: PermissionsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.permissions`.
   * @param ctx the parse tree
   */
  exitPermissions?: (ctx: PermissionsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.permission`.
   * @param ctx the parse tree
   */
  enterPermission?: (ctx: PermissionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.permission`.
   * @param ctx the parse tree
   */
  exitPermission?: (ctx: PermissionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.other_rules`.
   * @param ctx the parse tree
   */
  enterOther_rules?: (ctx: Other_rulesContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.other_rules`.
   * @param ctx the parse tree
   */
  exitOther_rules?: (ctx: Other_rulesContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.grant_to_rule`.
   * @param ctx the parse tree
   */
  enterGrant_to_rule?: (ctx: Grant_to_ruleContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.grant_to_rule`.
   * @param ctx the parse tree
   */
  exitGrant_to_rule?: (ctx: Grant_to_ruleContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.revoke_from_cascade_restrict`.
   * @param ctx the parse tree
   */
  enterRevoke_from_cascade_restrict?: (ctx: Revoke_from_cascade_restrictContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.revoke_from_cascade_restrict`.
   * @param ctx the parse tree
   */
  exitRevoke_from_cascade_restrict?: (ctx: Revoke_from_cascade_restrictContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.roles_names`.
   * @param ctx the parse tree
   */
  enterRoles_names?: (ctx: Roles_namesContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.roles_names`.
   * @param ctx the parse tree
   */
  exitRoles_names?: (ctx: Roles_namesContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.role_name_with_group`.
   * @param ctx the parse tree
   */
  enterRole_name_with_group?: (ctx: Role_name_with_groupContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.role_name_with_group`.
   * @param ctx the parse tree
   */
  exitRole_name_with_group?: (ctx: Role_name_with_groupContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.comment_on_statement`.
   * @param ctx the parse tree
   */
  enterComment_on_statement?: (ctx: Comment_on_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.comment_on_statement`.
   * @param ctx the parse tree
   */
  exitComment_on_statement?: (ctx: Comment_on_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.security_label`.
   * @param ctx the parse tree
   */
  enterSecurity_label?: (ctx: Security_labelContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.security_label`.
   * @param ctx the parse tree
   */
  exitSecurity_label?: (ctx: Security_labelContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.comment_member_object`.
   * @param ctx the parse tree
   */
  enterComment_member_object?: (ctx: Comment_member_objectContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.comment_member_object`.
   * @param ctx the parse tree
   */
  exitComment_member_object?: (ctx: Comment_member_objectContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.label_member_object`.
   * @param ctx the parse tree
   */
  enterLabel_member_object?: (ctx: Label_member_objectContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.label_member_object`.
   * @param ctx the parse tree
   */
  exitLabel_member_object?: (ctx: Label_member_objectContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_function_statement`.
   * @param ctx the parse tree
   */
  enterCreate_function_statement?: (ctx: Create_function_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_function_statement`.
   * @param ctx the parse tree
   */
  exitCreate_function_statement?: (ctx: Create_function_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_funct_params`.
   * @param ctx the parse tree
   */
  enterCreate_funct_params?: (ctx: Create_funct_paramsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_funct_params`.
   * @param ctx the parse tree
   */
  exitCreate_funct_params?: (ctx: Create_funct_paramsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.transform_for_type`.
   * @param ctx the parse tree
   */
  enterTransform_for_type?: (ctx: Transform_for_typeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.transform_for_type`.
   * @param ctx the parse tree
   */
  exitTransform_for_type?: (ctx: Transform_for_typeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_ret_table`.
   * @param ctx the parse tree
   */
  enterFunction_ret_table?: (ctx: Function_ret_tableContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_ret_table`.
   * @param ctx the parse tree
   */
  exitFunction_ret_table?: (ctx: Function_ret_tableContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_column_name_type`.
   * @param ctx the parse tree
   */
  enterFunction_column_name_type?: (ctx: Function_column_name_typeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_column_name_type`.
   * @param ctx the parse tree
   */
  exitFunction_column_name_type?: (ctx: Function_column_name_typeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_parameters`.
   * @param ctx the parse tree
   */
  enterFunction_parameters?: (ctx: Function_parametersContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_parameters`.
   * @param ctx the parse tree
   */
  exitFunction_parameters?: (ctx: Function_parametersContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.agg_order`.
   * @param ctx the parse tree
   */
  enterAgg_order?: (ctx: Agg_orderContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.agg_order`.
   * @param ctx the parse tree
   */
  exitAgg_order?: (ctx: Agg_orderContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.function_arguments`.
   * @param ctx the parse tree
   */
  enterFunction_arguments?: (ctx: Function_argumentsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_arguments`.
   * @param ctx the parse tree
   */
  exitFunction_arguments?: (ctx: Function_argumentsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.argmode`.
   * @param ctx the parse tree
   */
  enterArgmode?: (ctx: ArgmodeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.argmode`.
   * @param ctx the parse tree
   */
  exitArgmode?: (ctx: ArgmodeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_sequence_statement`.
   * @param ctx the parse tree
   */
  enterCreate_sequence_statement?: (ctx: Create_sequence_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_sequence_statement`.
   * @param ctx the parse tree
   */
  exitCreate_sequence_statement?: (ctx: Create_sequence_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.sequence_body`.
   * @param ctx the parse tree
   */
  enterSequence_body?: (ctx: Sequence_bodyContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.sequence_body`.
   * @param ctx the parse tree
   */
  exitSequence_body?: (ctx: Sequence_bodyContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.signed_number_literal`.
   * @param ctx the parse tree
   */
  enterSigned_number_literal?: (ctx: Signed_number_literalContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.signed_number_literal`.
   * @param ctx the parse tree
   */
  exitSigned_number_literal?: (ctx: Signed_number_literalContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.signed_numerical_literal`.
   * @param ctx the parse tree
   */
  enterSigned_numerical_literal?: (ctx: Signed_numerical_literalContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.signed_numerical_literal`.
   * @param ctx the parse tree
   */
  exitSigned_numerical_literal?: (ctx: Signed_numerical_literalContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.sign`.
   * @param ctx the parse tree
   */
  enterSign?: (ctx: SignContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.sign`.
   * @param ctx the parse tree
   */
  exitSign?: (ctx: SignContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_schema_statement`.
   * @param ctx the parse tree
   */
  enterCreate_schema_statement?: (ctx: Create_schema_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_schema_statement`.
   * @param ctx the parse tree
   */
  exitCreate_schema_statement?: (ctx: Create_schema_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_policy_statement`.
   * @param ctx the parse tree
   */
  enterCreate_policy_statement?: (ctx: Create_policy_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_policy_statement`.
   * @param ctx the parse tree
   */
  exitCreate_policy_statement?: (ctx: Create_policy_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_policy_statement`.
   * @param ctx the parse tree
   */
  enterAlter_policy_statement?: (ctx: Alter_policy_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_policy_statement`.
   * @param ctx the parse tree
   */
  exitAlter_policy_statement?: (ctx: Alter_policy_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_policy_statement`.
   * @param ctx the parse tree
   */
  enterDrop_policy_statement?: (ctx: Drop_policy_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_policy_statement`.
   * @param ctx the parse tree
   */
  exitDrop_policy_statement?: (ctx: Drop_policy_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_subscription_statement`.
   * @param ctx the parse tree
   */
  enterCreate_subscription_statement?: (ctx: Create_subscription_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_subscription_statement`.
   * @param ctx the parse tree
   */
  exitCreate_subscription_statement?: (ctx: Create_subscription_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_subscription_statement`.
   * @param ctx the parse tree
   */
  enterAlter_subscription_statement?: (ctx: Alter_subscription_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_subscription_statement`.
   * @param ctx the parse tree
   */
  exitAlter_subscription_statement?: (ctx: Alter_subscription_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_subscription_action`.
   * @param ctx the parse tree
   */
  enterAlter_subscription_action?: (ctx: Alter_subscription_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_subscription_action`.
   * @param ctx the parse tree
   */
  exitAlter_subscription_action?: (ctx: Alter_subscription_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_cast_statement`.
   * @param ctx the parse tree
   */
  enterCreate_cast_statement?: (ctx: Create_cast_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_cast_statement`.
   * @param ctx the parse tree
   */
  exitCreate_cast_statement?: (ctx: Create_cast_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_cast_statement`.
   * @param ctx the parse tree
   */
  enterDrop_cast_statement?: (ctx: Drop_cast_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_cast_statement`.
   * @param ctx the parse tree
   */
  exitDrop_cast_statement?: (ctx: Drop_cast_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_operator_family_statement`.
   * @param ctx the parse tree
   */
  enterCreate_operator_family_statement?: (ctx: Create_operator_family_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_operator_family_statement`.
   * @param ctx the parse tree
   */
  exitCreate_operator_family_statement?: (ctx: Create_operator_family_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_operator_family_statement`.
   * @param ctx the parse tree
   */
  enterAlter_operator_family_statement?: (ctx: Alter_operator_family_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_operator_family_statement`.
   * @param ctx the parse tree
   */
  exitAlter_operator_family_statement?: (ctx: Alter_operator_family_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.operator_family_action`.
   * @param ctx the parse tree
   */
  enterOperator_family_action?: (ctx: Operator_family_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.operator_family_action`.
   * @param ctx the parse tree
   */
  exitOperator_family_action?: (ctx: Operator_family_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.add_operator_to_family`.
   * @param ctx the parse tree
   */
  enterAdd_operator_to_family?: (ctx: Add_operator_to_familyContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.add_operator_to_family`.
   * @param ctx the parse tree
   */
  exitAdd_operator_to_family?: (ctx: Add_operator_to_familyContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_operator_from_family`.
   * @param ctx the parse tree
   */
  enterDrop_operator_from_family?: (ctx: Drop_operator_from_familyContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_operator_from_family`.
   * @param ctx the parse tree
   */
  exitDrop_operator_from_family?: (ctx: Drop_operator_from_familyContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_operator_family_statement`.
   * @param ctx the parse tree
   */
  enterDrop_operator_family_statement?: (ctx: Drop_operator_family_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_operator_family_statement`.
   * @param ctx the parse tree
   */
  exitDrop_operator_family_statement?: (ctx: Drop_operator_family_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_operator_class_statement`.
   * @param ctx the parse tree
   */
  enterCreate_operator_class_statement?: (ctx: Create_operator_class_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_operator_class_statement`.
   * @param ctx the parse tree
   */
  exitCreate_operator_class_statement?: (ctx: Create_operator_class_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_operator_class_option`.
   * @param ctx the parse tree
   */
  enterCreate_operator_class_option?: (ctx: Create_operator_class_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_operator_class_option`.
   * @param ctx the parse tree
   */
  exitCreate_operator_class_option?: (ctx: Create_operator_class_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_operator_class_statement`.
   * @param ctx the parse tree
   */
  enterAlter_operator_class_statement?: (ctx: Alter_operator_class_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_operator_class_statement`.
   * @param ctx the parse tree
   */
  exitAlter_operator_class_statement?: (ctx: Alter_operator_class_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_operator_class_statement`.
   * @param ctx the parse tree
   */
  enterDrop_operator_class_statement?: (ctx: Drop_operator_class_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_operator_class_statement`.
   * @param ctx the parse tree
   */
  exitDrop_operator_class_statement?: (ctx: Drop_operator_class_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_conversion_statement`.
   * @param ctx the parse tree
   */
  enterCreate_conversion_statement?: (ctx: Create_conversion_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_conversion_statement`.
   * @param ctx the parse tree
   */
  exitCreate_conversion_statement?: (ctx: Create_conversion_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_conversion_statement`.
   * @param ctx the parse tree
   */
  enterAlter_conversion_statement?: (ctx: Alter_conversion_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_conversion_statement`.
   * @param ctx the parse tree
   */
  exitAlter_conversion_statement?: (ctx: Alter_conversion_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_publication_statement`.
   * @param ctx the parse tree
   */
  enterCreate_publication_statement?: (ctx: Create_publication_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_publication_statement`.
   * @param ctx the parse tree
   */
  exitCreate_publication_statement?: (ctx: Create_publication_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_publication_statement`.
   * @param ctx the parse tree
   */
  enterAlter_publication_statement?: (ctx: Alter_publication_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_publication_statement`.
   * @param ctx the parse tree
   */
  exitAlter_publication_statement?: (ctx: Alter_publication_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_publication_action`.
   * @param ctx the parse tree
   */
  enterAlter_publication_action?: (ctx: Alter_publication_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_publication_action`.
   * @param ctx the parse tree
   */
  exitAlter_publication_action?: (ctx: Alter_publication_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.only_table_multiply`.
   * @param ctx the parse tree
   */
  enterOnly_table_multiply?: (ctx: Only_table_multiplyContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.only_table_multiply`.
   * @param ctx the parse tree
   */
  exitOnly_table_multiply?: (ctx: Only_table_multiplyContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_trigger_statement`.
   * @param ctx the parse tree
   */
  enterAlter_trigger_statement?: (ctx: Alter_trigger_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_trigger_statement`.
   * @param ctx the parse tree
   */
  exitAlter_trigger_statement?: (ctx: Alter_trigger_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.alter_rule_statement`.
   * @param ctx the parse tree
   */
  enterAlter_rule_statement?: (ctx: Alter_rule_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.alter_rule_statement`.
   * @param ctx the parse tree
   */
  exitAlter_rule_statement?: (ctx: Alter_rule_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.copy_statement`.
   * @param ctx the parse tree
   */
  enterCopy_statement?: (ctx: Copy_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.copy_statement`.
   * @param ctx the parse tree
   */
  exitCopy_statement?: (ctx: Copy_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.copy_from_statement`.
   * @param ctx the parse tree
   */
  enterCopy_from_statement?: (ctx: Copy_from_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.copy_from_statement`.
   * @param ctx the parse tree
   */
  exitCopy_from_statement?: (ctx: Copy_from_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.copy_to_statement`.
   * @param ctx the parse tree
   */
  enterCopy_to_statement?: (ctx: Copy_to_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.copy_to_statement`.
   * @param ctx the parse tree
   */
  exitCopy_to_statement?: (ctx: Copy_to_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.copy_option_list`.
   * @param ctx the parse tree
   */
  enterCopy_option_list?: (ctx: Copy_option_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.copy_option_list`.
   * @param ctx the parse tree
   */
  exitCopy_option_list?: (ctx: Copy_option_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.copy_option`.
   * @param ctx the parse tree
   */
  enterCopy_option?: (ctx: Copy_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.copy_option`.
   * @param ctx the parse tree
   */
  exitCopy_option?: (ctx: Copy_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_view_statement`.
   * @param ctx the parse tree
   */
  enterCreate_view_statement?: (ctx: Create_view_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_view_statement`.
   * @param ctx the parse tree
   */
  exitCreate_view_statement?: (ctx: Create_view_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.if_exists`.
   * @param ctx the parse tree
   */
  enterIf_exists?: (ctx: If_existsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.if_exists`.
   * @param ctx the parse tree
   */
  exitIf_exists?: (ctx: If_existsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.if_not_exists`.
   * @param ctx the parse tree
   */
  enterIf_not_exists?: (ctx: If_not_existsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.if_not_exists`.
   * @param ctx the parse tree
   */
  exitIf_not_exists?: (ctx: If_not_existsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.view_columns`.
   * @param ctx the parse tree
   */
  enterView_columns?: (ctx: View_columnsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.view_columns`.
   * @param ctx the parse tree
   */
  exitView_columns?: (ctx: View_columnsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.with_check_option`.
   * @param ctx the parse tree
   */
  enterWith_check_option?: (ctx: With_check_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.with_check_option`.
   * @param ctx the parse tree
   */
  exitWith_check_option?: (ctx: With_check_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_table_statement`.
   * @param ctx the parse tree
   */
  enterCreate_table_statement?: (ctx: Create_table_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_table_statement`.
   * @param ctx the parse tree
   */
  exitCreate_table_statement?: (ctx: Create_table_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_table_as_statement`.
   * @param ctx the parse tree
   */
  enterCreate_table_as_statement?: (ctx: Create_table_as_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_table_as_statement`.
   * @param ctx the parse tree
   */
  exitCreate_table_as_statement?: (ctx: Create_table_as_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.create_foreign_table_statement`.
   * @param ctx the parse tree
   */
  enterCreate_foreign_table_statement?: (ctx: Create_foreign_table_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.create_foreign_table_statement`.
   * @param ctx the parse tree
   */
  exitCreate_foreign_table_statement?: (ctx: Create_foreign_table_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.define_table`.
   * @param ctx the parse tree
   */
  enterDefine_table?: (ctx: Define_tableContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.define_table`.
   * @param ctx the parse tree
   */
  exitDefine_table?: (ctx: Define_tableContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.define_partition`.
   * @param ctx the parse tree
   */
  enterDefine_partition?: (ctx: Define_partitionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.define_partition`.
   * @param ctx the parse tree
   */
  exitDefine_partition?: (ctx: Define_partitionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.for_values_bound`.
   * @param ctx the parse tree
   */
  enterFor_values_bound?: (ctx: For_values_boundContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.for_values_bound`.
   * @param ctx the parse tree
   */
  exitFor_values_bound?: (ctx: For_values_boundContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.partition_bound_spec`.
   * @param ctx the parse tree
   */
  enterPartition_bound_spec?: (ctx: Partition_bound_specContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.partition_bound_spec`.
   * @param ctx the parse tree
   */
  exitPartition_bound_spec?: (ctx: Partition_bound_specContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.partition_bound_part`.
   * @param ctx the parse tree
   */
  enterPartition_bound_part?: (ctx: Partition_bound_partContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.partition_bound_part`.
   * @param ctx the parse tree
   */
  exitPartition_bound_part?: (ctx: Partition_bound_partContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.define_columns`.
   * @param ctx the parse tree
   */
  enterDefine_columns?: (ctx: Define_columnsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.define_columns`.
   * @param ctx the parse tree
   */
  exitDefine_columns?: (ctx: Define_columnsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.define_type`.
   * @param ctx the parse tree
   */
  enterDefine_type?: (ctx: Define_typeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.define_type`.
   * @param ctx the parse tree
   */
  exitDefine_type?: (ctx: Define_typeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.partition_by`.
   * @param ctx the parse tree
   */
  enterPartition_by?: (ctx: Partition_byContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.partition_by`.
   * @param ctx the parse tree
   */
  exitPartition_by?: (ctx: Partition_byContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.partition_method`.
   * @param ctx the parse tree
   */
  enterPartition_method?: (ctx: Partition_methodContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.partition_method`.
   * @param ctx the parse tree
   */
  exitPartition_method?: (ctx: Partition_methodContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.partition_column`.
   * @param ctx the parse tree
   */
  enterPartition_column?: (ctx: Partition_columnContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.partition_column`.
   * @param ctx the parse tree
   */
  exitPartition_column?: (ctx: Partition_columnContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.define_server`.
   * @param ctx the parse tree
   */
  enterDefine_server?: (ctx: Define_serverContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.define_server`.
   * @param ctx the parse tree
   */
  exitDefine_server?: (ctx: Define_serverContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.define_foreign_options`.
   * @param ctx the parse tree
   */
  enterDefine_foreign_options?: (ctx: Define_foreign_optionsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.define_foreign_options`.
   * @param ctx the parse tree
   */
  exitDefine_foreign_options?: (ctx: Define_foreign_optionsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.foreign_option`.
   * @param ctx the parse tree
   */
  enterForeign_option?: (ctx: Foreign_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.foreign_option`.
   * @param ctx the parse tree
   */
  exitForeign_option?: (ctx: Foreign_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.foreign_option_name`.
   * @param ctx the parse tree
   */
  enterForeign_option_name?: (ctx: Foreign_option_nameContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.foreign_option_name`.
   * @param ctx the parse tree
   */
  exitForeign_option_name?: (ctx: Foreign_option_nameContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.list_of_type_column_def`.
   * @param ctx the parse tree
   */
  enterList_of_type_column_def?: (ctx: List_of_type_column_defContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.list_of_type_column_def`.
   * @param ctx the parse tree
   */
  exitList_of_type_column_def?: (ctx: List_of_type_column_defContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_column_def`.
   * @param ctx the parse tree
   */
  enterTable_column_def?: (ctx: Table_column_defContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_column_def`.
   * @param ctx the parse tree
   */
  exitTable_column_def?: (ctx: Table_column_defContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_of_type_column_def`.
   * @param ctx the parse tree
   */
  enterTable_of_type_column_def?: (ctx: Table_of_type_column_defContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_of_type_column_def`.
   * @param ctx the parse tree
   */
  exitTable_of_type_column_def?: (ctx: Table_of_type_column_defContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_column_definition`.
   * @param ctx the parse tree
   */
  enterTable_column_definition?: (ctx: Table_column_definitionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_column_definition`.
   * @param ctx the parse tree
   */
  exitTable_column_definition?: (ctx: Table_column_definitionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.like_option`.
   * @param ctx the parse tree
   */
  enterLike_option?: (ctx: Like_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.like_option`.
   * @param ctx the parse tree
   */
  exitLike_option?: (ctx: Like_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.constraint_common`.
   * @param ctx the parse tree
   */
  enterConstraint_common?: (ctx: Constraint_commonContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.constraint_common`.
   * @param ctx the parse tree
   */
  exitConstraint_common?: (ctx: Constraint_commonContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.constr_body`.
   * @param ctx the parse tree
   */
  enterConstr_body?: (ctx: Constr_bodyContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.constr_body`.
   * @param ctx the parse tree
   */
  exitConstr_body?: (ctx: Constr_bodyContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.all_op`.
   * @param ctx the parse tree
   */
  enterAll_op?: (ctx: All_opContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.all_op`.
   * @param ctx the parse tree
   */
  exitAll_op?: (ctx: All_opContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.index_parameters`.
   * @param ctx the parse tree
   */
  enterIndex_parameters?: (ctx: Index_parametersContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.index_parameters`.
   * @param ctx the parse tree
   */
  exitIndex_parameters?: (ctx: Index_parametersContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.storage_parameter`.
   * @param ctx the parse tree
   */
  enterStorage_parameter?: (ctx: Storage_parameterContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.storage_parameter`.
   * @param ctx the parse tree
   */
  exitStorage_parameter?: (ctx: Storage_parameterContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.storage_parameter_option`.
   * @param ctx the parse tree
   */
  enterStorage_parameter_option?: (ctx: Storage_parameter_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.storage_parameter_option`.
   * @param ctx the parse tree
   */
  exitStorage_parameter_option?: (ctx: Storage_parameter_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.storage_parameter_name`.
   * @param ctx the parse tree
   */
  enterStorage_parameter_name?: (ctx: Storage_parameter_nameContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.storage_parameter_name`.
   * @param ctx the parse tree
   */
  exitStorage_parameter_name?: (ctx: Storage_parameter_nameContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.with_storage_parameter`.
   * @param ctx the parse tree
   */
  enterWith_storage_parameter?: (ctx: With_storage_parameterContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.with_storage_parameter`.
   * @param ctx the parse tree
   */
  exitWith_storage_parameter?: (ctx: With_storage_parameterContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.storage_parameter_oid`.
   * @param ctx the parse tree
   */
  enterStorage_parameter_oid?: (ctx: Storage_parameter_oidContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.storage_parameter_oid`.
   * @param ctx the parse tree
   */
  exitStorage_parameter_oid?: (ctx: Storage_parameter_oidContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.on_commit`.
   * @param ctx the parse tree
   */
  enterOn_commit?: (ctx: On_commitContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.on_commit`.
   * @param ctx the parse tree
   */
  exitOn_commit?: (ctx: On_commitContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_space`.
   * @param ctx the parse tree
   */
  enterTable_space?: (ctx: Table_spaceContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_space`.
   * @param ctx the parse tree
   */
  exitTable_space?: (ctx: Table_spaceContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.action`.
   * @param ctx the parse tree
   */
  enterAction?: (ctx: ActionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.action`.
   * @param ctx the parse tree
   */
  exitAction?: (ctx: ActionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.owner_to`.
   * @param ctx the parse tree
   */
  enterOwner_to?: (ctx: Owner_toContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.owner_to`.
   * @param ctx the parse tree
   */
  exitOwner_to?: (ctx: Owner_toContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.rename_to`.
   * @param ctx the parse tree
   */
  enterRename_to?: (ctx: Rename_toContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.rename_to`.
   * @param ctx the parse tree
   */
  exitRename_to?: (ctx: Rename_toContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.set_schema`.
   * @param ctx the parse tree
   */
  enterSet_schema?: (ctx: Set_schemaContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.set_schema`.
   * @param ctx the parse tree
   */
  exitSet_schema?: (ctx: Set_schemaContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.table_column_privilege`.
   * @param ctx the parse tree
   */
  enterTable_column_privilege?: (ctx: Table_column_privilegeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.table_column_privilege`.
   * @param ctx the parse tree
   */
  exitTable_column_privilege?: (ctx: Table_column_privilegeContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.usage_select_update`.
   * @param ctx the parse tree
   */
  enterUsage_select_update?: (ctx: Usage_select_updateContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.usage_select_update`.
   * @param ctx the parse tree
   */
  exitUsage_select_update?: (ctx: Usage_select_updateContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.cascade_restrict`.
   * @param ctx the parse tree
   */
  enterCascade_restrict?: (ctx: Cascade_restrictContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.cascade_restrict`.
   * @param ctx the parse tree
   */
  exitCascade_restrict?: (ctx: Cascade_restrictContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.drop_function_statement`.
   * @param ctx the parse tree
   */
  enterDrop_function_statement?: (ctx: Drop_function_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_function_statement`.
   * @param ctx the parse tree
   */
  exitDrop_function_statement?: (ctx: Drop_function_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_trigger_statement`.
   * @param ctx the parse tree
   */
  enterDrop_trigger_statement?: (ctx: Drop_trigger_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_trigger_statement`.
   * @param ctx the parse tree
   */
  exitDrop_trigger_statement?: (ctx: Drop_trigger_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_rule_statement`.
   * @param ctx the parse tree
   */
  enterDrop_rule_statement?: (ctx: Drop_rule_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_rule_statement`.
   * @param ctx the parse tree
   */
  exitDrop_rule_statement?: (ctx: Drop_rule_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.drop_statements`.
   * @param ctx the parse tree
   */
  enterDrop_statements?: (ctx: Drop_statementsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.drop_statements`.
   * @param ctx the parse tree
   */
  exitDrop_statements?: (ctx: Drop_statementsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.if_exist_names_restrict_cascade`.
   * @param ctx the parse tree
   */
  enterIf_exist_names_restrict_cascade?: (ctx: If_exist_names_restrict_cascadeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.if_exist_names_restrict_cascade`.
   * @param ctx the parse tree
   */
  exitIf_exist_names_restrict_cascade?: (ctx: If_exist_names_restrict_cascadeContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.schema_qualified_name_nontype`.
   * @param ctx the parse tree
   */
  enterSchema_qualified_name_nontype?: (ctx: Schema_qualified_name_nontypeContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.schema_qualified_name_nontype`.
   * @param ctx the parse tree
   */
  exitSchema_qualified_name_nontype?: (ctx: Schema_qualified_name_nontypeContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.function_construct`.
   * @param ctx the parse tree
   */
  enterFunction_construct?: (ctx: Function_constructContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_construct`.
   * @param ctx the parse tree
   */
  exitFunction_construct?: (ctx: Function_constructContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.extract_function`.
   * @param ctx the parse tree
   */
  enterExtract_function?: (ctx: Extract_functionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.extract_function`.
   * @param ctx the parse tree
   */
  exitExtract_function?: (ctx: Extract_functionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.system_function`.
   * @param ctx the parse tree
   */
  enterSystem_function?: (ctx: System_functionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.system_function`.
   * @param ctx the parse tree
   */
  exitSystem_function?: (ctx: System_functionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.date_time_function`.
   * @param ctx the parse tree
   */
  enterDate_time_function?: (ctx: Date_time_functionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.date_time_function`.
   * @param ctx the parse tree
   */
  exitDate_time_function?: (ctx: Date_time_functionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.string_value_function`.
   * @param ctx the parse tree
   */
  enterString_value_function?: (ctx: String_value_functionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.string_value_function`.
   * @param ctx the parse tree
   */
  exitString_value_function?: (ctx: String_value_functionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.xml_function`.
   * @param ctx the parse tree
   */
  enterXml_function?: (ctx: Xml_functionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.xml_function`.
   * @param ctx the parse tree
   */
  exitXml_function?: (ctx: Xml_functionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.xml_table_column`.
   * @param ctx the parse tree
   */
  enterXml_table_column?: (ctx: Xml_table_columnContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.xml_table_column`.
   * @param ctx the parse tree
   */
  exitXml_table_column?: (ctx: Xml_table_columnContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.into_table`.
   * @param ctx the parse tree
   */
  enterInto_table?: (ctx: Into_tableContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.into_table`.
   * @param ctx the parse tree
   */
  exitInto_table?: (ctx: Into_tableContext) => void;

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
   * Enter a parse tree produced by `PostgresParser.insert_stmt_for_psql`.
   * @param ctx the parse tree
   */
  enterInsert_stmt_for_psql?: (ctx: Insert_stmt_for_psqlContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.insert_stmt_for_psql`.
   * @param ctx the parse tree
   */
  exitInsert_stmt_for_psql?: (ctx: Insert_stmt_for_psqlContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.insert_columns`.
   * @param ctx the parse tree
   */
  enterInsert_columns?: (ctx: Insert_columnsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.insert_columns`.
   * @param ctx the parse tree
   */
  exitInsert_columns?: (ctx: Insert_columnsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.indirection_identifier`.
   * @param ctx the parse tree
   */
  enterIndirection_identifier?: (ctx: Indirection_identifierContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.indirection_identifier`.
   * @param ctx the parse tree
   */
  exitIndirection_identifier?: (ctx: Indirection_identifierContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.conflict_object`.
   * @param ctx the parse tree
   */
  enterConflict_object?: (ctx: Conflict_objectContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.conflict_object`.
   * @param ctx the parse tree
   */
  exitConflict_object?: (ctx: Conflict_objectContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.conflict_action`.
   * @param ctx the parse tree
   */
  enterConflict_action?: (ctx: Conflict_actionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.conflict_action`.
   * @param ctx the parse tree
   */
  exitConflict_action?: (ctx: Conflict_actionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.delete_stmt_for_psql`.
   * @param ctx the parse tree
   */
  enterDelete_stmt_for_psql?: (ctx: Delete_stmt_for_psqlContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.delete_stmt_for_psql`.
   * @param ctx the parse tree
   */
  exitDelete_stmt_for_psql?: (ctx: Delete_stmt_for_psqlContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.update_stmt_for_psql`.
   * @param ctx the parse tree
   */
  enterUpdate_stmt_for_psql?: (ctx: Update_stmt_for_psqlContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.update_stmt_for_psql`.
   * @param ctx the parse tree
   */
  exitUpdate_stmt_for_psql?: (ctx: Update_stmt_for_psqlContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.update_set`.
   * @param ctx the parse tree
   */
  enterUpdate_set?: (ctx: Update_setContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.update_set`.
   * @param ctx the parse tree
   */
  exitUpdate_set?: (ctx: Update_setContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.notify_stmt`.
   * @param ctx the parse tree
   */
  enterNotify_stmt?: (ctx: Notify_stmtContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.notify_stmt`.
   * @param ctx the parse tree
   */
  exitNotify_stmt?: (ctx: Notify_stmtContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.truncate_stmt`.
   * @param ctx the parse tree
   */
  enterTruncate_stmt?: (ctx: Truncate_stmtContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.truncate_stmt`.
   * @param ctx the parse tree
   */
  exitTruncate_stmt?: (ctx: Truncate_stmtContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.identifier_list`.
   * @param ctx the parse tree
   */
  enterIdentifier_list?: (ctx: Identifier_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.identifier_list`.
   * @param ctx the parse tree
   */
  exitIdentifier_list?: (ctx: Identifier_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.anonymous_block`.
   * @param ctx the parse tree
   */
  enterAnonymous_block?: (ctx: Anonymous_blockContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.anonymous_block`.
   * @param ctx the parse tree
   */
  exitAnonymous_block?: (ctx: Anonymous_blockContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.comp_options`.
   * @param ctx the parse tree
   */
  enterComp_options?: (ctx: Comp_optionsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.comp_options`.
   * @param ctx the parse tree
   */
  exitComp_options?: (ctx: Comp_optionsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_block`.
   * @param ctx the parse tree
   */
  enterFunction_block?: (ctx: Function_blockContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_block`.
   * @param ctx the parse tree
   */
  exitFunction_block?: (ctx: Function_blockContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.start_label`.
   * @param ctx the parse tree
   */
  enterStart_label?: (ctx: Start_labelContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.start_label`.
   * @param ctx the parse tree
   */
  exitStart_label?: (ctx: Start_labelContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.declarations`.
   * @param ctx the parse tree
   */
  enterDeclarations?: (ctx: DeclarationsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.declarations`.
   * @param ctx the parse tree
   */
  exitDeclarations?: (ctx: DeclarationsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.declaration`.
   * @param ctx the parse tree
   */
  enterDeclaration?: (ctx: DeclarationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.declaration`.
   * @param ctx the parse tree
   */
  exitDeclaration?: (ctx: DeclarationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.type_declaration`.
   * @param ctx the parse tree
   */
  enterType_declaration?: (ctx: Type_declarationContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.type_declaration`.
   * @param ctx the parse tree
   */
  exitType_declaration?: (ctx: Type_declarationContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.arguments_list`.
   * @param ctx the parse tree
   */
  enterArguments_list?: (ctx: Arguments_listContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.arguments_list`.
   * @param ctx the parse tree
   */
  exitArguments_list?: (ctx: Arguments_listContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.data_type_dec`.
   * @param ctx the parse tree
   */
  enterData_type_dec?: (ctx: Data_type_decContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.data_type_dec`.
   * @param ctx the parse tree
   */
  exitData_type_dec?: (ctx: Data_type_decContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.exception_statement`.
   * @param ctx the parse tree
   */
  enterException_statement?: (ctx: Exception_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.exception_statement`.
   * @param ctx the parse tree
   */
  exitException_statement?: (ctx: Exception_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_statements`.
   * @param ctx the parse tree
   */
  enterFunction_statements?: (ctx: Function_statementsContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_statements`.
   * @param ctx the parse tree
   */
  exitFunction_statements?: (ctx: Function_statementsContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.function_statement`.
   * @param ctx the parse tree
   */
  enterFunction_statement?: (ctx: Function_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.function_statement`.
   * @param ctx the parse tree
   */
  exitFunction_statement?: (ctx: Function_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.base_statement`.
   * @param ctx the parse tree
   */
  enterBase_statement?: (ctx: Base_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.base_statement`.
   * @param ctx the parse tree
   */
  exitBase_statement?: (ctx: Base_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.var`.
   * @param ctx the parse tree
   */
  enterVar?: (ctx: VarContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.var`.
   * @param ctx the parse tree
   */
  exitVar?: (ctx: VarContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.diagnostic_option`.
   * @param ctx the parse tree
   */
  enterDiagnostic_option?: (ctx: Diagnostic_optionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.diagnostic_option`.
   * @param ctx the parse tree
   */
  exitDiagnostic_option?: (ctx: Diagnostic_optionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.perform_stmt`.
   * @param ctx the parse tree
   */
  enterPerform_stmt?: (ctx: Perform_stmtContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.perform_stmt`.
   * @param ctx the parse tree
   */
  exitPerform_stmt?: (ctx: Perform_stmtContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.assign_stmt`.
   * @param ctx the parse tree
   */
  enterAssign_stmt?: (ctx: Assign_stmtContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.assign_stmt`.
   * @param ctx the parse tree
   */
  exitAssign_stmt?: (ctx: Assign_stmtContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.execute_stmt`.
   * @param ctx the parse tree
   */
  enterExecute_stmt?: (ctx: Execute_stmtContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.execute_stmt`.
   * @param ctx the parse tree
   */
  exitExecute_stmt?: (ctx: Execute_stmtContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.control_statement`.
   * @param ctx the parse tree
   */
  enterControl_statement?: (ctx: Control_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.control_statement`.
   * @param ctx the parse tree
   */
  exitControl_statement?: (ctx: Control_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.cursor_statement`.
   * @param ctx the parse tree
   */
  enterCursor_statement?: (ctx: Cursor_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.cursor_statement`.
   * @param ctx the parse tree
   */
  exitCursor_statement?: (ctx: Cursor_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.option`.
   * @param ctx the parse tree
   */
  enterOption?: (ctx: OptionContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.option`.
   * @param ctx the parse tree
   */
  exitOption?: (ctx: OptionContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.transaction_statement`.
   * @param ctx the parse tree
   */
  enterTransaction_statement?: (ctx: Transaction_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.transaction_statement`.
   * @param ctx the parse tree
   */
  exitTransaction_statement?: (ctx: Transaction_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.message_statement`.
   * @param ctx the parse tree
   */
  enterMessage_statement?: (ctx: Message_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.message_statement`.
   * @param ctx the parse tree
   */
  exitMessage_statement?: (ctx: Message_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.log_level`.
   * @param ctx the parse tree
   */
  enterLog_level?: (ctx: Log_levelContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.log_level`.
   * @param ctx the parse tree
   */
  exitLog_level?: (ctx: Log_levelContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.raise_using`.
   * @param ctx the parse tree
   */
  enterRaise_using?: (ctx: Raise_usingContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.raise_using`.
   * @param ctx the parse tree
   */
  exitRaise_using?: (ctx: Raise_usingContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.raise_param`.
   * @param ctx the parse tree
   */
  enterRaise_param?: (ctx: Raise_paramContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.raise_param`.
   * @param ctx the parse tree
   */
  exitRaise_param?: (ctx: Raise_paramContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.return_stmt`.
   * @param ctx the parse tree
   */
  enterReturn_stmt?: (ctx: Return_stmtContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.return_stmt`.
   * @param ctx the parse tree
   */
  exitReturn_stmt?: (ctx: Return_stmtContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.loop_statement`.
   * @param ctx the parse tree
   */
  enterLoop_statement?: (ctx: Loop_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.loop_statement`.
   * @param ctx the parse tree
   */
  exitLoop_statement?: (ctx: Loop_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.loop_start`.
   * @param ctx the parse tree
   */
  enterLoop_start?: (ctx: Loop_startContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.loop_start`.
   * @param ctx the parse tree
   */
  exitLoop_start?: (ctx: Loop_startContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.using_vex`.
   * @param ctx the parse tree
   */
  enterUsing_vex?: (ctx: Using_vexContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.using_vex`.
   * @param ctx the parse tree
   */
  exitUsing_vex?: (ctx: Using_vexContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.if_statement`.
   * @param ctx the parse tree
   */
  enterIf_statement?: (ctx: If_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.if_statement`.
   * @param ctx the parse tree
   */
  exitIf_statement?: (ctx: If_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.case_statement`.
   * @param ctx the parse tree
   */
  enterCase_statement?: (ctx: Case_statementContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.case_statement`.
   * @param ctx the parse tree
   */
  exitCase_statement?: (ctx: Case_statementContext) => void;

  /**
   * Enter a parse tree produced by `PostgresParser.plpgsql_query`.
   * @param ctx the parse tree
   */
  enterPlpgsql_query?: (ctx: Plpgsql_queryContext) => void;
  /**
   * Exit a parse tree produced by `PostgresParser.plpgsql_query`.
   * @param ctx the parse tree
   */
  exitPlpgsql_query?: (ctx: Plpgsql_queryContext) => void;
}
