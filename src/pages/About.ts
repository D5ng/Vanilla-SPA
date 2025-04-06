import { Component } from "../lib/component"

export default class About extends Component {
  template(): string {
    console.log(this.element)
    return `
      <div>
        <h1>About</h1>
      </div>
    `
  }
}
