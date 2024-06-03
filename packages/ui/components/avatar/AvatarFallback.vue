<script setup lang="ts">
import type { AvatarFallbackProps } from "./types";
import { cvaAvatarFallbackVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<AvatarFallbackProps>();
</script>

<template>
    <RadixAvatarFallback v-bind="props" :class="cn(cvaAvatarFallbackVariants({ size: props.size }), props.class)">
        <slot>
            <span v-if="!!props.fallback">
                {{ props.fallback }}
            </span>
            <lazy-ui-icon v-else icon="user-01" :size="size === '2xl' ? 'xl' : size" />
        </slot>
    </RadixAvatarFallback>
</template>
