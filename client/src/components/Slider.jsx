import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { sliderItem } from '../data'
import {mobile} from "../responsive"

const Container = styled.div`
width:100%;
height:100%;
display:flex;
position:relative;
overflow:hidden;
${mobile({display:"none"})}
`
const Arrow = styled.div`
width:50px;
height:50px;
background-color: #fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:space-evenly;
position:absolute;
top:0;
bottom:0;
left: ${props=>props.direction === "left" && "10px"};
right: ${props=>props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper = styled.div`
height:100%;
display:flex;
transition: all 1.5s ease;
transform:translateX(${props=>props.slideIndex* -100}vw);
`
const Slide= styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg};
`
const ImageContainer= styled.div`
height:100%;
flex:1;
`
const Image= styled.img`
height:80%;
`
const InfoContainer= styled.div`
flex:1;
padding:50px;
`
const Title= styled.h1`
font-size:70px;
`
const Button= styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`
const Desc=styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight:500;
letter-spacing:3px;
`

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState()
    const handleClick = (direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0? slideIndex-1:2)
        }
        else{
            setSlideIndex(slideIndex<2? slideIndex+1 :0)
        }
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                sliderItem.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src={item.img}></Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>
                            {item.title}
                        </Title>
                        <Desc>
                           {item.desc}
                        </Desc>
                        <Link to="/products" style={{color:"#000", textDecoration:"none"}} >
                        <Button>
                            Shop Now
                        </Button>
                        </Link>
                    </InfoContainer>
                </Slide>
                ))
            }
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider