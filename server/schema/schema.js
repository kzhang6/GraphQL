const { projects, clients } = require('../sampleData.js') //get the arrays from the sample data file

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
 } = require('graphql');

 const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID},
        name: {type: GraphQLString},
        description: {type: GraphQLString},
        status: {type: GraphQLString},
    })
});

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
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
                return projects;
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args) {
                return projects.find(project => project.id === args.id);
            }
        },
        clients: {  //query to get all clients
            type: new GraphQLList(ClientType),   //list of ClientType
            resolve(parent, args) {
                return clients; //returning the array
            }
        },
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