const AWS = require('aws-sdk');

module.exports = function (config) {

    function upload(s3bucket, file, isPublic) {
        return new Promise((resolve, reject) => {
            var params = {
                Bucket: isPublic ? config.BUCKET_NAME : config.PRIVATE_BUCKET_NAME,
                Key: file.name,
                Body: file.data,
                ACL: isPublic ? "public-read" : undefined
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
    }

    async function uploadFile(file, isPublic) {

        return new Promise((resolve, reject) => {

            let s3bucket = new AWS.S3({
                accessKeyId: config.IAM_USER_KEY,
                secretAccessKey: config.IAM_USER_SECRET,
                Bucket: isPublic ? config.BUCKET_NAME : config.PRIVATE_BUCKET_NAME,
            });

            s3bucket.createBucket(function () {

                resolve(s3bucket);
            });
        }).then(s3bucket => upload(s3bucket, file, isPublic));
    }

    async function getFileUrl(filename, isPublic) {
        const bucketName = isPublic ? config.BUCKET_NAME : config.PRIVATE_BUCKET_NAME;
        let s3bucket = new AWS.S3({
            accessKeyId: config.IAM_USER_KEY,
            secretAccessKey: config.IAM_USER_SECRET,
            Bucket: bucketName,
            region: "eu-central-1",
            httpOptions: {
                timeout: 900000,
            },
        });

        const url = s3bucket.getSignedUrl('getObject', {
            Bucket: bucketName,
            Key: filename,
            Expires: 30          // seconds
        });

        return url;
    }

    function deleteFile(asset, isPublic) {
        const bucketName = isPublic ? config.BUCKET_NAME : config.PRIVATE_BUCKET_NAME;
        let s3bucket = new AWS.S3({
            accessKeyId: config.IAM_USER_KEY,
            secretAccessKey: config.IAM_USER_SECRET,
            Bucket: bucketName,
            region: "eu-central-1",
            httpOptions: {
                timeout: 900000,
            },
        });

        return new Promise((resolve, reject) => {
            var params = {
                Bucket: isPublic ? config.BUCKET_NAME : config.PRIVATE_BUCKET_NAME,
                Key: asset,
            };

            s3bucket.deleteObject(params, function (err, data) {
                if (err) {
                    reject(err);
                    console.log('error in callback', err);
                    return;
                }
                resolve(data);
                console.log('success deleted', data);
            });
        });
    }

    return {
        uploadFile,
        getFileUrl,
        deleteFile,
    };
}