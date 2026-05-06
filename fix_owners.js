const mongoose = require('mongoose');
const Listing = require('./models/listing.js');
const User = require('./models/user.js');

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

async function fixOwners() {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");

    // Check if the user already exists
    let user = await User.findOne({ username: "delta-student" });
    
    if (!user) {
        console.log("Creating dummy user...");
        let fakeUser = new User({
            email: "student@gmail.com",
            username: "delta-student"
        });
        user = await User.register(fakeUser, "helloworld");
        console.log("Dummy user created with ID:", user._id);
    } else {
        console.log("Dummy user already exists with ID:", user._id);
    }

    // Update all listings to use this user's ID as the owner
    const result = await Listing.updateMany({}, { owner: user._id });
    console.log(`Updated ${result.modifiedCount} listings to be owned by delta-student.`);

    mongoose.connection.close();
}

fixOwners();
