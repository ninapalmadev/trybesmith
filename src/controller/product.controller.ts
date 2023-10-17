import { Response, Request } from 'express';
import productsService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const product = req.body;
  const createdProduct = await productsService.createProduct(product);
  return res.status(mapStatusHTTP(createdProduct.status)).json(createdProduct.data);
}

async function getProducts(req: Request, res: Response): Promise<Response> {
  const products = await productsService.getProducts();
  return res.status(mapStatusHTTP(products.status)).json(products.data);
}

export default {
  createProduct,
  getProducts,
};