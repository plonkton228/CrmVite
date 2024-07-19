import { defineConfig } from 'vite'
import { ConfigurationVite } from './ConfigurationVite/ConfigurationVite'
import path from 'path'
import { ConfigurationViteTypes  } from './ConfigurationVite/types/ConfigurationTypes'



export default defineConfig(({command, mode}) => {
    const config: ConfigurationViteTypes = {
        root: path.resolve(__dirname, 'public'),
        mode: mode,
        build: {
            outDir: path.resolve(__dirname, 'dist')
        }
    }
  return ConfigurationVite(config)
})

