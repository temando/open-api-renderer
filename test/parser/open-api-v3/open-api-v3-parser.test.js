import { expect } from 'chai';
import inputDefinition from './inputDefinition.json';
import getUIReadyDefinition from '../../../src/parser/open-api-v3/open-api-v3-parser';

describe('getUIReadyDefinition', async () => {
  const definition = await getUIReadyDefinition(inputDefinition);

  it('returns the correct properties', () => {
    expect(definition.title).to.equal('Temando API');
    expect(definition.version).to.equal('1.0.0');
    expect(definition.description).to.equal('Providing consumers with more choice and lowering the cost of shipping.');
  });

  it('returns the correct navigation', () => {
    expect(definition.navigation).to.be.instanceOf(Array);
    expect(definition.navigation).to.have.lengthOf(2);

    expect(definition.navigation[0].title).equal('Product');
    expect(definition.navigation[0].methods).to.be.instanceOf(Array);
    expect(definition.navigation[0].methods).to.have.lengthOf(5);
    expect(definition.navigation[0].methods[0].link).to.equal('/products/get');
    expect(definition.navigation[0].methods[1].link).to.equal('/products/post');
    expect(definition.navigation[0].methods[2].link).to.equal('/products/{id}/get');
    expect(definition.navigation[0].methods[3].link).to.equal('/products/{id}/put');
    expect(definition.navigation[0].methods[4].link).to.equal('/products/{id}/delete');

    expect(definition.navigation[1].title).equal('Shipment');
    expect(definition.navigation[1].methods).to.be.instanceOf(Array);
    expect(definition.navigation[1].methods).to.have.lengthOf(2);
    expect(definition.navigation[1].methods[0].link).to.equal('/shipments/{id}/get');
    expect(definition.navigation[1].methods[1].link).to.equal('/shipments/{id}/put');
  });

  it('return the correct services', () => {
    expect(definition.services).to.be.instanceOf(Array);
    expect(definition.services).to.have.lengthOf(2);

    expect(definition.services[0].title).to.equal('Product');
    expect(definition.services[0].methods).to.be.instanceOf(Array);
    expect(definition.services[0].methods).to.have.lengthOf(5);

    expect(definition.services[0].methods[0].link).to.equal('/products/get');
    expect(definition.services[0].methods[0].responses).to.be.instanceOf(Array);
    expect(definition.services[0].methods[0].responses).to.have.lengthOf(2);
    expect(definition.services[0].methods[0].responses[0].code).to.equal('200');
    expect(definition.services[0].methods[0].responses[1].code).to.equal('422');

    expect(definition.services[0].methods[1].link).to.equal('/products/post');
    expect(definition.services[0].methods[1].request.schema[0].name).to.equal('data');
    expect(definition.services[0].methods[1].responses).to.be.instanceOf(Array);
    expect(definition.services[0].methods[1].responses).to.have.lengthOf(2);
    expect(definition.services[0].methods[1].responses[0].code).to.equal('201');
    expect(definition.services[0].methods[1].responses[0].schema[0].name).to.equal('data');
    expect(definition.services[0].methods[1].responses[1].code).to.equal('422');

    expect(definition.services[0].methods[2].link).to.equal('/products/{id}/get');
    expect(definition.services[0].methods[2].responses).to.be.instanceOf(Array);
    expect(definition.services[0].methods[2].responses).to.have.lengthOf(3);
    expect(definition.services[0].methods[2].responses[0].code).to.equal('200');
    expect(definition.services[0].methods[2].responses[1].code).to.equal('404');
    expect(definition.services[0].methods[2].responses[2].code).to.equal('422');

    expect(definition.services[0].methods[3].link).to.equal('/products/{id}/put');
    expect(definition.services[0].methods[3].request.schema[0].name).to.equal('data');
    expect(definition.services[0].methods[3].responses).to.be.instanceOf(Array);
    expect(definition.services[0].methods[3].responses).to.have.lengthOf(3);
    expect(definition.services[0].methods[3].responses[0].code).to.equal('200');
    expect(definition.services[0].methods[3].responses[1].code).to.equal('404');
    expect(definition.services[0].methods[3].responses[2].code).to.equal('422');

    expect(definition.services[0].methods[4].link).to.equal('/products/{id}/delete');
    expect(definition.services[0].methods[4].responses).to.be.instanceOf(Array);
    expect(definition.services[0].methods[4].responses).to.have.lengthOf(3);
    expect(definition.services[0].methods[4].responses[0].code).to.equal('204');
    expect(definition.services[0].methods[4].responses[1].code).to.equal('404');
    expect(definition.services[0].methods[4].responses[2].code).to.equal('422');

    expect(definition.services[1].title).to.equal('Shipment');
    expect(definition.services[1].methods).to.be.instanceOf(Array);
    expect(definition.services[1].methods).to.have.lengthOf(2);

    expect(definition.services[1].methods[0].link).to.equal('/shipments/{id}/get');
    expect(definition.services[1].methods[0].responses).to.be.instanceOf(Array);
    expect(definition.services[1].methods[0].responses).to.have.lengthOf(5);
    expect(definition.services[1].methods[0].responses[0].code).to.equal('200');
    expect(definition.services[1].methods[0].responses[1].code).to.equal('400');
    expect(definition.services[1].methods[0].responses[2].code).to.equal('401');
    expect(definition.services[1].methods[0].responses[3].code).to.equal('404');
    expect(definition.services[1].methods[0].responses[4].code).to.equal('500');

    expect(definition.services[1].methods[1].link).to.equal('/shipments/{id}/put');
    expect(definition.services[1].methods[1].request.schema[0].name).to.equal('data');
    expect(definition.services[1].methods[1].responses).to.be.instanceOf(Array);
    expect(definition.services[1].methods[1].responses).to.have.lengthOf(4);
    expect(definition.services[1].methods[1].responses[0].code).to.equal('200');
    expect(definition.services[1].methods[1].responses[1].code).to.equal('401');
    expect(definition.services[1].methods[1].responses[2].code).to.equal('403');
    expect(definition.services[1].methods[1].responses[3].code).to.equal('422');
  });
});

