<template>
    <!-- Choose section button -->
    <button class="btn" v-if="!modals.sectionModal" @click="handleOpenModal">
        <SquaresPlusIcon class="icon" />
        <p>Add a new section</p>
    </button>
    <!-- End Choose section button -->
</template>

<script setup>
// Import heroicons
import { SquaresPlusIcon } from '@heroicons/vue/24/outline';

// Import store
import { useUiStore } from '../stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Make reactive
const { modals } = storeToRefs(uiStore)

// Destructure actions
const { openModal } = uiStore

// Open modal and auto scroll to top
const handleOpenModal = () => {
    openModal('sectionModal');
    window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
}
</script>

<style lang="css" scoped>
.btn {
    display: flex;
    gap: 6px;
    border: 2px solid #333;
    padding: 1rem 3rem;
    cursor: pointer;
    background-color: white; 
    box-sizing: border-box;
    font-size: 16px;
}

.icon {
    width: 24px;
    color: #333;
}
</style>