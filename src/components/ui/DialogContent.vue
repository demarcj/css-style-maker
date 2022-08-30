<template>
  <div class="dialog-container">
    <div class="backdrop" @click="$emit('close')"></div>
    <dialog open>
      <div class="message">{{ message }}</div>
      <slot></slot>
    </dialog>
  </div>
</template>
<script>
export default {
  props: ['message']
}
</script>
<style>
  .dialog-container{
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
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