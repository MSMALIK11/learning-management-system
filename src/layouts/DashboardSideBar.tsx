import React, { useState } from 'react'
import { faDashboard, faPaperPlane, faGraduationCap, faChartBar, faDollar, faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TimelineIcon from '@mui/icons-material/Timeline';
import { NavLink } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Heading from '../components/Fields/Heading'
import { IconButton } from '@mui/material';
import { motion } from "framer-motion"
const showAnimation = {
    hidden: {
        width: 0,
        opacity: 0,
        transition: {
            duration: "0.5",
        },
    },
    show: {
        width: "auto",
        opacity: 1,
        transition: {
            duration: "0.2",
        },
    },
};
const DashboardSideBar = () => {
    const [open, setOpen] = useState(true)
    const [show, setShow] = useState(false)
    const dashboardRoutes = [
        {
            path: '/dashboard',
            name: 'Dashboard',
            icon: faDashboard
        },
        {
            path: '/dashboard/my-courses',
            name: 'My Courses',
            icon: faGraduationCap
        },
        {
            path: '/dashboard/course/add',
            name: 'Add Course',
            icon: faGraduationCap
        },
        {
            path: '/dashboard/messages',
            name: 'Messages',
            icon: faPaperPlane,

        },
        {
            path: '/dashboard/analysis',
            name: 'Analysis',
            icon: faChartBar
        },
        // {
        //     path: '/dashboard/statement',
        //     name: 'Statement',
        //     icon: faDollar
        // },
        {
            path: '/dashboard/settings',
            name: 'Settings',
            icon: faGear
        },
    ]
    const handleOpen = () => {

        setOpen(!open)
    }
    const handleShowArrayIcon = () => {
        setShow(!show)

    }

    return (
        <motion.div animate={{
            width: open ? "200px" : "80px",
            transition: {
                duration: 0.5,
                type: "spring",
                damping: 8,
            },
        }} className={`bg-white h-screen relative sidebarContainer`} onMouseEnter={handleShowArrayIcon} onMouseLeave={handleShowArrayIcon} >
            {/* <div className='w-full bg-brand text-white text-center p-2'>
                LMS
            </div> */}
            {/* instructor  profile */}
            {
                show && <div className={`chaveron-icon `}>
                    {!open ? <IconButton onClick={handleOpen}><ChevronLeftIcon className='shadow-lg rounded-full' /></IconButton> : <IconButton onClick={handleOpen}> <ChevronRightIcon className='shadow-lg rounded-full' /></IconButton>}
                </div>
            }
            <ul className='px-2 flex flex-col gap-4 pt-12'>
                {
                    dashboardRoutes?.map((item) => <li key={item.name} title={item.name} className={`${item.name === 'Messages' ? 'message-item' : ''} flex hover:ms-2  items-center cursor-pointer`}><NavLink className="flex items-center gap-4 " to={item.path} ><FontAwesomeIcon icon={item.icon} /> {open && <span>{item.name}</span>} </NavLink></li>)
                }
            </ul>
            {/* <div className='absolute bottom-0 h-[60px] bg-gray-900 w-full'>

                <p className='text-white'>kkkkk</p>
            </div> */}
        </motion.div>
    )
}

export default DashboardSideBar