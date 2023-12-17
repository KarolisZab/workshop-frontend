import { reactive, readonly, Ref } from 'vue';

interface AuthState {
  isLoggedIn: boolean;
}

// Reactive state
const state: AuthState = reactive({
  isLoggedIn: false,
});

// Mutation function to update the state
const setLoggedIn = (value: boolean) => {
  state.isLoggedIn = value;
};

export const auth: Readonly<AuthState> = readonly(state);
export const setAuth: (value: boolean) => void = setLoggedIn;