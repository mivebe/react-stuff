const AWS = require('aws-sdk');

const BUCKET_NAME = 'mivebekofa';
const IAM_USER_KEY = 'AKIA57CFAUYL3RGQKNN4';
const IAM_USER_SECRET = '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';

exports.uploadToS3 = uploadToS3
function uploadToS3(file) {

    return new Promise((resolve, reject) => {

        let s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: BUCKET_NAME,
        });

        s3bucket.createBucket(function () {

            var params = {
                Bucket: BUCKET_NAME,
                Key: file.name,
                Body: file.data,
                ACL: "public-read"
            };

            s3bucket.upload(params, function (err, data) {
                if (err) {
                    reject(err);
                    console.log('error in callback');
                    console.log(err);
                    return;
                }
                resolve(data);
                console.log('success');
                console.log(data);
            });
        });
    });
}

exports.downloadFromS3 = downloadFromS3

function downloadFromS3(filename) {

    return new Promise((resolve, reject) => {

        let s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: BUCKET_NAME,
            region: "eu-central-1",
            httpOptions: {
                timeout: 900000,
            },
        });

        var params = {
            Bucket: BUCKET_NAME,
            Key: filename || file.name
        };

        var readStream = s3bucket.getObject(params, function (err, data) {
            if (err) {
                // reject(err)
                console.log(err, err.stack);
                return
            }
            else {
                // resolve(data)
                console.log("success");
                console.log(data);
            }
        }).createReadStream()

        resolve(readStream)

    });
}