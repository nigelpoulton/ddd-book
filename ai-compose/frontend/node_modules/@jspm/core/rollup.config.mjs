import rollupPluginJspm from '@jspm/plugin-rollup';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import rimraf from 'rimraf';

rimraf.sync('./nodelibs/browser');

// Patch call-bind, pending https://github.com/ljharb/call-bind/pull/8.
const callBindPath = './node_modules/call-bind/callBound.js';
writeFileSync(callBindPath, readFileSync(callBindPath, 'utf8').replace('./', 'call-bind'));

const input = Object.fromEntries(
  [
    ...readdirSync('./src-browser'),
    'assert/strict.js',
    'fs/promises.js',
    'dns/promises.js',
    'path/posix.js',
    'path/win32.js',
    'stream/consumers.js',
    'stream/promises.js',
    'stream/web.js',
    'timers/promises.js',
    'util/types.js',
  ]
    .filter(n => !n.startsWith('__') && n.endsWith('.js'))
    .map(n => [n.slice(0, -3), './src-browser/' + n])
);

const jspmPlugin = rollupPluginJspm({
  env: ['browser'],
  inputMap: {
    imports: {
      // TODO: fix these cases in JSPM generator
      './node_modules/asn1.js/lib/asn1': './node_modules/asn1.js/lib/asn1.js',
      './node_modules/hash.js/lib/hash/sha': './node_modules/hash.js/lib/hash/sha.js',
      './node_modules/readable-stream/lib/stream': './node_modules/readable-stream/lib/stream.js',
      punycode: './node_modules/punycode/punycode.js'
    },
    scopes: {
      './node_modules/': input
    }
  }
});

export default {
  input,
  output: {
    dir: 'nodelibs/browser',
    entryFileNames: '[name].js',
    chunkFileNames: 'chunk-[hash].js',
    format: 'esm'
  },
  onwarn () {},
  plugins: [jspmPlugin]
}
