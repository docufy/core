import { CommandModule } from 'yargs';

const InitCommand: CommandModule = {
  command: 'init',
  describe: 'Initialize new Docufy project',
  handler: () => {
    console.log('Initializing the project...');
  },
};

export default InitCommand;
