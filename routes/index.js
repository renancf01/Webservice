const express = require('express');
const exportEmployee = require('./exportFunc')
const importEmployee = require('./importFunc')
const http = require('http');
const fs = require('fs');
const path = require('path')

const router = express.Router();

// app.get('/', function(req,res){
//     res.sendFile(path.join(__dirname+'/view/index.html'))
// });

// app.use('/css',express.static(__dirname +'/css'));
// app.use('/sincFuncionario', exportEmployee);
// app.use('/import', importEmployee);

router.get('/', (req, res) => {
    res.render('index.html')
});

router.get('/sincFuncionario', exportEmployee)

module.exports = router;