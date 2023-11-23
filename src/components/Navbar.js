import React, { useContext, useEffect } from 'react';
import styled from "styled-components"
import auth, { provider } from '../firebase-config';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import Context from '../context/CreateContext';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const state = useContext(Context)
    const { Email, Name, setting, MovieSetting } = state;
    let CurrentUser = "";
    let navigate = useNavigate();
    const handleonClick = () => {
        signInWithPopup(auth, provider)
            .then((user) => {
                CurrentUser = user.user.photoURL

                setting(user.user.email, user.user.displayName)
                localStorage.setItem("token", user.user.accessToken)
                navigate("/home")
            })
            .catch(err => console.log(err.message))

    }

    const handleLogout = async () => {
        await signOut(auth)
        localStorage.removeItem("token");
        navigate("/")
    }





    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {

                navigate("/home")
            }
        })
    }, [])

    return (
        <Nav>
            <Logo><img src="/images/logo.svg" alt="disney" /></Logo>
            {localStorage.getItem("token") ?
                <>
                    <Navmenu>
                        <Link to="/home">
                            <img src="/images/home-icon.svg" alt="Home" />
                            <span>HOME</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/search-icon.svg" alt="Home" />
                            <span>SEARCH</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/watchlist-icon.svg" alt="Home" />
                            <span>WATCHLIST</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/original-icon.svg" alt="Home" />
                            <span>ORIGINAlS</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/movie-icon.svg" alt="Home" />
                            <span>MOVIES</span>
                        </Link>
                        <Link to="/home">
                            <img src="/images/series-icon.svg" alt="Home" />
                            <span>SERIES</span>
                        </Link>

                    </Navmenu>
                    

                        <Account>
                            <img src={CurrentUser ? CurrentUser : "/images/randomimage.webp"} alt="user" />
                       
                            <Logout> <button onClick={handleLogout}>LOGOUT</button></Logout>
                           
                            </Account>

                </>


                : <Login> <button onClick={handleonClick}>LOGIN</button></Login>}



        </Nav>
    );
}
const Nav = styled.nav`
position:fixed;
top:0;
right:0;
left:0;
height:5em;
padding:0 33px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
letter-spacing:3px;
z-index:9999999999999999999999999;
`
const Logo = styled.a`
width:90px;
max-heigth:70px;
padding:0;
display:inline-block;
img{
    display:block;
}
`
const Navmenu = styled.div`
cursor:pointer;
display:flex;
position:relative;
align-items:center;
justify-content:flex-end;
margin-right:auto;
margin-left:8.3rem;
margin-top:3px;
@media (max-width:1105px){
    display:none
}
a{
    display:flex;
    color:white;
}

img{
    max-height:22px;
    padding:0 15px;
    margin-left:1em;
}
span::before{
    transition: 300ms;
    height: 5px;
    content: "";
    position: absolute;
    background-color: white;
    width: 0%;
    border-radius:4px;
    bottom: -6px;
}
span:hover::before{
    
    width:10%;
    
}

`

const Login = styled.div`
button{
    line-height:1.5;
    background-color:rgba(0,0,0,0.6);
    letter-spacing:2px;
    color:white;
    border:1px solid #f9f9f9;
    border-radius:4px;
    padding:8px 10px
    }
button:hover{
    background-color:white;
    color:black;
    
}
`
const Logout=styled(Login)`
background-color:black;

position:absolute;
right:11px;
top:80px;
opacity:0;

`
const Account=styled.div`

img{
    height:60px;
    border-radius:50%;
}
&:hover{
   border-radius:8px;
   ${Logout}{
    opacity:1;
    transition:300ms
   }
}
 
`

export default Navbar;
