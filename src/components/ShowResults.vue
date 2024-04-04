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

   <div class="col">
      <div class="card">
         <div class="poster">
            <img :src="'https://image.tmdb.org/t/p/w342' + img" alt="poster">
         </div>
         <div class="description">
            <ul>
               <li>
                  Titolo: {{ title }}
               </li>
               <li>
                  Titolo Originale: {{ originTitle }}
               </li>
               <li>
                  Lingua: <span :class="'lang-icon lang-icon-' + lang"></span>
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

         </div>
      </div>

   </div>

</template>

<style>
.card {
   position: relative;

}

.description {
   width: 100%;
   height: 100%;
   opacity: 0;
   position: absolute;
   top: 0;
   left: 0;
   background-color: black;
   border: 1px solid red;
}

.card:hover .description {
   opacity: 1;
   z-index: 10;
}
</style>