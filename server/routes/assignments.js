const express = require('express');
const router = express.Router();

// GET all assignments
router.get('/', (req, res) => {
    res.json({ msg: 'GET all assignments' });
});

// GET a single assignment
router.get('/:id', (req, res) => {
    res.json({ msg: 'GET a single assignment' });
});

// POST a new assignment
router.post('/', (req, res) => {
    res.json({ msg: 'POST a new assignment' });
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