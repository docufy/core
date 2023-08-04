export class DocufyApp<T extends DocufyTheme> {}

export interface Navbar {}

export type Style = {
  navbar: Navbar;
};

export type ThemeOption = {
  lang: string;
  title: string;
  description?: string;
  styles?: Style;
};

export type Local = { [path: string]: Object };
export type Plugin = { [path: string]: Object };

export interface DocufyTheme {
  src: string;
  assets: string;
  options: ThemeOption;
  host?: string;
  port?: number;
  dest?: number;
  locales?: Array<Local>;
  cache?: boolean;
  plugins?: Array<Plugin>;
}

export interface DefaultTheme extends DocufyTheme {
  src: 'pages/',
  assets: 'assets/',
  options: {
    lang: 'en',
    title: 'Default theme',
    description: 'This is default theme',
    styles: {
      navbar: {
        
      }
    }
  };
}
