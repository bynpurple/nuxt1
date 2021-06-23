<template>
  <v-card>hi</v-card>
</template>

<script>
export default {
  name: 'ExampleBoardIndex',
  data () {
    return {
      searchForm: {
        page: 0,
        size: 15,
        sort: 'RegDate,asc',
        searchName: ''
      }
    }
  },
  mounted () {},
  created () {
    this.searchJobs({ type: 'init' })
  },
  methods: {
    searchJobs (options) {
      const option = Object.assign({
        route: this.$route,
        router: this.$router,
        form: this.searchForm,
        callback: this.getJobs
      }, options)

      this.COMMON.searchPagination(option)
    },
    getJobs () {
      const apiURL = `${this.ENV_NUXT}/job/list`
      const apiSearch = location.search
      this.$http({
        method: 'get',
        url: apiURL + apiSearch
      }).then((result) => {
        console.info(result)
      }).catch((error) => {
        console.warn(error)
      })
    }
  }
}
</script>

<style>

</style>
