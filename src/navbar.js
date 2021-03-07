import React,{useRef,useState,useEffect} from 'react';
import './navbar.css'
const Navbar=({controls,setControls})=>{
    const navRef=useRef(null);
    const [isOpen,setIsOpen]=useState(false);
    const animateShit=()=>{
            if(!isOpen)
            {
                navRef.current.style.top="0";
                navRef.current.style.height=`${window.innerHeight}px`;
                setIsOpen(true);
            }
            else
            {
                navRef.current.style.removeProperty('top');
                navRef.current.style.removeProperty('height');
                setIsOpen(false);
            }
    }
    const handleRange=(e)=>{
        setControls((prev)=>{
            return {
                ...prev,
                [e.target.id]:e.target.value,
            }
        })
    }
    useEffect(()=>{
        console.log('useeffect ran');
        const doshit=()=>{
            if(isOpen)
            navRef.current.style.height=`${window.innerHeight}px`;
        };
        window.addEventListener('resize',doshit);
        return ()=>window.removeEventListener('resize',doshit);   
    });
    return(
        <div id="nav" ref={navRef}>
            <div id="controlsContainer">
                <h1>Set Constraints</h1>
                <div id="c1">
                    <label htmlFor="songPercentage">Min SongMatchPercentage: {controls.songPercentage}%</label>
                    <input type="range" name="songPercentage" id="songPercentage" className="slider" step="1" min="0" max="100" value={controls.songPercentage} onInput={handleRange}/>
                </div>
                <div id="c2">
                    <label htmlFor="artistPercentage">Min ArtistMatchPercentage: {controls.artistPercentage}%</label>
                    <input type="range" name="artistPercentage" id="artistPercentage" className="slider" step="1" min="0" max="100" value={controls.artistPercentage} onInput={handleRange}/>
                </div>
            </div>
            <div id="settings" onClick={animateShit}>≡</div>
        </div>
    )
}
export default Navbar;