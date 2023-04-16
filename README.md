# tasye-languages-tools

## Intro
In some languages like french (idk if others languages have same patterns) before a voyel and a muted "*h*" you should use an "[*élision*](https://fr.wiktionary.org/wiki/%C3%A9lision)".

That's why instead of getting
> "Le chat <u style="text-decoration: #f00 wavy underline">de A</u>driana"

We write:
> "Le chat <u>d'A</u>driana"

## Why use this ?
Using short-long

## How-to install it ?
### using github
we gonna prefer using minified version (use not minified .js while developping and min when publishing)
```html
<script src="https://raw.githubusercontent.com/Tasye24/tasye-languages-tools/main/short-long.min.js"></script>
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