# Tailwind CSS Rounded Inherit
Deeply nested `border-radius` inheritance in Tailwind CSS. This plugin adds `rounded{-[t|r|b|l]}-inherit` utilities that allow for deeply nested child elements to inherit border radius values.

**Note:** This project is under active development and may be subject to breaking changes until it reaches a stable version 1.0.0.

## Installation
Install with your favorite NodeJS package manager:

```bash
$ npm install tailwindcss-rounded-inherit

$ yarn add tailwindcss-rounded-inherit
```

Add to your Tailwind CSS config file:

```js
// tailwind.config.js

module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-rounded-inherit')
  ],
}
```

## Example

```html
  <!-- Apply any `rounded` utilities to an element -->
  <div class="flex w-[500px] h-[300px] shadow-md rounded-tl-lg rounded-tr-3xl rounded-b-2xl">

    <!-- Children can use inherit utilities to get their values from the parent -->
    <div class="flex-1 max-w-[200px] bg-blue-500 rounded-l-inherit"></div>

    <div class="flex-1 flex flex-col">
      <!-- Deeply nested children can still use inherit utilities -->
      <div class="flex-1 bg-red-500 rounded-tr-inherit"></div>
      <div class="h-[100px] bg-green-500 rounded-br-inherit"></div>
    </div>

</div>
```

## License

Tailwind CSS Rounded Inherit is [MIT](LICENSE) licensed.
