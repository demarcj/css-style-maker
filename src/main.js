import { createApp } from 'vue';
import BasicDialog from './components/dialog/BasicDialog.vue';
import PromptDialog from './components/dialog/PromptDialog.vue';
import ConfirmDialog from './components/dialog/ConfirmDialog.vue';
import StyleDialog from './components/dialog/StyleDialog.vue';
import App from './App.vue';

const app = createApp(App);

app.component('basic-dialog', BasicDialog);
app.component('prompt-dialog', PromptDialog);
app.component('confirm-dialog', ConfirmDialog);
app.component('style-dialog', StyleDialog);

app.mount('#app')
