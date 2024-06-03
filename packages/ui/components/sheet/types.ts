import type { HTMLAttributes } from "vue";
import type {
    DialogRootProps as RadixDialogRootProps,
    DialogRootEmits as RadixDialogRootEmits,
    DialogCloseProps as RadixDialogCloseProps,
    DialogContentProps as RadixDialogContentProps,
    DialogContentEmits as RadixDialogContentEmits,
    DialogDescriptionProps as RadixDialogDescriptionProps,
    DialogTitleProps as RadixDialogTitleProps,
    DialogTriggerProps as RadixDialogTriggerProps,
} from "radix-vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaSheetContentVariants, cvaSheetCloseVariants } from "./cva";

export type CvaSheetContentVariants = VariantProps<typeof cvaSheetContentVariants>;
export type CvaSheetCloseVariants = VariantProps<typeof cvaSheetCloseVariants>;

export type SheetSides = CvaSheetContentVariants["side"];
export type SheetClosePositions = CvaSheetCloseVariants["position"];

export interface SheetRootProps extends RadixDialogRootProps {}
export interface SheetRootEmits extends RadixDialogRootEmits {}

export interface SheetCloseProps extends RadixDialogCloseProps {}

export interface SheetContentProps extends RadixDialogContentProps {
    class?: HTMLAttributes["class"];
    side?: SheetSides;
    closePosition?: SheetClosePositions;
}
export interface SheetContentEmits extends RadixDialogContentEmits {}

export interface SheetDescriptionProps extends RadixDialogDescriptionProps {
    class?: HTMLAttributes["class"];
}

export interface SheetFooterProps {
    class?: HTMLAttributes["class"];
}

export interface SheetHeaderProps {
    class?: HTMLAttributes["class"];
}

export interface SheetTitleProps extends RadixDialogTitleProps {
    class?: HTMLAttributes["class"];
}

export interface SheetTriggerProps extends RadixDialogTriggerProps {}
