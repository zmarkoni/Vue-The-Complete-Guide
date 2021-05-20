import { createApp } from 'vue'; // named import
import App from "./App.vue"; // default import
//import FriendContact from "./components/FriendContact.vue";

const app = createApp(App);

//app.component('friend-contact', FriendContact);
// better to import this component where it is used, in App.vue
app.mount('#app');

