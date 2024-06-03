<script setup lang="ts">
import { cvaProgressSpinnerVariant } from "./cva";
import type { ProgressSpinnerProps } from "./types";
import { cn } from "@/lib";

withDefaults(defineProps<ProgressSpinnerProps>(), {
    color: "brand",
    size: "md",
});
</script>

<template>
    <div role="progressbar" :class="cn(cvaProgressSpinnerVariant({ color, size }))">
        <svg style="animation: rotate 1s linear infinite" viewBox="25 25 50 50">
            <circle
                class="loader__underlay"
                :class="cvaProgressSpinnerVariant"
                cx="50"
                cy="50"
                r="20"
            />
            <circle
                class="loader__overlay"
                :class="cvaProgressSpinnerVariant"
                cx="50"
                cy="50"
                r="20"
            />
        </svg>
    </div>
</template>

<style>
.loader__underlay,
.loader__overlay {
    fill: none;
    stroke-width: 5;
}

.loader__underlay {
    @apply opacity-20;
}

.loader__overlay {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: stretch calc(2s * 0.75) ease-in-out infinite;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes stretch {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 75, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dashoffset: -124px;
    }
}
</style>
