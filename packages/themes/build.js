import esbuild from 'esbuild';
import pkg from './package.json' assert { type: 'json' };

const dev = process.argv.includes('--dev');

// 데브모드에서 굳이 minify 할 필요 없음
const minify = !dev;

// 코드가 변경되었을 때 바로바로 빌드가 될 수 있도록
const watch = process.argv.includes('--watch');

const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const baseConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify,
  sourcemap: true,
  outdir: 'dist',
  target: 'es2019',
  watch,
  external,
};

Promise.all([
  esbuild.build({
    ...baseConfig,
    format: 'esm',
  }),
  esbuild.build({
    ...baseConfig,
    format: 'cjs',
    outExtension: {
      '.js': '.cjs.js',
    },
  }),
]).catch(() => {
  console.error('Build failed');
  process.exit(1);
});
