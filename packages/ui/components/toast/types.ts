import type { HTMLAttributes } from "vue";
import type {
    ToastRootEmits as RadixToastRootEmits,
    ToastRootProps as RadixToastRootProps,
    ToastActionProps as RadixToastActionProps,
    ToastCloseProps as RadixToastCloseProps,
    ToastDescriptionProps as RadixToastDescriptionProps,
    ToastProviderProps as RadixToastProviderProps,
    ToastTitleProps as RadixToastTitleProps,
    ToastViewportProps as RadixToastViewportProps,
} from "radix-vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaToastVariants, cvaToastIconVariants } from "./cva";

export type CvaToastVariants = VariantProps<typeof cvaToastVariants>;
export type CvaToastIconVariants = VariantProps<typeof cvaToastIconVariants>;

export type ToastVariants = CvaToastVariants["variant"];
export type ToastIconDecorations = CvaToastIconVariants["decoration"];

export interface ToastProps extends RadixToastRootProps {
    onOpenChange?: ((value: boolean) => void) | undefined
    variant?: ToastVariants
    icon?: string
    class?: HTMLAttributes["class"]
}
export interface ToastEmits extends RadixToastRootEmits {}
export interface ToastContext {
    variant: ToastVariants
}

export interface ToastActionProps extends RadixToastActionProps {
    class?: HTMLAttributes["class"];
}

export interface ToastCloseProps extends RadixToastCloseProps {
    class?: HTMLAttributes["class"];
}

export interface ToastDescriptionProps extends RadixToastDescriptionProps {
    class?: HTMLAttributes["class"];
}

export interface ToastIconProps {
    icon?: string
    decoration?: ToastIconDecorations
    variant?: ToastVariants;
    class?: HTMLAttributes["class"];
}

export interface ToastProviderProps extends RadixToastProviderProps {}

export interface ToastTitleProps extends RadixToastTitleProps {
    class?: HTMLAttributes["class"];
}

export interface ToastViewportProps extends RadixToastViewportProps {
    class?: HTMLAttributes["class"];
}
