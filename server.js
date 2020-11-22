const express = require('express');
const morgan = require('morgan');
const houseRouter = require('./routes/houseRouter');
const ownerRouter = require('./routes/ownerRouter');
const paymentorderRouter = require('./routes/paymentorderRouter');
const tenantRouter = require('./routes/tenantRouter');
const workorderRouter = require('./routes/workorderRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/houses', houseRouter);
app.use('/owners', ownerRouter);
app.use('/paymentorders', paymentorderRouter);
app.use('/tenants', tenantRouter);
app.use('/workorders', workorderRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is THE PROPERTY MANAGEMENT APP Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

