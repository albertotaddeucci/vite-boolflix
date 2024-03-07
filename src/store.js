import { reactive } from 'vue'

export const store = reactive({

    movies: [],
    tvs: [],

    movieId: 0,
    movieCast: [],

    tvId: 0,
    tvCast: [],





    movieToSearch: '',

    url: "https://image.tmdb.org/t/p/w342"




});