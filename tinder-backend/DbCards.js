import mongoose from 'mongoose'

// Creates a schema fro our data base

const CardSchema = mongoose.Schema({
    name : String,
    url : String,
})

export default mongoose.model('cards',CardSchema) // here mongoose.model('collection_name',schemaCreatedJustNow) refer mongoDB