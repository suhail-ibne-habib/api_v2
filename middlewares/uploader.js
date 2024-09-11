const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        let fileName = Date.now() + '-' + ext;
        cb(null, fileName);
    }
});

// Set up multer with storage and size limit
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1000000 // 1MB limit
    },
    // fileFilter: (req, file, cb)=>{
    //   if( 
    //     file.mimetype === 'image/JPEG' ||
    //     file.mimetype === 'image/jpeg' ||
    //     file.mimetype === 'image/JPG' ||
    //     file.mimetype === 'image/PNG' ||
    //     file.mimetype === 'image/png' ||
    //     file.mimetype === 'image/WEBP'
    //   ){
    //       cb(null, true)
    //   }else{
    //     cb(new Error(file.mimetype + " is not allowed"))
    //   }
    // }
});

module.exports = upload;