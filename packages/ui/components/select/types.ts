// import type { VariantProps } from "class-variance-authority";
// import type { HTMLAttributes } from "vue";
// import type { RadioGroupRootEmits, RadioGroupRootProps, RadioGroupItemProps as RadixRadioGroupItemProps } from "radix-vue";
// import type { cvaRadioGroupVariants, cvaRadioGroupItemVariants } from "./cva";

// export type CvaRadioGroupVariants = VariantProps<typeof cvaRadioGroupVariants>;
// export type CvaRadioGroupItemVariants = VariantProps<typeof cvaRadioGroupItemVariants>;

// export type RadioGroupItemSizes = CvaRadioGroupItemVariants["size"];

// // RadioGroup
// export interface RadioGroupProps extends RadioGroupRootProps {
//     size?: RadioGroupItemSizes;
//     class?: HTMLAttributes["class"];
// }
// export interface RadioGroupEmits extends RadioGroupRootEmits {}

// // RadioGroup Items
// export interface RadioGroupItemProps extends RadioGroupProps, RadixRadioGroupItemProps {}
import type { HTMLAttributes } from "vue";
import type {
    SelectRootEmits as RadixSelectRootEmits,
    SelectRootProps as RadixSelectRootProps,
    SelectContentEmits as RadixSelectContentEmits,
    SelectContentProps as RadixSelectContentProps,
    SelectGroupProps as RadixSelectGroupProps,
    SelectItemProps as RadixSelectItemProps,
    SelectItemTextProps as RadixSelectItemTextProps,
    SelectLabelProps as RadixSelectLabelProps,
    SelectScrollDownButtonProps as RadixSelectScrollDownButtonProps,
    SelectScrollUpButtonProps as RadixSelectScrollUpButtonProps,
    SelectSeparatorProps as RadixSelectSeparatorProps,
    SelectTriggerProps as RadixSelectTriggerProps,
    SelectValueProps as RadixSelectValueProps,
    SelectViewportProps as RadixSelectViewportProps,
} from "radix-vue";
import type { VariantProps } from "class-variance-authority";
import type { cvaSelectContentVariants, cvaSelectTriggerVariants } from "./cva";

export type CvaSelectContentVariants = VariantProps<typeof cvaSelectContentVariants>;
export type CvaSelectTriggerVariants = VariantProps<typeof cvaSelectTriggerVariants>;

export type SelectContentPosition = CvaSelectContentVariants["position"];
export type SelectTriggerSize = CvaSelectTriggerVariants["size"];

export interface SelectProps extends RadixSelectRootProps {
    class?: HTMLAttributes["class"];
}
export interface SelectEmits extends RadixSelectRootEmits {}

export interface SelectContentProps extends RadixSelectContentProps {
    class?: HTMLAttributes["class"];
}
export interface SelectContentEmits extends RadixSelectContentEmits {}

export interface SelectGroupProps extends RadixSelectGroupProps {
    class?: HTMLAttributes["class"];
}

export interface SelectItemProps extends RadixSelectItemProps {
    class?: HTMLAttributes["class"];
}
export interface SelectItemIndicatorProps {
    class?: HTMLAttributes["class"];
}

export interface SelectItemTextProps extends RadixSelectItemTextProps {}

export interface SelectLabelProps extends RadixSelectLabelProps {
    class?: HTMLAttributes["class"];
}

export interface SelectScrollDownButtonProps extends RadixSelectScrollDownButtonProps {
    class?: HTMLAttributes["class"];
}

export interface SelectScrollUpButtonProps extends RadixSelectScrollUpButtonProps {
    class?: HTMLAttributes["class"];
}

export interface SelectSeparatorProps extends RadixSelectSeparatorProps {
    class?: HTMLAttributes["class"];
}

export interface SelectTriggerProps extends RadixSelectTriggerProps {
    size?: SelectTriggerSize;
    class?: HTMLAttributes["class"];
}

export interface SelectValueProps extends RadixSelectValueProps {}

export interface SelectViewportProps extends RadixSelectViewportProps {
    position?: SelectContentPosition;
    class?: HTMLAttributes["class"];
}
