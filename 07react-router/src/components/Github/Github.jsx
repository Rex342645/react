import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Rex342645').then(responce=>responce.json()).then(
    //         data=>
    //         {console.log(data)
    //         setData(data)
    //     })
    // },[])

    const data= useLoaderData()
  return (
    <div>
      github followers:{data.followers}
    </div>
  )
}

export default Github
export const gitHubInfoLoader= async()=>{
        
           const response = await fetch('https://api.github.com/users/Rex342645')
          return(response.json())
}