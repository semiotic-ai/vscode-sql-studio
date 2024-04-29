import { AutocompleteOptionType } from './AutocompleteOptionType';

export class AutocompleteOption {
  value?: string;
  optionType: AutocompleteOptionType;

  constructor(optionType: AutocompleteOptionType, value?: string) {
    this.value = value;
    this.optionType = optionType;
  }
}
