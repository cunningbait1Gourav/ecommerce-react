import React from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Key = "pk_test_51MUCHmSHJt6342bGI7NHwzXXCrpQpnwjNewQsdhN7XBQsOu40lYRdFdvMLUUvFle0CiDWxwrjUiWwaOfTl1a8ixA001cVTMAD0"


const Container=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
const PayButton=styled.button`
    font-size: x-large;
    border:none;
    background-color: black;
    color:white;
    padding:10px 15px;
    border-radius: 10px;
`

const Pay=()=>{
    const [stripeToken,setStripeToken]=useState(null)

    const onToken=(token)=>{
        setStripeToken(token)
    };

useEffect(()=>{
    const makeRequest = async ()=>{
        try{
           const res = await axios.post("http://localhost:5001/api/checkout/payment",{
            tokenId: stripeToken.id,
            amount:100,
           })
           console.log(res.data);
        }
        catch(e){
            console.log(e)
        }
    }
    stripeToken && makeRequest()
},[stripeToken])

    return(
        <Container>
            <StripeCheckout 
            name="Shop" 
            billingAddress
            shippingAddress
            description='Your Total is Rs. 1'
            amount={100}
            currency="INR"
            token = {onToken}
            stripeKey={Key}
            >
                <PayButton>
                    PAY
                </PayButton>
            </StripeCheckout>
        </Container>
        
    )
}
export default Pay