<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="user.avatar_url" alt="Image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="is-4">{{ user.login }}</p>
          <a :href="user.html_url" target="_bank">@{{ user.login }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>
