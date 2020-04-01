const Handlebars = require('handlebars');
const dotenv = require('dotenv');

dotenv.config();

const newProject = require('./.plop/generators/newProject');

const projectReadme = require('./.plop/partials/projectReadme');

module.exports = function (plop) {
    plop.setGenerator('project', newProject);

    plop.setHelper('encodeMyString', input => new Handlebars.SafeString(input));

    plop.setPartial('projectReadme', projectReadme);
};