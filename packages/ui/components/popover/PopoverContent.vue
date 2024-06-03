<script setup lang="ts">
import type { PopoverContentEmits, PopoverContentProps } from "./types";
import { cvaPopoverContentVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<PopoverContentProps>(), {
    align: "center",
    sideOffset: 4,
    matchTriggerWidth: false,
});
const emits = defineEmits<PopoverContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixPopoverPortal>
        <RadixPopoverContent
            v-bind="{ ...forwarded, ...$attrs }"
            :class="cn(
                cvaPopoverContentVariants({
                    matchTriggerWidth: props.matchTriggerWidth
                }),
                props.class
            )"
        >
            <slot />
        </RadixPopoverContent>
    </RadixPopoverPortal>
</template>
