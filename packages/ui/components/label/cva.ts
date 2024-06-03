import { cva } from "class-variance-authority";

export const cvaLabelVariants = cva(
    `
        text-text-secondary peer-invalid:text-text-error-primary text-sm font-medium leading-5 peer-disabled:cursor-not-allowed
    `,
);
