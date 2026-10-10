import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WrapperCat = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em 3em;
    color: #000;
    gap: 3em;
`

const ContentBx = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .5em;
`

const Title = styled.h4`
    font-size: 5em;
    font-family: kaushan script;
`

const Text = styled.p`
    font-size: 1.5em;
`

const CatBox = styled.div`
    position: relative;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WrapperBx = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const WrapperImg = styled.div`
    position: absolute;
    width: 550px;
    height: 500px;
    top: 50px;
    left: 300px;
    transition: all 0.5s ease-in-out;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotate(-10deg);
    border-radius: 4em;
`

const ItemBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    border-bottom: 1px solid rgba(0,0,0,0.25);
    border-top: 1px solid rgba(0,0,0,0.25);
    padding: 1em 2em;
    cursor: pointer;

    &:nth-child(1) {
        border-top: 2px solid rgba(0,0,0,0.25);
    }

    &.dark {
        border-bottom: 2px solid rgba(0,0,0,0.25);
    }

`

const Item = styled.h4`
    font-size: 3.5em;
    font-weight: 100;
`

const ItemId = styled.h4`
    font-size: 3.5em;
    font-weight: 100;
`


const Category = () => {

    const [selected, setSelected] = useState("Sedan");

    const handleChange = (item) => {
        setSelected(item);
    }

    const imagesData = (item) => {
        switch (item) {
            case "Sedan":
                return "https://images.unsplash.com/photo-1605515290650-163dc018d4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
            case "Suv":
                return "https://images.unsplash.com/photo-1687327825378-01303a35590f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            case "Sports":
                return "https://images.unsplash.com/photo-1583427053896-00378e61e661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            case "Luxury":
                return "https://images.unsplash.com/photo-1620009666855-7b6cb4998c83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            case "Coupe":
                return "https://images.unsplash.com/photo-1686132214854-a7099516d308?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            default:
                return "https://images.unsplash.com/photo-1605515290650-163dc018d4d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
        }
    }


    return (

        <WrapperCat>
            <ContentBx>
                <Title>Categories</Title>
                <Text>Select your preffered one.</Text>
            </ContentBx>

            <CatBox>

                <WrapperBx>
                    <Link className="link" to={`/category/Sedan`}><ItemBox onMouseEnter={() => handleChange("Sedan")}
                        selected={selected === "Sedan"}>
                        <ItemId>01</ItemId>
                        <Item>Sedan</Item>
                    </ItemBox></Link>

                    <Link className="link" to={`/category/Suv`}><ItemBox onMouseEnter={() => handleChange("Suv")}
                        selected={selected === "Suv"}>
                        <ItemId>02</ItemId>
                        <Item>Suv</Item>
                    </ItemBox></Link>

                    <Link className="link" to={`/category/Cabrio`}><ItemBox onMouseEnter={() => handleChange("Luxury")}
                        selected={selected === "Luxury"}>
                        <ItemId>03</ItemId>
                        <Item>Cabrio</Item>
                    </ItemBox></Link>

                    <Link className="link" to={`/category/Sports`}><ItemBox onMouseEnter={() => handleChange("Sports")}
                        selected={selected === "Sports"}>
                        <ItemId>04</ItemId>
                        <Item>Sports</Item>
                    </ItemBox></Link>

                    <Link className="link" to={`/category/Coupe`}><ItemBox className="dark" onMouseEnter={() => handleChange("Coupe")}
                        selected={selected === "Coupe"}>
                        <ItemId>05</ItemId>
                        <Item>Coupe</Item>
                    </ItemBox></Link>
                </WrapperBx>

                <WrapperImg>
                    {selected !== "Sedan" ? (<Image src={imagesData(selected)} />) : (<Image src={imagesData("Sedan")} />)}
                </WrapperImg>

            </CatBox>
        </WrapperCat>

    );

}

export default Category;