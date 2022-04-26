import {createApp} from 'vue'
import Header from './components/Header';
import Footer from './components/Footer';

const app = createApp({})

app.component('site-header', Header)
app.component('site-footer', Footer)

app.mount('#app')