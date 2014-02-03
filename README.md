# [gulp](https://github.com/wearefractal/gulp)-connect

> Gulp plugin connect to server and opening browser

## Install

Install with [npm](https://npmjs.org/package/gulp-mocha)

```
npm install --save-dev gulp-connect
```


## Example

####js
```js
var connect = require('gulp-connect');

gulp.task('connect', connect({
  root: __dirname + '/app',
  port: 3000
}));

gulp.task('default', ['connect']);
```

**or**

```js
var connect = require('gulp-connect');

gulp.task('connect', connect({
  root: __dirname + '/app',
  port: 3000,
  open: {
    file: 'index.html',
    browser: 'chrome' // if not working OS X browser: 'Google Chrome'
  }
}));

gulp.task('default', ['connect']);
```


####coffee
```coffee
connect = require('gulp-connect')
gulp.task 'connect', connect(
  root: __dirname + '/app'
  port: 3000
  open:
    file: 'index.html'
    browser: 'chrome'
)
gulp.task 'default', ['connect']
```


## API

#### options.root

Type: `String`  
Default: `app`

The root path

#### options.port

Type: `Number`  
Default: `3000`

The connect port

#### options.rewrite

Type: `String`
Default: undefined

File used when no match found (e.g. "404.html")

#### options.open

Type: `Object`  
Default: `{}`

#### options.open.file

Type: `String`  
Default: `index.html`

The open file

#### options.open.browser

Type: `String`  
Default: `chrome`

The type of browser


## License

MIT © Vladislav Derjavin <dev@vld.me>
