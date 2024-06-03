import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import type { PrimitiveProps } from "radix-vue";
import type { cvaLabelVariants } from "./cva";

export type CvaLabelVariants = VariantProps<typeof cvaLabelVariants>;

export interface LabelProps extends PrimitiveProps {
    required?: boolean;
    /** The id of the element the label is associated with. */
    for?: string;
    /** The class to apply to the label. */
    class?: HTMLAttributes["class"];
}
