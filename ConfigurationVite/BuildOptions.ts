import { BuildOptions } from 'vite'
import { buildOptions } from './types/ConfigurationTypes'
export const BuildOptionsConfig = (build: buildOptions, mode: string): BuildOptions => {
  return {
     outDir: build.outDir,
     emptyOutDir: true,
     sourcemap: mode === 'development' ,
     rollupOptions: {
      input:  build.inputBundle,
      output: {
        entryFileNames: 'entry-[name].js',
        chunkFileNames: 'chunk.[hash]-[name].js'
      }
     }
    
    
  }
}