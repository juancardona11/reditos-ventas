'use strict'
require('dotenv/config')
const cors = require('cors');
const express = require('express');
const app = express();
const router = express.Router();
const DB = require('./config/db');
const bodyParser = require('body-parser');
const ventasRouter = require('./api/ventas/ventas.routes.js')

DB();
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(bodyParser.json());
app.use(cors());



app.use('/api', router);
ventasRouter(router)

router.get('/', (req, res) => {
  res.send('Hello from home');
});
app.use(router);
app.listen(process.env.PORT, () => console.log(`Server runing on port ${process.env.PORT}`));