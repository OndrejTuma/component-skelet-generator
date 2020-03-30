const dirObj = require('../prompts/dirObj');
const storeList = require('../prompts/storeList');

module.exports = {
    description: 'Stateless component with MobX generator',
    prompts: [
        {
            type: 'input',
            name: 'name',
            message: 'Component name',
        },
        storeList,
        dirObj,
    ],
    actions: [{
        type: 'addMany',
        base: 'frontend/__plop__/templates/component/statelessWithMobx/',
        destination: 'frontend/src/{{dir}}/{{name}}/',
        templateFiles: 'frontend/__plop__/templates/component/statelessWithMobx/*',
    }],
};