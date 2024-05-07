import React from 'react'

function Authentication10({status}) {
    return (
        <>
        <div>
            {status === true ? 
            (<><h4>User is not Authenticated</h4><button>Login</button></>)  : 
            (<><h4>User is Authenticated</h4><button>Logout</button></>) 
        }
        </div>
        </>
    )
}

export default Authentication10
