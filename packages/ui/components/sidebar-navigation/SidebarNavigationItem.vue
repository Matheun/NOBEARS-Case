<script setup lang="ts">
import type { SidebarNavigationItemProps } from "./types";
import { cvaSidebarNavigationItemVariants } from "./cva";
import { cn } from "@/lib";

const slots = useSlots();
const props = defineProps<SidebarNavigationItemProps>();
</script>

<template>
    <NuxtLink :class="cn(cvaSidebarNavigationItemVariants({ active: props.active }), props.class)">
        <RadixPrimitive
            v-if="!!props.icon || slots.icon"
            as="template"
            data-slot="icon"
            role="img"
            aria-hidden
        >
            <slot name="icon">
                <ui-icon
                    v-if="!!props.icon"
                    :icon="props.icon"
                    size="md"
                />
            </slot>
        </RadixPrimitive>

        <slot>
            <span v-if="!!props.label" class="truncate">{{ props.label }}</span>
        </slot>

        <RadixPrimitive
            v-if="!!props.badge || slots.append || slots.badge"
            as="template"
            data-slot="append"
            role="status"
            aria-hidden
        >
            <slot name="append">
                <ui-badge
                    size="sm"
                >
                    {{ props.badge }}
                </ui-badge>
            </slot>
        </RadixPrimitive>
    </NuxtLink>
</template>
