var fs = require('fs'),
    scss = require('postcss-scss'),
    postcss = require('postcss'),
    glob = require('glob');

glob('@(src|test|demo)/**/*.scss', function(err, files) {
    if (err) throw err;
    Promise.all(files.map(function(file) {
        return new Promise(function(resolve) {
            fs.readFile(file, function(err, data) {
                if (err) throw err;
                resolve(postcss([
                    require('stylelint')(),
                    require('postcss-reporter')({
                        clearMessages: true,
                        throwError: true
                    })
                ])
                .process(data, {
                    from: file,
                    syntax: scss
                }));
            });
        });
    }))
    .then()
    .catch(function(err) {
        process.exit(1);
    });
});
