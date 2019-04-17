const express = require('express');
const hbs = require('hbs')
var app =  express();
const fs = require('fs')
const port = process.env.PORT || 8080;
const axios = require('axios')


hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    respone.render(main.hbs)
});

app.get('/info', (request, response) => {
   respone.render(final.hbs)
    title:'Final Page'
});


app.post('/weather', (req,resp) => {




    response.render('final.hbs', {
        final: rate
    })





})

app.listen(port,()=>{
    console.log(`Server is up on the port ${port}`);
});

