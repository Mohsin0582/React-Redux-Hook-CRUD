import axios from 'axios';
import { PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_EDIT_FAIL, PRODUCT_EDIT_REQUEST, PRODUCT_EDIT_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants";
import { PRODUCT_SAVE_FAIL, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_SUCCESS,  } from "../constants/productConstants";

const listProducts = () => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_LIST_REQUEST});
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload:data});
    }
    catch(error){
        dispatch({ type: PRODUCT_LIST_FAIL, payload:error.message});
    }
}


const editProduct = (product) => async (dispatch) => {
    try{
        dispatch({ type: PRODUCT_EDIT_REQUEST, payload: product });
        const { data } = await axios.put("/api/product/edit/" + product.productId, product);
        dispatch({ type: PRODUCT_EDIT_SUCCESS, payload : data, success:true});
    }
    catch(error){
        dispatch({ type: PRODUCT_EDIT_FAIL, payload : error.message});
    }
}


const saveProduct = (product) => async (dispatch) => {
  
    try{
        dispatch({ type: PRODUCT_SAVE_REQUEST, payload: product });
        const { data } = await axios.post("/api/product", product);
        dispatch({ type: PRODUCT_SAVE_SUCCESS, payload : data, success:true});
    }
    catch(error){
        dispatch({ type: PRODUCT_SAVE_FAIL, payload : error.message});
    }
}


const deleteProduct = (productId) => async (dispatch) => {
  
    try{
        dispatch({ type: PRODUCT_DELETE_REQUEST, payload: productId });
        const { data } = await axios.delete("/api/product/delete/"  + productId);
        dispatch({ type: PRODUCT_DELETE_SUCCESS, payload : data, success:true});
    }
    catch(error){
        dispatch({ type: PRODUCT_DELETE_FAIL, payload : error.message});
    }
}



export { listProducts, editProduct, saveProduct, deleteProduct };