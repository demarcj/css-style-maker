<template>
  <dialog-content
    :message="message"
    @close="$emit('close')"
  >
    <FontSize 
      v-if="style === 'font-size'" 
      @update="update" 
      @update_input="update_input" 
    />
    <FontWeight 
      v-if="style === 'font-weight'" 
      @update="update" 
      @update_input="update_input" 
    />
    <dialog-button
      :show_apply="true"
      @update="update"
      @close="$emit('close')"
    ></dialog-button>
  </dialog-content>
</template>
<script lang="ts">
import FontSize from "src/components/input/FontSize.vue";
import FontWeight from "src/components/input/FontWeight.vue";

import { defineComponent } from 'vue';
export default defineComponent({
  components: { 
    FontSize,
    FontWeight 
  },
  props: {
    message: String,
    style: String
  },
  data() {
    return {
      user_input: ``,
    };
  },
  methods: {
    update() {
      if (this.user_input === "") {
        return;
      }
      this.$emit("update", this.user_input);
    },
    update_input(input: string){
      this.user_input = input;
    }
  }
})
</script>
<style scoped>
  .input-container{
    margin-bottom: 15px;
  }
</style>