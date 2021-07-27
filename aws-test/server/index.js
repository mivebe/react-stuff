const express = require('express');
const cors = require('cors');
const passport = require("passport");
const connectBusboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
const bodyParser = require('body-parser');

const { uploadToS3, downloadFromS3 } = require('./uploadFile')
const { privateUploadToS3, privateDownloadFromS3 } = require("./privateUpload")


const PROTOCOL = "http://"
const HOST = "localhost"
const PORT = 3001
const app = express();

app.use(cors());

app.use(connectBusboy());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static("public"))

app.use(busboyBodyParser())
app.get("/api/upload", (req, res) => { res.json({ success: true }) })

const Busboy = require('busboy');

app.post('/api/upload', function (req, res, next) {

    console.log('------------ uploading ------------');
    console.log(req.body);

    let name = req.body.name;
    var busboy = new Busboy({ headers: req.headers });

    busboy.on('finish', async function () {
        console.log('Upload finished');
        const file = req.files.file;
        console.log(file);

        let result = await uploadToS3(file)

        console.log('s3 upload result', result);

        // let result1 = await downloadFromS3(result.key);
        // // console.log("download complete", result1);
        // result1.on('end', () => res.end());
        // result1.pipe(res)

        res.json({ success: true, data: result });
    });

    req.pipe(busboy);



});

app.post('/api/private-upload', function (req, res, next) {

    const element3 = req.body.element1;
    var busboy = new Busboy({ headers: req.headers });

    busboy.on('finish', async function () {
        console.log('Upload finished');
        const file = req.files.element4;
        console.log(file);

        let result = await privateUploadToS3(file)

        console.log("from then ", result);

        // let result1 = await downloadFromS3(result.key);
        // // console.log("download complete", result1);
        // result1.on('end', () => res.end());
        // result1.pipe(res)

        res.json({ success: true, data: result });
    });

    req.pipe(busboy);



});

app.get("/api/download", async function (req, res, next) {
    let target = req.query.target
    // console.log(target);
    let result1 = await downloadFromS3(target || "za-warudo.jpg");
    // result1.on('finish', () => res.end());
    // result1.on("error", (e) => { console.log(e); });
    // result1.pipe(res).on("data", () => { console.log(data); });
    // req.on("close", () => result1.end())
    // res.setHeader('Content-Type', 'video/mp4');
    // res.setHeader('Content-Length', result1.length);
    res.send(result1);

});

app.get("/api/private-download", async function (req, res, next) {
    let target = req.query.target
    // console.log(target);
    let result1 = await privateDownloadFromS3(target || "f76.jpg");
    // result1.on('finish', () => res.end());
    // result1.on("error", (e) => { console.log(e); });
    // result1.pipe(res).on("data", () => { console.log(data); });
    // req.on("close", () => result1.end())
    // res.setHeader('Content-Type', 'video/mp4');
    // res.setHeader('Content-Length', result1.length);
    res.send(result1);

});


app.listen(PORT, HOST, () => {
    console.log(`Server Running on ${PROTOCOL}${HOST}:${PORT}/`);
})