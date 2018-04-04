/**
 * Created by liuliu on 2017/7/10.
 */
import Cookie from 'js-cookie';
import api from '@/api/index.js';

const account = {
  state: {
    token: Cookie.get('Login-Token')
  },
  actions: {
    login ({commit, state}, options = {}) {
      return new Promise((resolve, reject) => api.get('/mock/login', null, res => {
        let token = res.token;
        Cookie.set('Login-Token', token);
        commit('SET_TOKEN', {token: token});
        resolve(res);
      }, res => {
        reject(res);
      }))
    }
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload.token;
    },
    LOG_OUT: (state, payload) => {
      state.token = null;
      Cookie.remove('Login-Token');
    }
  }
}

export default account
