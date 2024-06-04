<script setup lang="ts">
import type { SelectContentEmits, SelectContentProps } from "./types";
import { cvaSelectContentVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<SelectContentProps>(), {
    position: "popper",
});
const emits = defineEmits<SelectContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixSelectPortal>
        <RadixSelectContent
            v-bind="{ ...forwarded, ...$attrs }"
            :class="cn(
                cvaSelectContentVariants({ position: props.position }),
                props.class,
            )
            "
        >
            <ui-select-scroll-up-button />
            <ui-select-viewport>
                <slot />
            </ui-select-viewport>
            <ui-select-scroll-down-button />
        </RadixSelectContent>
    </RadixSelectPortal>
</template>
