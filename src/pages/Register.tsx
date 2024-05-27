import InputControl from "@/components/Fields/InputConrtrol";
import Heading from "@/components/Fields/Heading";
import Button from "@/components/Fields/Button";
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import Loader from "../components/common/Loader";
import api from "../services";
import { useMutation } from "@tanstack/react-query";
import { toast } from 'react-toastify';
const Login = () => {
    const [isLoading, setIsloading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    // Mutations

    const mutation = useMutation({
        mutationFn: async () => await api.auth.singup(formData),
        onSuccess: () => {
            setIsloading(false)
            toast.success('Register Successfully.')
            navigate('/login')
        },
        onError: (error: any) => {
            const errorMessage = error.response.data.message
            setIsloading(false)
            toast.error(errorMessage)
            console.error('Error::while user trying sugnup', errorMessage)

        }
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }
    const handleSubmit = async () => {
        console.log('runs')
        setIsloading(true)
        mutation.mutate()

    }

    return (
        <div className="bg-gray-300 h-screen flex items-center justify-center ">
            <Loader isVisible={isLoading} />
            <div className="px-8 py-10 rounded-md w-[420px]  shadow-lg bg-white">
                <Heading title="Sign in " className=" !text-lg !text-gray-900" />
                <Heading
                    title="to continue to Online Course Portal"
                    className=" !text-lg !text-gray-400"
                />
                <div className="flex flex-col gap-2 mt-4">
                    <InputControl label="Name" name="name" placeholder="Enter Name.." onChange={handleChange} />
                    <InputControl label="Email" name="email" placeholder="Enter Email.." onChange={handleChange} />
                    <InputControl label="Password" name="password" placeholder="Enter Password.." onChange={handleChange} />
                </div>
                <div className="flex justify-end">
                    <Button label="Create" onClick={handleSubmit} className={"gradient-btn h-[40px] w-full mt-6 "} />
                </div>
                <h1 className="text-sm  mt-10 m-2">
                    Already  have an account pelase
                    <NavLink className="text-blue-500 ms-1" to="/login">
                        Login
                    </NavLink>
                </h1>
            </div>
        </div>
    );
};

export default Login;
