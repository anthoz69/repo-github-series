<template lang="html">
  <section class="section">
    <h1 class="title is-1">List Poppular Repo</h1>
    <h2 class="subtitle is-3">Find some Repo</h2>
    <div class="columns is-multiline is-tablet">
      <div class="column is-12-tablet">
        <Repo repoName="vuejs/vue"></Repo>
      </div>
      <div class="column is-12-tablet">
        <Repo repoName="facebook/react"></Repo>
      </div>
      <div class="column is-12-tablet">
        <Repo repoName="angular/angular"></Repo>
      </div>
    </div>
  </section>
</template>

<script>
import Repo from '@/components/Repo'

export default {
  components: {
    Repo
  }
}
</script>

<style lang="css">
</style>
