<script setup lang="ts">
import type { DropdownMenuShortcutProps } from "./types";
import { cn } from "@/lib";

const props = defineProps<DropdownMenuShortcutProps>();

const shortcutArray = props.shortcut?.split("+") ?? [];
</script>

<template>
    <div :class="cn('space-x-px', props.class)">
        <template v-for="(splitShortcut, index) in shortcutArray" :key="index">
            <span>{{ splitShortcut }}</span>
            <span v-if="index !== shortcutArray.length - 1">+</span>
        </template>
    </div>
</template>
