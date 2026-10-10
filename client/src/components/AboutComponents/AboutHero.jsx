import styled from "styled-components";
import audi from "../../assets/images/audi.jpg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${audi});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    border-bottom-left-radius: 3em;
    border-bottom-right-radius: 3em;
`

const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5em;
    height: 100vh;
`

const Logo = styled.h2`
    font-size: 16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    font-family: Russo One;
    letter-spacing: 5px;
    text-align: center;
`

const AboutHero = () => {
    return (
        <Wrapper>
            <HeroSection>
                <Logo>Alchemy</Logo>
            </HeroSection>
        </Wrapper>
    );
}

export default AboutHero;