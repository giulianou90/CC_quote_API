const express = require('express');
const morgan = require('morgan');
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const quotesRouter = express.Router();
module.exports = quotesRouter;

quotesRouter.get ('/random',(req,res,next)=>{
    const randomQuotesElement = getRandomElement(quotes);
    const responseObject = {quote:randomQuotesElement}
    res.send(responseObject);
});

quotesRouter.get('/',(req,res,next)=>{
    //const allQuotes = quotes.map(({quote})=>({quote}));
    //const responseObject = {quotes:allQuotes}
    //res.send(responseObject);
    if(req.query.person){
        const personArray = quotes.filter((object)=>object['person']===req.query.person)
        const responseObject = {quotes:personArray};
        res.send(responseObject);
        //res.send('ouch')
    }else{
        const responseObject = {quotes:quotes};
        res.send(responseObject);
    }
});

quotesRouter.post('/',(req,res,next)=>{
    if(req.query.person && req.query.quote){
        const newObject = {'person':req.query.person, 'quote':req.query.quote};
        quotes.push(newObject);
        res.send({quote:newObject})
    }else{
        //res.send('nope')
        res.status(400).send()
    }
})