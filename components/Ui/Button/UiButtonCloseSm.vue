<template>
    <!-- Close button -->
    <button class="btn-close">
        <span><XMarkIcon class="icon" /></span>
    </button>
    <!-- End Close button -->
</template>

<script setup>
// Import hero icon
import { XMarkIcon } from '@heroicons/vue/24/outline';
</script>

<style lang="css" scoped>
.btn-close {
    cursor: pointer;
    background-color: #fff;
    border: none;
    padding: 10px 10px;
    font-size: 0.9rem;
    font-weight: medium;
}

.icon {
    width: 1.4rem;
    height: 1.4rem;
}
</style>