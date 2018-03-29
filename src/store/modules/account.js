/**
 * Created by liuliu on 2017/7/10.
 */
import Cookie from 'js-cookie'
import api from '@/api/index.js'

const account = {
  state: {
    token: Cookie.get('WDD-Token')
  },
  actions: {
    login ({commit, state}, options = {}) {
      api.get('/mock/login', null, res => {
        let data = res.data
        console.log(res)
        let token = data.token
        Cookie.set('WDD-Token', token)
        commit('SET_TOKEN', {token: token})
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload.token
    },
    LOG_OUT: (state, payload) => {
      state.token = null
      Cookie.remove('WDD-Token')
    }
  }
}

export default account
