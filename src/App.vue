<script>
import { state } from './state.js';


export default {
  name: 'App',
  data() {
    return {
      state,
      searchInput: '',
      searchFlag: false,
      vote: null,
      rest: null,
    }
  },
  methods: {
    searchInMovieDb() {
      this.searchFlag = true;
      this.state.getMovieDb(this.state.apiKey, this.searchInput);
    },
    convertVote(rate) {
      this.vote = rate;
      this.vote = (this.vote / 2);
      this.rest = this.vote - Math.floor(this.vote);
      console.log(this.vote);


      /*  for (let i = 1; i <= this.vote; i++) {
         console.log('star');
 
       }
 
       if (this.rest > 0.75) {
         console.log('star');
 
       } else if (this.rest > 0.25) {
         console.log('half');
 
       }
       for (let i = this.vote + 1; i < 5; i++) {
         console.log('empty');
 
       }
  */



    }

  },
  mounted() {
    //this.convertVote(10)

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
        Voto: {{ convertVote(movie.vote_average) }}
        <template v-for="i in vote">
          <i class="fa-solid fa-star" style="color: #e1a014;"></i>
        </template>
        <template v-if="rest > 0.75">
          <i class="fa-solid fa-star" style="color: #e1a014;"></i>

        </template>
        <template v-if="rest > 0.25">
          <i class="fa-solid fa-star-half-stroke" style="color: #e1a014;"></i>

        </template>
        <!-- <template v-for="i = vote in 5">
          <i class="fa-regular fa-star" style="color: #e1a014;"></i>
        </template> -->


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
      <li>Voto: {{ show.vote_average }}</li>
    </ul>
  </template>

</template>

<style>
.lang-icon {
  background-image: url(../node_modules/@textabledev/langs-flags-list/lang-flags.png);
}
</style>