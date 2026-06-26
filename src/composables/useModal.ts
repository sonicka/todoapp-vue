import { computed, ref } from "vue";
import { MODAL_STATE, PRIORITY } from "../shared/constants";
import { type ModalState, type Priority, type Template } from "../shared/types";

const INITIAL_TITLE = "";
const INITIAL_PRIORITY: Priority = PRIORITY.normal;
const INITIAL_MODAL_STATE: ModalState = MODAL_STATE.startingOptions;

const ModalTitle: Record<ModalState, string> = {
  startingOptions: "Vytvořit nový úkol",
  form: "Podrobnosti úkolu",
  templates: "Vyberte šablonu",
};

export function useModal(addTodo: (title: string, priority: Priority) => void) {
  const isOpen = ref(false);
  const modalState = ref<ModalState>(INITIAL_MODAL_STATE);
  const todoTitle = ref<string>(INITIAL_TITLE);
  const priority = ref<Priority>(INITIAL_PRIORITY);

  const resetForm = () => {
    todoTitle.value = INITIAL_TITLE;
    priority.value = INITIAL_PRIORITY;
  };

  const open = () => {
    resetForm();
    modalState.value = INITIAL_MODAL_STATE;
    isOpen.value = true;
  };

  const goToForm = () => (modalState.value = MODAL_STATE.form);
  const goToTemplates = () => (modalState.value = MODAL_STATE.templates);
  const goBack = () => (modalState.value = INITIAL_MODAL_STATE);

  const applyTemplate = (template: Template) => {
    todoTitle.value = template.defaults.title;
    priority.value = template.defaults.priority;
    modalState.value = MODAL_STATE.form;
  };

  const save = () => {
    addTodo(todoTitle.value, priority.value);
    close();
  };

  const close = () => {
    resetForm();
    modalState.value = INITIAL_MODAL_STATE;
    isOpen.value = false;
  };

  const titleOfModal = computed(() => ModalTitle[modalState.value]);

  return {
    todoTitle,
    priority,
    modalTitle: titleOfModal.value,
    modalState,
    isOpen,
    open,
    goToForm,
    goToTemplates,
    applyTemplate,
    save,
    goBack,
    close,
  };
}
