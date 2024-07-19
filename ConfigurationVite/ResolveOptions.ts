import { ResolveOptions } from 'vite'
export const ResolveOptionsConfig = ():ResolveOptions  => {
     return {
        extensions: ['.ts', '.tsx', '.json']
     }
}