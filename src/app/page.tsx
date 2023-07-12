'use client'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'

import {UserProps} from "./types/users";

import {Search} from "./components/Search";
import {User} from "./components/User";
import {Error} from "./components/Error";

export default function Home() {
      const [user, setUser] = useState<UserProps | null>(null);
      const [erro, setErro] = useState(false);
      const [userName, setUserName] = useState('');

      const loadUser = async (userName: string) => {
        setErro(false);
        setUser(null);

        const res = await fetch(`https://api.github.com/users/${userName}`,{
          method: 'GET',
        });

        const data = await res.json();

        if (res.status === 404) {
              setErro(true);
              return;
        }

        const {avatar_url, login, location, followers, following} = data;

        const userData: UserProps = {
          avatar_url,
          login, 
          location, 
          followers, 
          following
        };

        setUser(userData)
        setUserName(userName);

      }

  return (
    <main 
    className='p-[2rem] bg-[#0e1129] h-screen text-white box-border
                
    ' 
    >
      
     <h1
      className='text-center text-white text-4xl mb-[1rem] font-bold'
      >
        GitHub finder
        </h1>

      <div
      className='flex items-center justify-center flex-col'
      >
      <div
      className='flex  m-y-0 md:p-[3rem]   p-[2rem]
      rounded-[20px]  column bg-[#2b3566] items-center justify-center md:w-[600px]
      w-[330px]
      '
      >
 
  
        <Search
        loadUser={loadUser}
        />
      </div>

        {
          user && 
          <User {...user}
          />
        }

        {
          erro &&
          <Error/>
        }

      <p
      className='text-center text-white'
      >

      </p>
      </div>
    </main>
  )
}
