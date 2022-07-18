const http = require("http")
const url = require("url")

http
    .createServer(function (req, res) {
        const queryObject = url.parse(req.url, true).query;
        console.log(url);


        var num1 =  Number(queryObject.temp1)
        var num2 = Number(queryObject.temp2)

        var sum = num1 + num2 

        res.writeHead(200, { 'Content-type': 'text/html'});
        res.end(JSON.stringify({"sum of two numbers":sum}))
    })
    .listen(5000);