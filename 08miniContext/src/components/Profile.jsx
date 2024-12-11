import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const {user}=useContext(UserContext)
    if(!user)
    {
        return (<h1>Please logIn</h1>)
    }
    return(
        <div>
          <h1>Welcome  {user.userName}</h1> 
        </div>
    )
}

export default Profile
