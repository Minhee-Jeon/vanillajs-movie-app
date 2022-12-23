import { Store } from '../core/heropy'

const store = new Store({
  searchText: '',
  page: 1,
  movies: []
})

export default store
export const searchMovies = async page => {
  if (page === 1) { // 새 내용 검색 시 페이지 초기화
    store.state.page = 1
    store.state.movies = []
  }
  const res = await fetch(`https://www.omdbapi.com/?apikey=d2ef87f2&s=${store.state.searchText}&page=${page}`)
  const { Search } = await res.json()
  //console.log(Search)
  store.state.movies = [
    ...store.state.movies, // 누적
    ...Search
  ]
}