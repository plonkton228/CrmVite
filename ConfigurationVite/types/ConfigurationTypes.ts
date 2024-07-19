export type Mode = 'development' | 'production'
export interface buildOptions {
    outDir: string
}
export interface ConfigurationViteTypes {
    root: string,
    mode : string,
    build: buildOptions,
}