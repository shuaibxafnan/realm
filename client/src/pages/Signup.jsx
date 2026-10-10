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

const Signup = () => {
    return (
        <Wrapper>
            <form className="formAlt">
                <input type="text" name="" id="" className="inputAlt" placeholder="Username" />
                <input type="email" name="" id="" className="inputAlt" placeholder="Email" />
                <input type="password" name="" id="" className="inputAlt" placeholder="Password" />
                <input type="password" name="" id="" className="inputAlt" placeholder="Confirm Password" />
                <span className="span">Already Have an account! <Link to="/login" style={{color:"#fff", fontFamily: "kaushan script"}} className="link">Login</Link></span>
                <button className="buttonAlt">Signup</button>
            </form>
        </Wrapper>
    );
}

export default Signup;