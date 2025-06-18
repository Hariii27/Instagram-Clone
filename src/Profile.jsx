import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

function Profile() {

const[profile,setprofile] = useState(null);

const[followers,setfollowers] = useState([]);

const[UnFollowed,setunfollowed] = useState(null);

useEffect(()=>{
axios.get("http://localhost:3000/Profile")
.then( Data => Data.json)
.then(Data => setprofile(Data.Data))
.catch(err => console.log(err))

axios.get("http://localhost:3000/Followers")
.then( Data => Data.json)
.then(Data => setfollowers(Data.Data))
.catch(err => console.log(err))

},[UnFollowed])



function HandleOnChange(e){
    setprofile(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}

const HandleUpdate = async ()=> {
    axios.put("http://localhost:3000/Profile",profile)
    .then(console.log("updated"))
    .catch(err=> console.log(err))   
}

const handleunfollow = async (id)=> {
    axios.delete(`http://localhost:3000/Followers/${id}`)
    .then(alert("UnFollowed"))
    .then(setunfollowed(!UnFollowed))
    .catch(err => console.log(err))
}


  return (
    <div className='m-5'>
        {profile ? (
            <div>
                <img src={profile.profilePic} alt="ProfilePic"  className=" profile rounded-circle"/>
                <h5>{Profile.username}</h5>
                
                <input type="text"
                       value={profile.username}
                       name="username"
                       className='form-control my-4'
                       onChange={HandleOnChange}
                 />
                <input type="text"
                       name="profilePic"
                       value={profile.profilePic}
                       className='form-control'
                       onChange={HandleOnChange}
                />
                <button className='btn btn-primary my-4' onClick={HandleUpdate}
                >Update</button>



                </div>
        )
        :
        (
            <div>
            Loading
             </div>)}
      {followers.length > 0 ?(
         followers.map(follower => (
            <div key={follower.id} className='d-flex my-2'>
                   {follower.username}
                   <button className='btn btn-secondary ms-auto ' onClick={()=> {handleunfollow(follower.id)}}>UnFollow</button>
            </div>
         ))


      ):
      
      
      (
        <div>Loadinggg followers
            </div>
      )}


    </div>
  )
}

export default Profile