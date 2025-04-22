import React from 'react'
import { Icons } from '../Icons/Icons'

export const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 mt-10 md:mt-auto'>
 <h1 className="text-white text-center text-3xl font-jetbrains font-bold">
        CONTACT
      </h1>

    <p className='text-white font-jetbrains'>
    Mail: arjunsaseendran@icloud.com
        </p>  

        <p className='text-white font-jetbrains'>

      Phone: +918086679050
        </p>
        <span className='text-white'>
            <Icons contact={true}/>
        </span>

    </div>
  )
}
