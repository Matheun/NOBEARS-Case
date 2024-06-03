<script setup lang="ts">
import type { SidebarNavigationProps } from "./types";
import { cvaSidebarNavigationVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<SidebarNavigationProps>(), {
    theme: "dark",
    style: "dual-tier",
});
</script>

<template>
    <div :class="cn(cvaSidebarNavigationVariants({ theme, style }), props.class)">
        <slot />
    </div>
</template>
