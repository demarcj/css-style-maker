<template>
  <div class="button-group">
    <button class="confirm-btn" v-if="show_apply" @click="update">Apply</button>
    <button class="close-btn" @click="close">Close</button>
  </div>
</template>
<script>
export default {
  props: ['show_apply'],
  methods: {
    update() {
      this.$emit('update');
    },
    close() {
      this.$emit('close');
    }
  }
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
  }
</style>