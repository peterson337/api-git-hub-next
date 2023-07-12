'use client'
import React, {useState, useEffect} from 'react'
import { usePathname  } from 'next/navigation'
import Link from 'next/link';

import { AiOutlineStar } from 'react-icons/ai';


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
              return (
                <div key={val.id} className='bg-[#242b66] p-8 md:mx-96
                                               rounded-lg mx-auto'>
                  <div className='bg-[#0e1129] p-20 rounded-lg border-2 flex 
                                    flex-col text-center space-y-3 justify-center'>
                    <p>{val.name}</p>
              
                    {/* <p>{val.created_at}</p> */}
              
                    {
                    val.language ? (
                      <div>
                        <p>{val.language}</p>
                      </div>
                    ) : (
                      <p>Nenhuma linguagem encontrada</p>
                    )}
              
                    <div className='flex flex-row space-x-3 justify-center items-center'>
                      <div className='flex flex-row'>
                        
                        <div
                        className='bg-blue-400 p-1 w-10 h-8 text-center'
                        >
                        <AiOutlineStar
                         className='mt-1 '
                          />

                        </div>

                        <div className='p-2 h-8 w-14 border'>
                          <p
                          className='mb-2'
                          >{val.watchers}
                          </p>
                        </div>
                      </div>
              
                      <p>{val.forks}</p>
                    </div>
              
                    <div className='flex justify-center'> {/* Adicionando a classe 'flex justify-center' */}
                      <Link
                        href={val.html_url}
                        target='_blank'
                        className='bg-[#242b66] p-3 rounded-full cursor-pointer w-28'
                      >
                        <p className='text-[#9da5d1]'>Ver código</p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
              
            })
        }
    </div>
  )
}
