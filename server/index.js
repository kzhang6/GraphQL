const express = require('express');
require('dotenv').config(); //include .env file
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const port = process.env.PORT || 5000;
const app = express();

app.use('/graphql', graphqlHTTP({
    schema, //schema: schema (shorthand because it's the same name as the file name)
    graphiql: process.env.NODE_ENV === 'development' // using the graphiql tool when in specified as 'development' mode in .env
}))

app.listen(port, console.log(`Server running on port ${port}`));