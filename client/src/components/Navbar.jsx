import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1em 3em;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    border-bottom-right-radius: 1em;
    border-bottom-left-radius: 1em;
    transition: all .3s;
`

const Burger = styled.div`
    width: 45px;
    height: 45px;
`

const Icon = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: linear-gradient(to right, #ef4db8 50%, #ca2985);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Btns = styled.div`
    display: flex;
    gap: 1em;
`

const Btn = styled.div`
    padding: .5em 2em;
    background: linear-gradient(to right, #ef4db8 50%, #ca2985);;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    font-family: "kaushan Script";
    text-transform: uppercase;
`

const BurgerMenu = styled.div`
    width: 100%;
    background-color: #fff;
    position: fixed;
    top: ${props => props.active ? 0 : -110}vh;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 2em;
    z-index: 99999;
    padding: 1em 3em;
    transition: all 1s ease-in-out;
    height: 100vh;
    border-bottom-left-radius: 2em;
    border-bottom-right-radius: 2em;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`

const Navs = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    padding: 5em 0em;
`

const NavBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    justify-content: center;
    align-items: center;
    height: 350px;
    flex-wrap: wrap;
`

const NavBx = styled.h3`
    font-size: 5em;
    transition: all .5s ease-in-out;
    letter-spacing: 1px;
    cursor: pointer;
    text-align: end;
    transition: .5s ease;

    &:hover {
        background: linear-gradient(to right, #ef4db8 50%, #ca2985);
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }

    & sup {
        font-size: .5em;
    }
`

const NavbarComp = () => {

    const [active, setActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [colorChange, setColorChange] = useState(false);

    const handleChange = () => {
        setActive(!active)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            setColorChange(scrollPosition > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    return (
        <>
            <BurgerMenu active={active}>
                <Burger onClick={handleChange}>
                    <Icon style={{ backgroundColor: "#000" }}>
                        <i class="fa-solid fa-xmark" style={{ color: "#fff", fontSize: "1.25em" }}></i>
                    </Icon>
                </Burger>
                <Navs>
                    <NavBox>
                        <Link to='/' className="link" onClick={handleChange}><NavBx>Home<sup>(01)</sup></NavBx></Link>
                        <Link to='/about' className="link" onClick={handleChange}><NavBx>About<sup>(02)</sup></NavBx></Link>
                        <Link to='/cars' className="link" onClick={handleChange}><NavBx>Inventory<sup>(03)</sup></NavBx></Link>
                        <Link to='/premium' className="link" onClick={handleChange}><NavBx>Premium<sup>(04)</sup></NavBx></Link>
                        <Link to='/blogs' className="link" onClick={handleChange}><NavBx>Blogs<sup>(05)</sup></NavBx></Link>
                        <Link to='/contact' className="link" onClick={handleChange}><NavBx>Support<sup>(06)</sup></NavBx></Link>
                    </NavBox>
                </Navs>
            </BurgerMenu>


            <Nav style={colorChange ? { backgroundColor: "transparent" } : { backgroundColor: "transparent", boxShadow: "none" }}>
                <Burger onClick={handleChange}>
                    <Icon>
                        <i class="fa-solid fa-bars" style={{ color: "#fff", fontSize: "1.25em" }}></i>
                    </Icon>
                </Burger>
                <Btns>
                    <Link to='/login' className="link" style={{color:"#fff"}}><Btn>Login</Btn></Link>
                </Btns>
            </Nav>
        </>

    );
}

export default NavbarComp;

