import path from 'path'
import { AliasOptions, ResolveOptions } from 'vite'
import { ConfigurationViteTypes } from './types/ConfigurationTypes'
export const ResolveOptionsConfig = (config: ConfigurationViteTypes):ResolveOptions => {
     return {
      
      extensions: ['.ts', '.tsx', '.json']
     }
}