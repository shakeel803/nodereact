//https://shrouded-plateau-62014.herokuapp.com/
//https://git.heroku.com/shrouded-plateau-62014.git

const express = require('express');
const app = express(); //Express app created

app.get('/', (req, res) => {
    res.send({hi: 'there', name: "Shakeel"});
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT);