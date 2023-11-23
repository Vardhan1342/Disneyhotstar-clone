import React ,{useContext}from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/CreateContext';
import styled from "styled-components";

const Originals = () => {
  let OrginalsContext=useContext(Context)
const {Orginals}=OrginalsContext
    return (<>
    <Content>
    <h4>Originals</h4>
    <Container>
    { Orginals &&  Orginals.map((recom,index)=> (
      <Wrap key={index}>
           <Link to={`/details/`+ recom.id}>
            <img src={recom.cardImg}
             alt={recom.title} /> 
          </Link>
        </Wrap>
    ))}
       

    </Container>
    </Content>
    </>
    );
}

const Content=styled.div`
font-weight:600;
letter-spacing:2px;
`

const Container = styled.div`
margin-top: 40px;
display:grid;
gap:25px;
grid-template-columns: repeat(4,minmax(0,1fr));


@media (max-width:768px){
grid-template-columns:repeat(2,minmax(0,1fr)) ;
    
}

   
`
const Wrap=styled.div`
   margin:10px 0 50px;
   cursor:pointer;
  position:relative;
  overflow:hidden;
  border:2px solid rgba(249,249,249,0.1);
  border-radius:10px;
  transition:all 250ms ;
  box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  


  img{
    position:relative;
    display:block;
    width:100%;
    transition: opacity 500ms ease-in-out 0s;
  }

  &:hover{
    transform:scale(1.05);
  border:1px solid rgba(249,249,249,0.8);

  }

`

export default Originals;
