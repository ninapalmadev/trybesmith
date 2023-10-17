import { Response, Request } from 'express';
import productsService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const product = req.body;
  const createdProduct = await productsService.createProduct(product);
  return res.status(mapStatusHTTP(createdProduct.status)).json(createdProduct.data);
}

export default {
  createProduct,
};