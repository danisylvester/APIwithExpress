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

module.exports = router;
