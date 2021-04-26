import { datePretty } from './filters/datePretty'
import { datetimePretty } from './filters/datetimePretty'
import { upperFirst } from './filters/upperFirst'

const vueTheFilters = {
   install (Vue, options) {
      datePretty(Vue, options)
      datetimePretty(Vue, options)
      upperFirst(Vue, options)
   }
}

if (typeof window !== 'undefined' && window.Vue) {
   window.Vue.use(vueTheFilters)
}

export default vueTheFilters
