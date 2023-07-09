import { useRef } from "react";
import styled from "styled-components";
import { addCharacter } from "../redux/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { validateNewIDChar } from "../js/validations.js";

const SearchBar = () => {
    let idChar;
    const dispatch = useDispatch();
    const inputSearch = useRef(null);
	const allCharacters = useSelector((state) => state.allCharacters);
    
	const cleanInput = () => {
        inputSearch.current.value = "";
		inputSearch.current.focus();
	};

	const handleChangeID = (e) => {
		idChar = e.target.value;
	};

	const handleAddChar = () => {
		if (validateNewIDChar(idChar, allCharacters)) dispatch(addCharacter(idChar));

		cleanInput(); // Clean de input no matter what happens before
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") handleAddChar();
	};

	return (<>
        <InputID ref={inputSearch} type="search" onChange={handleChangeID} onKeyDown={handleKeyDown} autoFocus />
        <ButtonAdd onClick={handleAddChar}>Add Card</ButtonAdd>
    </>);
};

const InputID = styled.input`
	height: 30px;
	border: 2px solid black;
	border-radius: 5px 0 0 5px;
	text-align: center;
	background: rgba(255, 255, 255, 0.5);

	&:hover { background: rgba(255, 255, 255, 1); }
`;

const ButtonAdd = styled.button`
	height: 30px;
	width: 100px;
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

export default SearchBar;