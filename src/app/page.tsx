'use client'
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import {Search} from "./components/Search";
import {UserProps} from "./types/users";

export default function Home() {
      const [user, setUser] = useState<UserProps | null>(null);

      const loadUser = async (userName: string) => {
        const res = await fetch(`https://api.github.com/users/${userName}`,{
          method: 'GET',
        });

        const data = await res.json();

        const {avatar_url, login, location, followers, following} = data;

        const userData: UserProps = {
          avatar_url,
          login, 
          location, 
          followers, 
          following
        };

        setUser(userData)
      }

  return (
    <main 
    className='p-[2rem] bg-[#0e1129] h-screen text-white box-border
                
    ' 
    >
      
     <h1
      className='text-center text-white text-4xl mb-[1rem]'
      >
        GitHub finder
        </h1>

      <div
      className='flex items-center justify-center'
      >
      <div
      className='flex max-w-[500px] m-y-0 p-[2rem]  
      rounded-lg  column bg-[#2b3566] items-center justify-center '
      >
 
        
        <Search
        loadUser={loadUser}
        />

        {
          user && <p>{user.login}</p>
        }

      <p
      className='text-center text-white'
      >

      </p>
      </div>
      </div>
    </main>
  )
}
