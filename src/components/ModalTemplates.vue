<script setup lang="ts">
import { TodosTemplates } from "../data/todos";
import { PRIORITY_LABEL } from "../shared/constants";
import { btn } from "../shared/styles";
import type { Template } from "../shared/types";

const emit = defineEmits<{
  (e: "apply", template: Template): void;
  (e: "back"): void;
  (e: "close"): void;
}>();
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2 pt-6">
      <div
        v-for="template in TodosTemplates"
        :key="template.id"
        class="w-full max-w-md rounded-lg border border-gray-300 bg-gray-100 p-5 cursor-pointer hover:border-gray-400 hover:bg-white"
        @click="emit('apply', template)"
      >
        <h5 class="pb-1">{{ template.title }}</h5>
        <span>Priorita: {{ PRIORITY_LABEL[template.defaults.priority] }}</span>
      </div>
    </div>

    <div class="mt-1 flex gap-2 justify-center">
      <button
        @click="emit('close')"
        :class="`${btn} flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100`"
      >
        Zrušit
      </button>
      <button
        @click="emit('back')"
        :class="`${btn} flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100`"
      >
        Zpět
      </button>
    </div>
  </div>
</template>
