import { defineConfig } from 'vite';
import { resolve } from 'path';
import { version } from './package.json';
import emojiMap from './emoji.json';

export default defineConfig({
  define: {
    __VERSION__: `"${version}"`,
    // Emoji is imported via constant because vite's compilation of json is odd
    __EMOJI_MAP__: emojiMap,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name: 'emoji',
      fileName() {
        return 'emoji.js';
      },
    },
  },
});
