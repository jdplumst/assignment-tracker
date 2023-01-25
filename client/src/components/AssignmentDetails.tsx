import { Assignment, AssignmentOptions } from "../context/AssignmentContext";
import { useAssignmentsContext } from "../hooks/useAssignmentsContext";
import { useUserContext } from "../hooks/useUserContext";

type AssignmentDetailsProps = {
  assignment: Assignment;
};

const AssignmentDetails = ({ assignment }: AssignmentDetailsProps) => {
  const { dispatch } = useAssignmentsContext();
  const { userState } = useUserContext();

  // Create format for due date
  const dueDate = new Date(assignment.dueDate);
  const months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec."
  ];
  const dueDateYear = dueDate.getUTCFullYear();
  const dueDateMonth = months[dueDate.getUTCMonth()];
  const dueDateDay = dueDate.getUTCDate();
  const formattedDueDate = dueDateMonth + " " + dueDateDay + ", " + dueDateYear;

  const handleClick = async () => {
    if (!userState.user) {
      return;
    }
    const response = await fetch(`/api/assignments/${assignment._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userState.user.token}`
      }
    });
    const data = await response.json();
    if (response.ok) {
      dispatch({ type: AssignmentOptions.DELETE_ASSIGNMENT, payload: data });
    }
  };

  return (
    <div className="relative border-solid border-4 border-slate-500 rounded-lg bg-white mx-20 mb-10 px-14 py-10 h-fit">
      <h3 className="text-xl mb-10">
        <strong>{assignment.title}</strong>
      </h3>
      <p>
        <strong>Course:</strong> {assignment.course}
      </p>
      <p>
        <strong>Due Date:</strong> {formattedDueDate}
      </p>
      <button
        onClick={handleClick}
        className="absolute top-5 right-12 bg-red-500 hover:bg-red-700 hover:cursor-pointer text-white p-4 rounded-lg font-bold">
        Delete
      </button>
    </div>
  );
};

export default AssignmentDetails;
