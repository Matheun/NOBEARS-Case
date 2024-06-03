<script setup lang="ts">

const { data, pending, error, refresh } = await useAsyncData(
    "jobs",
    () => $fetch("https://data.pro-cluster.com/jobs"),
);
</script>

<template>
    <div>
        {{ data }}
    </div>
</template>
