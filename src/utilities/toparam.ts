const toparam = (obj: { param?: Record<string, string> }): string => {
  let resParam = ''
  if (obj.param) {
    const lastKey = Object.keys(obj.param).pop()
    for (const property in obj.param) {
      resParam += `${obj.param[property]}${property === lastKey ? '' : '/'}`
    }
  }
  return resParam !== '' ? `/${resParam}` : ''
}

export default toparam
