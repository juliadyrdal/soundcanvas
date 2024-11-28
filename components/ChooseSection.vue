<template>
    <div>
        <!-- Filter sections -->
        <div class="filter-section">
            <div class="filter-flex">
                <AdjustmentsHorizontalIcon class="icon" />
                <p>Filter by</p>
            </div>
            <div class="filter">
                <button @click="filterBy('heroFilter')" class="btn-filter">
                    <span>
                        <XMarkIcon v-if="filters.heroFilter" class="icon" />
                        <p>Hero</p>
                    </span>
                </button>
                <button @click="filterBy('copyFilter')" class="btn-filter">
                    <span>
                        <XMarkIcon v-if="filters.copyFilter" class="icon" />
                        <p>Copy</p>
                    </span>
                </button>
                <button @click="filterBy('mediaFilter')" class="btn-filter">
                    <span>
                        <XMarkIcon v-if="filters.mediaFilter" class="icon" />
                        <p>Media</p>
                    </span>
                </button>
            </div>
        </div>
        <!-- End Filter sections -->

        <!-- Sections -->
        <div v-if="filters.heroFilter || allFiltersInactive" class="sections">
            <h2>Hero</h2>
            <div class="section-grid">
                <UiSectionGrid v-for="section in heroSections" :section="section" :key="section.key" />
            </div> 
        </div>
        <div v-if="filters.copyFilter || allFiltersInactive" class="sections">
            <h2>Copy</h2>
            <div class="section-grid">
                <UiSectionGrid v-for="section in copySections" :section="section" :key="section.key" />
            </div> 
        </div>
        <div v-if="filters.mediaFilter || allFiltersInactive" class="sections">
            <h2>Media</h2>
            <div class="section-grid">
                <UiSectionGrid v-for="section in mediaSections" :section="section" :key="section.key" />
            </div> 
        </div>
        <!-- End Sections -->
    </div>
</template>

<script setup>
// Import heroicons
import { XMarkIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/24/outline';

// Import stores
import { useSectionStore } from '../stores/sectionStore.js'
import { useUiStore } from '../stores/uiStore.js'

// Access store
const sectionStore = useSectionStore()
const uiStore = useUiStore()

// Make reactive
const { filters, allFiltersInactive } = storeToRefs(uiStore)

// Deconstruct
const { heroSections, copySections, mediaSections } = sectionStore
const { filterBy } = uiStore


</script>

<style lang="css" scoped>
* {
    font-family: sans-serif;
    color: #333;
}

.filter-section {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 10px 16px;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 120;
}

.filter-section p {
    font-size: 14px;
    font-weight: 600;
}

.filter-flex {
    display: flex;
    align-items: center;
}

.filter {
    position: relative;
    display: flex;
    gap: 1rem;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 120;
}

.btn-filter {
    border: 1px solid #333;
    padding: 3px 10px;
    background-color: #fff;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
}

.btn-filter span {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

.btn-filter p {
    margin: 0;
}

.icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 6px;
}

.sections {
    position: relative;
    z-index: 120;
    background-color: #fff;
    padding: 10px 16px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
}

.section-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    grid-auto-flow: dense
}

/* Responsive styles */
@media (min-width: 768px) {
  .sections, .filter-section {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (min-width: 1024px) {
  .sections, .filter-section {
    padding-left: 80px;
    padding-right: 80px;
  }
}

@media (min-width: 1440px) {
  .sections, .filter-section {
    padding-left: 120px;
    padding-right: 120px;
  }
}
</style>
