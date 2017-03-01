var http = require('http');
var express = require('express');


var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static('./'));
app.set('view engine', 'html');

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express Server escutando na porta ' +
        app.get('port'));
});
