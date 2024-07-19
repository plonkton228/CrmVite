import { UserConfig } from 'vite'
import { ConfigurationViteTypes } from './types/ConfigurationTypes'
import { ResolveOptionsConfig } from './ResolveOptions'
import { BuildOptionsConfig } from './BuildOptions'
import { ServerOptionsConfig } from './ServerOptions'
import { PluginsOptions } from './PluginsOptions'

export const ConfigurationVite = (config: ConfigurationViteTypes): UserConfig => {
   return {
     mode: config.mode,
     root: config.root,
     build: BuildOptionsConfig(config.build, config.mode),
     resolve: ResolveOptionsConfig(config),
     server: ServerOptionsConfig(config.server),
     plugins: PluginsOptions(config)
   }
}