import React, {useState, useEffect} from 'react'
import {data} from '../data.js';



function UserList({setActiveUserId}) {
    const [search, setSearch] = useState('')
    const [color, setColor] = useState ("white");
    const click = color => {
      setColor(color)
    }

    useEffect (() => {
        document.body.style.backgroundColor = color
      }, [color])


  return (
   <>
    <div className="apilist p-5 sm:w-60 border-2 border-slate-300 rounded-md drop-shadow-md">


    <h1 className=' text-xl text-gray-800'>SPA TASK</h1>
    <h6 className=' text-md mt-10 text-gray-800'>Search ID or Click User</h6>
  <form className= 'border-gray-800'>
    <input className=" mt-2 mb-10 border-2 rounded border-gray-400" id="number" type="number" placeholder='Search id...' onChange={(e) => setSearch(e.target.value)} ></input>
  </form>
  <table>
     <tbody className=' cursor-pointer' >
     {data.filter((item) => {
       return search.toLocaleString() === '' ? item : item.id.toLocaleString().includes(search);
      }).map((item) =>(
        <tr className=' text-gray-900 hover:text-sky-700' key={item.id} onClick={() => setActiveUserId(item.id)}>
         
         <button onClick={() => click(item.color)}>
          <td className=' pr-3'>{item.id}</td>
          <td className='pr-3'>{item.name}</td>
          <td>{item.year}</td>
          </button>
        </tr>
      )
      )}
     </tbody>
  </table>


    </div>
   </>
  )}

export default UserList