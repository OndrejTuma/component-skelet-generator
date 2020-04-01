const projectsDir = process.env.PROJECTS_DIR;

module.exports = {
    name: 'dir',
    type: 'list',
    message: 'Location',
    choices: [
        {
            name: 'Projects folder',
            value: projectsDir,
        },
        {
            name: 'Forms group',
            value: `${projectsDir}/forms`,
        },
    ],
};