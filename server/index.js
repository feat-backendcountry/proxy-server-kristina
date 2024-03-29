const express = require('express');
const port = 4000;
const router = require('./router.js');
const morgan = require('morgan');

const app = express();


app.use(express.static(__dirname + '/../dist/'));
app.use(morgan('dev'));
app.use('', router);



app.listen(port, () => console.log(`Listening on port: ${port}`));

