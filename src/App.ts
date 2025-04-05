import Nav from "./components/Nav"
import { Component } from "./lib/component/Component"
import { createRouter, Route } from "./lib/vanilla-router"
import { About, Home } from "./pages"

export default class App extends Component {
  componentDidMount(): void {
    const headerElement = this.element.querySelector("[data-element='header']")! as HTMLElement
    new Nav({ target: headerElement })

    const sectionElement = this.element.querySelector("[data-element='section']")! as HTMLElement

    const routes: Route[] = [
      {
        path: "/",
        component: Home,
        errorComponent: () => "Error Home",
      },
      {
        path: "/about",
        component: About,
        errorComponent: () => `Error About`,
      },
    ]

    createRouter(routes, sectionElement)
  }

  template(): string {
    return `
      <header data-element="header"></header>
      <main>
        <section data-element="section"></section>
      </main>
      <footer>My Vanilla TS SPA</footer>
    `
  }
}
