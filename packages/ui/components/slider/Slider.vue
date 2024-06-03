<script setup lang="ts">
import type { SliderEmits, SliderProps } from "./types";
import { cvaSliderRootVariants, cvaSliderTrackVariants, cvaSliderRangeVariants, cvaSliderThumbVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

const attrs = useAttrs();
const props = withDefaults(defineProps<SliderProps>(), {
    minStepsBetweenThumbs: 1,
});
const emits = defineEmits<SliderEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwarded = useForwardPropsEmits(delegatedProps, emits);

const defaultValue = computed(() => {
    if (typeof props.defaultValue === "number") { return [props.defaultValue]; }
    if (typeof attrs.value === "number") { return [attrs.value]; }
    return (props.defaultValue || attrs.value) as number[] | undefined;
});

const cursorGrab = ref(false);
</script>

<template>
    <RadixSliderRoot
        v-slot="{ modelValue }"
        :class="cn(cvaSliderRootVariants(), props.class)"
        v-bind="forwarded"
        :default-value="defaultValue"
    >
        <RadixSliderTrack :class="cvaSliderTrackVariants()">
            <RadixSliderRange :class="cvaSliderRangeVariants()" />
        </RadixSliderTrack>
        <RadixSliderThumb
            v-for="(_, key) in modelValue"
            :key="key"
            :class="cn(cvaSliderThumbVariants(), cursorGrab ? 'cursor-grabbing' : '')"
            @pointerdown="cursorGrab = true"
            @pointerup="cursorGrab = false"
        />
    </RadixSliderRoot>
</template>
