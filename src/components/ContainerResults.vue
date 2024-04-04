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



<style></style>