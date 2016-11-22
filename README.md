# sass-spring

CSS spring animations

## Usage

```sh
npm install --save sass-spring
```

```scss
// import the animation-tools file from sass-spring as your setup allows
@import "../node_modules/sass-spring/src/animation-tools";

// define functions calculating values for each property you want to animate
@function generate-property-value($value) {
  // return the computed value of a single css property
  @return $value;
}

// include create-spring with a name to reference it by, a map of properties to
// functions calculating values, and some options
// an optional final parameter specifies the time in seconds per frame to lower
// css bloat; defaults to 1 / 60. Avoid making this higher than 1 / 10
@include create-spring(spring-name, (
  property-name: generate-property-value,
  // the options parameters are the same as framer's default spring curve
), spring-options(250, 25, 0));

.selector {
  // include use-spring to generate the appropriate animation-* properties
  // make sure you run your css through autoprefixer or an equivalent tool if
  // you need vendor prefixes
  @include use-spring(spring-name);
}
```

See [the demos](demo) for more complex and real world usage. Build demos with
`npm run build` and open each demo's html file. Run `npm run watch` to auto
compile changes to demos.

Compiled demos are available on CodePen.

- [many-springs](http://codepen.io/apexskier/pen/OXOZRA)
- [up-and-down](http://codepen.io/apexskier/pen/JKOQby)

## Testing

Local testing uses [node-sass](https://github.com/sass/node-sass).

```sh
npm run test
```
