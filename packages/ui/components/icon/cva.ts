import { cva } from "class-variance-authority";

export const cvaIconVariants = cva("", {
    variants: {
        size: { // doesnt work with webcomponents, due to shadow dom
            xxs: "w-3 h-3",
            xs: "w-4 h-4",
            sm: "w-5 h-5",
            md: "w-6 h-6",
            lg: "w-7 h-7",
            xl: "w-8 h-8",
            "2xl": "w-9 h-9",
            "3xl": "w-10 h-10",
        },
    },
});
