# postcss-selector-rename

A PostCSS plugin to rename css selector.

```css
.foo {
}

div {
}
```

```css
.rename-foo {
}

rename-div {
}
```

## Options

default options

```js
{
  test: (name) => true,
  selector: {
    classes: true,
    ids: false,
    tags: true,
  },
  rename: (name, type) => name
}
```

- `test(name: string): boolean` only rename when return true. type: `Function` `RegExp`
- `selector` walk selector type, keys: `classes` `ids` `tags`
- `rename(name: string, type: 'classes' | 'ids' | 'tags'): string` return new selector name

## Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-selector-rename
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   [require('postcss-selector-rename'), Options],
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage
