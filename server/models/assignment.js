const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    title: { type: String, required: true },
    course: { type: String, required: true },
    dueDate: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Assignment', AssignmentSchema);