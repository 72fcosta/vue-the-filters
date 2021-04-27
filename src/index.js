import * as filters from './filters'

const VueTheFilters = {
   install (Vue) {
      Object.keys(filters).forEach(key => {
         if (Vue.filter(key)) {
            console.warn(`[filter duplication]: A filter named ${key} has already been installed.`)
         } else {
            Vue.filter(key, filters[key])
         }
      })
   }
}

export default VueTheFilters

if (typeof window !== 'undefined' && window.Vue) {
   window.Vue.use(VueTheFilters)
}
