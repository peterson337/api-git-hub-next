
import { BsSearch } from 'react-icons/bs'
import React, {useState, useEffect} from 'react'


type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}
export const Search = ({loadUser} : SearchProps) => {
       const [userName, setuserName] = useState("peterson337"); 

  return (
    <div
    className='text-white'
    >
        <h2>Busque por usuário a abaixo:</h2>
        <p>Conheça os seus melhores repositórios</p>

        <div>
            <input 
            className='text-black'
            type="text"
            placeholder='Digite o nome do usuário'
            onChange={(e) => setuserName(e.target.value)}
            value={userName}
             />
             <button
             onClick={() => loadUser(userName)}
             >
             <BsSearch/>
             </button>

        </div>
    </div>

  )
}
