const AWS = require('aws-sdk')
    , config = require('./../config')
    , AWS_CONFIG = config.AWS_CONFIG;

AWS.config.update({
    accessKeyId: AWS_CONFIG.accessKey,
    secretAccessKey: AWS_CONFIG.secretKey,
    region: AWS_CONFIG.region
});

const s3 = new AWS.S3();

s3.createBucket({ Bucket: AWS_CONFIG.bucket });

const s3Bucket = new AWS.S3({
    params: {
        Bucket: AWS_CONFIG.bucket
    }
});

function uploadImage(imageName, imageBody, imageType) {
    let params = {
        Key: imageName,
        Body: imageBody,
        ContentType: 'image/' + imageType,
        ACL: 'public-read'
    };
    s3Bucket.putObject(params, function (err, data) {
        if (err) {
            console.log('Error uploading data: ', data);
        } else {
            console.log('Succesfully uploaded the image!');
        }
    });
};

function makeUniqueKey() {
    let key = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 8; i++) {
        key += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return key;
};

module.exports = {

    upload: (req, res, next) => {

        let image = req.body;

        let buffer = new Buffer(image.imageBody.replace(/^data:image\/\w+;base64,/, ""), 'base64');

        let imageName = `${makeUniqueKey()}.${image.imageExtension}`;

        uploadImage(imageName, buffer, image.imageExtension);

        let link = `https://s3-us-west-1.amazonaws.com/${AWS_CONFIG.bucket}/${imageName}`;

        res.status(200).send(link);
    }

};