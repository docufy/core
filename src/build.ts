import {CommandModule} from 'yargs';
// import {compileClient} from "pug";

const BuildCommand: CommandModule = {
    command: 'build',
    describe: 'Build the project',
    handler: () => {
        console.log('Building the project...');
        // compileClient();

    }
};

export default BuildCommand;