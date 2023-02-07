import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container=styled.div`
    
`
const Wrapper=styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px", flexDirection:"column"})}
`
const ImgContainer=styled.div`
    flex: 1;
`
const Image=styled.img`
    width:100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height:"40vh"})}
`
const InfoContainer=styled.div`
    flex: 1;
    padding:0px 50px;
    ${mobile({padding:"10px"})}
`
const Title=styled.h1`
    font-weight: 200;
`
const Desc=styled.p`
    margin:20px 0px;

`
const Price =styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer=styled.div`
    width:50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    ${mobile({width:"100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width:20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin:0px 5px;
    cursor:pointer;
`
const AddContainer= styled.div`
    width: 50%;
    display: flex;
    align-content: center;
    justify-content: space-between;
    ${mobile({width:"100%"})}
`
const AmountContainer =styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount=styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0px 5px;
`
const Button = styled.button`
padding:15px;
border:1px solid teal;
background-color: #fff;
cursor:pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`


const Product=()=>{
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImgContainer><Image src="https://res.cloudinary.com/dhxpfw6in/image/upload/v1664525622/anomaly-WWesmHEgXDs-unsplash-removebg-preview_lhdd6l.png"></Image></ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rerum quisquam obcaecati, odio eligendi cumque iste autem impedit illo non pariatur qui quo doloremque maiores recusandae repellat laborum corrupti culpa!</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>
                                Color
                            </FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="teal"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="grey"/>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                                <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product