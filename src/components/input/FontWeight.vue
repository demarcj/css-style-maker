<template>
  <input 
    id="input" 
    type="number" 
    @keyup="update_input" 
    v-model="user_input"
  >
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  mounted() {
    const input = document.querySelector('#input') as HTMLElement;
    input.focus();
  },
  emits: ['update', 'update_input'],
  data() {
    return {
      user_input: ``,
    };
  },
  methods: {
    update_input(event: KeyboardEvent) {
      if (this.user_input === "") {
        return;
      }
      this.$emit("update_input", this.user_input);
      if(event.key.includes(`Enter`)){
        this.$emit('update');
      }
    }
  }
})
</script>