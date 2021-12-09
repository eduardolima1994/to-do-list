const { MongoClient } = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'to-do-db';

var _db;

function connectToDB(callback){
    client.connect(function(err){
        console.log('Conexão estabelecida com sucesso!');
        _db = client.db(dbName);
        callback(err)
    });
}

const findDucuments = async () => {
    const collection = _db.collection('to-do-collection');
    try{
        const results = await collection.find({}).toArray();
        return results;
    }catch (error){
        throw new Error(error)
    }
}

const insertDocuments = async (document) => {
    const collection = _db.collection('to-do-collection');
    try{
        const results = await collection.insertOne(document);
        return results
    }catch(error){
        throw new Error(error);
    };
};

const updateDocument = async(document) =>{
    const collection = _db.collection('to-do-collection');
    try{
        const results = await collection.updateOne({ _id: document._id}, { $set: document });
        return results
    }catch(error){
        throw new Error(error)
    };
};

const deleteDocument = async(document) => {
    const collection = _db.collection('to-do-collection');
    try{
        const results = await collection.deleteOne({ _id: document._id});
        return results
    }catch(error){
        throw new Error(error)
    };
};

module.exports = {
    connectToDB,
    findDucuments,
    insertDocuments,
    updateDocument,
    deleteDocument,
}







// -> TESTE DE CONEXÃO <-
/*
connectToDB(async ()=>{
    const results = await findDucuments()
    console.log(results)
})
*/