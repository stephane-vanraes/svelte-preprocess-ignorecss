# svelte-preprocess-ignorecss

Sometimes you want to import components without their styles, this plugins allows you to do so by stripping away all styling found in files from the specified path.

## Usage

```javascript
const ignoreCss = require('svelte-preprocess-ignorecss);
plugins: [
    preprocess: [
        ignoreCss()
    ]
]
```

## Arguments

The script takes only one argument: an array of paths to be ignored, this defaults to `node_modules`.

Internally it uses regex to make matches, so these paths can be regular expression to give more flexibility:
