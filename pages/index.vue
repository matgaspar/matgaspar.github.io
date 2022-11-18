<template>
    <h1>Home</h1>
    <input type="text" v-model="txtInputValue">
    {{ txtInputValue }}
</template>

<script setup>
    definePageMeta({
        layout: "default"
    })

    let txtInputValue = ref(null);

    let isLoad = ref(true);
</script>