import { CommandModule } from 'yargs';

const BuildCommand: CommandModule = {
  command: 'build',
  describe: 'Build the project',
  handler: () => {
    console.log('Building the project...');
  },
};

export default BuildCommand;
