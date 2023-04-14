import { createApp } from 'vue'
import App from './App.vue'
import DatePicker from 'vue3-datepicker'

const app = createApp(App)

app.component('date-picker', DatePicker)

app.mount('#app')
