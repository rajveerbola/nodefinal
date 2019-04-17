const express = require('express');
const hbs = require('hbs')
var app =  express();
const fs = require('fs')
const port = process.env.PORT || 8080;


hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.send('<h1>Hello Express!</h1>')
});

app.get('/info', (request, response) => {
   respone.render(final.hbs)
    title:'Final Page'
});

app.listen(port,()=>{
    console.log(`Server is up on the port ${port}`);
});

