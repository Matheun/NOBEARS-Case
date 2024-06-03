import type { HTMLAttributes } from "vue";
import type {
    DialogRootEmits as RadixDialogRootEmits,
    DialogRootProps as RadixDialogRootProps,
    DialogCloseProps as RadixDialogCloseProps,
    DialogContentEmits as RadixDialogContentEmits,
    DialogContentProps as RadixDialogContentProps,
    DialogDescriptionProps as RadixDialogDescriptionProps,
    DialogContentEmits as RadixDialogScrollContentEmits,
    DialogContentProps as RadixDialogScrollContentProps,
    DialogTitleProps as RadixDialogTitleProps,
    DialogTriggerProps as RadixDialogTriggerProps,
} from "radix-vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaDialogIconVariants } from "./cva";

export interface DialogProps extends RadixDialogRootProps {
    class?: HTMLAttributes["class"];
}
export interface DialogEmits extends RadixDialogRootEmits {}

export interface DialogCloseProps extends RadixDialogCloseProps {
    class?: HTMLAttributes["class"];
}

export interface DialogContentProps extends RadixDialogContentProps {
    class?: HTMLAttributes["class"];
}
export interface DialogContentEmits extends RadixDialogContentEmits {}

export interface DialogDescriptionProps extends RadixDialogDescriptionProps {
    class?: HTMLAttributes["class"];
}

export interface DialogFooterProps {
    class?: HTMLAttributes["class"];
}

export interface DialogHeaderProps {
    class?: HTMLAttributes["class"];
}

export type CvaDialogIconVariants = VariantProps<typeof cvaDialogIconVariants>;
export type DialogIconShapes = CvaDialogIconVariants["shape"];
export type DialogIconColors = CvaDialogIconVariants["color"];
export interface DialogIconProps {
    icon: string;
    shape?: DialogIconShapes;
    color?: DialogIconColors;
    class?: HTMLAttributes["class"];
}

export interface DialogScrollContentProps extends RadixDialogScrollContentProps {
    class?: HTMLAttributes["class"];
}
export interface DialogScrollContentEmits extends RadixDialogScrollContentEmits {}

export interface DialogTitleProps extends RadixDialogTitleProps {
    class?: HTMLAttributes["class"];
}

export interface DialogTriggerProps extends RadixDialogTriggerProps {
    class?: HTMLAttributes["class"];
}
