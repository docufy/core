import { CommandModule } from 'yargs';
import http from 'http';
import fs from 'fs';
import path from 'path';
import pug from 'pug';
import { DocufyTheme } from '@docufy/theme-builder';


const DevCommand: CommandModule = {
  command: 'dev',
  describe: 'Run the development server',
  handler: async () => {
    const cwd: string = process.cwd();
    const docufyPath: string = cwd;
    const configPath: string = path.join(docufyPath, '.docufy', 'config.ts');

    const configModule = await import(configPath);
    const config = configModule.default as DocufyTheme;

    console.log('config.ts', config)
    // console.log('configPath', require() as DocufyTheme);
    // const config: DocufyTheme = require(configPath)
    // const src = path.join(config.src, 'home.pug')
    // const server = http.createServer((req, res) => {
    //   fs.readFile(src, 'utf-8', (err, data) => {
    //     if(err){
    //       res.end(err.message)
    //       return
    //     }

    //     const themeOptions  = config.options
    //     const compiledPug = pug.compile(data)(themeOptions)

    //     res.end(compiledPug);
    //   })
    // })
    // const port = config.port
    // server.listen(port, () => {
    //   console.log(`Server is running on http://localhost:${port}`);
    // })
  },
};

export default DevCommand;
