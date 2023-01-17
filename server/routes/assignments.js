const express = require('express');
const router = express.Router();
const Assignment = require('../models/assignment');

// GET all assignments
router.get('/', (req, res) => {
    res.json({ msg: 'GET all assignments' });
});

// GET a single assignment
router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single assignment' });
});

// CREATE a new assignment
router.post('/', async (req, res) => {
    const { title, course, due_date } = req.body
    try {
        const assignment = await Assignment.create({ title, course, due_date });
        res.status(200).json(assignment);
    } catch (err) {
        res.status(400).json({ error:  err.message });
    }
});

// DELETE an assignment
router.delete('/:id', (req, res) => {
    res.json({ msg: 'DELETE an assignment '});
});

// UPDATE an assignment
router.patch('/:id', (req, res) => {
    res.json({ msg: 'UPDATE an assignment '});
});

module.exports = router;