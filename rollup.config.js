import terser from "@rollup/plugin-terser";

export default {
  input: 'src/js/momi-css.js',
  output: {
    file: 'dist/js/momi-css.js',
    format: 'iife',
    name: 'momicss',
    extend: true,
    banner: '/*! momi-css v1.0.0 | © 2025-2025 development7777 | MIT License */'
  },
  plugins: [
    terser({
      output: {
        comments: /^!/
      }
    })
  ]
};
