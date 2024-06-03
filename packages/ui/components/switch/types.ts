import type { SwitchRootEmits, SwitchRootProps } from "radix-vue";
import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaSwitchVariants } from "./cva";

export type CvaSwitchVariants = VariantProps<typeof cvaSwitchVariants>;

export type SwitchSizes = CvaSwitchVariants["size"];

export interface SwitchProps extends SwitchRootProps {
    class?: HTMLAttributes["class"];
    size?: SwitchSizes;
}

export interface SwitchEmits extends SwitchRootEmits {}
