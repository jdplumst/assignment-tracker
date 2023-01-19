import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AssignmentDetails, { Assignment } from '../components/AssignmentDetails';

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
        <div className='grid grid-cols-4 gap-x-24 bg-slate-100 pt-10 min-h-screen'>
            {assignments.map((assignment) => (
                <AssignmentDetails key={uuidv4()} assignment={assignment} />
                // <p key={uuidv4()}>{assignment.title}</p>
            ))}
        </div>
    );
};

export default Home;