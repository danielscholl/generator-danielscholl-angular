(function() {
    'use strict';

    // require the page-object.js helper file
    var PageObject = require('../page-object');

    // define the base URL for your tests
    var baseURL = '/';

    // declare all the elements you will need in your test
    var elements = {
      homeLink: element(by.id('home-link')),
      fontLink: element(by.id('font-link')),
      colorLink:element(by.id('color-link')),
			iconLink:element(by.id('icon-link')),
      heroText: element(by.id('hero-text'))
    };

    // create a new instance of the PageObject helper passing it the base URL and elements
    var MyPage = new PageObject(baseURL, elements);

    module.exports = MyPage;
})();