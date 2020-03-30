const dirObj = require('../prompts/dirObj');

module.exports = {
    description: 'New npm project skelet',
    prompts: [
        {
            name: 'name',
            message: 'Project name',
            type: 'input',
        },
        {
            name: 'version',
            message: 'Project version',
            default: '1.0.0',
            type: 'input',
        },
        {
            name: 'description',
            message: 'Project description',
            type: 'input',
        },
        dirObj,
    ],
    actions: [
        {
            type: 'addMany',
            base: '.plop/templates/project/',
            destination: '{{dir}}/{{name}}/',
            templateFiles: '.plop/templates/project/**/*',
            globOptions: {
                dot: true,
            },
        },
    ],
};