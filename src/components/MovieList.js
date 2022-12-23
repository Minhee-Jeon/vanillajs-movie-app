import { Component } from '../core/heropy';
import movieStore from '../store/movie'

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe('movies', () => { // 구독받아야 상태 변화에 따라 렌더링이 적용됨
      this.render()
    })
  }
  render() {
    this.el.classList.add('movie-list')
    this.el.innerHTML = /* html */`
      <div class="movies"></div>
    `

    const moviesEl = this.el.querySelector('.movies')
    moviesEl.append(
      movieStore.state.movies.map(movie => {
        return movie.Title
      })
    )
  }
}