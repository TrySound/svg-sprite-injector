# svg-sprite-injector
Async load svg-sprites

> Inspired by http://osvaldas.info/caching-svg-sprite-in-localstorage

## Usage

Just simply call
```js
svgSpriteInjector('sprite.svg');
```

## Cache by localStorage

```js
svgSpriteInjector('sprite.svg', {
	revision: 1 // Revision identifier
});
```

## Params in DOM

```js
svgSpriteInjector(document.body);
```

```html
<body data-svg-sprite="sprite.svg" data-svg-sprite-revision="1">
	<div></div>
</body>
```

## Combine separated SVG's

For combine svg files into one with <symbol> elements use
[gulp-svgstore](https://github.com/w0rm/gulp-svgstore)
or
[grunt-svgstore](https://github.com/FWeinb/grunt-svgstore)

## License

[The MIT License (MIT)](LICENSE)

Copyright &copy; 2015 Bogdan Chadkin
