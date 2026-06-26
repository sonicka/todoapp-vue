import { computed, ref } from "vue";
import { TodosData } from "../data/todos";
import { STATUS } from "../shared/constants";
import { sortTodos } from "../shared/utils";
import { type Priority, type Todo } from "../shared/types";

const allTodos = ref<Todo[]>(TodosData);
const unfinishedShownOnly = ref<boolean>(false);

export function useTodos() {
  const shownTodos = computed(() => {
    const todos = unfinishedShownOnly.value
      ? allTodos.value.filter((todo) => todo.status !== STATUS.finished)
      : [...allTodos.value];

    return todos.sort(sortTodos);
  });

  const totalTodosNumber = computed(() => allTodos.value.length);

  const finishedTodosNumber = computed(
    () =>
      allTodos.value.filter((todo) => todo.status === STATUS.finished).length,
  );

  const createNewTodo = (title: string, priority: Priority) => {
    const newTodo = {
      id:
        (allTodos.value.length > 0
          ? Math.max(...allTodos.value.map((t) => t.id))
          : 0) + 1,
      title: title,
      status: STATUS.planned,
      priority: priority,
    };
    allTodos.value = [...allTodos.value, newTodo];
  };

  const finishTodo = (id: number) => {
    allTodos.value = allTodos.value.map((todo) =>
      todo.id === id ? { ...todo, status: STATUS.finished } : todo,
    );
  };

  const deleteTodo = (id: number) => {
    allTodos.value = allTodos.value.filter((todo) => todo.id !== id);
  };

  const showUnfinishedOnly = () => {
    unfinishedShownOnly.value = !unfinishedShownOnly.value;
  };

  return {
    shownTodos,
    totalTodosNumber,
    finishedTodosNumber,
    unfinishedShownOnly,
    showUnfinishedOnly,
    createNewTodo,
    finishTodo,
    deleteTodo,
  };
}
