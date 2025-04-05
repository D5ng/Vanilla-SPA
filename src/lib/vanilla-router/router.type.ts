import { Component } from "./component/Component"

export interface Route {
  path: string
  component: typeof Component
  errorComponent: (...args: any[]) => string
}

export interface NavigateOptions extends Pick<NavigateEventDetail, "replace" | "state"> {}

export interface NavigateEventDetail {
  to: string
  replace?: boolean
  state?: any
}
