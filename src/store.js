import { reactive } from 'vue'

export const store = reactive({

    allItems: [],
    movies: [],
    tvs: [],

    movieId: 0,
    movieCast: [],

    tvId: 0,
    tvCast: [],

    genres: [],
    selected: 0,

    movieFiltered: [],
    tvFiltered: [],

    stars: [],


    movieToSearch: '',

    url: "https://image.tmdb.org/t/p/w342"




});