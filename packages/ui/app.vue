<script setup lang="ts">
const useIdFunction = () => useId();
</script>

<template>
    <RadixConfigProvider :use-id="useIdFunction">
        <RadixTooltipProvider>
            <RadixToastProvider>
                <div />
                <ui-toast-viewport />
            </RadixToastProvider>
        </RadixTooltipProvider>
    </RadixConfigProvider>
</template>
