import { cva } from "class-variance-authority";

export const cvaCollapsibleContentVariants = cva(
    `
        overflow-hidden transition-all
        
        data-[state=closed]:animate-collapsible-up
        data-[state=open]:animate-collapsible-down
    `,
);
