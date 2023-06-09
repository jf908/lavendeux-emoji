import fs from 'fs/promises';

const filteredEmoji = Object.fromEntries(
  Object.entries(await getGithubEmojiIdMap()).filter(
    ([k, v]) => typeof v === 'string'
  )
);

fs.writeFile('emoji.json', JSON.stringify(filteredEmoji), 'utf-8');

// https://github.com/ikatyang/emoji-cheat-sheet
// MIT License

// Copyright (c) Ika <ikatyang@gmail.com> (https://github.com/ikatyang)

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

function getLast(array) {
  return array[array.length - 1];
}

async function getGithubEmojiIdMap() {
  return Object.fromEntries(
    Object.entries(
      /** @type {{ [id: string]: string }} */ await fetch(
        'https://api.github.com/emojis',
        {
          headers: {
            'User-Agent': 'https://github.com/ikatyang/emoji-cheat-sheet',
          },
        }
      ).then((res) => res.json())
    ).map(([id, url]) => [
      id,
      url.includes('/unicode/')
        ? getLast(url.split('/'))
            .split('.png')[0]
            .split('-')
            .map((codePointText) =>
              String.fromCodePoint(Number.parseInt(codePointText, 16))
            )
            .join('')
        : [getLast(url.split('/')).split('.png')[0]], // github's custom emoji
    ])
  );
}
