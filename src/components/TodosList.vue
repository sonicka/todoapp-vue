<script setup lang="ts">
import Todo from "./Todo.vue";
import type { Todo as TodoType } from "../shared/types.ts";

const props = defineProps<{
  todos: TodoType[];
}>();

const emit = defineEmits<{
  (e: "finishTodo", id: number): void;
  (e: "deleteTodo", id: number): void;
}>();
</script>

<template>
  <section class="max-w-md w-full mx-auto flex flex-col">
    <h2>Úkoly</h2>
    <ul class="mt-4 flex flex-col items-center gap-4">
      <li v-for="todo in todos" :key="todo.id" class="w-full max-w-md">
        <Todo
          :todo="todo"
          @finish-todo="emit('finishTodo', $event)"
          @delete-todo="emit('deleteTodo', $event)"
        />
      </li>
    </ul>
  </section>
</template>
