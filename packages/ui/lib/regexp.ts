import { createRegExp, charIn, letter, oneOrMore, digit } from "magic-regexp";

export const uppercaseRegex = createRegExp(oneOrMore(letter.uppercase));
export const containsUppercase = (str: string) => uppercaseRegex.test(str);

export const lowercaseRegex = createRegExp(oneOrMore(letter.lowercase));
export const containsLowercase = (str: string) => lowercaseRegex.test(str);

export const numberRegex = createRegExp(oneOrMore(digit));
export const containsNumber = (str: string) => numberRegex.test(str);

export const specialRegex = createRegExp(charIn("!@#$%^&*()_+[]{};':\"\\|,.<>/?"));
export const containsSpecial = (str: string) => specialRegex.test(str);
