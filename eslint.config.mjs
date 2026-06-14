// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // The Remotion workspace has its own React toolchain and tsconfig.
  {
    ignores: ['remotion/**'],
  },
)
