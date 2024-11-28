<template>
    <!-- Overlay -->
    <div class="modal">

        <!-- Modal -->
        <div class="modal-content">

            <!-- Close button -->
            <UiButtonCloseSm @click="closeModal('removeSectionModal')" class="close"/>
            <!-- End Close button -->

            <!-- Modal content -->
            <div class="modal-container">
                <h2>Remove section</h2>
                <div>
                    <p>Are you sure you want to permanently delete this section?</p>
                    <button @click="handleRemoveSection" class="button">
                        <span><TrashIcon class="icon" /> Remove section</span>
                    </button>
                </div>
            </div>
            <!-- End Modal content -->
             
        </div>
        <!-- End Modal -->

    </div>
    <!-- End Overlay -->
</template>

<script setup>
// Import heroicon
import { TrashIcon } from '@heroicons/vue/24/outline';

// Import stores
import { useSectionStore } from '../stores/sectionStore.js'
import { useUiStore } from '../stores/uiStore.js'

// Access store
const sectionStore = useSectionStore()
const uiStore = useUiStore()

// Deconstruct actions
const { closeModal } = uiStore 
const { removeSectionById } = sectionStore

// Declare props
const props = defineProps(['currentComponent']);

// Remove section from addedSections array
const handleRemoveSection = () => {
    removeSectionById(props.currentComponent.id);
    closeModal('removeSectionModal');
}

</script>

<style lang="css" scoped>
* {
    font-family: sans-serif;
    color: #333;
}

.modal {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}

.modal-content {
    margin-top: 30vh;
    width: 400px;
    height: 220px;
    background-color: #fff;
    position: relative;
}

.close {
    position: absolute;
    top: 7px;
    right: 7px;
}

.modal-container {
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.modal-container h2 {
    margin: 0;
}

.modal-container p {
    margin: 0;
}

.modal-container .button {
    margin-top: 1.5rem;
}

.button {
    background-color: #f5f5f5;
    border: 2px solid #791C40;
    padding: 7px 20px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: medium;
}

.button span {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    color: #791C40;
}

.button p {
    margin: 0;
}

.icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 6px;
    color: #791C40;
}
</style>