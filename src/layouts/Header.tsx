import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IconButton } from '@mui/material'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faHouse, faBook, faDashboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import loginImage from '../assets/login.png'
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationMenu from './Notification'
import AccountMenu from './AccountMenu'
import api from "../services";
const Header = () => {
    const [user, setUser] = useState({})
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    useEffect(() => {
        if (auth) {
            const userData = JSON.parse(auth)
            setUser(userData)
        }
    }, [auth])
    const navLinks = [
        {
            name: 'Home',
            path: "/home",
            icon: faHouse
        },
        {
            name: 'Courses',
            path: 'course',
            icon: faBook
        },
        {
            name: 'Dashboard',
            path: '/dashboard',
            icon: faDashboard

        }

    ]
    const handleLogout = async () => {
        try {
            const res = await api.auth.userLogout()
            if (res.status === 200) {
                localStorage.removeItem('user')
                navigate('/login')
            }
        } catch (error) {
            console.error('Error::while trying to logout', error)
        }
    }
    return (
        <motion.div initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} className='flex items-center bg-darkPrimary text-white justify-between lg:px-32  sm:px-12 xs:px-6 h-[56px] shadow-sm mx-auto '>
            <div>
                <h1>LMS</h1>
            </div>
            {/* <div className='w-[30%] sm:hidden xs:hidden lg:block'>
                <InputSearchControl />
            </div> */}
            <div className='flex gap-3 items-center '>
                {
                    navLinks.map((link, index) => <NavLink className=" hover:bg-darkLight rounded-sm px-2 py-1 transition-all" key={index} to={link.path}>{link.name}</NavLink>)
                }
                <NotificationMenu />

                <div className='relative hover:bg-darkLight rounded-sm px-1 py-1 transition-all flex items-center'>
                    {
                        user.name === undefined ? <NavLink to="/login">
                            <img src={loginImage} width="20" />
                        </NavLink> : <AccountMenu />
                    }

                </div>
                {
                    user.name !== undefined && <LogoutIcon onClick={handleLogout} className='ml-3 cursor-pointer' />
                }




            </div>
        </motion.div>
    )
}

export default Header