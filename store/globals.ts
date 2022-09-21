import { ActionTree, GetterTree, MutationTree } from 'vuex'

export const state = () => ({
  activeMobileMenu: false,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  activeMobileMenu: (state) => state.activeMobileMenu,
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_MOBILE_MENU(state) {
    state.activeMobileMenu = !state.activeMobileMenu
  },
  HIDE_MOBILE_MENU(state) {
    state.activeMobileMenu = false
  },
}

export const actions: ActionTree<RootState, RootState> = {}
