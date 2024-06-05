<script setup lang="ts">
definePageMeta({
    layout: "job",
});

const route = useRoute();
</script>

<template>
    <div>
        {{ route.params }}
        {{ route.query }}
    </div>
</template>
