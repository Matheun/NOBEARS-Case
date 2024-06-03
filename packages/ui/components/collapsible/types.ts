import type { HTMLAttributes } from "vue";
import type {
    CollapsibleRootProps as RadixCollapsibleRootProps,
    CollapsibleRootEmits as RadixCollapsibleRootEmits,
    CollapsibleContentProps as RadixCollapsibleContentProps,
    CollapsibleTriggerProps as RadixCollapsibleTriggerProps,
} from "radix-vue";

export interface CollapsibleRootProps extends RadixCollapsibleRootProps {}
export interface CollapsibleRootEmits extends RadixCollapsibleRootEmits {}

export interface CollapsibleContentProps extends RadixCollapsibleContentProps {
    class?: HTMLAttributes["class"];
}

export interface CollapsibleTriggerProps extends RadixCollapsibleTriggerProps {}
