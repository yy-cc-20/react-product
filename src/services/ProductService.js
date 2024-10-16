import api from './Api';

export const getProductList = () => {
    return api.get( '/product.json')
        .then( response => {
            return(response.data);
        } )
        .catch( error => {
            console.log(error);
        } );
};

export const getProductDetails = (productId) => {
    return api.get( '/product.json/' + productId)
        .then( response => {
            return(response.data);
        } )
        .catch( error => {
            console.log(error);
        } );
};
