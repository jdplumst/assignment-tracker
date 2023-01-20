import React, { useState } from "react";
import { useAssignmentsContext } from "../hooks/useAssignmentsContext";
import { ActionOptions } from "../context/AssignmentContext";

const AssignmentForm = () => {
    const { dispatch } = useAssignmentsContext();
     const [title, setTitle] = useState('');
     const [course, setCourse] = useState('');
     const [dueDate, setDueDate] = useState('');
     const [error, setError] = useState(null);
     const [emptyFields, setEmptyFields] = useState<String[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();  
        const assignment = {title, course, dueDate};
        const response = await fetch('/api/assignments', {
            method: 'POST',
            body: JSON.stringify(assignment),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        if (!response.ok) {
            setError(data.error);
            setEmptyFields(data.emptyFields);
        } else {
            setError(null);
            setEmptyFields([]);
            setTitle('');
            setCourse('');
            setDueDate('');
            dispatch({ type: ActionOptions.CREATE_ASSIGNMENT, payload: data })
        }
    };

    return (
        <form onSubmit={handleSubmit} className="col-start-3 row-start-1">
            <h3 className="text-xl mb-5"><strong>Add A New Assignment</strong></h3>
            <label>Assignment: </label>
            <input className={`${emptyFields.includes('title') ? 'error border-red-400' : ''} p-2 mb-5 border-solid border-2 border-slate-200 focus:border-slate-500 focus:outline-none rounded-lg block w-4/5`}
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
            <label>Course: </label>
            <input className={`${emptyFields.includes('course') ? 'error border-red-400' : ''} p-2 mb-5 border-solid border-2 border-slate-200 focus:border-slate-500 focus:outline-none rounded-lg block w-4/5`}
                type="text"
                onChange={(e) => setCourse(e.target.value)}
                value={course} />
            <label>Due Date: </label>
            <input className={`${emptyFields.includes('dueDate') ? 'error border-red-400' : 'border-slate-200'} p-2 mb-5 border-solid border-2 focus:border-slate-500 focus:outline-none rounded-lg block w-4/5`}
                type="date"
                onChange={(e) => setDueDate(e.target.value)}
                value={dueDate} />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 hover:cursor-pointer text-white p-4 rounded-lg"><strong>Add Assignment</strong></button>
            {error && <div className="bg-pink-200 border-solid border-4 border-pink-300 mt-5 p-2 w-4/5">{ error }</div>}
        </form>
    );
};

export default AssignmentForm;