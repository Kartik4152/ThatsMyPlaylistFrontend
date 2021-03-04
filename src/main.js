import React,{useState,useEffect} from 'react';
import Match from './matchInfo';
import './main.css'
const Main=()=>{
    const [playlistUrl,setPlaylistUrl]=useState('');
    const handleChange=(e)=>{
        setPlaylistUrl(e.target.value);
    };
    const [isLoading,setIsLoading]=useState(false);
    const [matchData,setMatchData]=useState([]);
    const dostuff=async(e)=>{
        if(e.keyCode===13)
        {
            let playlistId=playlistUrl.split('/');
            playlistId=playlistId[playlistId.length-1];
            playlistId=playlistId.split('?')[0];
            setPlaylistUrl('');
            setIsLoading(true);
            const res=await fetch('https://thatsmyplaylist.herokuapp.com/',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({playlistId,minMatch:30})
            });
            if(!res.ok)
            {
                alert(`Error : ${res.status}`);
            }
            else
            {
                let data=await res.json();
                data.sort((a,b)=>{
                    // weighted average ( user matching )
                    // let wa=0;
                    // let wb=0;
                    // a.matches.forEach((ele)=>wa+=ele.songmatchpercentage+ele.artistmatchpercentage);
                    // b.matches.forEach((ele)=>wb+=ele.songmatchpercentage+ele.artistmatchpercentage);
                    // wa/=a.matches.length;
                    // wb/=b.matches.length;
                    // return wb-wa;
                    
                    // highest matching ( playlist matching )
                    let ma=0;
                    let mb=0;
                    a.matches.forEach((ele)=>ma=Math.max(ma,ele.songmatchpercentage+ele.artistmatchpercentage));
                    b.matches.forEach((ele)=>mb=Math.max(mb,ele.songmatchpercentage+ele.artistmatchpercentage));
                    return mb-ma;
                })
                for(let i=0;i<data.length;++i)
                {
                    data[i].matches.sort((a,b)=>{
                        return (b.songmatchpercentage+b.artistmatchpercentage)-(a.songmatchpercentage+a.artistmatchpercentage);
                    });
                }
                setMatchData(data);
                
            }
            setIsLoading(false);
        }
    };
    useEffect(()=>{
        const input=document.querySelector('#playlist');
        input.addEventListener('keyup',dostuff);
        return ()=>input.removeEventListener('keyup',dostuff);
    });
    return(
        <div className="container">
            <h1 id='heading-text'>Discover music like never before.</h1>
            <input type="text" name="playlist" id="playlist" placeholder={isLoading?'Loading...':'Enter Playlist URL'} value={playlistUrl} onChange={handleChange}/>
            {matchData.map((obj)=>{
                return (
                    <Match photo={obj.userphoto} name={obj.username} id={obj.userid} matches={obj.matches} key={obj.userid}></Match>
                )
            })}
        </div>
    );
}
export default Main;