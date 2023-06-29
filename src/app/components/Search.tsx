
import { BsSearch } from 'react-icons/bs'
import React, {useState, useEffect, KeyboardEvent} from 'react'


type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}
export const Search = ({loadUser} : SearchProps) => {
       const [userName, setuserName] = useState("matheusbattisti"); 

       const handlerKeyDown = (e: KeyboardEvent) => {
                    if (e.key === "Enter") {
                        loadUser(userName);
                    }
       }

  return (
    <div
    className='text-white '
    >
        <h2
        className='text-3xl mb-5 font-bold	'
        >Busque por usuário a abaixo:</h2>
        <p
            className='text-[#9da5d1] mb-5 text-2xl'
        >Conheça os seus melhores repositórios</p>

        <div
        className='flex gap-[0.5rem] justify-center align-center'
        >
            <input 
            className=' p-[0.6rem] border-0 rounded-full text-[#2b3566]'
            type="text"
            placeholder='Digite o nome do usuário'
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
            onKeyDown={handlerKeyDown}
             />
             <button
            className=' p-[0.9rem] border-0 rounded-full  bg-[#0e1129] cursor-pointer'
             onClick={() => loadUser(userName)}
             >
             <BsSearch/>
             </button>

        </div>
    </div>

  )
}
