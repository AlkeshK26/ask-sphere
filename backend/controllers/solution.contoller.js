const Solution = require("../models/solution.model")
const mongoose = require("mongoose")

exports.postSolution = async (req, res) =>{
    try{
        // read the req body
        const { queryId, description} = req.body;
        if (!queryId || !description) {
          return res.status(400).json({ message: 'Title and description are required' });
        }
        const image = req.file ? req.file.filename : null;


        // create solution obj
        const newSolution = new Solution({
            queryId,
            postedBy : req.user._id,
            solutionText : description,
            solutionImage : image,
        });

        // insert into mongodb

        await newSolution.save();
        res.status(201).json({message: "Solution posted successfully", solution: newSolution});
        //return the res of the posted sol
    }catch(error){
      console.error("this is backend controller errors msg: ",error);
        res.status(500).json({error:"Error posting solution"});
    }
    
};

exports.getSolutions = async (req, res) => {
    try {
      const { queryId } = req.params;
      const solutions = await Solution.find({ queryId: new mongoose.Types.ObjectId(queryId) }).populate('postedBy', 'username');
  
      res.status(200).json({message: "Solutions fetched successfully",data: solutions});
    } catch (error) {
      console.error("error fetching solution: ", error);
      res.status(500).json({ error: "Error fetching solutions" });
    }
  };