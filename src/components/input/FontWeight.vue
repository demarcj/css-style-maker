<template>
  <input 
    id="input" type="number" 
    @keyup="update_input" 
    v-model="user_input"
  >
</template>
<script>
export default {
  mounted() {
    document.querySelector('#input').focus();
  },
  emits: ['update', 'update_input'],
  data() {
    return {
      user_input: ``,
    };
  },
  methods: {
    update_input(event) {
      if (this.user_input === "") {
        return;
      }
      this.$emit("update_input", this.user_input);
      if(event.keyCode === 13){
        this.$emit('update');
      }
    }
  }
}
</script>