const datePretty = date => {
   if (!date) return ''

   const isTimestampObject = !!date.nanoseconds && !!date.seconds
   let datetime

   if (isTimestampObject) {
      datetime = new Date(date.seconds * 1000)
   } else {
      datetime = new Date(date)
   }

   const dateOptions = { dateStyle: 'short' }

   return `${datetime.toLocaleDateString('pt-BR', dateOptions)}`
}

export default datePretty
