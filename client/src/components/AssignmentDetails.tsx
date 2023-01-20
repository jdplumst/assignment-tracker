import { Assignment } from "../context/AssignmentContext";

type AssignmentDetailsProps = {
    assignment: Assignment
}

const AssignmentDetails = ({ assignment }: AssignmentDetailsProps ) => {
    // Create format for due date
    const dueDate = new Date(assignment.dueDate);
    const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
    const dueDateYear = dueDate.getUTCFullYear();
    const dueDateMonth = months[dueDate.getUTCMonth()];
    const dueDateDay = dueDate.getUTCDate();
    const formattedDueDate = dueDateMonth + ' ' + dueDateDay + ', ' + dueDateYear; 
    
    return (
        <div className='border-solid border-4 border-slate-500 rounded-lg bg-white mx-20 mb-10 px-14 py-10 h-fit'>
            <h3 className="text-xl mb-10"><strong>{ assignment.title }</strong></h3>
            <p><strong>Course:</strong> { assignment.course }</p>
            <p><strong>Due Date:</strong> { formattedDueDate }</p>
        </div>
    );
};

export default AssignmentDetails;