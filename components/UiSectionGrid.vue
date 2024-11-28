<template>
    <div>
        <div @mouseover="hoverStates[section.key] = true" @mouseleave="hoverStates[section.key] = false" class="image-container" :style="{ backgroundImage: 'url(' + section.thumbnail + ')' }">
            <transition name="fade">
                <div v-if="hoverStates[section.key]" class="overlay"></div>
            </transition>
            <transition name="fade">
                <button v-if="hoverStates[section.key]" @click="handleAddSection(section.key)">
                    <span><SparklesIcon class="icon" /> <p>Add section</p></span>
                </button>
            </transition>   
        </div>
        <div class="details">
            <h3>{{ section.displayName }}</h3>
            <p>{{ section.description }}</p>
        </div>
    </div>
</template>

<script setup>
// Import heroicon
import { SparklesIcon } from '@heroicons/vue/24/outline';

// Import stores
import { useSectionStore } from '../stores/sectionStore.js'
import { useUiStore } from '../stores/uiStore.js'

// Access store
const sectionStore = useSectionStore()
const uiStore = useUiStore()

// Make reactive
const { categories, sections, addedSections } = storeToRefs(sectionStore)

// Deconstruct
const { addSectionByKey, heroSections } = sectionStore
const { closeModal } = uiStore

// Declare props
const props = defineProps(['section'])

// Handle add section
const handleAddSection = (key) => {
    addSectionByKey(key)
    closeModal('sectionModal')
}

// Hover states object
const hoverStates = reactive({});

// Initialize hoverStates for each section
sections.value.forEach((section) => {
  hoverStates[section.key] = false;
});
</script>

<style lang="css" scoped>
.image-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 55vh;
    background-size: cover;
    background-repeat: no-repeat;
    border: 1px solid rgba(0, 0, 0, 0.2);
}

.overlay {
    height: 55vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

button {
    background-color: #fff;
    border: 2px solid #333;
    padding: 20px 34px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: medium;
    z-index: 100;
}

button span {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
}

button p {
    margin: 0;
}

.icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 6px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.details {
    margin-top: 1.8rem;
    margin-bottom: 2rem;
}

.details h3 {
    margin: 0;
    padding-bottom: 5px;
    font-size: 1.4rem;
    font-weight: 200;
}

.details p {
    margin: 0;
}
</style>