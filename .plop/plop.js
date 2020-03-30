const Handlebars = require('handlebars');

const newProject = require('./generators/newProject');

const closeBrace = require('./partials/closeBrace');
const componentExport = require('./partials/componentExport');
const componentReadme = require('./partials/componentReadme');
const componentReturn = require('./partials/componentReturn');
const openBrace = require('./partials/openBrace');

module.exports = function (plop) {
    plop.setGenerator('project', newProject);

    plop.setHelper('encodeMyString', input => new Handlebars.SafeString(input));
    plop.setHelper('injectStores', stores => stores.map(store => `'${store}'`));

    plop.setPartial('closeBrace', closeBrace);
    plop.setPartial('componentExport', componentExport);
    plop.setPartial('componentReadme', componentReadme);
    plop.setPartial('componentReturn', componentReturn);
    plop.setPartial('openBrace', openBrace);
};