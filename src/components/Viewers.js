import React from 'react';
import styled from "styled-components";
const Viewers = () => {
    return (<Container>
        <Wrap>
            <img src="/images/viewers-disney.png" alt="" />
            <video autoPlay={true} playsInline={true} loop={true}>
                <source src="/videos/disney.mp4" type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" alt="" />
            <video autoPlay={true} playsInline={true} loop={true}>
                <source src="/videos/marvel.mp4" type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" alt="" />
            <video autoPlay={true} playsInline={true} loop={true}>
                <source src="/videos/national-geographic.mp4" type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" alt="" />
            <video autoPlay={true} playsInline={true} loop={true}>
                <source src="/videos/star-wars.mp4" type='video/mp4' />
            </video>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" alt="" />
            <video autoPlay={true} playsInline={true} loop={true}>
                <source src="/videos/pixar.mp4" type='video/mp4' />
            </video>
        </Wrap>

    </Container>
    );
}

const Container = styled.div`
margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width:768px){
        flex-direction:column;
    }
`
const Wrap = styled.div`
position:relative;
border:2px solid rgba(249,249,249,0.1);
box-sizing: border-box;
border-radius:10px;
box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
margin: 84px 0px;
border-collapse: separate;
transition:all 250ms ;

img{
    position:relative;
    width:15vw;
    z-index:99999;
    @media (max-width:768px){
        width:100%;
    }
}

&:hover{
    
    border:2px solid rgba(249,249,249,0.8);
    transform:scale(1.05);
    video{
        width:100%;
       
        
    }
   
 }
 video{
    position:absolute;
    left:0;
    width:0;
    border-radius:10px;
 }

`
export default Viewers;
