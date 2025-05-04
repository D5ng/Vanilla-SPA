// import { findRoute } from "./logic"
import { renderRoute } from "./logic/renderRoute"
import { navigate } from "./navigate"
import type { NavigateEventDetail, Route } from "./router.type"

class Router {
  static _instance: Router
  public routes: Route[]
  public rootElement: HTMLElement
  public outletElement: HTMLElement | null
  public prevPath: string

  private constructor(routes: Route[], rootElement: HTMLElement) {
    this.routes = routes
    this.rootElement = rootElement
    this.outletElement = null
    this.prevPath = ""
    this.init()
  }

  static setInstance(routes: Route[], rootElement: HTMLElement) {
    if (!Router._instance) {
      Router._instance = new Router(routes, rootElement)
      return
    }

    return Router._instance
  }

  static getInstance() {
    if (!Router._instance) {
      console.warn("Router 인스턴스가 존재하지 않습니다.")
      return
    }

    return Router._instance
  }

  init() {
    const { pathname } = window.location
    renderRoute(this.routes, this.rootElement, pathname, pathname)
    this.prevPath = pathname
    this.attachEventHandler()
  }

  render(path: string) {
    renderRoute(this.routes, this.rootElement, this.prevPath, path)
    this.prevPath = path
  }

  attachEventHandler() {
    document.addEventListener("click", (event: Event) => {
      const target = (event.target as HTMLElement).closest("a")

      if (!target) {
        console.warn("event.target에 상위 요소에 커스텀 Link가 없습니다")
        return
      }

      if (target.nodeName !== "A" || !target.dataset.component || !target.dataset.href) {
        return
      }

      event.preventDefault()

      const { href, replace, state } = target.dataset

      const options = {
        replace: Boolean(replace),
        state: typeof state === "object" ? JSON.parse(state as string) : null,
      }

      navigate(href, options)
    })

    window.addEventListener("navigate", (event: CustomEvent<NavigateEventDetail>) => {
      const { to, replace, state } = event.detail

      if (replace) {
        window.history.replaceState(state || null, "", to)
      } else {
        window.history.pushState(state || null, "", to)
      }

      this.render(to)
    })

    window.addEventListener("popstate", () => {
      this.render(window.location.pathname)
    })
  }
}

export { Router }
export const createRouter = (routes: Route[], rootElement: HTMLElement) => Router.setInstance(routes, rootElement)
