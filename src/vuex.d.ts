import { Store } from 'vuex';

interface RootState {
  // Define your root state if needed
}

interface AuthState {
  roles: string[]; // Roles obtained after login
}

// Define your module types
interface MyModules {
  auth: AuthState;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<RootState> & MyModules;
  }
}
