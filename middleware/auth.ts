import { Middleware } from '@nuxt/types'

const authMiddleware: Middleware = ({ store, redirect, route }) => {
  if (!store.state.isLogged) {
    redirect(`/login?redirect=${encodeURIComponent(route.fullPath)}`)
  }
}

export default authMiddleware
