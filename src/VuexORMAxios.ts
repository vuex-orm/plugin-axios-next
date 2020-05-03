import { AxiosInstance } from 'axios'
import { VuexORMPlugin } from '@vuex-orm/core'
import { mixin as storeMixin } from './mixins/Store'
import { mixin as repositoryMixin } from './mixins/Repository'

export interface Options {
  axios?: AxiosInstance
}

export const VuexORMAxios: VuexORMPlugin = {
  install(store, _database, components, options: Options = {}) {
    storeMixin(store, options.axios)
    repositoryMixin(components.Repository)
  }
}
