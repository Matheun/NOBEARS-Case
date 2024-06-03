<script setup lang="ts">
import type { AvatarProps } from "./types";
import { cvaAvatarVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<AvatarProps>(), {
    size: "sm",
    shape: "circle",
});
</script>

<template>
    <RadixAvatarRoot :class="cn(cvaAvatarVariants({ size, shape }), props.class)">
        <slot>
            <ui-avatar-image
                :src="!!props.src ? props.src : ''"
                :alt="!!props.alt ? props.alt : 'Avatar image'"
            />
            <ui-avatar-fallback :delay-ms="600" :fallback="props.fallback" :size="props.size" />
        </slot>
    </RadixAvatarRoot>
</template>
