const AWS = require('aws-sdk');
const fs = require('fs');
var path = require("path");

const BUCKET_NAME = 'mivebeprivatekofa';
const IAM_USER_KEY = 'AKIA57CFAUYL3RGQKNN4';
const IAM_USER_SECRET = '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';

exports.privateUploadToS3 = privateUploadToS3
function privateUploadToS3(file) {

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

exports.privateDownloadFromS3 = privateDownloadFromS3

async function privateDownloadFromS3(filename) {
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
        region: "eu-central-1",
    });

    //

    // var params = {
    //     Bucket: BUCKET_NAME,
    //     Key: filename || file.name
    // };

    // var readStream = await s3bucket.getObject(params).promise().then((data) => {
    //     console.log(data);
    //     // fs.writeFileSync(`${__dirname}/test.png`, data.Body);

    //     return data.Body;
    // })

    // console.log(readStream);

    // return readStream

    const url = s3bucket.getSignedUrl('getObject', {
        Bucket: BUCKET_NAME,
        Key: filename || "f76.jpg",
        Expires: 10          // seconds
    });

    return url;

    //     , function (err, data) { 
    //     if (err) {
    //         // reject(err)
    //         console.log(err, err.stack);
    //         return
    //     }
    //     else {
    //         // resolve(data)
    //         console.log("success");
    //         console.log(data);
    //     }
    // })
    // .createReadStream()
}