
import { createApp } from 'vue';
import App from './App.vue';
import AOS from 'aos';
import store from './store';
// src/main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'aos/dist/aos.css';

import 'glightbox/dist/css/glightbox.min.css';
// src/views/Home.vue
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import './style.css'

const app = createApp(App);

app.use(store); 

app.use({
  install() {
    AOS.init();
  },
});

app.mount('#app');
