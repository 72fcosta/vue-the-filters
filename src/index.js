import { upperFirst } from './filters/upperFirst'
import { datePretty } from './filters/datePretty'
import { datetimePretty } from './filters/datetimePretty'

const vueTheFilters = {
   install (Vue, options) {
      upperFirst(Vue, options)
      datePretty(Vue, options)
      datetimePretty(Vue, options)
   }
}

if (typeof window !== 'undefined' && window.Vue) {
   window.Vue.use(vueTheFilters)
}

export default vueTheFilters
