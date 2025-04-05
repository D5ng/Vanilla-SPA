import { Component } from "../lib/component/Component"
import { Link } from "../lib/Link"

export default class Nav extends Component {
  template(): string {
    return `
      <nav>
        <ul>
          <li>
            ${Link({ to: "/", children: "Home", replace: true, state: { a: 1 } })}
          </li>
          <li>
            ${Link({ to: "/about", children: "About" })}
          </li>
        </ul>
      </nav>
    `
  }
}
