import styled from "styled-components";
import Hero from "../components/HomeComponents/Hero";
import Category from "../components/HomeComponents/Category";
import Brands from "../components/HomeComponents/Brand";
import Footer from "../components/Footer";
import Products from "../components/HomeComponents/Products";
import PremiumProducts from "../components/HomeComponents/PremiumProducts";
// import Dropdown from "../components/HomeComponents/Dropdown";

const HomePage = styled.div`
    width: 100%;
`

const brandContent = [
    {
        id: "01.",
        name: "Toyota",
        image: "https://images.unsplash.com/photo-1620882788693-cd891b20837d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
    },
    {
        id: "02.",
        name: "Ford",
        image: "https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: "03.",
        name: "Nissan",
        image: "https://images.unsplash.com/photo-1602977050077-a669542f8dd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: "04.",
        name: "Audi",
        image: "https://images.unsplash.com/photo-1603803648693-d0659d886b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: "05.",
        name: "Bmw",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
        id: "06.",
        name: "Chevrolet",
        image: "https://images.unsplash.com/photo-1594138970034-04c23848fbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
]

const Home = () => {
    return (
        <HomePage>
            <Hero />
            <Category />
            <Brands brandContent={brandContent} />
            <Products />
            <PremiumProducts />
            <Footer />
        </HomePage>
    );
}

export default Home;