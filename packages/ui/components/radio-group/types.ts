import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import type { RadioGroupRootEmits, RadioGroupRootProps, RadioGroupItemProps as RadixRadioGroupItemProps } from "radix-vue";
import type { cvaRadioGroupVariants, cvaRadioGroupItemVariants } from "./cva";

export type CvaRadioGroupVariants = VariantProps<typeof cvaRadioGroupVariants>;
export type CvaRadioGroupItemVariants = VariantProps<typeof cvaRadioGroupItemVariants>;

export type RadioGroupItemSizes = CvaRadioGroupItemVariants["size"];

// RadioGroup
export interface RadioGroupProps extends RadioGroupRootProps {
    size?: RadioGroupItemSizes;
    class?: HTMLAttributes["class"];
}
export interface RadioGroupEmits extends RadioGroupRootEmits {}

// RadioGroup Items
export interface RadioGroupItemProps extends RadioGroupProps, RadixRadioGroupItemProps {}
