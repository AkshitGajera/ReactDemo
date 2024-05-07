import React from 'react'

function ToDoinput() {
    return <>
        <div class="container text-center">

            <div class="row myRow">
                <div class="col-6"><input type="text" placeholder='Enter the Text' ></input></div>
                <div class="col-2"><input type="date" ></input></div>
                <div class="col-2"><button type="button" class="btn btn-primary myButton">Add</button></div><br></br>
            </div>
        </div>
    </>
}

export default ToDoinput
