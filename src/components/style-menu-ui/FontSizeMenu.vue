<template>
  <input 
    type="number" 
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
      full_data: ``,
      // font_measuring_units: [`px`, `rem`, `em`, `%`, `vh`, `vw`]
    }
  },
  created(){
    this.get_data();
  },
  updated() {
    this.get_data();
  },
  methods: {
    changed_value(e: Event) {
      const target = e.target as HTMLInputElement;
      this.get_data(target.value);
      this.$emit("change-value", `font-size`, (target.value + `px`));
    },
    get_data(data: string = ``) {
      data = data ? data : this.value;
      if(this.name === `font-size`){
        this.get_font_size(data);
        return;
      }
    },
    get_font_size(data: string){
      this.real_data = data.replace(/[a-z]/g, '') + '';
      // this.full_data = data.replace(/[a-z]/g, '') + this.value.replace(/[0-9]/g, '');
      this.full_data = data;
    }
  }
});
</script>