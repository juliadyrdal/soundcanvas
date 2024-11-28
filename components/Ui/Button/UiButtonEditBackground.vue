<template>
    <div>
        <!-- Edit background button -->
        <button @mousedown="() => setDragging(false)" @click="openModalIfNotDragging" class="button">
            <PaintBrushIcon class="icon" />
            Edit background
        </button>
        <!-- End Edit background button -->

        <!-- Edit background modal -->
        <Teleport to="body">
            <div v-if="modals.backgroundModal">
                <EditBackgroundModal :currentComponent="props.currentComponent" />
            </div>
        </Teleport>
        <!-- End Edit background modal -->
    </div>
</template>

<script setup>
// Import heroicon
import { PaintBrushIcon } from '@heroicons/vue/24/outline';

// Import store
import { useUiStore } from '../stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Make reactive
const { modals } = storeToRefs(uiStore)

// Deconstruct actions
const { openModal } = uiStore 

// Declare props
const props = defineProps(['currentComponent']);

// Inject dragging state and setter from UtilityNav
const isDragging = inject('isDragging');
const setDragging = inject('setDragging');

// Open modal if clicking, not dragging
const openModalIfNotDragging = () => {
    if (!isDragging.value) {
    openModal('backgroundModal');
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

.icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 6px;
}
</style>