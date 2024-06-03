<script setup lang="ts">
import type { DialogTitleProps } from "./types";
import { cvaDialogTitleVariants } from "./cva";
import { useForwardProps } from "radix-vue";
import { computed } from "vue";
import { cn } from "@/lib";

const props = defineProps<DialogTitleProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <RadixDialogTitle v-bind="forwardedProps" :class="cn(cvaDialogTitleVariants(), props.class)">
        <slot />
    </RadixDialogTitle>
</template>
