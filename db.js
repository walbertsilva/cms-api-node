const mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost", { useUnifiedTopology: true })
            .then(conn => global.conn = conn.db("cms"))
            .catch(err => console.log(err))

const ObjectId = require("mongodb").ObjectId;


// Category
function findAllCategory() {
    return global.conn.collection("category").find().toArray();
}

function insertCategory(category) {
    return global.conn.collection("category").insertOne(category);
}

function findOneCategory(id) {
    return global.conn.collection("category").findOne(new ObjectId(id));
}

function updateCategory(id, category) {
    return global.conn.collection("category").updateOne({ _id: new ObjectId(id) }, { $set: category });
}

function deleteOneCategory(id) {
    return global.conn.collection("category").deleteOne({ _id: new ObjectId(id) });
}


// Content
function findAllContent() {
    return global.conn.collection("content").find().toArray();
}

function insertContent(content) {
    return global.conn.collection("content").insertOne(content);
}

function findOneContent(id) {
    return global.conn.collection("content").findOne(new ObjectId(id));
}

function updateContent(id, content) {
    return global.conn.collection("content").updateOne({ _id: new ObjectId(id) }, { $set: content });
}

function deleteOneContent(id) {
    return global.conn.collection("content").deleteOne({ _id: new ObjectId(id) });
}

// Content
function findAllContentByCategory(id) {
    return global.conn.collection("content").find({category: id}).toArray();
}

module.exports = { 
                    findAllCategory, insertCategory, findOneCategory, updateCategory, deleteOneCategory,
                    findAllContent, insertContent, findOneContent, updateContent, deleteOneContent, findAllContentByCategory
                 }