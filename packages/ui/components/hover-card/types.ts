import type { HTMLAttributes } from "vue";
import type {
    HoverCardRootEmits as RadixHoverCardRootEmits,
    HoverCardRootProps as RadixHoverCardRootProps,
    HoverCardContentProps as RadixHoverCardContentProps,
    HoverCardTriggerProps as RadixHoverCardTriggerProps,
} from "radix-vue";

export interface HoverCardRootProps extends RadixHoverCardRootProps {}
export interface HoverCardRootEmits extends RadixHoverCardRootEmits {}

export interface HoverCardContentProps extends RadixHoverCardContentProps {
    class?: HTMLAttributes["class"]
}

export interface HoverCardTriggerProps extends RadixHoverCardTriggerProps {}
