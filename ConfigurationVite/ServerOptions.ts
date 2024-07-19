import { ServerOptions } from 'vite'
import { serverOptions } from './types/ConfigurationTypes'
export const ServerOptionsConfig = (server: serverOptions): ServerOptions => {
  return {
    port: server.port
  }
}