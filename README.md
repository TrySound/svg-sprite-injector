# svg-sprite-injector
Async load svg-sprites

## Usage

Just simply call
```
svgSpriteInjector('sprite.svg');
```

## Cache by localStorage

```
svgSpriteInjector('sprite.svg', {
	revision: 1 // Revision identifier
});
```

## Combine separated SVG's

For combine svg files into one with <symbol> elements use
[gulp-svgstore](https://github.com/w0rm/gulp-svgstore)
or
[grunt-svgstore](https://github.com/FWeinb/grunt-svgstore)

## License

[The MIT License (MIT)](LICENSE)

Copyright &copy; 2015 Bogdan Chadkin
