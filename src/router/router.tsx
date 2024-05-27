
import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CourseDetails from "../pages/CourseDetails";
import Login from '../pages/Login'
import Register from '../pages/Register'
import { DashboardLayout } from "../layouts";
import Session from "../pages/Session";
import { CreateCourse, CreateLectures, Dashboard, MyCourses } from '../pages/Dashboard'
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,

    },
    {
        path: '/course/:id',
        element: <CourseDetails />
    },
    {
        path: '/course/session/:courseId/:title',
        element: <Session />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/my-courses',
                element: <MyCourses />
            },
            {
                path: '/dashboard/course/add',
                element: <CreateCourse />
            },
            {
                path: '/dashboard/:title/lectures',
                element: <CreateLectures />
            }

        ]

    }
]);

export default router