import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FnCloseCardContext } from "../js/contexts.js";
import { addFavorite, delFavorite } from "../redux/actions.js"
import { useSelector, useDispatch } from "react-redux";

const Card = (props) => {
	const dispatch = useDispatch();
	const closeCard = useContext(FnCloseCardContext);
	const { id, name, image, isFav } = props.args;

	const handleFavorite = (isFavorite, id, name, image) => {
		// console.log(isFavorite, id, name, image);
		if (isFavorite) {
			dispatch(delFavorite(id));
		} else {
			dispatch(addFavorite(id, name, image));
		}
	};

	return (
		<ArticleCard>
			<Link to={`/carddetail/${id}`} style={{ textDecoration: "none", color: "purple" }} title={id}>
				<HeaderCard>
					<PName>{name}</PName>
				</HeaderCard>
				<main>
					<ImgCard src={image} alt="Char Photo" />
				</main>
			</Link>
			<footer>
				{
					isFav ? (
						<ButtonFav onClick={() => { handleFavorite(isFav, id, name, image); }}>❤️</ButtonFav>		
					) : (
						<ButtonFav onClick={() => { handleFavorite(isFav, id, name, image); }}>🖤</ButtonFav>
					)
				}
				<ButtonClose onClick={() => { closeCard(id); }}>❌</ButtonClose>
			</footer>
		</ArticleCard>
	);
};

const ArticleCard = styled.article`
	margin: 15px;
	width: 205px;
	border-radius: 5px;
	padding: 0 15px 15px 15px;
	background: rgba(255, 255, 255, 0.7);

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
	width: 98%;
	border-radius: 5px;
	margin: 10px 0 10px 0;
	border: 2px solid black;
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

export default Card;