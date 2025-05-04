import { Component } from "../lib/component"
import { Outlet } from "../lib/vanilla-router"

export default class About extends Component {
  template(): string {
    return `
      <div>
        <h1>About</h1>
        <div>
          ${Outlet()}
        </div>
      </div>
    `
  }
}
