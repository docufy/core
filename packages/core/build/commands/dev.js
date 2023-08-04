"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const DevCommand = {
    command: 'dev',
    describe: 'Run the development server',
    handler: async () => {
        const cwd = process.cwd();
        const docufyPath = cwd;
        const configPath = path_1.default.join(docufyPath, '.docufy', 'config.ts');
        const configModule = await Promise.resolve(`${configPath}`).then(s => __importStar(require(s)));
        const config = configModule.default;
        console.log('config.ts', config);
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
exports.default = DevCommand;
