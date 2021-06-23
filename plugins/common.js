const COMMON = {
  searchPagination (options) {
    const option = Object.assign({
      type: 'search',
      page: 0,
      route: null,
      router: null,
      form: null,
      callback: null
    }, options)

    if (option.type === 'init') {
      if (location.search) {
        const query = option.route.query
        for (const i in query) {
          if (i === 'page') {
            option.form[i] = parseInt(query[i])
          } else {
            option.form[i] = query[i]
          }
        }
      } else {
        option.router.replace({ query: option.form })
      }
    } else if (option.type === 'pagination') {
      option.form.page = (option.page - 1)
      option.router.push({ query: option.form })
    } else {
      option.form.page = 0
      option.router.replace({ query: option.form })
    }
    option.callback()
  }
}

export default COMMON
