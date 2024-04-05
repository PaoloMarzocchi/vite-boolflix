<script>
import ShowResults from './ShowResults.vue';
import { state } from '../state.js';

export default {
  name: 'ContainerResults',
  components: {
    ShowResults,
  },
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
  <div class="container" id="site-main">
    <template v-for="(media, key) in state.medias">

      <template v-if="key === 'movies'">
        <h2>Movies </h2>
      </template>
      <template v-else>
        <h2>Tv Shows</h2>
      </template>

      <div class="row d-flex">
        <template v-if="media.total_results === 0">

          <h4>Not Found!</h4>
        </template>
        <template v-else>

          <ShowResults :img="prod.poster_path" :title="key === 'movies' ? prod.title : prod.name"
            :originTitle="key === 'tvShows' ? prod.original_title : prod.original_name" :lang="prod.original_language"
            :vote="prod.vote_average" v-for="prod in  media.results">
          </ShowResults>

        </template>

      </div>
    </template>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

#site-main {

  & h2 {
    margin-top: 1rem;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 5px;
  }

  .row {
    margin: 0 -1rem;
    flex-wrap: wrap;

    & h4 {
      margin-top: 0.5rem;
      margin-left: 1rem;
    }

  }
}
</style>