import { AxiosInstance } from 'axios'

declare module 'vuex/types/index' {
  interface Store<S> {
    /**
     * The axios instance.
     */
    $axios: AxiosInstance
  }
}
