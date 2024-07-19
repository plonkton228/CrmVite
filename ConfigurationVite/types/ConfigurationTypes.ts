export type Mode = 'development' | 'production'
export interface buildOptions {
    outDir: string,
    outHtmlPlugin: string,
    inputBundle: string
}
export interface serverOptions {
    port: number
}
export interface ConfigurationViteTypes {
    root: string,
    mode : string,
    build: buildOptions,
    server: serverOptions

}