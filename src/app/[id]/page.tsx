import React from 'react'
import {Repositorios} from "../components/Repositorios";
import Link from 'next/link';

export default function Repos() {

  return(
    <div
    className=' text-white'
    >
       <Link href={`/`}>
                Voltar para o consultor de repositórios.
          </Link>

      <Repositorios/>
    </div>
  )
}
