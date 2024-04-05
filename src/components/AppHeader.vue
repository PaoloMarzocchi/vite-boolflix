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
    <div class="container d-flex" id="site-header">
        <img src="/img/logo.png" alt="" style="width: 10rem;">
        <div class="input-box">
            <input type="text" id="input" v-model="searchInput" placeholder="Search here"
                @keyup.enter="$emit('search-input', searchInput)">
            <button id="btn" @click="$emit('search-input', searchInput)">
                <i class="fa-solid fa-magnifying-glass" style="color: var(--flix--txt);"></i>
            </button>
        </div>

    </div>

</template>



<style>
#site-header {
    padding: 0.5rem 0;
    justify-content: space-between;
    align-items: center;

    & img {
        margin-left: -0.3rem;
    }

    #input {
        background-color: #494949;
        color: var(--flix--txt);
        width: 10rem;
        padding: 0.5rem;
        margin: 0 0.5rem;
        border: none;
        border-radius: 5px;
    }

    #input::placeholder {
        color: var(--flix--txt);
    }

    #btn {
        padding: 0.5rem;
        border: none;
        border-radius: 5px;
        background-color: transparent;
        color: var(--flix--txt)
    }
}
</style>