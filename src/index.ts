declare module 'extension' {
  global {
    function getEmoji(args: LavendeuxValue[]): LavendeuxValue;
  }
}

globalThis.extension = (): LavendeuxExtension => ({
  name: 'emoji',
  author: 'jf908',
  version: __VERSION__,
  functions: {
    emoji: 'getEmoji',
  },
});

function getStringValue(value: LavendeuxValue): string | undefined {
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
