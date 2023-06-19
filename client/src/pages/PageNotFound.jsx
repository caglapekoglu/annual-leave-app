import React from 'react'
import pagenotfound from '../assets/pagenotfound.svg'
import home from '../assets/home.svg'
function PageNotFound() {
    return (
        <>
            <div className='h-12 flex justify-between items-center px-10 my-[22px]'>
                <p className='text-xl font-semibold'>Page Not Found</p>
                <a href='/' type='submit' className='bg-select-b px-4 py-2 rounded-md text-white flex text-[16px] gap-x-1'><img src={home} alt="" /> <span>Ana sayfaya dön</span></a>


            </div>
            <div className='flex justify-center items-center pt-[100px]'>
                <img src={pagenotfound} alt="" />
            </div>
        </>
    )
}

export default PageNotFound