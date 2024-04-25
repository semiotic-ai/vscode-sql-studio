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

function WriteLexer(groups: IFunctionsGroup[]) {
  const lexer = fs.createWriteStream(path.join(__dirname, 'grammar', 'FunctionsLexer.g4'));
  lexer.write('lexer grammar FunctionsLexer;\n');
  lexer.write('import AlphabetLexer, SymbolsLexer, KeywordsLexer;\n');
  lexer.write('\n');
  new Set(
    groups
      .map((group) => [...group.keywords.keys()])
      .flat()
      .sort()
  ).forEach((keyword) => {
    const name = keyword.toUpperCase();
    const value = Array.from(name)
      .map((c) => (digits.includes(c) ? `'${c}'` : c === '_' ? 'UNDERLINE' : c))
      .join(' ');
    lexer.write(`${name} :${value};\n`);
  });
  lexer.close();
}

function WriteParser(groups: IFunctionsGroup[]) {
  const parser = fs.createWriteStream(path.join(__dirname, 'grammar', 'FunctionsParser.g4'));
  parser.write('parser grammar FunctionsParser;\n');
  parser.write('\n');

  const functions = groups.reduce((map, group) => {
    for (const [keyword, signatures] of group.keywords) {
      const antlrs = signatures
        .map((signature) => signature.antlr?.join('\n') || '')
        .filter((antlr) => antlr.length > 0)
        .join('\n\t|');

      if (antlrs.length > 0) {
        map.set(`function_${group.name}_${keyword}`, antlrs);
      }
    }

    return map;
  }, new Map<string, string>());

  functions.forEach((antlrs, prefix) => {
    parser.write(`\n${prefix}: ${antlrs};`);
  });

  parser.write(`\n\nfunctions_all: ${[...functions.keys()].join('\n\t|')};`);

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
