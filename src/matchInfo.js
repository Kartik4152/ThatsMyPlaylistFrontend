import React from 'react';
import './matchInfo.css';

const Match=(props)=>{
    return(
        <div className='UserContainer'>
            <div className='UserLeft'>
                {
                    props.matches.map((cur,index)=>{
                        return (
                        <div className='PlaylistMatch' key={cur.playlistId}>
                            <div className='PlaylistMatchText'>{index+1}) Song Match : {cur.songmatchpercentage.toFixed(2)}%</div>
                            <div className='PlaylistMatchText'>Artist Match : {cur.artistmatchpercentage.toFixed(2)}%</div>
                            <a href={`https://open.spotify.com/playlist/${cur.playlistId}`} target="_blank" rel="noreferrer"><div className='UserButton'>Open</div></a>
                        </div>
                        )
                    })
                }
            </div>
            <div className='UserRight'>
                <img className='UserPhoto' src={props.photo!=='default'?props.photo:'https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg'} alt="userphoto"></img>
                <a href={`https://open.spotify.com/user/${props.id}`}><div className="UserButton">Profile</div></a>
            </div>
        </div>
    )
}
export default Match;