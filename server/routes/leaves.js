const express =require('express');

const {createLeaves,getLeave,getLeaves,deleteLeave,updateLeaves} = require('../controllers/leaves.js');
const { verifyAdmin } =require('../utils/verifyToken.js');

const router = express.Router();

//CREATE
router.post('/', createLeaves);

//DELETE
router.delete('/:id', verifyAdmin, deleteLeave);

//GET
router.get('/:id', getLeave);
router.get('/', getLeaves);

//UPDATE
router.put('/:id', updateLeaves);

module.exports = router

