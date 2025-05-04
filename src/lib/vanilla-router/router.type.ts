import { Component } from "../component"

export interface Route {
  path: string
  component: typeof Component<any, any>
  errorComponent: (...args: any[]) => string
  children?: Route[]
}

export interface NavigateOptions extends Pick<NavigateEventDetail, "replace" | "state"> {}

export interface NavigateEventDetail {
  to: string
  replace?: boolean
  state?: any
}

export interface RouteWithParams extends Route {
  params: Record<string, any>
}
