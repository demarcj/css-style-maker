<template>
  <dialog-content
    :message="message"
    @close="$emit('close')"
  >
    <select 
      v-if="project_list.length" 
      class="select"
      @change="select_project" 
      v-model="selected_project"
    >
      <option v-for="project in project_list" :key="project" :value="project">
        {{ project }}
      </option>
    </select>
    <dialog-button
      :show_apply="true"
      @update="update"
      @close="$emit('close')"
    ></dialog-button>
  </dialog-content>
</template>
<script lang="ts">
import DialogContent from 'src/components/ui/DialogContent.vue';
import { defineComponent, PropType } from 'vue';
import { ProjectElement } from 'src/interface';
export default defineComponent({
  components: { DialogContent },
  async created() {
      if(this.saved_projects){
        this.project_list = Object.keys(this.saved_projects);
        this.selected_project = this.project_list[0];
        this.user_input = this.project_list[0];
      }
  },
  props: {
    saved_projects: {
      type: Object as PropType<ProjectElement>,
      default: () => ({})
    },
    message: String
  },
  data() {
    return {
      user_input: ``,
      project_list: [``],
      selected_project: ``
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
      if(event.key.includes(`Enter`)){
        return this.update();
      }
    },
    select_project() {
      this.user_input = this.selected_project;
    }
  }
})
</script>
<style>
  .select{
    display: block;
    width: 100%;
    margin-bottom: 15px;
  }
</style>