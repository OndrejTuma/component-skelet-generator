const dirObj = require('../prompts/dirObj');

module.exports = {
    description: 'Stateful component generator',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component name',
        },
        dirObj,
    ],
    actions: [{
        type: 'addMany',
        base: 'frontend/__plop__/templates/component/stateful/',
        destination: 'frontend/src/{{dir}}/{{name}}/',
        templateFiles: 'frontend/__plop__/templates/component/stateful/*',
    }],
};