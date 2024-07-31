<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ props.msg }}</h1>
  <p class="read-the-docs">count {{ count }}</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
