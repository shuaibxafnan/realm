import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-image: url(${(props) => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const LeftBx = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const RadioLabel = styled.label`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
`;

const RadioInput = styled.input`
    margin-right: 6px;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border: 2px solid #000;
    border-radius: 50%;
    background-color: #fff;
    
    &:checked {
        background-color: #000; 
        border-color: #000;
    }
`;


const TestDrive = () => {
    const path = location.pathname.split("/")[2];
    const [image, setImage] = useState();
    const [firstname, setFn] = useState("");
    const [lastname, setLn] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneAlt, setPhoneAlt] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [duration, setDuration] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3001/server/cars/" + path)
            .then((result) => {
                console.log(result);
                setImage(result.data.photo);
            })
            .catch((err) => console.log(err));
    }, [path]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/server/drive/bookDrive", {
            firstname,
            lastname,
            email,
            phone,
            phoneAlt,
            city,
            date,
            duration,
        })
            .then((result) => {
                console.log(result);
                window.location.replace('/')
            })
            .catch((err) => console.log(err));
    };

    return (
        <Wrapper image={image}>
            <LeftBx>
                <form className="address" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Firstname"
                            required
                            className="half"
                            onChange={(e) => setFn(e.target.value)}
                        />
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Lastname"
                            required
                            className="half"
                            onChange={(e) => setLn(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            pattern="[0-9]*"
                            name=""
                            id=""
                            required
                            placeholder="Phone"
                            className="half"
                            inputmode="none"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        <input
                            type="text"
                            pattern="[0-9]*"
                            name=""
                            id=""
                            placeholder="Alternate Phone"
                            className="half"
                            inputmode="none"
                            onChange={(e) => setPhoneAlt(e.target.value)}
                        />
                    </div>
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        required
                        style={{ height: "55px" }}
                        className="full"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="City"
                            required
                            className="half"
                            onChange={(e) => setCity(e.target.value)}
                        />

                        <input
                            type="date"
                            name=""
                            id=""
                            placeholder="Date"
                            required
                            className="half"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="radio">
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="duration"
                                value="1 hour"
                                onChange={(e) => setDuration(e.target.value)}
                            />
                            1 hour
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="duration"
                                value="2 hours"
                                onChange={(e) => setDuration(e.target.value)}
                            />
                            2 hours
                        </RadioLabel>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="duration"
                                value="3 hours"
                                onChange={(e) => setDuration(e.target.value)}
                            />
                            3 hours
                        </RadioLabel>
                    </div>

                    <button
                        className="buttonAlt"
                        style={{ backgroundColor: "#000", color: "#fff" }}
                        type="submit"
                    >
                        Next
                    </button>
                </form>
            </LeftBx>
        </Wrapper>
    );
};

export default TestDrive;
