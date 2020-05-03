import axios from 'axios'
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import VuexORM, { Model } from '@vuex-orm/core'
import VuexORMAxios from '@/index'

Vue.use(Vuex)
VuexORM.use(VuexORMAxios, { axios })

describe('unit/VuexORMAxios', () => {
  class User extends Model {
    static entity = 'users'
  }

  it('can install the plugin', () => {
    const store = new Store({
      plugins: [VuexORM.install()],
      strict: true
    })

    expect(store.$axios).toBe(axios)

    const userRepo = store.$repo(User)

    expect(userRepo.axios).toBe(axios)
  })
})
