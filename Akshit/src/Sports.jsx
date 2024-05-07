import React from 'react'

function Sports() {
    let Sports1 = "hockey";
    let Sports2 = "Javlin Throw";
    let Sports3 = "Music";
    
    return (
        <div>
            <ul>
                <li>Cricket</li>
                <li>Kabbadi</li>
                <li>Badminton</li>
                <li>Vollyball</li>
                <li>{Sports1}</li>
                <li>{Sports2}</li>
                <li>{Sports3}</li>
            </ul>
        </div>
    );
}
export default Sports;
