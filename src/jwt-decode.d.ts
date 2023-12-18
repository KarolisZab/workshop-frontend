declare module 'jwt-decode' {
    function jwt_decode<T = Record<string, any>>(token: string): T;
    export default jwt_decode;
}