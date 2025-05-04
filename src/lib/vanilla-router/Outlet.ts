export function Outlet(element?: keyof HTMLElementTagNameMap) {
  const createElement = document.createElement(element || "div")
  createElement.setAttribute("id", "outlet")
  return createElement.outerHTML
}

export function getOutletElement<T extends HTMLElement = HTMLElement>(depth: number) {
  const element = Array(depth).fill("#outlet").join(" ")
  return document.querySelector<T>(element)
}
