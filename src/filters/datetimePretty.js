const datetimePretty = date => {
   if (!date) return ''

   const isTimestampObject = !!date.nanoseconds && !!date.seconds
   let datetime

   if (isTimestampObject) {
      datetime = new Date(date.seconds * 1000)
   } else {
      datetime = new Date(date)
   }

   const dateOptions = { dateStyle: 'short' }
   const timeOptions = { hour: '2-digit', minute: '2-digit' }

   return `${datetime.toLocaleDateString('pt-BR', dateOptions)} - ${datetime.toLocaleTimeString('pt-BR', timeOptions)}h`
}

export default datetimePretty
