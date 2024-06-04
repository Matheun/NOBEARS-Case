<script setup lang="ts">
import type { SelectGroupProps } from "./types";
import { cvaSelectGroupVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SelectGroupProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <RadixSelectGroup :class="cn(cvaSelectGroupVariants(), props.class)" v-bind="delegatedProps">
        <slot />
    </RadixSelectGroup>
</template>
