<script>
export default {
  name: 'ContainerResults',
  props: ['type']
}
</script>

<template>
  <div class="container">
    <h2>{{ type }}</h2>
    <div class="row d-flex">

      <slot></slot>

    </div>
  </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

h2 {
  margin-top: 1rem;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 5px;
}

.row {
  margin: 0 -1rem;
  flex-wrap: wrap;


}
</style>