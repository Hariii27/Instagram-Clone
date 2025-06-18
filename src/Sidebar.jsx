import React from 'react'
import {useNavigate} from 'react-router-dom'



function Sidebar() {


  const navigate = useNavigate();
  return (
    <div className='m-3 position-fixed'>
     <div className='d-flex flex-column gap-3'>
       <img className="logo-txt" src="src\assets\instagram-text.png" alt="" />
       <div><i className="bi bi-house-door"></i>Home</div>
       <div><i className="bi bi-search"></i>Search</div>
       <div><i className="bi bi-compass"></i>Explore</div>
       <div><i className="bi bi-play-btn"></i>Reels</div>
       <div><i className="bi bi-chat-dots"></i>Messages</div>
       <div><i className="bi bi-heart"></i>Notification</div>
       <div><i className="bi bi-plus-square"></i>Create</div>
       <div onClick={()=>navigate('/Profile')}><i className="bi bi-person-circle"></i>Profile</div>
     </div>
     <div className='position-fixed bottom-0 d-flex flex-column  gap-3 mb-4'>
        <div><i className="bi bi-threads"></i>Threads</div>
        <div><i className="bi bi-list"></i>More</div>
     </div>
    </div>
    
  )
}

export default Sidebar








/*Command : npx json-server --watch data/dummyData.json --port 3000 --static ./data
*/

  
 
 
 