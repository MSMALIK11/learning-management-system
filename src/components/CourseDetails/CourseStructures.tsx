
import CourseAccordian from "./CourseAccordion";
import Heading from "../Fields/Heading";
import Each from "../common/Each";
const CourseStructure = () => {
    const data = [
        {
            id: 1,
            title: "introduction ",
            body: ["introduction-welcome"],
        },
        {
            title: "react fundamental",
            id: 2,
            body: [
                "components",
                "jsx exprssion",
                "props",
                "conditional rendering",
                "dom events",
            ],
        },
        {
            id: 3,
            title: "working with state ",
            body: [
                "components",
                "jsx exprssion",
                "props",
                "conditional rendering",
                "dom events",
            ],
        },
        {
            id: 4,
            title: "working with state ",
            body: [
                "components",
                "jsx exprssion",
                "props",
                "conditional rendering",
                "dom events",
            ],
        },
    ];
    // // Higher-Order Component
    // const Each = ({ render, of }) => (
    //     <>
    //         {of.map((item, index) => render(item, index))}
    //     </>
    // );
    return (
        <>
            <div className="course-structure-container">
                <Heading title="Course Structure" className="mt-6 !text-2xl" />
                <div>
                    <span className="text-white">35 lactures - 03:45:42 total duration</span>
                    <div className="course-structure-accourdian">
                        <Each
                            of={data}
                            render={(item, index) => (
                                <CourseAccordian key={item.id + index} data={item} />
                            )}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseStructure;
