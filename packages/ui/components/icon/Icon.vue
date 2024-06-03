<script setup lang="ts">
import type { IconProps } from "./types";
// import { Icon as IconifyIcon } from "@iconify/vue";
import { cvaIconVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<IconProps>(), {
    icon: "placeholder",
    provider: "nobears-case",
    type: "line",
    size: "md",
});

// /**
//  * ! TODO: Fix tailwindcss shadow DOM classes
//  */
// const iconSize = computed(() => {
//     switch (props.size) {
//         case "xs":
//             return "1rem";
//         case "sm":
//             return "1.25rem";
//         case "md":
//             return "1.5rem";
//         case "lg":
//             return "1.75rem";
//         case "xl":
//             return "2rem";
//         case "2xl":
//             return "2.25rem";
//         case "3xl":
//             return "2.5rem";
//     }
// });
</script>

<template>
    <Icon
        :name="`@${props.provider}:${props.type}:${props.icon}`"
        :class="cn(cvaIconVariants({ size: props.size }), props.class)"
    />
</template>
