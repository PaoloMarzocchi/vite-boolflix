<script>
import { state } from './state.js';
import AppHeader from './components/AppHeader.vue';
import ShowResults from './components/ShowResults.vue';
import AppMain from './components/AppMain.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    ShowResults,
    AppMain,
  },
  data() {
    return {
      state,
      searchFlag: false,
    }
  },
  methods: {
    searchInDB() {
      this.searchFlag = true;

      state.getMovieDb(state.apiKey, state.searchInput);

    },

  },
  mounted() {


  }
}

</script>

<template>

  <AppHeader @search-input="searchInDB"></AppHeader>

  <template v-if="searchFlag">

    <AppMain></AppMain>

  </template>

</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* #region Common */
:root {
  --flix--dark: black;
  --flix--primary: #1B1B1B;
  --flix--txt: #E3E4E4;
  --flix--secondary: #db202c;
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