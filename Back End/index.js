const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ports = process.env.PORT || 3000;
const authRoutes = require('./Routes/autenticacao');
const doacaoRoutes = require('./Routes/doacao');
const erroControl = require('./controles/erro');


app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/auth', authRoutes);
app.use('/auth', doacaoRoutes);
app.use(erroControl.get404);
app.use(erroControl.get500);
app.listen(ports, () => console.log(ports));