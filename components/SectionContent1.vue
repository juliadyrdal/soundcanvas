<template>
    <div>
        <button @click="handleRemoveSection">Remove section</button>
        <div class="utils-navbar">
            <button @click="openBackgroundModal">
                <span>Edit background</span>
            </button>
            <Teleport to="body">
                <div v-if="isBackgroundModalOpen">
                    <EditBackgroundModal @changeBackground="changeBackgroundValue" />
                </div>
            </Teleport>
        </div>

        <!-- Dark overlay when editing -->
        <div v-if="isEditingHeading || isEditingText" class="dark-overlay"></div>
        <section :style="{ backgroundColor: backgroundValue }" class="section">
            <div class="heading">
                <p v-if="!isEditingHeading" @click="editHeading">{{ heroHeading }}</p>
                <textarea
                    v-else
                    v-model="heroHeading"
                    @blur="stopEditingHeading"
                    @keyup.enter="stopEditingHeading"
                    ref="headingTextarea"
                    class="heading-textarea"
                    autofocus
                ></textarea>
            </div>

            <div class="content-container">
                <div v-if="!isEditingText" @click="editText" class="text-container">
                    <p>{{ heroText }}</p>
                </div>
                <textarea
                    v-else
                    v-model="heroText"
                    @blur="stopEditingText"
                    @keyup.enter="stopEditingText"
                    ref="contentTextarea"
                    class="content-textarea"
                    autofocus
                ></textarea>
            </div>
        </section>
    </div>
</template> 

<script setup>
import { ref, nextTick } from 'vue';

// Import section store
import { useSectionStore } from '../stores/sectionStore.js'
// Access store
const sectionStore = useSectionStore()
// Make reactive
const { sections, addedSections } = storeToRefs(sectionStore)

// Deconstruct actions
const { removeSectionByKey } = sectionStore

// Component key
const currentComponentKey = 4;

// Handle remove section
const handleRemoveSection = () => {
    removeSectionByKey(currentComponentKey)
}

// Edit heading
const heroHeading = ref('Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
const isEditingHeading = ref(false);
const headingTextarea = ref(null);

const editHeading = () => {
    isEditingHeading.value = true;
    nextTick(() => {
        headingTextarea.value.focus();
    });
}

const stopEditingHeading = () => {
    isEditingHeading.value = false;
}

// Edit text
const heroText = ref('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
const isEditingText = ref(false);
const contentTextarea = ref(null);

const editText = () => {
    isEditingText.value = true;
    nextTick(() => {
        contentTextarea.value.focus();
    });
}

const stopEditingText = () => {
    isEditingText.value = false;
}

// Edit background color
const isBackgroundModalOpen = ref(false);
const backgroundValue = ref('#fff');

const openBackgroundModal = () => {
    isBackgroundModalOpen.value = true;
}

const changeBackgroundValue = (newValue) => {
    backgroundValue.value = newValue;
    isBackgroundModalOpen.value = false;
}

</script>

<style lang="css" scoped>
.section {
    padding: 10px 40px;
    color: #333;
}

.heading {
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    font-size: 36px;
}

.heading p {
    cursor: pointer;
}

.heading p, .heading textarea {
    width: 500px;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 25px;
    padding: 10px;
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 36px;
    border: none;
    outline: none;
    resize: none;
}

.content-container {
    display: flex;
    justify-content: center;
}

.text-container, .content-container textarea {
    width: 500px;
    text-align: center;
}

.text-container p {
    cursor: pointer;
}

.text-container p, .content-container textarea {
    margin-top: 0;
    padding: 10px;
    font-family: sans-serif;
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

textarea {
    position: relative;
    z-index: 2;
    background-color: #fff;
}
</style>
