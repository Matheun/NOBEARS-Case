import type { HTMLAttributes } from "vue";
import type {
    PopoverRootEmits as RadixPopoverRootEmits,
    PopoverRootProps as RadixPopoverRootProps,
    PopoverContentEmits as RadixPopoverContentEmits,
    PopoverContentProps as RadixPopoverContentProps,
    PopoverAnchorProps as RadixPopoverAnchorProps,
    PopoverTriggerProps as RadixPopoverTriggerProps,
} from "radix-vue";

export interface PopoverRootProps extends RadixPopoverRootProps {}
export interface PopoverRootEmits extends RadixPopoverRootEmits {}

export interface PopoverContentProps extends RadixPopoverContentProps {
    matchTriggerWidth?: boolean;
    class?: HTMLAttributes["class"];
}
export interface PopoverContentEmits extends RadixPopoverContentEmits {}

export interface PopoverAnchorProps extends RadixPopoverAnchorProps {}

export interface PopoverTriggerProps extends RadixPopoverTriggerProps {}
