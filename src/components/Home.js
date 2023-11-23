import React, { useContext, useEffect, } from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Imgslider from './Imgslider';
import Viewers from './Viewers';
import Recommend from './Recommend';
import NewDisney from './NewDisney';
import Trending from './Trending';
import Context from '../context/CreateContext';
import {  useNavigate } from 'react-router-dom';
import Originals from './Originals';

const Home = () => {
  
  const navigate=useNavigate()

    
let movie=useContext(Context)
const {MovieSetting,Email}=movie;

//     useEffect(()=>{
//       return ()=>{
      
//           MovieSetting();
//  }
//     },[Email]);
useEffect(() => {
  return () => {
    if(localStorage.getItem("token")){
      MovieSetting();
    }
    else{
      
      navigate("/home")
    }
    
  };
}, []);




    return (
   <div>
    <Container>
    <Imgslider />
    <Viewers />
    <Recommend />
    <NewDisney />
    <Trending />
    <Originals />
    </Container>
   </div>
    );
}
const Container = styled.main`
    position: relative;
    
    min-height:100vh;
    overflow-x:hidden;
    display:block;
    padding: 1vh 3.5vw;
    

    &:after
    {
  background:url("/images/home-background.png") center center /cover no-repeat fixed;
  content:"";
  position:absolute;
  inset:0px;
  opacity:1;
  z-index:-1
    }
`

export default Home;
