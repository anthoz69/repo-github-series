<template>
  <section class="section">
    <h1 class="title is-1 has-text-centered">{{ repoName }}</h1>
    <div class="columns is-multiline">
      <div class="column is-3" v-if="listSubscribers" v-for="user in listSubscribers">
        <RepoList :user="user" :key="user.id"></RepoList>
      </div>
    </div>
  </section>
</template>

<script>
import { fetchGitHubSubscribers } from '@/api/'
import RepoList from './RepoList'

export default {
  components: {
    RepoList
  },
  data () {
    return {
      repoName: this.$route.params.username,
      listSubscribers: null
    }
  },
  created () {
    fetchGitHubSubscribers(this.repoName).then((response) => {
      console.log(response)
      this.listSubscribers = response.data
    })
  }
}
</script>
