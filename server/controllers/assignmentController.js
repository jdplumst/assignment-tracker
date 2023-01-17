const mongoose = require('mongoose');
const Assignment = require('../models/assignment');

// Get all assignments
const getAssignments = async (req, res) => {
    const assignments = await Assignment.find({}).sort({ dueDate: 1 });
    res.status(200).json(assignments);
};

// Get a single assignment
const getAssignment = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json( {error: 'No such assignment' });
    }
    const assignment = await Assignment.findById(id);
    if (!assignment) {
        return res.status(404).json({ error: 'No such assignment' });
    }
    res.status(200).json(assignment);  
};

// Create new assignment
const createAssignment = async (req, res) => {
    const { title, course, dueDate } = req.body;
    try {
        const assignment = await Assignment.create({ title, course, dueDate });
        res.status(200).json(assignment);
    } catch (err) {
        res.status(400).json({ error:  err.message });
    }
};

// Delete an assignment
const deleteAssignment = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json( {error: 'No such assignment' });
    }
    const assignment = await Assignment.findOneAndDelete({ _id: id });
    if (!assignment) {
        return res.status(404).json({ error: 'No such assignment' });
    }  
    res.status(200).json(assignment);
};

// Update an assignment
const updateAssignment = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json( {error: 'No such assignment' });
    }
    const assignment = await Assignment.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!assignment) {
        return res.status(404).json({ error: 'No such assignment' });
    }  
    res.status(200).json(assignment);
};

module.exports = {
    getAssignments,
    getAssignment,
    createAssignment,
    deleteAssignment,
    updateAssignment
};