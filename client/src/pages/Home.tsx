import { useState, useEffect } from 'react';

type Assignment = {
    _id: String,
    title: String,
    course: String,
    dueDate: Date,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

const Home = () => {
    const [assignments, setAssignments] = useState<Assignment[]>([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            const response = await fetch('/api/assignments');
            const data = await response.json();
            if (response.ok) {
                setAssignments(data);
            }
        }
        fetchAssignments();
    }, []);

    return (
        <div>
            {assignments.map((assignment) => (
                <p key={0}>${assignment.title}</p>
            ))}
        </div>
    );
};

export default Home;