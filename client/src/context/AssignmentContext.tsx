import React, { createContext, useReducer } from "react";

export type Assignment = {
    _id: String,
    title: String,
    course: String,
    dueDate: Date,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

type AssignmentsContextProviderProps = {
    children: React.ReactNode
}

export const enum ActionOptions {
    SET_ASSIGNMENTS,
    CREATE_ASSIGNMENT
}

export type ActionType = {
    type: ActionOptions
    payload: any
}

type AssignmentsStateType = {
    assignments: Assignment[]
}

export const AssignmentsContext = createContext<{assignmentsState: AssignmentsStateType; dispatch: React.Dispatch<ActionType>;}>
                                    ({assignmentsState: {assignments: []}, dispatch: () => null});

export const assignmentsReducer = (state: AssignmentsStateType, action: ActionType) => {
    switch(action.type) {
        case ActionOptions.SET_ASSIGNMENTS:
            return {
                assignments: action.payload
            };
        case ActionOptions.CREATE_ASSIGNMENT:
            return {
                assignments: [action.payload, ...state.assignments].sort((a,b) => +new Date(a.dueDate) - +new Date(b.dueDate))
            };
        default:
            return state;
    }
};

export const AssignmentsContextProvider = ({ children }: AssignmentsContextProviderProps) => {
    const [assignmentsState, dispatch] = useReducer(assignmentsReducer, { assignments: [] });
    return (
        <AssignmentsContext.Provider value={{ assignmentsState, dispatch }}>
            { children }
        </AssignmentsContext.Provider>
    )
};