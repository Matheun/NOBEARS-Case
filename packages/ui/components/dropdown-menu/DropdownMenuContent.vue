<script setup lang="ts">
import type { DropdownMenuContentProps, DropdownMenuContentEmits } from "./types";
import { cvaDropdownMenuContentVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

const props = withDefaults(defineProps<DropdownMenuContentProps>(), {
    sideOffset: 4,
});
const emits = defineEmits<DropdownMenuContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixDropdownMenuPortal>
        <RadixDropdownMenuContent
            v-bind="forwarded"
            :class="cn(cvaDropdownMenuContentVariants(), props.class)"
        >
            <slot />
        </RadixDropdownMenuContent>
    </RadixDropdownMenuPortal>
</template>
