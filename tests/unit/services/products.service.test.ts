import { expect } from 'chai';
import sinon from 'sinon';
import  ProductsService from '../../../src/service/products.service';
import  Product from '../../../src/database/models/product.model';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should create a product', async function () {
    const createStub = sinon.stub(Product, 'create');
    createStub.rejects(new Error('Database error'));

    const product = await ProductsService.createProduct({
      id: 1,
      name: 'Test Product',
      price: 100,
      orderId: 1,
  });

  expect(product).to.deep.equal({
    status: 'INVALID_DATA',
    data: {
      message: 'Could not create product',
    },
  });
  });

});
