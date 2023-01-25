import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import AssignmentDetails from "../components/AssignmentDetails";
import AssignmentForm from "../components/AssignmentForm";
import { ActionOptions } from "../context/AssignmentContext";
import { useAssignmentsContext } from "../hooks/useAssignmentsContext";
import { useUserContext } from "../hooks/useUserContext";

const Home = () => {
  const { assignmentsState, dispatch } = useAssignmentsContext();
  const { userState } = useUserContext();

  useEffect(() => {
    const fetchAssignments = async () => {
      if (!userState.user) {
        return;
      }
      const response = await fetch("/api/assignments", {
        headers: {
          Authorization: `Bearer ${userState.user.token}`
        }
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: ActionOptions.SET_ASSIGNMENTS, payload: data });
      }
    };

    if (userState) {
      fetchAssignments();
    }
  }, [dispatch, userState]);

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
