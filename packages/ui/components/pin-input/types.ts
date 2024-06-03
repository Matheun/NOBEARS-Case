import type { HTMLAttributes } from "vue";
import type {
    PrimitiveProps as RadixPrimitiveProps,
    PinInputRootEmits as RadixPinInputRootEmits,
    PinInputRootProps as RadixPinInputRootProps,
    PinInputInputProps as RadixPinInputInputProps,
} from "radix-vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaPinInputInputVariants } from "./cva";

export type CvaPinInputInputVariants = VariantProps<typeof cvaPinInputInputVariants>;

export type PinInputInputSizes = CvaPinInputInputVariants["size"];

export interface PinInputProps extends RadixPinInputRootProps {
    class?: HTMLAttributes["class"];
}
export interface PinInputEmits extends RadixPinInputRootEmits {}

export interface PinInputGroupProps extends RadixPrimitiveProps {
    class?: HTMLAttributes["class"];
}

export interface PinInputInputProps extends RadixPinInputInputProps {
    size?: PinInputInputSizes;
    class?: HTMLAttributes["class"];
}
