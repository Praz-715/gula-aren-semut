
import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'aos/dist/aos.css';

import 'glightbox/dist/css/glightbox.min.css';
import './style.css'
import { createHead } from '@unhead/vue'
const app = createApp(App);
const head = createHead();

app.use(store); 
app.use(head);

app.use({
  install() {
    AOS.init();
  },
});

app.mount('#app');
