import React from 'react'

interface PageBannerProps {
    title: string;
}
const PageBanner: React.FC<PageBannerProps> = ({title}) => {
  return (
    <div className='flex items-center justify-start h-64 bg-fixed bg-center bg-cover relative'>
    {/* Display your banner content using the data from bannerData */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
        <div className='p-5 text-white w-screen z-[2]'>
            <h3 className='text-5xl font-bold text-center'>{title}</h3>
        </div>
    </div>
  )
}

export default PageBanner