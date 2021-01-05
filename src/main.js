import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  data() {
    return {
      cardInfo: [{
        number: "Hejsan",
        name: "Nejdå",
        month: "87",
        year: "",
        vendor: "",
      }, {
        number: "Jaha",
        name: "",
        month: "",
        year: "",
        vendor: "",
      }],

    }
  },
  render: h => h(App)
}).$mount('#app')
