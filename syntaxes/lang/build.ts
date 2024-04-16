import * as fs from 'fs';
import * as path from 'path';
import { IFunctionGroup } from '../../src/providers/autocomplete/IFunctionGroup';

const functions = fs
  .readdirSync(path.join(__dirname, 'functions'))
  .map((file) => {
    const group: IFunctionGroup = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'functions', file), 'utf8')
    );
    return group;
  })
  .flat();

fs.writeFileSync(
  path.join(__dirname, '../../dist/functions.json'),
  JSON.stringify(functions, null, 2)
);
