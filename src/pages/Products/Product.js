import React, { useState, useEffect } from 'react';

import './Product.css';
import ProtectedPageLayout from '../../components/UI/ProtectedPageLayout/ProtectedPageLayout';
import api from '../../services/Api';

function Product() { 
    const [productList, setProductList] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await api.get( '/product.json')
                setProductList({
                    productList: response.data
                });
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, []);

    return (
        <ProtectedPageLayout>
            {productList ? ( 
                <table className='product'>
                <thead>
                    <tr>
                        <th className='border-top-down-highlight'>Name</th>
                        <th className='border-top-down-highlight'>Description</th>
                        <th className='border-top-down-highlight'>Image</th>
                        <th className='border-top-down-highlight'>Price Range (RM)</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        Object.keys(productList.productList).map(productId => {
                            return (
                            <tr key={productId}>
                                <td style={{width: '10%'}}>
                                    <a href={`Product/${ productId }`} style={{color: '#368cba'}}>{ productList.productList[productId].name }</a>
                                </td>
                                <td className="description">{ productList.productList[productId].description }</td>
                                <td><img src={ productList.productList[productId].image_path } alt="Product" width="150" /></td>
                                <td style={{color: '#368cba'}}>
                                    { productList.productList[productId].lower_price_range.toLocaleString(undefined, {maximumFractionDigits:2}) } - 
                                    { productList.productList[productId].upper_price_range.toLocaleString(undefined, {maximumFractionDigits:2}) }
                                </td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
            ) : (
                <p>Loading product...</p>
            )}
        </ProtectedPageLayout>
    );
}

export default Product;
