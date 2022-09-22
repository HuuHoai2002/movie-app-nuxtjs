import { Repository } from '~/services'

// khai báo repository trong context của nuxt

declare module '@nuxt/types' {
  interface Context {
    $repository: Repository
  }
}
