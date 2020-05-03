import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import VuexORM, { Database, Model } from '@vuex-orm/core'
import VuexORMAxios from '@/index'

Vue.use(Vuex)
VuexORM.use(VuexORMAxios)

describe('unit/VuexORMAxios', () => {
  class User extends Model {
    static entity = 'users'
  }

  it('can install the plugin without axios option', () => {
    const database = new Database()

    database.register(User)

    const store = new Store({
      plugins: [VuexORM.install(database)],
      strict: true
    })

    expect(store.$axios).toBe(undefined)

    const userRepo = store.$repo(User)

    expect(userRepo.axios).toBe(undefined)
  })
})
