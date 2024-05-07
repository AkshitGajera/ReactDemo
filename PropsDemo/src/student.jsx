import React from 'react'
import PropTypes from 'prop-types'
function Student(props) {
    return (
        <>
            <p>Name:{props.Name}</p>
            <p>Age:{props.age}</p>
            <p>isStudent:{props.isStudent ? " yes" : " No"}</p>
        </>
    )
}
Student.PropTypes = {
    Name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    Name:"Guest",
    age:21,
    isStudent:false,
}
export default Student
