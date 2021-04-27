import * as datePretty from './filters/datePretty'
import * as datetimePretty from './filters/datetimePretty'
import * as upperFirst from './filters/upperFirst'

const vueTheFilters = {
   install (Vue, options) {
      datePretty(Vue, options)
      datetimePretty(Vue, options)
      upperFirst(Vue, options)
   }
}

export default vueTheFilters
