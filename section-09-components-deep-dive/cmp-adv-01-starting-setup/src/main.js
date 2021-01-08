import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

// If we register all component Globally like this, browser need to download them all
// Better to register them locally where we need them
// app.component('the-header', TheHeader); move import in App.vue
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
