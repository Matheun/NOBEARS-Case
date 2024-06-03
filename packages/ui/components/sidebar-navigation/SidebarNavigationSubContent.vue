<script setup lang="ts">
import type { SidebarNavigationSubContentProps } from "./types";
import { cvaSidebarNavigationSubContentVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<SidebarNavigationSubContentProps>();
</script>

<template>
    <div :class="cn(cvaSidebarNavigationSubContentVariants(), props.class)">
        <slot />
    </div>
</template>
