import React from 'react';

function Usercard(props) {
    let user = props.user;
    return (
        <div className='usercard'>
            
            {user.length == 0 ? (
                <p>Information not available</p>
            ) :
            (
                <>
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <p>Address : {user.address}</p>
                </>
                
           )}
        </div>
    );
}

export default Usercard;
