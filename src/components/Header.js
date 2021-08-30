import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <div>
            <Container>
                <a href="https://">
                    <img src="/images/logo.svg" alt="" />
                </a>
                <Menu>
                    <a href="https://">Model S</a>
                    <a href="https://">Model 3</a>
                    <a href="https://">Model X</a>
                    <a href="https://">Model Y</a>
                    <a href="https://">Solar Panels</a>
                    <a href="https://">Solar Roofs</a>
                </Menu>
                <RightMenu>
                    <a href="https://">Shop</a>
                    <a href="https://">Tesla Account</a>
                    <CustomMenu onClick={()=>setBurgerStatus(true)}/>
                </RightMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={()=>setBurgerStatus(false)}/> 
                    </CloseWrapper>
                    <li><a href="https://">Model S</a></li>
                    <li><a href="https://">Model 3</a></li>
                    <li><a href="https://">Model X</a></li>
                    <li><a href="https://">Model Y</a></li>
                    <li><a href="https">Existing Inventory</a></li>
                    <li><a href="https">Used Inventory</a></li>
                    <li><a href="https">Trade-in</a></li>
                    <li><a href="https">Cybertruck</a></li>
                    <li><a href="https">Roadaster</a></li>
                </BurgerNav>
            </Container>
        </div>
    )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    z-index: 1;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
    }
    @media (max-width: 760px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 100;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2s ease-in-out;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }

    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
