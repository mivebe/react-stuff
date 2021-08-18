const express = require('express');
const cors = require('cors');
const passport = require("passport");
const connectBusboy = require("connect-busboy");
const busboyBodyParser = require("busboy-body-parser");
const bodyParser = require('body-parser');

const config = require('./config.js');
const storageProvider = require('./storage-providers/index.js')(config);

const PROTOCOL = "http://"
const HOST = "localhost"
const PORT = 3001
const app = express();

app.use(cors());

app.use(connectBusboy());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static("public"))

app.use(busboyBodyParser({ multi: true }))
app.get("/api/upload", (req, res) => { res.json({ success: true }) })

const Busboy = require('busboy');

app.post('/api/upload', function (req, res, next) {
    let name = req.body.name;
    var busboy = new Busboy({ headers: req.headers });

    busboy.on('finish', async function () {
        if (!req.files || req.files.length < 1 || !req.files.files || req.files.files.length < 1) {
            res.json({ success: true, message: 'no files were provided' });
            return next();
        }

        const files = req.files.files;
        let promises = [];
        for (let i = 0; i < files.length; i++) {
            promises.push(storageProvider.uploadFile(files[i], true));
        }

        let result = await Promise.all(promises);

        res.json({ success: true, data: result });
    });

    req.pipe(busboy);
});

app.post('/api/private-upload', privUpl);
function privUpl(req, res, next) {

    var busboy = new Busboy({ headers: req.headers });

    busboy.on('finish', async function () {
        if (!req.files || req.files.length < 1 || !req.files.files || req.files.files.length < 1) {
            res.json({ success: true, message: 'no files were provided' });
            return next();
        }

        const files = req.files.files;
        let promises = [];
        for (let i = 0; i < files.length; i++) {
            promises.push(storageProvider.uploadFile(files[i]));
        }

        let result = await Promise.all(promises);

        res.json({ success: true, data: result });
    });

    req.pipe(busboy);
}

app.get("/api/download", async function (req, res, next) {
    let target = req.query.target
    let result1 = await storageProvider.getFileUrl(target || "za-warudo.jpg", true);
    res.send(result1);

});

app.get("/api/private-download", async function (req, res, next) {
    let target = req.query.target
    let result1 = await storageProvider.getFileUrl(target || "f76.jpg");
    res.send(result1);

});

app.delete("/api/delete", function (req, res, next) {
    let target = req.query.target
    console.log("asd");
    let result1 = storageProvider.deleteFile(target || "f76.jpg", true);
    res.send(result1);

});


app.listen(PORT, HOST, () => {
    console.log(`Server Running on ${PROTOCOL}${HOST}:${PORT}/`);
})