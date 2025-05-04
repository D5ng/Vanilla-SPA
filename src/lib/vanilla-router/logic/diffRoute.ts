import { Route } from "../router.type"
import { resolveRouteStack } from "./findRoute"

export function diffRoute(routes: Route[], currentPath: string, nextPath?: string) {
  const { routeStack: currentStack } = resolveRouteStack(currentPath, routes)
  const { routeStack: nextStack } = resolveRouteStack(nextPath || "/", routes)

  if (JSON.stringify(currentStack) === JSON.stringify(nextStack)) {
    return {
      depth: 0,
      removeComponent: [],
      renderComponent: nextStack,
    }
  }

  const minLength = Math.min(currentStack.length, nextStack.length)

  let depth = 0

  for (let i = 0; i < minLength; i++) {
    if (JSON.stringify(currentStack[i]) !== JSON.stringify(nextStack[i])) {
      break
    }

    depth++
  }

  return {
    depth,
    removeComponent: currentStack.slice(depth),
    renderComponent: nextStack.slice(depth),
  }
}
