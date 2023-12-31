const express = require('express');
const morgan = require('morgan');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const quotesRouter = require('./quoteRoutes');
app.use('/api/quotes', quotesRouter);

app.listen(PORT,()=>{console.log(`Listening on port ${PORT}`)});

