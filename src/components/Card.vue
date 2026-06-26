<script setup lang="ts">
const props = defineProps<{
  title?: string;
  body: string;
}>();
</script>

<template>
  <div
    class="w-full max-w-md rounded-md border-l-6 border-l-blue-600 bg-gray-100 p-5 shadow-sm space-y-1"
  >
    <h5 v-if="title">{{ title }}</h5>
    <span class="text-gray-800">
      {{ body }}
    </span>
    <slot />
  </div>
</template>
