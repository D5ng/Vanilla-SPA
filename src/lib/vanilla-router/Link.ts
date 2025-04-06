import { NavigateOptions } from "./router.type"

interface LinkProps extends NavigateOptions {
  to: string
  children: string
}

export function Link({ to, children, ...options }: LinkProps) {
  const dataAttributes = options
    ? Object.entries(options)
        .map(([key, value]) =>
          typeof value === "object" ? `data-${key}=${JSON.stringify(value)}` : `data-${key}="${value}"`,
        )
        .join("")
    : ""

  return `
    <a href=${to} data-component="Link" data-href=${to} ${dataAttributes}>${children}</a>
  `
}
