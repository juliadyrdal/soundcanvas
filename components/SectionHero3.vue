<template>
    <div>
        <!-- Overlay -->
        <div v-if="isEditingTitle || isEditingHeading" @click="stopEditingHeading" class="dark-overlay"></div>
        <!-- End Overlay -->

        <!-- Hero section -->
        <section :style="{ backgroundColor: currentComponent.styles.backgroundColor }" class="section">

            <!-- Utility navigation -->
            <UtilityNav>
                <UiButtonRemoveSection :currentComponent="currentComponent" />
                <UiButtonEditPhoto :currentComponent="currentComponent" />
                <UiButtonEditBackground :currentComponent="currentComponent" />
            </UtilityNav>
            <!-- End Utility navigation -->

            <!-- Heading -->
            <div class="heading">
                <div v-if="isEditingHeading" class="heading-nav">
                    <button @click="openModal('textColorModal')">
                        <PaintBrushIcon class="icon" />
                        Edit text color
                    </button>
                    <Teleport to="body">
                        <div v-if="modals.textColorModal">
                            <UiModalTextColor :currentComponent="props.currentComponent" />
                        </div> 
                    </Teleport>
                </div>
                <h1 v-if="!isEditingHeading" @click="editHeading" :style="{ color: currentComponent.styles.headingColor }">{{ heroHeading }}</h1>
                <input
                v-else
                v-model="heroHeading"
                @keyup.enter="stopEditingHeading"
                class="edit-heading-input"
                ref="headingInput"
                autofocus
                :style="{ color: currentComponent.styles.headingColor }"
                />
            </div>
            <!-- End Heading -->

            <!-- Image container -->
            <div class="image-container" :style="{ backgroundImage: 'url(' + currentComponent.styles.image + ')' }">
            </div>
            <!-- End Image container -->

            <!-- Title -->
            <div class="subtitle">
                <h2 v-if="!isEditingTitle" @click="editTitle">{{ heroTitle }}</h2>
                <input 
                v-else
                v-model="heroTitle"
                @blur="stopEditingTitle"
                @keyup.enter="stopEditingTitle"
                ref="titleInput"
                autofocus
                />
            </div>
            <!-- End Title -->

        </section>
        <!-- End Hero section -->
    </div>
</template>

<script setup>
// Import heroicon
import { PaintBrushIcon } from '@heroicons/vue/24/outline';

// Declare props
const props = defineProps(['currentComponent'])

// Import section store
import { useUiStore } from '../stores/uiStore.js'

// Access store
const uiStore = useUiStore()

// Make reactive
const { modals } = storeToRefs(uiStore)

// Deconstruct actions
const { openModal } = uiStore 

// Current component
const currentComponent = props.currentComponent;

// Title ref
const heroTitle = ref("Occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.");

// Editing title state
const isEditingTitle = ref(false);

// Store title text
const titleInput = ref(null);

// Open edit title state
const editTitle = () => {
    isEditingTitle.value = true;
    nextTick(() => {
        titleInput.value.focus();
    });
}

// Close edit title state
const stopEditingTitle = () => {
    isEditingTitle.value = false;
}

// Edit heading
const heroHeading = ref("Your name");

// Edit heading state
const isEditingHeading = ref(false);

// Store heading text
const headingInput = ref(null);

// Open heading edit state
const editHeading = () => {
    isEditingHeading.value = true;
    nextTick(() => {
        headingInput.value.focus();
    });
}

// End heading edit state
const stopEditingHeading = () => {
    isEditingHeading.value = false;
}

</script>

<style lang="css" scoped>
.section {
    position: relative;
    height: 100vh;
    padding: 10px 16px;
    color: #333;
    box-sizing: border-box;
    border: 2px solid #333;
} 

.image-container {
    display: flex;
    justify-content: end;
    align-items: start;
    margin: 10px 0;
    width: auto;
    height: 75%;
    background-size: cover;
    background-position: center;
}

.heading {
    position: relative;
    margin-bottom: -75px;
}

.heading-nav {
    position: absolute;
    top: -40px;
    right: 0;
    z-index: 2;
}

.heading h1 {
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 98px;
    font-weight: 800;
    margin: 0;
    cursor: pointer;
}

.edit-heading-input {
    width: 100%;
    height: 65px;
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 98px;
    font-weight: 800;
    padding: 35px 0;
    position: relative;
    z-index: 2;
    background-color: #fff;
    border: none;
}

.dark-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
}

.heading-nav button {
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

.subtitle {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
}

.subtitle h2 {
    font-size: 16px;
    text-transform: uppercase;
    font-family: sans-serif;
    text-align: center;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

.subtitle input {
    z-index: 2;
    width: 100%;
    background-color: #fff;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
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