
const express = require("express");
const router = express.Router();

const {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

// CREATE - Add student
router.post("/", createStudent);

// READ - Get all students
router.get("/", getStudents);

// READ - Get student by ID
router.get("/:id", getStudentById);

// UPDATE - Update student
router.put("/:id", updateStudent);

// DELETE - Delete student
router.delete("/:id", deleteStudent);

module.exports = router;
