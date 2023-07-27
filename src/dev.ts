import { CommandModule } from 'yargs';

const DevCommand: CommandModule = {
  command: 'dev',
  describe: 'Run the development server',
  handler: () => {
    console.log('Running the development server...');
  }
};

export default DevCommand;