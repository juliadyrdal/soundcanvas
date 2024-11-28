import { ref } from 'vue';
import { useDraggable as vueUseDraggable } from '@vueuse/core';

export function useDraggable(el) {
  const isDragging = ref(false);
  const initialPosition = ref({ x: 0, y: 0 });
  const { x, y, style } = vueUseDraggable(el, {
    onStart: () => {
      isDragging.value = true;
      initialPosition.value = { x: x.value, y: y.value };
    },
    onEnd: () => {
      if (Math.abs(initialPosition.value.x - x.value) > 3 || Math.abs(initialPosition.value.y - y.value) > 3) {
        isDragging.value = true;
      } else {
        isDragging.value = false;
      }
    },
  });

  const resetDraggingFlag = () => {
    isDragging.value = false;
  };

  return { isDragging, style, resetDraggingFlag };
}
