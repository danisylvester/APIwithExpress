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

//@des update a student record
//@route PUT /api/students/:id
router.put('/:id', (req, res) => {
  let _id = parseInt(req.params.id)
  let index = students.findIndex(e => e.id === _id);
  if(index === -1){
    res.send("Could not find id of " + _id);
    return;
  }
  if(typeof(req.body.name) === "string" &&  typeof(req.body.grade) === "string"){
    students[index].name = req.body.name;
    students[index].grade = req.body.grade;
    res.send(students)
  }else{
    res.status(400).send('JSON Format error');
  }
})

//@desc delete student record
//@route DELETE api/students/:id
router.delete('/:id', (req, res) => {
  const _id = parseInt(req.params.id);
  const index = students.findIndex(e => e.id === _id);

  students.splice(index, 1);
  res.send(students);
})

module.exports = router;
