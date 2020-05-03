import { AxiosInstance } from 'axios'
import { Store } from 'vuex'

export function mixin(store: Store<any>, axios?: AxiosInstance): void {
  if (axios) {
    store.$axios = axios
  }
}
