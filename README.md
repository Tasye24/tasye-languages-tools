# tasye-languages-tools

## Intro
In some languages like french (idk if others languages have same patterns) before a voyel and a muted "*h*" you should use an "[*élision*](https://fr.wiktionary.org/wiki/%C3%A9lision)".

That's why instead of getting
> "Le chat <u style="text-decoration: #f00 wavy underline">de A</u>driana"

We write:
> "Le chat <u>d'A</u>driana"

## Why use this ?
Using [tasye-language-tools](https://github.com/Tasye24/tasye-languages-tools) is efficient for prevent elisions.

## Which languages available for now ?
| language | pack | locale | version | ready to up ? |
| -------- | ---- | ------ | ------- | ------------- |
| French   | ./pack/fr-FR.yaml | fr-FR | 0.0.1 | :small_orange_diamond: not sure |
| Italian  | ./pack/it-IT.yaml | it-IT | 0.0.1 | :small_orange_diamond: not sure |

## How-to install it ?
- Unsing unpkg
```html
<script src="https://www.unpkg.com/tasye-language-tools@0.0.1/short-long.min.js"></script>
```
- Install-it by cloning with github
```sh
git clone https://github.com/Tasye24/tasye-languages-tools ./tasye-tools/languages
```
## Usage
* Example #1
    ```js
    const prefix = "Le vélo"
    const pretext = {
        long:  prefix + "de", // Le vélo de
        short: prefix + "d'"  // Le vélo d'
    }
    const names = ["John", "Andrea"]

    // 1st name (John)
    full_text = take_long_or_short(pretext, names[0])
    // > full_text = "Le vélo de John"

    // 2nd name (Andrea)
    full_text = take_long_or_short(pretext, names[1])
    // > full_text = "Le vélo d'Andrea"
    ```
