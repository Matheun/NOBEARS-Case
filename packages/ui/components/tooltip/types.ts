import type { VariantProps } from "class-variance-authority";
import type {
    TooltipRootProps as RadixTooltipRootProps,
    TooltipRootEmits as RadixTooltipRootEmits,
    TooltipContentProps as RadixTooltipContentProps,
    TooltipContentEmits as RadixTooltipContentEmits,
    TooltipProviderProps as RadixTooltipProviderProps,
    TooltipTriggerProps as RadixTooltipTriggerProps,
} from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { cvaTooltipContentVariants } from "./cva";

export type CvaTooltipContentVariants = VariantProps<typeof cvaTooltipContentVariants>;

export type TooltipContentThemes = CvaTooltipContentVariants["theme"];
export type TooltipContentSizes = CvaTooltipContentVariants["size"];

export interface TooltipProps extends RadixTooltipRootProps {}
export interface TooltipEmits extends RadixTooltipRootEmits {}

export interface TooltipContentProps extends RadixTooltipContentProps {
    theme?: TooltipContentThemes;
    size?: TooltipContentSizes;
    class?: HTMLAttributes["class"];
}
export interface TooltipContentEmits extends RadixTooltipContentEmits {}

export interface TooltipProviderProps extends RadixTooltipProviderProps {}
export interface TooltipTriggerProps extends RadixTooltipTriggerProps {}
