import styled from "styled-components";
import stat from "../../assets/images/fluid.png";

const Wrapper = styled.div`
    padding: 5em 0em;
`

const UsRight = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 375px;
`

const Blocks = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    gap: 2em;
`

const BlockImg = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 400px;
    height: 300px;
    object-fit: cover;
`

const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5em;
    padding: 1em;
    transform: skew(-15deg);
    width: 200px;
    position: relative;
    border-radius: .75em;
    background: linear-gradient(to right, #ef4db8 50%, #ca2985);
    transition: all .5s ease;
    color: #fff;
`

const BlockId = styled.h5`
    font-size: 1.25em;
    text-align: center;
`

const BlockName = styled.p`
    text-align: center;
`

const Us = ({ blockContent }) => {

    return (
        <Wrapper>
            
                <UsRight>
                    <BlockImg>
                        <Image src={stat} />
                    </BlockImg>
                    <Blocks>
                        {blockContent.map((b) => (
                            <Block>
                                <BlockId>{b.stat}</BlockId>
                                <BlockName>{b.name}</BlockName>
                            </Block>
                        ))}
                    </Blocks>
                </UsRight>
           
        </Wrapper>
    );
}

export default Us;