import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap : 1em;
`

const Hero = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const SingleWrapper = styled.div`
    display: flex;
    gap: 2em;
    flex-direction: column;
`

const Contents = styled.div`
    display: flex;
    padding: 0em 3em;
    gap: 3em;
`

const LeftContents = styled.div`
    flex : 5;
    width: 100%;
    height: 625px;
    background-image: url(${props => props.imageAlt});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 5px;
`

const RightContents = styled.div`
    flex : 5;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1em 0em;
`

const MultipleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 1em 3em;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75em;
`

const Brandname = styled.h4`
    font-size: 2.5em;
`

const Span = styled.div`
    font-size : 1.75em; 
    font-weight: 100;
    color: rgba(0,0,0,1);
`

const Detail = styled.div`
    display: flex;
    justify-content: space-between;

    & ${Span}:nth-child(2) {
        color: rgba(0,0,0,0.75);
    }
`

const Similar = styled.div`
   font-weight: 100;
   font-size: 5em;
   text-align: center;
   padding-top: .5em;
`

const Cars = styled.div`
    display: flex;
    gap: 2em;
    justify-content: center;
`

const Car = styled.div`
    display: flex;
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: .5em;
    height: fit-content;
    background-color: #fff;
    transition: all .5s ease;
    height: 500px;
    flex-direction: column;
    padding: .5em;
    
    &:hover {
        transform: translatey(.5em);
    }
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
    flex: 8.5;
    border-radius: .5em;
`

const CarBox = styled.div`
    display: flex;
    flex: 1.5;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: .5em;
`

const CarName = styled.h4`
    font-size: 1.5em;
    text-transform: uppercase;
    text-align: end;
`

const CarBrand = styled.h5`
    font-size: 1em;
    font-weight: 100;
    text-align: end;
`

const Order = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    border: 1px solid rgba(0,0,0,0.25);
    border-radius: 2em;
    background: none;
    background-color: #fff; 
    padding: 0 1.5em;
    height: 50px;
    cursor: pointer;
    font-size: 1.1em;
`

const ButtonAlt = styled.button`
    border-radius: 5px;
    background: none;
    background-color: #000; 
    color: #fff;
    padding: 0 1.5em;
    height: 50px;
    cursor: pointer;
    font-size: 1.25em;
    font-family: kaushan script;
    border: none;
`

const CarDet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`

const Title = styled.h3`
    font-size: 10em;
    text-align: center;
    text-transform : uppercase;
`

const Div = styled.div`
    display: flex;
    gap: 1em;
`


const SingleCar = () => {

    const altPath = location.pathname.split('/')[2];
    const path = location.pathname.split('/')[3];
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/server/cars/brand/${altPath}/${path}`)
            .then((result) =>
                setCars(result.data)
            )
            .catch(err => console.log(err))
    }, [path, altPath])

    const handlechange = () => {
        setTimeout(() => {
            window.location.reload();
        }, 500);
    };

    return (
        <Wrapper>
            {cars.slice(0, 1).map((car) => (
                <SingleWrapper>
                    <Hero image={car.altPhoto}></Hero>
                    <Title>{car.model}</Title>
                    <Contents>
                        <LeftContents imageAlt={car.photo}>

                        </LeftContents>
                        <RightContents>
                            <Order>
                                <Brandname>By {car.brand}</Brandname>
                                <Div>
                                    <Link className="link" to={`/drive/${car._id}`}><Button>Book Drive</Button></Link>
                                    <Link className="link" to={`/order/${car._id}`}><Button>Order Now</Button></Link>
                                </Div>
                            </Order>
                            <Details>
                                <Detail>
                                    <Span>Category</Span>
                                    <Span className="spanHere">{car.category.join(', ')}</Span>
                                </Detail>
                                <Detail>
                                    <Span>TopSpeed</Span>
                                    <Span className="spanHere">{car.topspeed}</Span>
                                </Detail>
                                <Detail>
                                    <Span>Mileage</Span>
                                    <Span className="spanHere">{car.mileage}</Span>
                                </Detail>
                                <Detail>
                                    <Span>Steering</Span>
                                    <Span className="spanHere">Left</Span>
                                </Detail>
                                <Detail>
                                    <Span>Abs</Span>
                                    <Span className="spanHere">{car.abs}</Span>
                                </Detail>
                                <Detail>
                                    <Span>Cylinder</Span>
                                    <Span className="spanHere">{car.cylinder}</Span>
                                </Detail>
                                <Detail>
                                    <Span>Test Drive</Span>
                                    <Span className="spanHere">Available</Span>
                                </Detail>
                                <Detail>
                                    <Span>Fuel</Span>
                                    <Span className="spanHere">{car.fuel}</Span>
                                </Detail>
                                <Detail>
                                    <Span>Price</Span>
                                    <Span className="spanHere">{car.price}</Span>
                                </Detail>
                                <Detail>
                                    <Span>Rent For a Day</Span>
                                    <Span>{car.rentPrice}</Span>
                                </Detail>
                            </Details>
                        </RightContents>
                    </Contents>
                </SingleWrapper>
            ))}
            <MultipleWrapper>
                <Similar>More From {altPath}</Similar>
                <Cars>
                    {cars.slice(1, 4).map((car) => (
                        <Link className="link" onClick={handlechange} to={`/car/${car.brand}/${car._id}`}><Car>
                            <Image src={car.photo} />
                            <CarBox>
                                <CarDet>
                                    <CarName>{car.model}</CarName>
                                    <CarBrand>${car.price}</CarBrand>
                                </CarDet>
                                <ButtonAlt>Details</ButtonAlt>
                            </CarBox>
                        </Car></Link>
                    ))}
                </Cars>
            </MultipleWrapper>

            <Footer />
        </Wrapper>
    );
}

export default SingleCar;