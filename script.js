const express = require('express');
const hbs = require('hbs')
var app =  express();
const fs = require('fs')
const port = process.env.PORT || 8080;
const axios = require('axios')



hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

/*app.get('/', (request, response) => {
    //response.send('<h1>Hello Express!<h1>');
    response.send({
        name: 'Your Name',
        school:[
            'BCIT',
            'SFU',
            'UBC'
        ]
    })
});*/




app.get('/info', (request, response)=>{
    response.render('about.hbs', {
        title: 'About page',
        year: new Date().getFullYear(),
        header: 'About Me'

    })
});

app.get('/404', (request, response) => {
    response.send({
        error: 'Page not found'
    })

});

app.get('/',(request, response)=> {
    response.render('main.hbs', {
        title: 'Main Page',
        year: new Date().getFullYear(),
        header: 'Main Page',
    })
});

/*app.get('/nasa', (request, response) => {
    const getCode = async (search) => {
        try {
           const response = await (axios.get(`https://images-api.nasa.gov/search?q=earth`));
            return response.data[0].collection
        } catch (e) {
            response.render('nasa.hbs', {
                title: 'ERROR',
                result: 'Error: Image is not found'
           })
        }
    };
});*/

    app.get('/nasa', (request, response) => {
        response.render('nasa.hbs', {
            title: 'Nasa'
        })
    });





        /*app.get('/currency', (request, response) => {
            response.render('currency.hbs', {
                title: 'Currency',
                year: new Date().getFullYear(),
                header: 'Currency',
            })
        });*/


        app.listen(port, () => {
        console.log(`Server is up on the port ${port}`);
    });

