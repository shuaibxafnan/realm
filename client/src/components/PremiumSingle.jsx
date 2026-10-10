import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    
`

const Hero = styled.div`
    background-image: url(${props => props.photo});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    color: #fff;
`

const HeroBx = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, transparent 50%, black 100%);
    display: flex;
    align-items: end;
    padding: 5em;
    justify-content: space-between;
`

const Stamps = styled.div`
    display: flex;
    flex-direction: column;
`

const Span = styled.span`

    &.model {
        font-size: 2.5em;
        font-family: kaushan script;
    }

    &.txt {
        font-size: 2.25em;
        text-transform: uppercase;
    }

    &.other {
        font-weight: 100;
        font-size: 1.5em;
        color: rgba(255,255,255,0.75);
    }

    &.spanHere {
        font-size: 1.5em;
        text-transform: uppercase;
    }

    &.det {
        font-size: 1.15em;
        font-weight: 100;
        color: rgba(0,0,0,0.75);
    }

    &.thing {
        font-size: 1.5em;
    }

    &.thingAlt {
        text-align: end;
        font-size: 1.25em;
        color: rgba(0,0,0,0.75);
    }
`

const Button = styled.button`
    border: 1px solid rgba(0,0,0,0.25);
    border-radius: 2em;
    background: none;
    background-color: rgba(255,255,255,0.25);
    -webkit-backdrop-filter: blur(15px);
    backdrop-fliter: blur(15px);
    padding: 0 1.5em;
    height: 50px;
    cursor: pointer;
    color: #fff;
    font-size: 1.25em;
    transition: all .5s ease;

    &.detailsBtn {
        width: 200px;
    }

    &:hover {
        background-color: rgba(255,255,255,0.35);
    }
`

const AboutBx = styled.div`
    display: flex;
    background-color: #000;
`

const AboutLeft = styled.div`
    flex: 4;
    color: #fff;
    padding: 2em 4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const AboutRight = styled.div`
    flex: 6;
    background-image: url(${props => props.photo});
    background-size: cover;
    background-position: center;
    height: 450px;
    width: 100%;
`

const CarWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 2em 3em;
    gap: 2em;
`

const Slider = styled.div`
    position: relative;
    flex: 7;
    width: 100%;
    overflow: hidden;
    height: 600px;
`

const Slides = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translateX(${props => props.swiper * - 100}%)
`

const Slide = styled.img`
    height: 100%;
    min-width: 100%;
    object-fit: cover;
    border-radius: 1em;
`

const Buttons = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0em 1em;
`

const Btn = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    border:none;
`

const Contents = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
`

const DetBx = styled.div`
    display: flex;
    justify-content: space-between;
`

const PremiumSingle = () => {

    const id = location.pathname.split('/')[2];
    const [model, setModel] = useState();
    const [brand, setBrand] = useState();
    const [engine, setEngine] = useState();
    const [transmission, setTransmission] = useState();
    const [speed, setSpeed] = useState();
    const [other, setOther] = useState();
    const [price, setPrice] = useState();
    const [abs, setAbs] = useState();
    const [lsd, setLsd] = useState();
    const [fuel, setFuel] = useState();
    const [category, setCategory] = useState([]);
    const [photo, setPhoto] = useState();
    const [photoOne, setPhotoOne] = useState();
    const [photoTwo, setPhotoTwo] = useState();
    const [photoThree, setPhotoThree] = useState();
    const [swiper, setSwiper] = useState(0);

    const handleClick = (direction) => {
        if (direction === "right") {
            setSwiper(swiper < 3 ? swiper + 1 : 0)
        } else {
            setSwiper(swiper > 0 ? swiper - 1 : 3)
        }
    }

    useEffect(() => {
        axios.get("http://localhost:3001/server/premium/" + id)
            .then(result => {
                console.log(result)
                setModel(result.data.model)
                setBrand(result.data.brand)
                setEngine(result.data.engine)
                setTransmission(result.data.transmission)
                setSpeed(result.data.topspeed)
                setOther(result.data.other)
                setAbs(result.data.abs)
                setLsd(result.data.lsd)
                setCategory(result.data.category)
                setFuel(result.data.fuel)
                setPrice(result.data.price)
                setPhoto(result.data.photo)
                setPhotoOne(result.data.altPhotoOne)
                setPhotoTwo(result.data.altPhotoTwo)
                setPhotoThree(result.data.altPhotoThree)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <>

            <Wrapper>

                <Hero photo={photo} >
                    <HeroBx>
                        <Stamps>
                            <Span className="model">{model}</Span>
                            <Span className="brand">{brand}</Span>
                        </Stamps>
                        <Link to={`/orderPremium/${id}`}><Button>
                            Order Now
                        </Button></Link>
                    </HeroBx>
                </Hero>

                <AboutBx>
                    <AboutRight photo={photoOne} />
                    <AboutLeft>
                        <Stamps>
                            <Span className="txt">Elegance meets Luxury</Span>
                            <Span className="other">{other} & Clocks a topspeed of {speed} with {transmission} transmission.</Span>
                        </Stamps>
                        <Button>
                            <a href="#car" className="link" style={{ color: "#fff" }}>More Details</a>
                        </Button>
                    </AboutLeft>
                </AboutBx>



                <div className="title">{model}</div>

                <CarWrapper id="car">
                    <Slider>
                        <Slides swiper={swiper}>
                            <Slide src={photoTwo} />
                            <Slide src={photoThree} />
                            <Slide src={photoOne} />
                            <Slide src={photo} />
                        </Slides>
                        <Buttons>
                            <Btn direction="left" onClick={() => handleClick("left")}><i class="fa-solid fa-angle-left"></i></Btn>
                            <Btn direction="right" onClick={() => handleClick("right")}><i class="fa-solid fa-chevron-right"></i></Btn>
                        </Buttons>
                    </Slider>
                    <Contents>

                        <Details>
                            <DetBx>
                                <Span className="thing">Brand</Span>
                                <Span className="thingAlt">{brand}</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Top Speed</Span>
                                <Span className="thingAlt">{speed}</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Abs</Span>
                                <Span className="thingAlt">{abs}</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Lsd</Span>
                                <Span className="thingAlt">{lsd}</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Fuel</Span>
                                <Span className="thingAlt">{fuel}</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Category</Span>
                                <Span className="thingAlt">{category.join(", ")}</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Steering</Span>
                                <Span className="thingAlt">left</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Drive</Span>
                                <Span className="thingAlt">Not Available</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Price</Span>
                                <Span className="thingAlt">{price}</Span>
                            </DetBx>
                            <DetBx>
                                <Span className="thing">Rent</Span>
                                <Span className="thingAlt">Coming Soon..</Span>
                            </DetBx>

                        </Details>
                        <Link className="link" to={`/orderPremium/${id}`} style={{width:"100%"}}><Button style={{ backgroundColor: "#000" ,width:"100%"}}>
                            Order Now
                        </Button></Link>
                    </Contents>
                </CarWrapper>

            </Wrapper>
            <Footer />
        </>
    );
}

export default PremiumSingle;