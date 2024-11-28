<template>
    <div>
        <!-- Overlay -->
        <div v-if="isEditingHeading" @click="stopEditingHeading" class="dark-overlay"></div>
        <!-- End OVerlay -->

        <!-- Copy Section -->
        <section :style="{ backgroundColor: currentComponent.styles.backgroundColor }" class="section">

            <!-- Utility navigation -->
            <UtilityNav>
                <UiButtonRemoveSection :currentComponent="currentComponent" />
                <UiButtonEditPhoto :currentComponent="currentComponent" />
                <UiButtonEditBackground :currentComponent="currentComponent" />
            </UtilityNav>
            <!-- End Utility navigation -->

            <!-- Text content container -->
            <div class="heading">

                <!-- Edit heading -->
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
                <!-- End Edit heading -->

                <!-- Text content -->
                <div class="copy-container">
                    <div v-if="!isEditingHeading" @click="editHeading" class="heading-container">
                        <p :style="{ color: currentComponent.styles.headingColor }">{{ currentComponent.content.heading }}</p>
                    </div>
                    <textarea
                    v-else
                    v-model="currentComponent.content.heading "
                    class="edit-heading-input"
                    ref="headingInput"
                    autofocus
                    :style="{ color: currentComponent.styles.headingColor }"
                    >
                    </textarea>
                </div>
                <!-- End Text content -->

            </div>
            <!-- End Text content container -->

            <!-- Image container -->
            <div class="image-container" :style="{ backgroundImage: 'url(' + currentComponent.styles.image + ')' }"></div>
            <!-- End Image container -->

        </section>
        <!-- End Copy Section -->

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

// Edit heading conditional
const isEditingHeading = ref(false);

// Store text in ref
const headingInput = ref(null);

// Open edit mode
const editHeading = () => {
    isEditingHeading.value = true;
    nextTick(() => {
        headingInput.value.focus();
    });
}

// Close edit mode
const stopEditingHeading = () => {
    isEditingHeading.value = false;
}
</script>

<style lang="css" scoped>
.section {
    position: relative;
    display: flex;
    gap: 6rem;
    height: 100vh;
    padding: 10px 16px;
    color: #333;
    box-sizing: border-box;
} 

.heading {
    position: relative;
    align-self: center;
}

.heading-nav {
    position: absolute;
    top: -40px;
    right: 0;
    z-index: 2;
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

.copy-container {
    display: flex;
    justify-content: center;
    font-family: sans-serif;
}

.copy-container {
    display: flex;
    justify-content: center;
}

.heading-container, .copy-container textarea {
    width: 500px;
}

.heading-container p {
    cursor: pointer;
}

.edit-heading-input {
    position: relative;
    z-index: 2;
    background-color: #fff;
    border: none;
}

.heading-container p, .copy-container textarea {
    margin-top: 0;
    padding: 10px;
    font-family: sans-serif;
    font-weight: 600;
    line-height: 1.5;
    width: 500px;
    box-sizing: border-box;
    font-size: 18px;
    border: none;
    outline: none;
    resize: none;
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

.image-container {
    margin: 60px 0;
    margin-left: auto;
    width: 40%;
    height: auto;
    background-size: cover;
    background-position: center;
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