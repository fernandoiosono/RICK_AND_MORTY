import styled from "styled-components";

const About = () => {
    return (
        <DivAbout>
            <h1>Rick & Morty Project</h1>
        </DivAbout>
    );
};

const DivAbout = styled.div`
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
`;

export default About;