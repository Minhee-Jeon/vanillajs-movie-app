import { Component } from './core/heropy';
import TheHeader from './components/TheHeader';

export default class App extends Component {
  render() {
    const routerView = document.createElement('router-view') //비표준 html 요소를 만든다
    this.el.append(
      new TheHeader().el,
      routerView
    )
  }
}