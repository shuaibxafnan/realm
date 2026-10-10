import styled from "styled-components";
import garage from "../../assets/images/seo.jpg"

const HoverContainer = styled.div`
    padding: 1em 3em;
    display: flex;
    flex-direction: column;
    gap: 3em;
`

const HoverBox = styled.div`
    display: flex;
    width: 100%;
    gap: 1.5em;
`

const HoverImg = styled.div`
    background-image: url(${garage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    flex: 5;
    padding: 2em;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    color: #fff;
    border-radius: 8px;
`

const Span = styled.span`
    font-size: 1.75em;
`

const SpanAlt = styled.span`
    color: #fff;
    font-size: 1.5em;
    text-transform: uppercase;
`

const SpanIcon = styled.span`
    width: 65px;
    height: 65px;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HoverCont = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
    gap: 1em;
`

const Hover = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 180px;
`

const HoverOutside = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.25);
    border-radius: 8px;
    padding: 0em 2em;
`

const HoverInside = styled.div`
    position: absolute;
    top: -200px;
    width: 100%;
    height: 100%;
    font-size: 1.25em;
    background-color: #000;
    color: #fff;
    transition: all .5s ease;
    border-radius: 8px;
    padding: 0em 2em;
    display: flex;
    align-items: center;

    ${Hover}:hover & {
        top: 0px;
    }
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

const AboutHover = ({ hoverContent }) => {
    return (
        <HoverContainer>
            <ContentBx>
                <Title>Services</Title>
                <Text>What we do and provide.</Text>
            </ContentBx>
            <HoverBox>
                <HoverImg>
                    <SpanAlt>RoadRealm</SpanAlt><br />
                    1234 Car Street,<br />
                    Autoville City,<br />
                    Engine County, 98765,<br />
                    MotoLand.<br />
                </HoverImg>
                <HoverCont>
                    {hoverContent.map((h) => (
                        <Hover>
                            <HoverOutside><Span>{h.stat}</Span><SpanIcon><i class="fa-solid fa-arrow-right" style={{ transform: "rotate(-45deg" }}></i></SpanIcon></HoverOutside>
                            <HoverInside>{h.name}</HoverInside>
                        </Hover>
                    ))}
                </HoverCont>
            </HoverBox>
        </HoverContainer>
    );
}

export default AboutHover;