'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(request, response) {
    response.sendFile('./public/index.html')
})

app.listen(PORT, () => {
    console.log('Currently listening on port:', PORT);
});