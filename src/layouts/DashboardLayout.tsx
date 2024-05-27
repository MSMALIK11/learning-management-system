import { Outlet } from 'react-router-dom'
import { DashboardSideBar } from '.'
import InctructorHeader from '../components/Dashboard/InctructorHeader'
const DashboardLayout = () => {
    return (
        <div className='flex'>
            <div>
                <DashboardSideBar />
            </div>
            <div className='w-full'>
                <InctructorHeader />
                <Outlet />
            </div>
        </div>

    )
}

export default DashboardLayout