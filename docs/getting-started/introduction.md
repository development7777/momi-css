# はじめに

## すぐに始める
momi-cssのCSSとJavascriptファイルをビルドをせずに取り込んですぐに始めましょう。
HTMLの`<head>`タグに
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/development7777/momi-css/dist/css/momi-css.min.css">
```
と、
`<body>`タグの最後の行に
```html
<script src="https://cdn.jsdelivr.net/gh/development7777/momi-css/dist/js/momi-css.min.js"></script>
```
を追加してください。
ブラウザでページを開いてmomi-cssが適用されたページを見てみましょう。

## CDNリンク

主要なCDNリンクはこちらです。

| 種類       | URL                                                                              |
| ---------- | -------------------------------------------------------------------------------- |
| CSS        | `https://cdn.jsdelivr.net/gh/development7777/momi-css/dist/css/momi-css.min.css` |
| Javascript | `https://cdn.jsdelivr.net/gh/development7777/momi-css/dist/js/momi-css.min.js`   |

## 必要事項

momi-cssの必要事項を下に記します。

### Doctype

momi-cssは、Doctypeを必要とします。これを使用しないと表示が崩れることがあります。

```html
<!DOCTYPE html>
<html lang="ja">
    ...
</HTML>
```

### viewport

momi-cssでレスポンシブな見た目を実現するため、viewportを必要とします。
このタグを、`<head>`タグに追加してください。

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```
## 次のステップ

* [他の読み込み方法](./download.md)について見てみる
* momi-cssの[ファイル構造](./contents.md)について知る
