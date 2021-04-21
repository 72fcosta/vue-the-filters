import { upperFirst } from './filters/upperFirst'
import { datePretty } from './filters/datePretty'
import { datetimePretty } from './filters/datetimePretty'

const vueFilters72fcosta = {
   install (Vue, options) {
      upperFirst(Vue, options)
      datePretty(Vue, options)
      datetimePretty(Vue, options)
   }
}

if (typeof window !== 'undefined' && window.Vue) {
   window.Vue.use(vueFilters72fcosta)
}

export default vueFilters72fcosta
