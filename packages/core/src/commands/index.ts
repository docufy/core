import * as yargs from 'yargs';
import BuildCommand from './build';
import DevCommand from './dev';
import InitCommand from './init';
import PreviewCommand from './preview';

yargs
  .command(InitCommand)
  .command(BuildCommand)
  .command(DevCommand)
  .command(PreviewCommand)
  .demandCommand()
  .parse();
