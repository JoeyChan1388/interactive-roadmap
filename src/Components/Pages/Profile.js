import React from 'react'
import './Profile.css'

export const Profile = (props) => {
  return (
    <div>
        <div className="profile-screen">
            <h1 className="profile-header"> Placeholder User </h1>
            <h2 className="profile-header-2"> Placeholder Description </h2>
            <br></br>
            <h1 className="profile-header"> Progression </h1>

            <div className="progression-row">
                <h2 className="profile-header-2"> HTML </h2>
                <div className="progress-bar-back" >
                    <div className="progress-bar-red"> </div>
                </div>
            </div>

            <div className="progression-row">
                <h2 className="profile-header-2"> CSS </h2>
                <div className="progress-bar-back" >
                <div className="progress-bar-blue"> </div>
                </div>
            </div>

            <div className="progression-row">
                <h2 className="profile-header-2"> C-Sharp </h2>
                <div className="progress-bar-back" >
                <div className="progress-bar-yellow"> </div>
                </div>
            </div>

            <div className="progression-row">
                <h2 className="profile-header-2"> JS </h2>
                <div className="progress-bar-back" >
                <div className="progress-bar-green"> </div>
                </div>
            </div>
            <div className="action-row">
            <button className="btn-primary"> Add Friend </button>
            <button className="btn-outline"> <strong> Message </strong>  </button>
            </div>
        </div>
        
    </div>
  )
}
