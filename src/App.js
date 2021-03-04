import React,{useState} from 'react';
import Main from './main';
import Navbar from './navbar';
import Modal from './modal';

const App=()=>{
const [isVisible,setIsVisible]=useState(true);
return (
    <>
    {isVisible&&<Modal visible={setIsVisible}></Modal>}
    <Navbar></Navbar>
    <Main></Main>
    </>
)
};
export default App;