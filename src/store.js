import { reactive } from 'vue'

export const store = reactive({

    isHomeActive: true,

    allItems: [],
    movies: [],
    tvs: [],

    movieId: 0,
    movieCast: [],

    tvCast: [],

    genres: [],
    selected: 0,

    movieFiltered: [],
    tvFiltered: [],

    stars: [],

    movieToSearch: '',

    url: "https://image.tmdb.org/t/p/w342",

    slideIndex: 0,
    urlBg: "https://image.tmdb.org/t/p/w1280"




});