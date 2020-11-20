import React, { useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { listProducts, saveProduct } from '../actions/productActions.js';
import ProductScreen from './ProductScreen';

export default function HomeScreen(props) {

    const [productName, setProductName] = useState('');

    const productList = useSelector(state => state.productList);
    const productEdit = useSelector(state => state.productEdit);
    const productSave = useSelector(state => state.productSave);
    const productDelete = useSelector(state => state.productDelete);

    const dispatch = useDispatch();
    
    const { products, loading, error } = productList;


    const { loading : loadingEdit, success: successEdit, error: errorEdit } = productEdit;
    const { loading : loadingSave, success: successSave, error: errorSave } = productSave;
    const { loading : loadingDelete, success: successDelete, error: errorDelete } = productDelete;


    useEffect(() => {
        dispatch(listProducts());
        return () => {};
    }, [successEdit, successSave, successDelete] );

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveProduct({productName}));
    }
    
    return loading ? <div>Loading...</div> : error ? <div>{error}</div> : 
        <div>
            <h1 className="jumbotron mb-5">Products</h1>

            <div className="container">
                <div className="col-6 mx-auto">
                    <form onSubmit={submitHandler}>
                        <div className="input-group mb-3">
                            <input type="text" id="prod_name" name="prod_name" onChange = {(e) => setProductName(e.target.value)} className="form-control" placeholder="Product name" />
                            <div className="input-group-append">
                                <button className="btn btn-success" type="submit">Add</button>
                            </div>
                        </div>
                    </form>


                    {
                        products.map( product => 
                            <ProductScreen key={product._id} product = {product} />
                        )
                    }
                </div>
            </div>
        </div>
}