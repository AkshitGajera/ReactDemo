import React from 'react'

function UserList({ userDetails }) {
    const { Name, Email, Address } = userDetails;
    return (
        <>
            {userDetails.map((user) => (
                <div className='Card'>
                    {user.Name ? (
                        <p><b>Name :&nbsp;</b>{user.Name}</p>
                    ) : (
                        <p><b>Name :&nbsp;</b>Not Found</p>
                    )}

                    {user.Email ? (
                        <p><b>Email :&nbsp;</b>{user.Email}</p>
                    ) : (
                        <p><b>Email :&nbsp;</b>Not Found</p>
                    )}

                    {user.Address ? (
                        <p><b>Address :&nbsp;</b>{user.Address}</p>
                    ) : (
                        <p><b>Address :&nbsp;</b>Not Found</p>
                    )}
                </div>

            ))}
        </>
    )
}

export default UserList
