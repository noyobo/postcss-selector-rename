# postcss-selector-rename@2.x

A PostCSS plugin to rename css selector.

- required postcss < 8.0

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

- `test?: (name: string) => boolean` | `RegExp` only rename when return true
- `selector?: Partial<Record<'classes' | 'tags' | 'ids', boolean>>` walk selector type
- `rename: (name: string, type: 'classes' | 'tags' | 'ids') => string` return new selector name

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
