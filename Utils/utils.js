var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        var filename = file.originalname.replace('-', '_');
        cb(null, Date.now() + "-" + filename)
    }
});

var upload = multer({ storage: storage });

var getUpload = function () {
    return upload;
}

var getFilesUpload = function () {
    var uploadFolder = './public/uploads';
    var fs = require('fs');

    var files = [];

    fs.readdirSync(uploadFolder).forEach(file => {
        files.push(file);
        console.log(file);
    });

    return files;
}


module.exports.upload = getUpload();
module.exports.getFilesUpload = getFilesUpload;

