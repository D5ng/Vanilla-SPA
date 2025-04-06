export interface ComponentProps<Props = any, State = any> {
  target: HTMLElement
  props?: Props
  state?: State
}
