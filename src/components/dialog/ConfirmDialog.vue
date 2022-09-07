<template>
  <dialog-content
    :message="message"
    @close="$emit('close')"
  >
    <dialog-button
      :show_apply="true"
      @update="$emit('update')"
      @close="$emit('close')"
    ></dialog-button>
  </dialog-content>
</template>
<script>
export default {
  props: ['message']
}
</script>