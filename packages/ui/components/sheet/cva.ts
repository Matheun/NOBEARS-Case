import { cva } from "class-variance-authority";

export const cvaSheetContentVariants = cva(
    `
        fixed z-50 flex flex-col gap-y-6 shadow-xl px-4 sm:px-6
        transition ease-in-out

        bg-[--sheet-bg] border-[--sheet-border]
        
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:duration-300
        data-[state=open]:duration-500
        
        [--sheet-bg:theme(colors.background.primary.DEFAULT)]
        [--sheet-border:theme(colors.border.secondary)]
    `,
    {
        variants: {
            side: {
                top: `
                    inset-x-0 top-0 border-b
                    
                    data-[state=closed]:slide-out-to-top
                    data-[state=open]:slide-in-from-top
                `,
                bottom: `
                    inset-x-0 bottom-0 border-t
                    
                    data-[state=closed]:slide-out-to-bottom
                    data-[state=open]:slide-in-from-bottom
                `,
                left: `
                    inset-y-0 left-0 h-full w-5/6 border-r max-w-80
                    
                    data-[state=closed]:slide-out-to-left
                    data-[state=open]:slide-in-from-left
                    
                    max-w-xs
                    sm:max-w-xs
                `,
                right: `
                    inset-y-0 right-0 h-full w-5/6 border-l
                    
                    data-[state=closed]:slide-out-to-right
                    data-[state=open]:slide-in-from-right

                    max-w-xs
                    sm:max-w-xs
                `,
            },
        },
    },
);

export const cvaSheetOverlayVariants = cva(
    `
        fixed inset-0 z-50 backdrop-blur-sm
        
        bg-[--sheet-overlay-bg]
        
        data-[state=open]:animate-in
        data-[state=closed]:animate-out
        data-[state=closed]:fade-out-0
        data-[state=open]:fade-in-0

        [--sheet-overlay-bg:theme(colors.background.overlay.alt)]
    `,
);

export const cvaSheetHeaderVariants = cva(
    `
        flex flex-col gap-y-1 gap-x-4 pt-6
    `,
);

export const cvaSheetTitleVariants = cva(
    `
        text-text-primary text-lg font-semibold sm:text-xl
    `,
);

export const cvaSheetDescriptionVariants = cva(
    `
        text-text-tertiary text-sm
    `,
);

export const cvaSheetFooterVariants = cva(
    `
        flex flex-row justify-end gap-x-3 py-4 mt-auto relative

        before:absolute before:inset-0 before:-z-10 before:border-t border-[--sheet-border]
        before:w-[calc(100%+32px)] before:mx-[-16px]
        sm:before:w-[calc(100%+48px)] sm:before:mx-[-24px]
    `,
);

export const cvaSheetCloseVariants = cva(
    "top-3 absolute",
    {
        variants: {
            position: {
                inside: "right-4",
                outside: "",
            },
            side: {
                top: "",
                bottom: "",
                left: "",
                right: "",
            },
        },
        compoundVariants: [
            { position: "outside", side: "right", class: "-left-14" },
            { position: "outside", side: "left", class: "-right-13 sm:-right-14" },
            { position: "outside", side: ["top", "bottom"], class: "right-4" },
            { position: "outside", side: ["left", "right"], class: "bg-transparent text-white" },
        ],
    },
);
