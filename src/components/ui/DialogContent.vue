<template>
  <div class="dialog-container">
    <div class="backdrop" @click="$emit('close')"></div>
    <dialog open>
      <div class="message">{{ message }}</div>
      <slot></slot>
    </dialog>
  </div>
</template>
<style>
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