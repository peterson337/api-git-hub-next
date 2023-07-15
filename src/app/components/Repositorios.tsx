'use client'
import React, {useState, useEffect} from 'react'
import { usePathname  } from 'next/navigation'
import Link from 'next/link';

import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai';
import { FaBook } from 'react-icons/fa';


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

        const teste = pathname.slice(1);

        const tag = '</>';

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
                    <h1
                    className='text-center text-white md:text-4xl text-3xl mt-3 mb-[1rem] font-bold'
                    >
                      GitHub finder
                    </h1>

                   {repositorio &&
                      <div
                      className='flex flex-row justify-center'
                      >
                    <p
                   className='flex flex-row flex-wrap md:text-[20px]'
                   >
                     Explore os repositórios do usuário: <p
                                                          className='ml-1 font-bold'
                                                          >{teste}
                                                          </p>
                      </p>
                      </div>

                   }
        {
            repositorio.map((val) => {
              return (
                <div key={val.id} className='bg-[#242b66] p-8 md:mx-96
                                               rounded-lg mx-auto md:w-[540px]'>
                  <div className='bg-[#0e1129] md:p-10 p-5 md:w-[470px] rounded-lg border-2 flex 
                                    flex-col text-center space-y-3 justify-center'>
                    <p>{val.name}</p>
              
                    {/* <p>{val.created_at}</p> */}
              
                    {
                    val.language ? (
                      <div
                      className='flex flex-row justify-center'
                      >
                        <p
                        className='font-bold mr-2 text-[#9da5d1]'
                        >{tag}</p>
                        <p
                        className='font-bold mr-2 text-white'
                        >{val.language}</p>
                      </div>
                    ) : (
                      <p>Nenhuma linguagem encontrada</p>
                    )}
              
                    <div className='flex flex-row space-x-3 justify-center items-center'>
                      <div className='flex flex-row'>
                        
                        
                      <div
                        className='bg-[#42f59b] p-1 w-10 h-8 text-center'

                        >
                        
                        <AiOutlineStar
                        className='mt-1 ml-2'
                        />

                        </div>

                        <div className='p-2 h-8 w-14 border'>
                          <p
                          className='relative bottom-1'
                          >{val.watchers}
                          </p>
                        </div>
                      </div>

                        <div
                        className='flex flex-row'
                        >
                        <div
                        className='bg-[#42f59b] p-1 w-10 h-8 text-center'
                        >
                        <AiOutlineFork
                        className='mt-1 ml-2'
                        />
                        </div>

                        <div
                        className='p-2 h-8 w-14 border'
                        >
                      <p
                      className='relative bottom-1'
                      >{val.forks}</p>

                        </div>
                        </div>
                   
                    </div>
              
                    <div className='flex justify-center flex-row '> {/* Adicionando a classe 'flex justify-center' */}
                      <Link
                        href={val.html_url}
                        target='_blank'
                        className='bg-[#242b66] p-3 rounded-full 
                                    cursor-pointer md:w-72 w-44 
                                    hover:bg-[#2e3466]'
                      >
                        <p className='text-[#9da5d1] '>
                        <span
                        className='flex flex-row text-center justify-center'
                        >
                          Ver código  <FaBook
                                        className='ml-2 mt-1'
                                      />
                          </span></p>
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
