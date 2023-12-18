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

//const jwtDecode = require('jwt-decode');

// export interface DecodedToken {
//   iat: number;
//   exp: number;
//   roles: string[];
//   username: string;
//   [key: string]: any; // Customize this to match your token's payload structure
// }

// export function decodeToken(token: string): DecodedToken | null {
//   try {
//     return (jwtDecode as any)(token) as DecodedToken;
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// }

// import jwt_decode from 'jwt-decode';

// export function decodeToken(token: string): DecodedToken | null {
//   try {
//     return jwt_decode(token) as DecodedToken;
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// }

// import jwt from 'jsonwebtoken';

// interface DecodedToken {
//   iat: number; // Issued At (when the token was issued)
//   exp: number; // Expiry (when the token expires)
//   role: string; // Role of the user
//   username: string; // Username
//   // Add other fields if they are present in your token payload
//   [key: string]: any;
// }

// export function decodeToken(token: string): DecodedToken | null {
//   try {
//     const decoded = jwt.decode(token) as DecodedToken;
//     return decoded;
//   } catch (error) {
//     console.error('Error decoding token:', error);
//     return null;
//   }
// }
