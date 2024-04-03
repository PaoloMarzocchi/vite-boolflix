<script>
import { state } from './state.js';

export default {
  name: 'App',
  data() {
    return {
      state,
      searchedMovie: 'dune',
    }
  },
  mounted() {
    this.state.getMovieDb(this.state.apiKey, this.searchedMovie)
    console.log(this.state);
  }
}


</script>

<template>

</template>

<style></style>