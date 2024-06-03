<script setup lang="ts">
import type { FieldDescriptionProps } from "./types";
import { useField } from "@/components/field";
import { cvaFieldDescriptionVariants } from "./cva";
import { cn } from "@/lib";

const props = defineProps<FieldDescriptionProps>();

const { fieldDescriptionId } = useField();
</script>

<template>
    <small
        :id="fieldDescriptionId"
        :class="cn(cvaFieldDescriptionVariants(), props.class)"
    >
        <slot />
    </small>
</template>
