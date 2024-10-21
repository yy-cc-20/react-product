import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import './ProductDetails.css';
import ProtectedPageLayout from '../../components/UI/ProtectedPageLayout/ProtectedPageLayout';
import api from '../../services/Api';
import Error from '../../components/UI/Error/Error';

function ProductDetails() { 
    const [product, setProduct] = useState(null);
    const productId = useParams().id;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get( '/product.json')
                setProduct({
                    product: response.data[productId]
                });
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, []);

    return (
        <ProtectedPageLayout>
            {(product && product.product) ? 
            ( 
                <div className='product-details'>
                    <p>{ product.product.name }</p>
                    <img src={ product.product.image_path } alt="Product" width="300" height="200" />

                    <table>
                    <tbody>
                        <tr>
                            <th>Description</th>
                            <td style={{backgroundColor: '#7ad3ef'}}>{ product.product.description }</td>
                        </tr>

                        <tr style={{backgroundColor: '#0874d3'}}>
                            <th className="variance">Variance</th>
                            <td></td>
                        </tr> 
                        { 
                        Object.keys(product.product.variance).map(varianceId => 
                        (
                            <tr key={varianceId}>
                                <th>{ product.product.variance[varianceId].info } </th>
                                <td className="variance-td">{ product.product.variance[varianceId].price.toLocaleString(undefined, {maximumFractionDigits:2}) } </td>
                            </tr> 
                        ))}
                    </tbody>
                    </table>
                    <button><a href='/Product'>Back</a></button>
                </div>
            ) : (
                <Fragment>
                    <Error>Invalid Product ID</Error>
                    <div className='product-details'>
                        <button  style={{position: 'fixed', top: '90%', transform: 'translate(-50%, -50%)'}}>
                            <a href='/Product'>Back</a>
                        </button>
                    </div>
                </Fragment>
            )}
        </ProtectedPageLayout>
    );
}

export default ProductDetails;
