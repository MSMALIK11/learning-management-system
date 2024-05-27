import Card from "@/components/Fields/Card";
import Loader from "@/components/common/Loader";
import api from "../../services"
import { useQuery } from "@tanstack/react-query";
import Each from "../../components/common/Each";
import ListBox from "../../components/Fields/ListBox";
const CourseContainer = () => {
    const { data, isLoading } = useQuery({ queryKey: ['courseViewList'], queryFn: async () => await api.courses.getAllCourses() })
    if (isLoading) {
        return <Loader isVisible={isLoading} />
    }
    const filterOptions = [
        {
            title: 'Recent',
            value: 'recent'
        }
    ]
    return (
        <div className="lg:px-6 my-6  py-4">
            <div className="flex items-center justify-center  w-full flex-col">
                <p className="text-blue-500">Popular Courses</p>
                <h3 className="text-center text-2xl font-bold mt-2">Expand Your Career Opportunity With Our Courses</h3>

            </div>
            {/* <div className="flex items-center justify-between py-3">

                <h3 className="text-muted font-josefin text-josef">We found 13 courses available for you </h3>
                <div>
                    <ListBox name='sortBy' options={filterOptions} />
                </div>

            </div> */}
            <div className="mt-6 grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-6 ">
                <Each
                    of={data?.data?.courses}
                    render={(item, index) => (
                        <Card key={index} course={item} />
                    )}
                />
            </div>
        </div>
    );
};

export default CourseContainer;
