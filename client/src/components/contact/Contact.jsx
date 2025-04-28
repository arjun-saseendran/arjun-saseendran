import React from 'react'
import { Icons } from '../Icons/Icons'

export const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-10 md:mt-auto'>
 <h1 className=" text-center text-3xl font-thin ">
        CONTACT
      </h1>

    <p className=' font-thin'>
    Mail: arjunsaseendran@icloud.com
        </p>  

        <p className=' font-thin'>

      Phone: +918086679050
        </p>
        <span className=''>
            <Icons contact={true}/>
        </span>

    </div>
  )
}
