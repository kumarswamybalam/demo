import React from 'react';

import './profile.css';
import logo from './user.png';

function ProfileView({user}){

    const contact = () => {
        alert("clicked");
    }

    return(
        <div class="card">
                <img src={user.avatar_url ? user.avatar_url:logo} alt={user.login ? user.login:'user'} style={{width:"100%" , height:"100%"}} />
                <h1>{user.name ? user.name : "Error"}</h1>
                <p>{user.location ? user.location : 'Location not available'}</p>
                <p><button onClick={contact}>Contact</button></p>
        </div>
        
    );
}

export default ProfileView;