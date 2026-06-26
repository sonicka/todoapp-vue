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
    <p v-if="title" class="text-xl font-semibold leading-tight">{{ title }}</p>
    <span class="text-gray-800">
      {{ body }}
    </span>
    <slot />
  </div>
</template>
