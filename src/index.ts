declare module 'extension' {
  global {
    function getEmoji(args: Lavendeux.Value[]): Lavendeux.Value;
  }
}

globalThis.extension = (): Lavendeux.Extension => ({
  name: 'emoji',
  author: 'jf908',
  version: __VERSION__,
  functions: {
    emoji: 'getEmoji',
  },
});

function getStringValue(value: Lavendeux.Value): string | undefined {
  return 'String' in value
    ? value.String
    : 'Identifier' in value
    ? value.Identifier
    : undefined;
}

globalThis.getEmoji = function (args) {
  const value = getStringValue(args[0]);
  if (value) {
    return {
      String: __EMOJI_MAP__[value] ?? 'unknown',
    };
  } else {
    throw 'emoji only accepts a string argument';
  }
};
