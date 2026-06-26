<script setup lang="ts">
import { computed } from "vue";
import { PRIORITY, PRIORITY_LABEL } from "../shared/constants";
import { btn } from "../shared/styles";
import type { Priority } from "../shared/types";

const emit = defineEmits<{
  (e: "save"): void;
  (e: "cancel"): void;
}>();

const title = defineModel<string>("title", { default: "" });
const priority = defineModel<Priority>("priority");

const isSaveDisabled = computed(() => title.value.trim() === "");

const priorityOptions = [
  { value: PRIORITY.high, label: PRIORITY_LABEL.high },
  { value: PRIORITY.normal, label: PRIORITY_LABEL.normal },
  { value: PRIORITY.low, label: PRIORITY_LABEL.low },
] as const;
</script>

<template>
  <div
    class="flex w-full max-w-md flex-col gap-5 pt-5 text-left rounded-xl bg-white"
  >
    <div class="flex flex-col gap-1">
      <label for="title" class="text-sm font-medium text-gray-700">
        Název úkolu
      </label>
      <input
        id="title"
        type="text"
        v-model="title"
        required
        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm font-medium text-gray-700">Priorita</label>
      <div class="flex gap-6">
        <label
          v-for="option in priorityOptions"
          :key="option.value"
          class="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name="priority"
            :value="option.value"
            v-model="priority"
            class="cursor-pointer"
          />
          {{ option.label }}
        </label>
      </div>
    </div>

    <div class="flex gap-3 pt-2">
      <button
        @click="emit('cancel')"
        :class="`${btn} flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100`"
      >
        Zrušit
      </button>
      <button
        @click="emit('save')"
        :disabled="isSaveDisabled"
        :class="`${btn} flex-1 bg-blue-600 text-white enabled:hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`"
      >
        Přidat úkol
      </button>
    </div>
  </div>
</template>
