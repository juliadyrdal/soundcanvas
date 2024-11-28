<template>
    <!-- Switch view button -->
    <button @click="handleSwitchView">
        <span v-if="!isCodeView"><CodeBracketIcon class="icon" /> <p>Switch view</p></span>
        <span v-if="isCodeView"><PhotoIcon class="icon" /> Switch view</span>
    </button>
    <!-- End Switch view button -->
</template>

<script setup>
// Import store
import { useUiStore } from '../stores/uiStore.js'

// Import heroicon
import { PhotoIcon, CodeBracketIcon } from '@heroicons/vue/24/outline';

// Access store
const uiStore = useUiStore()
// Make reactive
const { isCodeView } = storeToRefs(uiStore)

// Destructure action
const { switchView } = uiStore

// Switch view
const handleSwitchView = () => {
switchView()
}
</script>

<style lang="css" scoped>
button {
    background-color: #fff;
    border: 2px solid #333;
    padding: 7px 20px;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: medium;
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
</style>