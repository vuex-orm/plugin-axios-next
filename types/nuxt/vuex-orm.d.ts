import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Model } from '@vuex-orm/core'

declare module '@vuex-orm/core/dist/src/repository/Repository' {
  interface Repository<M extends Model = Model> {
    /**
     * The axios instance.
     */
    axios: NuxtAxiosInstance
  }
}
