<script>
import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import ShowResults from './components/ShowResults.vue';
import ContainerResults from './components/ContainerResults.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    ShowResults,
    ContainerResults,
  },
  data() {
    return {
      state,
      searchFlag: false,
    }
  },
  methods: {
    searchInDB(searchInput) {
      this.searchFlag = true;
      state.getMovieDb(state.apiKey, searchInput);
    },

  },
  mounted() {


  }
}

</script>

<template>

  <AppHeader @search-input="searchInDB"></AppHeader>

  <template v-if="searchFlag">

    <ContainerResults :type="state.movies.type">
      <ShowResults :img="movie.poster_path" :title="movie.title" :originTitle="movie.original_title"
        :lang="movie.original_language" :vote="movie.vote_average" v-for="movie in  state.movies.results">
      </ShowResults>
    </ContainerResults>

    <!-- <template v-if="state.movies.results.length === 0">
  <h4>Movie Not Found!</h4>
</template> -->
    <ContainerResults :type="state.tvShows.type">
      <ShowResults :img="show.poster_path" :title="show.name" :originTitle="show.original_name"
        :lang="show.original_language" :vote="show.vote_average" v-for="show in  state.tvShows.results">
      </ShowResults>
    </ContainerResults>

    <!-- <template v-if="state.tvShows.results.length === 0">
  <h4>Tv Show Not Found!</h4>
</template> -->

  </template>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* #region Common */
:root {
  --flix--primary: #1B1B1B;
  --flix--txt: #E3E4E4;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--flix--primary);
  color: var(--flix--txt);
  font-family: "Roboto", sans-serif;
}

ul {
  list-style: none;
}

/* #endregion Common */


/* #region Utilities */
.lang-icon {
  background-image: url(../node_modules/@textabledev/langs-flags-list/lang-flags.png);
}

.container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;

}

.d-flex {
  display: flex;

}

/* #endregion Utilities */
</style>