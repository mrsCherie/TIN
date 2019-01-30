
var fs = require('fs');


var path = "‎Macintosh HD\\Users\\MrsCherie\\WebstormProjects\\TIN7(b)\\Watch_folder\\";

fs.readdir(path, function(err, items) {
    console.log(items);

    for (var i=0; i<items.length; i++) {
        console.log(items[i]);
    }
});
fs.watch(path, function (event, filename) {
    // console.log('event is: ' + event);
    // console.log('file is: ' + filename);
    if (filename) {
        fs.readFile(path + filename, 'utf8', function(err, data) {
            if (err) throw err;
            console.log('OK: ' + filename);
            console.log(data)
        });
    } else {
        console.log('filename not provided');
    }
});