import CourseReviews from "../components/CourseDetails/CourseRevierw"
import CourseStructure from "../components/CourseDetails/CourseStructures"
import Heading from "../components/Fields/Heading"
import CoursePaymentDetailsCard from "@/components/CourseDetails/CoursePaymentDetailsCard"
import lessionIcon from '../assets/icons/lessionColored.svg'
import TimerIcon from '../assets/icons/timer-icon.svg'
import peopleIcon from '../assets/icons/people.svg'
import { Star } from "@mui/icons-material"
const CourseDetails = () => {
    return (
        <div className="">
            <div className="courseDetailsBannar  h-[60vh] py-16 px-16 relative">
                <div className="flex flex-col gap-2 z-50 ">
                    <Heading title="Build a Blog App with Strapi CMS & React" size="32px" className="!text-white font-bold" />
                    <Heading title="Learn to use Strapi CMS for building a simple blog app" className="!text-white" />
                    <Heading title="Last updated 16/02/2024" className="!text-gray-300" />
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <span className="text-white  flex  items-center gap-2"><img src={lessionIcon} alt="" /> Lessons</span>
                            <span className="text-white  flex  items-center gap-2"><img src={TimerIcon} alt="" />30 minutes</span>
                            <span className="text-white  flex  items-center gap-2"><img src={peopleIcon} alt="" />20 Enrolled</span>
                            <span className="flex items-center gap-1 ms-2">
                                <Star className="text-white" />
                                <Star className="text-white" />
                                <Star className="text-white" />
                                <Star className="text-white" />
                            </span>
                        </div>
                    </div>

                </div>
                <div className="absolute right-20 top-24 ">
                    <CoursePaymentDetailsCard />
                </div>
            </div>
            <hr />
            <div className="px-16 py-6 w-[60%]  ">
                <div className=" shadow-lg p-6">
                    <h2 className="text-2xl bold">Overview</h2>
                    <p className="text-sm pt-6 text-gray-500 ">
                        Use of CANTECH INDIA® services or equipment for creating or sending Internet viruses, worms or Trojan horses, or for pinging, flooding or mail bombing, or engaging in denial of service attacks is prohibited. It is also prohibited for any customer to engage in other activity that is intended to disrupt or interfere with, or that results in the disruption of or interference with, the ability of others to effectively use CANTECH INDIA® services and equipment (or any connected network, system, service or equipment) or conduct their business over the Internet.
                    </p>
                </div>
                <CourseStructure />
                {/* <CourseReviews /> */}
            </div>

        </div >
    )
}

export default CourseDetails