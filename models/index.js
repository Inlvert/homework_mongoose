const mongoose = require('mongoose');
async function connectToDb () {
    await mongoose.connect('mongodb+srv://printgurucomua:tHcszBhqE7AtbMBD@cluster0.sofaykq.mongodb.net/carDB');
}