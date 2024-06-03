<script setup lang="ts">
import type { LinkProps } from "./types";
import { cvaLinkVariants } from "./cva";
import { cn } from "@/lib";

const props = withDefaults(defineProps<LinkProps>(), {
    size: "md",
});

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const iconSize = computed(() => {
    if (props.size === "2xl") { return "md"; }
    if (props.size === "xl" || props.size === "lg") { return "sm"; }
    if (props.size === "md" || props.size === "sm") { return "xs"; }
    return props.size;
});

const NuxtLink = resolveComponent("NuxtLink");
</script>

<template>
    <component
        v-bind="delegatedProps"
        :is="NuxtLink"
        :class="cn(cvaLinkVariants({ size: props.size}), props.class)"
    >
        <slot name="prepend">
            <lazy-ui-icon
                v-if="prependIcon && !appendIcon"
                :icon="prependIcon"
                :size="iconSize"
                role="img"
                aria-hidden="true"
            />
        </slot>

        <slot />

        <slot name="append">
            <lazy-ui-icon
                v-if="appendIcon && !prependIcon"
                :icon="appendIcon"
                :size="iconSize"
                role="img"
                aria-hidden="true"
            />
        </slot>
    </component>
</template>
