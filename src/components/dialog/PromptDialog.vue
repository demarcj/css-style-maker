<template>
  <dialog-content
    :message="message"
    @close="$emit('close')"
  >
    <input v-if="input_type === 'txt'" type="text" v-model="user_input">
    <dialog-button
      :show_apply="true"
      @update="update"
      @close="close"
    ></dialog-button>
  </dialog-content>
</template>
<script>
import DialogContent from '../ui/DialogContent.vue';
export default {
  components: { DialogContent },
  props: ['message', 'input_type'],
  data() {
    return {
      user_input: ``,
      font_measuring_units: [`px`, `rem`, `em`, `percentage`, `vh`, `vw`],
      selected_unit: ``
    }
  },
  methods: {
    update(){
      if(this.user_input === ''){
        return;
      }
      if(this.input_type === 'num' && this.selected_unit === ''){
        return;
      }
      this.$emit('update', this.user_input + this.selected_unit)
    }
  }
}
</script>