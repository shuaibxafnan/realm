import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding: 2em 3em;
`

const ContentBx = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .25em;
`

const Title = styled.h4`
    font-size: 5em;
    font-family: kaushan script;
`

const Text = styled.p`
    font-size: 1.5em;
`

const Cars = styled.div`
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em 0em;
    flex-wrap: wrap;
    width: 100%;
`

const CarImg = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const Span = styled.span`
    &.model {
        font-family: kaushan script;
        font-size: 1.5em;
    }

`

const Car = styled.div`
    width: 450px;
    height: 500px;
    position: relative;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: end;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;

    &:nth-child(1) {
        transform: rotate(-5deg);
    } 

    &:nth-child(2) {
        transform: rotate(5deg) translate(25px, -25px);
    } 

    &:nth-child(3) {
        transform: rotate(-5deg) translate(0px, 50px);
    } 
`

const Image = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    transition: all .75s ease;

    ${Car}:hover & {
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
`

const CarBx = styled.div`
    display: flex;
    flex-direction: column;
    gap: .25em;
    background-color: #fff;
    align-items: center;
    padding: 1em 2em;
    position: absolute;
    bottom: 50px;
    opacity: 0;
    transition: all .5s ease-in;
    border-radius: 1em;

    ${Car}:hover & {
        opacity: 1;
    }
`

const PremiumProducts = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/server/premium/randomCars")
            .then(result => setCars(result.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Wrapper>
            <ContentBx>
                <Title>Premium</Title>
                <Text>Most premium and powerful cars.</Text>
            </ContentBx>
            <Cars>
                {cars.map((car) => (
                    <Car>
                        <CarImg>
                            <Image src={car.altPhotoOne} />
                        </CarImg>
                        <CarBx>
                            <Link className="link" to={`/pre/${car._id}`}><Span className="model">{car.model}</Span></Link>
                            <Span>{car.price}</Span>
                        </CarBx>
                    </Car>
                ))}

            </Cars>
        </Wrapper>
    );
}

export default PremiumProducts;