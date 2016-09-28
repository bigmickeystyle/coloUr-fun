const http = require('http');
const chalk = require('chalk');
const qs = require('querystring');


var server = http.createServer(function(request, response){
    request.on('error', function(err){
        console.log(err);
    });
    response.on('error', function(err){
        console.log(err);
    });
    var method = request.method;
    if (method == 'GET'){
        response.write('<!doctype html>');
        response.write('<html>');
        response.write('<title>Colors</title>');
        response.write('<form method="POST">');
        response.write('<input type="text" name="text">');
        response.write('<select name="colour">');
        response.write('<option value="red">red</option>');
        response.write('<option value="blue">blue</option>');
        response.write('<option value="green">green</option>');
        response.write('<option value="yellow">yellow</option>');
        response.write('<option value="gray">gray</option>');
        response.write('<option value="magenta">magenta</option>');
        response.write('<option value="cyan">cyan</option>');
        response.write('</select>');
        response.write('<button type="submit">Go</button>');
        response.write('</form>');
        response.write('</html>');
        response.end();
    }

    if (method == 'POST'){
        var body = '';
        request.on('data', function(dataChunk){
            body += dataChunk;
        }).on('end', function(){
            var input = qs.parse(body);
            var colour = input['colour'];
            var text = input['text'];
            console.log(chalk[colour](text));
            response.write('<!doctype html>');
            response.write('<html>');
            response.write('<title>it is better to have loved and lost than never to have loved at all</title>');
            response.write('<a href="/" style="color:' + colour + '">it is better to have loved and lost than never to have loved at all</a>');
            response.write('</html>');
            response.end();
        });

    }

}).listen(8080);
