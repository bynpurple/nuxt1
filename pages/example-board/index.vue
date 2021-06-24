<template>
  <v-card>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Writer
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in jobs.content"
            :key="item.name"
          >
            <td>{{ item.jobName }}</td>
            <td>{{ item.regEmpInfo.empName }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
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
      },
      jobs: []
    }
  },
  mounted () {},
  created () {
    // this.searchJobs()
    this.getJobs()
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
      const apiURL = `${this.ENV_NUXT}/job/page`
      const apiSearch = '?page=0&size=15&sort=RegDate,asc&searchName='
      this.$http({
        method: 'get',
        url: apiURL + apiSearch
      }).then((result) => {
        console.info(result)
        this.jobs = result.data.contents
      }).catch((error) => {
        console.warn(error)
      })
    }
  }
}
</script>

<style>

</style>
