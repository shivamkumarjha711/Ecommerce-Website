import express from 'express';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

// routes
router.post(
    '/create-product', 
    requireSignIn, 
    isAdmin, 
    formidable(),
    createProductController
    )

// update product
router.put(
    '/update-product/:pid', 
    requireSignIn, 
    isAdmin, 
    formidable(),
    updateProductController
    )

// get products
router.get('/get-product', getProductController)

// single product
router.get('/get-product/:slug', getSingleProductController)

// get photo
router.get('/product-photo/:pid', productPhotoController)

// delete product
router.delete(
    '/delet-product/:pid', 
    deleteProductController
    )

export default router;