import express from 'express';
import Product from '../models/products';
const router = express.Router();


// GETTING THE LIST OF ALL PRODUCTS
router.get('/products', async (req, res) => {
    try{
        await Product.find({}).then(products => 
                res.status(200).json(products)
            );
    }catch(error){
        return res.status(500).send({ message: error.message });
    }
});


// SAVING A PRODUCT
router.post('/product', async (req, res) => {
    try{
        const product = new Product({
            name: req.body.productName,
            // category: req.body.category,
            // image: req.body.image,
            // price: req.body.price,
            // brand: req.body.brand,
            // rating: req.body.rating,
            // numReviews: req.body.numReviews
            category: 'shirts',
            image: '/images/d5.jpg',
            price: '70.0',
            brand: 'khaddi2',
            rating: '5.0',
            numReviews: '1102'
      
        });
        
        await product.save().then( () => 
            res.status(200).json({ 
                message : "New product created successfully!",
                data : product
            })
        )

    }catch(error){
        return res.status(500).send({ message: error.message });
    }
});


// UPDATING A PRODUCT
router.put('/product/edit/:id', async (req, res) => {

    try{
        const product = await Product.findById({ _id: req.params.id });
        console.log(product.name);
        if(product){
            product.message= 'Product update unsuccessfull!',
            product.name = req.body.productName
        }else{
            return res.status(500).send({ message: error.message });
        }
        
        await product.save().then( () => 
            res.status(200).json({ 
                message : "Product updated successfully!",
                data : product
            })
        )

    }catch(error){
        console.log(error.message);
        return res.status(500).send({ message: error.message });
    }
});


// DELETING A PRODUCT
router.delete('/product/delete/:id', async (req, res) => {
    try{
        await Product.findById({ _id: req.params.id }).remove().then( () => 
            res.status(200).json({  
                    message: 'Product deleted successfully!' 
                })
            );

    }catch(error){
        return res.status(500).send({ msg: error.message });
    }
});










export default router;