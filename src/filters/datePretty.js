const datePretty = date => {
   if (!date) return ''

   const datetime = new Date(date)
   const dateOptions = { year: '2-digit', month: '2-digit', day: '2-digit' }

   return `${datetime.toLocaleDateString('pt-BR', dateOptions)}`
}

export default datePretty
