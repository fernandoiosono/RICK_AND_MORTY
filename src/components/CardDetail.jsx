import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardDetail = () => {
    const navigate = useNavigate();
    const { id, name, species, gender } = useParams();
    const jsonTemplate = "https://rickandmortyapi.com/api/character/";

    const [ idChar, setIdChar ] = useState(0);
    const [ character, setCharacter ] = useState({
        status: "",
        type: "",
        origin: "", // origin.name
        location: "", // location.name
        image: "",
        created: ""
    });

    useEffect(() => {
        setIdChar(id);
    }, []);

    useEffect(() => {
        if (idChar !== 0) {
            fetch(jsonTemplate + idChar)
            .then((response) => response.json())
            .then((data) => 
                setCharacter({
                    ...character,
                    status: data.status,
                    type: data.type,
                    origin: data.origin.name,
                    location: data.location.name,
                    image: data.image,
                    created: data.created
                })
            )
            .catch((error) => console.log(error));
        }
        return () => setCharacter({});
    }, [idChar]);

    return (
        <DivDetail>
            <BtnBack onClick={ () => {navigate("/home")} }>Volver</BtnBack>
            <ImgChar src={character.image} alt="Character Image" />
            <h1>Name</h1>
            <h3>{name}</h3>
            <h1>Species</h1>
            <h3>{species}</h3>
            <h1>Gender</h1>
            <h3>{gender}</h3>
            <h1>Status</h1>
            <h3>{character.status}</h3>
        </DivDetail>
    );
};

const DivDetail = styled.div``;

const ImgChar = styled.img``;

const BtnBack = styled.button``;

export default CardDetail;