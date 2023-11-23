import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function Login() {

    return (


        <Container>

            <Content>

                <CTA>
                    <CTAlogo1 src="/images/cta-logo-one.svg" alt="logo" />
                    <Signup> <Link to="/home">GET ALL THERE</Link></Signup>
                    <Description>
                        Get Premier Access to Raya and The Last Dragon for an additional fee with a Disney+ subcription.As of 03/26/21,the price of Disney+ and The Disney Bundle will increase by $1
                    </Description>
                    <CTAlogo2 src="/images/cta-logo-two.png" alt="logo" />
                </CTA>
                <BgImg /></Content></Container>

    );
}

const Container = styled.section`
overflow:hidden;
display:flex;
flex-direction:column;
text-align:center;
height:100vh;

`
const Content = styled.div`
// margin-bottom:;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%
`
const BgImg = styled.div`
height: 100%;
background-position: top; 
background-size: cover;
background-repeat: no-repeat;
background-image: url(/images/login-background.jpg);
position: absolute;
top: 0; 
left: 0;
right: 0;
z-index: -1;
`

const CTA = styled.div`
max-width:650px;
width:100%;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;

margin-left:auto;
margin-right:auto;

`
const CTAlogo1 = styled.img`
margin-bottom:12px;
width:100%;
display:block;
max-width:650px;
min-height:1px;

`
const Signup = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
padding:16px  0px;
letter-spacing:1.5px;
font-size:1.1rem;
border:1px solid transparent;
border-radius:4px;
a{
    color:white;
 
}
&:hover{
    background-color:#0483ee;
}
`
const Description = styled.p`
color:hsla(0,0%,95.3%,1);
font-size:11px;
margin:0 0 24px;
line-height:1.5;
`
const CTAlogo2 = styled.img`
margin-bottom:8vh;
width:100%;
display:block;
max-width:650px;
min-height:1px;
`
export default Login;
