import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import inventory from "../assets/images/inventory.mp4"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2em;
`

const ShopHero = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
`

const FloatingBx = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 0;
    padding: 3em 5em;
    background-color: rgba(255,255,255,0.10);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    justify-content: space-between;
    border-top: .5px solid rgba(255,255,255,.25);
    color: #fff;
`

const FloatLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h3`
    font-size: 3em;
    font-family: kaushan script;
    width: 300px;
    text-align: center;
`

const FloatRight = styled.div`
    display: flex;
`

const Stamps = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25em;
    align-items: center;
    padding: 0em 4em;

    & i {
        font-size: 2em;
    }

    &:nth-child(1), &:nth-child(2) {
        border-right: 1px solid #fff;
    }
`

const Span = styled.span`
    font-size: 1.5em;
    font-weight: 100;
`

const Cars = styled.div`
    display: flex;
    gap: 1em;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 2em;
`

const Car = styled.div`
    background-color: #fff;
    width: 475px;
    display: flex;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    margin-bottom: 1em;
    transition: .5s ease;

    &:hover {
        transform: translatey(-10px);
    }
`

const Image = styled.img`
   width: 100%;
   height: 300px;
   object-fit: cover;
   border-radius: 5px;
`

const CarBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CarName = styled.h4`
    font-size: 2em;
    text-transform: uppercase;
`

const CarBrand = styled.h5`
    
`

const ButtonAlt = styled.button`
    background: none;
    background-color: #000; 
    color: #fff;
    padding: 0 1.5em;
    height: 50px;
    cursor: pointer;
    font-size: 1.25em;
    font-family: kaushan script;
    border: none;
    width: 200px;
`

const CarDet = styled.div`
   display: flex;
   flex-direction: column;
`

const ContentBx = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5em;
`

const TitleHere = styled.h4`
    font-size: 5em;
    font-family: kaushan script;
`

const Text = styled.p`
    font-size: 1.5em;
`

const Inventory = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/server/cars")
            .then(result => setCars(result.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Wrapper>
                <ShopHero>
                    <Video autoPlay loop muted playsInline>
                        <source src={inventory} type="video/mp4" />
                    </Video>
                    <FloatingBx>
                        <FloatLeft>
                            <Title>Our Inventory</Title>
                        </FloatLeft>
                        <FloatRight>
                            <Stamps>
                                <i class="fa-solid fa-crown"></i>
                                <Span>6+ Brands</Span>
                            </Stamps>
                            <Stamps>
                                <i class="fa-solid fa-car"></i>
                                <Span>24+ Models</Span>
                            </Stamps>
                            <Stamps>
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                                <Span>5+ Categories</Span>
                            </Stamps>
                        </FloatRight>
                    </FloatingBx>
                </ShopHero>

                <ContentBx>
                    <TitleHere>Inventory</TitleHere>
                    <Text>Checkout our range of cars.</Text>
                </ContentBx>

                <Cars>
                    {cars.map((car) => (
                        <Link className="link" to={`/car/${car.brand}/${car._id}`}><Car>
                            <CarBox>
                                <CarDet>
                                    <CarName>{car.model}</CarName>
                                    <CarBrand>by {car.brand}</CarBrand>
                                </CarDet>
                            </CarBox>
                            <Image src={car.photo} />
                            <ButtonAlt>Details</ButtonAlt>
                        </Car></Link>
                    ))}
                </Cars>
            </Wrapper >
            <Footer />
        </>
    );
}

export default Inventory;