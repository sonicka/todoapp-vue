<script setup lang="ts">
import TodosHeader from "./components/TodosHeader.vue";
import TodosList from "./components/TodosList.vue";
import Modal from "./components/Modal.vue";
import ModalOptions from "./components/ModalOptions.vue";
import ModalForm from "./components/ModalForm.vue";
import ModalTemplates from "./components/ModalTemplates.vue";
import { useTodos } from "./composables/useTodos.ts";
import { useModal } from "./composables/useModal.ts";
import { MODAL_STATE } from "./shared/constants.ts";

const {
  shownTodos,
  totalTodosNumber,
  finishedTodosNumber,
  unfinishedShownOnly,
  createNewTodo,
  showUnfinishedOnly,
  finishTodo,
  deleteTodo,
} = useTodos();

const {
  todoTitle,
  priority,
  modalTitle,
  modalState,
  isOpen,
  open,
  goToForm,
  goToTemplates,
  applyTemplate,
  save,
  goBack,
  close,
} = useModal(createNewTodo);
</script>

<template>
  <div class="flex justify-center flex-col gap-8 py-4">
    <TodosHeader
      :total-todos-number="totalTodosNumber"
      :finished-todos-number="finishedTodosNumber"
      :unfinished-shown-only="unfinishedShownOnly"
      @add-new-todo="open"
      @show-unfinished-only="showUnfinishedOnly"
    />
    <TodosList
      :todos="shownTodos"
      @finish-todo="finishTodo"
      @delete-todo="deleteTodo"
    />
    <Modal v-if="isOpen" :title="modalTitle" @close="close">
      <ModalOptions
        v-if="modalState === MODAL_STATE.startingOptions"
        @go-to-form="goToForm"
        @go-to-templates="goToTemplates"
        @cancel="close"
      />
      <ModalForm
        v-else-if="modalState === MODAL_STATE.form"
        v-model:title="todoTitle"
        v-model:priority="priority"
        @save="save"
        @cancel="close"
      />
      <ModalTemplates
        v-else-if="modalState === MODAL_STATE.templates"
        @apply="applyTemplate"
        @back="goBack"
        @close="close"
      />
    </Modal>
  </div>
</template>
