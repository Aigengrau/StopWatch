import { createApp } from 'vue';
import App from './App.vue';
import Stopwatch from './StopWatchTimer.vue';

const app = createApp(App);
app.component('stopwatch', Stopwatch);
app.mount('#app');
