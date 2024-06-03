<script setup lang="ts">
import type { CardSettingsProps } from "./types";
import { cvaCardSettingsTriggerVariants, cvaCardSettingsContentVariants } from "./cva";
import { useForwardProps } from "radix-vue";

const props = defineProps<CardSettingsProps>();

const delegatedProps = computed(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
    <ui-dropdown-menu v-bind="forwardedProps">
        <ui-dropdown-menu-trigger :class="cvaCardSettingsTriggerVariants()" as-child data-slot="card-settings">
            <ui-button variant="text" icon="dots-vertical" size="sm" />
        </ui-dropdown-menu-trigger>
        <ui-dropdown-menu-content :class="cvaCardSettingsContentVariants()" align="end">
            <slot />
        </ui-dropdown-menu-content>
    </ui-dropdown-menu>
</template>
