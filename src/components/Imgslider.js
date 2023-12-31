import React from 'react';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Imgslider = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // pauseOnHover: false,
    };

  return (
    
    <Carousel {...setting}>
        <Wrap>
            <a>
                <img src="/images/slider-badag.jpg" alt="" />
            </a>
            
        </Wrap>
        <Wrap>
            <a>
                <img src="/images/slider-badging.jpg" alt="" />
            </a>
            
        </Wrap><Wrap>
            <a>
                <img src="/images/slider-scale.jpg" alt="" />
            </a>
            
        </Wrap><Wrap>
            <a>
            <img src="/images/slider-scales.jpg" alt="" />

{/*                
                <video autoPlay={true} playsInline={true} loop={true}>
                <source src="/videos/marvel.mp4" type='video/mp4' />
            </video> */}
                
            
            
            </a>
            
        </Wrap>
    </Carousel>




);
  
}


const Carousel = styled(Slider)`
margin-top:14vh;
& >button{
    opacity:0;
    height:100%;
    width:5vw;
    z-index:1;

    &:hover{
        opacity:1;
        trasition:opacity 0.2s ease 0s;


        
    }
}

ul li button{
  &:before{
    font-size:10px;
    color:rgb(150,158,171);
  }
}
.slick-dots li.slick-active button:before{
    color:white;
}

.slick-list{
    overflow:initial;
}
.slick-prev{
    left:-75px;
}
.slick-next{
    right:-75px;
}


`

const Wrap=styled.div`
  border-radius:4px;
  cursor:pointer;
  a{
    border-radius:4px;
    box-shadow:rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     cursor:pointer;
     display:block;
     position:relative;
     padding:4px;
     img{
        width:100%;
        height:100%
     }
     video{
        width:100%;
         height:100%
        }
    

     &:hover{
        z-index:99999;
        border:1px solid rgba(249,249,249,1);
        transition: all 300ms ease;
        transform:scale(1.01);

     }
     
  }

`

export default Imgslider;
