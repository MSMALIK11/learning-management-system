import React, { useState } from "react";
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const CourseAccordian = ({ data }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        // <div className="w-[480px] ">
        //     {indexValue}
        //     <div style={{ background: generateLightColor(indexValue) }} className="border-l-2 border-blue-500  border-solid p-3  mb-2 flex justify-between">
        //         <span className="capitalize">{data.title}</span>
        //         <span onClick={() => handleToggleAccordion(data.id)}>
        //             <FontAwesomeIcon
        //                 className="cursor-pointer"
        //                 icon={openItemId === data.id ? faCaretUp : faCaretDown}
        //             />
        //         </span>
        //     </div>
        //     {openItemId === data.id && (
        //         <div className="border-l-2 border-orange-500 my-1  border-solid ">
        //             {data &&
        //                 data.body.map((item, i) => {
        //                     return (
        //                         <div className="transition 2s accordian-body-info px-3 py-2  gap-3 flex align-items-center" key={i} >
        //                             <span>
        //                                 <FontAwesomeIcon className="text-blue-400" icon={faPlay} />
        //                             </span>

        //                             <span className="capitalize">
        //                                 {item}
        //                             </span>
        //                         </div>
        //                     );
        //                 })}
        //         </div>
        //     )}
        // </div>
        <Accordion
            expanded={expanded}
            onChange={handleExpansion}
            slots={{ transition: Fade as AccordionSlots['transition'] }}
            slotProps={{ transition: { timeout: 400 } }}

            sx={{
                '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>{data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default CourseAccordian;
