import React from 'react'
import {Repositorios} from "../components/Repositorios";
import Link from 'next/link';

export default function Repos() {

  return(
    <div
    className=' text-white p-5'
    >
       <Link href={`/`}
       className='bg-[#242b66]  p-3 rounded-lg cursor-pointer hover:bg-[#2e3466]'
       >
        <span
        className='text-[#9da5d1]'
        >
        Voltar 
        </span>
          </Link>

      <Repositorios/>
    </div>
  )
}
