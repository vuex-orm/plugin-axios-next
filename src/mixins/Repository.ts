import { AxiosInstance } from 'axios'
import { Repository } from '@vuex-orm/core'

export function mixin(repository: typeof Repository): void {
  if (!repository.prototype.hasOwnProperty('axios')) {
    Object.defineProperty(repository.prototype, 'axios', {
      get(): AxiosInstance {
        return this.store.$axios
      }
    })
  }
}
