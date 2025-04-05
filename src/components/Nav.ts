import { Component } from "../lib/component/Component"
import { Link } from "../lib/vanilla-router"

export default class Nav extends Component {
  template(): string {
    return `
      <nav>
        <ul>
          <li>
            ${Link({ to: "/", children: "Home" })}
          </li>
          <li>
            ${Link({ to: "/about", children: "About" })}
          </li>
        </ul>
      </nav>
    `
  }
}
