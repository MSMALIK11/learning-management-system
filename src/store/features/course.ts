/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

export interface CoursesState {
    results: any[];
}
const initialState: CoursesState = {
    results: []
}

export const courseSlice = createSlice({
    name: 'CourseSlice',
    initialState,
    reducers: {
        getCourses: (state, action) => {
            state.results = action.payload
        }
    }
})

export const { getCourses } = courseSlice.actions
export default courseSlice.reducer


