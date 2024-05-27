import React from 'react'

interface Props {
    size?: 'sm' | 'md' | 'lg',
    backdrop?: boolean
    isVisible?: boolean
}

const Loader = ({ size = "lg", backdrop = true, isVisible = false }: Props) => {
    const dynamicClasses = [
        size === 'lg' && 'w-20 h-20',
        size === 'md' && 'w-14 h-14',
        size === 'sm' && 'w-5 h-5',
        'border-blue-500',
        'border-t-2',
        'animate-spin',
        'rounded-full',
        'relative',
    ].filter(Boolean).join(' ');
    return (
        <div className={`${isVisible ? 'block' : 'hidden'} absolute top-0  flex flex-col justify-center items-center z-[999] w-full h-full  ${backdrop ? 'bg-[#fafafa]/80' : ''} `}>
            <div className={dynamicClasses}>

            </div>
        </div>
    )
}

export default Loader