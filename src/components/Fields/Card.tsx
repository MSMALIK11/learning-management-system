import image1 from "../../assets/c1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import courseImage from '../../assets/image/cardImage.jpg'
import instructorImage from '../../assets/image/instructor.jpg'
import {
    NavLink,
} from "react-router-dom";
const Card = ({ course }) => {

    // const { theme } = useTheme()
    return (

        <div className="shadow-lg relative bg-white  rounded-md bg-${theme} courseCard">
            <div className="card-image">
                <img src={courseImage || image1} alt="course image" height={"50%"} className="rounded-ss-lg  rounded-se-lg" />
            </div>
            <div className="px-6  p-6">
                <NavLink to={`/course/${course.slug}`}>
                    <h6 className="text-md  font-bold text-gray-900">{course.title}</h6>
                </NavLink>
                <div className="text-gray-400 flex  items-center gap-2 mt-2"> <img src={instructorImage} className="rounded-full w-[25px] h-[25px]" />  Maxmillion</div>
                <div id="price-section" className="flex gap-2 mt-4">
                    <h4><del>$84.99</del> <span className="text-md text-blue-400">$16.99</span></h4>
                </div>
            </div>
            <div className="absolute top-5 right-5 bg-white rounded-full p-1 flex item-center sahdow-lg ">
                <FontAwesomeIcon color="red" icon={faHeart} />
            </div>
        </div>

    );
};

export default Card;
