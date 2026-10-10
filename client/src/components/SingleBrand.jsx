import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import CatBrand from "./CatBrand";

const SingleBrand = () => {

    const path = location.pathname.split('/')[2];
    const [cars, setCars] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/server/cars/brand/" + path)
            .then(result =>
                setCars(result.data)
            )
            .catch(err => console.log(err))
    }, [path])

    return (
        <>
            <CatBrand cars={cars} path={path} text={"Made By"} />
            <Footer />
        </>
    );
}

export default SingleBrand;