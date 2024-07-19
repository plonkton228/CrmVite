import {PluginOption} from 'vite'
import {createHtmlPlugin} from 'vite-plugin-html'
import { ConfigurationViteTypes } from './types/ConfigurationTypes'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import tsconfigPaths from 'vite-tsconfig-paths'
export const PluginsOptions = (config: ConfigurationViteTypes): PluginOption[] => {
  return [
       createHtmlPlugin({
        minify: true,
        entry: config.build.outHtmlPlugin
       }),
       chunkSplitPlugin({
        strategy: 'single-vendor',
      customChunk: (args)=>{
        let { file, id, moduleId, root } = args;
        if(file.startsWith('src/Pages/')){
          file = file.substring(4);
          file = file.replace(/\.[^.$]+$/, '');
          return file;
        }
        return null;
      }
       }),
       tsconfigPaths({
        root: config.root,
       })
  ]
}