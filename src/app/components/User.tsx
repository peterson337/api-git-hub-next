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
    className='flex bg-[#2b3566] p-[3rem] rounded-[1rem] 
               flex-col justify-center align-center gap-[1.2rem] mt-12'
    >
        <img 
        src={avatar_url} 
        alt={login}
        className=' w-[140px] h-[140px] border-4 
                 border-sky-500 rounded-[50%]'
         />

        <h2>{login}</h2>

        {location && (
            <p>
            <MdLocationPin/>
            <span>{location}</span>
            </p>
        )}

        <div>
            <div>
                <p>Seguidores:</p>
                <p>{followers}</p>
            </div>

            <div>
                <p>Seguindo:</p>
                <p>{following}</p>
            </div>
        </div>
        <Link href={`/repos/${login}`}>
                Ver melhores projetos
      </Link>
    </div>
  )
}
