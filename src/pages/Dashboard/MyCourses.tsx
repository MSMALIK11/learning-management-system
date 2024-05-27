import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../../services'
import Loader from "@/components/common/Loader";
import Heading from '../../components/Fields/Heading';
const MyCourses = () => {

    const { data, isLoading } = useQuery({ queryKey: ['courseViewList'], queryFn: async () => await api.courses.getAllInstructorCourses() })

    if (isLoading) {
        return <Loader isVisible={isLoading} />
    }
    console.log('data', data)
    const Card = ({ title, description, instructor, image }) => {
        return (
            <div className='shadow-lg w-[280px] flex flex-col gap-3 justify-center items-center' >
                <img src={image} alt="" width={200} />
                <div>
                    <Heading title={title} />
                </div>
            </div>
        )
    }
    return (
        <div className='p-8 mt-2 flex  gap-3'>
            {data?.data?.course?.map((course) => <Card title={course.title} image={course.image.url} />)}
        </div>
    )
}

export default MyCourses