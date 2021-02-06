const { json } = require('express');
const express = require('express');
const students = require('../data/studentsData');

const router = express.Router();

// @desc get all students
// @route GET /api/students
router.get('/', (req, res) => {
  try{
    res.json(students);

  } catch(error){
    console.log(error);
  }
})

//@des create student record
//@route POST /api/students
router.post('/', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent)
  res.send(req.body);
})

module.exports = router;
