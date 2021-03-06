import React, { useState } from 'react';
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice"
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <a href="./">
                <img src="./images/logo.svg" alt="logo"/>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (
                    <a key={index} href="./">{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href="./">Shop</a>
                <a href="./">Account</a>
                <p class="menu" onClick = {() => setBurgerStatus(true)}>MENU</p>
            </RightMenu>
            <BurgerNav show = {burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick = {() => setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car, index) => (
                    <li key={index}><a href="./">{car}</a></li>
                ))}
                <li><a href="./">Existing Inventory</a></li>
                <li><a href="./">Used Inventory</a></li>
                <li><a href="./">Trade-in</a></li>
                <li><a href="./">Test Drive</a></li>
                <li><a href="./">Cybertruck</a></li>
                <li><a href="./">Roadster</a></li>
                <li><a href="./">Semi</a></li>
                <li><a href="./">Charging</a></li>
                <li><a href="./">Powerwall</a></li>
                <li><a href="./">Commercial Energy</a></li>
                <li><a href="./">Utilities</a></li>
                <li><a href="./">Find Us</a></li>
                <li><a href="./">Support</a></li>
                <li><a href="./">Investor Relations</a></li>
                <li><a href="./">United States - English</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;

    img {
        width:100%;
    }
`
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 2;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 15px;
        flex-wrap: nowrap;
        transition: all 0.3s ease;
        padding: 5px 15px;
        border-radius: 100px;
    }
    a:hover {
        background-color: rgba(0, 0, 0, 0.05);
        font-weight: 700;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 25px;
        flex-wrap: nowrap;
        transition: all 0.3s ease;
        padding: 5px 10px;
        border-radius: 100px;
    }
    a:hover {
        background-color: rgba(0, 0, 0, 0.05);
        font-weight: 700;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.3s;

    li {
        padding: 10px 0;
        border-bottom: 0px solid rgba(0, 0, 0, 0.2);
        
        a {
            font-weight: 600;
            transition: all 0.3s ease;
            padding: 5px 25px;
            border-radius: 100px;
        }
        a:hover {
            background-color: #d3d3d3;
            font-weight: 700;
        }
    }
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 25px;
    margin-top: 10px;

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
    
`