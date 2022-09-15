const { projects, clients } = require('../sampleData.js') //get the arrays from the sample data file

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql');

const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    })
});

// create a RootQuery object to make a query?
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {   // client field to fetch the client
            type: ClientType, //declared above
            args: { id: { type: GraphQLID }},   //id to get a single client
            resolve(parent, args) { //return value
                return clients.find(client => client.id === args.id);
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})