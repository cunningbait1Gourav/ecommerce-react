import { Add, Remove } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div`

`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Wrapper = styled.div`
padding: 20px;
${mobile({padding:"10px"})}
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border:${props=>props.type==="filled" && "none"};
    background-color:${props=>props.type==="filled" ? "black":"transparent"};
    color:${props=>props.type==="filled" && "White"};
`
const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection:"column"})}
`
const Info=styled.div`
    flex: 3;
`
const Summary=styled.div`
    flex: 1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding: 20px;
    height: 50vh;
`
const TopTexts=styled.div`
    ${mobile({display:"none"})}
`
const TopText=styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin: 0px 10px;
`
const Product = styled.div`
 display: flex;
 justify-content: space-between;
 ${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
flex: 2;
display: flex;
`
const Image = styled.img`
    width: 200px;
    padding: 40px 0px;
`
const ProductName= styled.span`
    
`
const ProductColor=styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>(props.color)};
`
const ProductId = styled.div`
    
`
const PriceDetail=styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Details = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    justify-content: space-around;
`
const ProductSize=styled.span`
    
`
const ProductAmountContainer=styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({margin:"5px 15px"})}
`
const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
`
const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`
const Hr= styled.hr`
    background-color: #eee;
    border:none;
    height: 1px;
`
const SummaryTitle= styled.h1`
    
`
const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>(props.type === "total"&&"500")};
    font-size: ${props=>(props.type === "total"&&"24px")};
`
const SummaryItemText= styled.span`

`
const SummaryItemPrice= styled.span`
    
`
const Button= styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color:white;
    font-weight: 600;
`

const Cart =()=>{
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts>
                    <TopButton type='filled'>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://res.cloudinary.com/dhxpfw6in/image/upload/v1674471624/justin-morgan-Hx-4TbpsoIw-unsplash_othhhq.jpg"></Image>
                                <Details>
                                    <ProductName><b>Product:</b> Classmate Notebook</ProductName>
                                    <ProductId><b>ID:</b>9jkjl9y94u8f95ii</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize>15 * 12 cms</ProductSize>
                                </Details>
                            </ProductDetail>
                            
                            <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                                </ProductAmountContainer> 
                                <ProductPrice>$40</ProductPrice>
                            </PriceDetail>
                            
                            
                        </Product>
                        <Hr></Hr>
                        <Product>
                            <ProductDetail>
                                <Image src="https://res.cloudinary.com/dhxpfw6in/image/upload/v1674471624/justin-morgan-Hx-4TbpsoIw-unsplash_othhhq.jpg"></Image>
                                <Details>
                                    <ProductName><b>Product:</b> Classmate Notebook</ProductName>
                                    <ProductId><b>ID:</b>9jkjl9y94u8f95ii</ProductId>
                                    <ProductColor color="red"/>
                                    <ProductSize>15 * 12 cms</ProductSize>
                                </Details>
                            </ProductDetail>
                            
                            <PriceDetail>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                                </ProductAmountContainer> 
                                <ProductPrice>$40</ProductPrice>
                            </PriceDetail>
                            
                            
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>
                            ORDER SUMMARY
                        </SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                            
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                            
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                            
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                            
                        </SummaryItem>
                        <Button>CheckOut</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}
export default Cart;