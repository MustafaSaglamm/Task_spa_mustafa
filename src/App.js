import React, { useState } from "react";
import './App.css';
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";



function App() {
 const [activeUserId, setActiveUserId] = useState(null);
  
  return (
   <>
  <div className="mytask m-10 flex ">


    <div className="List" >
      <UserList setActiveUserId={setActiveUserId} />
    </div>

    { activeUserId && ( <div className="udetail">
    <UserDetail activeUserId={activeUserId} />
    </div>) }

  </div>


   </>
  );
}

export default App;
