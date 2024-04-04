<script>
import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import ShowResults from './components/ShowResults.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    ShowResults,
  },
  data() {
    return {
      state,
      searchFlag: false,
    }
  },
  methods: {
    searchInMovieDb(searchInput) {
      this.searchFlag = true;
      state.getMovieDb(state.apiKey, searchInput);
    },

  },
  mounted() {


  }
}

</script>

<template>

  <AppHeader @search-input="searchInMovieDb"></AppHeader>

  <template v-if="searchFlag">
    <h3>Movies</h3>
    <ShowResults :img="movie.poster_path" :title="movie.title" :originTitle="movie.original_title"
      :lang="movie.original_language" :vote="movie.vote_average" v-for="movie in  state.movies.results"></ShowResults>

    <h3>Tv Shows</h3>
    <ShowResults :img="show.poster_path" :title="show.name" :originTitle="show.original_name"
      :lang="show.original_language" :vote="show.vote_average" v-for="show in  state.tvShows.results"></ShowResults>


  </template>

</template>


<style>
.lang-icon {
  background-image: url(../node_modules/@textabledev/langs-flags-list/lang-flags.png);
}
</style>