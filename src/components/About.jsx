import styled from "styled-components";

const About = () => {
    const presentacion = "Hola! Mi nombre es Fernando Venegas y soy el desarollador de este proyecto :) \n Aquí podrás encontrar a cada uno de los 827 personajes de la serie de Rick & Morty";
    return (
        <DivAbout>
            <h1>Rick & Morty Project</h1>

            <p>Hola! Mi nombre es Fernando Venegas y soy el desarollador de este proyecto :)</p>

            <p>Aquí podrás encontrar a cada uno de los 826 personajes de la serie de Rick & Morty</p>
        </DivAbout>
    );
};

const DivAbout = styled.div`
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
`;

export default About;