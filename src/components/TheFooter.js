import { Component } from '../core/heropy';

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/Minhee-Jeon/vanillajs-movie-app">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/Minhee-Jeon">
          ${new Date().getFullYear()}
          MINHEE
        </a>
      </div>
    `
  }
}