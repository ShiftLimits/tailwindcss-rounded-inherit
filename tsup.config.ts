import type { Options } from 'tsup'

export const tsup:Options = {
	dts: false,
  splitting: false,
  sourcemap: true,
	outDir: 'dist',
	format: ['cjs', 'esm'],
  entryPoints: ['src/index.ts']
}
