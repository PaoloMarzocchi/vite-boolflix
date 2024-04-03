<script>
import { state } from './state.js';

export default {
  name: 'App',
  data() {
    return {
      state,
      searchedMovie: '',
      searchFlag: false,
    }
  },
  methods: {
    movieSearch() {
      this.searchFlag = true;
      this.state.getMovieDb(this.state.apiKey, this.searchedMovie);
    }
  },
  mounted() {


  }
}


</script>

<template>
  <input type="text" v-model="searchedMovie" placeholder="Search here">
  <button @click="movieSearch()">Search</button>
  <template v-if="searchFlag">
    <ul v-for="movie in state.movie.results">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo Originale: {{ movie.original_title }}</li>
      <li>Lingua: {{ movie.original_language }}</li>
      <li>Voto: {{ movie.vote_average }}</li>
    </ul>
  </template>

</template>

<style></style>