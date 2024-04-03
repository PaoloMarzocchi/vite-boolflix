import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    apiKey: '3a5697af1a00649bd70f3631787fb2c3',
    movie: {},
    getMovieDb(key, name) {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}`)
            .then(response => {
                this.movie = response.data;
            })
            .catch(err => {
                console.error(err.message)
            })
    }
})