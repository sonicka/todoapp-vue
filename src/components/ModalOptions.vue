<script setup lang="ts">
import { btn } from "../shared/styles";

const emit = defineEmits<{
  (e: "goToForm"): void;
  (e: "goToTemplates"): void;
  (e: "cancel"): void;
}>();
</script>

<template>
  <div className="flex flex-col gap-2 pt-10">
    <button
      @click="emit('goToForm')"
      :class="[btn, 'bg-blue-600', 'text-white', 'hover:bg-gray-800']"
    >
      Vytvořit od začátku
    </button>
    <button
      @click="emit('goToTemplates')"
      :class="[btn, 'bg-gray-600', 'text-white', 'hover:bg-gray-800']"
    >
      Vytvořit ze šablony
    </button>
    <button
      @click="emit('cancel')"
      :class="`${btn} mt-5 border border-gray-300 text-gray-700 hover:bg-gray-100`"
    >
      Zrušit
    </button>
  </div>
</template>
