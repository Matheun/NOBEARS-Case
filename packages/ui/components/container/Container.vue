<script setup lang="ts">
import type { ContainerProps } from "./types";
import { cn } from "@/lib";

const props = defineProps<ContainerProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <div v-bind="delegatedProps" :class="cn('px-4 pb-8 pt-14 md:px-8 md:pt-24', props.class)">
        <slot />
    </div>
</template>
