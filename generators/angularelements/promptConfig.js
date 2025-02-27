"use strict"

const path = require('path');
const process = require('process');

let defaultOpts = '--style=scss --routing=false --skip-git';

try {

    const ngVersion = require('@angular/cli/package.json');

    if (ngVersion.version.startsWith('7')) {
        defaultOpts = defaultOpts + ' --enable-ivy'
    };

} catch (error) {}

// check if user want to have exntend linking capability
const configOptions = [{
        type: 'input',
        message: 'What is your solution name?',
        name: 'solutionName',
        when: (answers) => answers.framework === 'angularelements',
        default: path.basename(process.cwd()),
        validate: (input) => input.indexOf('-') === -1 && input.indexOf('_') === -1 ? true : 'Dashes or underscores are not allowed in solution name'
    },
    {
        type: 'input',
        message: 'Angular CLI options:',
        name: 'angularCliOptions',
        when: (answers) => answers.framework === 'angularelements',
        default: defaultOpts
    }
]

module.exports = configOptions;
