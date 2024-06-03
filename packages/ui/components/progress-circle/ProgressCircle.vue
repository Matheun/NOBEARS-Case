<!-- inspiration from: https://github.com/element-plus/element-plus/blob/dev/packages/components/progress/src/progress.vue -->
<script setup lang="ts">
import type { CSSProperties } from "vue";
import type { ProgressCircleProps } from "./types";
import { cvaProgressCircleWrapperVariants, cvaProgressCircleVariants, cvaProgressCircleLabelVariants } from "./cva";
import { cn } from "@/lib";
import gsap from "gsap";

const model = defineModel<number>({ default: 0 });

const props = withDefaults(defineProps<ProgressCircleProps>(), {
    size: "xs",
});

const defaultSize = { strokeWidth: 16, circleSize: 80, halfHeight: 88 };
const sizeMappings = {
    xxs: { strokeWidth: 6, circleSize: 32, halfHeight: 36 },
    xs: { strokeWidth: 16, circleSize: 80, halfHeight: 88 },
    sm: { strokeWidth: 20, circleSize: 100, halfHeight: 110 },
    md: { strokeWidth: 24, circleSize: 120, halfHeight: 132 },
    lg: { strokeWidth: 28, circleSize: 140, halfHeight: 154 },
};

const strokeWidth = computed(() => { return sizeMappings[props.size || "xs"]?.strokeWidth || defaultSize.strokeWidth; });
const circleSize = computed(() => { return sizeMappings[props.size || "xs"]?.circleSize || defaultSize.circleSize; });
const circleRadius = computed(() => { return circleSize.value - (strokeWidth.value / 2); });
const circleCircumference = computed(() => { return 2 * Math.PI * circleRadius.value; });
const circleRatio = computed(() => (props.half ? 0.5 : 1));

const strokeDashoffset = computed(() => {
    const offset = (-1 * circleCircumference.value * (1 - circleRatio.value));
    return `${offset}px`;
});

const circleUnderlayPathStyle = computed<CSSProperties>(() => {
    return {
        strokeDasharray: `${circleCircumference.value * circleRatio.value}px, ${circleCircumference.value}px`,
        strokeDashoffset: strokeDashoffset.value,
    };
});

const circleOverlayPathStyle = computed<CSSProperties>(() => {
    return {
        strokeDasharray: `${circleCircumference.value * circleRatio.value * ((model.value || 0) / 100)}px, ${circleCircumference.value}px`,
        strokeDashoffset: strokeDashoffset.value,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s",
    };
});

const tweened = reactive({ number: Number(model.value) || 0 });
const displayPercentage = computed(() => Math.round(tweened.number));
watch(model, (value) => {
    gsap.to(tweened, { duration: 0.5, number: Number(value) || 0 });
});
</script>

<template>
    <div :class="cvaProgressCircleWrapperVariants({ size: props.size, half: props.half })">
        <svg :class="cn(cvaProgressCircleVariants({ size: props.size, half: props.half }), props.class)">
            <circle
                class="stroke-[--progress-circle-underlay-color]"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                :stroke-width="strokeWidth"
                :cx="circleSize"
                :cy="circleSize"
                :r="circleRadius"
                :style="circleUnderlayPathStyle"
            />
            <circle
                class="stroke-[--progress-circle-overlay-color]"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                :stroke-width="strokeWidth"
                :cx="circleSize"
                :cy="circleSize"
                :r="circleRadius"
                :style="circleOverlayPathStyle"
            />
        </svg>
        <div :class="cn('absolute', props.half ? 'bottom-0' : '')">
            <slot :percentage="displayPercentage">
                <span :class="cvaProgressCircleLabelVariants({ size: props.size })">{{ displayPercentage }}%</span>
            </slot>
        </div>
    </div>
</template>
