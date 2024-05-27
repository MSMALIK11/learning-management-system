
import HomeTopBanner from '../pages/Bannar/Banner'
import CourseContainer from '../pages/Courses/CourseContainer'

import Header from "@/layouts/Header";
const MainLayout = () => {
    return (
        <div>
            <Header />

            <HomeTopBanner />
            <CourseContainer />
        </div>
    )
}

export default MainLayout