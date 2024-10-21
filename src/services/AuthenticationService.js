import api from './Api';

export const login = async (username, password) => {
    let user = await api.get( '/user.json?username=' + username + '&password=' + password)
        .then( response => {
            return(response.data);
        } )
        .catch( error => {
            console.log(error);
        } );
    if (user) {
        localStorage.setItem('user id', user.id);
        localStorage.setItem('username', user.username);
    }
};

export const isLogin = async () => {
    return localStorage.getItem('user id') !== null;
}

export const getUsernameFromSession = async () => {
    return localStorage.getItem('username');
}

export const logout = async () => {
    localStorage.removeItem('user id');
    localStorage.removeItem('username');
};
