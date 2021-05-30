const mongoose = require('mongoose');
const Schema = mongoose.Schema

const cardSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        authors: {
            type: String,
        },
        description:{
            type: String,
        },
        image:{
            type: String
        }
    }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;