import { ComponentProps } from "./Component.type"

export class Component<Props = any, State = any> {
  public element: HTMLElement
  public props: Props
  protected state: State

  constructor({ target, props, state }: ComponentProps<Props, State>) {
    this.element = target
    this.props = props as Props
    this.state = state as State

    this.init()
    this.render()
  }

  init() {}

  componentDidMount() {}

  template() {
    return ``
  }

  setState(newState: State) {
    if (JSON.stringify(this.state) === JSON.stringify(newState)) {
      return
    }

    this.state = { ...this.state, ...newState }

    queueMicrotask(() => {
      this.render()
    })
  }

  render() {
    queueMicrotask(() => {
      this.element.innerHTML = this.template()
      this.componentDidMount()
    })
  }

  addEvent(
    eventType: keyof HTMLElementEventMap,
    selector: keyof HTMLElementTagNameMap | string,
    callback: EventListener,
  ) {
    this.element.addEventListener(eventType, (event) => {
      const target = event.target as HTMLElement
      if (target.closest(selector)) {
        callback(event)
      }
    })
  }
}
