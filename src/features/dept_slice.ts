import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DepartmentType, ProjectData } from "../model";
import { nursing_projects } from "../data/data";

// Start with an empty array for the initial state
const initialState: DepartmentType[] = [
    {
        id: "1",
        name: "Department of Nursing and Medical Health Care",
        projects: nursing_projects
    }
 ];

const deptSlice = createSlice({
    name: "deptslice",
    initialState,
    reducers: {
        // Add or update a department in the list
        addDeptToList(state, action: PayloadAction<DepartmentType>) {
            const existingDeptIndex = state.findIndex(dept => dept.id === action.payload.id);
            

            if (existingDeptIndex !== -1) {
                const existingDept = state[existingDeptIndex];

                // Implement the logic for handling projects within the department
                action.payload.projects.forEach((newProject: ProjectData) => {
                    const res = existingDept.projects.filter(
                        (project) => project.id === newProject.id
                    );

                    if (res.length > 0) {
                        existingDept.projects.pop();
                        // console.log("Project with the same ID already exists");
                    } else {
                        // existingDept.projects.pop();
                        existingDept.projects.push(newProject);
                        // console.log("No project with the same ID exists");
                    }
                });

            } else {
                // Add new department
                state.pop()
                state.push(action.payload);
                console.log("New department added");
            }
        },

        clearDeptList(state) {
            return initialState;
        }
    }
});

export const { addDeptToList, clearDeptList } = deptSlice.actions;
export default deptSlice.reducer;
