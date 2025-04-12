import App from "./App"

const rootElement = document.getElementById("app")

if (!rootElement) {
  throw new Error("RootElement를 찾을 수 없어요.")
}

new App({ target: rootElement })
