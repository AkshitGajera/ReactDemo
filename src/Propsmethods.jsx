import React from 'react'
import PropTypes from 'prop-types'  // import propTypes compelsory

function Propsmethods(props) {
    return (
        <>
            <p> Name:{props.Name} </p>   
            <p> age:{props.age} </p>
            <p> mess:{props.mess ? "hello" : "Byy"} </p>     
        </>
    )
}

        Propsmethods.propTypes = {
            Name: PropTypes.string,
            age: PropTypes.number,
            mess: PropTypes.bool
        }
        Propsmethods.defaultProps = {
            Name: "Guest",
            age: 20,
            mess:true,
        }

export default Propsmethods 


{/* <Propsmethods  age = {21} mess={true} ></Propsmethods> */}