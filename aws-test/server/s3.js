const AWS = require('aws-sdk');
const fs = require('fs');
var path = require("path");

const BUCKET_NAME = 'mivebekofa';
const IAM_USER_KEY = 'AKIA57CFAUYL3RGQKNN4';
const IAM_USER_SECRET = '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';
const PRIVATE_BUCKET_NAME = 'movebeprivatekofa';

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
                    console.log('error in callback', err);
                    return;
                }
                resolve(data);
                console.log('success', data);
            });
        });
    });
}

exports.privateUploadToS3 = privateUploadToS3
function privateUploadToS3(file) {

    return new Promise((resolve, reject) => {

        let s3bucket = new AWS.S3({
            accessKeyId: IAM_USER_KEY,
            secretAccessKey: IAM_USER_SECRET,
            Bucket: PRIVATE_BUCKET_NAME,
        });

        s3bucket.createBucket(function () {

            var params = {
                Bucket: PRIVATE_BUCKET_NAME,
                Key: file.name,
                Body: file.data,
            };

            s3bucket.upload(params, function (err, data) {
                if (err) {
                    reject(err);
                    console.log('error in callback', err);
                    return;
                }
                resolve(data);
                console.log('success', data);
            });
        });
    });
}



exports.downloadFromS3 = downloadFromS3

async function downloadFromS3(filename) {
    let s3bucket = new AWS.S3({
        accessKeyId: 'AKIA57CFAUYL3RGQKNN4',                           // IAM_USER_KEY,
        secretAccessKey: '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',  // IAM_USER_SECRET,
        Bucket: "mivebekofa",                                        // BUCKET_NAME
        region: "eu-central-1",
    });


    const url = s3bucket.getSignedUrl('getObject', {
        Bucket: BUCKET_NAME,
        Key: filename,
        Expires: 30          // seconds
    });

    return url;

}

exports.privateDownloadFromS3 = privateDownloadFromS3

async function privateDownloadFromS3(filename) {
    let s3bucket = new AWS.S3({
        accessKeyId: 'AKIA57CFAUYL3RGQKNN4',                           // IAM_USER_KEY,
        secretAccessKey: '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',  // IAM_USER_SECRET,
        Bucket: "mivebeprivatekofa",                                 // PRIVATE_BUCKET_NAME
        region: "eu-central-1",
    });


    const url = s3bucket.getSignedUrl('getObject', {
        Bucket: "mivebeprivatekofa",
        Key: filename || "f76.jpg",
        Expires: 10                   // seconds
    });

    return url;

}