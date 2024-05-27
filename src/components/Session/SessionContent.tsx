import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { PlayCircle } from '@mui/icons-material';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Each from '../common/Each';
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            className='my-1'
        >
            {value === index && (
                <Box sx={{ pt: 1 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function SessionContent() {
    const [value, setValue] = React.useState(0);
    const [lessions, setLessions] = useState([
        {
            title: "Introduction",
            duration: '3:36'
        },
        {
            title: "History",
            duration: '4:36'
        }
    ])
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className=" px-4 py-1 bg-darkLight rounded-lg">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Module" {...a11yProps(0)} />
                    <Tab label="Live comments" {...a11yProps(1)} />
                    <Tab label="Notes" {...a11yProps(2)} />
                </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>

                <div className='flex flex-col'>
                    <Each of={lessions} render={(item) => <div key={item.title} className='flex gap-4  items-center border-b border-darkSoft py-1'>
                        <PlayCircle />
                        <div className='flex flex-col gap-1 '>
                            <h3 className='flex gap-3 text-sm'> {item.title}</h3>
                            <p>{item.duration}</p>
                        </div>
                    </div>} />

                </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}

export default SessionContent