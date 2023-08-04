import { CommandModule } from 'yargs';

const PreviewCommand: CommandModule = {
  command: 'preview',
  describe: 'Preview the project',
  handler: () => {
    console.log('Previewing the project...');
  },
};

export default PreviewCommand;
