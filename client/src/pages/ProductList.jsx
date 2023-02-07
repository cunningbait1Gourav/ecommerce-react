import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div`
    
`
const FilterComponent= styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter= styled.div`
    margin: 20px;
    ${mobile({width:"0px 20px",display:"flex", flexDirection:"column"})}
`
const Title = styled.h1`
    margin: 20px;
`
const FilterTest= styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}

`
const Select = styled.select`
    padding: 10px;
    ${mobile({margin:"10px 0px"})}
`
const Option = styled.option`
    
`

const ProductList =()=>{
    return(
        <Container>
            <Navbar/>
            <Announcement/>
            <Title>Stationary</Title>
            <FilterComponent>
                <Filter>
                    <FilterTest>Filter Products:</FilterTest> 
                    <Select>
                        <Option disabled selected>Item</Option>
                        <Option>Books</Option>
                        <Option>Stationary</Option>
                        <Option>NoteBooks</Option>
                        <Option>Bags</Option>
                        <Option>Lunchboxes</Option>
                    </Select>
                </Filter>
                <Filter>
                <FilterTest>Sort Products:</FilterTest> 
                <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterComponent>
                <Products/>
                <Newsletter/>
                <Footer/>
        </Container>
    )
}
export default ProductList