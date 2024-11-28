<template>
    <!-- Modal overlay -->
    <div class="modal">

        <!-- Modal -->
        <div class="modal-content">

            <!-- Close button -->
            <UiButtonCloseSm @click="closeModal('spotifyModal')" class="close"/>
            <!-- End Close button -->

            <!-- Modal content container -->
            <div class="modal-container">
                <h2>Edit your Spotify URI</h2>
                <div>
                    <p>Paste your Spotify ID below</p>
                    <input 
                    v-model="spotifyId"
                    />
                    <button @click="handleUpdateSpotifyId" class="button">Update Spotify ID</button>
                </div>
            </div>
            <!-- End Modal content container -->

        </div>
        <!-- End Modal -->

    </div>
    <!-- End Modal overlay -->
</template>

<script setup>
// Import stores
import { useSectionStore } from '../stores/sectionStore.js'
import { useUiStore } from '../stores/uiStore.js'

// Access store
const sectionStore = useSectionStore()
const uiStore = useUiStore()

// Deconstruct actions
const { closeModal, spotifyUiUpdate } = uiStore 
const { updateSpotifyId } = sectionStore

// Declare props
const props = defineProps(['currentComponent']);

// Store Spotify ID
const spotifyId = ref(props.currentComponent.media.spotifyUri)

// Update Spotify ID
function handleUpdateSpotifyId() {
    updateSpotifyId(spotifyId.value, props.currentComponent.id)
    spotifyUiUpdate()
    closeModal('spotifyModal')
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