import { Store } from '../core/heropy'

const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false
})

export default store
export const searchMovies = async page => {
  store.state.loading = true
  store.state.page = page
  if (page === 1) { // 새 내용 검색 시 페이지 초기화 
    store.state.movies = []
  }
  const res = await fetch(`https://www.omdbapi.com/?apikey=d2ef87f2&s=${store.state.searchText}&page=${page}`)
  const { Search, totalResults } = await res.json()
  //console.log(Search)
  store.state.movies = [
    ...store.state.movies, // 누적
    ...Search
  ]
  store.state.pageMax = Math.ceil(Number(totalResults) / 10)
  store.state.loading = false
}