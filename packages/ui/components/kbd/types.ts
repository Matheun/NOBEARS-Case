import type { HTMLAttributes } from "vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaKbdVariants } from "./cva";

export type CvaKbdVariants = VariantProps<typeof cvaKbdVariants>;

export type KbdSize = CvaKbdVariants["size"];

export interface KbdProps {
    shortcut?: string;
    outlined?: boolean
    size?: KbdSize;
    showOs?: boolean;
    class?: HTMLAttributes["class"];
}
