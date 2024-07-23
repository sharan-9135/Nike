import React from 'react'
import { star } from '../assets/icons'

const  ReviewCard = ({imgURL,
    customerName,
    rating,
    feedback})  => {
  return (
    <div className='flex justify-center items-center flex-col'>
    <img
        src={imgURL}
        alt='customer review image'
        className='rounded-full object-cover w-[120px] h-[120px]'
    />
    <p className='info-text m-auto mt-6 max-w-lg text-center'>{feedback}</p>
    <div className='mt-3 flex justify-center items-center gap-2.5'>
     <img
        src={star}
        width={24}
        height={24}
        className='object-contain m-0'
     />
     <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
    
    </div>
    <h3 className='text-center text-bold font-palanquin text-3xl '>{customerName}</h3>


    </div>
  )
}

export default ReviewCard