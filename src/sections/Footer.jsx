import React from 'react'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
const  Footer = ()=> {
  return (
  <footer className='max-container'>
    <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>

      <div  className='flex flex-col items-start'>
              <a
               href='/'
               >
               <img 
                src={footerLogo}
                alt="footer logo"
                width={150}
                height={46}
                className='m-0'
               />

              </a>
           
              <p className='mt-6 text-base leading-7 font-montserrat sm:max-w-sm text-white'>
              Nike, Inc. is the world’s leading designer, marketer, 
              and distributor of authentic athletic footwear, apparel, 
              equipment, and accessories 
              for a wide variety of sports and fitness activities.</p>
           <div className='flex items-center gap-5 mt-8'>
           {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full
              cursor-pointer hover:bg-red-900  hover:shadow-lg ring-slate-900 '>
              
              <img 
                src={icon.src}
                alt={icon.alt}
               
                width={24}
                height={24}
               />

              </div>
           ))}
           </div>
      </div>
      <div className='flex justify-center flex-wrap lg:gap-10 gap-20'>
      {footerLinks.map((section)=>(
        <div key={section}>
              <h4 className='text-white font-montserrat font-medium mb-6 leading-normal text-2xl'>{section.title}</h4>
              <ul>
                {section.links.map((link)=>(
                  <li className='text-white  mt-3 
                  hover:text-slate-gray font-montserrat leading-normal text-base'
                  key={link.name}>
                  <a>{link.name}</a>

                  </li>
      ))}
              </ul>
        </div>
      ))}

      </div>

    </div>

    <div className='flex justify-center mt-24 max-sm:flex-col max-sm:items-center text-white-400'>
         <div className='flex flex-1 items-center justify-start gap-2 font-montserrat cursor-pointer'>
          <img 
            src={copyrightSign}
            alt='copy right sign '
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyrights All fight reserved</p>
         </div>
         <p className='cursor-pointer font-montserrat'>Terms & condition</p>
    </div>
  </footer>
  )
}

export default Footer