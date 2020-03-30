const dirObj = require('../prompts/dirObj');
const storeList = require('../prompts/storeList');

module.exports = {
    description: 'Stateful component with MobX generator',
    prompts: [
        {
            name: 'name',
            message: 'Component name',
            type: 'input',
        },
        storeList,
        dirObj,
    ],
    actions: [{
        type: 'addMany',
        base: 'frontend/__plop__/templates/component/statefulWithMobx/',
        destination: 'frontend/src/{{dir}}/{{name}}/',
        templateFiles: 'frontend/__plop__/templates/component/statefulWithMobx/*',
    }],
};