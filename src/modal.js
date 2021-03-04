import React from 'react'
import './modal.css'
const modal=(props)=>{
return(
    <div className="modalContainer">
        <div className="modalText">By agreeing to use this site, you provide your consent to save your playlistURL for matching with other users.</div>
        <div className="modalText">For data deletion please contact at gaming4152@gmail.com</div>
        <div className="modalButton" onClick={()=>props.visible(false)}>Close</div>
    </div>
)
}

export default modal;