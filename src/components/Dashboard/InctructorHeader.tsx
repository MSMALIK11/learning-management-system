import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
const InctructorHeader = () => {
    return (
        <div className='flex justify-between items-center shadow-sm w-full px-4 h-[56px]'>
            <div>
                <h1>Welcome To Dashboard</h1>
            </div>
            <div>
                <IconButton>
                    <Avatar sx={{ bgcolor: deepPurple[700] }}>MS</Avatar>
                </IconButton>
            </div>
        </div>
    )
}

export default InctructorHeader