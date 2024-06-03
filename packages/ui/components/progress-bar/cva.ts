import { cva } from "class-variance-authority";

export const cvaProgressBarWrapperVariants = cva(
    "flex gap-x-3 gap-y-2",
    {
        variants: {
            progressPosition: {
                right: "flex-row items-center",
                bottom: "flex-col items-end",
            },
        },
    },
);
export const cvaProgressBarRootVariants = cva("bg-background-quaternary relative h-2 w-full overflow-hidden rounded-full");
export const cvaProgressBarIndicatorVariants = cva("bg-background-brand-solid size-full flex-1 rounded-full transition-all");
