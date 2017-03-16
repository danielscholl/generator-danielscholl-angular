/*eslint-disable no-unused-vars*/

const should = require('chai').Should();
const Model = require('../lib/home.model');

describe('The Home Model', function() {
  describe('Defaults', () => {
    const item = new Model();
    it('has a Name', () => item.name.should.equal('yo-dfw'));
    it('has a Message', () => item.message.should.equal('DFW Top Talent'));
    it('has a Generator', () => item.generator.should.equal('yo-generator'));
  });

  describe('Home with Arguments', () => {
    const args = {
      name: 'unitTest1',
      message: 'unitTest2',
      generator: 'unitTest3'
    };
    const item = new Model(args);
    it('has a Name', () => item.name.should.equal(args.name) );
    it('has an Message', () => item.message.should.equal(args.message) );
    it('has a Generator', () => item.generator.should.equal(args.generator) );
  });
});
