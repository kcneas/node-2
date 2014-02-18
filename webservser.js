var express = require('express'); // 웹서버 사용 .
var app = express();
var fs = require('fs'); // 파일 로드 사용.
var count = 0;


app.use('/js', express.static(__dirname + "/js"));
app.use('/css', express.static(__dirname + "/css"));
app.use('/images', express.static(__dirname + "/images"));
app.use('/font', express.static(__dirname + "/font"));
// 라우팅 설정
app.get('/', function (req, res) { 
    fs.readFile('main.html', function (error, data) { // index.html 파일 로드 .
        if (error) {
         console.log(error);
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' }); // Head Type 설정 .
            res.end(data); // 로드 html response .
            var forwardedIpsStr = req.header('x-forwarded-for');
           var IP = '';
           
           if (forwardedIpsStr) {
              IP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
              console.log(IP + "  count : " + count++);
           }
        } 
    });
});


// 포트 설정
app.listen(process.env.PORT, function () { 
console.log('Server Start .');
});


