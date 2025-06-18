import React, { useState, useEffect } from 'react';

function Suggesstions() {

  const [profile, setProfile] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/profile')
      .then((data) => data.json())
      .then(data => setProfile(data))
      .catch(error => {
        console.error('Error fetching profile:', error);
      });

    fetch('http://localhost:3000/Suggestions')
      .then((data) => data.json())
      .then(data => setSuggestions(data))
      .catch(error => {
        console.error('Error fetching suggestions:', error);
      });
  }, []);

  const handlefollow = async(id,username) => {
    axios.post("http://localhost:3000/Followers",{"id":id,"username":username})
    .then(alert('followed'))
    .catch(err => console.log(err))
  
  }

  return (
    <div>
      <div className="suggestions w-75 m-4">
          {profile?
          <div className="d-flex">
            <img className="dp rounded-circle" src={profile.profilePic} alt="" />
            <h5>{profile.username}</h5>
            <small className='ms-auto text-primary'>Switch</small>
          </div>
        :<p>Loading</p>}

        <div className='d-flex'>
          <p>Suggested For You</p>
          <b className='ms-auto'>See All</b>




        </div>
        {suggestions.length > 0 ? (
        <div> 
         {suggestions.map((Suggesstions)=>(
          <div className='my-1' key={Suggesstions.id}>
            <div className="d-flex"> 
              <img className="dp rounded-circle" src={Suggesstions.profilePic} alt="" />
               <h5>{Suggesstions.username}</h5>
               <a className='text-primary ms-auto' onClick={()=> {handlefollow(suggestions.id,suggestions.username)}} >Follow</a>
                </div>
          </div>

      ))}
        </div>
      ):(
        
        <div>
        Loading 
        </div>
      ) }


      </div>
      
    </div>
  );
}

export default Suggesstions;