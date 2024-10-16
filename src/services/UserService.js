import api from './Api';

export const getUserProfile = (userid) => {
    return api.get( '/user.json/' + userid)
        .then( response => {
            return(response.data);
        } )
        .catch( error => {
            console.log(error);
        } );
};

