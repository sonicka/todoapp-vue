<script setup lang="ts">
import Card from "../components/Card.vue";
import { getFinishedPlural, getTotalPlural } from "../shared/utils.ts";
import { btn } from "../shared/styles.ts";

const props = defineProps<{
  totalTodosNumber: number;
  finishedTodosNumber: number;
  unfinishedShownOnly: boolean;
}>();

const emit = defineEmits<{
  (e: "addNewTodo"): void;
  (e: "showUnfinishedOnly"): void;
}>();
</script>

<template>
  <section class="max-w-md w-full mx-auto flex flex-col gap-4">
    <h1>Moje úkoly</h1>
    <Card
      :body="`Celkem ${totalTodosNumber} ${getTotalPlural(totalTodosNumber)}, ${finishedTodosNumber} ${getFinishedPlural(finishedTodosNumber)}.`"
    />

    <div className="flex w-full gap-3 items-center justify-between">
      <button
        @click="emit('addNewTodo')"
        :class="[btn, 'bg-blue-600', 'text-white', 'hover:bg-gray-800']"
      >
        + Nový úkol
      </button>
      <label class="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          :checked="unfinishedShownOnly"
          @change="emit('showUnfinishedOnly')"
          class="cursor-pointer"
        />
        <span>Zobrazit pouze nedokončené</span>
      </label>
    </div>
  </section>
</template>
