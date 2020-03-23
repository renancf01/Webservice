const express = require('express');

const app = express();
const indexRouter = require('./routes/index');
const exportFunc = require('./routes/exportFunc');

// app.use(bodyparser.urlencoded({extended: false}));
// app.use(bodyparser.json());
app.use(express.static('./view'));
app.use('/css',express.static(__dirname +'/css'));

app.set('/', indexRouter)
app.set('/sincFuncionario', exportFunc);

app.listen(3000)