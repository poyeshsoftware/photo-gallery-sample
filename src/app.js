import {createApp} from 'vue'
import Alert from './components/Alert';

const app = createApp({})

app.component('alert', Alert)

app.mount('#app')