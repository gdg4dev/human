const express = require("express");
const app = express();
const https = require('follow-redirects').https;
const fs = require('fs');

app.post("/api", (req, res) => {
    var options = {
        'method': 'POST',
        'hostname': 'api.meaningcloud.com',
        'path': '/summarization-1.0?key=f4be78fe9ca8f65345144ffc9305bce2&url=https://techcrunch.com/2020/04/30/how-this-startup-built-and-exited-to-twitter-in-1219-days/&sentences=10',
        'headers': {
        },
        'maxRedirects': 20
    }

    var req = https.request(options, (res) => {
        var chunks = [];
    
        res.on("data", (chunk) => {
          chunks.push(chunk);
        });

        res.on("end", (chunk) => {
          var body = Buffer.concat(chunks);
          console.log(body.toString());
        });

        res.on("error", (error) => {
          console.error(error);
        })
    })

    req.end()    
});

const port = 8000;
app.listen(port, () => {
    console.log(`HUMAN SERVER IS UP AND RUNNING AT PORT ${port}`)
});