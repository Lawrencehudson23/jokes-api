const mongoose = require('mongoose');

const JokeSchema  = new mongoose.Schema({
    //your fields name goes here
    setup: {
        type: String,
        minLength: [
            2,
            'Setup must be at least 2 letters'
        ],
        required:  [
            true,
            'Please include a setup!'
        ]
    },    
    punchline: {
        type:String,
        required: [
            true,
            'Please include a punchline!'
        ]
    }
    

},{ timestamps: true });

 const Joke = mongoose.model("Joke", JokeSchema);
 // can add third parameter like 
//  const Joke = mongoose.model('Joke', JokeSchema,'cities');
 
 module.exports = Joke;
 
 //or like this
//  module.exports ={
//      Joke:Joke,
//      JokeSchema:JokeSchema
//  }

