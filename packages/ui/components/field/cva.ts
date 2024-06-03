import { cva } from "class-variance-authority";

export const cvaFieldVariants = cva(
    // "group flex flex-col space-y-1.5",
    "group flex flex-col space-y-1.5",
    {
        variants: {
            size: {
                sm: "",
                md: "",
            },
        },
    });

export const cvaFieldLabelVariants = cva("");

// export const cvaFieldItemVariants = cva(
//     `
//         space-y-2
//     `,
// );

export const cvaFieldDescriptionVariants = cva(
    `
        text-sm font-normal leading-5 text-text-tertiary
    `,
);

export const cvaFieldErrorVariants = cva(
    `
        font-regular text-sm leading-5 text-text-error-primary w-full relative
    `,
);
