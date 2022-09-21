import { Middleware } from '@nuxt/types'

const authMiddleware: Middleware = ({ store, redirect, route }) => {
  if (store.state.count < 10) {
    redirect(`/login?redirect=${encodeURIComponent(route.fullPath)}`)
  }
}

export default authMiddleware
