// Regexps involved with splitting words in various case formats.
const SPLIT_LOWER_UPPER_RE = /([\p{Ll}\d])(\p{Lu})/gu;
const SPLIT_UPPER_UPPER_RE = /(\p{Lu})([\p{Lu}][\p{Ll}])/gu;
// Regexp involved with stripping non-word characters from the result.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\d]+/giu;
// The replacement value for splits.
const SPLIT_REPLACE_VALUE = '$1\0$2';
// The default characters to keep after transforming case.
const DEFAULT_PREFIX_SUFFIX_CHARACTERS = '';

/**
 * Convert a string to snake case (`foo_bar`).
 */
export function snakeCase(input: string): string {
	const [prefix, words, suffix] = splitPrefixSuffix(input);
	return prefix + words.map((input) => input.toLowerCase()).join('_') + suffix;
}

function splitPrefixSuffix(input: string): [string, string[], string] {
	let prefixIndex = 0;
	let suffixIndex = input.length;
	while (prefixIndex < input.length) {
		const char = input.charAt(prefixIndex);
		if (!DEFAULT_PREFIX_SUFFIX_CHARACTERS.includes(char)) {
			break;
		}
		prefixIndex++;
	}
	while (suffixIndex > prefixIndex) {
		const index = suffixIndex - 1;
		const char = input.charAt(index);
		if (!DEFAULT_PREFIX_SUFFIX_CHARACTERS.includes(char)) {
			break;
		}
		suffixIndex = index;
	}
	return [
		input.slice(0, prefixIndex),
		split(input.slice(prefixIndex, suffixIndex)),
		input.slice(suffixIndex)
	];
}

function split(value: string): string[] {
	let result = value.trim();
	result = result
		.replace(SPLIT_LOWER_UPPER_RE, SPLIT_REPLACE_VALUE)
		.replace(SPLIT_UPPER_UPPER_RE, SPLIT_REPLACE_VALUE);
	result = result.replace(DEFAULT_STRIP_REGEXP, '\0');
	let start = 0;
	let end = result.length;
	// Trim the delimiter from around the output string.
	while (result.charAt(start) === '\0') {
		start++;
	}
	if (start === end) {
		return [];
	}
	while (result.charAt(end - 1) === '\0') {
		end--;
	}
	return result.slice(start, end).split(/\0/g);
}
