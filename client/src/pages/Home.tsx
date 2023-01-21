import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AssignmentDetails from "../components/AssignmentDetails";
import AssignmentForm from "../components/AssignmentForm";
import { ActionOptions } from "../context/AssignmentContext";
import { useAssignmentsContext } from "../hooks/useAssignmentsContext";

const Home = () => {
  const { assignmentsState, dispatch } = useAssignmentsContext();

  useEffect(() => {
    const fetchAssignments = async () => {
      const response = await fetch("/api/assignments");
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: ActionOptions.SET_ASSIGNMENTS, payload: data });
      }
    };
    fetchAssignments();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-24 bg-slate-100 pt-10 min-h-screen">
      <div className="col-span-2">
        {assignmentsState.assignments.map((assignment) => (
          <AssignmentDetails key={uuidv4()} assignment={assignment} />
        ))}
      </div>
      <AssignmentForm />
    </div>
  );
};

export default Home;
