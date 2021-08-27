import React, { useEffect, useState} from 'react';
import ProfileView from './profile';
import './profile.css';

function UserRequest({login}){

    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch(`https://api.github.com/users/${login}`)
        .then((response) => response.json())
        .then(setUser);
    });

    if(user){
        return( <ProfileView user={user}/> );
    }

    return <div>No Response</div>;
}
export default UserRequest;