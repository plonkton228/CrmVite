import { UserConfig } from 'vite'
import { ConfigurationViteTypes } from './types/ConfigurationTypes'
import { BuildOptionsConfig } from './buildOptions'
import { ResolveOptionsConfig } from './ResolveOptions'

export const ConfigurationVite = (config: ConfigurationViteTypes): UserConfig => {
   return {
     mode: config.mode,
     root: config.root,
     build: BuildOptionsConfig(config.build, config.mode),
     resolve: ResolveOptionsConfig()
     
   }
}