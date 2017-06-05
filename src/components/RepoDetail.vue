<template>
  <section class="section">
    <h1 class="title is-1 has-text-centered">{{ repoName }}</h1>
    <div class="columns is-multiline">
      <div class="column is-3" v-if="listSubscribers" v-for="user in listSubscribers">
        <RepoList :user="user" :key="user.id"></RepoList>
      </div>
    </div>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
  </section>
</template>

<script>
import { fetchGitHubSubscribers } from '@/api/'
import RepoList from './RepoList'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  components: {
    RepoList,
    InfiniteLoading
  },
  data () {
    return {
      repoName: this.$route.params.username,
      listSubscribers: [],
      page: 1
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    onInfinite () {
      this.page = this.page + 1
      this.fetchData()
    },
    fetchData () {
      fetchGitHubSubscribers(this.repoName, this.page).then((response) => {
        this.listSubscribers = this.listSubscribers.concat(response.data)
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      })
    }
  }
}
</script>
