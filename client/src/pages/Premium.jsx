import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import premium from "../assets/images/premium.mp4"
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;
    width: 100%;
`

const Cars = styled.div`
    display: flex;
    gap: 3em;
    flex-wrap: wrap;
    padding: 0em 3em 3em 3em;
    justify-content: center;
`

const Car = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 750px;
    height: 350px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    overflow: hidden;
    position: relative;

    &::before {
        content: '';
        background-color: #f4f4f4;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: translatex(-150%);
        transition: all 1s ease;
        border-radius: 8px;
    }

    &:hover::before {
        transform: translatex(0%);
    }
`

const CarImg = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    align-items: end;
    transform: translatex(-150%);
    transition: all 1s ease;
    transition-delay: .5s;

    ${Car}:hover & {
        transform: translatex(0%);
    }
`

const CarBx = styled.div`
    background-color: #fff;
    padding: 1em;
    height: fit-content;
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: .25em;
    border-radius: 5px;
    transition: all .5s ease;
    transition-delay: 1.25s;
    transform: translateY(150%);

    i {
        align-self: end;
        font-size: .85em;
    }

    ${Car}:hover & {
        transform: translateY(0%);
    }

`

const CarModel = styled.div`
    font-family: Kaushan Script;
    font-size: 2em;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    padding-bottom: .25em
`

const CarBrand = styled.div`
    font-size: 1.25em;
`

const CarOther = styled.div`
    font-size: 1.10em;
`

const ShopHero = styled.div`
    width: 100%;
    height: 100vh;
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

const CarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`

const StickyCards = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 3em;
    gap: 3em;
`

const Card = styled.div`
    position: sticky;
    top: 130px;
    left: 0px;
    width: 100%;
    height: 600px;
    border-radius: 3em;
`

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2em;
    position: absolute;
`

const CardBx = styled.div`
    position: absolute;
    background: linear-gradient(to bottom, transparent 50%, black 100%);
    width: 100%;
    height: 100%;
    padding: 4em 3em;
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: #fff;
    gap: 1em;
    border-radius: 2em;
`

const CardTitle = styled.h4`
    font-size: 3em;
`

const CardTxt = styled.p`
    width: 600px;
    font-family: "raleway";
`

const Premium = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/server/premium")
            .then(result => setCars(result.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            <Wrapper>
                <ShopHero>
                    <Video autoPlay loop muted playsInline>
                        <source src={premium} type="video/mp4" />
                    </Video>
                    <FloatingBx>
                        <FloatLeft>
                            <Title>Premium Store</Title>
                        </FloatLeft>
                        <FloatRight>
                            <Stamps>
                                <i class="fa-solid fa-crown"></i>
                                <Span>8+ Brands</Span>
                            </Stamps>
                            <Stamps>
                                <i class="fa-solid fa-car"></i>
                                <Span>12+ Models</Span>
                            </Stamps>
                            <Stamps>
                                <i class="fa-solid fa-hand-holding-dollar"></i>
                                <Span>2+ Categories</Span>
                            </Stamps>
                        </FloatRight>
                    </FloatingBx>
                </ShopHero>
                <StickyCards>
                    <Card>
                        <CardImg src="https://c1.wallpaperflare.com/path/667/666/503/bentley-gt-coupe-rich-eab8e60d386dafd1c60743577a1557c9.jpg" />
                        <CardBx>
                            <CardTitle>Luxury and Comfort</CardTitle>
                            <CardTxt>Our premium cars redefine comfort with sumptuous leather, handcrafted wood accents, and advanced climate control. Travel in opulence, surrounded by the finest materials and ergonomic perfection.</CardTxt>
                        </CardBx>
                    </Card>
                    <Card>
                        <CardImg src="https://r4.wallpaperflare.com/wallpaper/124/36/930/bugatti-divo-bugatti-car-road-wallpaper-961abc243268ddf658b34bc2e8bafdb4.jpg" />
                        <CardBx>
                            <CardTitle>Power and Performance</CardTitle>
                            <CardTxt>Experience heart-pounding acceleration and precise handling. Our premium cars are engineered for thrilling drives with potent engines, dynamic suspensions, and cutting-edge driving technology.</CardTxt>
                        </CardBx>
                    </Card>
                    <Card>
                        <CardImg src="https://r4.wallpaperflare.com/wallpaper/701/103/705/white-porsche-taycan-800v-supercar-wallpaper-c9665246cb0a7f2a805b22ba38572553.jpg" />
                        <CardBx>
                            <CardTitle>Technology and Innovation</CardTitle>
                            <CardTxt>Stay connected and informed with advanced infotainment systems, intuitive controls, and driver-assistance features. Our premium cars seamlessly blend technology with driving, making every journey effortless and enjoyable.</CardTxt>
                        </CardBx>
                    </Card>
                    <Card>
                        <CardImg className="lastCard" src="https://r4.wallpaperflare.com/wallpaper/510/725/85/rolls-royce-car-front-white-wallpaper-36a1892f053e3f5a9ec424095c4b8baa.jpg" />
                        <CardBx>
                            <CardTitle>Elegance and Design</CardTitle>
                            <CardTxt>Our premium cars are a testament to design excellence. Each model exudes timeless elegance, characterized by sleek lines, attention to detail, and a distinctive presence that turns heads wherever you go.</CardTxt>
                        </CardBx>
                    </Card>
                </StickyCards>
                <Cars>
                    {cars.map((car) => (
                        <CarWrapper>
                            <CarModel>{car.model}</CarModel>

                            <Link className="link" to={`/pre/${car._id}`}><Car image={car.altPhotoOne} >
                                <CarImg image={car.altPhotoThree}>
                                    <CarBx>
                                        <i class="fa-solid fa-circle"></i>
                                        <CarBrand>Presented by {car.brand}</CarBrand>
                                        <CarOther>Top Speed : {car.topspeed}</CarOther>
                                        <CarOther>Price : {car.price}</CarOther>
                                    </CarBx>
                                </CarImg>
                            </Car></Link>
                        </CarWrapper>
                    ))}
                </Cars>
            </Wrapper>
            <Footer />
        </>
    );
}

export default Premium;