import { DocufyTheme, ThemeOption, DocufyApp } from '@docufy/theme-builder';
export * from "./commands";
export declare function documentBuilder<T extends DocufyTheme>(options: ThemeOption): DocufyApp<T>;
