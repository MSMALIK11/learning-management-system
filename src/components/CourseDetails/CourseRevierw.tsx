import Heading from "../Fields/Heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { Each } from "../common/Each";


const CourseReviews = () => {
    const data = [
        {
            name: 'Adam',
            date: 'Apr 04 2022',
            comment: ' its very wonderfull my course experience'
        },
        {
            name: 'serkan',
            date: 'Apr 06 2022',
            comment: ' its very wonderfull my course experience'
        }
    ]
    return (
        <>
            <div className="reviews-container">
                <Heading title="reviews" />
                {data && data.map((item, i) => {
                    return (
                        <div className="flex gap-3 mb-5 " key={i}>
                            <div className="bg-orange-500 w-[30px] h-[30px] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold">

                                    {item?.name?.charAt(0).toLocaleUpperCase()}
                                </span>
                            </div>
                            <div className="author-details ">
                                <h4>{item.name}</h4>
                                <div className="star">
                                    {[1, 2, 3, 4].map((item, i) => (
                                        <span key={i}>
                                            <FontAwesomeIcon color="orange" icon={faStar} />
                                        </span>
                                    ))}

                                    <span className="ms-3">
                                        <i>{item.date}</i>
                                    </span>
                                </div>
                                <span className="author-comment ">
                                    it's very wonderfull my course experience
                                </span>
                            </div>
                        </div>
                    );
                })}

                {/* <Each of={data} render={(item, index) => {
                    <li>{index}</li>
                }} /> */}

            </div>
        </>
    );
};

export default CourseReviews;
