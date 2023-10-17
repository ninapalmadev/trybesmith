import { expect } from 'chai';
import sinon from 'sinon';
import  ProductsService from '../../../src/service/products.service';
import  Product from '../../../src/database/models/product.model';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });
  it('should get all products', async function () {
    const findAllStub = sinon.stub(Product, 'findAll');
    findAllStub.rejects(new Error('Database error'));

    const products = await ProductsService.getProducts();

    expect(products).to.deep.equal({
      status: 'INVALID_DATA',
      data: {
        message: 'Could not get products',
      },
    });
  });
});
