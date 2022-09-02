<template>
  <div class="button-group">
    <button 
      class="confirm-btn" 
      v-if="show_apply" 
      @click="this.$emit('update')"
    >
      Apply
    </button>
    <button class="close-btn" @click="this.$emit('close')">Close</button>
  </div>
</template>
<script>
export default {
  props: ['show_apply']
}
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