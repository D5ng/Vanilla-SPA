import { Component } from "./lib/component/Component"
import { createRouter } from "./lib/vanilla-router"
import { routes } from "./routes"

export default class App extends Component {
  componentDidMount(): void {
    createRouter(routes, this.element)
  }
}
