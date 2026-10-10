import styled from "styled-components";

const Wrapper = styled.div`
    padding: 3em;
    display: flex;
    flex-direction: column;
    gap: 3em;
`

const TeamHolder = styled.div`
    display: flex;
    justify-content: center;
    gap: 1em;
`
const Person = styled.div`
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 500px;
    width: 25%;
    display: flex;
    align-items: flex-end;
    overflow: hidden;

    &:nth-child(1) {
        border-bottom-left-radius: 5em;
    }

    &:nth-child(5) {
        border-top-right-radius: 5em;
    }
    
`

const PersonBx = styled.div`
    padding: 2em;
    background-color: rgba(255,255,255,1);
    text-align: end;
    display: flex;
    flex-direction: column;
    gap: .5em;
    position: relative;
    top: 200px;
    transition: all .5s ease;
    width: 100%;

    ${Person}:nth-child(1) & {
        border-bottom-left-radius: 5em;
    }

    ${Person}:hover & {
        top: 0px;
    }
    
`

const PersonName = styled.h4`
    font-size: 2em;
    text-transform: uppercase;
`

const PersonRole = styled.h6`
    font-size: 1em;
    color: rgba(0,0,0,0.8);
`

const ContentBx = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: .25em;
`

const Title = styled.h4`
    font-size: 5em;
    font-family: kaushan script;
`

const Text = styled.p`
    font-size: 1.5em;
`

const People = ({ teamContent }) => {
    return (
        <Wrapper>
            <ContentBx>
                <Title>Team</Title>
                <Text>Meet our talented team.</Text>
            </ContentBx>
            <TeamHolder>
                {teamContent.map((t) => (
                    <Person image={t.image}>
                        <PersonBx>
                            <PersonName>{t.name}</PersonName>
                            <PersonRole>{t.role}</PersonRole>
                        </PersonBx>
                    </Person>
                ))}
            </TeamHolder>
        </Wrapper>
    );
}

export default People;