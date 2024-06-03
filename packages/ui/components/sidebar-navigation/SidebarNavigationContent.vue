<script setup lang="ts">
import type { SidebarNavigationContentProps } from "./types";
import { cvaSidebarNavigationContentVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SidebarNavigationContentProps>();
</script>

<template>
    <div :class="cn(cvaSidebarNavigationContentVariants(), props.class)">
        <slot />
    </div>
</template>
