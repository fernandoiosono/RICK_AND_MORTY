import { useContext } from "react";
import styled from "styled-components";
import { FnCloseCardContext } from "../js/contexts.js";
import { Link } from "react-router-dom";

const Card = (props) => {
	const closeCard = useContext(FnCloseCardContext);
	const { id, name, image } = props.args;

	return (
		<ArticleCard>
			<header>
				<Link to={`/carddetail/${id}`} 
               style={{ textDecoration: "none", color: "purple" }}>
					   <H2NameCard>{id + " - " + name}</H2NameCard>
				</Link>
				<BtnCloseCard onClick={() => { closeCard(id); }}>X</BtnCloseCard>
			</header>
			<main>
				<ImgCard src={image} alt="Char Photo" />
			</main>
		</ArticleCard>
	);
};

const ArticleCard = styled.article`
	background: rgba(255, 255, 255, 0.7);
	padding: 15px;
	margin: 15px;
	width: 205px;
	border-radius: 5px;

	&:hover {
		background: rgba(255, 255, 255, 1);
		width: 210px;
	}
`;

const H2NameCard = styled.h4`
	float: left;

	&:hover {
		cursor: pointer;
	}
`;

const BtnCloseCard = styled.button`
	float: right;
	border: 2px solid black;
	color: black;
	background-color: transparent;
	font-weight: bold;
	border-radius: 5px;

	&:hover {
		cursor: pointer;
		background-color: red;
		color: white;
	}
`;

const ImgCard = styled.img`
	border: 2px solid black;
	width: 98%;
	border-radius: 5px;
`;

export default Card;