import React from 'react'
import ImageFour from '../images/jacket.jpg';
import ImageFive from '../images/trouser.jpg';

const Content = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='menu-card'>
                <img src={ImageFour} alt='egg' className='h-full rounded mb-20 shadow'/>
                <div className='menu-content'>
                    <h2 className='text-2xl mb-2'>Black Leather</h2>
                    <p className='mb-2'>zip-up jacket on white textile</p>
                    <span>$60</span>
                </div>
            </div>
            <div className='menu-card'>
                <img src={ImageFive} alt='egg' className='h-full rounded mb-20 shadow'/>
                <div className='menu-content'>
                    <h2 className='text-2xl mb-2'>Jean</h2>
                    <p className='mb-2'>Blue denim jen on white textile</p>
                    <span>$18</span>
                </div>
            </div>
        </div>
    )
}

export default Content
