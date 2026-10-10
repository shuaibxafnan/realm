import styled from "styled-components";
import img from "../assets/images/aqua.jpg"
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    margin-top: 3em;
    padding: 3em 3em 1em 3em;
    background-color: #000;
    display: flex;
    flex-direction: column;
    width: 100%;
    color: #fff;
    gap: 3em;
    border-top-left-radius: 5em;
    border-top-right-radius: 5em;
`;

const FooterBx = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;
    align-items: center;
    justify-content: center;
`;

const Email = styled.div`
    display: flex;
    padding: .75em 2em;
    background: linear-gradient(to right, #ef4db8 50%, #ca2985);
    border-radius: 2em;
    font-size: 1.25em;
`;

const Txt = styled.h2`
    // font-family: tektur;
    font-size: 6em;
    width: 600px;
    text-align: center;

    i {
        transform: rotate(45deg);
        font-size: 0.8em;
    }
`;

const FooterPart = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
`;

const ContentPart = styled.div`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
`;

const Links = styled.div`
    padding: 2em 0em;
    display: flex;
    align-items: end;
    justify-content: end;
    gap: 1.25em;
    border-bottom: 1px solid rgba(255,255,255,0.5);
`;

const HyperLinks = styled.div`
    display: flex;
    gap: 1.25em;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2em 0em;
    border-top: 1px solid rgba(0,0,0,0.75);
    width: 100%;
`;

const Details = styled.h4`
    font-size: 1.25em;
    text-transform: capitalise;
`;

const Span = styled.span`
    font-size: 1.25em;
`;

const ImagePart = styled.div`
    position: absolute;
    width: 175px;
    height: 175px;
    background: linear-gradient(to right, #ef4db8 50%, #ca2985);
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    transition: .5s ease;
    transform: scale(1.25);
`;

const Footer = () => {
    return (
        <Wrapper>
            <FooterBx>
                <Email>shuaibafnansk@gmail.com</Email>
                <Txt>Let's Work Together</Txt>
            </FooterBx>
            <FooterPart>
                <ContentPart>
                    <Links><Span>Instagram</Span><Span>Linkedin</Span><Span>Twitter</Span></Links>
                    <Content>
                        <Details>Created By Shuaib Afnan - Powered By React.</Details>
                        <HyperLinks>
                            <Link to="/" className="linkAlt"><Span>Home</Span></Link>
                            <Link to="/about" className="linkAlt"><Span>About</Span></Link>
                            <Link to="/cars" className="linkAlt"><Span>Inventory</Span></Link>
                            <Link to="/premium" className="linkAlt"><Span>Premium</Span></Link>
                            <Link to="/blogs" className="linkAlt"><Span>Blogs</Span></Link>
                            <Link to="/contact" className="linkAlt"><Span>Support</Span></Link>
                        </HyperLinks>
                    </Content>
                </ContentPart>
                <ImagePart>
                    <Image src={img} />
                </ImagePart>
            </FooterPart>
        </Wrapper>
    );
}

export default Footer;