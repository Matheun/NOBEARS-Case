<script setup lang="ts">
import { useField } from "@/components/field";

const { error, fieldId, fieldDescriptionId, fieldMessageId } = useField();
</script>

<template>
    <RadixSlot
        :id="fieldId"
        :aria-describedby="!error ? `${fieldDescriptionId}` : `${fieldDescriptionId} ${fieldMessageId}`"
        :aria-invalid="!!error"
    >
        <slot />
    </RadixSlot>
</template>
