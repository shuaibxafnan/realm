import styled from "styled-components";

const Wrapper = styled.div`
    background-image: url("https://r4.wallpaperflare.com/wallpaper/880/357/113/bugatti-black-car-car-bugatti-divo-wallpaper-b8f6cd88a0705cc810cc61ae0882a49a.jpg");
    background-repeat: no-repeart;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2em;
`

const Title = styled.h1`
    font-size: 12em;
    text-transform: uppercase;
    text-align: center;
    color: rgba(255,255,255,0.15);
    font-family: Russo One;
`

const Hero = () => {
    return (
        <Wrapper>
            <Title>Reinventing the drives</Title>
        </Wrapper>
    );
}

export default Hero;