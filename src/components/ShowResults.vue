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

         <!-- Front card -->
         <div class="poster">
            <img :src="'https://image.tmdb.org/t/p/w342' + img" alt="poster">
         </div>

         <!-- Back card -->
         <div class="description d-flex">
            <ul>
               <li>
                  <span class="item-type">Title:</span>
                  <span>{{ title }}</span>
               </li>
               <li>
                  <span class="item-type">Original title:</span>
                  <span>{{ originTitle }}</span>
               </li>
               <li>
                  <span class="item-type">Language:</span>
                  <span :class="'lang-icon lang-icon-' + lang"></span>
               </li>
               <li>
                  <span class="item-type">Vote:</span>

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
.col {
   width: calc(100%/5);
   padding: 1rem;

   /* Card section */
   .card {
      position: relative;
      height: 100%;

      /* Front Card */
      .poster {

         & img {
            width: 100%;
            max-width: 100%;
         }
      }

      /* Back Card*/
      .description {
         width: 100%;
         height: 100%;
         opacity: 0;
         position: absolute;
         top: 0;
         left: 0;
         background-color: black;
         border: 1px solid red;
         align-items: center;
         padding: 1rem;

         li {
            margin: 1rem 0;
            font-size: small;

            .item-type {
               text-decoration: underline;
               margin-right: 0.3rem;
            }

            .lang-icon {
               position: relative;
               top: 4px;
               border-radius: 2px;
            }
         }
      }

   }

   .card:hover .description {
      opacity: 1;
      z-index: 10;
   }
}
</style>