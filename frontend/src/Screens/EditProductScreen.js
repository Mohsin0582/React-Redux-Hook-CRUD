import React, {  useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import { editProduct } from '../actions/productActions.js';


export default function ProductScreen(props) {

    const productEdit = useSelector(state => state.productEdit);
    const { product, loading, error } = productEdit;

    // const [brand, setBrand] = useState([]);

    const dispatch = useDispatch();


    useEffect(() => {
        // dispatch(editProduct(props.match.params.id));
        return () => {};
    }, [] );

    const handleSubmit = (data) =>{

    }

    return loading ? <div>Loading...</div> : error ? <div>{error}</div> : 
    <div>
        <h1>Product</h1>
        <span>{product._id}</span>
        <form onSubmit={handleSubmit()}>
            <input type="text" maxlength="25"/>
            <input type="submit" value="Submit"/>
        </form>
        
    </div>
}