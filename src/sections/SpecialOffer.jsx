

import { arrowRight } from "../assets/icons"
import {offer }from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
   <section className='flex justify-wrap items-center
   max-xl:flex-col-reverse gap-10 max-container'>
   <div className='flex-1'>
     <img 
      src={offer} width={773} height={687}
    className='object-contain w-full' />
   </div>
   <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          
          <span className='text-coral-red'> Special</span>  Offer
        
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Discover our special offer! Enjoy exclusive discounts and 
        savings on your favorite products. Don't miss out on this 
        limited-time deal. Shop now and experience unbeatable value. 
        Hurry, offer ends soon!
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
         <div className='mt-11 flex flex-wrap gap-4'> 
          <Button label="shop now" iconUrl={arrowRight}/>
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div> 
         
      </div>
          
          
           
           


   </section>
  )
}

export default SpecialOffer