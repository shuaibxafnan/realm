import styled from "styled-components"
import Footer from "../components/Footer"
import "../../index.css"
import axios from "axios"
import { useState } from "react"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding: 7em 0em;
`

const Title = styled.h3`
    align-self: end;
    padding: 0em 2em;
    font-family: kaushan script;
    font-size: 5em;
`

const ContactWrapper = styled.div`
    display: flex;
    padding: 0em 10em;
`

const ContactLeft = styled.div`
    flex: 5;
`

const ContactRight = styled.div`
    flex: 5;
    display: flex;
    justify-content: end;
`

const Span = styled.div`
    font-size: 1.5em;
    display: flex;
`

const SpanAlt = styled.div`
    transition: all .5s ease;
    cursor: pointer;

    &:hover {
        color:#ca2985;
    }   
`

const Contact = () => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/server/message/sendMessage", { name, email, message })
            .then(result => {
                console.log(result)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Wrapper>
                <Title>Share your thoughts</Title>
                <ContactWrapper>
                    <ContactLeft>
                        <Span><i>instagram</i>/ <SpanAlt>@INSTAGRAM</SpanAlt></Span>
                        <Span><i>twitter</i>/ <SpanAlt>@TWITTER</SpanAlt></Span>
                        <Span><i>facebook</i>/ <SpanAlt>@FACEBOOK</SpanAlt></Span>
                    </ContactLeft>
                    <ContactRight>
                        <form className="form" onSubmit={handleSubmit}>
                            <input type="text" name="" id="" className="input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                            <input type="email" name="" id="" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <textarea name="" id="" cols="30" rows="10" className="textarea" placeholder="Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                            <button className="button" type="submit">Send Message</button>
                        </form>
                    </ContactRight>
                </ContactWrapper>
            </Wrapper>
            <Footer />
        </>
    );
}

export default Contact;