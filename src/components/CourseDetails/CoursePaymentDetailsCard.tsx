import img from '../../assets/c1.jpg'
import Button from '../Fields/Button'
import Heading from '../Fields/Heading'
import { PlayArrow } from '@mui/icons-material'
import LesionIcon from '../../assets/icons/lessions.svg'
import DurationIcon from '../../assets/icons/duration.svg'
import LevelIcon from '../../assets/icons/level.svg'
import MaxPeopleIcon from '../../assets/icons/maxStudents.svg'
const CoursePaymentDetailsCard = () => {
    return (
        <div className='w-[360px] shadow-lg bg-white rounded-tl-md rounded-se-md'>
            <div className='relative'>
                <div className='play-arrow-container'>
                    <div className='play-arrow'>

                        <PlayArrow fontSize="large" />
                    </div>
                </div>
                <img src={img} className='rounded-tl-md rounded-se-md ' />
            </div>
            <div className='flex flex-col gap-3 px-4 py-4'>
                <div className='flex gap-3 items-center'><span className='indicator'></span> <Heading title='Buy Course' /></div>
                <div className='flex flex-col gap-4'>
                    <span className='flex items-center gap-2'><img src={LesionIcon} alt="" />Lessions: <strong>0</strong></span>
                    <span className='flex items-center gap-2'><img src={DurationIcon} alt="" />Duration: <strong>30 mins</strong></span>
                    <span className='flex items-center gap-2'><img src={LevelIcon} alt="" />Level: <strong>Intermediate</strong></span>
                    <span className='flex items-center gap-2'><img src={MaxPeopleIcon} alt="" />Maximum Students: <strong>2000</strong></span>
                </div>
                <Heading title='Get access to this course forever when you buy it. Learn at your own pace, anytime.' />
                <Button label={"Buy Now"} className='gradient-btn' />
            </div>
        </div>
    )
}

export default CoursePaymentDetailsCard