import { Component } from '../core/heropy';
import movieStore from '../store/movie'
import MovieItem from './MovieItem';

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => { // 구독받아야 상태 변화에 따라 렌더링이 적용됨
      this.render()
    })
    movieStore.subscribe('loading', () => {
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */`
      <div class="movies"></div>
      <div class="the-loader hide"></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )

    const loaderEl = this.el.querySelector('.the-loader')
    movieStore.state.loading 
      ? loaderEl.classList.remove('hide')
      : loaderEl.classList.add('hide')
  }
}