<template>
  <input 
    id="input" 
    type="number" 
    @keyup="update_input" 
    v-model="user_input"
  >
  <!-- <select @change="select_unit" v-model="selected_unit">
    <option v-for="unit in font_measuring_units" :key="unit" :value="unit">
      {{ unit }}
    </option>
  </select> -->
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
      // font_measuring_units: [`px`, `rem`, `em`, `%`, `vh`, `vw`],
      selected_unit: `px`
    };
  },
  methods: {
    select_unit(){
      this.$emit("update_input", this.user_input + this.selected_unit);
    },
    update_input(event: KeyboardEvent) {
      if (this.user_input === "") {
        return;
      }
      this.$emit("update_input", this.user_input + this.selected_unit);
      if(event.key.includes(`Enter`)){
        this.$emit('update');
      }
    }
  }
});
</script>