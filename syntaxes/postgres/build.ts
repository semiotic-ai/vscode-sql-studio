import * as fs from 'fs';
import * as path from 'path';

interface ISignature {
  description: string;
  example?: string;
  snippet?: string[];
  returns?: string;
  params?: Map<string, string | string[]>;
  signature?: string;
  antlr?: string[];
}

interface IFunctionsGroup {
  name: string;
  description: string;
  keywords: Map<string, ISignature[]>;
}

const digits = Array.from('0123456789');

function SpellName(name: string): string {
  return Array.from(name)
    .map((c) => (digits.includes(c) ? `'${c}'` : c === '_' ? 'UNDERLINE' : c))
    .join(' ');
}

function WriteLexer(groups: IFunctionsGroup[]) {
  const lexer = fs.createWriteStream(path.join(__dirname, 'grammar', 'FunctionsLexer.g4'));
  lexer.write('lexer grammar FunctionsLexer;\n');
  lexer.write('\n');
  lexer.write('import AlphabetLexer, SymbolsLexer, KeywordsLexer;\n');
  lexer.write('\n');

  const keywords: Set<string> = new Set();
  const functions: Set<string> = new Set();

  groups.forEach((group) => {
    for (const [keyword, signatures] of group.keywords.entries()) {
      const name = keyword.toUpperCase();
      if (signatures.length > 0) {
        functions.add(name);
      } else {
        keywords.add(name);
      }
    }
  });

  const functions_array = Array.from(functions);

  const first_function = functions_array[0];
  const last_function = functions_array[functions_array.length - 1];

  lexer.write(`
@members {

  private _tags: any[] = [];
  /* This field stores the tags which are used to detect the end of a dollar-quoted string literal.
  */

  public static isFunction(value:number): boolean {
      return value >= PostgresLexer.${first_function} && value <= PostgresLexer.${last_function};
  }
}
  `);

  for (const keyword of keywords) {
    lexer.write(`\n${keyword}: ${SpellName(keyword)};`);
  }

  for (const keyword of functions) {
    lexer.write(`\n${keyword}: ${SpellName(keyword)};`);
  }

  lexer.close();
}

function WriteParser(groups: IFunctionsGroup[]) {
  const parser = fs.createWriteStream(path.join(__dirname, 'grammar', 'FunctionsParser.g4'));
  parser.write('parser grammar FunctionsParser;\n');
  parser.write('\n');

  const simple_functions: Set<string> = new Set();
  const complex_functions: Map<string, string> = new Map();

  for (const group of groups) {
    for (const [keyword, signatures] of group.keywords) {
      const name = keyword.toUpperCase();
      for (const signature of signatures) {
        if (signature.antlr && signature.antlr.length > 0) {
          complex_functions.set(name, signature.antlr.join('\n'));
        } else if (!simple_functions.has(name)) {
          simple_functions.add(keyword.toUpperCase());
        }
      }
    }
  }

  parser.write(`function_names: ${[...simple_functions].join('\n\t|')};`);
  parser.write(`\n\n`);
  parser.write(`function_custom: ${[...complex_functions.values()].join('\n\t|')};`);
  parser.write(`\n\n`);
  parser.close();
}

const function_groups = fs.readdirSync(path.join(__dirname, 'functions')).map((file) => {
  const fileGroup = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'functions', file), 'utf8')
  ) as IFunctionsGroup;
  fileGroup.keywords = new Map(Object.entries(fileGroup.keywords));
  fileGroup.name = file.toLowerCase().replace('.json', '');
  return fileGroup;
});

WriteLexer(function_groups);
WriteParser(function_groups);
