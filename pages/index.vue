<template>
    <div>
    
      <!-- Code view -->
      <div v-if="isCodeView">
        <CodeView />
      </div>
      <!-- End Code view -->
  
      <!-- Design view -->
      <div v-else>
        <div v-for="section in addedSections" :key="section.id">
          <component :currentComponent="section" :is="componentMap[section.componentName]"></component>
        </div>
      </div>
      <!-- End Design view -->
  
      <!-- Empty state -->
      <div v-if="addedSections.length === 0 && !isCodeView" class="cta">
        <p>
          Add sections like your music, bio, and upcoming events to create your personalized site and share your sound with the world.
        </p>
      </div>
      <!-- End Empty state -->

      <!-- Add section button -->
      <AddSection />
      <!-- End Add section button -->

    </div>
  </template>
  
  <script setup>
  // Import components
  import SectionHero from '~/components/SectionHero.vue';
  import SectionHero2 from '~/components/SectionHero2.vue';
  import SectionHero3 from '~/components/SectionHero3.vue';
  import SectionCopy1 from '~/components/SectionCopy1.vue';
  import SectionCopy2 from '~/components/SectionCopy2.vue';
  import SectionMedia1 from '~/components/SectionMedia1.vue';

  import { useSectionStore } from '../stores/sectionStore.js'
  import { useUiStore } from '../stores/uiStore.js'

  // Access store
  const sectionStore = useSectionStore()
  const uiStore = useUiStore()

  // Make reactive
  const { addedSections } = storeToRefs(sectionStore)
  const { isCodeView } = storeToRefs(uiStore)

  // Map string names to actual components
  const componentMap = {
  SectionHero,
  SectionHero2,
  SectionHero3,
  SectionCopy1,
  SectionCopy2,
  SectionMedia1,
 };
 </script>
  
  <style lang="css" scoped>
  .cta {
    padding: 10px 16px;
    color: #333;
    box-sizing: border-box;
  }

  .cta p {
    font-size: 2rem;
    text-align: center;
    padding-top: 2rem;
  }

  /* Responsive styles */
  @media (min-width: 768px) {
    .cta {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media (min-width: 1024px) {
    .cta {
      padding-left: 80px;
      padding-right: 80px;
    }
  }

  @media (min-width: 1440px) {
    .cta {
      padding-left: 120px;
      padding-right: 120px;
    }
  }
  </style>
  