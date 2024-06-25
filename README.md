# Notion2Anki Card Cleaner

This tool cleans [Anki] cards by removing unnecessary HTML code generated when exporting from [Notion] using [Notion2Anki].

> [!NOTE]
> **I just switched to Mochi**
>
> I switched to [Mochi] for my flashcards because my previous workflow with Anki and Notion was still causing a lot of friction. Mochi is an excellent alternative to Anki that natively supports markdown, which simplifies my process significantly. I highly recommend it to anyone who needs to deal with code blocks in their flashcards.
>
> Therefore, I’m no longer using or maintaining this tool. However, I’m leaving it here for those who might still find it useful, whether to use it as-is or to modify it according to their needs.

[![Screenshot](screenshot.png)](https://codepen.io/jorgecancinof/full/NWdBOMg)

## Usage

1. Open the [CodePen] version.
2. Copy your Anki card code.
3. Paste it into the left input field.
4. Click "Clean".
5. Review the cleaned code. If it looks correct, proceed; if not, adjust as needed.
6. Click "Copy".
7. Replace your original Anki card code with the cleaned version.

## Motivation

This tool addresses a specific issue in my personal study workflow:

1. I create flashcards in [Notion] during study sessions.
2. I export these to HTML and use [Notion2Anki] to generate an [Anki] import file.
3. After importing, I replace code blocks with syntax-highlighted screenshots from [Carbon].
4. However, this process often breaks the card styling.
5. Previously, I had to manually clean the card code to fix the styling.

This tool automates the cleaning process, saving time and effort.

## License

This project is licensed under the terms of the [MIT license].

[CodePen]: https://codepen.io/jorgecancinof/full/NWdBOMg
[Anki]: https://apps.ankiweb.net/
[Notion]: https://www.notion.so/
[Notion2Anki]: https://2anki.net/
[Carbon]: https://carbon.now.sh/
[Mochi]: https://mochi.cards/
[MIT license]: LICENSE
