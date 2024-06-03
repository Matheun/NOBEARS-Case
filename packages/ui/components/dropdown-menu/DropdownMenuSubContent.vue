<script setup lang="ts">
import type { DropdownMenuSubContentProps, DropdownMenuSubContentEmits } from "./types";
import { cvaDropdownMenuSubContentVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

const props = defineProps<DropdownMenuSubContentProps>();
const emits = defineEmits<DropdownMenuSubContentEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixDropdownMenuSubContent
        v-bind="forwarded"
        :class="cn(cvaDropdownMenuSubContentVariants(), props.class)"
    >
        <slot />
    </RadixDropdownMenuSubContent>
</template>
