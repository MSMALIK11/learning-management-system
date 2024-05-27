import rightImage from '../../assets/mern-stack-inner.jpg'
import rainBoxImage from '../../assets/rainbow.webp'
const HomeTopBanner = () => {


    return (
        <>
            <div className="banner-top-wraper bg-white relative lg:h-[90vh] md:h-auto sm:px-4  flex items-center justify-around pt-12 w-full ">
                <div className='text-center flex-2 w-[40%]'>
                    <h1 className='lg:text-[3rem] sm:text-[2rem] font-bold'>Learn programming  interactively </h1>
                    <p className='text-gray-500 font-bold'> From zero to job ready: learning paths, interactive courses, projects, exercises and interview preparation.</p>
                    <button className='gradient-btn mt-12'>Get Started</button>
                </div>
                <div className='rightimg'>
                    <img src={rightImage} alt="" />
                </div>

                <div className='rainBoxImage sm:w-[40%]'>
                    <img src={rainBoxImage} alt="" />

                </div>
            </div>


        </>
    );
};

export default HomeTopBanner;
