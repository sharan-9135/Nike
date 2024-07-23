import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'
const  CustomerReviews = ()=> {
  return (
   <section className='max-container'>
   <h3 className='font-bold font-palanquin text-center text-4xl'> What out 
   <sapn className="text-coral-red">customer</sapn> reviws</h3>
   <p className='info-text m-auto mt-4 max-w-lg text-center'>
    Here some our customers gives geninuing 
    review please read it properly.
    trust is much more important for us!
   </p>
   <div className='mt-24 flex flex-1 justify-evenly 
   items-center max-lg:flex-col gap-14'
   >
    {reviews.map((review)=>(
      <ReviewCard
        key = {review.customerName}
        imgURL = {review.imgURL}
        customerName = {review.customerName}
        rating = {review.rating}
        feedback = {review.feedback}


      />
    ))}
   </div>

   </section>
  )
}

export default CustomerReviews


