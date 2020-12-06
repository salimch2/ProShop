import Product from '../models/productModel.js'
import asynchandler from 'express-async-handler'

//@ desc         Fetch all products
//@ route        GET api/products/:id
//@ access       Public
const getProducts = asynchandler(async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

//@ desc         Fetch all products
//@ route        GET api/products/:id
//@ access       Public

const getProductById = asynchandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not Found')
  }
})
export { getProductById, getProducts }
