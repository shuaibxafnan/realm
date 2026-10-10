import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4em;
    padding: 5em 3em 1em 3em;
    overflow: hidden;
`

const ContentBx = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5em;
`

const Box = styled.div`
    display: flex;
    gap: 2em;
`

const Title = styled.h4`
    font-size: 5em;
    font-family: kaushan script;
`

const Text = styled.p`
    font-size: 1.5em;
`

const Buttons = styled.div`
    flex: 1;
    display: flex;
    gap: 1em;
    align-self: end;
    justify-content: end;
    align-items: end;
    flex-direction: column;
`

const Btn = styled.button`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    font-size: 1.25em;
    cursor: pointer;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

const Swiper = styled.div`
    flex: 9;
    overflow: hidden;
`

const Slides = styled.div`
    display: flex;
    gap: 1.75em;
    transform: translateX(${props => props.swiper * -50}%);
    transition: all .5s ease;
`

const Slide = styled.div`
    min-width: 600px;
    height: 500px;
    background-image: url(${props => props.photo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 1em;
    padding: 2em;
    display: flex;
    align-items: end;
`

const CarBx = styled.div`
    width : 100%;
    padding: 1em;
    background-color: #fff;
    border-radius: 1em;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`

const Span = styled.span`
    font-size: 1.25em;
    text-transform: uppercase;
`

const Products = () => {

    const [cars, setCars] = useState([]);
    const [swiper, setSwiper] = useState(0);

    const handleClick = (direction) => {
        if (direction === "right") {
            setSwiper(swiper < 6 ? swiper + 1 : 0);
        } else {
            setSwiper(swiper > 0 ? swiper - 1 : 6);
        }
    }

    useEffect(() => {
        axios.get("http://localhost:3001/server/cars/randomCars")
            .then(result => setCars(result.data))
            .catch(err => console.log(err))
    }, [])

    return (

        <Wrapper>
            <ContentBx>
                <Title>Inventory</Title>
                <Text>Explore wide range of cars.</Text>
            </ContentBx>
            <Box>
                <Swiper>
                    <Slides swiper={swiper}>
                        {cars.map((car) => (
                            <Link to={`/car/${car.brand}/${car._id}`} className="link"><Slide photo={car.photo} >
                                <CarBx>
                                    <Span>{car.model}</Span>
                                    <Span>${car.price}</Span>
                                </CarBx>
                            </Slide></Link>
                        ))}
                    </Slides>
                </Swiper>
                <Buttons>
                    <Btn onClick={() => handleClick("left")}><i class="fa-solid fa-chevron-left"></i></Btn>
                    <Btn onClick={() => handleClick("right")}><i class="fa-solid fa-chevron-right"></i></Btn>
                </Buttons>
            </Box>
        </Wrapper>
    );
}

export default Products;