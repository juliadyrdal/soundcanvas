<template>
    <div>
        <!-- Overlay -->
        <div v-if="isEditingCopy" @click="stopEditingCopy" class="dark-overlay"></div>
        <!-- End Overlay -->

        <!-- Copy section -->
        <section :style="{ backgroundColor: currentComponent.styles.backgroundColor }" class="section">

            <!-- Utility navigation -->
            <UtilityNav>
                <UiButtonRemoveSection :currentComponent="currentComponent" />
                <UiButtonEditBackground :currentComponent="currentComponent" />
            </UtilityNav>
            <!-- End Utility navigation -->

            <!-- Content container -->
            <div class="content-container">

                <!-- Edit text color -->
                <div v-if="isEditingCopy" class="copy-nav">
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
                <!-- End Edit text color -->
                
                <!-- Text content -->
                <h1 class="heading" :style="{ color: currentComponent.styles.headingColor }">{{ currentComponent.content.heading }}</h1>
                <div v-if="!isEditingCopy" @click="editCopy" class="copy-container">
                    <p class="copy" :style="{ color: currentComponent.styles.copyColor }">{{ currentComponent.content.copy }}</p>
                </div>
                <textarea
                    v-else
                    v-model="currentComponent.content.copy"
                    class="edit-copy-input"
                    ref="copyInput"
                    autofocus
                    :style="{ color: currentComponent.styles.headingColor }"
                    >
                </textarea>
                <!-- Text content -->

            </div>
            <!-- End Content container -->

        </section>
        <!-- End Copy section -->

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

// Edit copy state
const isEditingCopy = ref(false);

// Store copy in ref
const copyInput = ref(null);

// Open edit state
const editCopy = () => {
    isEditingCopy.value = true;
    nextTick(() => {
        copyInput.value.focus();
    });
}

// Close edit state
const stopEditingCopy = () => {
    isEditingCopy.value = false;
}
</script>

<style lang="css" scoped>
* {
    font-family: sans-serif;
    color: #333;
}

.section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 10px 16px;
    color: #333;
    box-sizing: border-box;
} 

.content-container {
    position: relative;
}

.copy-container {
    cursor: pointer;
}

.copy-nav {
    position: absolute;
    top: -40px;
    right: 0;
    z-index: 2;
}

.copy {
    column-count: 2;
    column-gap: 8rem; 
    text-align: justify; 
    line-height: 1.4;
    white-space: pre-wrap;
}

.edit-copy-input {
    position: relative;
    width: 100%;
    height: 40vh;
    border: none;
    outline: none;
    resize: none;
    z-index: 100;
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