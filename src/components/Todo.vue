<script setup lang="ts">
import Card from "./Card.vue";
import { PRIORITY_LABEL, STATUS } from "../shared/constants";
import { btn } from "../shared/styles";
import { type Priority, type Todo as TodoType } from "../shared/types";

const props = defineProps<{
  todo: TodoType;
}>();

const emit = defineEmits<{
  (e: "finishTodo", id: number): void;
  (e: "deleteTodo", id: number): void;
}>();

const PRIORITY_COLOR: Record<Priority, string> = {
  high: "border-l-red-500",
  normal: "border-l-yellow-500",
  low: "border-l-green-500",
};
</script>

<template>
  <Card
    :title="todo.title"
    :body="`Priorita: ${PRIORITY_LABEL[todo.priority]}`"
    :class="[
      PRIORITY_COLOR[todo.priority],
      todo.status === STATUS.finished ? 'opacity-50' : 'opacity-100',
    ]"
  >
    <template>
      <div class="mt-6 flex gap-2">
        <button
          v-if="todo.status === STATUS.planned"
          @click="emit('finishTodo', todo.id)"
          :class="[btn, 'bg-gray-600', 'text-white', 'hover:bg-gray-800']"
        >
          Dokončit
        </button>

        <button
          @click="emit('deleteTodo', todo.id)"
          :class="[
            btn,
            'border',
            'border-gray-300',
            'text-gray-700',
            'bg-gray-100',
            'hover:bg-white',
          ]"
        >
          Odstranit
        </button>
      </div>
    </template>
  </Card>
</template>
