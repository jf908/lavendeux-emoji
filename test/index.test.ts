import { test, expect } from 'vitest';
import '../src/index';

test('getEmoji', () => {
  expect(globalThis.getEmoji([{ String: 'tada' }]).String).toBe('🎉');
  expect(globalThis.getEmoji([{ String: 'rocket' }]).String).toBe('🚀');
  expect(globalThis.getEmoji([{ String: 'jp' }]).String).toBe('🇯🇵');
});
