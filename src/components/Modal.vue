<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();

const emit = defineEmits<{
  (e: "close"): void;
}>();
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div
      class="absolute inset-0 bg-black/30 backdrop-blur-sm"
      @click="emit('close')"
    />

    <div
      @click.stop
      class="p-5 relative w-full max-w-md rounded-2xl bg-white shadow-2xl"
    >
      <h4 v-if="title" class="text-lg font-semibold text-gray-800">
        {{ title }}
      </h4>

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
