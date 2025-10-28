const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    mail:{
        type:String,
        required:true
    },
    photopath:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    dateCreated:{
        type:Date,
        required:true,
        default:Date.now
    },
})

mongoose.model('User', userSchema);


























/* // Require Mongoose
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define your schema
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18, max: 100 },
  createdAt: { type: Date, default: Date.now() } // <- Use Date.now() to set default value
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Create a new user document
const newUser = new User({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  age: 30
});

// Save the user document to the database
newUser.save()
  .then(user => {
    console.log('User saved:', user);
    // Find all users
    return User.find();
  })
  .then(users => {
    console.log('All users:', users);
  })
  .catch(err => console.error('Error:', err)); */
