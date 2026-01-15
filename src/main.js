import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

// Crée l'application Vue et ajoute le routeur
createApp(App)
  .use(router)
  .mount('#app')
