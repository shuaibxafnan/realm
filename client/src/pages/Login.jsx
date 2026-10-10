import styled from "styled-components";
import image from "../assets/images/mustangAlt.jpg";
import "../../index.css";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Login = () => {
    return (
        <Wrapper>
            <form className="formAlt">
                <input type="text" name="" id="" className="inputAlt" placeholder="Username" />
                <input type="password" name="" id="" className="inputAlt" placeholder="Password" />
                <span className="span">Don't Have an account! <Link to="/signup" style={{color:"#fff", fontFamily: "kaushan script"}} className="link">signup</Link></span>
                <button className="buttonAlt">Login</button>
            </form>
        </Wrapper>
    );
}

export default Login;