import api from './Api';

export const login = (username, password) => {
    let user = api.get( '/user.json?username=' + username + '&password=' + password)
        .then( response => {
            return(response.data);
        } )
        .catch( error => {
            console.log(error);
        } );
    if (user) {
        localStorage.setItem('user id', user.id);
        localStorage.setItem('username', user.username);
        localStorage.setItem('user email', user.email);
    }
};

export const logout = () => {
    localStorage.removeItem('user id');
    localStorage.removeItem('username');
    localStorage.removeItem('useremail');
};
