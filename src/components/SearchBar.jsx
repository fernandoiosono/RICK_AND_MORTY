import styled from "styled-components";

export default function SearchBar(props) {
   return (
      <>
         <InputID type='search' />
         <ButtonAdd onClick={props.onSearch} style={{cursor: 'pointer'}}> Agregar </ButtonAdd>
      </>
   );
}

const InputID = styled.input`
   height: 30px;
   border: 2px solid black;
   border-radius: 5px 0 0 5px;
   text-align: center;
   background: rgba(255, 255, 255, 0.7);
`;

const ButtonAdd = styled.button`
   height: 30px;
   border: 2px solid black;
   border-radius: 0 5px 5px 0;
   border-left: none;
   background-color: black;
   color: white;
   font-weight: bold;
`;