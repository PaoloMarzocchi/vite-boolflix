<script>
export default {
  name: 'ShowResults',
  props: ['img', 'title', 'originTitle', 'lang', 'vote'],
  methods: {
    convertVote(rate) {
      let vote = rate;
      vote = Math.round(vote / 2);
      return vote
    }
  }
}
</script>

<template>

  <ul>
    <li>
      <img :src="'https://image.tmdb.org/t/p/w92' + img" alt="">
    </li>
    <li>Titolo: {{ title }}</li>
    <li>Titolo Originale: {{ originTitle }}</li>
    <li>Lingua: <span :class="'lang-icon lang-icon-' + lang"></span>
    </li>
    <li>
      Voto:

      <template v-for="i in 5">
        <template v-if="convertVote(vote) >= i">
          <i class="fa-solid fa-star" style="color: #e1a014;"></i>

        </template>
        <template v-else>
          <i class="fa-regular fa-star" style="color: #e1a014;"></i>
        </template>

      </template>


    </li>
  </ul>

</template>


<style></style>