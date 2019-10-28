const db = require ('mongoose')

const labelSchema = db.Schema({
    _id: db.Schema.Types.ObjectId,
    label: String,
    link: String
})

module.exports = db.model('label', labelSchema);