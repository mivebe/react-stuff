const express = require('express');
const cors = require('cors');
const passport = require("passport");
const connectBusboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
const bodyParser = require('body-parser');

const { uploadToS3, downloadFromS3 } = require('./uploadFile')


const PROTOCOL = "http://"
const HOST = "localhost"
const PORT = 3001
const app = express();

app.use(cors());

app.use(connectBusboy());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(busboyBodyParser())
app.get("/api/upload", (req, res) => { res.json({ success: true }) })

const Busboy = require('busboy');

app.post('/api/upload', function (req, res, next) {

    const element1 = req.body.element1;
    var busboy = new Busboy({ headers: req.headers });

    busboy.on('finish', async function () {
        console.log('Upload finished');
        const file = req.files.element2;
        console.log(file);

        let result = await uploadToS3(file)

        console.log("from then ", result);

        // let result1 = await downloadFromS3(result.key);
        // // console.log("download complete", result1);
        // result1.on('end', () => res.end());
        // result1.pipe(res)

        // res.json({ success: true });
    });

    req.pipe(busboy);



});

app.get("/api/download", async function (req, res, next) {
    let result1 = await downloadFromS3("za-warudo.jpg");
    result1.on('finish', () => res.end());
    result1.on("error", (e) => { console.log(e); });
    result1.pipe(res).on("data", () => { console.log(data); });
    req.on("close", () => result1.end())
});


app.listen(PORT, HOST, () => {
    console.log(`Server Running on ${PROTOCOL}${HOST}:${PORT}/`);
})