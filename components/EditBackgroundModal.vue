<template>
    <!-- Overlay -->
    <div class="modal">

        <!-- Modal -->
        <div class="modal-content">

            <!-- Close button -->
            <UiButtonCloseSm @click="closeModal('backgroundModal')" class="close"/>
            <!-- End Close button -->
            
            <!-- Modal content -->
            <div class="modal-container">
                <h2>Edit background</h2>
                <div>
                    <p>Paste the URL for the photo you want to add below</p>
                    <input 
                    v-model="hexValue"
                    />
                    <button @click="addBackground" class="button">Change background</button>
                </div>
            </div>
            <!-- End Modal content -->
             
        </div>
        <!-- End Modal -->

    </div>
    <!-- End Overlay -->
</template>

<script setup>
// Import stores
import { useSectionStore } from '../stores/sectionStore.js'
import { useUiStore } from '../stores/uiStore.js'

// Access store
const sectionStore = useSectionStore()
const uiStore = useUiStore()

// Deconstruct actions
const { closeModal } = uiStore 
const { changeBackgroundValue } = sectionStore

// Declare props
const props = defineProps(['currentComponent']);

// Store hex value in ref
const hexValue = ref(props.currentComponent.styles.backgroundColor)

// Change background color
function addBackground() {
    changeBackgroundValue(hexValue.value, props.currentComponent.id)
    closeModal('backgroundModal')
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

.modal-container input {
    border: 2px solid #333;
    padding: 7px 20px; 
    font-size: 0.9rem;
    font-weight: medium;
    width: 130px;
}

.modal-container .button {
    margin-top: 1.5rem;
}

.button {
    background-color: #f5f5f5;
    border: 2px solid #333;
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
}

.button p {
    margin: 0;
}
</style>