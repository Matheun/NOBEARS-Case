<script setup lang="ts">
import type { SwitchProps, SwitchEmits } from "./types";
import { cvaSwitchVariants, cvaSwitchTumbVariants } from "./cva";
import { useForwardPropsEmits } from "radix-vue";
import { cn } from "@/lib";

const props = withDefaults(defineProps<SwitchProps>(), {
    size: "sm",
});
const emits = defineEmits<SwitchEmits>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwarded = useForwardPropsEmits(delegatedProps, emits);
</script>

<template>
    <RadixSwitchRoot
        v-bind="forwarded"
        :class="cn(
            cvaSwitchVariants({ size: props.size }),
            props.class,
        )"
    >
        <RadixSwitchThumb
            :class="cvaSwitchTumbVariants({ size: props.size })"
        />
    </RadixSwitchRoot>
</template>
