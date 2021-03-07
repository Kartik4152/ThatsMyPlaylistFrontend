import React,{useState} from 'react';
import Main from './main';
import Navbar from './navbar';
import Modal from './modal';

const App=()=>{
const [controls,setControls]=useState({
        songPercentage:15,
        artistPercentage:15
});
const [isVisible,setIsVisible]=useState(true);
return (
    <>
    {isVisible&&<Modal visible={setIsVisible}></Modal>}
    <Navbar controls={controls} setControls={setControls}></Navbar>
    <Main controls={controls}></Main>
    </>
)
};
export default App;