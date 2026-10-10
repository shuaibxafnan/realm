import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Wrapper = styled.div`
    padding: 5em 3em 2em 3em;
    display: flex;
    flex-direction: column;
    gap: 3em;
`

const Title = styled.h2`
    font-size: 5em;
    text-align: center;
    font-weight: 100;
    color: #ef4db8;
    font-family: kaushan script;
`

const Large = styled.div`
    width: 100%;
    padding: 1em 5em;
    border: 1px solid #ef4db8;
    display: flex;
    border-radius: 1em;
    gap: 2em;
    height: 100%;
    transition: .5s ease;

    &:hover {
        padding: 2em 5em;
    }
`

const LargeRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
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

    &.story {
        font-weight: 100;
        font-size: 1.5em;
        width: 500px;
        text-transform: capitalize;
    }
`

const Image = styled.img`
    width: 600px;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
`

const Blog = styled.h2`
    font-size: 5em;
    font-weight: 100;
    text-transform: Capitalize;
`

const LargeTitle = styled.div`
    display: flex;
    flex-direction: column;
`

const LargeUser = styled.div`
    display: flex;
    gap: 2em;
`

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`

const LargeUserDet = styled.div`
    display: flex;
    flex-direction: column;
`

const BlogStruct = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/server/blogs")
            .then(result => setBlogs(result.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Wrapper>
                <Title>Recent News</Title>
                {blogs.map((b) => (
                    <Link className="link" to={`/blog/${b._id}`}><Large>
                        <Image src={b.image} />
                        <LargeRight>
                            <LargeTitle>
                                <Stamps>
                                    <Span>{b.category}</Span>
                                    <i class="fa-solid fa-circle" style={{ fontSize: "0.25em", color: "#ef4db8" }}></i>
                                    <Span className="span">{b.read}</Span>
                                </Stamps>
                                <Blog>{b.title}</Blog>
                                <Span className="story">{b.desc}</Span>
                            </LargeTitle>
                            <LargeUser>
                                <UserImg src={b.userimg} />
                                <LargeUserDet>
                                    <Span>{b.username}</Span>
                                    <Span className="span">{b.date}</Span>
                                </LargeUserDet>
                            </LargeUser>
                        </LargeRight>
                    </Large></Link>
                ))}
            </Wrapper>
            <Footer />
        </>

    );
}

export default BlogStruct;