import React from 'react'
import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function Stories() {

const navigate = useNavigate();
   
  const[stories,setstories] = useState([]);
      useEffect(()=>
      {
        fetch('http://localhost:3000/Stories')
        .then(data=> data.json)
        .then(data=>setstories.data)
        .catch(err=>console.log(err))
      },[]);

      let tot =0;





  return (
    <div className='story d-flex' >
      <div className='d-none'>
        {tot = stories.length}
      </div>
      {stories.length >0 ?
      (
        stories.map((story)=>(
          <div key={story.id} className='mx-1' onClick={()=>{navigate(`/Stories/${story.id}/${tot}`)}}>
            <div className='gradient-border'>
              <img src={story.profilePic} alt="dp" className='story-dp rounded-circle' />
              </div>
            
            <p className="text-truncate" style={{width:"50px"}} >{story.username}</p>
          </div>
        ))
      ):
      (<p> Loading </p>)
      }

    </div>
  )
}

export default Stories