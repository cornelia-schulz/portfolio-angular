let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const server = express();
server.use(bodyParser.json());
server.use(cors());
const port = process.env.PORT || 3000;

server.listen(port, function(req, res) {
    console.log('Listening on port: ', port);
});

server.set('view engine', 'ejs');
server.use(express.static('public'));

server.get('/', function (req, res){
    res.render(index);
})