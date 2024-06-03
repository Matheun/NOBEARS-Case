import { cva } from "class-variance-authority";

export const cvaPageHeaderVariants = cva("flex flex-wrap px-4 pb-5 pt-8 md:px-8");
export const cvaPageHeaderActionsVariants = cva("mt-4 flex w-full items-start justify-start gap-x-3 gap-y-4 md:mt-0 md:basis-1/2 md:justify-end");
export const cvaPageHeaderBreadcrumbVariants = cva("mb-5 w-full");
export const cvaPageHeaderDescriptionVariants = cva("text-md mt-1 max-w-2xl");
export const cvaPageHeaderHeaderVariants = cva("md:basis-1/2");
export const cvaPageHeaderTitleVariants = cva("");
