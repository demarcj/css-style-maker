import { createApp } from 'vue';
import BasicDialog from './components/BasicDialog.vue';
import PromptDialog from './components/PromptDialog.vue';
import ConfirmDialog from './components/ConfirmDialog.vue';
import StyleDialog from './components/StyleDialog.vue';
import App from './App.vue';

const app = createApp(App);

app.component('basic-dialog', BasicDialog);
app.component('prompt-dialog', PromptDialog);
app.component('confirm-dialog', ConfirmDialog);
app.component('style-dialog', StyleDialog);

app.mount('#app')
