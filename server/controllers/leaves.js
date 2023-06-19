const Leaves = require('../models/leaves.js');

const createLeaves = async (req, res, next) => {
  const newLeaves = new Leaves(req.body);
  newLeaves.id = Math.random();

  try {
    // `id` alanı boş veya null değilse kaydet
    if (newLeaves.id) {
      const savedLeaves = await newLeaves.save();
      return res.status(200).json(savedLeaves);
    } else {
      return res.status(400).json({ message: "ID field is required" });
    }
  } catch (error) {
    next(error);
    return res.status(400).json(error);
  }
};
const deleteLeave = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedLeaves = await Leaves.findByIdAndDelete(
      id
    );
    if (!deletedLeaves) {
      return res.status(404).json({ message: 'İzin bulunamadı',state:false });
    }
    res.status(200).json({ message: 'İzin güncellendi',state: true, leave: deletedLeaves });
  } catch (error) {
    next(error);
  }
};
 
const getLeave = async (req, res, next) => {
  try {
    const leave = await Leaves.findById(req.params.id);
    if (!leave) {
      res.status(404).json({state:false});
    }
    return res.status(200).json({state:true,leave:leave});
  } catch (error) {
    next(error);
  }
};
const getLeaves = async (req, res, next) => {
  try {
    const leaves = await Leaves.find().sort({ $natural: -1 });
    return res.status(200).json({state:true,leaves:leaves});
  } catch (error) {
    return res.status(401).json({state:false});
    next(error);
  }
};

const updateLeaves = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedLeaves = await Leaves.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedLeaves) {
      return res.status(404).json({ message: 'İzin bulunamadı',state:false });
    }
    res.status(200).json({ message: 'İzin güncellendi',state: true, leave: updatedLeaves });
  } catch (error) {
    next(error);
  }
};
// exports.getFileForName = (req, res) => {
//   const takenPath = path.resolve(__dirname, "../uploads", req.params.name);
//   res.sendFile(takenPath);
// };


module.exports = { createLeaves, deleteLeave, getLeave, getLeaves, updateLeaves }
