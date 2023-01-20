import { useContext } from "react";
import { AssignmentsContext } from "../context/AssignmentContext";

export const useAssignmentsContext = () => {
    const context = useContext(AssignmentsContext);

    if (!context) {
        throw Error('useAssignmentsContext must be used inside a AssignmentsContextProvider');
    }

    return context;
};