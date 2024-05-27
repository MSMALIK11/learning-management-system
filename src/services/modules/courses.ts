import { lmsService } from "../http";
export const courses = {
    async getAllCourses() {
        return await lmsService.get('/courseList')
    },
    async getAllInstructorCourses() {
        return await lmsService.get('/admin/courseList')
    },
    async insertCourse(file: FormData) {
        return await lmsService.post('/course/add', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}