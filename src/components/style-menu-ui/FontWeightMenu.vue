<template>
  <input 
    type="number" 
    min="100"
    max="900"
    step="100"
    :value="real_data"
    @change="changed_value($event)" 
  >
  <div class="value"> {{ full_data }} </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  emits: ['change-value'],
  props: {
    name: {
      type: String,
      default: ``
    },
    value: { 
      type: String, 
      default: `` 
    }
  },
  data(){
    return {
      real_data: ``,
      full_data: ``
    }
  },
  mounted(){
    this.get_data();
  },
  updated() {
    this.get_data();
  },
  methods: {
    changed_value(e: Event) {
      const target = e.target as HTMLInputElement;
      this.get_data(target.value);
      this.$emit("change-value", `font-weight`, target.value);
    },
    get_data(data: string = ``) {
      data = data ? data : this.value;
      if(this.name === `font-weight`){
        this.get_font_weight(data);
        return;
      }
    },
    get_font_weight(data: string){
      this.real_data = data;
      this.full_data = data;
    }
  }
});
</script>