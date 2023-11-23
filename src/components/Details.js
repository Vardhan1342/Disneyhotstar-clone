import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { database } from "../firebase-config";
import {  doc, getDoc } from 'firebase/firestore';



const Details = () => {
    const {id}=useParams();
    const [detailData,setDetailData]=useState({})
  
useEffect(()=>{
  let docref=doc(database,"movies",id);
  getDoc(docref).then(val=>{
    setDetailData(val.data())
  })


},[id])
  return (
    <Container>
        <Background>
            <img src={detailData.backgroundImg} alt="" />
        </Background>
        <ImageTitle>
        <img src={detailData.titleImg} alt="" />

        </ImageTitle>
    <Content>
        <Controls>
            <Player>
                <img src="/images/play-icon-black.png" alt="" />
                <span>Play</span>
            </Player>
            <Trailer>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </Trailer>
            <Addlist>
                <span />
                <span />
            </Addlist>
            <GroupWatch>
                <div>
                    <img src="/images/group.png" alt="" />
                </div>
                </GroupWatch>
        </Controls>
        <SubTitle>
            {detailData.subTitle}
        </SubTitle>
        <Description>
        {detailData.description}
        </Description>

    </Content>
    </Container>
  );
}
const Container = styled.main`
    position: relative;
    top:4.9em;
    min-height:98vh;
    overflow-x:hidden;
    display:hidden;
    display:block;
    
`
const Background=styled.div`
left:0px;
opacity:0.8;
position:fixed;
right:0px;
top:0px;
z-index:-1;
img{
    opacity:0.8;
    width:100vw;
    height:100vh;
    @media (max-witdh:768px){
        width:iniial;
    }
}

`
const ImageTitle=styled.div`
display:flex;
position:relative;
justify-content:flex-start;
align-items:flex-end;
-webkit-box-pack:start;
margin-left: 6vw;
min-height:170px;
padding-bottom:24px;
width:100%;
height:50vh;

@media (max-width:768px){
    height:30vh;
}



img{
    max-width:600px;
    min-width:200px;
    width:39vw;
}

`

const Content=styled.div`
max-width:874px;
`
const Controls=styled.div`
align-items:center;
display:flex;
flex-flow:row nowrap;
margin:24px 6vw;
min-height:56px
`
const Player=styled.button`
padding: 0px 18px;
height: 48px;
display: flex;
justify-content: center;
align-items: center;
letter-spacing: 1.8px;
font-size: 22px;
border: none;
border-radius: 4px;
color: rgb(0,0,0);
background-color: rgb(249,249,249);
text-transform: uppercase;
// font-family: 'slick';
cursor:pointer;
margin:0 1vw;

&:hover{
    background:rgb(198,198,198);
}

@media (max-width:768px){
    height:8vh;
    width:;
    font-size:1rem;
    padding:0px 12px;
    margin:0px 10px 0px 0px;
    img{
        width:25px;
    }
}


`
const Trailer=styled(Player)`
background:rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color:rgba(249,249,249)
`
const Addlist=styled.div`
margin-right:16px;
height:44px;
width:44px;
display:flex;
justify-content:center:
align-items:center;
background-color:rgba(0,0,0,0.6);
border-radius:50%;
border:2px solid white;
cursor:pointer;
span {
    background-color:rgb(249,249,249);
    
}
`
const GroupWatch=styled.div`
heigth:45px;
width:45px;
cursor:pointer;
border-radius:50%;
display:flex;
justify-content:center;
align-items:center;
background:white;
div{
    height:40px;
    width:40px;
    background:rgb(0,0,0);
    border-radius:50%;

}
img{
    width:100%;
}
`
const SubTitle=styled.div`
margin-left:6vw;
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
@media (maw-width:768px){
  font-size:12px;
}

`

const Description=styled.div`
margin-left:6vw;
line-height:1.4;
font-size:20px;
padding:16px 0px;
color:rgb(249,249,249);
@media (maw-width:768px){
    font-size:14px;
  }

`
export default Details;
