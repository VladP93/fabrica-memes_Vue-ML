import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import {firestorePlugin} from 'vuefire';
import router from './routes/index';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyD--Hk_SDSTJVT3TDayhwEJ-mHdpltxSYU",
  authDomain: "fabrica-memes-20a98.firebaseapp.com",
  databaseURL: "https://fabrica-memes-20a98.firebaseio.com",
  projectId: "fabrica-memes-20a98",
  storageBucket: "fabrica-memes-20a98.appspot.com",
  messagingSenderId: "593381490736",
  appId: "1:593381490736:web:35494fcec316f01debadf5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestore = firebaseApp.firestore();
export const storage = firebaseApp.storage().ref('/images');

Vue.use(firestorePlugin)

new Vue({
  vuetify,
  render: h => h(App),
  router,
  components: {App}
}).$mount('#app')
