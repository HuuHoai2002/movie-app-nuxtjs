import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = ({ store, redirect }) => {
  if (store.state.count < 10) {
    redirect('/')
  }
}

export default myMiddleware
