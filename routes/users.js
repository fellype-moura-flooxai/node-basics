module.exports = (app)=>{

app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
         users: [{
            name: 'fellype',
            email: 'feehmoura03@gmail.com',
            id: 1
        }]

    });

});

app.get('/users/admin', (req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json({
         users: []
    });

});

};