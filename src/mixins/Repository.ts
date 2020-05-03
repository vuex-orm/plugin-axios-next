import { AxiosInstance } from 'axios'
import { Repository } from '@vuex-orm/core'

export function mixin(repository: typeof Repository): void {
  Object.defineProperty(repository.prototype, 'axios', {
    get(): AxiosInstance {
      return this.store.$axios
    }
  })
}
