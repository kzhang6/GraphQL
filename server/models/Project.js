const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema ({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
    },
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client', //reference with the objectId created automatically in collection
    }
})

module.exports = mongoose.model('Project', ProjectSchema);