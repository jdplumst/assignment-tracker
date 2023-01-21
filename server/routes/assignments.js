const express = require("express");
const router = express.Router();
const {
  getAssignments,
  getAssignment,
  createAssignment,
  deleteAssignment,
  updateAssignment
} = require("../controllers/assignmentController");

// GET all assignments
router.get("/", getAssignments);

// GET a single assignment
router.get("/:id", getAssignment);

// CREATE a new assignment
router.post("/", createAssignment);

// DELETE an assignment
router.delete("/:id", deleteAssignment);

// UPDATE an assignment
router.patch("/:id", updateAssignment);

module.exports = router;
