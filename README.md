# Notion2Anki Card Cleaner

This tool cleans your [Anki] cards of unnecessary HTML code generated by [Notion] (through [Notion2Anki]).

[![Screenshot](screenshot.png)](https://codepen.io/jorgecancinof/full/NWdBOMg)

## Usage

1. Just open the `index.html` file or visit the [CodePen] version.
2. Copy the code of your Anki card.
3. Paste it into the input field on the left.
4. Hit the clean button.
5. Hit the copy button.
6. Paste the result replacing the code of your Anki card.

## Motivation

This is just a personal tool that I've created to scratch my own itch.

1. During my study session, I write all my notes as flashcards in [Notion].
2. At the end of my session, I export them to an HTML page.
3. I upload the file to [Notion2Anki] to generate a valid [Anki] file to import those flashcards in the app.
4. After the import is completed, I usually replace code blocks with proper syntax highlighted screenshots (thanks to [Carbon]).
5. This is when my problem begins. The styling breaks after replacing code blocks with images.
6. I had to manually clean the code of the cards to repair the styling.

So I created this tool that helps me alleviate this problem in seconds.

If you want to tweak it for your use case, I highly recommend to just fork and play with the [CodePen] version.

## License

This project is licensed under the terms of the [MIT license].

[CodePen]: https://codepen.io/jorgecancinof/full/NWdBOMg
[Anki]: https://apps.ankiweb.net/
[Notion]: https://www.notion.so/
[Notion2Anki]: https://2anki.net/
[Carbon]: https://carbon.now.sh/
[MIT license]: LICENSE
