const db = require ('mongoose')

const labelSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    title: String,
    link: String,
    label: String
})

module.exports = db.model('label', labelSchema);