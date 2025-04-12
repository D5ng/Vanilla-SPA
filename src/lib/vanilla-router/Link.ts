import { NavigateOptions } from "./router.type"
import { serializeDataAttributes } from "./router.utils"

interface LinkProps extends NavigateOptions {
  to: string
  children: string
}

export function Link({ to, children, ...options }: LinkProps) {
  const dataAttributes = serializeDataAttributes(options)

  return `
    <a href=${to} data-component="Link" data-href=${to} ${dataAttributes}>${children}</a>
  `
}
