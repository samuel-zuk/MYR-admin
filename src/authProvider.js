import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
export default (type, params) => {
    if (type === AUTH_LOGIN) {
        params.email = params.username;
        const { email, password } = params;
        const request = new Request('http://localhost:1337/apiv1/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('token');
    }
    // if (type === AUTH_ERROR) {
    //     const status = params.status;
    //     if (status === 401 || status === 403) {
    //         localStorage.removeItem('token');
    //         return Promise.reject();
    //     }
    //     return Promise.resolve();
    // }
    // if (type === AUTH_CHECK) {
    //     return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    // }
    return Promise.resolve();
}