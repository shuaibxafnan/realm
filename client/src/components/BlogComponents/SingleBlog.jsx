import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    padding-bottom: 3em;
`

const WrapperHero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5em;
`

const HeroRoute = styled.div`
    padding: 7em 3em 0em 3em;
    font-size: 1.25em;
    text-transform: Capitalize;

    .link {
        color: #ef4db8;
    }
`

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    position: relative;
    padding: 5em 0em;

    &::before {
        position: absolute;
        content: '';
        top: 0;
        left: 7%;
        border: 1.5px solid #ef4db8;
        width: 85%;
        border-radius: 1em;
        height: 100%;
    }
`

const HeroImg = styled.img`
    width: 100%;
    object-fit: cover;
    height: 500px;
`

const Title = styled.h3`
    font-size: 7.5em;
    font-weight: 100;
`

const Desc = styled.h5`
    font-size: 2em;
    font-weight: 300;
    width: 600px;
    text-align: center;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`

const Content = styled.div`
    display :flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
`

const Stamps = styled.div`
    display: flex;
    gap: .75em;
    align-items: center;
`

const Span = styled.span`
    font-size: 1.05em;
    text-transform: uppercase;

    &.span {
        font-weight: 100;
    }
`

const LargeUser = styled.div`
    display: flex;
    gap: 2em;
    align-items: center;
`

const UserImg = styled.img`
    width: 65px;
    height: 65px;
    border-radius: 50%;
    object-fit: cover;
`

const LargeUserDet = styled.div`
    display: flex;
    flex-direction: column;
`

const Story = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Txt = styled.p`
    width: 60%;
    font-weight: 300;
    font-size: 1.25em;
`

const SingleBlog = () => {

    const path = location.pathname.split("/")[2];
    const [blog, setBlog] = useState([]);
    const [title, setTitle] = useState();
    const [image, setImage] = useState();
    const [category, setCategory] = useState();
    const [desc, setDesc] = useState();
    const [story, setStory] = useState();
    const [username, setUsername] = useState();
    const [userimg, setUserimg] = useState();
    const [date, setDate] = useState();
    const [read, setRead] = useState();

    useEffect(() => {
        axios.get("http://localhost:3001/server/blogs/" + path)
            .then(result => {
                console.log(result)
                setTitle(result.data.title)
                setImage(result.data.image)
                setCategory(result.data.category)
                setRead(result.data.read)
                setUserimg(result.data.userimg)
                setUsername(result.data.username)
                setStory(result.data.story)
                setDesc(result.data.desc)
                setDate(result.data.date)
            })
            .catch(err => console.log(err))
    }, [path])

    return (
        <>
            <Wrapper>
                <WrapperHero>
                    <HeroRoute>
                        <Link to='/' className="link">Home / </Link><Link to='/blogs' className="link"> Blogs / </Link>{title}
                    </HeroRoute>
                    <Hero>
                        <HeroImg src={image} />
                        <Details>
                            <Stamps>
                                <Span>{category}</Span>
                                <i class="fa-solid fa-circle" style={{ fontSize: "0.25em", color: "#ef4db8" }}></i>
                                <Span className="span">{read}</Span>
                            </Stamps>
                            <LargeUser>
                                <UserImg src={userimg} />
                                <LargeUserDet>
                                    <Span>{username}</Span>
                                    <Span className="span">{date}</Span>
                                </LargeUserDet>
                            </LargeUser>
                        </Details>
                        <Content>
                            <Title>{title}</Title>
                            <Desc>{desc}</Desc>
                        </Content>
                    </Hero>
                    <Story>
                        <Txt>{story}</Txt>
                    </Story>
                </WrapperHero>
            </Wrapper>
            <Footer />
        </>
    );
}

export default SingleBlog;