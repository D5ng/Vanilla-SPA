import { getRouteParams } from "./getRouteParams"
import type { Route, RouteWithParams } from "../router.type"

export const resolveRouteStack = (path: string, routes: Route[]) => {
  const routeStack: RouteWithParams[] = []

  // Note: 자식 라우트 => 부모 라우트로 이동하면서 스택 쌓음
  const findRoute = (currentPath: string, routes: Route[]): Route | RouteWithParams | null => {
    for (const route of routes) {
      const chainedPath = (currentPath + "/" + route.path).replace(/\/+/g, "/")
      const params = getRouteParams(path, chainedPath)

      if (params !== null) {
        routeStack.push({ ...route, params })
        return { ...route, params }
      }

      if (route.children) {
        const childRoute = findRoute(chainedPath, route.children)

        if (childRoute) {
          routeStack.push({ ...route, params: {} })
          return childRoute
        }
      }

      if (path === chainedPath) {
        routeStack.push({ ...route, params: {} })
        return { ...route, params: {} }
      }
    }

    return null
  }

  const found = findRoute("", routes)
  routeStack.reverse()

  return {
    isMatched: found,
    routeStack,
  }
}
