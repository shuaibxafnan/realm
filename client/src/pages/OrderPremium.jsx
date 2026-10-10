import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const LeftBx = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const OrderPremium = () => {

    const path = location.pathname.split('/')[2];
    const [image, setImage] = useState();
    const navigate = useNavigate()
    const [firstname, setFn] = useState("")
    const [lastname, setLn] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneAlt, setPhoneAlt] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPincode] = useState("")
    const [country, setCountry] = useState("")
    const [email, setEmail] = useState("")


    useEffect(() => {
        axios.get('http://localhost:3001/server/premium/' + path)
            .then((result) => {
                console.log(result)
                setImage(result.data.photo)
            })
            .catch(err => console.log(err))
    }, [path])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/server/address/addAddress", {
            firstname,
            lastname,
            email,
            address,
            phone,
            phoneAlt,
            pincode,
            state,
            country,
            city
        })
            .then(result => {
                console.log(result)
                navigate(`/checkoutPremium/${path}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <Wrapper image={image}>
            <LeftBx>
                <form className="address" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="" id="" placeholder="Firstname" required className="half" onChange={(e) => setFn(e.target.value)} />
                        <input type="text" name="" id="" placeholder="Lastname" required className="half" onChange={(e) => setLn(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" pattern="[0-9]*" name="" id="" required placeholder="Phone" className="half" inputmode="none" onChange={(e) => setPhone(e.target.value)} />
                        <input type="text" pattern="[0-9]*" name="" id="" placeholder="Alternate Phone" className="half" inputmode="none" onChange={(e) => setPhoneAlt(e.target.value)} />
                    </div>
                    <input type="email" name="" id="" placeholder="Email" required style={{ height: "55px" }} className="full" onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="" id="" cols="30" rows="5" placeholder="Address" required className="full" onChange={(e) => setAddress(e.target.value)} />
                    <div>
                        <input type="text" pattern="[0-9]*" name="" id="" required placeholder="Postal Code" className="half" inputmode="none" onChange={(e) => setPincode(e.target.value)} />
                        <input type="text" name="" id="" placeholder="City" required className="half" onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div>
                        <input type="text" name="" id="" placeholder="State" required className="half" onChange={(e) => setState(e.target.value)} />
                        <input type="text" name="" id="" placeholder="Country" required className="half" onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <button className="buttonAlt" style={{ backgroundColor: "#000", color: "#fff" }} type="submit">Checkout</button>
                </form>
            </LeftBx>
        </Wrapper>
    );
}

export default OrderPremium;