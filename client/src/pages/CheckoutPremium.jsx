import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    padding: 2em;
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);
`

const LeftBx = styled.div`
    flex: 7;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    transition: .3s ease;
    display: flex;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`

const RightBx = styled.div`
    flex: 3;
    display: flex;
    width: 100%;
    background-color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    flex-direction: column;
    padding: 3em;
`

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        font-size: 1.5em;
    }

    span:nth-child(1) {
        text-transform: uppercase;
        font-weight: 1000;
    }
`

const CheckoutPremium = () => {

    const path = location.pathname.split('/')[2];
    const [image, setImage] = useState();
    const [price, setPrice] = useState("")
    const [rentPrice, setRentPrice] = useState("")
    const [model, setModel] = useState()
    const [cvv, setCvv] = useState("")
    const [name, setName] = useState("")
    const [cardnumber, setCardNumber] = useState("")
    const [cardYear, setCardYear] = useState("")
    const [cardMonth, setCardMonth] = useState("")
    const [orderType, setOrderType] = useState()
    const [brand, setBrand] = useState("")
    const navigate = useNavigate()
    const [amount, setAmount] = useState()


    useEffect(() => {
        axios.get("http://localhost:3001/server/premium/" + path)
            .then(result => {
                console.log(result)
                setImage(result.data.photo)
                setPrice(result.data.price)
                setModel(result.data.model)
                setBrand(result.data.brand)
                setRentPrice(result.data.rentPrice)
            })
            .catch(err => console.log(err))
    }, [path])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/server/card/cardInsert", {
            name,
            cardnumber,
            cvv,
            expiry: `${cardMonth}/${cardYear}`,
            model,
            orderType,
            image,
            amount,
            brand
        })
            .then(result => {
                console.log(result)
                navigate(`/confirm/${name}/${model}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <Wrapper>
            <LeftBx img={image}>

            </LeftBx>
            <RightBx>
                <form className="formBx" onSubmit={handleSubmit}>
                    <div className="divDiv">
                        <span className="nameSpan">{model}</span>
                        <h6 className="brandSpan">By {brand}</h6>
                    </div>
                    <div className="formDiv">
                        <label htmlFor="name">Enter Card Holder Name</label>
                        <input type="text" name="name" id="" placeholder="Card holder name" maxLength={16} className="preip" onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="number">Enter Your Card Number</label>
                        <input type="text" maxLength={16} name="number" id="" placeholder="Card Number" className="preip" onChange={(e) => setCardNumber(e.target.value)} />
                        <div className="imps">
                            <div className="impAlt">
                                <input type="text" name="Expiry" id="" maxLength={2} placeholder="YY" required onChange={(e) => setCardYear(e.target.value)} />
                                <input type="text" name="Expiry" id="" maxLength={2} placeholder="MM" required onChange={(e) => setCardMonth(e.target.value)} />
                            </div>
                            <div className="imp">
                                <input type="text" maxLength={3} name="CVV" id="" placeholder="CVV" required onChange={(e) => setCvv(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <Div>
                        <div>
                            <span>total</span>
                            <span>{price}</span>
                        </div>
                        <button txt={price} className="buttonAlt" style={{ backgroundColor: "#000", color: "#fff" }} onClick={() => { setOrderType("Buy"), setAmount(price) }} type="submit">Purchase</button>
                    </Div>
                </form>
            </RightBx>
        </Wrapper>
    );
}

export default CheckoutPremium;