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
<script lang="ts">
import DialogContent from 'src/components/ui/DialogContent.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { DialogContent },
  mounted() {
    const txt = document.querySelector('#txt') as HTMLElement;
    txt.focus();
  },
  props: {
    message: String
  },
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
    check_input(event: KeyboardEvent){
      if(event.code === `Enter`){
        return this.update();
      }
    }
  }
})
</script>