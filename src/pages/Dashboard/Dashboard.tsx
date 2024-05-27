import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';
import icon1 from '../../assets/icons/totalsalesvg.svg'
import icon2 from '../../assets/icons/enroll.svg'
import icon3 from '../../assets/icons/courses.svg'
import icon4 from '../../assets/icons/stidentssvg.svg'
import Heading from '../../components/Fields/Heading'

const Dashboard = () => {
    const data = [
        {
            title: 'Total Sales',
            iconImg: icon1,
            value: "$350",
            new: '$30',
            bgColor: '#ffc136'
        },
        {
            title: 'Total Entoll',
            iconImg: icon2,
            value: 1500,
            new: 125,
            bgColor: '#c182f9'
        },
        {
            title: 'Total Courses',
            iconImg: icon3,
            value: 120,
            new: 5,
            bgColor: '#c182f9'
        },
        {
            title: 'Total Students',
            iconImg: icon4,
            value: 2650,
            new: 245,
            bgColor: '#cca1f'
        },
    ]
    return (
        <div className='p-8 mt-2'>
            <div className='flex gap-2 items-center justify-between my-4'>
                <div className='flex gap-2 items-center'>
                    <DashboardIcon />
                    <Heading title='Instructor Dashboard' size="22px" />
                </div>
                <div>
                    <Button size='small' variant="contained">Create New Course</Button>
                </div>
            </div>
            <div className='grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    data?.map((item) => {
                        return (
                            <div key={item.title} className='shadow-lg p-4 flex justify-between'>
                                <div className="left-card flex flex-col gap-3">
                                    <Heading title={item.title} />
                                    <Heading title={item.value} />
                                    <span className={` text-white rounded-sm flex items-center justify-center bg-[#ffc136]`}>{item.new}</span>
                                </div>
                                <div className="card-right">
                                    <img src={item.iconImg} alt="" className='w-[70px] p-1' />
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Dashboard