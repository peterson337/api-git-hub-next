'use client'
import React, {useState, useEffect} from 'react'
import { usePathname  } from 'next/navigation'


type APi = {
    id: string;
    name: string;
    created_at:string
    updated_at: string;
    pushed_at: string;
    description: string;
    language:string;
    watchers: number; 
    forks: number;
    html_url: string;
    login: string;
}

export const Repositorios = () => {
        const [repositorio, setRepositorio] = useState<APi[]>([]);

        const pathname = usePathname();

        useEffect(() => {
          fetch(`https://api.github.com/users${pathname}/subscriptions`)
          .then(response => response.json())
          .then((json) => {
            setRepositorio(json);
          })
        }, [pathname])
        

  return (
    <div
    className='flex flex-col justify-center text-center space-y-12'
    >
                    <h1>GitHub finder</h1>

                   {repositorio &&
                   <p> Explore os repositórios do usuário: {pathname} </p>

                   }
        {
            repositorio.map((val) => {
                return(
                    <div
                    key={val.id}
                    className='bg-slate-700  p-8 md:mx-96 rounded-lg '
                    >       {/* 
                    md:p-28
                     */}
                        <div
                        className=' bg-red-900 p-20  rounded-lg border-2 '
                        >
                        <p>{val.name}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
