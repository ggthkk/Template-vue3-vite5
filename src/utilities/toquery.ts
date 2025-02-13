const toquery = (obj: { query?: Record<string, string | boolean | number> }): string => {
  const queryObj = obj.query
  if (!queryObj) {
    return ''
  }
  const queryString = Object.keys(queryObj)
    .filter((key) => {
      const value = queryObj[key]
      if (value !== undefined && value !== null) {
        const stringValue = value.toString()
        return stringValue.trim() !== ''
      }
      return false
    })
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryObj[key].toString())}`)
    .join('&')

  return queryString ? `?${queryString}` : ``
}

export default toquery
