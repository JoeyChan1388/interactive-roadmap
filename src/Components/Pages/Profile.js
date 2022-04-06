import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../Firebase/AuthContext';
import './Profile.css'
import { useParams } from 'react-router-dom';

export const Profile = (props) => {
    const { uid } = useParams();
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');

    const { currentUser } = useAuth();

    console.log(uid);

    axios.get('http://localhost:3001/user/get', {
        params: {
            id: uid
        }
    }).then((response) => {
        console.log(response.data[0]);
        setUserName(response.data[0].user_displayname);
        setFirstName(response.data[0].user_first_name);
        setLastName(response.data[0].user_last_name);
        setDescription(response.data[0].user_description);
    });

    return (
        <div>
            <div className="profile-screen">
                <h1 className="profile-header"> {userName} </h1>
                <h2 className="profile-header-2"> {firstName} {lastName} </h2>
                <h2 className="profile-header-2"> {description} </h2>
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

                {/* If signed in AND current user is the same as the user being viewed, show edit button */}
                {
                    currentUser && currentUser.uid === uid && 
                    <div className="action-row">
                        <button className="btn-primary"> Change Account Details </button>
                    </div>
                }
                
            </div>

        </div>
    )
}
