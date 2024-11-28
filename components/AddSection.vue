<template>
    <div>
        <section class="section">
            <!-- Add section button -->
            <UiButtonChooseSection />
            <!-- End Add section button -->

            <!-- Add section modal -->
            <Teleport to="body">
                <div v-if="modals.sectionModal" class="modal">
                    <div class="overlay"></div>
                    <div class="modal-content">
                        <button @click="closeModal('sectionModal')" class="btn-close">
                            <span><XMarkIcon class="icon" /> <p>Close</p></span>
                        </button>
                    </div>

                    <!-- Modal content -->
                    <ChooseSection />
                    <!-- End Modal content -->
                     
                </div>
            </Teleport>
            <!-- End Add section modal -->
        </section>
    </div>
</template>

<script setup>
// Import heroicons
import { XMarkIcon } from '@heroicons/vue/24/outline';

// Import store
import { useUiStore } from '../stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Make reactive
const { modals } = storeToRefs(uiStore)

// Destructure actions
const { closeModal } = uiStore


</script>

<style lang="css" scoped>
* {
    font-family: sans-serif;
    color: #333;
}

.section {
    height: 25vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

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

.modal {
    display: flex;
    flex-direction: column;
}

.modal-content {
    position: relative;
    z-index: 100;
    background-color: #fff;
    font-size: 1.4rem;
    height: 10vh;
}

.btn-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #333;
    padding: 10px 34px;
    font-size: 0.9rem;
    font-weight: medium;
}

.btn-close span {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 2px;
}

.btn-close p {
    margin: 0;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
}
</style>