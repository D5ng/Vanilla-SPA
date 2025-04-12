import { NavigateEventDetail } from "./lib/router.type"

declare global {
  interface Window {
    addEventListener(
      type: "navigate",
      listener: (this: Window, ev: CustomEvent<NavigateEventDetail>) => void,
      options?: boolean | AddEventListenerOptions,
    ): void
  }
}
