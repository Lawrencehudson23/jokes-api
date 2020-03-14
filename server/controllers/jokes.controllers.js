const Joke = require("../models/jokes.model");

module.exports.findAllJokes = ( _, res ) => {
    Joke.find()
      .then(jokes => res.json(jokes))
      .catch(err=>res.json({message:"Something went wrong", error:err}))
};

module.exports.findOneSingleJoke = ( req,res ) => {
    console.log(req.body)
    const jokeId = req.params.id;
    Joke.findById(jokeId)
      .then( joke=> res.json(joke ))
      .catch(err=>res.json({message:"Something went wrong", error:err}))

};

module.exports.createNewJoke = (req,res) => {
    console.log(req.body);
    Joke.create(req.body)
    .then(joke => res.json(joke))
    .catch(err=>res.json({message:"Something went wrong", error:err}))

};

module.exports.updateExistingJoke = ( req,res ) => {
    Joke.findByIdAndUpdate({ _id:req.params.id }, {setup:req.body.setup, punchline:req.body.punchline }, { new: true, runValidators: true })
      .then(joke => res.json(joke))
      .catch(err=>res.json({message:"Something went wrong", error:err}))

}

module.exports.deleteAnExistingJoke = ( req,res ) => {
    Joke.findByIdAndDelete({ _id:req.params.id })
      .then(result => res.json(result))
      .catch(err=>res.json({message:"Something went wrong", error:err}))
}
//extra
// module.exports = {
//   deleteMoreJokes(req, res) {
//     Joke.deleteMany({setup:{ $gt:5 }})
//       .then(response => res.json(response))
//   }
// }
