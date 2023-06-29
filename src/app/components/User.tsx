import React from 'react'
import { MdLocationPin } from 'react-icons/md';
import {UserProps} from "../types/users";
import Link from 'next/link';

export const User = ({
    avatar_url,
    login, 
    location, 
    followers, 
    following
} : UserProps) => {
  return (
    <div
    className='flex bg-[#2b3566] rounded-[1rem] 
               flex-col gap-[1.2rem] md:mt-12 mt-5 md:p-28 p-14
               justify-center align-center text-center
                
               '
    >

        <div
        className='flex justify-center'
        >
        <img 
        src={avatar_url} 
        alt={login}
        className=' md:w-[190px] md:h-[190px] w-[130px] md:h-[130px]
                   border-4 
                 border-sky-500 rounded-[50%]'
         />

        </div>
        

        <h2
        className=' md:text-4xl font-bold text-2xl'
        >{login}</h2>

        {location && (
            <div
            className='flex justify-center mr-5'
            >

            <span
            className='md:text-3xl text-2xl mr-2 '
            >
            <MdLocationPin
            className='text-[#42f59b]'
            />
            </span>

            <span
            className=' md:text-2xl text-[#9da5d1]'
            >
            
            {location}
            </span>
            
            </div>
        )}

        <div
        className={location? 'flex flex-row md:ml-7' : 'flex flex-row '}
        >
            <div
            className='mr-3 border-r-2 pr-3'
            >
                <p
                className='pb-2 md:text-[20px]'
                >
                    Seguidores:
                </p>
                <p
                className='bg-[#42f59b] md:p-1 rounded md:text-[20px]'
                >
                {followers}
                </p>
            </div>

            <div>
                <p
                className='pb-2 md:text-[20px]'
                >
                    Seguindo:
                </p>
                <p
                className='bg-[#42f59b] md:p-1 rounded md:text-[20px]'
                >
                {following}
                </p>
            </div>
        </div>
        <Link href={`/repos/${login}`}>
                Ver melhores projetos
      </Link>
    </div>
  )
}
