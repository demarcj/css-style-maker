<template>
  <div class="button-group">
    <button 
      class="confirm-btn" 
      v-if="show_apply" 
      @click="$emit('update')"
    >
      Apply
    </button>
    <button class="close-btn" @click="$emit('close')">Close</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    show_apply: Boolean
  }
})
</script>
<style scoped>
  .confirm-btn{
    background-color: var(--secondary);
  }
  .close-btn{
    background-color: red;
  }
  .button-group{
    display: flex;
    justify-content: right;
    gap: 15px;
    margin-top: 15px;
  }
</style>