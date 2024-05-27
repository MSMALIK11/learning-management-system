import React, { useCallback, useState } from 'react'
import fileUplaod from '../../assets/icons/feather_upload-cloud.png'
import Heading from '../Fields/Heading'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDropzone } from 'react-dropzone';
interface UploadProp {
    name: string,
    onChange: (image: File) => void
}
const UplaodFile = ({ onChange }: UploadProp) => {
    const [image, setImage] = useState("")
    const onDrop = useCallback(acceptedFiles => {
        const file = URL.createObjectURL(acceptedFiles[0])
        setImage(file)
        onChange(acceptedFiles[0])
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    const handleDeletePreviewImage = () => {
        setImage("")
    }
    return (
        <div className='mt-4  flex gap-4'>
            <div className='fileUpload'>

                <div className='flex flex-col items-center gap-4'  {...getRootProps()}>
                    <div>

                        <img src={fileUplaod} />
                    </div>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the files here ...</p>
                    ) : (
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    )}
                    {/* <Heading title='Select a file or drag and drop here ' /> */}
                    <Heading title='JPG, PNG, file size no more than 5 MB' />
                    <div>
                        <Button variant='outlined'>Select </Button>
                    </div>
                </div>
            </div>
            {/* file Preview */}
            <div className=' relative p-2 flex items-center justify-center'>

                {
                    image && <div> <DeleteIcon onClick={handleDeletePreviewImage} fontSize='16px' color='white' className='absolute cursor-pointer right-2 top-3 hover:text-red-500' /><img src={image} alt="Uploaded" className='shadow-lg p-2' style={{ width: '100%', height: '400px', objectFit: 'contain' }} /></div>
                }
            </div>
        </div>
    )
}

export default UplaodFile