const upperFirst = string => {
   if (!string) return ''

   string = string
      .toLowerCase()
      .split(' ')
      .map((item, index) => {
         item = item.replace(/-./, (a) => a.toUpperCase())
         if (['i', 'ii', 'iii', 'iv', 'xv'].includes(item)) {
            item = item.toUpperCase()
         } else if (
            (
               index === 0 || item.length > 2 || item.slice(-1)[0] === '.'
            ) && (
               !['sem', 'com', 'por', 'dos', 'das'].includes(item)
            )
         ) {
            item = item[0].toUpperCase() + item.slice(1)
         }
         return item
      })
      .join(' ')

   return string
}

export default upperFirst
