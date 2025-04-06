import { navigate } from "./navigate"
import type { NavigateEventDetail, Route } from "./router.type"
import { normalizePath } from "./router.utils"

class Router {
  static _instance: Router
  private routes: Route[]
  public rootElement: HTMLElement

  private constructor(routes: Route[], rootElement: HTMLElement) {
    this.routes = routes
    this.rootElement = rootElement
    this.init()
  }

  static getInstance(routes: Route[], rootElement: HTMLElement) {
    if (!Router._instance) {
      Router._instance = new Router(routes, rootElement)
    }

    return Router._instance
  }

  init() {
    const { pathname } = window.location
    this.routes = this.routes.map((route) => ({ ...route, path: normalizePath(route.path) }))
    this.changeUrl(pathname)

    this.attachEventHandler()
  }

  matchRoute(path: string) {
    const route = this.routes.find((route) => route.path === path)
    return route
  }

  changeUrl(path: string) {
    const normalizePathname = normalizePath(path)
    const route = this.matchRoute(normalizePathname)

    this.render(route)
  }

  render(route: Route | undefined) {
    if (!route) {
      this.rootElement.innerHTML = this.routes[0].errorComponent()
    }

    new route!.component({ target: this.rootElement })
  }

  attachEventHandler() {
    document.addEventListener("click", (event: Event) => {
      const target = event.target as HTMLElement

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

      this.changeUrl(to)
    })

    window.addEventListener("popstate", () => {
      this.changeUrl(window.location.pathname)
    })
  }
}

export const createRouter = (routes: Route[], rootElement: HTMLElement) => Router.getInstance(routes, rootElement)
