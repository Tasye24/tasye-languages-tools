# tasye-languages-tools

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/tasye24/tasye-languages-tools/npm-publish-github-packages.yml)![GitHub top language](https://img.shields.io/github/languages/top/tasye24/tasye-languages-tools) ![GitHub package.json version](https://img.shields.io/github/package-json/v/tasye24/tasye-languages-tools) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/tasye24/tasye-languages-tools) ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/tasye24/tasye-languages-tools) ![licence](https://img.shields.io/github/license/tasye24/tasye-languages-tools) ![repo size](https://img.shields.io/github/repo-size/tasye24/tasye-languages-tools?label=rpo%20size%20%28full%29)

## Intro

In some languages like french (idk if others languages have same patterns) before a voyel and a muted "*h*" you should use an "[*élision*](https://fr.wiktionary.org/wiki/%C3%A9lision)".

That's why instead of getting

> "Le chat `<u style="text-decoration: #f00 wavy underline">`de A `</u>`driana"

We write:

> "Le chat `<u>`d'A `</u>`driana"

## Why use this ?

Using [tasye-language-tools](https://github.com/Tasye24/tasye-languages-tools) is efficient for prevent elisions.

## Which languages available for now ?

| language | pack              | locale | version | ready to up ? |
| -------- | ----------------- | ------ | ------- | ------------- |
| French   | ./pack/fr-FR.yaml | fr-FR  | 0.0.1   | 🔸 not sure   |
| Italian  | ./pack/it-IT.yaml | it-IT  | 0.0.1   | 🔸 not sure   |

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

# Thanks to all Contributors ❤️

[![Contributors](https://contrib.rocks/image?repo=tasye24/tasye-languages-tools)](https://github.com/tasye24/tasye-languages-tools/graphs/contributors)
