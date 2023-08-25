import { Config } from '@stencil/core'

import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'design-system',
  taskQueue: 'async',
  sourceMap: true,
  extras: {
    experimentalImportInjection: true
  },
  globalStyle: 'src/global/global.css',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'dist-hydrate-script',
      dir: 'dist/hydrate'
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      includeGlobalScripts: false
    }
  ]
}
