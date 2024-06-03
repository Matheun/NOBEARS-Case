<script setup lang="ts">
import type { ProgressBarProps } from "./types";
import { cvaProgressBarWrapperVariants, cvaProgressBarRootVariants, cvaProgressBarIndicatorVariants } from "./cva";
import { cn } from "@/lib";

defineOptions({
    inheritAttrs: false,
});

const model = defineModel<number>({ default: 0 });

const props = withDefaults(defineProps<ProgressBarProps>(), {
    showProgress: false,
    progressPosition: "right",
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
</script>

<template>
    <div :class="cvaProgressBarWrapperVariants({ progressPosition: props.progressPosition})">
        <RadixProgressRoot
            v-bind="delegatedProps"
            :class="cn(cvaProgressBarRootVariants(), props.class)"
        >
            <RadixProgressIndicator
                :class="cvaProgressBarIndicatorVariants()"
                :style="`transform: translateX(-${100 - (model ?? 0)}%);`"
            />
        </RadixProgressRoot>
        <slot v-if="props.showProgress" name="display-value">
            <span class="text-text-secondary text-sm font-medium leading-5">{{ model }}%</span>
        </slot>
    </div>
</template>
