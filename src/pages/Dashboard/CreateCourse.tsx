import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Loader from "@/components/common/Loader";
import InputConrtrol from '../../components/Fields/InputConrtrol';
import Heading from "../../components/Fields/Heading"
import ReactQuill from 'react-quill';
import Button from '@mui/material/Button';
import 'react-quill/dist/quill.snow.css';
import ListBox from '../../components/Fields/ListBox';
import UplaodFile from '../../components/Dashboard/UplaodFile';
import { categpryLists, courseLevel } from './mockData'
import { courseFormData } from '../../types'
import api from '../../services'
const formData = {
    title: "",
    shortDescription: "",
    description: "",
    category: "",
    courseLevel: "",
}
const CreateCourse = () => {
    const [courseFormData, setCourseFormData] = useState<courseFormData>(formData)
    const [file, setFile] = useState<File>()
    const [isLoading, setisLoading] = useState(false)
    const navigate = useNavigate()
    const handleChange = (name: string, value: string) => {
        setCourseFormData({ ...courseFormData, [name]: value })
    }
    const handleFileUplaod = (value: File) => {
        setFile(value)
    }
    const handleDescriptin = (val: string) => {
        setCourseFormData({ ...courseFormData, ['description']: val })
    }
    const handleSubmit = async () => {
        setisLoading(true)
        if (file) {
            const formData = new FormData()
            formData.append('title', courseFormData.title)
            formData.append('shortDescription', courseFormData.shortDescription)
            formData.append('description', courseFormData.description)
            formData.append('category', courseFormData.category)
            formData.append('courseLevel', courseFormData.courseLevel)
            formData.append('image', file)
            try {
                const res = await api.courses.insertCourse(formData)
                if (res.status === 200) {
                    setisLoading(false)
                    navigate('/dashboard/my-courses')
                }
            } catch (error) {
                setisLoading(false)
                console.error("Error::while calling add course api ", error)
            }

        }

    }
    return (
        <div className="px-4">
            <Heading title="Create New Course" className="!text-[2rem]" />
            <div className='shadow-lg border border-gray-200 p-4 '>
                <div className='flex flex-col gap-4'>
                    <InputConrtrol name='title' label='Title' placeholder='Title' onChange={handleChange} />
                    <InputConrtrol name='shortDescription' label='Short Description' placeholder='Short description' onChange={handleChange} />
                    <ListBox name="category" options={categpryLists} label="Course Category *" onChange={handleChange} />
                    <div className=''>
                        <label>Course Description</label>
                        <ReactQuill theme="snow" onChange={handleDescriptin} />
                    </div>
                    <ListBox options={courseLevel} label="Course level" name="courseLevel" onChange={handleChange} />
                </div>
                <UplaodFile name="image" onChange={handleFileUplaod} />
                <div className='flex items-center justify-end  p-4'>
                    <Button onClick={handleSubmit} variant="contained">Contained</Button>
                </div>
            </div>
            <Loader isVisible={isLoading} />
        </div>
    )
}

export default CreateCourse