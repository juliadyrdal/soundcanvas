<template>
    <div>

        <!-- Media section -->
        <section :style="{ backgroundColor: currentComponent.styles.backgroundColor }" class="section">

            <!-- Utility navigation -->
            <UtilityNav>
                <UiButtonRemoveSection :currentComponent="currentComponent" />
                <UiButtonEditPhoto :currentComponent="currentComponent" />
                <UiButtonEditBackground :currentComponent="currentComponent" />
                <UiButtonEditSpotifyArtist :currentComponent="currentComponent" />
            </UtilityNav>
            <!-- End Utility Navigation -->

            <!-- Image container -->
            <div :style="{ backgroundImage: 'url(' + currentComponent.styles.image + ')' }" class="image-container"></div>
            <!-- End Image container -->

            <!-- Spotify container -->
            <div @mouseover="hoverState = true" @mouseleave="hoverState = false" class="media-container">
                <transition name="fade">
                    <div v-if="hoverState && !hasUpdatedSpotify" class="media-overlay">
                        <button @click="openModal('spotifyModal')" class="btn-media">
                            <MusicalNoteIcon class="icon" />
                            <p>Add your Spotify URI</p>
                        </button>
                    </div>
                </transition>

                <!-- Spotify iframe -->
                <iframe
                    :src="`https://open.spotify.com/embed/artist/${currentComponent.media.spotifyUri}`" 
                    width="400" 
                    height="400" 
                    frameborder="0" 
                    allowtransparency="true" 
                    allow="encrypted-media"
                ></iframe>
                <!-- End Spotify iframe -->

            </div>
            <!-- End Spotify container -->

        </section>
        <!-- End Media section -->
    </div>
</template>

<script setup>
// Import heroicon
import { MusicalNoteIcon } from '@heroicons/vue/24/outline';

// Declare props
const props = defineProps(['currentComponent'])

// Import section store
import { useUiStore } from '../stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Make reactive
const { hasUpdatedSpotify } = storeToRefs(uiStore)

// Deconstruct actions
const { openModal } = uiStore 

// Current component
const currentComponent = props.currentComponent;

// Store hover state
const hoverState = ref(false);

</script>

<style lang="css" scoped>
.section {
    position: relative;
    display: flex;
    height: 100vh;
    padding: 10px 16px;
    color: #333;
    box-sizing: border-box;
}

.image-container {
    align-self: center;
    width: 65%;
    height: 80%;
    background-size: cover;
}

.media-container {
    position: relative;
    align-self: center;
    justify-self: start;
    margin-left: -10rem;
}

.media-overlay {
    position: absolute;
    width: 100%;
    height: 99%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    z-index: 50;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.btn-media {
    display: flex;
    gap: 6px;
    border: 2px solid #333;
    padding: 1rem 2rem;
    cursor: pointer;
    background-color: white; 
    box-sizing: border-box;
    font-size: 16px;
}

.icon {
    width: 24px;
    color: #333;
    margin-right: 4px;
}

/* Responsive styles */
@media (min-width: 768px) {
  .section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (min-width: 1024px) {
  .section {
    padding-left: 80px;
    padding-right: 80px;
  }
}

@media (min-width: 1440px) {
  .section {
    padding-left: 120px;
    padding-right: 120px;
  }
}
</style>