import React from 'react';
import './noMatchModal.css'

const NoMatchModal=(props)=>{
    return(
        <div className="noMatchModalContainer">
            <div className="noMatchModalText">It appears that no users matched for your specified playlist, please try again later or with another playlist.</div>
            <div className="noMatchModalText">Note : This App is still in pre-alpha phase, so the number of users is limited. Please try again later as a new user's playlist might match with you.</div>
            <div className="noMatchModalButton" onClick={()=>props.isVisible(false)}>Close</div>
        </div>
    )
}
export default NoMatchModal;