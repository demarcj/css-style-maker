<template>
  <dialog-content
    :message="message"
    @close="$emit('close')"
  >
    <input 
      id="txt" 
      type="text" 
      v-model="user_input"
      @keyup="check_input"
    >
    <dialog-button
      :show_apply="true"
      @update="update"
      @close="$emit('close')"
    ></dialog-button>
  </dialog-content>
</template>
<script>
import DialogContent from 'src/components/ui/DialogContent.vue';
export default {
  components: { DialogContent },
  mounted() {
    document.querySelector('#txt').focus();
  },
  props: ['message'],
  data() {
    return {
      user_input: ``,
    }
  },
  methods: {
    update(){
      if(this.user_input === ''){
        return;
      }
      this.$emit('update', this.user_input)
    },
    check_input(event){
      if(event.keyCode === 13){
        return this.update();
      }
    }
  }
}
</script>