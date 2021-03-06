var express = require('express'); // 웹서버 사용 .
var app = express();
var fs = require('fs'); // 파일 로드 사용.
var count = 0;

app.use('/', express.static(__dirname + "/"));
app.use('/js', express.static(__dirname + "/js"));
app.use('/css', express.static(__dirname + "/css"));
app.use('/images', express.static(__dirname + "/images"));
app.use('/font', express.static(__dirname + "/font"));
// 라우팅 설정
app.get('/', function (req, res) { 
    var stream = fs.createReadStream('index.html');
    stream.pipe(res);
});


// 포트 설정
app.listen(process.env.PORT, function () { 
console.log('Server Start .');
});


