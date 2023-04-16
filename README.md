# tasye-languages-tools

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