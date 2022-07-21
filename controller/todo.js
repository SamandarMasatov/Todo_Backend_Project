const Todo = require("../models/todo");

exports.create = async (req, res) => {
    const result = await Todo({
        title: req.body.title,
        task: req.body.task,
    })
    result.save()
    .then((data) => {
        res.status(200).json({ success: true, data: data });
    })
    .catch((error) => {
        res.status(400).json({ success: false, data: error });
    });
}

exports.getAll = async (req, res) => {
    const result = await Todo.find().sort({date: -1})
    res.json(result)
}


exports.updateInfo = async (req, res, next) => {
    const result = await Todo.findByIdAndUpdate({ _id: req.params.id });
  
    result.title = req.body.title;
    result.task = req.body.task;
    await result
      .save()
      .then((data) => {
        res.status(200).json({ success: true, data: data });
      })
      .catch((error) => {
        res.status(400).json({ success: false, data: error });
      });
  };
  

  exports.deleteOne = async (req, res, next) => {
    await Todo.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json("OK deleted");
  };