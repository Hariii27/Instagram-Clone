import React from 'react'
import Sidebar from './Sidebar'
import Feed from './feed'
import Suggesstions from './Suggesstions'

function App() {
  return (
    <div  className="d-flex vh-100">
        <div className="w-20"><Sidebar/></div>
        <div className="w-50"><Feed/></div>
        <div className="w-30"><Suggesstions/></div>
    </div>
  )
}

export default App

/* connect the internet for the applying the bootstrap */