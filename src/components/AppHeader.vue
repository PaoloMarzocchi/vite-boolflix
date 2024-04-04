<script>
export default {
    name: 'AppHeader',
    emits: ['search-input'],
    data() {
        return {
            searchInput: '',
        }
    }
}
</script>

<template>
    <input type="text" v-model="searchInput" placeholder="Search here">
    <button @click="$emit('search-input', searchInput)">Search</button>
</template>



<style></style>