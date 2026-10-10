import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em 3em;
    display: flex;
    flex-direction: column;
    gap: 3em;
`

const BrandBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Brand = styled.div`
    cursor: pointer;
    position: relative;
    width: 33%;
    height: 325px;
    &:nth-child(1), &:nth-child(2) {
        border-bottom: 1px solid rgba(0,0,0,0.5);
        border-right: 1px solid rgba(0,0,0,0.5);
    }

    &:nth-child(4), &:nth-child(5) {
        border-right: 1px solid rgba(0,0,0,0.5);
    }

    &:nth-child(3) {
        border-bottom: 1px solid rgba(0,0,0,0.5);
    }
`

const BrandImg = styled.img`
    position: absolute;
    width: 97%;
    height: 100%;
    object-fit: cover;
    transition: all .5s ease;
    transform: rotate(2deg) translate(10px,15px);
    z-index: -1;


    ${Brand}:hover & {
        transform: rotate(0deg) translate(0px,0px);
    }
`

const BrandTxt = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1em 2em;
    flex-direction: column;
    justify-content: space-between;
    transition: .3s ease;

    ${Brand}:hover & {
        color: #fff;
    }
`

const BrandId = styled.h4`
    font-size: 2em;
    font-weight: 200;
`

const BrandName = styled.h4`
    align-self: end;
    font-size: 2em;
    font-weight: 200;
`

const ContentBx = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5em;
`

const Title = styled.h4`
    font-size: 5em;
    font-family: kaushan script;
`

const Text = styled.p`
    font-size: 1.5em;
`

const Brands = ({ brandContent }) => {
    return (
        <Wrapper>
            <ContentBx>
                <Title>Brands</Title>
                <Text>Top & prestigious brands.</Text>
            </ContentBx>
            <BrandBox>
                {brandContent.map((b) => (
                    <Brand>
                        <BrandImg src={b.image} />
                        <Link className="link" to={`/brand/${b.name}`}><BrandTxt>
                            <BrandId>{b.id}</BrandId>
                            <BrandName>{b.name}</BrandName>
                        </BrandTxt></Link>
                    </Brand>
                ))}
            </BrandBox>
        </Wrapper >
    );
}

export default Brands;