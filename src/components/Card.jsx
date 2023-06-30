import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FnCloseCardContext } from "../js/contexts.js";
import { addFavorite, delFavorite } from "../redux/actions.js"

const Card = (props) => {
	const closeCard = useContext(FnCloseCardContext);
	const { id, name, image } = props.args;

	return (
		<ArticleCard>
			<HeaderCard>
				<Link to={`/carddetail/${id}`} style={{ textDecoration: "none", color: "purple" }}>
					<PName>{name}</PName>
				</Link>
			</HeaderCard>
			<main>
				<ImgCard src={image} alt="Char Photo" />
			</main>
			<footer>
				<ButtonFav>🖤</ButtonFav>
				<ButtonClose onClick={() => { closeCard(id); }}>❌</ButtonClose>
			</footer>
		</ArticleCard>
	);
};

const ArticleCard = styled.article`
	background: rgba(255, 255, 255, 0.7);
	padding: 0 15px 15px 15px;
	margin: 15px;
	width: 205px;
	border-radius: 5px;
	/* justify-content: center; */

	&:hover { background: white; };
`;

const HeaderCard = styled.header`
	height: 30px;
	margin-bottom: 10px;
`;

const PName = styled.p`
	font-weight: bold;

	&:hover { cursor: pointer; }
`;

const ImgCard = styled.img`
	border: 2px solid black;
	width: 98%;
	border-radius: 5px;
	margin: 10px 0 10px 0;
`;

const Button = styled.button`
	width: 50%;
	height: 30px;
	color: black;
	font-weight: bold;
	border: 2px solid black;
	background-color: white;

	&:hover { cursor: pointer; }
`;

const ButtonFav = styled(Button)`
	border-right: none;
	border-radius: 5px 0 0 5px;
`;

const ButtonClose = styled(Button)`
	border-radius: 0 5px 5px 0;
`;

const BtnCloseCard = styled.button`
	/* float: right; */
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

export default Card;