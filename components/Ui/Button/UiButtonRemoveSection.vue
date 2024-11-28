<template>
    <div>
        <!-- Remove section button -->
        <button @mousedown="() => setDragging(false)" @click="handleRemoveIfNotDragging" class="button btn-danger">
            <TrashIcon class="icon" />
            Remove section
        </button>
        <!-- End Remove section button -->

        <!-- Remove section modal -->
        <Teleport to="body">
            <div v-if="modals.removeSectionModal">
                <RemoveSectionModal :currentComponent="props.currentComponent"  />
            </div>
        </Teleport>
        <!-- End Remove section modal -->
    </div>
</template>

<script setup>
// Import heroicon
import { TrashIcon } from '@heroicons/vue/24/outline';

// Import store
import { useUiStore } from '../stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Make reactive
const { modals } = storeToRefs(uiStore)

// Deconstruct actions
const { openModal } = uiStore 

const props = defineProps(['currentComponent']);

// Inject dragging state and setter from UtilityNav
const isDragging = inject('isDragging');
const setDragging = inject('setDragging');

// Open modal if clicking
const handleRemoveIfNotDragging = () => {
  if (!isDragging.value) {
    openModal('removeSectionModal');
  }
};
</script>

<style lang="css" scoped>
.button {
    background-color: #f5f5f5;
    border: 0px solid #333;
    padding: 5px 12px;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
}

.btn-danger {
    color: #791C40;
}

.icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 6px;
}
</style>