<template>
  <dialog-content
    :message="message"
    @close="$emit('close')"
  >
    <dialog-button
      :show_apply="false"
      @close="$emit('close')"
    ></dialog-button>
  </dialog-content>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    message: String
  }
})
</script>