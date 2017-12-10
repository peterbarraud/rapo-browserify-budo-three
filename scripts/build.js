var fs = require('fs');

// using rimraf to clean up any existing build
require('rimraf')('./build', function(){
    // and then rebuilding everything from scratch
    require('mkdirp')('./build', function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('index.css: build and uglify');
            var uglified = require('uglifycss').processFiles(
                [ 'index.css' ],
                { maxLineLen: 500, expandVars: true }
            );
            fs.writeFile('build/index.css', uglified);

            console.log('bundle.js: build and uglify');
            var b = require('browserify')();
            b.add('src/js/main.js');
            b.transform('uglifyify', { global: true  })
            var indexjs = fs.createWriteStream('build/index.js');
            b.bundle().pipe(indexjs);

            console.log('index.html: copy');
            require('file-copy')('index.html', 'build/index.html');
            console.log('All done!!!');
        }
    });  
});