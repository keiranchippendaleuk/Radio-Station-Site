// wmbc/backend/server.js
// Server backend API handler

const express = require('express');
const fs = require('fs');

const PORT = process.env.port || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"});
});

app.get("/stream", (req, res) => {
    var filePath = './audio_files/test_audios/test_audio.mp3';
    var stat = fs.statSync(filePath);
    var total = stat.size;

    if (req.headers.range) {
        var range = req.headers.range;
        var parts = range.replace(/bytes=/, "").split("-");
        var partialStart = parts[0];
        var partialEnd = parts[1];

        var start = parseInt(partialStart, 10);
        var end = partialEnd ? parseInt(partialEnd, 10) : total-1;
        var chunksize = (end-start) + 1;
        var rStream = fs.createReadStream(filePath, {start: start, end: end});
        
        res.writeHead(206, {
            'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
            'Accept-Ranges': 'bytes', 'Content-Length': chunksize,
            'Content-Type': 'audio/mpeg'
        });
        rStream.pipe(res);
     
    } else {
        res.send("Error - 404");
        res.end();
        //res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'audio/mpeg' });
        //fs.createReadStream(filePath).pipe(res);
    }
});

app.listen(PORT, () =>
    console.log('Server listening on %s', PORT)
);