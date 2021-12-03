import React from 'react';
import './UsersList.css'

interface UsersList {
    users: {login: {uuid:string}, name: {title:string, last:string}, email:string, picture: {large:string}}[];
}

const UsersList = (props:UsersList) => {
    
    const users = props.users.map(user => (
        <div key={user.login.uuid}>
            <img src={user.picture.large} alt="" />
            <h4>{`${user.name.title} ${user.name.last}`}</h4>
            <p>{user.email}</p>
        </div>
    ))
    return (  
    <ul className='users'>
        {users}
    </ul>
   );
}

export default UsersList