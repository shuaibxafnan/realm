import { useEffect, useState } from "react";
import axios from "axios";

const Confirm = () => {

    const pathOne = location.pathname.split('/')[2];
    const pathTwo = location.pathname.split('/')[3];
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/server/card/orderDetails/${pathOne}/${pathTwo}`)
            .then((result) => {
                setDetails(result.data)
            })
            .catch(err => console.log(err))
    }, [pathOne, pathTwo])

    return (
        <section className="confirmWrapper">
            {details.map((d) => (
                <div className="confirmBx">
                    <div className="confirmImg">
                        <img src={d.image} alt="" />
                    </div>
                    <div className="confirmDiv">
                        <div className="confirmTxt">
                            <span>{d.orderType} Successfull</span>
                            <span>{new Date(d.createdAt).toDateString()}</span>
                        </div>
                        <div className="confirmStamp">
                            <span>{d.model}</span>
                            <span>Amount - ${d.amount}</span>
                        </div>
                    </div>

                </div>
            ))}
        </section>
    );
}

export default Confirm;