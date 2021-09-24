const mongoose = require("mongoose");
const List = mongoose.model("List");

exports.createList = async (req, res) => {
  const { username, title, track, category} = req.body;

  const listExist = await List.findOne({ title });

  if (listExist) throw "form with that name already exists!";

  const list = new List({
    username, 
    title, 
    track, 
    category
  });

  await list.save();

  res.json({
    message: "list created!",
  });
};



exports.getAllList = async (req, res) => {
    const lists = await List.find({});
  
    res.json(lists);
};

exports.getList = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    
    let list = await List.findById(id);
    res.json(list);
};

exports.deleteList = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    
    await List.findByIdAndDelete(id);
    res.json(`id ${id} list has been deleted`);
};



exports.updateList = async (req, res) => {
    const id = req.params.id;

     const updated= await List.findByIdAndUpdate(id, req.body)
     res.status(200).json({ message: updated });
        
}






 