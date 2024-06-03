import { lowercaseRegex, uppercaseRegex, numberRegex, specialRegex } from "./regexp";

export const defaultOptions = [
    {
        id: 0,
        value: "Te zwak",
        minDiversity: 0,
        minLength: 0,
    },
    {
        id: 1,
        value: "Zwak",
        minDiversity: 2,
        minLength: 6,
    },
    {
        id: 2,
        value: "Gemiddeld",
        minDiversity: 3,
        minLength: 8,
    },
    {
        id: 3,
        value: "Sterk",
        minDiversity: 4,
        minLength: 10,
    },
];

export const calculatePasswordStrength = (password: string, options: typeof defaultOptions = defaultOptions) => {
    const passwordCopy = password || "";

    options[0].minDiversity = 0;
    options[0].minLength = 0;

    const rules = [
        {
            regex: lowercaseRegex,
            message: "lowercase",
        },
        {
            regex: uppercaseRegex,
            message: "uppercase",
        },
        {
            regex: numberRegex,
            message: "number",
        },
        {
            regex: specialRegex,
            message: "special character",
        },
    ];

    const strength = {
        contains: [] as string[],
        length: 0,
        value: "Too weak",
    };

    strength.contains = rules
        .filter(rule => rule.regex.test(passwordCopy))
        .map(rule => rule.message);

    strength.length = passwordCopy.length;

    const fulfilledOptions = options
        .filter(option => strength.contains.length >= option.minDiversity)
        .filter(option => strength.length >= option.minLength)
        .sort((o1, o2) => o2.id - o1.id)
        .map(option => ({ id: option.id, value: option.value }));

    Object.assign(strength, fulfilledOptions[0]);

    return strength;
};
