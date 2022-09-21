import { ActionTree, GetterTree, MutationTree } from 'vuex'

export const state = () => ({
  count: 0,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  count: (state) => state.count,
}

export const mutations: MutationTree<RootState> = {
  increment(state) {
    state.count++
  },
  asyncIncrement(state, payload: number) {
    state.count += payload
  },
}

export const actions: ActionTree<RootState, RootState> = {
  asyncActionCount({ commit }) {
    const res = { data: 10 }
    commit('asyncIncrement', res.data)
  },
  // gửi từ server về client
  nuxtServerInit() {
    // make request
    // const res = { data: 10 }
    // commit('asyncIncrement', res.data)
    // console.log('nuxtServerInit')
  },
}
