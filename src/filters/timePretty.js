const timePretty = date => {
   if (!date) return ''

   const datetime = new Date(date)
   const dateOptions = { hour: '2-digit', minute: '2-digit' }

   return `${datetime.toLocaleTimeString('pt-BR', dateOptions)}h`
}

export default timePretty
