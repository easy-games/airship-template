declare namespace StringUtils {
	/** Returns a new string equivalent to this string but with the whitespace removed from the start and end. */
	function trim(str: string): string;

	/** Returns a new string equivalent to this string but with the whitespace removed from the start. */
	function trimStart(str: string): string;

	/** Returns a new string equivalent to this string but with the whitespace removed from the end. */
	function trimEnd(str: string): string;

	/**
	 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
	 * The padding is applied from the start (left) of the current string.
	 *
	 * @param maxLength The length of the resulting string once the current string has been padded.
	 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
	 *
	 * @param fillString The string to pad the current string with.
	 *        If this string is too long, it will be truncated and the left-most part will be applied.
	 *        The default value for this parameter is " " (U+0020).
	 */
	function padStart(str: string, maxLength: number, fillString?: string): string;

	/**
	 * Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
	 * The padding is applied from the end (right) of the current string.
	 *
	 * @param maxLength The length of the resulting string once the current string has been padded.
	 *        If this parameter is smaller than the current string's length, the current string will be returned as it is.
	 *
	 * @param fillString The string to pad the current string with.
	 *        If this string is too long, it will be truncated and the left-most part will be applied.
	 *        The default value for this parameter is " " (U+0020).
	 */
	function padEnd(str: string, maxLength: number, fillString?: string): string;

	/**
	 * Returns a section of a string.
	 * @param start The index to the beginning of the specified portion of stringObj.
	 * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
	 * If this value is not specified, the substring continues to the end of stringObj.
	 */
	function slice(str: string, start: number, end?: number): string;

	/**
	 * Returns the index of the first occurrence of a value in a string, else returns -1.
	 * @param searchElement The value to locate in the string.
	 * @param fromIndex The string index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
	 */
	function indexOf(str: string, searchElement: string, fromIndex?: number): number;

	/**
	 * Returns whether a string includes a certain string.
	 * @param searchElement The element to search for.
	 * @param fromIndex The position in this string at which to begin searching for searchElement.
	 */
	function includes(str: string, searchElement: string, fromIndex?: number): boolean;

	/**
	 * Returns whether the characters at the end of this string match the searchString, starting at position.
	 * @param searchString The element to search for.
	 * @param position The position in this string at which to begin searching for searchElement.
	 */
	function endsWith(str: string, searchString: string, endPosition?: number): boolean;

	/**
	 * Returns whether the characters at the beginning of this string match the searchString, starting at position.
	 * @param searchString The element to search for.
	 * @param position The position in this string at which to begin searching for searchElement.
	 */
	function startsWith(str: string, searchString: string, position?: number): boolean;
}

export = StringUtils;
