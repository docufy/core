"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InitCommand = {
    command: 'init',
    describe: 'Initialize new Docufy project',
    handler: () => {
        console.log('Initializing the project...');
    },
};
exports.default = InitCommand;
