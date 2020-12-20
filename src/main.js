import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import moment from 'moment'

library.add(fas)

const app = createApp(App).use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.$filters = {
  formateDate(value) {
    if (value) {
      return moment(value).format('YYYY')
    }
  }
}
app.mount('#app')

