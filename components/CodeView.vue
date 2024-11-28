<template>
    <div>
        <!-- Empty state -->
        <div v-if="addedSections.length === 0" class="cta">
            <p>Your code will appear here when you add sections to your website.</p>
        </div>
        <!-- End Empty state -->

        <!-- Display raw HTML -->
        <div v-for="section in addedSections" :key="section.componentName">
          <pre><code v-html="formatCode(section.html)"></code></pre>
        </div>
        <!-- End Display raw HTML -->
  
        <!-- Display raw CSS -->
        <div v-for="section in addedSections" :key="section.componentName">
          <pre><code v-html="formatCode(section.css)"></code></pre>
        </div>
        <!-- End Display raw CSS -->
    </div>
</template>

<script setup>
// Import stores
import { useSectionStore } from '../stores/sectionStore.js'

// Access store
const sectionStore = useSectionStore()

// Make reactive
const { addedSections } = storeToRefs(sectionStore)

function formatCode(code) {
    return code
      .replace(/</g, '&lt;') // Escape <
      .replace(/>/g, '&gt;') // Escape >
      .replace(/"/g, '&quot;') // Escape "
      .replace(/'/g, '&#39;') // Escape '
      .replace(/\n/g, '<br>') // Replace newlines with <br>
      .replace(/\s/g, '&nbsp;'); // Replace spaces with &nbsp;
}
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

pre {
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    white-space: pre-wrap; 
}
  
code {
    font-family: 'Courier New', Courier, monospace;
    color: #333;
}
</style>