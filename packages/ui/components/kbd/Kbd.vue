<script setup lang="ts">
import type { KbdProps } from "./types";
import { cvaKbdVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<KbdProps>(), {
    outlined: false,
    size: "md",
    showOs: false,
});

const { isIos, isWindows } = useDevice();

</script>

<template>
    <kbd
        :class="cn(cvaKbdVariants({
            outlined: props.outlined,
            size: props.size,
        }), props.class)"
    >
        <span v-if="isIos && props.showOs">⌘</span>
        <span v-else-if="isWindows && props.showOs">Crtl</span>
        <slot>
            <span v-if="!!props.shortcut">{{ props.shortcut }}</span>
        </slot>
    </kbd>
</template>
