"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BuildCommand = {
    command: 'build',
    describe: 'Build the project',
    handler: () => {
        console.log('Building the project...');
    },
};
exports.default = BuildCommand;
