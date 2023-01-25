import React, { useState, useEffect} from 'react'
import axios from 'axios';


function UserDetail({ activeUserId }) {
const [user, setUser] = useState (null);


useEffect (() => {
axios(`https://reqres.in/api/products/${activeUserId}`)
.then((res) => setUser(res.data))

}, [activeUserId]);

  return (
    <div className='p-5 ml-10  '>
       <h3 className=' mb-3 text-xl'>User Detail</h3>
       <pre className=' w-96'>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

export default UserDetail