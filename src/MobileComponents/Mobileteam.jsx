import React from 'react'
import { teamdata } from '../teamdata'
import Teamcard from '../Components/Teamcard'
import './mobile.css'

const Mobileteam = () => {
  return (
    <div className='mobile-teamdiv'>
        <h1>Meet The team</h1>
        <div className='mobteamcards'>
            {teamdata.map((key)=>(
                <Teamcard name= {key.name} role = {key.role} styles={true} imageUrl = {key.imageUrl}/>
            ))}
        </div>
    </div>
  )
}

export default Mobileteam