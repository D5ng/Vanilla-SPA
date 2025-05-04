import { Component } from "../lib/component"

export default class AboutDetail extends Component {
  template(): string {
    return `
      <div>
        <h3>About Nested Component</h3>
      </div>
    `
  }
}
