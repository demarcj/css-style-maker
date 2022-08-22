<template>
<div class="backdrop" @click="close"></div>
  <div class="dialog-container">
    <dialog open>
      <div class="message">{{ message }}</div>
      <div class="button-group">
        <button class="confirm-btn" @click="close(true)">Apply</button>
        <button class="close-btn" @click="close(false)">Close</button>
      </div>
    </dialog>
  </div>
</template>
<script>
export default {
  props: ['message'],
  methods: {
    close(chose) {
      this.$emit('close', chose);
    },
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
  .dialog-container {
    position: absolute;
    inset: 0;
    z-index: 1;
    display: grid;
    place-items: center center;
  }
  dialog{
    margin: auto;
    padding: 30px;
    background-color: var(--background);
    color: white;
  }
  .backdrop{
    position: fixed;
    inset: 0;
    z-index: 0;
    background-color: black;
    opacity: .5;
  }
  .message{
    padding-bottom: 30px;
  }
</style>