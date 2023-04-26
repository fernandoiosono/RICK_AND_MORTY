import styled from "styled-components";
import { useEffect, useState, useRef, useContext } from "react";
import { CharactersContext, FuncSearch } from "../js/contexts.js";

export default function SearchBar(props) {
   let inputVal = "";

   const inputSearch = useRef(null);
   const characters = useContext(CharactersContext);
   const jsonTemplate = "https://rickandmortyapi.com/api/character/";
   
   const [ idChar, setIdChar ] = useState(2);
   const [ character, setCharacter ] = useState({
      idChar: 0,
      name: "",
      species: "",
      gender: "",
      image: ""
   });

   useEffect(() => {
      fetch(jsonTemplate + idChar)
         .then((response) => response.json())
         .then((data) =>
            setCharacter({
               ...character,
               idChar: data.id,
               name: data.name,
               species: data.species,
               gender: data.gender,
               image: data.image
            })
         )
         .catch((error) => console.log(error))
   }, [idChar]);

   function guardarID(event) {
      inputVal = event.target.value;
   }

   function searchChar() {
      if (validateChar()) {
         setIdChar(inputVal);

         if (character.name !== undefined) {
            // console.log(character);
            // props.onSearch(character);
         } else {
            inputSearch.current.select();
         }
      } else {
         inputSearch.current.select();
      }
   }

   function validateChar() {
      let order = "Ingresa un número del 1 al 826.";
   
      switch (true) {
         case (inputVal < 1 || inputVal > 826):
            alert(`${order}`);
            return false;
         case (isNaN(inputVal)):
            alert(`Este campo sólo acepta números por el momento. \n ${order}`);
            return false;
         case (characters.filter(char => char.idChar == inputVal).length > 0):
            alert("El personaje seleccionado ya existe, selecciona otro.");
            return false;
      }
   
      return true;
   }

   return (
      <>
         <InputID ref={inputSearch} type='search' onChange={guardarID}/>
         <ButtonAdd onClick={searchChar}> Agregar </ButtonAdd>
      </>
   );
}

const InputID = styled.input`
   height: 30px;
   border: 2px solid black;
   border-radius: 5px 0 0 5px;
   text-align: center;
   background: rgba(255, 255, 255, 0.7);

   &:hover {
      background: rgba(255, 255, 255, 1);
   }
`;

const ButtonAdd = styled.button`
   height: 30px;
   border: 2px solid black;
   border-radius: 0 5px 5px 0;
   border-left: none;
   background-color: black;
   color: white;
   font-weight: bold;

   &:hover {
      cursor: pointer;
      background-color: rgb(46, 204, 113);
      color: black;
   }
`;