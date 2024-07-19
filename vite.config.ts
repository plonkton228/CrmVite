import { defineConfig } from 'vite'
import { ConfigurationVite } from './ConfigurationVite/ConfigurationVite'
import path from 'path'
import { ConfigurationViteTypes  } from './ConfigurationVite/types/ConfigurationTypes'



export default defineConfig(({command, mode}) => {
    const config: ConfigurationViteTypes = {
        root: path.resolve(__dirname),
        mode: mode,
        build: {
            outDir: path.resolve(__dirname, 'dist'),
            outHtmlPlugin: 'src/index.tsx',
            inputBundle: path.resolve(__dirname, 'src', 'index.tsx')
        },
        server: {
            port: 3000
        }
    }
  return ConfigurationVite(config)
})

