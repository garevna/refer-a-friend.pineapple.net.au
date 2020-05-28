/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

const state = {
  userInfo: {
    name: '',
    email: '',
    address: '',
    postCode: '',
    state: '',
    phone: '',
    message: ''
  },
  mailEndpoint: 'https://api.pineapple.net.au/email/landing'
}

const getters = {
  endpoint: (state, getters, rootState) => rootState.contactEndpoint,
  pages: (state, getters, rootState) => rootState.pages.filter(item => item !== 'Contact Us'),
  selectors: (state, getters, rootState) => rootState.selectors.filter(item => item !== '#contact')
}

const mutations = {
  UPDATE_USER_INFO: (state, payload) => { state.user[payload.prop] = payload.value }
}

const actions = {

  async SEND_EMAIL ({ state }, data) {
    const response = await (await fetch(state.mailEndpoint, {
      method: 'POST',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })).json()

    return response.status
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
