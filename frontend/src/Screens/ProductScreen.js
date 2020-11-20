import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import { editProduct, deleteProduct } from '../actions/productActions.js';

export default function ProductScreen({product}) {

    const [productName, setProductName] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();
    const productId = product._id;

    
    useEffect(() => {
        setProductName(product.name);

        return () => {};
    }, [] );

    const updateHandler = () => {
        setIsEdit(!isEdit);
        dispatch(editProduct( { productId, productName} ));
    }

    const editHandler = () => {
        setIsEdit(!isEdit);
    }

    const deleteHandler = (e) => {
        dispatch(deleteProduct(product._id));
    }

    return <div>
        <span className="m-2"># {product._id}</span>
       
        {
            isEdit ? 
                <span>
                    <input type="text" onChange = {(e) => setProductName(e.target.value)} className="col-8 form-control" placeholder="Product name" value={productName} />
                    <button className="btn btn-warning m-2" onClick={ () => updateHandler()} >Save</button>
                </span>
            :
                <span>
                    <span className="m-2">{product.name}</span>
                    <button className="btn btn-primary m-2" onClick={ () => editHandler()} >Edit</button>
                </span>
        }
        <button className="btn btn-danger m-2" onClick={ () => deleteHandler(product)} >Delete</button>
    </div>
}
