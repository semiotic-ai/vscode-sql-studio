// Regexps involved with splitting words in various case formats.
const LOWER_UPPER_RE = /(\p{Ll})(\p{Lu})/gu;
const UPPER_LOWER_RE = /(\p{N})(\P{L})/gu;

// Regexp involved with stripping non-word characters from the result.
const DEFAULT_STRIP_REGEXP = /[^\p{L}\p{N}\s]+/giu;
// The replacement value for splits.
const SPLIT_REPLACE_VALUE = '$1\0$2';

/**
 * Convert a string to snake case (`foo_bar`).
 */
export function snakeCase(value: string): string {
	const words = value
		.replace(LOWER_UPPER_RE, SPLIT_REPLACE_VALUE)
		.replace(UPPER_LOWER_RE, SPLIT_REPLACE_VALUE)
		//.replace(DEFAULT_STRIP_REGEXP, ' ')
		.split(/\s/g)
		.map((v) => v.trim())
		.filter((v) => v.length > 0);

	return words.map((input) => input.toLowerCase()).join('_');
}
