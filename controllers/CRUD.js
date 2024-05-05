const Animal = require("../models/Animal")

exports.create = async(req,res)=>{
    try{
     const{name,age,color} = req.body;
     if(!name || !age || ! color){
        return res.json({
            success:false,
            message:"please fill the data completely",
            
        })
     }
     const data = await Animal.create({name,age,color});
     return res.json({
        success:true,
        message:"entry created successfully",
        data : data
    })
    }
    catch(err){
        console.log(err);
        return res.json({
            success:false,
            message:"error in creating an entry"
        })
    }
}

exports.getAll = async(req,res)=>{
    try{
     const allAnimals = await Animal.find({});
     return res.json({
        success:true,
        data:allAnimals
     })

    }
    catch(err){
        console.log(err);
        return res.json({
            success:false,
            message:"error in getting all animals"
        })
    }
}

exports.update = async(req,res)=>{
    try{
     const {id,name} = req.body;
     const findAnimal = await Animal.findOne({_id:id})
      findAnimal.name = name;
      await findAnimal.save();
      return res.json({
        success:true,
        message:"updated successfully"
     })
    }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"error in updating"
        })
    }
}

exports.deleteAnimal = async(req,res)=>{
    try{
     const {id} = req.body;
     const findAnimal = await Animal.deleteOne({_id:id})
     return res.json({
        success:true,
        message:"deleted successfully"
     })
    }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"error in deleting an animal"
        })
    }
}