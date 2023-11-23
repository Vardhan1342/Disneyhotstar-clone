import React from 'react';
import styled from "styled-components"
const LoginAuth = () => {
  return (
    <div>
      <Container>
        
     
        <Login>
        
       
        <input type="tel" placeholder="Enter your Number"/>
        <button>GET OTP</button>
        <hr></hr>
        <h5>or</h5>
        </Login>

        <Auth>
         <span><p></p>G</span>
         <span>F</span>
         <span>T</span>
         <span>L</span>
        </Auth>
      </Container>
    </div>
  );
}

const Container=styled.div`
border:2px solid rgba(249,249,249,0.3);
position:relative;
border-radius:4px;
box-shadow:;
top:100px;
z-index:9999999;
display:flex;
align-items:center;
width: 400px;
margin:0px auto;
flex-direction:column;
padding:40px;
`
const Login=styled.div`
display:flex;
flex-direction:column;
margin-top:50px;

input{
    margin-top:20px;
    padding:10px;

}
h5{
    position: relative;
    left: 100px;
}

button{
    margin-top:40px;
    line-height:1.5;
    background-color:rgba(0,0,0,0.6);
    letter-spacing:2px;
    color:white;
    border:1px solid #f9f9f9;
    border-radius:4px;
    padding:8px 10px;
    }
    button:hover{
        background-color:white;
        color:black;
        
    }

`

const Auth=styled.div`
margin:20px 0px;
span{
    margin:0 10px;
}


`



export default LoginAuth;
