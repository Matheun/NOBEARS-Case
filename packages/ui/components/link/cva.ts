import { cva } from "class-variance-authority";

export const cvaLinkVariants = cva(
    `
        font-semibold underline cursor-pointer text-brand-600 hover:text-brand-800 w-fit inline-flex items-center
    `,
    {
        variants: {
            size: {
                xs: "gap-x-1 text-xs h-4 leading-4",
                sm: "pgap-x-1.5 text-sm h-5 leading-5",
                md: "gap-x-1.5 text-sm h-5 leading-5",
                lg: "gap-x-1.5 text-md h-6 leading-6",
                xl: "gap-x-1.5 text-md h-6 leading-6",
                "2xl": "gap-x-2.5 text-lg h-7 leading-7",
            },
        },
    },
);
