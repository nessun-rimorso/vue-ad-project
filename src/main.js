import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import * as fb from 'firebase/app'
import 'firebase/auth'
import router from './router'
import BuyModalComponent from "./components/Shared/BuyModal";
import './scss/main.scss'

Vue.config.productionTip = false;
Vue.component('app-buy-modal', BuyModalComponent);

new Vue({
  vuetify,
  router,
  store,
  created () {
    fb.initializeApp({
      apiKey: "AIzaSyCcWrXscJtIJndPJ5DWYVvg4eSLeczI-Jo",
      authDomain: "itc-ads-cf8e4.firebaseapp.com",
      databaseURL: "https://itc-ads-cf8e4.firebaseio.com",
      projectId: "itc-ads-cf8e4",
      storageBucket: "itc-ads-cf8e4.appspot.com",
      messagingSenderId: "419696833781",
      appId: "1:419696833781:web:02691be1b13050034281bc",
      measurementId: "G-H5SN83EE6S"
    });

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    });

    this.$store.dispatch('fetchAds')
  },
  render: h => h(App)
}).$mount('#app');
