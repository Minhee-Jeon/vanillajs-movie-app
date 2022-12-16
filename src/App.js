// export default class App {
//   constructor() {
//     this.el = document.createElement('div');
//     this.el.textContent = 'Hello, world!';
//   };
// }

import { Component } from './core/heropy';

export default class App extends Component {
  // constructor() { 생략해도 된다.
  //   super()
  // }
  render() {
    this.el.textContent = 'Hello, world!';
  }
}