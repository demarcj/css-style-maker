import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { initializeApp } from 'firebase/app';
import 'element-plus/dist/index.css';
import BasicDialog from 'src/components/dialog/BasicDialog.vue';
import PromptDialog from 'src/components/dialog/PromptDialog.vue';
import ConfirmDialog from 'src/components/dialog/ConfirmDialog.vue';
import StyleDialog from 'src/components/dialog/StyleDialog.vue';
import DialogButton from 'src/components/ui/DialogButton.vue';
import DialogContent from 'src/components/ui/DialogContent.vue';
import StylingInput from 'src/components/ui/StylingInput.vue';
import ViewContent from 'src/components/ui/ViewContent.vue';
import App from 'src/App.vue';
import router from 'src/router'

const app = createApp(App).use(router);

const firebaseConfig = {
  apiKey: "AIzaSyAaXjc7GFXQwXLii6FuHMcuN8pVzBWq5a4",
  authDomain: "css-style-maker-engine.firebaseapp.com",
  projectId: "css-style-maker-engine",
  storageBucket: "css-style-maker-engine.appspot.com",
  messagingSenderId: "813596944378",
  appId: "1:813596944378:web:0acb0e66c12f2820cba643"
};

initializeApp(firebaseConfig);

//  Dialog
app.component('basic-dialog', BasicDialog);
app.component('prompt-dialog', PromptDialog);
app.component('confirm-dialog', ConfirmDialog);
app.component('style-dialog', StyleDialog);

//  UI
app.component('dialog-button', DialogButton);
app.component('dialog-content', DialogContent);
app.component('styling-input', StylingInput);
app.component('view-content', ViewContent);

app.use(ElementPlus);
app.mount('#app');
