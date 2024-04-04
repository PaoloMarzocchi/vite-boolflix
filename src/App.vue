<script>
import { state } from './state.js';


export default {
  name: 'App',
  data() {
    return {
      state,
      searchInput: '',
      searchFlag: false,

    }
  },
  methods: {
    searchInMovieDb() {
      this.searchFlag = true;
      this.state.getMovieDb(this.state.apiKey, this.searchInput);
    },
    convertVote(rate) {
      let vote = rate;
      vote = Math.round(vote / 2);
      return vote
    }
  },
  mounted() {


  }
}


</script>

<template>
  <input type="text" v-model="searchInput" placeholder="Search here">
  <button @click="searchInMovieDb()">Search</button>

  <template v-if="searchFlag">
    <h3>Movies</h3>
    <ul v-for="movie in  state.movies.results ">
      <li>
        <img :src="'https://image.tmdb.org/t/p/w92' + movie.poster_path" alt="">
      </li>
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo Originale: {{ movie.original_title }}</li>
      <li>Lingua: <span :class="'lang-icon lang-icon-' + movie.original_language"></span>
      </li>
      <li>
        Voto:

        <template v-for="i in 5">
          <template v-if="convertVote(movie.vote_average) >= i">
            <i class="fa-solid fa-star" style="color: #e1a014;"></i>

          </template>
          <template v-else>
            <i class="fa-regular fa-star" style="color: #e1a014;"></i>
          </template>

        </template>


      </li>
    </ul>




    <h3>Series</h3>
    <ul v-for="show in  state.tvShows.results ">
      <li>
        <img :src="'https://image.tmdb.org/t/p/w92' + show.poster_path" alt="">
      </li>
      <li>Titolo: {{ show.name }}</li>
      <li>Titolo Originale: {{ show.original_name }}</li>
      <li>Lingua: <span :class="'lang-icon lang-icon-' + show.original_language"></span>
      </li>
      <li>Voto:

        <template v-for="i in 5">
          <template v-if="convertVote(show.vote_average) >= i">
            <i class="fa-solid fa-star" style="color: #e1a014;"></i>

          </template>
          <template v-else>
            <i class="fa-regular fa-star" style="color: #e1a014;"></i>
          </template>

        </template>
      </li>
    </ul>
  </template>

</template>

<style>
.lang-icon {
  background-image: url(../node_modules/@textabledev/langs-flags-list/lang-flags.png);
}
</style>