const mongoose = require('mongoose');
const Listing = require('./models/listing.js');

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

async function test() {
    console.log('Connecting to DB...');
    await mongoose.connect(MONGO_URL);
    console.log('Connected. state:', mongoose.connection.readyState);
    
    console.log('Finding listings...');
    try {
        const listings = await Listing.find({}).limit(1);
        console.log('Found listings:', listings.length);
    } catch (err) {
        console.error('Error finding listings:', err);
    }
    
    mongoose.connection.close();
}

test();
