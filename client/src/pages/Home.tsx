import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AssignmentDetails, { Assignment } from '../components/AssignmentDetails';
import AssignmentForm from '../components/AssignmentForm';

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
        <div className='grid grid-cols-3 gap-x-24 bg-slate-100 pt-10 min-h-screen'>
            <div className='col-span-2'>
                {assignments.map((assignment) => (
                    <AssignmentDetails key={uuidv4()} assignment={assignment} />
                ))}
            </div>
            <AssignmentForm />
        </div>
    );
};

export default Home;