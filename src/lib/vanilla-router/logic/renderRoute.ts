import { getOutletElement } from "../Outlet"
import { Route } from "../router.type"
import { diffRoute } from "./diffRoute"

export function renderRoute(routes: Route[], rootElement: HTMLElement, currentPath: string, nextPath: string = "") {
  const { depth, removeComponent, renderComponent } = diffRoute(routes, currentPath, nextPath)

  for (let i = 0; i < removeComponent.length; i++) {
    const element = getOutletElement(depth + i)
    if (element) {
      element.innerHTML = ""
    }
  }

  for (let i = 0; i < renderComponent.length; i++) {
    const element = depth + i === 0 ? rootElement : getOutletElement(depth + i)

    if (element) {
      new renderComponent[i].component({ target: element })
    }
  }
}
