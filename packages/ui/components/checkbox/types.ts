import type { CheckboxRootProps, CheckboxRootEmits } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaCheckboxVariants } from "./cva";

export type CvaCheckboxVariants = VariantProps<typeof cvaCheckboxVariants>;

export type CheckboxSizes = CvaCheckboxVariants["size"];

export interface CheckboxProps extends CheckboxRootProps {
    class?: HTMLAttributes["class"];
    size?: CheckboxSizes;
}

export interface CheckboxEmits extends CheckboxRootEmits {}
