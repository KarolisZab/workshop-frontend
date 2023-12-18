import { Commit, createStore } from 'vuex';

interface AuthState {
  roles: string[]; // Roles obtained after login
}

const authModule = {
  state: (): AuthState => ({
    roles: [], // Initial roles are empty
  }),
  mutations: {
    setRoles(state: AuthState, roles: string[]) {
      state.roles = roles;
    },
  },
  actions: {
    updateRoles({ commit }: { commit: Commit }, roles: string[]) {
      commit('setRoles', roles);
    },
  },
  getters: {
    getUserRole(state: AuthState) {
      return state.roles; // Return roles from the state
    },
  },
};

export default createStore({
  modules: {
    auth: authModule,
  },
});

// import { Commit, createStore } from 'vuex';

// interface AuthState {
//   roles: string[]; // Roles obtained after login
// }

// const authModule = {
//   state: (): AuthState => ({
//     roles: JSON.parse(localStorage.getItem('userRoles') || '[]'), // Retrieve roles from localStorage
//   }),
//   mutations: {
//     setRoles(state: AuthState, roles: string[]) {
//       state.roles = roles;
//       localStorage.setItem('userRoles', JSON.stringify(roles)); // Save roles in localStorage
//     },
//   },
//   actions: {
//     updateRoles({ commit }: { commit: Commit}, roles: string[]) {
//       commit('setRoles', roles);
//     },
//   },
//   getters: {
//     getUserRole(state: AuthState) {
//       return state.roles; // Return roles from the state
//     },
//   },
// };

// export default createStore({
//   modules: {
//     auth: authModule,
//   },
// });