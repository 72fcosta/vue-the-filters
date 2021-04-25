export const datetimePretty = Vue => {
   Vue.filter('datetimePretty', date => {
      if (!date) return ''

      const datetime = new Date(date)
      const dateOptions = { dateStyle: 'short' }
      const timeOptions = { hour: '2-digit', minute: '2-digit' }

      return `${datetime.toLocaleDateString('pt-BR', dateOptions)} - ${datetime.toLocaleTimeString('pt-BR', timeOptions)}h`
   })
}
