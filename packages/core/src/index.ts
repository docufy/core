import { DocufyTheme, ThemeOption, DocufyApp  } from '@docufy/theme-builder';
export * from "./commands"

export function documentBuilder<T extends DocufyTheme>(options: ThemeOption): DocufyApp<T> {
    return new DocufyApp<T>()
}