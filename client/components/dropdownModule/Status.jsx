import React from 'react'

const Status = () =>{
    return (
    <React.Fragment>
        <h2>Status Component</h2>
    <span class="dropdown">
   <select name="STATUS">
    <option value="Not Complete">Not Complete</option>
    <option value="In Progress">In Progress</option>
    <option value="Review">Under Review</option>
    <option value="Complete">Complete</option>
    </select>
    </span>
    </React.Fragment>
    )
}

export default Status