import { BuildOptions } from 'vite'
import { buildOptions } from './types/ConfigurationTypes'
export const BuildOptionsConfig = (build: buildOptions, mode: string): BuildOptions => {
  return {
     outDir: build.outDir,
     sourcemap: mode === 'development' ,
    
  }
}