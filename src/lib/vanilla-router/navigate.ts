import { NavigateOptions } from "./router.type"

export function navigate(to: string, options?: NavigateOptions) {
  const navigateEvent = new CustomEvent("navigate", {
    detail: {
      to,
      ...options,
    },
  })

  dispatchEvent(navigateEvent)
}
