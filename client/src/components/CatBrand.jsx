import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const BrandHero = styled.div`
    width: 100%;
    height: 100vh;
`

const BrandHeroAlt = styled.div`
    padding: 3em 0em 1em 0em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BrandImages = styled.div`
    background-image: url("${props => props.image}");
    background-repeat: no-repeat;
    background-size: cover;
    background-positon: center;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: 3em;
    border-bottom-left-radius: 3em;
`

const BrandWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;
    padding: 3em 1.5em;
`

const BrandCar = styled.div`
   width: 355px;
   height: 550px;
   background-image: url("${props => props.image}");
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   color: #fff;
   border-radius: 10px;
   overflow: hidden;
   z-index: 10;
`

const BrandBx = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: column;
    width : 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, black 100%);
    border-radius: 10px;
    padding: 2em;
    align-items: center;
    overflow: hidden;
    gap: .25em;
`

const Span = styled.div`
    position: relative;
    transition: all .5s ease;

    &.name {
        font-size: 2em;
        text-align: center;
        top: 40px;
        text-transform: uppercase;
    }

    &.price {
        font-size: 1.25em;
        top: 40px;
    }

    ${BrandCar}:hover & {
        top: 0px;
    }

    &.path {
        font-size: 8em;
        text-transform: uppercase;
        color: rgba(0,0,0,0.9);
    }

    &.txt {
        padding: 0em 3em;
        font-size: 3em;
        text-align: center;
    }

    &.text {
        font-size: 1.5em;
    }
`

const Button = styled.button`
    background: #fff;
    border-radius: 2em;
    padding: .5em 2em;
    font-size: 1.25em;
    cursor: pointer;
    transform: translatey(5em);
    transition: all .5s ease;
    margin-top: 1em;
    border: none;

    ${BrandCar}:hover & {
        transform: translatey(0em);
    }
`

const CatBrand = ({ cars, path }) => {
    return (
        <Wrapper>
            <BrandHero>
                {cars.slice(2, 3).map((car) => (
                    <BrandImages image={car.altPhoto}>
                        
                    </BrandImages>
                ))}
            </BrandHero>
            <BrandHeroAlt>
                <Span className="path">{path}</Span>
                <Span className="text">Here are all the {path}'s</Span>
            </BrandHeroAlt>
            <BrandWrapper>
                {cars.map((car) => (
                    <BrandCar image={car.photo}>
                        <BrandBx>
                            <Span className="name">{car.model}</Span>
                            <Span className="price">${car.price}</Span>
                            <Link className='link' to={`/car/${car.brand}/${car._id}`}><Button>Details</Button></Link>
                        </BrandBx>
                    </BrandCar>
                ))}
            </BrandWrapper>
        </Wrapper >
    );
}

export default CatBrand;