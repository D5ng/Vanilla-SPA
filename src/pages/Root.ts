import Nav from "../components/Nav"
import { Component } from "../lib/component"
import { Outlet } from "../lib/vanilla-router"

export default class Root extends Component {
  componentDidMount(): void {
    const headerElement = this.element.querySelector("[data-element='header']")! as HTMLElement
    new Nav({ target: headerElement })
  }

  template(): string {
    return `
      <header data-element="header"></header>
        <main>
          <section data-element="section">
            ${Outlet()}
          </section>
        </main>
    `
  }
}
