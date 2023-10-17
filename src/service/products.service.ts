import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse, ServiceResponseError } from '../types/ServiceResponse';

async function createProduct(product: Product): Promise<ServiceResponse<Product>> {
  try {
    const createdProduct = await ProductModel.create(product);
    return {
      status: 'CREATED',
      data: createdProduct.dataValues,
    };
  } catch (error) {
    console.error('Error: ', error);
    const errorResponse: ServiceResponse<ServiceResponseError> = {
      status: 'INVALID_DATA',
      data: {
        message: 'Could not create product', 
      },
    };
    return errorResponse;
  }
}

async function getProducts(): Promise<ServiceResponse<Array<object>>> {
  try {
    const products = await ProductModel.findAll();
    return {
      status: 'SUCCESSFUL',
      data: products,
    };
  } catch (error) {
    console.error('Error: ', error);
    const errorResponse: ServiceResponse<ServiceResponseError> = {
      status: 'INVALID_DATA',
      data: {
        message: 'Could not get products',
      },
    };
    return errorResponse;
  }
}

export default {
  createProduct,
  getProducts,
};