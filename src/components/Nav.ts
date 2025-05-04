import { Component } from "../lib/component/Component"
import { Link } from "../lib/vanilla-router"

export default class Nav extends Component {
  template(): string {
    return `
      <nav class="p-2 flex justify-center bg-gray-200">
        <ul class="flex gap-3 text-sm underline">
          <li>
            ${Link({ to: "/", children: "Home" })}
          </li>
          <li>
            ${Link({ to: "/weather", children: "Weather" })}
          </li>
          <li>
            ${Link({ to: "/weather/5day", children: "Weather 5days" })}
          </li>
          <li>
            ${Link({ to: "/about", children: "About" })}
          </li>
          <li>
            ${Link({ to: "/about/detail", children: "AboutDetail" })}
          </li>
          <li>
            ${Link({ to: "/guest", children: "Guest" })}
          </li>
        </ul>
      </nav>
    `
  }
}
