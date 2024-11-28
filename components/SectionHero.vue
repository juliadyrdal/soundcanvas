<template>
    <div>
      <!-- Overlay -->
      <div v-if="isEditingHeading" @click="stopEditingHeading" class="dark-overlay"></div>
      <!-- End Overlay -->
      
      <!-- Hero section -->
      <section :style="{ backgroundColor: currentComponent.styles.backgroundColor }" class="section">

        <!-- Utility navigation -->
        <UtilityNav>
            <UiButtonRemoveSection :currentComponent="currentComponent" />
            <UiButtonEditPhoto :currentComponent="currentComponent" />
        </UtilityNav>
        <!-- End Utility navigation -->
        
        <!-- Heading -->
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
           
          <h1
            v-if="!isEditingHeading"
            @click="editHeading"
            :style="{ color: currentComponent.styles.headingColor }"
          >
            {{ heroHeading }}
          </h1>
          <input
            v-else
            v-model="heroHeading"
            @keyup.enter="stopEditingHeading"
            class="edit-heading-input"
            ref="headingInput"
            autofocus
          />
        </div>
        <!-- End Heading -->
        
        <!-- Background image container -->
        <div class="image-container" :style="{ backgroundImage: 'url(' + currentComponent.styles.image + ')' }">
          <div :style="{ borderColor: currentComponent.styles.headingColor }" class="square"></div>
        </div>
        <!-- End Background image container -->

      </section>
      <!-- End Hero section -->

    </div>
  </template>
  
  <script setup>
  // Import heroicon
  import { PaintBrushIcon } from '@heroicons/vue/24/outline';
  import { ref, nextTick } from 'vue';
  
  // Declare prop
  const props = defineProps(['currentComponent']);
  
  // Import stores
  import { useUiStore } from '../stores/uiStore.js';
  
  // Access store
  const uiStore = useUiStore();
  
  // Make reactive
  const { modals } = storeToRefs(uiStore);
  
  // Deconstruct actions
  const { openModal } = uiStore;
  
  // Current component
  const currentComponent = props.currentComponent;
  
  // Store heading value in ref
  const heroHeading = ref("Your name");

  // Store edit state
  const isEditingHeading = ref(false);

  // Store heading input in ref
  const headingInput = ref(null);
  
  // Open edit state
  const editHeading = () => {
    isEditingHeading.value = true;
    nextTick(() => {
      headingInput.value.focus();
    });
  };
  
  // Close edit state
  const stopEditingHeading = () => {
    isEditingHeading.value = false;
  };
  </script>
  
  <style lang="css" scoped>
  .section {
    position: relative;
    height: 100vh;
    padding: 10px 16px;
    color: #333;
    box-sizing: border-box;
  }
  
  .image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background-size: cover;
    background-position: center;
  }
  
  .square {
    height: 87vh;
    margin: 3rem;
    border: 4px solid #fff;
    box-sizing: border-box;
  }
  
  .heading {
    position: relative;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    z-index: 2;
  }
  
  .heading h1 {
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 98px;
    font-weight: 200;
    margin: 0;
    cursor: pointer;
  }
  
  .edit-heading-input {
    width: 100%;
    height: 65px;
    text-transform: uppercase;
    font-family: sans-serif;
    font-size: 98px;
    font-weight: 200;
    padding: 35px 0;
    background-color: #fff;
    border: none;
    text-align: center;
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
  
  .heading-nav {
    position: absolute;
    top: -40px;
    right: 0;
    z-index: 2;
  }
  
  .heading-nav button {
    background-color: #f5f5f5;
    border: 0;
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
  