<template>
    <!-- Utility navbar -->
    <div ref="el" :style="style" class="utils-navbar" @mousedown="startDragging">

        <!-- Slot for utility buttons -->
        <slot />
        <!-- End Slot for utility buttons -->

    </div>
    <!-- End Utility navbar -->
</template>

<script setup>
// Import draggable composable
import { useDraggable } from '../composables/useDraggable.js';

// Store navbar element in ref
const el = ref(null)

// Access composable
const { style, startDragging } = useDraggable(el);

// Dragging state
const isDragging = ref(false);

// Change dragging state
const setDragging = (value) => {
  isDragging.value = value;
};

// Provide dragging state and method to child components
provide('isDragging', isDragging);
provide('setDragging', setDragging);
</script>

<style lang="css" scoped>
.utils-navbar {
    display: flex;
    gap: 8px;
    position: absolute;
    z-index: 100;
    cursor: move;
    border: #333 2px dashed;
    background-color: #fff;
    padding: 0.5rem;
}

.utils-navbar button {
    background-color: #f5f5f5;
    border: 0px solid #333;
    padding: 5px 12px;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
}

.btn-danger {
    color: #791C40;
}

.icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 6px;
}
</style>
