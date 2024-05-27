import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const InputSearchControl = () => {
    return (
        <div className='flex my-2 bg-white  relative rounded-lg shadow-lg'>
            <input placeholder='Search Courses...' type="text" className='outline-none rounded-lg ps-3 py-1 w-[80%]' />
            <div className='bg-blue-700 absolute right-0 h-full flex items-center justify-center rounded-se-md rounded-ee-md'>
                <FontAwesomeIcon className='text-white px-2' icon={faSearch} />
            </div>
        </div>
    )
}

export default InputSearchControl